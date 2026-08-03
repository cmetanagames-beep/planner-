import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createECDH, randomBytes } from 'node:crypto';

const node=process.execPath,serverFile=process.env.LUMO_SERVER_FILE||new URL('../server/index.js',import.meta.url).pathname.replace(/^\/(.:)/,'$1');
const work=await mkdtemp(path.join(tmpdir(),'lumo-security-')),port=39000+Math.floor(Math.random()*1000),base=`http://127.0.0.1:${port}`;
const ecdh=createECDH('prime256v1');ecdh.generateKeys();const vapid={publicKey:ecdh.getPublicKey().toString('base64url'),privateKey:ecdh.getPrivateKey().toString('base64url')};
const child=spawn(node,[serverFile],{cwd:work,env:{...process.env,PORT:String(port),VAPID_PUBLIC_KEY:vapid.publicKey,VAPID_PRIVATE_KEY:vapid.privateKey,VAPID_EMAIL:'mailto:test@example.com',TELEGRAM_BOT_TOKEN:'',CLIENT_ORIGINS:'http://127.0.0.1'},stdio:['ignore','pipe','pipe']});
let stderr='';child.stderr.on('data',chunk=>stderr+=chunk);
const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
for(let i=0;i<50;i++){try{if((await fetch(base+'/health')).ok)break;}catch(_){}if(i===49)throw new Error('server did not start: '+stderr);await wait(100);}

const users=['a','b','c'].map(letter=>({id:`u_security_${letter}_${Date.now()}`,token:randomBytes(32).toString('hex')}));
async function call(route,user,body){const headers={'Content-Type':'application/json','X-Lumo-User':user.id,'X-Lumo-Device-Token':user.token};const response=await fetch(base+route,{method:'POST',headers,body:JSON.stringify(body)});return{response,data:await response.json()};}
try{
  for(const user of users){const response=await fetch(base+'/device/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:user.id,token:user.token})});assert.equal(response.status,200);}
  const family=await call('/family/create',users[0],{userId:users[0].id,name:'A'});assert.match(family.data.familyCode,/^[A-Z2-9]{8}$/);
  assert.equal((await call('/family/join',users[1],{userId:users[1].id,name:'B',familyCode:family.data.familyCode})).data.ok,true);
  const assigned=await call('/family/assign',users[0],{userId:users[0].id,toUserId:users[1].id,task:{title:'Safe',date:'<img src=x onerror=alert(1)>',time:'99:99',clientEventId:'security'},notification:{eventId:'security'}});
  const inbox=await call('/inbox',users[1],{userId:users[1].id});assert.equal(inbox.data.tasks[0].date,'');assert.equal(inbox.data.tasks[0].time,'');
  const spoof=await call('/task-done',users[2],{fromUserId:users[0].id,assignId:assigned.data.assignId,title:'forged'});assert.equal(spoof.response.status,403);
  assert.equal((await call('/task-done',users[1],{fromUserId:users[0].id,assignId:assigned.data.assignId,title:'forged'})).data.ok,true);
  await call('/shopping/set',users[0],{userId:users[0].id,items:[{id:'0);alert(1);//',t:'Молоко'}]});
  const shopping=await call('/shopping/get',users[1],{userId:users[1].id});assert.match(String(shopping.data.items[0].id),/^[A-Za-z0-9_-]+$/);
  const payload={planner:{tasks:[{id:1,title:'Copy'}]},savedAt:Date.now()};
  const cloud1=await call('/cloud/create',users[0],{userId:users[0].id,data:payload});const cloud2=await call('/cloud/create',users[0],{userId:users[0].id,data:payload});assert.equal(cloud2.data.code,cloud1.data.code);assert.equal(cloud2.data.existing,true);
  await call('/cloud/disconnect',users[0],{userId:users[0].id});const cloud3=await call('/cloud/create',users[0],{userId:users[0].id,data:payload});assert.equal(cloud3.data.code,cloud1.data.code);
  const arbitrary={endpoint:'https://example.com/push',keys:{auth:'A'.repeat(24),p256dh:'B'.repeat(88)}};assert.equal((await call('/subscribe',users[0],{userId:users[0].id,subscription:arbitrary})).response.status,400);
  const pushSub={endpoint:'https://fcm.googleapis.com/fcm/send/test',keys:{auth:'A'.repeat(24),p256dh:'B'.repeat(88)}};
  const schedule=await call('/schedule-morning',users[0],{userId:users[0].id,subscription:pushSub,type:'habit',scheduleId:`habit:${users[1].id}`,hour:99,minute:99});assert.equal(schedule.data.scheduleId,`habit:${users[0].id}`);
  const health=await fetch(base+'/health');assert.equal(health.headers.get('x-powered-by'),null);assert.equal(health.headers.get('x-content-type-options'),'nosniff');
  console.log('PASS · behavioral security: tenant isolation, XSS normalization, cloud quota, push SSRF, headers');
} finally {child.kill('SIGTERM');await wait(100);await rm(work,{recursive:true,force:true});}
