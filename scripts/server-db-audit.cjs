const Database=require('better-sqlite3');
const db=new Database(process.argv[2]||'planner.db',{readonly:true,fileMustExist:true});
const count=sql=>db.prepare(sql).get().n;
console.log(JSON.stringify({
  shortFamilyCodes:count('SELECT COUNT(*) n FROM familyMembers WHERE length(familyCode) BETWEEN 0 AND 7'),
  cloudRows:count('SELECT COUNT(*) n FROM cloudData'),
  cloudOwners:count('SELECT COUNT(*) n FROM cloudOwners'),
  unownedClouds:count('SELECT COUNT(*) n FROM cloudData d WHERE NOT EXISTS(SELECT 1 FROM cloudOwners o WHERE o.code=d.code) AND NOT EXISTS(SELECT 1 FROM cloudDevices c WHERE c.code=d.code)')
}));
