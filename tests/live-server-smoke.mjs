import { randomBytes } from 'node:crypto';
import assert from 'node:assert/strict';

const base = process.env.LUMO_SERVER || 'https://pushevgen.duckdns.org';
const suffix = Date.now().toString(36);
const users = [
  { id: `u_smoke_a_${suffix}`, token: randomBytes(32).toString('hex') },
  { id: `u_smoke_b_${suffix}`, token: randomBytes(32).toString('hex') }
];

async function json(path, user, body = undefined, method = body === undefined ? 'GET' : 'POST') {
  const headers = { 'X-Lumo-User': user.id, 'X-Lumo-Device-Token': user.token };
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  const response = await fetch(base + path, { method, headers, body: body === undefined ? undefined : JSON.stringify(body) });
  const data = await response.json().catch(() => ({}));
  return { response, data };
}

for (const user of users) {
  const response = await fetch(base + '/device/register', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: user.id, token: user.token })
  });
  assert.equal(response.status, 200, 'device registration');
}

const family = await json('/family/create', users[0], { userId: users[0].id, name: 'Smoke A', role: 'other' });
assert.equal(family.response.status, 200, 'family create status');
assert.equal(family.data.ok, true, 'family create');
const joined = await json('/family/join', users[1], { userId: users[1].id, familyCode: family.data.familyCode, name: 'Smoke B', role: 'other' });
assert.equal(joined.data.ok, true, 'family join');
const members = await json('/family/list', users[0], { userId: users[0].id });
assert.equal(members.data.members.length, 2, 'family list');

const cloud = await json('/cloud/create', users[0], { userId: users[0].id, data: { planner: { tasks: [{ id: 1, title: 'Smoke' }] }, savedAt: Date.now() } });
assert.equal(cloud.data.ok, true, 'cloud create');
const connected = await json('/cloud/connect', users[1], { userId: users[1].id, code: cloud.data.code });
assert.equal(connected.data.ok, true, 'cloud connect');
const pulled = await json('/cloud/sync', users[1], { userId: users[1].id, action: 'pull', baseRevision: connected.data.revision });
assert.equal(pulled.data.data.planner.tasks[0].title, 'Smoke', 'cloud pull');

const mismatch = await json('/family/list', users[0], { userId: users[1].id });
assert.equal(mismatch.response.status, 403, 'identity mismatch blocked');
const noAuth = await fetch(base + '/family/list', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: users[0].id }) });
assert.equal(noAuth.status, 401, 'missing token blocked');
const hostileCors = await fetch(base + '/app-status?userId=' + users[0].id, { method: 'OPTIONS', headers: { Origin: 'https://attacker.invalid', 'Access-Control-Request-Method': 'GET' } });
assert.equal(hostileCors.headers.get('access-control-allow-origin'), null, 'hostile CORS origin blocked');

await Promise.all(users.map(user => json('/family/leave', user, { userId: user.id })));
await Promise.all(users.map(user => json('/cloud/disconnect', user, { userId: user.id })));
console.log('PASS · live server: auth, family, cloud sync, identity isolation, CORS');
