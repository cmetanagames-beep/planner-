import fs from 'node:fs';

const app=fs.readFileSync(new URL('../app/assets/js/app.js',import.meta.url),'utf8');
const server=fs.readFileSync(new URL('../server/index.js',import.meta.url),'utf8');
const failures=[];

const create=(app.match(/async function createFamily\(\)\{([\s\S]*?)\n\}/)||[])[1]||'';
const join=(app.match(/async function joinFamily\(\)\{([\s\S]*?)\n\}/)||[])[1]||'';
const createSave=create.indexOf('saveMyProfile(true)');
const createCheck=create.indexOf("if(!getMyName())");
const joinSave=join.indexOf('saveMyProfile(true)');
const joinCheck=join.indexOf("if(!getMyName())");

if(createSave<0||createCheck<0||createSave>createCheck)failures.push('создание семьи не читает введённое имя до проверки');
if(joinSave<0||joinCheck<0||joinSave>joinCheck)failures.push('вход в семью не читает введённое имя до проверки');
if(!/app\.post\('\/family\/create'[\s\S]*?const existing = getMember\(userId\)/.test(server))failures.push('создание семьи на сервере не идемпотентно');
if(!create.includes('r.ok&&d.ok')||!join.includes('r.ok&&d.ok'))failures.push('клиент не проверяет HTTP-статус семейного запроса');

console.log(`${failures.length?'FAIL':'PASS'} · family contract ${4-failures.length}/4`);
failures.forEach(x=>console.log('✗ '+x));
if(failures.length)process.exitCode=1;
