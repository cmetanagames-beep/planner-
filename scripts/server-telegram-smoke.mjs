import 'dotenv/config';
const token=String(process.env.DEVELOPER_TOKEN||'');
if(!token)throw new Error('DEVELOPER_TOKEN is not configured');
const response=await fetch(process.env.LUMO_API||'http://127.0.0.1:3000/developer/telegram/test',{method:'POST',headers:{'Content-Type':'application/json','X-Developer-Token':token},body:'{}'});
const data=await response.json();
if(!response.ok||!data.ok)throw new Error(data.error||`Telegram smoke failed: ${response.status}`);
console.log('PASS · Telegram delivery');
