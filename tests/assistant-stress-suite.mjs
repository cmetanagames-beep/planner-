import { parseLocalPlan } from './assistant-node-runner.mjs';

const failures=[];
let total=0;
const verify=(name,text,check)=>{
  total++;
  try{const plan=parseLocalPlan(text);if(!check(plan))failures.push({name,text,plan});}
  catch(error){failures.push({name,text,error:String(error?.stack||error)});}
};
const by=(p,type)=>p.actions.filter(x=>x.type===type);
const days=['в понедельник','во вторник','в среду','в четверг','в пятницу','в субботу','в воскресенье'];
const verbs=['позвонить маме','написать коллеге','отправить договор клиенту','забрать документы','отвезти ребёнка в школу','встретить курьера','подготовить отчёт'];

for(let i=0;i<70;i++){
  const day=days[i%days.length],verb=verbs[i%verbs.length],hour=8+(i%12),minute=i%2?'30':'00';
  verify(`одиночное дело ${i+1}`,`${day} ${verb} в ${hour}:${minute}`,p=>by(p,'task').length===1&&by(p,'task')[0].time===String(hour).padStart(2,'0')+':'+minute&&p.unknown.length===0);
}
for(let i=0;i<35;i++){
  const first=8+(i%5),second=14+(i%6),day=days[i%days.length];
  verify(`два дела ${i+1}`,`${day} в ${first} позвонить маме в ${second} забрать ребёнка из школы`,p=>by(p,'task').length===2&&by(p,'task').map(x=>x.time).join(',')===`${String(first).padStart(2,'0')}:00,${String(second).padStart(2,'0')}:00`);
}
const categories=[['продукты','Продукты'],['бензин','Топливо'],['кафе','Кафе'],['квартиру','Жильё'],['лекарства','Здоровье'],['корм собаке','Питомцы']];
for(let i=0;i<36;i++){
  const amount=100+(i*137),[target,category]=categories[i%categories.length];
  verify(`расход ${i+1}`,`сегодня потратил ${amount} рублей на ${target}`,p=>by(p,'expense').length===1&&by(p,'expense')[0].amount===amount&&by(p,'expense')[0].category===category);
}
for(let i=0;i<24;i++){
  const income=30000+i*1000,rent=10000+i*100,pet=500+i*10;
  verify(`пакет финансов ${i+1}`,`пришла зарплата ${income} рублей из них ${rent} потратил на квартиру и ${pet} на корм собаке`,p=>by(p,'income').length===1&&by(p,'income')[0].amount===income&&by(p,'expense').length===2&&by(p,'expense').map(x=>x.amount).join(',')===`${rent},${pet}`);
}
const spoken=[['пять тысяч',5000],['восемнадцать тысяч',18000],['двадцать пять тысяч',25000],['сто тысяч',100000],['двести тридцать тысяч',230000],['один миллион двести тысяч',1200000]];
spoken.forEach(([words,value],i)=>verify(`сумма словами ${i+1}`,`получил доход ${words} рублей`,p=>by(p,'income').length===1&&by(p,'income')[0].amount===value));

const commandPrefixes=['Добавь','Создай','Запиши','Запланируй','Поставь','Напомни'];
const commandDates=['на завтра','завтра','на понедельник','в понедельник'];
const commandTasks=[['встреча с клиентом в 15-00','Встреча с клиентом','15:00'],['позвонить маме в 18:30','Позвонить маме','18:30'],['отправить отчёт в 10','Отправить отчет','10:00']];
commandPrefixes.forEach(prefix=>commandDates.forEach(date=>commandTasks.forEach(([task,title,time])=>{
  const label=`команда с датой: ${prefix} ${date} ${task}`;
  verify(label,`${prefix} ${date} ${task}`,p=>by(p,'task').length===1&&by(p,'task')[0].title===title&&by(p,'task')[0].time===time&&p.unknown.length===0);
})));

console.log(`${failures.length?'FAIL':'PASS'} · ${total-failures.length}/${total}`);
failures.slice(0,20).forEach(x=>console.log(`✗ ${x.name}\n  ${x.text}\n  ${JSON.stringify(x.plan||x.error)}`));
if(failures.length)process.exitCode=1;
