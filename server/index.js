import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import webpush from 'web-push';
import Database from 'better-sqlite3';
import TelegramBot from 'node-telegram-bot-api';
import QRCode from 'qrcode';
import { setDefaultResultOrder } from 'node:dns';
import { spawn } from 'node:child_process';
import { createHash, randomUUID, timingSafeEqual } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, statfsSync, statSync, unlinkSync, writeFileSync } from 'node:fs';
import { cpus, freemem, loadavg, tmpdir, totalmem } from 'node:os';
import path from 'node:path';
setDefaultResultOrder('ipv4first');

const app = express();
const CLIENT_URL = String(process.env.CLIENT_URL || 'https://cmetanagames-beep.github.io/planner-/app/').trim();
const CLIENT_ORIGINS = new Set(String(process.env.CLIENT_ORIGINS || 'https://cmetanagames-beep.github.io,https://pushevgen.duckdns.org,http://127.0.0.1:4177,http://localhost:4177')
  .split(',').map(value => value.trim().replace(/\/$/, '')).filter(Boolean));
app.use(cors({
  origin(origin, done) { done(null, !origin || CLIENT_ORIGINS.has(String(origin).replace(/\/$/, ''))); },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'X-Lumo-User', 'X-Lumo-Device-Token', 'X-Developer-Token'],
  maxAge: 86400
}));
app.use(express.json({ limit: '8mb' }));
const DEVELOPER_UI_DIR = process.env.DEVELOPER_UI_DIR || path.join(process.cwd(), 'dev');
app.use('/dev', express.static(DEVELOPER_UI_DIR, { index: 'index.html', maxAge: '5m', fallthrough: true }));

const db = new Database('planner.db');
db.pragma('journal_mode = WAL');
db.pragma('synchronous = NORMAL');
db.pragma('busy_timeout = 5000');

db.exec(`CREATE TABLE IF NOT EXISTS subs (userId TEXT PRIMARY KEY, subscription TEXT)`);
db.exec(`CREATE TABLE IF NOT EXISTS userData (userId TEXT PRIMARY KEY, tasks TEXT, notifyHour TEXT, tzOffset INTEGER, sentKeys TEXT, reminders TEXT)`);
db.exec(`CREATE TABLE IF NOT EXISTS familyMembers (userId TEXT PRIMARY KEY, familyCode TEXT, name TEXT, role TEXT DEFAULT 'other')`);
try { db.exec(`ALTER TABLE familyMembers ADD COLUMN role TEXT DEFAULT 'other'`); } catch (e) {}
db.exec(`CREATE TABLE IF NOT EXISTS inbox (id TEXT PRIMARY KEY, toUserId TEXT, fromUserId TEXT, fromName TEXT, task TEXT, ts INTEGER)`);
try { db.exec(`ALTER TABLE inbox ADD COLUMN fromUserId TEXT`); } catch (e) {}
db.exec(`CREATE TABLE IF NOT EXISTS shopping (familyCode TEXT PRIMARY KEY, items TEXT)`);
db.exec(`CREATE TABLE IF NOT EXISTS doneStat (id INTEGER PRIMARY KEY AUTOINCREMENT, userId TEXT, name TEXT, date TEXT, ts INTEGER)`);
db.exec(`CREATE TABLE IF NOT EXISTS pushEvents (eventId TEXT PRIMARY KEY, ts INTEGER)`);
db.exec(`CREATE TABLE IF NOT EXISTS scheduledPush (scheduleId TEXT PRIMARY KEY, userId TEXT NOT NULL, type TEXT NOT NULL, title TEXT, body TEXT, prompt TEXT, hour INTEGER NOT NULL, minute INTEGER NOT NULL, tzOffset INTEGER NOT NULL DEFAULT 180, enabled INTEGER NOT NULL DEFAULT 1, lastSentDay TEXT DEFAULT '')`);
db.exec(`CREATE TABLE IF NOT EXISTS pushLog (id INTEGER PRIMARY KEY AUTOINCREMENT, userId TEXT, type TEXT, title TEXT, ok INTEGER NOT NULL, statusCode INTEGER, error TEXT, ts INTEGER NOT NULL)`);
db.exec(`CREATE TABLE IF NOT EXISTS notificationTrace (id INTEGER PRIMARY KEY AUTOINCREMENT, traceKey TEXT NOT NULL, userId TEXT, type TEXT, stage TEXT NOT NULL, detail TEXT, ts INTEGER NOT NULL)`);
db.exec(`CREATE INDEX IF NOT EXISTS notificationTraceKeyIdx ON notificationTrace(traceKey,ts)`);
db.exec(`CREATE TABLE IF NOT EXISTS deviceHealth (deviceId TEXT PRIMARY KEY, userId TEXT NOT NULL, platform TEXT, appVersion TEXT, swVersion TEXT, displayMode TEXT, pushPermission TEXT, pushSubscribed INTEGER, lastSeen INTEGER NOT NULL)`);
try { db.exec(`ALTER TABLE deviceHealth ADD COLUMN supportCode TEXT`); } catch (_) {}
db.exec(`CREATE TABLE IF NOT EXISTS clientErrors (id INTEGER PRIMARY KEY AUTOINCREMENT, userId TEXT, deviceId TEXT, kind TEXT, message TEXT, stack TEXT, path TEXT, appVersion TEXT, ts INTEGER NOT NULL)`);
try { db.exec(`ALTER TABLE clientErrors ADD COLUMN resolvedAt INTEGER`); } catch (_) {}
db.exec(`CREATE TABLE IF NOT EXISTS systemState (key TEXT PRIMARY KEY, value TEXT, updatedAt INTEGER NOT NULL)`);
db.exec(`CREATE TABLE IF NOT EXISTS developerAccess (id INTEGER PRIMARY KEY AUTOINCREMENT, ip TEXT, ok INTEGER NOT NULL, path TEXT, ts INTEGER NOT NULL)`);
db.exec(`CREATE TABLE IF NOT EXISTS telegramLog (id INTEGER PRIMARY KEY AUTOINCREMENT, ok INTEGER NOT NULL, message TEXT, error TEXT, ts INTEGER NOT NULL)`);
db.exec(`CREATE TABLE IF NOT EXISTS cloudData (code TEXT PRIMARY KEY, data TEXT NOT NULL, revision INTEGER NOT NULL DEFAULT 1, updatedAt INTEGER NOT NULL, updatedBy TEXT)`);
db.exec(`CREATE TABLE IF NOT EXISTS cloudDevices (userId TEXT PRIMARY KEY, code TEXT NOT NULL)`);
db.exec(`CREATE TABLE IF NOT EXISTS cloudHistory (id INTEGER PRIMARY KEY AUTOINCREMENT, code TEXT NOT NULL, revision INTEGER NOT NULL, data TEXT NOT NULL, createdAt INTEGER NOT NULL, reason TEXT)`);
db.exec(`CREATE TABLE IF NOT EXISTS cloudInvites (token TEXT PRIMARY KEY, code TEXT NOT NULL, createdBy TEXT, expiresAt INTEGER NOT NULL, usedAt INTEGER, usedBy TEXT)`);
db.prepare('DELETE FROM cloudInvites WHERE expiresAt < ? OR usedAt IS NOT NULL').run(Date.now() - 24 * 60 * 60 * 1000);
db.exec(`CREATE TABLE IF NOT EXISTS eventFeed (id TEXT PRIMARY KEY, targetUserId TEXT NOT NULL, familyCode TEXT, type TEXT, title TEXT, body TEXT, data TEXT, ts INTEGER, readAt INTEGER)`);
db.exec(`CREATE TABLE IF NOT EXISTS userAccess (userId TEXT PRIMARY KEY, blocked INTEGER NOT NULL DEFAULT 0, reason TEXT, updatedAt INTEGER NOT NULL)`);
db.exec(`CREATE TABLE IF NOT EXISTS adminAudit (id INTEGER PRIMARY KEY AUTOINCREMENT, supportCode TEXT, action TEXT NOT NULL, detail TEXT, ts INTEGER NOT NULL)`);
db.exec(`CREATE TABLE IF NOT EXISTS deviceAuth (userId TEXT PRIMARY KEY, tokenHash TEXT NOT NULL, createdAt INTEGER NOT NULL, lastSeen INTEGER NOT NULL)`);
try { db.exec(`ALTER TABLE inbox ADD COLUMN status TEXT DEFAULT 'pending'`); } catch (e) {}
try { db.exec(`ALTER TABLE inbox ADD COLUMN comment TEXT DEFAULT ''`); } catch (e) {}
try { db.exec(`ALTER TABLE inbox ADD COLUMN respondedAt INTEGER`); } catch (e) {}
db.prepare('DELETE FROM pushEvents WHERE ts < ?').run(Date.now() - 30 * 24 * 60 * 60 * 1000);
db.prepare('DELETE FROM eventFeed WHERE ts < ?').run(Date.now() - 120 * 24 * 60 * 60 * 1000);
db.prepare('DELETE FROM pushLog WHERE ts < ?').run(Date.now() - 30 * 24 * 60 * 60 * 1000);
db.prepare('DELETE FROM notificationTrace WHERE ts < ?').run(Date.now() - 30 * 24 * 60 * 60 * 1000);
db.prepare('DELETE FROM clientErrors WHERE ts < ?').run(Date.now() - 30 * 24 * 60 * 60 * 1000);
db.prepare('DELETE FROM developerAccess WHERE ts < ?').run(Date.now() - 30 * 24 * 60 * 60 * 1000);
db.prepare('DELETE FROM telegramLog WHERE ts < ?').run(Date.now() - 30 * 24 * 60 * 60 * 1000);
db.prepare('DELETE FROM adminAudit WHERE ts < ?').run(Date.now() - 180 * 24 * 60 * 60 * 1000);

