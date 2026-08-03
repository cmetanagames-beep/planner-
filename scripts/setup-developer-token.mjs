import { randomBytes } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const envPath = process.argv[2] || '.env';
const current = existsSync(envPath) ? readFileSync(envPath, 'utf8') : '';
const existing = current.match(/^DEVELOPER_TOKEN=(.+)$/m)?.[1]?.trim();
if (existing) {
  console.log(`DEVELOPER_TOKEN уже настроен (${existing.slice(0, 8)}…${existing.slice(-4)})`);
  process.exit(0);
}
const token = `LumoDev-${randomBytes(18).toString('base64url')}`;
const next = `${current.replace(/\s*$/, '')}\nDEVELOPER_TOKEN=${token}\n`;
writeFileSync(envPath, next, { mode: 0o600 });
console.log(`DEVELOPER_TOKEN создан и сохранён в ${envPath} (${token.slice(0, 8)}…${token.slice(-4)})`);
