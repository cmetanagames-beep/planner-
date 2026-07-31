import 'dotenv/config';
const GROQ_KEYS = [process.env.GROQ_KEY_1, process.env.GROQ_KEY_2, process.env.GROQ_KEY_3].filter(Boolean);
let _keyIdx = 0;
import express from 'express';
import cors from 'cors';
import webpush from 'web-push';
import Database from 'better-sqlite3';
import { spawn } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

const app = express();
app.use(cors());
app.use(express.json({ limit: '8mb' }));

const db = new Database('planner.db');

db.exec(`CREATE TABLE IF NOT EXISTS subs (userId TEXT PRIMARY KEY, subscription TEXT)`);
db.exec(`CREATE TABLE IF NOT EXISTS userData (userId TEXT PRIMARY KEY, tasks TEXT, notifyHour TEXT, tzOffset INTEGER, sentKeys TEXT, reminders TEXT)`);
db.exec(`CREATE TABLE IF NOT EXISTS familyMembers (userId TEXT PRIMARY KEY, familyCode TEXT, name TEXT, role TEXT DEFAULT 'other')`);
try { db.exec(`ALTER TABLE familyMembers ADD COLUMN role TEXT DEFAULT 'other'`); } catch (e) {}
db.exec(`CREATE TABLE IF NOT EXISTS inbox (id TEXT PRIMARY KEY, toUserId TEXT, fromUserId TEXT, fromName TEXT, task TEXT, ts INTEGER)`);
try { db.exec(`ALTER TABLE inbox ADD COLUMN fromUserId TEXT`); } catch (e) {}
db.exec(`CREATE TABLE IF NOT EXISTS shopping (familyCode TEXT PRIMARY KEY, items TEXT)`);
db.exec(`CREATE TABLE IF NOT EXISTS doneStat (id INTEGER PRIMARY KEY AUTOINCREMENT, userId TEXT, name TEXT, date TEXT, ts INTEGER)`);
db.exec(`CREATE TABLE IF NOT EXISTS pushEvents (eventId TEXT PRIMARY KEY, ts INTEGER)`);
db.exec(`CREATE TABLE IF NOT EXISTS cloudData (code TEXT PRIMARY KEY, data TEXT NOT NULL, revision INTEGER NOT NULL DEFAULT 1, updatedAt INTEGER NOT NULL, updatedBy TEXT)`);
db.exec(`CREATE TABLE IF NOT EXISTS cloudDevices (userId TEXT PRIMARY KEY, code TEXT NOT NULL)`);
db.exec(`CREATE TABLE IF NOT EXISTS eventFeed (id TEXT PRIMARY KEY, targetUserId TEXT NOT NULL, familyCode TEXT, type TEXT, title TEXT, body TEXT, data TEXT, ts INTEGER, readAt INTEGER)`);
try { db.exec(`ALTER TABLE inbox ADD COLUMN status TEXT DEFAULT 'pending'`); } catch (e) {}
try { db.exec(`ALTER TABLE inbox ADD COLUMN comment TEXT DEFAULT ''`); } catch (e) {}
try { db.exec(`ALTER TABLE inbox ADD COLUMN respondedAt INTEGER`); } catch (e) {}
db.prepare('DELETE FROM pushEvents WHERE ts < ?').run(Date.now() - 30 * 24 * 60 * 60 * 1000);
db.prepare('DELETE FROM eventFeed WHERE ts < ?').run(Date.now() - 120 * 24 * 60 * 60 * 1000);

function saveSub(userId, subscription) {
  db.prepare(`INSERT INTO subs (userId, subscription) VALUES (?, ?) ON CONFLICT(userId) DO UPDATE SET subscription = excluded.subscription`).run(userId, JSON.stringify(subscription));
}
function getSub(userId) {
  const row = db.prepare('SELECT subscription FROM subs WHERE userId = ?').get(userId);
  return row ? JSON.parse(row.subscription) : null;
}
function deleteSub(userId) {
  db.prepare('DELETE FROM subs WHERE userId = ?').run(userId);
}