function getSystemState(key, fallback = '') {
  const row = db.prepare('SELECT value FROM systemState WHERE key = ?').get(key);
  return row ? row.value : fallback;
}
function setSystemState(key, value) {
  db.prepare(`INSERT INTO systemState (key,value,updatedAt) VALUES (?,?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updatedAt=excluded.updatedAt`).run(key, String(value), Date.now());
}
function userAccessState(userId) {
  if (!userId) return { blocked: false, reason: '' };
  const row = db.prepare('SELECT blocked,reason,updatedAt FROM userAccess WHERE userId=?').get(String(userId));
  return row ? { blocked: !!row.blocked, reason: row.reason || '', updatedAt: row.updatedAt } : { blocked: false, reason: '' };
}
function requestUserId(req) { return String(req.get('x-lumo-user') || req.body?.userId || req.query?.userId || '').slice(0, 160); }
function validDeviceCredential(userId, token) {
  return /^u_[A-Za-z0-9_-]{8,150}$/.test(userId) && /^[a-f0-9]{64}$/i.test(token);
}
function deviceTokenHash(token) { return createHash('sha256').update(String(token)).digest('hex'); }
function sameSecret(a, b) {
  const left = Buffer.from(String(a || '')), right = Buffer.from(String(b || ''));
  return left.length === right.length && left.length > 0 && timingSafeEqual(left, right);
}
app.post('/device/register', (req, res) => {
  const userId = String(req.body?.userId || '').slice(0, 160), token = String(req.body?.token || '');
  if (!validDeviceCredential(userId, token)) return res.status(400).json({ ok: false, error: 'invalid device credential' });
  const tokenHash = deviceTokenHash(token), existing = db.prepare('SELECT tokenHash FROM deviceAuth WHERE userId=?').get(userId), now = Date.now();
  if (existing && !sameSecret(existing.tokenHash, tokenHash)) return res.status(409).json({ ok: false, error: 'device credential mismatch' });
  db.prepare(`INSERT INTO deviceAuth(userId,tokenHash,createdAt,lastSeen) VALUES(?,?,?,?)
    ON CONFLICT(userId) DO UPDATE SET lastSeen=excluded.lastSeen`).run(userId, tokenHash, now, now);
  res.json({ ok: true });
});
function requireDevice(req, res, next) {
  const headerUserId = String(req.get('x-lumo-user') || '').slice(0, 160), claimedUserId = String(req.body?.userId || req.query?.userId || '').slice(0, 160);
  const userId = headerUserId, token = String(req.get('x-lumo-device-token') || '');
  if (!validDeviceCredential(userId, token)) return res.status(401).json({ ok: false, error: 'device authentication required' });
  if (claimedUserId && claimedUserId !== headerUserId) return res.status(403).json({ ok: false, error: 'device identity mismatch' });
  const row = db.prepare('SELECT tokenHash FROM deviceAuth WHERE userId=?').get(userId);
  if (!row || !sameSecret(row.tokenHash, deviceTokenHash(token))) return res.status(401).json({ ok: false, error: 'device authentication failed' });
  db.prepare('UPDATE deviceAuth SET lastSeen=? WHERE userId=?').run(Date.now(), userId);
  next();
}
app.use((req, res, next) => {
  if (req.method === 'OPTIONS' || req.path === '/' || req.path === '/health' || req.path === '/key' || req.path === '/voice/status' || req.path === '/device/register' || req.path === '/telemetry/push-state' || req.path.startsWith('/developer')) return next();
  requireDevice(req, res, next);
});
function auditAdmin(supportCode, action, detail = '') {
  db.prepare('INSERT INTO adminAudit(supportCode,action,detail,ts) VALUES(?,?,?,?)').run(String(supportCode || '').slice(0, 16), String(action || '').slice(0, 80), String(detail || '').slice(0, 500), Date.now());
}
function getMaintenance() {
  try { return JSON.parse(getSystemState('maintenance', '{"enabled":false,"message":"","features":{}}')); }
  catch (_) { return { enabled: false, message: '', features: {} }; }
}
function featureForPath(pathname) {
  if (/^\/voice\//.test(pathname)) return 'voice';
  if (/^\/(family|inbox|shopping|rating|done|task-done|shared-expense|events)(\/|$)/.test(pathname)) return 'family';
  if (/^\/(cloud|sync)(\/|$)/.test(pathname)) return 'sync';
  if (/^\/(subscribe|test|schedule-morning)(\/|$)/.test(pathname)) return 'push';
  return '';
}
app.use((req, res, next) => {
  if (req.path.startsWith('/developer') || req.path.startsWith('/telemetry') || req.path === '/health' || req.path === '/app-status') return next();
  const state = getMaintenance(), feature = featureForPath(req.path);
  if (state.enabled || (feature && state.features?.[feature] === false)) {
    return res.status(503).json({ ok: false, maintenance: true, feature, message: state.message || 'Сервис временно обслуживается' });
  }
  next();
});
app.use((req,res,next)=>{
  if(req.path.startsWith('/developer')||req.path==='/health'||req.path==='/app-status')return next();
  const userId=requestUserId(req),access=userAccessState(userId);
  if(access.blocked)return res.status(403).json({ok:false,blocked:true,reason:access.reason||'Доступ временно приостановлен. Обратитесь в поддержку Lumo.'});
  next();
});

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
function validSubscription(subscription){return !!(subscription?.endpoint&&subscription?.keys?.auth&&subscription?.keys?.p256dh);}

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
    tzOffset: typeof row.tzOffset === 'number' ? row.tzOffset : 180,
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

const TELEGRAM_BOT_TOKEN = String(process.env.TELEGRAM_BOT_TOKEN || '');
const TELEGRAM_ALLOWED_USERNAME = String(process.env.TELEGRAM_ALLOWED_USERNAME || 'EvgenAkfix').replace(/^@/, '').toLowerCase();
let telegramBot = null;
function telegramChatId() { return String(process.env.TELEGRAM_CHAT_ID || getSystemState('telegramChatId', '')); }
async function telegramSend(text) {
  const chatId = telegramChatId();
  const message = String(text).slice(0, 3900);
  if (!telegramBot || !chatId) {
    db.prepare('INSERT INTO telegramLog (ok,message,error,ts) VALUES (0,?,?,?)').run(message.slice(0, 240), 'not linked', Date.now());
    return false;
  }
  try {
    await telegramBot.sendMessage(chatId, message, { disable_web_page_preview: true });
    db.prepare('INSERT INTO telegramLog (ok,message,error,ts) VALUES (1,?,?,?)').run(message.slice(0, 240), '', Date.now());
    return true;
  } catch (error) {
    db.prepare('INSERT INTO telegramLog (ok,message,error,ts) VALUES (0,?,?,?)').run(message.slice(0, 240), String(error.message || '').slice(0, 300), Date.now());
    console.error('telegram alert failed:', error.message); return false;
  }
}
async function raiseAlert(key, text, cooldownMs = 60 * 60 * 1000) {
  const stateKey = `alert:${key}`, last = Number(getSystemState(stateKey, '0'));
  if (Date.now() - last < cooldownMs) return false;
  if (await telegramSend(`🚨 Lumo Console\n${text}`)) { setSystemState(stateKey, Date.now()); return true; }
  return false;
}
if (TELEGRAM_BOT_TOKEN) {
  telegramBot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
  telegramBot.onText(/^\/start(?:\s|$)/, async msg => {
    const username = String(msg.from?.username || '').toLowerCase();
    if (username !== TELEGRAM_ALLOWED_USERNAME) return telegramBot.sendMessage(msg.chat.id, 'Доступ запрещён.');
    setSystemState('telegramChatId', msg.chat.id);
    await telegramBot.sendMessage(msg.chat.id, '✅ Lumo Console подключена. Сюда будут приходить только технические тревоги.');
  });
  telegramBot.on('polling_error', error => console.error('telegram polling:', error.message));
}

function traceNotification(traceKey, userId, type, stage, detail = '') {
  if (!traceKey) return;
  db.prepare('INSERT INTO notificationTrace (traceKey,userId,type,stage,detail,ts) VALUES (?,?,?,?,?,?)').run(
    String(traceKey).slice(0, 200), String(userId || '').slice(0, 160), String(type || 'generic').slice(0, 80), String(stage).slice(0, 60), String(detail || '').slice(0, 300), Date.now()
  );
}

function claimPushEvent(eventId) {
  if (!eventId) return true;
  return db.prepare('INSERT OR IGNORE INTO pushEvents (eventId, ts) VALUES (?, ?)')
    .run(String(eventId).slice(0, 200), Date.now()).changes > 0;
}

async function sendPush(userId, titleOrPayload, body, taskId) {
  if(userAccessState(userId).blocked)return false;
  const sub = getSub(userId);
  const payload = typeof titleOrPayload === 'object' && titleOrPayload
    ? titleOrPayload
    : { title: titleOrPayload, body, taskId };
  const traceKey = String(payload.traceKey || payload.eventKey || payload.eventId || `push-${randomUUID()}`).slice(0, 200);
  payload.traceKey = traceKey;
  const logPush = (ok, statusCode = null, error = '') => db.prepare(
    'INSERT INTO pushLog (userId,type,title,ok,statusCode,error,ts) VALUES (?,?,?,?,?,?,?)'
  ).run(String(userId || '').slice(0, 160), String(payload.type || 'generic').slice(0, 80), String(payload.title || '').slice(0, 240), ok ? 1 : 0, statusCode, String(error || '').slice(0, 500), Date.now());
  traceNotification(traceKey, userId, payload.type, 'attempt', payload.stage || '');
  if (!sub) { logPush(false, null, 'subscription missing'); traceNotification(traceKey, userId, payload.type, 'no-subscription'); return false; }
  const eventKey = payload.eventKey ? String(payload.eventKey).slice(0, 200) : '';
  if (eventKey && !claimPushEvent(eventKey)) { traceNotification(traceKey, userId, payload.type, 'deduplicated'); return true; }
  try {
    await webpush.sendNotification(sub, JSON.stringify(payload));
    logPush(true, 201, '');
    traceNotification(traceKey, userId, payload.type, 'sent', '201');
    console.log('Отправлено', userId, payload.title);
    return true;
  } catch (e) {
    if (eventKey) db.prepare('DELETE FROM pushEvents WHERE eventId = ?').run(eventKey);
    logPush(false, Number(e.statusCode) || null, e.message);
    traceNotification(traceKey, userId, payload.type, 'failed', `${e.statusCode || ''} ${e.message || ''}`);
    raiseAlert('push-failure', `Ошибка push ${e.statusCode || ''}: ${e.message || 'без описания'}`, 15 * 60 * 1000);
    console.log('Ошибка отправки', userId, e.message);
    if (e.statusCode === 404 || e.statusCode === 410) deleteSub(userId);
    return false;
  }
}

app.get('/key', (req, res) => res.json({ key: PUBLIC_KEY }));
app.get('/app-status', (req, res) => {
  const maintenance = getMaintenance();
  const access=userAccessState(requestUserId(req));
  res.set('Cache-Control', 'no-store').json({ ok: !maintenance.enabled&&!access.blocked, maintenance, blocked:access.blocked, reason:access.reason||'' });
});

const telemetryHits = new Map();
function telemetryAllowed(req) {
  const now = Date.now(), key = String(req.ip || 'unknown'), recent = (telemetryHits.get(key) || []).filter(ts => now - ts < 60 * 60 * 1000);
  if (recent.length >= 180) return false;
  recent.push(now); telemetryHits.set(key, recent); return true;
}
function cleanDiagnosticText(value, max = 500) {
  return String(value || '').replace(/https?:\/\/\S+/gi, '[url]').replace(/[\r\n\t]+/g, ' ').replace(/\s{2,}/g, ' ').slice(0, max);
}
app.post('/telemetry/device', (req, res) => {
  if (!telemetryAllowed(req)) return res.status(429).json({ ok: false });
  const b = req.body || {}, userId = String(b.userId || '').slice(0, 160), deviceId = String(b.deviceId || '').slice(0, 160);
  if (!userId || !deviceId) return res.status(400).json({ ok: false });
  const supportCode=String(b.supportCode||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,10);
  db.prepare(`INSERT INTO deviceHealth (deviceId,userId,platform,appVersion,swVersion,displayMode,pushPermission,pushSubscribed,lastSeen,supportCode)
    VALUES (?,?,?,?,?,?,?,?,?,?) ON CONFLICT(deviceId) DO UPDATE SET userId=excluded.userId,platform=excluded.platform,appVersion=excluded.appVersion,swVersion=excluded.swVersion,displayMode=excluded.displayMode,pushPermission=excluded.pushPermission,pushSubscribed=excluded.pushSubscribed,lastSeen=excluded.lastSeen,supportCode=excluded.supportCode`)
    .run(deviceId, userId, cleanDiagnosticText(b.platform, 40), cleanDiagnosticText(b.appVersion, 30), cleanDiagnosticText(b.swVersion, 60), cleanDiagnosticText(b.displayMode, 30), cleanDiagnosticText(b.pushPermission, 30), b.pushSubscribed ? 1 : 0, Date.now(),supportCode);
  res.json({ ok: true });
});
app.post('/telemetry/error', (req, res) => {
  if (!telemetryAllowed(req)) return res.status(429).json({ ok: false });
  const b = req.body || {};
  db.prepare('INSERT INTO clientErrors (userId,deviceId,kind,message,stack,path,appVersion,ts) VALUES (?,?,?,?,?,?,?,?)').run(
    String(b.userId || '').slice(0, 160), String(b.deviceId || '').slice(0, 160), cleanDiagnosticText(b.kind, 40), cleanDiagnosticText(b.message, 500), cleanDiagnosticText(b.stack, 1200), cleanDiagnosticText(b.path, 200), cleanDiagnosticText(b.appVersion, 30), Date.now()
  );
  raiseAlert('client-errors', 'Зафиксирована новая ошибка клиента. Открой раздел «Ошибки» в Lumo Console.', 30 * 60 * 1000);
  res.json({ ok: true });
});
app.post('/telemetry/push-state', (req, res) => {
  if (!telemetryAllowed(req)) return res.status(429).json({ ok: false });
  const b = req.body || {}, stage = String(b.stage || '');
  if (!['displayed', 'opened', 'suppressed','action'].includes(stage) || !b.traceKey) return res.status(400).json({ ok: false });
  traceNotification(b.traceKey, '', b.type, stage, cleanDiagnosticText(b.detail, 100));
  res.json({ ok: true });
});

app.post('/subscribe', (req, res) => {
  const { userId, subscription } = req.body;
  if (!userId || !validSubscription(subscription)) return res.status(400).json({ ok: false, err: 'некорректная push-подписка' });
  saveSub(userId, subscription);
  console.log('Подписан:', userId);
  res.json({ ok: true });
});

const cloudHits = new Map();
app.use('/cloud', (req, res, next) => {
  const now=Date.now(), key=`${String(req.ip||'ip').slice(0,80)}:${String(req.body?.userId||'').slice(0,120)}`;
  const recent=(cloudHits.get(key)||[]).filter(ts=>now-ts<10*60*1000);
  if(recent.length>=240)return res.status(429).json({ok:false,err:'Слишком много запросов синхронизации',retryAfter:60});
  recent.push(now);cloudHits.set(key,recent);next();
});
function validCloudPayload(data){try{const raw=JSON.stringify(data);return !!data&&raw.length>20&&raw.length<=6*1024*1024;}catch(_){return false;}}

app.post('/cloud/create', (req, res) => {
  const { userId, data } = req.body || {};
  if (!userId || !validCloudPayload(data)) return res.status(400).json({ ok: false, err: 'нет данных или копия слишком большая' });
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

app.post('/cloud/invite/create', async (req, res) => {
  const userId=String(req.body?.userId||''), device=db.prepare('SELECT code FROM cloudDevices WHERE userId=?').get(userId);
  if(!device)return res.status(403).json({ok:false,err:'Сначала включи облачную защиту'});
  const token=randomUUID().replace(/-/g,'').slice(0,20), expiresAt=Date.now()+15*60*1000;
  db.prepare('INSERT INTO cloudInvites (token,code,createdBy,expiresAt) VALUES (?,?,?,?)').run(token,device.code,userId,expiresAt);
  const url=`${CLIENT_URL.replace(/\/$/,'')}?cloudInvite=${token}`;
  const qr=await QRCode.toDataURL(url,{width:360,margin:2,errorCorrectionLevel:'M'});
  res.json({ok:true,token,url,qr,expiresAt});
});

app.post('/cloud/invite/use', (req, res) => {
  const userId=String(req.body?.userId||''),token=String(req.body?.token||'').replace(/[^a-f0-9]/gi,'');
  const invite=db.prepare('SELECT * FROM cloudInvites WHERE token=?').get(token);
  if(!userId||!invite||invite.usedAt||invite.expiresAt<Date.now())return res.status(404).json({ok:false,err:'Приглашение недействительно или уже использовано'});
  const row=db.prepare('SELECT revision,updatedAt FROM cloudData WHERE code=?').get(invite.code);
  if(!row)return res.status(404).json({ok:false,err:'Облачная копия не найдена'});
  const used=db.prepare('UPDATE cloudInvites SET usedAt=?,usedBy=? WHERE token=? AND usedAt IS NULL').run(Date.now(),userId,token);
  if(!used.changes)return res.status(409).json({ok:false,err:'Приглашение уже использовано'});
  db.prepare('INSERT INTO cloudDevices (userId,code) VALUES (?,?) ON CONFLICT(userId) DO UPDATE SET code=excluded.code').run(userId,invite.code);
  res.json({ok:true,code:invite.code,revision:row.revision,updatedAt:row.updatedAt});
});

app.post('/cloud/sync', (req, res) => {
  const { userId, data, baseRevision, action } = req.body || {};
  const device = db.prepare('SELECT code FROM cloudDevices WHERE userId = ?').get(userId);
  if (!device) return res.json({ ok: false, err: 'Синхронизация не подключена' });
  const row = db.prepare('SELECT * FROM cloudData WHERE code = ?').get(device.code);
  if (!row) return res.json({ ok: false, err: 'Облачная копия не найдена' });
  if (action === 'pull' || data == null) return res.json({ ok: true, code: row.code, data: JSON.parse(row.data), revision: row.revision, updatedAt: row.updatedAt });
  if(!validCloudPayload(data))return res.status(400).json({ok:false,err:'Копия повреждена или слишком большая'});
  if (action !== 'force' && Number(baseRevision || 0) !== Number(row.revision)) {
    return res.json({ ok: false, conflict: true, server: { data: JSON.parse(row.data), revision: row.revision, updatedAt: row.updatedAt } });
  }
  const current=JSON.parse(row.data||'{}'), incoming=data||{};
  if(action!=='force' && current?.planner && (!incoming?.planner || Object.keys(incoming.planner).length<2)) return res.status(409).json({ok:false,err:'Пустые данные не могут заменить облачную копию'});
  const revision = row.revision + 1, now = Date.now();
  db.prepare('INSERT INTO cloudHistory (code,revision,data,createdAt,reason) VALUES (?,?,?,?,?)').run(row.code,row.revision,row.data,now,'sync');
  db.prepare('UPDATE cloudData SET data = ?, revision = ?, updatedAt = ?, updatedBy = ? WHERE code = ?').run(JSON.stringify(data), revision, now, userId, row.code);
  db.prepare('DELETE FROM cloudHistory WHERE code=? AND id NOT IN (SELECT id FROM cloudHistory WHERE code=? ORDER BY createdAt DESC LIMIT 30)').run(row.code,row.code);
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
  const existing = getMember(userId);
  if (existing) {
    saveMember(userId, existing.familyCode, name, role || existing.role);
    return res.json({ ok: true, familyCode: existing.familyCode, name, existing: true });
  }
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

const PRE_REMINDERS = [
  { key: 'important2h', minExclusive: 60, maxInclusive: 120, label: 'за 2 часа', importantOnly: true },
  { key: 'h1', minExclusive: 30, maxInclusive: 60, label: 'за час' },
  { key: 'm30', minExclusive: 0,  maxInclusive: 30, label: 'за 30 минут' }
];

async function runReminderSchedulerPass() {
  const userIds = getAllUserData();
  for (const userId of userIds) {
    const u = getUserData(userId);
    if (!u || !getSub(userId)) continue;
    const tzOff = typeof u.tzOffset === 'number' ? u.tzOffset : 180;
    const { tk, hm } = localDateParts(tzOff);
    if (!u.reminders) u.reminders = {};
    let changed = false;

    for (const t of (u.tasks || [])) {
      if (!t.date || !t.time) continue;
      if (t.done) {
        if (u.reminders[t.id]) { delete u.reminders[t.id]; changed = true; }
        continue;
      }

      const signature = t.date + 'T' + t.time + ':' + (t.pri || 'Y');
      let rem = u.reminders[t.id] || {};
      if (rem.signature !== signature) { rem = { signature }; changed = true; }

      // ИСПРАВЛЕНО: дедлайн и "сейчас" теперь в одной системе (реальный UTC)
      const deadline = taskDeadlineMs(t, tzOff);
      const minutesLeft = (deadline - Date.now()) / 60000;

      const isImportant = t.pri === 'R' || t.priority === 'important';
      const upcoming = PRE_REMINDERS.find(pr => (!pr.importantOnly || isImportant) && minutesLeft > pr.minExclusive && minutesLeft <= pr.maxInclusive);
      if (upcoming && !rem[upcoming.key]) {
        const sent=await sendPush(userId, { type:'task-reminder', stage:upcoming.key, eventKey:'task:'+t.id+':'+t.date+':'+t.time+':'+upcoming.key, title:(isImportant ? '🔴 Важное дело — ' : 'Скоро дело — ') + upcoming.label, body:(t.title || 'Дело') + ' · ' + t.time, taskId:t.id });
        if(sent){rem[upcoming.key] = Date.now();changed = true;}
      }

      // ИСПРАВЛЕНО: основное напоминание теперь по факту наступления дедлайна,
      // а не по совпадению строк даты/времени
      if (!rem.start && minutesLeft <= 0 && minutesLeft > -15) {
        const sent=await sendPush(userId, { type:'task-reminder', stage:'start', eventKey:'task:'+t.id+':'+t.date+':'+t.time+':start', title:isImportant ? '🔴 ВАЖНО: ' + (t.title || 'Дело') : (t.title || 'Напоминание'), body:isImportant ? 'Запланированное время наступило. Не откладывай это дело.' : 'Пора выполнить дело', taskId:t.id });
        if(sent){rem.start = Date.now();changed = true;}
      }
      if (!rem.overdue && minutesLeft <= -15) {
        const sent=await sendPush(userId, { type:'task-reminder', stage:'overdue', eventKey:'task:'+t.id+':'+t.date+':'+t.time+':overdue', title:isImportant ? '🚨 Важное дело просрочено' : '⚠️ Просроченное дело', body:(t.title || 'Дело') + ' должно было начаться в ' + t.time, taskId:t.id });
        if(sent){rem.overdue = Date.now();changed = true;}
      }

      u.reminders[t.id] = rem;
    }

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
  }

  const schedules = db.prepare('SELECT * FROM scheduledPush WHERE enabled = 1').all();
  for (const row of schedules) {
    if (!getSub(row.userId)) continue;
    const { tk, hm } = localDateParts(Number.isFinite(Number(row.tzOffset)) ? Number(row.tzOffset) : 180);
    const due = Number(hm.replace(':', '')) >= (Number(row.hour) * 100 + Number(row.minute));
    if (!due || row.lastSentDay === tk) continue;
    const sent = await sendPush(row.userId, { eventKey:`schedule:${row.scheduleId}:${tk}`, type: row.type, title: row.title, body: row.body, prompt: row.prompt || '', date: tk });
    if (sent) db.prepare('UPDATE scheduledPush SET lastSentDay = ? WHERE scheduleId = ?').run(tk, row.scheduleId);
  }
}
let schedulerRunning=false;
async function runReminderScheduler(){
  if(schedulerRunning)return;
  schedulerRunning=true;
  try{await runReminderSchedulerPass();}
  catch(error){console.error('reminder scheduler failed:',error);raiseAlert('scheduler-failed',`Ошибка планировщика: ${error.message}`,15*60*1000);}
  finally{schedulerRunning=false;}
}
setInterval(runReminderScheduler, 30000);
setTimeout(runReminderScheduler, 1000);

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

const DEVELOPER_TOKEN = String(process.env.DEVELOPER_TOKEN || '');
const developerAttempts = new Map();
const developerSuccessSeen = new Map();
function developerIp(req) { return String(req.headers['x-forwarded-for'] || req.ip || 'unknown').split(',')[0].trim().slice(0, 80); }
function developerBlocked(req) {
  const now = Date.now(), ip = developerIp(req), recent = (developerAttempts.get(ip) || []).filter(ts => now - ts < 15 * 60 * 1000);
  developerAttempts.set(ip, recent);
  return recent.length >= 8;
}
function developerAuthorized(req) {
  if (!DEVELOPER_TOKEN) return false;
  const bearer = String(req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  const supplied = String(req.headers['x-developer-token'] || bearer);
  const expected = Buffer.from(DEVELOPER_TOKEN), actual = Buffer.from(supplied);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}
function requireDeveloper(req, res, next) {
  const ip = developerIp(req), now = Date.now();
  if (developerBlocked(req)) return res.status(429).json({ ok: false, error: 'too many attempts', retryAfter: 900 });
  if (!developerAuthorized(req)) {
    const attempts = developerAttempts.get(ip) || []; attempts.push(now); developerAttempts.set(ip, attempts);
    db.prepare('INSERT INTO developerAccess (ip,ok,path,ts) VALUES (?,0,?,?)').run(ip, String(req.path).slice(0, 160), now);
    return res.status(401).json({ ok: false, error: 'developer access required' });
  }
  developerAttempts.delete(ip);
  if (now - Number(developerSuccessSeen.get(ip) || 0) > 10 * 60 * 1000) {
    developerSuccessSeen.set(ip, now);
    db.prepare('INSERT INTO developerAccess (ip,ok,path,ts) VALUES (?,1,?,?)').run(ip, String(req.path).slice(0, 160), now);
  }
  res.set('Cache-Control', 'no-store');
  next();
}
function maskedUser(value) {
  const text = String(value || '');
  return text.length <= 6 ? '••••••' : `••••${text.slice(-6)}`;
}
function supportDevice(code) {
  return db.prepare('SELECT * FROM deviceHealth WHERE supportCode=? ORDER BY lastSeen DESC LIMIT 1').get(String(code||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,10));
}
function supportGroup(device) {
  if(!device)return {userIds:[],cloudCode:''};
  const cloud=db.prepare('SELECT code FROM cloudDevices WHERE userId=?').get(device.userId),cloudCode=cloud?.code||'';
  const userIds=cloudCode?db.prepare('SELECT userId FROM cloudDevices WHERE code=?').all(cloudCode).map(x=>x.userId):[device.userId];
  if(!userIds.includes(device.userId))userIds.push(device.userId);
  return {userIds:[...new Set(userIds)],cloudCode};
}
function placeholders(values){return values.map(()=>'?').join(',');}
function supportSummary(code) {
  const device=supportDevice(code);if(!device)return null;
  const group=supportGroup(device),ids=group.userIds,marks=placeholders(ids),now=Date.now();
  const devices=db.prepare(`SELECT deviceId,platform,appVersion,swVersion,displayMode,pushPermission,pushSubscribed,lastSeen,supportCode FROM deviceHealth WHERE userId IN (${marks}) ORDER BY lastSeen DESC`).all(...ids).map(row=>({...row,pushSubscribed:!!row.pushSubscribed,stale:now-row.lastSeen>7*24*60*60*1000}));
  const access=ids.map(userId=>userAccessState(userId)),blocked=access.some(x=>x.blocked),reason=access.find(x=>x.blocked)?.reason||'';
  const subscriptionCount=Number(db.prepare(`SELECT COUNT(*) n FROM subs WHERE userId IN (${marks})`).get(...ids).n||0);
  const schedules=db.prepare(`SELECT scheduleId,type,title,hour,minute,enabled,lastSentDay FROM scheduledPush WHERE userId IN (${marks}) ORDER BY enabled DESC,title LIMIT 40`).all(...ids).map(x=>({...x,enabled:!!x.enabled}));
  const recentPush=db.prepare(`SELECT type,title,ok,statusCode,error,ts FROM pushLog WHERE userId IN (${marks}) ORDER BY ts DESC LIMIT 30`).all(...ids).map(x=>({...x,ok:!!x.ok,error:String(x.error||'').slice(0,200)}));
  const errors=db.prepare(`SELECT id,kind,message,path,appVersion,ts,resolvedAt FROM clientErrors WHERE userId IN (${marks}) ORDER BY ts DESC LIMIT 30`).all(...ids);
  let cloud=null;
  if(group.cloudCode){const row=db.prepare('SELECT revision,updatedAt,data FROM cloudData WHERE code=?').get(group.cloudCode);if(row){let data={};try{data=JSON.parse(row.data||'{}')}catch(_){}const planner=data?.planner||{};cloud={revision:row.revision,updatedAt:row.updatedAt,bytes:Buffer.byteLength(row.data||''),tasks:Array.isArray(planner.tasks)?planner.tasks.length:0,expenses:Array.isArray(planner.finance)?planner.finance.length:0,income:Array.isArray(planner.income)?planner.income.length:0,notes:Array.isArray(planner.notes)?planner.notes.length:0,habits:Array.isArray(planner.habits)?planner.habits.length:0,history:Number(db.prepare('SELECT COUNT(*) n FROM cloudHistory WHERE code=?').get(group.cloudCode).n||0)};}}
  return {supportCode:String(device.supportCode||''),blocked,reason,userCount:ids.length,subscriptionCount,devices,schedules,recentPush,errors,cloud};
}
function upcomingNotifications(hours = 24) {
  const now = Date.now(), until = now + Math.min(Math.max(Number(hours) || 24, 1), 168) * 60 * 60 * 1000, items = [];
  for (const userId of getAllUserData()) {
    const u = getUserData(userId); if (!u) continue;
    for (const task of u.tasks || []) {
      if (task.done || !task.date || !task.time) continue;
      const deadline = taskDeadlineMs(task, Number(u.tzOffset) || 180); if (!Number.isFinite(deadline)) continue;
      const important = task.pri === 'R' || task.priority === 'important';
      const stages = [...(important ? [['important2h', 120]] : []), ['h1', 60], ['m30', 30], ['start', 0], ['overdue', -15]];
      const sent = u.reminders?.[task.id] || {};
      for (const [stage, beforeMin] of stages) {
        const at = deadline - beforeMin * 60000;
        if (!sent[stage] && at >= now && at <= until) items.push({ at, kind: 'task', stage, userId: maskedUser(userId), ref: `дело •${String(task.id || '').slice(-5)}`, important });
      }
    }
  }
  for (const row of db.prepare('SELECT * FROM scheduledPush WHERE enabled=1').all()) {
    const offset = Number(row.tzOffset) || 180, localNow = new Date(now + offset * 60000);
    let at = Date.UTC(localNow.getUTCFullYear(), localNow.getUTCMonth(), localNow.getUTCDate(), Number(row.hour), Number(row.minute)) - offset * 60000;
    if (at <= now || row.lastSentDay === localDateParts(offset).tk) at += 24 * 60 * 60 * 1000;
    if (at <= until) items.push({ at, kind: row.type, stage: 'scheduled', userId: maskedUser(row.userId), ref: String(row.title || row.type).slice(0, 80), important: false });
  }
  return items.sort((a, b) => a.at - b.at).slice(0, 200);
}

const BACKUP_DIR = process.env.BACKUP_DIR || path.join(process.cwd(), 'backups');
function backupList() {
  try {
    mkdirSync(BACKUP_DIR, { recursive: true });
    return readdirSync(BACKUP_DIR).filter(name => /^planner-\d{8}-\d{6}\.db$/.test(name)).map(name => {
      const full = path.join(BACKUP_DIR, name), stat = statSync(full);
      return { name, bytes: stat.size, createdAt: stat.mtimeMs };
    }).sort((a, b) => b.createdAt - a.createdAt);
  } catch (_) { return []; }
}
async function createDatabaseBackup(reason = 'manual') {
  mkdirSync(BACKUP_DIR, { recursive: true });
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace('T', '-').slice(0, 15), name = `planner-${stamp}.db`, destination = path.join(BACKUP_DIR, name);
  const integrity = db.pragma('quick_check', { simple: true });
  if (String(integrity).toLowerCase() !== 'ok') throw new Error(`database integrity: ${integrity}`);
  await db.backup(destination);
  const restored=new Database(destination,{readonly:true});
  try{const check=restored.pragma('quick_check',{simple:true});if(String(check).toLowerCase()!=='ok')throw new Error(`backup restore check: ${check}`);}finally{restored.close();}
  setSystemState('lastBackup', JSON.stringify({ name, reason, createdAt: Date.now() }));
  return backupList().find(item => item.name === name);
}

app.get('/health', (req, res) => res.json({ ok: true, service: 'lumo-push', time: Date.now() }));
app.get('/developer/status', requireDeveloper, (req, res) => {
  const now = Date.now(), dayAgo = now - 24 * 60 * 60 * 1000;
  const scalar = (sql, field = 'count') => Number(db.prepare(sql).get()?.[field] || 0);
  const delivery = db.prepare(`SELECT COUNT(*) count, SUM(CASE WHEN ok=1 THEN 1 ELSE 0 END) sent, SUM(CASE WHEN ok=0 THEN 1 ELSE 0 END) failed FROM pushLog WHERE ts >= ?`).get(dayAgo);
  const schedules = db.prepare(`SELECT scheduleId,userId,type,title,hour,minute,tzOffset,enabled,lastSentDay FROM scheduledPush ORDER BY enabled DESC,type,title LIMIT 100`).all().map(row => ({
    ...row, userId: maskedUser(row.userId), title: String(row.title || '').slice(0, 100)
  }));
  const recentPush = db.prepare(`SELECT userId,type,title,ok,statusCode,error,ts FROM pushLog ORDER BY ts DESC LIMIT 40`).all().map(row => ({
    ...row, userId: maskedUser(row.userId), title: String(row.title || '').slice(0, 120), error: String(row.error || '').slice(0, 160), ok: !!row.ok
  }));
  const devices = db.prepare('SELECT * FROM deviceHealth ORDER BY lastSeen DESC LIMIT 100').all().map(row => ({ ...row, userId: maskedUser(row.userId), pushSubscribed: !!row.pushSubscribed, blocked:userAccessState(row.userId).blocked, stale: now-row.lastSeen>7*24*60*60*1000 }));
  const versions = db.prepare('SELECT appVersion version,COUNT(*) count,MAX(lastSeen) lastSeen FROM deviceHealth GROUP BY appVersion ORDER BY count DESC').all();
  const errors = db.prepare('SELECT id,userId,deviceId,kind,message,path,appVersion,ts,resolvedAt FROM clientErrors ORDER BY ts DESC LIMIT 60').all().map(row => ({ ...row, userId: maskedUser(row.userId) }));
  const recentTrace = db.prepare('SELECT traceKey,userId,type,stage,detail,ts FROM notificationTrace ORDER BY ts DESC LIMIT 80').all().map(row => ({ ...row, userId: maskedUser(row.userId) }));
  const telegramLog = db.prepare('SELECT id,ok,message,error,ts FROM telegramLog ORDER BY ts DESC LIMIT 30').all().map(row => ({ ...row, ok: !!row.ok }));
  const accessLog = db.prepare('SELECT id,ip,ok,path,ts FROM developerAccess ORDER BY ts DESC LIMIT 30').all().map(row => ({ ...row, ok: !!row.ok, ip: maskedUser(row.ip) }));
  const adminAudit=db.prepare('SELECT id,supportCode,action,detail,ts FROM adminAudit ORDER BY ts DESC LIMIT 50').all();
  let databaseBytes = 0;
  try { databaseBytes = statSync('planner.db').size; } catch (_) {}
  const memory = process.memoryUsage();
  let disk={total:0,free:0,used:0};
  try{const s=statfsSync(process.cwd()),total=Number(s.blocks)*Number(s.bsize),free=Number(s.bavail)*Number(s.bsize);disk={total,free,used:total-free};}catch(_){}
  const hostTotal=totalmem(),hostFree=freemem();
  res.json({
    ok: true,
    generatedAt: now,
    server: { uptimeSec: Math.floor(process.uptime()), node: process.version, pid: process.pid, memory: { rss: memory.rss, heapUsed: memory.heapUsed, heapTotal: memory.heapTotal } },
    host: { memory:{total:hostTotal,free:hostFree,used:hostTotal-hostFree},disk,load:loadavg(),cpuCores:cpus().length },
    services: { push: !!(PUBLIC_KEY && PRIVATE_KEY), whisper: existsSync(WHISPER_BIN) && existsSync(WHISPER_MODEL), whisperBusy: voiceBusy, database: true, telegram: !!telegramBot, telegramLinked: !!telegramChatId() },
    database: {
      bytes: databaseBytes,
      subscriptions: scalar('SELECT COUNT(*) count FROM subs'),
      users: scalar('SELECT COUNT(*) count FROM userData'),
      families: scalar('SELECT COUNT(DISTINCT familyCode) count FROM familyMembers'),
      familyMembers: scalar('SELECT COUNT(*) count FROM familyMembers'),
      cloudCopies: scalar('SELECT COUNT(*) count FROM cloudData'),
      unreadEvents: scalar('SELECT COUNT(*) count FROM eventFeed WHERE readAt IS NULL'),
      schedules: scalar('SELECT COUNT(*) count FROM scheduledPush'),
      activeSchedules: scalar('SELECT COUNT(*) count FROM scheduledPush WHERE enabled=1'),
      blockedUsers: scalar('SELECT COUNT(*) count FROM userAccess WHERE blocked=1')
    },
    delivery24h: { total: Number(delivery?.count || 0), sent: Number(delivery?.sent || 0), failed: Number(delivery?.failed || 0) },
    schedules, recentPush, devices, versions, errors, recentTrace, telegramLog, accessLog, adminAudit,
    upcoming: upcomingNotifications(24),
    backups: backupList().slice(0, 30),
    maintenance: getMaintenance(),
    telegram: { configured: !!telegramBot, linked: !!telegramChatId(), username: `@${process.env.TELEGRAM_ALLOWED_USERNAME || 'EvgenAkfix'}` }
  });
});

app.get('/developer/user',requireDeveloper,(req,res)=>{const summary=supportSummary(req.query?.supportCode);if(!summary)return res.status(404).json({ok:false,error:'Код поддержки не найден. Попросите пользователя открыть Настройки → Уведомления PWA.'});res.json({ok:true,user:summary});});
app.post('/developer/user/access',requireDeveloper,(req,res)=>{
  const support=String(req.body?.supportCode||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,10),device=supportDevice(support);if(!device)return res.status(404).json({ok:false,error:'Код поддержки не найден'});
  const group=supportGroup(device),blocked=!!req.body?.blocked,reason=cleanDiagnosticText(req.body?.reason,180)||(blocked?'Доступ временно приостановлен администратором Lumo.':'');
  const stmt=db.prepare(`INSERT INTO userAccess(userId,blocked,reason,updatedAt) VALUES(?,?,?,?) ON CONFLICT(userId) DO UPDATE SET blocked=excluded.blocked,reason=excluded.reason,updatedAt=excluded.updatedAt`),tx=db.transaction(()=>group.userIds.forEach(id=>stmt.run(id,blocked?1:0,blocked?reason:'',Date.now())));tx();
  auditAdmin(support,blocked?'access-block':'access-unblock',blocked?reason:`устройств: ${group.userIds.length}`);res.json({ok:true,user:supportSummary(support)});
});
app.post('/developer/user/message',requireDeveloper,async(req,res)=>{
  const support=String(req.body?.supportCode||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,10),device=supportDevice(support);if(!device)return res.status(404).json({ok:false,error:'Код поддержки не найден'});
  const message=cleanDiagnosticText(req.body?.message,220);if(message.length<2)return res.status(400).json({ok:false,error:'Введите сообщение'});
  const group=supportGroup(device);let sent=0;for(const userId of group.userIds)if(await sendPush(userId,{type:'support-message',eventKey:`support:${support}:${Date.now()}:${userId}`,title:'Поддержка Lumo',body:message}))sent++;
  auditAdmin(support,'support-message',`${message} · доставлено ${sent}/${group.userIds.length}`);res.status(sent?200:503).json({ok:!!sent,sent,total:group.userIds.length,error:sent?'':'Нет активной push-подписки или доступ заблокирован'});
});
app.post('/developer/user/snapshot',requireDeveloper,(req,res)=>{
  const support=String(req.body?.supportCode||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,10),device=supportDevice(support);if(!device)return res.status(404).json({ok:false,error:'Код поддержки не найден'});
  const group=supportGroup(device);if(!group.cloudCode)return res.status(404).json({ok:false,error:'Облачная защита не подключена'});const cloud=db.prepare('SELECT * FROM cloudData WHERE code=?').get(group.cloudCode);if(!cloud)return res.status(404).json({ok:false,error:'Облачная копия не найдена'});
  db.prepare('INSERT INTO cloudHistory(code,revision,data,createdAt,reason) VALUES(?,?,?,?,?)').run(group.cloudCode,cloud.revision,cloud.data,Date.now(),'developer-manual-snapshot');auditAdmin(support,'cloud-snapshot',`revision ${cloud.revision}`);res.json({ok:true,user:supportSummary(support)});
});

app.get('/developer/trace', requireDeveloper, (req, res) => {
  const key = String(req.query.key || '').slice(0, 200);
  const rows = key ? db.prepare('SELECT * FROM notificationTrace WHERE traceKey=? ORDER BY ts ASC LIMIT 200').all(key) : db.prepare('SELECT * FROM notificationTrace ORDER BY ts DESC LIMIT 200').all();
  res.json({ ok: true, trace: rows.map(row => ({ ...row, userId: maskedUser(row.userId) })) });
});
app.post('/developer/test-push', requireDeveloper, async (req, res) => {
  const device = db.prepare('SELECT * FROM deviceHealth WHERE deviceId=?').get(String(req.body?.deviceId || ''));
  if (!device) return res.status(404).json({ ok: false, error: 'device not found' });
  const traceKey = `developer-test-${randomUUID()}`;
  const sent = await sendPush(device.userId, { type: 'developer-test', traceKey, title: '🧪 Тест Lumo Console', body: `Push доставлен на ${device.platform || 'устройство'} в ${new Date().toLocaleTimeString('ru-RU')}` });
  res.json({ ok: sent, traceKey });
});
app.post('/developer/device/update',requireDeveloper,async(req,res)=>{const device=db.prepare('SELECT * FROM deviceHealth WHERE deviceId=?').get(String(req.body?.deviceId||''));if(!device)return res.status(404).json({ok:false,error:'device not found'});const sent=await sendPush(device.userId,{type:'system-update',eventKey:`update:${device.deviceId}:${Date.now()}`,title:'Доступно обновление Lumo',body:'Открой уведомление, чтобы установить свежую версию.'});res.status(sent?200:503).json({ok:sent});});
app.post('/developer/cloud/restore-yesterday',requireDeveloper,(req,res)=>{const support=String(req.body?.supportCode||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,10),device=supportDevice(support);if(!device)return res.status(404).json({ok:false,error:'device not found'});const cloud=db.prepare('SELECT c.* FROM cloudData c JOIN cloudDevices d ON d.code=c.code WHERE d.userId=?').get(device.userId);if(!cloud)return res.status(404).json({ok:false,error:'cloud not connected'});const target=db.prepare('SELECT * FROM cloudHistory WHERE code=? AND createdAt<=? ORDER BY createdAt DESC LIMIT 1').get(cloud.code,Date.now()-20*60*60*1000);if(!target)return res.status(404).json({ok:false,error:'yesterday copy not found'});const now=Date.now();db.prepare('INSERT INTO cloudHistory(code,revision,data,createdAt,reason) VALUES(?,?,?,?,?)').run(cloud.code,cloud.revision,cloud.data,now,'before-developer-restore');db.prepare('UPDATE cloudData SET data=?,revision=?,updatedAt=?,updatedBy=? WHERE code=?').run(target.data,cloud.revision+1,now,'developer-restore',cloud.code);auditAdmin(support,'cloud-restore-yesterday',`revision ${cloud.revision+1}`);res.json({ok:true,revision:cloud.revision+1,restoredAt:target.createdAt});});
app.post('/developer/telegram/test', requireDeveloper, async (req, res) => {
  const sent = await telegramSend('✅ Тест Lumo Console: связь с сервером работает.');
  res.status(sent ? 200 : 503).json({ ok: sent, error: sent ? '' : (telegramBot ? 'Открой бота и нажми /start' : 'Не задан TELEGRAM_BOT_TOKEN') });
});
app.post('/developer/errors/:id/resolve', requireDeveloper, (req, res) => {
  const id = Number(req.params.id), resolved = req.body?.resolved !== false;
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ ok: false, error: 'invalid id' });
  const result = db.prepare('UPDATE clientErrors SET resolvedAt=? WHERE id=?').run(resolved ? Date.now() : null, id);
  res.status(result.changes ? 200 : 404).json({ ok: !!result.changes });
});
app.post('/developer/maintenance', requireDeveloper, (req, res) => {
  const b = req.body || {}, features = {};
  for (const key of ['voice', 'push', 'family', 'sync']) if (typeof b.features?.[key] === 'boolean') features[key] = b.features[key];
  const state = { enabled: !!b.enabled, message: cleanDiagnosticText(b.message, 180), features };
  setSystemState('maintenance', JSON.stringify(state));
  telegramSend(`🛠 Режим обслуживания Lumo: ${state.enabled ? 'ВКЛЮЧЁН' : 'выключен'}${state.message ? `\n${state.message}` : ''}`);
  res.json({ ok: true, maintenance: state });
});
app.post('/developer/backups', requireDeveloper, async (req, res) => {
  try { const backup = await createDatabaseBackup('manual'); res.json({ ok: true, backup }); }
  catch (error) { raiseAlert('backup-failed', `Ошибка резервной копии: ${error.message}`, 10 * 60 * 1000); res.status(500).json({ ok: false, error: error.message }); }
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
// ═══════════════════════════════════════════
// УТРЕННИЙ ПУШ — планировщик
// ═══════════════════════════════════════════
app.post('/schedule-morning', express.json(), async (req, res) => {
  const { userId, subscription, type, title, body, prompt, hour, minute, scheduleId, enabled, tzOffset } = req.body;

  if(!userId || !validSubscription(subscription)){
    return res.json({ ok: false, err: 'missing params' });
  }

  saveSub(userId, subscription);
  const id = String(scheduleId || (type + ':' + userId)).slice(0, 180);
  db.prepare(`INSERT INTO scheduledPush (scheduleId,userId,type,title,body,prompt,hour,minute,tzOffset,enabled,lastSentDay)
    VALUES (?,?,?,?,?,?,?,?,?,?,COALESCE((SELECT lastSentDay FROM scheduledPush WHERE scheduleId = ?),''))
    ON CONFLICT(scheduleId) DO UPDATE SET userId=excluded.userId,type=excluded.type,title=excluded.title,body=excluded.body,prompt=excluded.prompt,hour=excluded.hour,minute=excluded.minute,tzOffset=excluded.tzOffset,enabled=excluded.enabled`)
    .run(id,userId,type||'morning',title||'',body||'',prompt||'',Number(hour)||0,Number(minute)||0,typeof tzOffset==='number'?tzOffset:180,enabled===false?0:1,id);
  setTimeout(runReminderScheduler, 0);
  res.json({ ok: true, scheduleId: id, persistent: true });
}); 
async function monitorSystemHealth() {
  try {
    const lastBackup = backupList()[0];
    if (!lastBackup || Date.now() - lastBackup.createdAt > 24 * 60 * 60 * 1000) await createDatabaseBackup('automatic');
  } catch (error) { raiseAlert('backup-failed', `Не удалось создать резервную копию: ${error.message}`, 60 * 60 * 1000); }
  const since = Date.now() - 15 * 60 * 1000;
  const push = db.prepare(`SELECT COUNT(*) total,SUM(CASE WHEN ok=0 THEN 1 ELSE 0 END) failed FROM pushLog WHERE ts>=?`).get(since);
  const failed = Number(push?.failed || 0), total = Number(push?.total || 0);
  if (failed >= 3 && failed / Math.max(total, 1) >= .4) raiseAlert('push-rate', `За 15 минут не доставлено ${failed} из ${total} push.`, 30 * 60 * 1000);
  if (!existsSync(WHISPER_BIN) || !existsSync(WHISPER_MODEL)) raiseAlert('whisper-offline', 'Whisper недоступен: проверь бинарный файл и модель.', 3 * 60 * 60 * 1000);
  try { const bytes = statSync('planner.db').size; if (bytes > 100 * 1024 * 1024) raiseAlert('database-size', `База выросла до ${Math.round(bytes / 1048576)} МБ.`, 24 * 60 * 60 * 1000); } catch (_) {}
  const memory=process.memoryUsage(),hostTotal=totalmem(),hostFree=freemem(),loads=loadavg(),cores=Math.max(cpus().length,1);
  if(memory.rss>512*1024*1024)raiseAlert('process-memory',`Node использует ${Math.round(memory.rss/1048576)} МБ RAM.`,60*60*1000);
  if(hostFree/hostTotal<.1)raiseAlert('host-memory',`На VPS осталось ${Math.round(hostFree/1048576)} МБ RAM.`,60*60*1000);
  if(loads[0]>cores*2)raiseAlert('host-load',`Высокая нагрузка VPS: ${loads[0].toFixed(2)} при ${cores} CPU.`,30*60*1000);
  try{const s=statfsSync(process.cwd()),free=Number(s.bavail)*Number(s.bsize),total=Number(s.blocks)*Number(s.bsize);if(free/total<.1)raiseAlert('disk-space',`На диске осталось ${Math.round(free/1048576)} МБ.`,3*60*60*1000);}catch(_){}
  const lastReport=Number(getSystemState('weeklyReportAt','0'));
  if(telegramBot&&telegramChatId()&&Date.now()-lastReport>=7*24*60*60*1000){
    const week=Date.now()-7*24*60*60*1000,push=db.prepare('SELECT COUNT(*) total,SUM(ok) sent FROM pushLog WHERE ts>=?').get(week),errors=db.prepare('SELECT COUNT(*) n FROM clientErrors WHERE ts>=?').get(week).n,active=db.prepare('SELECT COUNT(*) n FROM deviceHealth WHERE lastSeen>=?').get(week).n;
    const ok=await telegramSend(`📊 Lumo за неделю\nАктивные устройства: ${active}\nPush: ${Number(push.sent||0)} из ${Number(push.total||0)}\nОшибки клиентов: ${errors}\nRAM Node: ${Math.round(memory.rss/1048576)} МБ\nСвободно на VPS: ${Math.round(hostFree/1048576)} МБ\nПоследняя копия: ${backupList()[0]?.name||'нет'}`);if(ok)setSystemState('weeklyReportAt',Date.now());
  }
}
setInterval(monitorSystemHealth, 5 * 60 * 1000);
setTimeout(monitorSystemHealth, 5000);
setInterval(()=>{
  const cutoff=Date.now()-24*60*60*1000;
  for(const map of [telemetryHits,voiceHits,cloudHits,developerAttempts])for(const [key,list] of map)if(!(list||[]).some(ts=>ts>=cutoff))map.delete(key);
  for(const [key,ts] of developerSuccessSeen)if(ts<cutoff)developerSuccessSeen.delete(key);
},60*60*1000).unref();
app.listen(PORT, () => console.log('Сервер запущен на порту', PORT));
