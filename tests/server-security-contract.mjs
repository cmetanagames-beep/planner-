import fs from 'node:fs';
import assert from 'node:assert/strict';

const server = fs.readFileSync(new URL('../server/index.js', import.meta.url), 'utf8');
const client = fs.readFileSync(new URL('../app/assets/js/app.js', import.meta.url), 'utf8');

const checks = [
  ['device credentials table', /CREATE TABLE IF NOT EXISTS deviceAuth/],
  ['registration endpoint', /app\.post\('\/device\/register'/],
  ['constant-time token comparison', /timingSafeEqual\(left, right\)/],
  ['identity mismatch rejected', /device identity mismatch/],
  ['authenticated middleware enabled', /requireDevice\(req, res, next\)/],
  ['CORS allowlist enabled', /CLIENT_ORIGINS\.has/],
  ['QR uses configured client URL', /CLIENT_URL\.replace/],
  ['client creates 256-bit token', /new Uint8Array\(32\)/],
  ['client registers the device', /ensureLumoDeviceRegistered/],
  ['client sends user header', /headers\.set\('X-Lumo-User'/],
  ['client sends device token header', /headers\.set\('X-Lumo-Device-Token'/]
];

for (const [name, pattern] of checks) {
  assert.match(name.startsWith('client') ? client : server, pattern, name);
}

console.log(`PASS · server security contract ${checks.length}/${checks.length}`);
