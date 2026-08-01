import { parseLocalPlan } from './assistant-node-runner.mjs';

const rows=[];
const test=(name,text,check)=>{
  let plan,error='';
  try{plan=parseLocalPlan(text);if(!check(plan))error=JSON.stringify(plan);}
  catch(e){error=e.stack||e.message;}
  rows.push({name,pass:!error,error});
};
const actions=(p,type)=>p.actions.filter(x=>x.type===type);
const has=(p,type,predicate)=>p.actions.some(x=>x.type===type&&predicate(x));
const noGarbage=p=>!actions(p,'task').some(x=>/^(?:нужно|надо|встреча в|\d+|пять тысяч|в \d)/i.test(x.title))&&p.unknown.length===0;

test('фраза со скриншота',
  'В понедельник у меня встреча в 15:00 во вторник мне нужно забрать ребёнка из садика в 16:00 пришла зарплата в 16 000 руб. из них я пять тысяч потратил на квартиру и 3000 на собаку',
  p=>actions(p,'task').length===2&&actions(p,'task')[0].title==='Встреча'&&actions(p,'task')[0].time==='15:00'&&/Забрать ребенка из садика/i.test(actions(p,'task')[1].title)&&actions(p,'task')[1].time==='16:00'&&has(p,'income',x=>x.amount===16000)&&has(p,'expense',x=>x.amount===5000&&x.category==='Жильё')&&has(p,'expense',x=>x.amount===3000&&x.category==='Питомцы')&&noGarbage(p));