function saveUserData(userId, u) {
  db.prepare(`INSERT INTO userData (userId, tasks, notifyHour, tzOffset, sentKeys, reminders) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(userId) DO UPDATE SET tasks = excluded.tasks, notifyHour = excluded.notifyHour, tzOffset = excluded.tzOffset, sentKeys = excluded.sentKeys, reminders = excluded.reminders`).run(
    userId,
    JSON.stringify(u.tasks || []),
    u.notifyHour || '09:00',
    typeof u.tzOffset === 'number' ? u.tzOffset : 180,
    JSON.stringify(u.sentKeys || {}),
    JSON.stringify(u.reminders || {})
  );
}
function getUserData(userId) {
  const row = db.prepare('SELECT * FROM userData WHERE userId = ?').get(userId);
  if (!row) return null;
  return {
    tasks: JSON.parse(row.tasks || '[]'),
    notifyHour: row.notifyHour || '09:00',
    tzOffset: row.tzOffset || 180,
    sentKeys: JSON.parse(row.sentKeys || '{}'),
    reminders: JSON.parse(row.reminders || '{}')
  };
}
function getAllUserData() {
  const rows = db.prepare('SELECT userId FROM userData').all();
  return rows.map(r => r.userId);
}

function makeFamilyCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}
function saveMember(userId, familyCode, name, role) {
  db.prepare(`INSERT INTO familyMembers (userId, familyCode, name, role) VALUES (?, ?, ?, ?) ON CONFLICT(userId) DO UPDATE SET familyCode = excluded.familyCode, name = excluded.name, role = excluded.role`).run(userId, familyCode, name, role || 'other');
}
function getMember(userId) {
  return db.prepare('SELECT * FROM familyMembers WHERE userId = ?').get(userId);
}
function getFamilyMembers(familyCode) {
  return db.prepare('SELECT userId, name, role FROM familyMembers WHERE familyCode = ?').all(familyCode);
}

function makeSyncCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  do {
    code = '';
    for (let i = 0; i < 12; i++) code += chars[Math.floor(Math.random() * chars.length)];
  } while (db.prepare('SELECT 1 FROM cloudData WHERE code = ?').get(code));
  return code;
}
function addFeedEvent(targetUserId, familyCode, type, title, body, data = {}, eventId = '') {
  if (!targetUserId) return;
  const id = String((eventId || (type + '_' + Date.now())) + ':' + targetUserId).slice(0, 240);
  db.prepare(`INSERT OR IGNORE INTO eventFeed (id, targetUserId, familyCode, type, title, body, data, ts, readAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NULL)`)
    .run(id, targetUserId, familyCode || '', type || 'info', title || 'Lumo', body || '', JSON.stringify(data || {}), Date.now());
}

const PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY || '';
const PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || '';
const VAPID_EMAIL = process.env.VAPID_EMAIL || 'mailto:admin@example.com';
if (!PUBLIC_KEY || !PRIVATE_KEY) {
  throw new Error('VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY must be set in server/.env');
}
webpush.setVapidDetails(VAPID_EMAIL, PUBLIC_KEY, PRIVATE_KEY);

function claimPushEvent(eventId) {
  if (!eventId) return true;
  return db.prepare('INSERT OR IGNORE INTO pushEvents (eventId, ts) VALUES (?, ?)')
    .run(String(eventId).slice(0, 200), Date.now()).changes > 0;
}

async function sendPush(userId, titleOrPayload, body, taskId) {
  const sub = getSub(userId);
  if (!sub) return false;
  const payload = typeof titleOrPayload === 'object' && titleOrPayload
    ? titleOrPayload
    : { title: titleOrPayload, body, taskId };
  try {
    await webpush.sendNotification(sub, JSON.stringify(payload));
    console.log('Отправлено', userId, payload.title);
    return true;
  } catch (e) {
    console.log('Ошибка отправки', userId, e.message);
    if (e.statusCode === 404 || e.statusCode === 410) deleteSub(userId);
    return false;
  }
}

app.get('/key', (req, res) => res.json({ key: PUBLIC_KEY }));

app.post('/subscribe', (req, res) => {
  const { userId, subscription } = req.body;
  if (!userId || !subscription) return res.json({ ok: false, err: 'нет userId/subscription' });
  saveSub(userId, subscription);
  console.log('Подписан:', userId);
  res.json({ ok: true });
});

