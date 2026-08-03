import Database from 'better-sqlite3';
import { randomBytes } from 'node:crypto';

const base=process.env.TEST_API||'http://127.0.0.1:3101';
const token=process.env.DEVELOPER_TOKEN||'';
if(!token)throw new Error('DEVELOPER_TOKEN is required');
const db=new Database(process.env.TEST_DB||'planner.db');
const support='TESTSUP1',userId='u_test_user_admin',deviceId='test-device-admin',cloudCode='TESTCLOUD123',deviceToken=randomBytes(32).toString('hex');
const request=async(path,options={})=>{
  const response=await fetch(base+path,{...options,headers:{'x-developer-token':token,'Content-Type':'application/json',...(options.headers||{})}});
  const data=await response.json();if(!response.ok)throw new Error(`${path}: ${response.status} ${JSON.stringify(data)}`);return data;
};
try{
  const now=Date.now(),payload={planner:{tasks:[{id:1,title:'Тест',date:'2026-08-01'}],finance:[{id:2,amount:100}],income:[],notes:[],habits:[]},savedAt:now};
  const registered=await fetch(`${base}/device/register`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId,token:deviceToken})});if(!registered.ok)throw new Error('test device registration failed');
  db.prepare('INSERT OR REPLACE INTO deviceHealth(deviceId,userId,platform,appVersion,swVersion,displayMode,pushPermission,pushSubscribed,lastSeen,supportCode) VALUES(?,?,?,?,?,?,?,?,?,?)').run(deviceId,userId,'Smoke','v-test','sw-test','browser','granted',0,now,support);
  db.prepare('INSERT OR REPLACE INTO cloudData(code,data,revision,updatedAt,updatedBy) VALUES(?,?,?,?,?)').run(cloudCode,JSON.stringify(payload),1,now,userId);
  db.prepare('INSERT OR REPLACE INTO cloudDevices(userId,code) VALUES(?,?)').run(userId,cloudCode);
  const found=await request(`/developer/user?supportCode=${support}`);if(found.user.supportCode!==support||found.user.cloud?.tasks!==1)throw new Error('support lookup mismatch');
  const blockedFromDev=await request('/developer/user/access',{method:'POST',body:JSON.stringify({supportCode:support,blocked:true,reason:'smoke test'})});if(!blockedFromDev.user?.blocked)throw new Error('developer response did not report blocked access');
  const deviceHeaders={'x-lumo-user':userId,'x-lumo-device-token':deviceToken};
  const blocked=await (await fetch(`${base}/app-status?userId=${userId}`,{headers:deviceHeaders})).json();if(!blocked.blocked)throw new Error('block was not enforced');
  await request('/developer/user/access',{method:'POST',body:JSON.stringify({supportCode:support,blocked:false})});
  const unblocked=await (await fetch(`${base}/app-status?userId=${userId}`,{headers:deviceHeaders})).json();if(unblocked.blocked)throw new Error('unblock was not enforced');
  await request('/developer/user/snapshot',{method:'POST',body:JSON.stringify({supportCode:support})});
  const history=db.prepare('SELECT COUNT(*) n FROM cloudHistory WHERE code=? AND reason=?').get(cloudCode,'developer-manual-snapshot').n;if(history!==1)throw new Error('snapshot was not created');
  console.log('PASS · support lookup · block · unblock · snapshot');
}finally{
  db.prepare('DELETE FROM adminAudit WHERE supportCode=?').run(support);
  db.prepare('DELETE FROM userAccess WHERE userId=?').run(userId);
  db.prepare('DELETE FROM cloudHistory WHERE code=?').run(cloudCode);
  db.prepare('DELETE FROM cloudDevices WHERE userId=?').run(userId);
  db.prepare('DELETE FROM cloudData WHERE code=?').run(cloudCode);
  db.prepare('DELETE FROM deviceHealth WHERE deviceId=?').run(deviceId);
  db.prepare('DELETE FROM deviceAuth WHERE userId=?').run(userId);
  db.close();
}
