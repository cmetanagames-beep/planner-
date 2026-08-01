import fs from 'node:fs';

const html=fs.readFileSync(new URL('../app/dev/index.html',import.meta.url),'utf8');
const js=fs.readFileSync(new URL('../app/dev/assets/dev.js',import.meta.url),'utf8');
const server=fs.readFileSync(new URL('../server/index.js',import.meta.url),'utf8');
const referenced=[...js.matchAll(/\$\('([^']+)'\)/g)].map(x=>x[1]);
const declared=new Set([...html.matchAll(/\bid="([^"]+)"/g),...js.matchAll(/\bid=\\?"([^"\\]+)\\?"/g)].map(x=>x[1]));
const missing=[...new Set(referenced)].filter(id=>!declared.has(id));
const pages=[...html.matchAll(/data-page="([^"]+)"/g)].map(x=>x[1]);
const views=[...html.matchAll(/data-page-view="([^"]+)"/g)].map(x=>x[1]);
const missingViews=[...new Set(pages)].filter(page=>!views.includes(page));
const endpoints=['/developer/user','/developer/user/access','/developer/user/message','/developer/user/snapshot','/developer/cloud/restore-yesterday','/app-status'];
const missingEndpoints=endpoints.filter(path=>!server.includes(path));
const tables=['userAccess','adminAudit'];
const missingTables=tables.filter(name=>!server.includes(`CREATE TABLE IF NOT EXISTS ${name}`));
const app=fs.readFileSync(new URL('../app/assets/js/app.js',import.meta.url),'utf8');
const healthCalls=(app.match(/reportDeviceHealth\(/g)||[]).length;
const failures=[
  ...missing.map(x=>`DOM id: ${x}`),
  ...missingViews.map(x=>`page view: ${x}`),
  ...missingEndpoints.map(x=>`endpoint: ${x}`),
  ...missingTables.map(x=>`table: ${x}`)
  ,...(healthCalls>=3?[]:[`device health calls: ${healthCalls}`])
];
console.log(`${failures.length?'FAIL':'PASS'} · DOM ${new Set(referenced).size}/${new Set(referenced).size} · pages ${new Set(pages).size}/${new Set(pages).size} · API ${endpoints.length}/${endpoints.length}`);
failures.forEach(x=>console.log('✗ '+x));
if(failures.length)process.exitCode=1;