app.post('/cloud/create', (req, res) => {
  const { userId, data } = req.body || {};
  if (!userId || !data) return res.json({ ok: false, err: 'нет данных' });
  const code = makeSyncCode(), now = Date.now();
  db.prepare('INSERT INTO cloudData (code, data, revision, updatedAt, updatedBy) VALUES (?, ?, 1, ?, ?)').run(code, JSON.stringify(data), now, userId);
  db.prepare('INSERT INTO cloudDevices (userId, code) VALUES (?, ?) ON CONFLICT(userId) DO UPDATE SET code=excluded.code').run(userId, code);
  res.json({ ok: true, code, revision: 1, updatedAt: now });
});

app.post('/cloud/connect', (req, res) => {
  const userId = String(req.body?.userId || ''), code = String(req.body?.code || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  const row = db.prepare('SELECT code, revision, updatedAt FROM cloudData WHERE code = ?').get(code);
  if (!userId || !row) return res.json({ ok: false, err: 'Код синхронизации не найден' });
  db.prepare('INSERT INTO cloudDevices (userId, code) VALUES (?, ?) ON CONFLICT(userId) DO UPDATE SET code=excluded.code').run(userId, code);
  res.json({ ok: true, code, revision: row.revision, updatedAt: row.updatedAt });
});

app.post('/cloud/sync', (req, res) => {
  const { userId, data, baseRevision, action } = req.body || {};
  const device = db.prepare('SELECT code FROM cloudDevices WHERE userId = ?').get(userId);
  if (!device) return res.json({ ok: false, err: 'Синхронизация не подключена' });
  const row = db.prepare('SELECT * FROM cloudData WHERE code = ?').get(device.code);
  if (!row) return res.json({ ok: false, err: 'Облачная копия не найдена' });
  if (action === 'pull' || data == null) return res.json({ ok: true, code: row.code, data: JSON.parse(row.data), revision: row.revision, updatedAt: row.updatedAt });
  if (action !== 'force' && Number(baseRevision || 0) !== Number(row.revision)) {
    return res.json({ ok: false, conflict: true, server: { data: JSON.parse(row.data), revision: row.revision, updatedAt: row.updatedAt } });
  }
  const revision = row.revision + 1, now = Date.now();
  db.prepare('UPDATE cloudData SET data = ?, revision = ?, updatedAt = ?, updatedBy = ? WHERE code = ?').run(JSON.stringify(data), revision, now, userId, row.code);
  res.json({ ok: true, code: row.code, revision, updatedAt: now });
});

app.post('/cloud/disconnect', (req, res) => {
  db.prepare('DELETE FROM cloudDevices WHERE userId = ?').run(req.body?.userId || '');
  res.json({ ok: true });
});

app.post('/events/list', (req, res) => {
  const userId = req.body?.userId;
  if (!userId) return res.json({ ok: false, err: 'нет userId' });
  const rows = db.prepare('SELECT * FROM eventFeed WHERE targetUserId = ? ORDER BY ts DESC LIMIT 120').all(userId);
  res.json({ ok: true, events: rows.map(r => ({ ...r, data: JSON.parse(r.data || '{}'), read: !!r.readAt })) });
});
app.post('/events/read', (req, res) => {
  const { userId, ids } = req.body || {};
  if (!userId) return res.json({ ok: false });
  if (Array.isArray(ids) && ids.length) {
    const mark = db.prepare('UPDATE eventFeed SET readAt = ? WHERE id = ? AND targetUserId = ?');
    const tx = db.transaction(() => ids.slice(0, 200).forEach(id => mark.run(Date.now(), id, userId))); tx();
  } else db.prepare('UPDATE eventFeed SET readAt = ? WHERE targetUserId = ?').run(Date.now(), userId);
  res.json({ ok: true });
});

app.post('/sync', (req, res) => {
  const { userId, tasks, notifyHour, tzOffset } = req.body;
  if (!userId) return res.json({ ok: false, err: 'нет userId' });
  const existing = getUserData(userId) || { sentKeys: {}, reminders: {} };
  existing.tasks = Array.isArray(tasks) ? tasks : [];
  existing.notifyHour = notifyHour || '09:00';
  existing.tzOffset = typeof tzOffset === 'number' ? tzOffset : 180;
  saveUserData(userId, existing);
  console.log('Синхронизация от ' + userId + ': ' + existing.tasks.length + ' задач');
  res.json({ ok: true, count: existing.tasks.length });
});

app.post('/test', async (req, res) => {
  const { userId } = req.body;
  const sub = getSub(userId);
  if (!sub) return res.json({ ok: false, err: 'нет подписки' });
  try {
    await webpush.sendNotification(sub, JSON.stringify({ title: 'Тест', body: 'Пуш работает!' }));
    res.json({ ok: true });
  } catch (e) {
    res.json({ ok: false, err: e.message });
  }
});

app.post('/family/create', (req, res) => {
  const { userId, name, role } = req.body;
  if (!userId || !name) return res.json({ ok: false, err: 'нет userId или имени' });
  let code;
  do { code = makeFamilyCode(); }
  while (db.prepare('SELECT 1 FROM familyMembers WHERE familyCode = ?').get(code));
  saveMember(userId, code, name, role);
  console.log('Создана семья ' + code + ' пользователем ' + name);
  res.json({ ok: true, familyCode: code, name });
});

app.post('/family/join', (req, res) => {
  const { userId, name, role, familyCode } = req.body;
  if (!userId || !name || !familyCode) return res.json({ ok: false, err: 'нет данных' });
  const code = String(familyCode).trim().toUpperCase();
  const exists = db.prepare('SELECT 1 FROM familyMembers WHERE familyCode = ?').get(code);
  if (!exists) return res.json({ ok: false, err: 'Семья с таким кодом не найдена' });
  saveMember(userId, code, name, role);
  console.log(name + ' вошёл(ла) в семью ' + code);
  res.json({ ok: true, familyCode: code, name });
});

app.post('/family/list', (req, res) => {
  const { userId } = req.body;
  const me = getMember(userId);
  if (!me) return res.json({ ok: false, err: 'ты не в семье' });
  const members = getFamilyMembers(me.familyCode);
  res.json({ ok: true, familyCode: me.familyCode, myName: me.name, myRole: me.role, members });
});

app.post('/family/leave', (req, res) => {
  const { userId } = req.body;
  db.prepare('DELETE FROM familyMembers WHERE userId = ?').run(userId);
  res.json({ ok: true });
});

app.post('/profile', (req, res) => {
  const { userId, name, role } = req.body;
  if (!userId) return res.json({ ok: false });
  const me = getMember(userId);
  if (me) saveMember(userId, me.familyCode, name || me.name, role || me.role);
  res.json({ ok: true });
});

app.post('/family/assign', async (req, res) => {
  const { userId, toUserId, task, notification } = req.body;
  if (!userId || !toUserId || !task) return res.json({ ok: false, err: 'нет данных' });
  const me = getMember(userId);
  if (!me) return res.json({ ok: false, err: 'ты не в семье' });
  const recipient = getMember(toUserId);
  if (!recipient || recipient.familyCode !== me.familyCode) {
    return res.json({ ok: false, err: 'получатель не в твоей семье' });
  }
  const fromName = me.name || 'Кто-то';
  const eventId = String(notification?.eventId || task.clientEventId || ('assign_' + Date.now())).slice(0, 180);
  const inboxId = 'inbox_' + eventId;
  if (!claimPushEvent(eventId)) return res.json({ ok: true, duplicate: true, assignId: inboxId });
  db.prepare('INSERT OR IGNORE INTO inbox (id, toUserId, fromUserId, fromName, task, ts) VALUES (?, ?, ?, ?, ?, ?)')
    .run(inboxId, toUserId, userId, fromName, JSON.stringify(task), Date.now());
  addFeedEvent(toUserId, me.familyCode, 'assignment', 'Новое поручение', fromName + ': ' + (task.title || 'Задача'), { assignId: inboxId, fromUserId: userId }, eventId);
  await sendPush(toUserId, {
    type: 'family-task',
    eventId,
    taskId: inboxId,
    assignId: inboxId,
    title: notification?.title || ('📥 Новое поручение от ' + fromName),
    body: notification?.body || (task.title || 'Задача')
  });
  console.log(fromName + ' поручил задачу пользователю ' + toUserId);
  res.json({ ok: true, assignId: inboxId });
});

app.post('/inbox', (req, res) => {
  const { userId } = req.body;
  if (!userId) return res.json({ ok: false, err: 'нет userId' });
  const rows = db.prepare("SELECT * FROM inbox WHERE toUserId = ? AND COALESCE(status, 'pending') = 'pending' ORDER BY ts ASC").all(userId);
  const tasks = rows.map(r => {
    const t = JSON.parse(r.task);
    return {
      assignId: r.id,
      fromUserId: r.fromUserId || '',
      fromName: r.fromName,
      title: t.title || 'Задача',
      desc: t.desc || '',
      date: t.date || '',
      time: t.time || '',
      pri: t.pri || 'Y',
      module: t.module || 'personal',
      status: r.status || 'pending', comment: r.comment || '', ts: r.ts
    };
  });
  res.json({ ok: true, tasks });
});

app.post('/inbox/respond', async (req, res) => {
  const { userId, assignId, status, comment } = req.body || {};
  if (!['accepted', 'rejected'].includes(status)) return res.json({ ok: false, err: 'неверный ответ' });
  const row = db.prepare('SELECT * FROM inbox WHERE id = ? AND toUserId = ?').get(assignId, userId);
  if (!row) return res.json({ ok: false, err: 'поручение не найдено' });
  if ((row.status || 'pending') !== 'pending') return res.json({ ok: true, duplicate: true });
  db.prepare('UPDATE inbox SET status = ?, comment = ?, respondedAt = ? WHERE id = ?').run(status, String(comment || '').slice(0, 500), Date.now(), assignId);
  const me = getMember(userId), task = JSON.parse(row.task || '{}');
  const verb = status === 'accepted' ? 'принял(а)' : 'отклонил(а)';
  const title = status === 'accepted' ? 'Поручение принято' : 'Поручение отклонено';
  const body = (me?.name || 'Участник семьи') + ' ' + verb + ': ' + (task.title || 'Задача') + (comment ? ' · ' + comment : '');
  addFeedEvent(row.fromUserId, me?.familyCode || '', 'assignment-response', title, body, { assignId, status, comment }, 'response_' + assignId + '_' + status);
  await sendPush(row.fromUserId, { type: 'assignment-response', eventId: 'response_' + assignId + '_' + status, title, body });
  res.json({ ok: true });
});

app.post('/family/inbox', (req, res) => {
  const { userId } = req.body;
  if (!userId) return res.json({ ok: false, err: 'нет userId' });
  const rows = db.prepare('SELECT * FROM inbox WHERE toUserId = ? ORDER BY ts ASC').all(userId);
  const items = rows.map(r => ({ id: r.id, fromName: r.fromName, task: JSON.parse(r.task), ts: r.ts }));
  db.prepare('DELETE FROM inbox WHERE toUserId = ?').run(userId);
  res.json({ ok: true, items });
});

app.post('/done', (req, res) => {
  const { userId, name, date } = req.body;
  if (!userId) return res.json({ ok: false });
  db.prepare('INSERT INTO doneStat (userId, name, date, ts) VALUES (?, ?, ?, ?)')
    .run(userId, name || '', date || '', Date.now());
  res.json({ ok: true });
});

app.post('/rating', (req, res) => {
  const { userId } = req.body;
  const me = getMember(userId);
  if (!me) return res.json({ ok: false, err: 'ты не в семье' });
  const members = getFamilyMembers(me.familyCode);
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const rating = members.map(m => {
    const row = db.prepare('SELECT COUNT(*) c FROM doneStat WHERE userId = ? AND ts >= ?').get(m.userId, weekAgo);
    return { userId: m.userId, name: m.name, role: m.role || 'other', count: row.c };
  }).sort((a, b) => b.count - a.count);
  res.json({ ok: true, rating });
});

app.post('/task-done', async (req, res) => {
  const { fromUserId, byName, title } = req.body;
  if (fromUserId) {
    await sendPush(fromUserId, 'Поручение выполнено',
      (byName || 'Кто-то') + ' сделал(а): ' + (title || 'задачу'));
  }
  res.json({ ok: true });
});

app.post('/shared-expense', async (req, res) => {
  const { userId, name, expense } = req.body;
  const me = getMember(userId);
  if (!me || !expense) return res.json({ ok: false });
  const members = getFamilyMembers(me.familyCode);
  for (const m of members) {
    if (m.userId === userId) continue;
    await sendPush(m.userId, 'Общая трата',
      (name || 'Кто-то') + ': ' + expense.amount + ' - ' + (expense.category || 'Прочее'));
  }
  res.json({ ok: true });
});

app.post('/shopping/get', (req, res) => {
  const { userId } = req.body;
  const me = getMember(userId);
  if (!me) return res.json({ ok: false, err: 'ты не в семье' });
  const row = db.prepare('SELECT items FROM shopping WHERE familyCode = ?').get(me.familyCode);
  res.json({ ok: true, items: row ? JSON.parse(row.items) : [] });
});

app.post('/shopping/set', async (req, res) => {
  const { userId, items, event } = req.body;
  const me = getMember(userId);
  if (!me) return res.json({ ok: false, err: 'ты не в семье' });
  const nextItems = Array.isArray(items) ? items : [];
  const previousRow = db.prepare('SELECT items FROM shopping WHERE familyCode = ?').get(me.familyCode);
  let previousItems = [];
  try { previousItems = previousRow ? JSON.parse(previousRow.items || '[]') : []; } catch (e) {}
  db.prepare(`INSERT INTO shopping (familyCode, items) VALUES (?, ?) ON CONFLICT(familyCode) DO UPDATE SET items = excluded.items`).run(me.familyCode, JSON.stringify(nextItems));

  const previousIds = new Set(previousItems.map(x => String(x?.id ?? '')));
  const added = Array.isArray(event?.items) && event.items.length
    ? event.items
    : nextItems.filter(x => x && !x.done && !previousIds.has(String(x.id ?? '')));
  if (added.length) {
    const eventId = String(event?.eventId || ('shopping_' + userId + '_' + Date.now())).slice(0, 180);
    if (claimPushEvent(eventId)) {
      const fromName = me.name || req.body.name || 'Кто-то';
      const names = added.map(x => String(x?.t || x || '').trim()).filter(Boolean);
      const body = fromName + ' добавил(а): ' + names.slice(0, 4).join(' · ') + (names.length > 4 ? ' и ещё ' + (names.length - 4) : '');
      const members = getFamilyMembers(me.familyCode);
      await Promise.all(members.filter(m => m.userId !== userId).map(m => {
        addFeedEvent(m.userId, me.familyCode, 'family-shopping', 'Новая общая покупка', body, { eventId, items: added }, eventId);
        return sendPush(m.userId, { type: 'family-shopping', eventId, createdAt: event?.createdAt || Date.now(), title: '🛒 Новая общая покупка', body });
      }));
    }
  }
  res.json({ ok: true });
});

function localDateParts(tzOffsetMin) {
  const localMs = Date.now() + tzOffsetMin * 60000;
  const d = new Date(localMs);
  const y = d.getUTCFullYear(), m = d.getUTCMonth() + 1, day = d.getUTCDate();
  const hh = String(d.getUTCHours()).padStart(2, '0');
  const mi = String(d.getUTCMinutes()).padStart(2, '0');
  const tk = y + '-' + String(m).padStart(2, '0') + '-' + String(day).padStart(2, '0');
  return { tk, hm: hh + ':' + mi };
}

// ИСПРАВЛЕНО: дедлайн задачи (задан в локальном времени пользователя)
// приводим к реальному UTC, вычитая смещение пояса
function taskDeadlineMs(t, tzOffsetMin) {
  const [y, m, d] = t.date.split('-').map(Number);
  const [hh, mi] = t.time.split(':').map(Number);
  return Date.UTC(y, m - 1, d, hh, mi, 0) - tzOffsetMin * 60000;
}

const REMINDER_INTERVAL_MIN = 20;
const MAX_REMINDERS = 3;

const PRE_REMINDERS = [
  { key: 'd1',  minutes: 24 * 60, label: 'за сутки' },
  { key: 'h1',  minutes: 60,      label: 'за час' },
  { key: 'm15', minutes: 15,      label: 'за 15 минут' }
];

setInterval(() => {
  const userIds = getAllUserData();
  userIds.forEach(userId => {
    const u = getUserData(userId);
    if (!u || !getSub(userId)) return;
    const tzOff = u.tzOffset || 180;
    const { tk, hm } = localDateParts(tzOff);
    if (!u.reminders) u.reminders = {};
    let changed = false;

    (u.tasks || []).forEach(t => {
      if (!t.date || !t.time) return;
      if (t.done) {
        if (u.reminders[t.id]) { delete u.reminders[t.id]; changed = true; }
        return;
      }

      const rem = u.reminders[t.id] || {};

      // ИСПРАВЛЕНО: дедлайн и "сейчас" теперь в одной системе (реальный UTC)
      const deadline = taskDeadlineMs(t, tzOff);
      const minutesLeft = (deadline - Date.now()) / 60000;

      PRE_REMINDERS.forEach(pr => {
        if (!rem[pr.key] && minutesLeft <= pr.minutes && minutesLeft > pr.minutes - 1) {
          rem[pr.key] = Date.now();
          changed = true;
          sendPush(userId, 'Скоро дедлайн (' + pr.label + ')', (t.title || 'Дело') + ' - ' + t.time, t.id);
        }
      });

      // ИСПРАВЛЕНО: основное напоминание теперь по факту наступления дедлайна,
      // а не по совпадению строк даты/времени
      if (!rem.count && minutesLeft <= 0 && minutesLeft > -2) {
        rem.count = 1;
        rem.lastSent = Date.now();
        changed = true;
        sendPush(userId, (t.title || 'Напоминание'), 'Пора выполнить дело', t.id);
      } else if (rem.count && rem.count < MAX_REMINDERS) {
        const minutesPassed = (Date.now() - rem.lastSent) / 60000;
        if (minutesPassed >= REMINDER_INTERVAL_MIN) {
          rem.count++;
          rem.lastSent = Date.now();
          changed = true;
          sendPush(userId, 'Повторное напоминание (' + rem.count + '/' + MAX_REMINDERS + ')', t.title || 'Не забудь про дело', t.id);
        }
      }

      u.reminders[t.id] = rem;
    });

    const nh = u.notifyHour || '09:00';
    if (hm === nh) {
      const dailyKey = 'daily_' + tk;
      if (!u.sentKeys[dailyKey]) {
        u.sentKeys[dailyKey] = 1;
        changed = true;
        const todo = (u.tasks || []).filter(t => !t.done && t.date === tk).length;
        if (todo > 0) sendPush(userId, 'План на сегодня', 'У тебя ' + todo + ' дел(а) на сегодня');
      }
    }
    if (changed) saveUserData(userId, u);
  });
}, 60000);

app.get('/', (req, res) => res.send('Push server работает'));

// Локальное распознавание речи для PWA. Аудио приходит уже как PCM WAV 16 kHz,
// поэтому серверу не нужен ffmpeg и исходная запись нигде не сохраняется.
const WHISPER_ROOT = process.env.WHISPER_ROOT || '/home/evgen/lumo-whisper/src';
const WHISPER_BIN = process.env.WHISPER_BIN || path.join(WHISPER_ROOT, 'build/bin/whisper-cli');
const WHISPER_MODEL = process.env.WHISPER_MODEL || path.join(WHISPER_ROOT, 'models/ggml-base.bin');
const VOICE_MAX_BYTES = 4 * 1024 * 1024;
const voiceHits = new Map();
let voiceBusy = false;

function voiceRateAllowed(req) {
  const now = Date.now(), key = String(req.headers['x-lumo-user'] || req.ip || 'unknown').slice(0, 160);
  const recent = (voiceHits.get(key) || []).filter(ts => now - ts < 10 * 60 * 1000);
  if (recent.length >= 12) return false;
  recent.push(now); voiceHits.set(key, recent); return true;
}

function runWhisper(inputFile, outputBase) {
  return new Promise((resolve, reject) => {
    const args = ['-m', WHISPER_MODEL, '-f', inputFile, '-l', 'ru', '-t', '2', '-nt', '-np', '-otxt', '-of', outputBase];
    const binDir = path.dirname(WHISPER_BIN);
    const child = spawn(WHISPER_BIN, args, {
      cwd: WHISPER_ROOT,
      env: { ...process.env, LD_LIBRARY_PATH: [binDir, process.env.LD_LIBRARY_PATH].filter(Boolean).join(':') }
    });
    let err = '';
    child.stderr.on('data', chunk => { err = (err + chunk).slice(-6000); });
    const timer = setTimeout(() => { child.kill('SIGKILL'); reject(new Error('voice timeout')); }, 90000);
    child.on('error', error => { clearTimeout(timer); reject(error); });
    child.on('close', code => {
      clearTimeout(timer);
      if (code === 0) resolve();
      else reject(new Error(`whisper exited ${code}: ${err.slice(-1000)}`));
    });
  });
}

app.get('/voice/status', (req, res) => {
  res.json({ ok: existsSync(WHISPER_BIN) && existsSync(WHISPER_MODEL), engine: 'whisper.cpp', busy: voiceBusy });
});

app.post('/voice/transcribe', express.raw({ type: ['audio/wav', 'audio/x-wav', 'application/octet-stream'], limit: VOICE_MAX_BYTES }), async (req, res) => {
  if (!Buffer.isBuffer(req.body) || req.body.length < 48 || req.body.length > VOICE_MAX_BYTES) {
    return res.status(400).json({ ok: false, error: 'invalid audio' });
  }
  if (req.body.toString('ascii', 0, 4) !== 'RIFF' || req.body.toString('ascii', 8, 12) !== 'WAVE') {
    return res.status(415).json({ ok: false, error: 'wav required' });
  }
  if (!voiceRateAllowed(req)) return res.status(429).json({ ok: false, error: 'voice rate limit', retryAfter: 600 });
  if (voiceBusy) return res.status(503).json({ ok: false, error: 'voice busy', retryAfter: 3 });
  if (!existsSync(WHISPER_BIN) || !existsSync(WHISPER_MODEL)) return res.status(503).json({ ok: false, error: 'voice unavailable' });

  const id = randomUUID(), base = path.join(tmpdir(), `lumo-voice-${id}`), wav = `${base}.wav`, txt = `${base}.txt`;
  voiceBusy = true;
  try {
    writeFileSync(wav, req.body, { flag: 'wx' });
    await runWhisper(wav, base);
    const text = existsSync(txt) ? readFileSync(txt, 'utf8').replace(/\s+/g, ' ').trim() : '';
    if (!text) return res.status(422).json({ ok: false, error: 'no speech' });
    res.json({ ok: true, text, engine: 'whisper.cpp' });
  } catch (error) {
    console.error('voice transcription failed:', error.message);
    res.status(500).json({ ok: false, error: 'transcription failed' });
  } finally {
    voiceBusy = false;
    for (const file of [wav, txt]) { try { if (existsSync(file)) unlinkSync(file); } catch (_) {} }
  }
});

const PORT = process.env.PORT || 3000;
app.post('/ai', async (req, res) => {
  const body = req.body;
  for (let i = 0; i < GROQ_KEYS.length; i++) {
    const key = GROQ_KEYS[_keyIdx++ % GROQ_KEYS.length];
    try {
      const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
        body: JSON.stringify(body)
      });
      if (r.status === 429) continue;
      const data = await r.json();
      return res.status(r.status).json(data);
    } catch (e) {
      if (i === GROQ_KEYS.length - 1) return res.status(500).json({ error: 'proxy failed' });
    }
  }
  res.status(429).json({ error: 'all keys busy' });
});