test('две даты и два времени','в понедельник встреча с врачом в 10:30 во вторник забрать документы в 17:15',p=>actions(p,'task').length===2&&actions(p,'task')[0].time==='10:30'&&actions(p,'task')[1].time==='17:15'&&actions(p,'task')[0].date!==actions(p,'task')[1].date&&noGarbage(p));
test('время после действия остаётся у него','завтра позвонить маме в 18:00 послезавтра отправить договор в 09:00',p=>actions(p,'task').length===2&&actions(p,'task')[0].time==='18:00'&&actions(p,'task')[1].time==='09:00');
test('время перед действием','завтра в 18 позвонить маме во вторник в 9 отправить договор',p=>actions(p,'task').length===2&&actions(p,'task')[0].time==='18:00'&&actions(p,'task')[1].time==='09:00');
test('две задачи в один день','в понедельник в 9 встретиться с сотрудниками в 11 подготовить отчёт клиенту',p=>actions(p,'task').length===2&&actions(p,'task').map(x=>x.time).join(',')==='09:00,11:00'&&actions(p,'task').every(x=>x.module==='work'));
test('доход и расход цифрами','пришла зарплата 90000 рублей из них 50000 потратил на квартиру',p=>has(p,'income',x=>x.amount===90000)&&has(p,'expense',x=>x.amount===50000&&x.category==='Жильё'));
test('доход и расход словами','получил премию восемнадцать тысяч и потратил две тысячи триста на корм собаке',p=>has(p,'income',x=>x.amount===18000)&&has(p,'expense',x=>x.amount===2300&&x.category==='Питомцы'));
test('три расхода одним предложением','потратил 500 рублей на продукты и 1200 рублей на такси и 3500 рублей на лекарства',p=>actions(p,'expense').length===3&&actions(p,'expense').map(x=>x.amount).join(',')==='500,1200,3500');
test('три финансовые операции с глаголами','потратил 500 рублей на продукты заплатил 1200 рублей за такси оплатил 3500 рублей лекарства',p=>actions(p,'expense').length===3);
test('зарплата с двумя расходами','пришла зарплата 100 тысяч из них 25 тысяч потратил на аренду и 4500 на продукты',p=>has(p,'income',x=>x.amount===100000)&&has(p,'expense',x=>x.amount===25000&&x.category==='Жильё')&&has(p,'expense',x=>x.amount===4500&&x.category==='Продукты'));
test('миллион словами','получил доход один миллион двести тысяч рублей',p=>has(p,'income',x=>x.amount===1200000));
test('заметка с датой','добавь в заметки 5 августа показания счётчика 4512',p=>p.actions.length===1&&p.actions[0].type==='note'&&p.actions[0].date==='2026-08-05');
test('ежедневная привычка','каждый день в 7 пить воду',p=>p.actions.length===1&&p.actions[0].type==='habit'&&p.actions[0].repeat==='daily'&&p.actions[0].time==='07:00');
test('привычка обычной речью','хочу добавить привычку читать каждый день',p=>p.actions.length===1&&p.actions[0].type==='habit'&&/читать/i.test(p.actions[0].title));
test('утренняя зарядка','каждое утро делать зарядку',p=>p.actions.length===1&&p.actions[0].type==='habit'&&/зарядку/i.test(p.actions[0].title));
test('покупки списком','купить молоко хлеб яйца масло',p=>p.actions.length===1&&p.actions[0].type==='shopping'&&p.actions[0].items.length===4);
test('покупка и дело','завтра в 18 позвонить маме купить молоко',p=>has(p,'task',x=>x.time==='18:00')&&has(p,'shopping',x=>/молоко/i.test(x.title)));
test('рабочая категория','завтра срочно отправить договор клиенту',p=>p.actions.length===1&&p.actions[0].type==='task'&&p.actions[0].pri==='R'&&p.actions[0].module==='work');
test('автомобильная категория','завтра в 12 отвезти машину на шиномонтаж',p=>p.actions.length===1&&p.actions[0].module==='car');
test('огородная категория','в субботу утром полить рассаду в теплице',p=>p.actions.length===1&&p.actions[0].module==='farm');
test('длительность и энергия','завтра подготовить сложный отчёт на 90 минут с высокой энергией',p=>p.actions.length===1&&p.actions[0].duration===90&&p.actions[0].energy==='high');
test('через минуту','поставь напоминание через минуту',p=>p.actions.length===1&&p.actions[0].type==='task'&&p.actions[0].title==='Напоминание'&&!!p.actions[0].time);
test('через полчаса','напомни позвонить курьеру через полчаса',p=>p.actions.length===1&&/Позвонить курьеру/i.test(p.actions[0].title)&&!!p.actions[0].time);
test('ошибки диктовки','напом чз минуту позванить курьеру',p=>p.actions.length===1&&/Позвонить курьеру/i.test(p.actions[0].title)&&!!p.actions[0].time);
test('разговорное завтра','заврта в 8-00 позв контакту',p=>p.actions.length===1&&p.actions[0].time==='08:00'&&/Позвонить контакту/i.test(p.actions[0].title));
test('прошедшее явное время','сегодня в 00:00 позвонить врачу',p=>p.actions.length===1&&p.actions[0].type==='task'&&p.actions[0].time==='');
test('перечень с пунктуацией','Завтра написать Анне в 09:00; заказать пропуск в 10:00; встретить курьера в 12:30.',p=>actions(p,'task').length===3&&actions(p,'task').map(x=>x.time).join(',')==='09:00,10:00,12:30');
test('естественная семейная речь','в среду в 8 отвезти ребёнка в школу потом в 18 забрать его домой',p=>actions(p,'task').length===2&&actions(p,'task').map(x=>x.time).join(',')==='08:00,18:00');
test('короткие времена без минут','в понедельник встреча в 9 во вторник созвон в 14',p=>actions(p,'task').length===2&&actions(p,'task').map(x=>x.time).join(',')==='09:00,14:00');
test('разные категории расходов','потратил 800 на бензин и 1200 на кафе и 600 на аптеку',p=>actions(p,'expense').length===3&&actions(p,'expense').map(x=>x.category).join(',')==='Топливо,Кафе,Здоровье');
test('сложная рабочая диктовка','Так в понедельник важная встреча в 15-00 после в 17-00 нужно встретиться с одноклассниками во вторник в 9-00 заказать пропуска сотрудникам после в 11 часов вызвать такси сотрудникам так-же отдать долг в 9т рублей и получить премию в 18000',p=>actions(p,'task').length===4&&actions(p,'task').map(x=>x.time).join(',')==='15:00,17:00,09:00,11:00'&&has(p,'expense',x=>x.amount===9000)&&has(p,'income',x=>x.amount===18000));
test('длинная диктовка без пауз','в пн у меня 3 дела 1 в 15-00 встретить сотрудников в 16 заказать им столик проводить до ресторана в 17 проводить до ресторана после в 11 часов вызвать такси сотрудникам так-же пришла зп 100т рублей из них 2300 потратил на собаку',p=>actions(p,'task').length===4&&actions(p,'task').map(x=>x.time).join(',')==='15:00,16:00,17:00,11:00'&&has(p,'income',x=>x.amount===100000)&&has(p,'expense',x=>x.amount===2300));
test('не создаёт пустой доход','пришла зарплата',p=>actions(p,'income').length===0&&p.unknown.length===1);
test('не создаёт служебное слово','во вторник мне нужно',p=>actions(p,'task').length===0);

const many=Array.from({length:50},(_,i)=>`завтра в ${String(8+(i%12)).padStart(2,'0')}:00 позвонить контакту номер ${i+1}`).join(' ');
test('50 дел одной фразой',many,p=>actions(p,'task').length===50&&p.unknown.length===0);
const noisy=Array.from({length:20},(_,i)=>`${i%2?'заврта':'завтр'} в ${String(8+(i%12)).padStart(2,'0')}:00 ${i%3?'позв':'позванить'} контакту номер ${i+1}`).join(' ');
test('20 дел с ошибками диктовки',noisy,p=>actions(p,'task').length===20&&p.unknown.length===0);

const failed=rows.filter(x=>!x.pass);
console.log(`${failed.length?'FAIL':'PASS'} · ${rows.length-failed.length}/${rows.length}`);
rows.forEach(x=>console.log(`${x.pass?'✓':'✗'} ${x.name}${x.error?'\n  '+x.error:''}`));
if(failed.length)process.exitCode=1;
