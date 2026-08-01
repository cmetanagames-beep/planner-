import { randomBytes } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const envPath = process.argv[2] || '.env';
const current = existsSync(envPath) ? readFileSync(envPath, 'utf8') : '';
const existing = current.match(/^DEVELOPER_TOKEN=(.+)$/m)?.[1]?.trim();
if (existing) {
  console.log(`EXISTING_TOKEN=${existing}`);
  process.exit(0);
}
const token = `LumoDev-${randomBytes(18).toString('base64url')}`;
const next = `${current.replace(/\s*$/, '')}\nDEVELOPER_TOKEN=${token}\n`;
writeFileSync(envPath, next, { mode: 0o600 });
console.log(`NEW_TOKEN=${token}`);