// ═══════════════════════════════════════════
// УТРЕННИЙ ПУШ — планировщик
// ═══════════════════════════════════════════
const morningTimers = new Map();

app.post('/schedule-morning', express.json(), async (req, res) => {
  const { userId, subscription, type, title, body, hour, minute } = req.body;

  if(!userId || !subscription){
    return res.json({ ok: false, err: 'missing params' });
  }

  if(morningTimers.has(userId)){
    clearTimeout(morningTimers.get(userId));
    morningTimers.delete(userId);
    console.log(`⏰ Старый таймер для ${userId} отменён`);
  }

  const now   = new Date();
  const next8 = new Date();
  next8.setHours(hour || 8, minute || 0, 0, 0);

  if(next8 <= now){
    next8.setDate(next8.getDate() + 1);
  }

  const delay = next8.getTime() - now.getTime();
  const mins  = Math.round(delay / 60000);

  console.log(`☀️ Утренний пуш для ${userId} через ${mins} мин`);

  const timer = setTimeout(async () => {
    try{
      await webpush.sendNotification(
        subscription,
        JSON.stringify({ type, title, body })
      );
      console.log(`✅ Утренний пуш отправлен: ${userId}`);
      morningTimers.delete(userId);
    }catch(err){
      console.error(`❌ Ошибка:`, err.statusCode || err.message);
      morningTimers.delete(userId);
    }
  }, delay);

  morningTimers.set(userId, timer);

  res.json({
    ok: true,
    scheduledFor: next8.toISOString(),
    minutesLeft: mins
  });
}); 
app.listen(PORT, () => console.log('Сервер запущен на порту', PORT));
