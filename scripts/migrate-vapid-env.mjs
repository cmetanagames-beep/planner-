import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';

const [legacyFile, envFile, backupFile] = process.argv.slice(2);
if (!legacyFile || !envFile || !backupFile) throw new Error('usage: migrate-vapid-env.mjs <legacy-index> <env> <env-backup>');

const legacy = readFileSync(legacyFile, 'utf8');
const extract = name => {
  const match = legacy.match(new RegExp(`const\\s+${name}\\s*=\\s*['\"]([^'\"]+)`));
  if (!match?.[1]) throw new Error(`missing ${name} in legacy file`);
  return match[1];
};

let env = readFileSync(envFile, 'utf8');
if (!existsSync(backupFile)) copyFileSync(envFile, backupFile);
const setValue = (key, value) => {
  const pattern = new RegExp(`^${key}=.*$`, 'm');
  env = pattern.test(env) ? env.replace(pattern, `${key}=${value}`) : `${env.trimEnd()}\n${key}=${value}\n`;
};
setValue('VAPID_PUBLIC_KEY', extract('PUBLIC_KEY'));
setValue('VAPID_PRIVATE_KEY', extract('PRIVATE_KEY'));
setValue('VAPID_EMAIL', 'mailto:test@test.com');
writeFileSync(envFile, env, { mode: 0o600 });
console.log('VAPID variables migrated: 3');
