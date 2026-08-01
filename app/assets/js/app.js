/* ===== ЕДИНЫЙ НАБОР ЛИНЕЙНЫХ ИКОНОК ===== */
const ICONS = {
  today: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></svg>',
  all: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1"/><circle cx="3.5" cy="12" r="1"/><circle cx="3.5" cy="18" r="1"/></svg>',
  finance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/></svg>',
  ai: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3"/><rect x="5" y="6" width="14" height="12" rx="3"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>',
  habits: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  shopping: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.4 12.4a2 2 0 002 1.6h8.5a2 2 0 002-1.6L22 7H6"/></svg>',
  family: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.2"/><path d="M15.5 20c0-2.5 1.4-4.6 3.5-5.4"/></svg>',
  ach: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 01-10 0V4z"/><path d="M7 6H4v2a3 3 0 003 3M17 6h3v2a3 3 0 01-3 3"/></svg>',
  matrix: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18M3 12h18"/></svg>',
  more: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-2.7.7 1.6 1.6 0 01-3.2 0 1.6 1.6 0 00-2.7-.7l-.1.1a2 2 0 11-2.8-2.8l.1-.1A1.6 1.6 0 004.6 15a1.6 1.6 0 01-.9-2.9 1.6 1.6 0 00.9-2.7 2 2 0 112.8-2.8 1.6 1.6 0 002.7-.7 1.6 1.6 0 013.2 0 1.6 1.6 0 002.7.7 2 2 0 112.8 2.8 1.6 1.6 0 000 2.7z"/></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 015 .2c0 1.7-2.5 2-2.5 3.8"/><circle cx="12" cy="17" r=".6" fill="currentColor"/></svg>',
    notes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 001 1h4"/><path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"/><path d="M9 13h6M9 17h4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A8 8 0 1111.2 3 6.5 6.5 0 0021 12.8z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4l11-11a2.8 2.8 0 10-4-4L4 16v4z"/><path d="M13.5 6.5l4 4"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
  postpone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2M18.5 4.5L21 2M5.5 4.5L3 2"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007.5.5l2-2a5 5 0 00-7-7l-1.2 1.2"/><path d="M14 11a5 5 0 00-7.5-.5l-2 2a5 5 0 007 7l1.2-1.2"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
};
const SHEET_MODAL_META={
  'modal-quick-create':['plus','Одно действие — и готово'],'modal-note':['notes','Мысль, список или важная информация'],
  'modal-habit-stats':['habits','Прогресс за месяц и год'],'modal-postpone':['postpone','Выбери новый подходящий срок'],
  'modal-focus':['sun','Работай без отвлечений'],'modal-exp':['finance','Доход или расход'],
  'modal-receipt':['notes','Камера, Фото и локальное распознавание'],'modal-receipt-details':['notes','Позиции, категории и итог'],
  'modal-cat':['settings','Дела и финансы'],'modal-cat-edit':['settings','Название и значок'],
  'modal-expcat-edit':['settings','Название и значок'],'modal-budget':['finance','Контроль расходов по категориям'],
  'modal-goal':['ach','Накопления с понятным прогрессом'],'modal-settings':['settings','Оформление, уведомления и данные'],
  'modal-ach':['ach','Твои результаты и серии'],'modal-family':['family','Общие дела и покупки'],
  'modal-assign':['family','Передай дело участнику'],'modal-shopping':['shopping','Общий список без дублей'],
  'modal-rating':['ach','Активность за последние 7 дней'],'modal-menu-editor':['more','Выбери основные разделы'],
  'modal-help':['help','Живой тур по возможностям'],'modal-notifications':['postpone','События и умные предложения'],
  'modal-inbox':['family','Новые поручения семьи'],'modal-rules':['ai','Локальные правила категорий'],
  'modal-sync-conflict':['link','Безопасное объединение данных'],'modal-bulk-edit':['edit','Изменения для нескольких дел'],
  'modal-local-edit':['ai','Проверь результат до сохранения'],'modal-links':['link','Свяжи данные между разделами'],
  'modal-dialog':['help','Решение остаётся за тобой'],
  'modal-voice-fallback':['ai','Надёжный режим системной диктовки'],
  'modal-autopay':['calendar','Платёж по расписанию'],'modal-debt':['finance','Кому и сколько должны'],
  'modal-debts-list':['finance','Открытые и закрытые долги'],'modal-autopays-list':['calendar','Будущие списания']
};
function stripSheetTitleEmoji(text){return String(text||'').replace(/^[^\p{L}\p{N}]+/u,'').trim();}
function closeSheetFromHeader(button){
  const modal=button.closest('.modal');if(!modal)return;
  if(modal.id==='modal-dialog'){finishLumoDialog(false);return;}
  const closeButtons=[...modal.querySelectorAll('button')].filter(x=>x!==button&&/^(?:отмена|закрыть|готово|не сейчас)(?:\s|$)/i.test(x.textContent.trim()));
  if(closeButtons.length){closeButtons[closeButtons.length-1].click();return;}
  modal.classList.remove('on');
}
function enhanceModalSheets(){
  document.querySelectorAll('.modal').forEach(modal=>{
    const sheet=modal.querySelector(':scope > .sheet');if(!sheet||sheet.dataset.enhanced)return;sheet.dataset.enhanced='1';sheet.classList.add('lumo-sheet');
    const directTitle=sheet.querySelector(':scope > h3'),meta=SHEET_MODAL_META[modal.id]||['more','Окно Lumo'];
    if(directTitle){
      directTitle.textContent=stripSheetTitleEmoji(directTitle.textContent);
      const top=document.createElement('div');top.className='sheet-topbar';
      const icon=document.createElement('span');icon.className='sheet-title-icon';icon.innerHTML=ICONS[meta[0]]||ICONS.more;
      const copy=document.createElement('div');copy.className='sheet-title-copy';const sub=document.createElement('small');sub.textContent=meta[1];
      sheet.insertBefore(top,directTitle);copy.append(directTitle,sub);top.append(icon,copy);
      const closable=!['modal-help','modal-sync-conflict'].includes(modal.id),tail=document.createElement(closable?'button':'span');tail.className=closable?'sheet-close':'sheet-close-placeholder';
      if(closable){tail.type='button';tail.setAttribute('aria-label','Закрыть');tail.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';tail.onclick=()=>closeSheetFromHeader(tail);}top.append(tail);
    }
    const direct=[...sheet.children],tailButtons=[];for(let i=direct.length-1;i>=0&&direct[i].classList?.contains('btn');i--)tailButtons.unshift(direct[i]);
    if(tailButtons.length===2){const actions=document.createElement('div');actions.className='sheet-actions';sheet.insertBefore(actions,tailButtons[0]);tailButtons.forEach(x=>actions.append(x));}
    const lastButton=[...sheet.querySelectorAll(':scope > .btn')].at(-1);if(lastButton&&directTitle&&!['modal-help','modal-sync-conflict'].includes(modal.id)&&/^(?:отмена|закрыть|готово|не сейчас)(?:\s|$)/i.test(lastButton.textContent.trim()))lastButton.classList.add('sheet-redundant-close');
  });
  const taskHead=document.querySelector('#modal .task-form-head');if(taskHead&&!taskHead.querySelector('.sheet-close')){const close=document.createElement('button');close.type='button';close.className='sheet-close';close.setAttribute('aria-label','Закрыть');close.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';close.onclick=()=>closeSheetFromHeader(close);taskHead.append(close);taskHead.classList.add('has-close');}
}
let lumoDialogDone=null;
function showLumoDialog({title='Подтверждение',message='',confirmText='Продолжить',cancelText='Отмена',input=false,value='',label='Значение',danger=false}={}){
  const modal=document.getElementById('modal-dialog'),titleEl=document.getElementById('dialog-title'),inputWrap=document.getElementById('dialog-input-wrap'),inputEl=document.getElementById('dialog-input'),cancel=document.getElementById('dialog-cancel'),confirm=document.getElementById('dialog-confirm');
  if(lumoDialogDone)lumoDialogDone(null);
  titleEl.textContent=title;document.getElementById('dialog-message').textContent=message;document.getElementById('dialog-input-label').textContent=label;
  inputWrap.hidden=!input;inputEl.value=value||'';cancel.textContent=cancelText;cancel.hidden=!cancelText;confirm.textContent=confirmText;confirm.classList.toggle('danger-soft',danger);
  modal.classList.add('on');requestAnimationFrame(()=>input&&inputEl.focus());
  return new Promise(resolve=>{lumoDialogDone=resolve;});
}
function finishLumoDialog(ok){const modal=document.getElementById('modal-dialog'),input=document.getElementById('dialog-input'),done=lumoDialogDone;lumoDialogDone=null;modal.classList.remove('on');if(done)done(ok?(!document.getElementById('dialog-input-wrap').hidden?input.value:true):null);}
function lumoConfirm(message,title='Подтвердить действие',confirmText='Продолжить',danger=false){return showLumoDialog({title,message,confirmText,danger});}
function lumoPrompt(title,message='',value='',label='Значение'){return showLumoDialog({title,message,input:true,value,label,confirmText:'Сохранить'});}
function lumoAlert(message,title='Важно'){return showLumoDialog({title,message,confirmText:'Понятно',cancelText:''});}
const KEY='planner_data_v2';
const BACKUP_KEY='planner_data_v2_backups';
function parseData(raw){
  if(!raw)return null;
  try{
    const d=JSON.parse(raw);
    return d&&typeof d==='object'&&!Array.isArray(d)?d:null;
  }catch(e){return null;}
}

function load(){
  const current=parseData(localStorage.getItem(KEY));
  if(current)return current;
  const box=parseData(localStorage.getItem(BACKUP_KEY));
  const items=box&&Array.isArray(box.items)?box.items:[];
  for(const item of items){
    const restored=parseData(item.data);
    if(restored){
      try{localStorage.setItem(KEY,item.data);}catch(e){}
      return restored;
    }
  }
  return {};
}
function rememberBackup(raw){
  if(!parseData(raw))return;
  const box=parseData(localStorage.getItem(BACKUP_KEY))||{items:[]};
  if(!Array.isArray(box.items))box.items=[];
  if(box.items[0]&&box.items[0].data===raw)return;
  box.items.unshift({at:new Date().toISOString(),data:raw});
  box.items=box.items.slice(0,5);
  try{localStorage.setItem(BACKUP_KEY,JSON.stringify(box));}catch(e){}
}
let _insightRefreshTimer=null;
function queueSmartInsightRefresh(){clearTimeout(_insightRefreshTimer);_insightRefreshTimer=setTimeout(()=>{if('serviceWorker'in navigator)scheduleSmartInsightPush(false)},1200)}
function save(d){
  try{
    const previous=localStorage.getItem(KEY);
    if(previous)rememberBackup(previous);
    const serialized=JSON.stringify(d);
    localStorage.setItem(KEY,serialized);
    rememberBackup(serialized);
    if(!window.__lumoCloudApplying){localStorage.setItem('lumo_cloud_dirty_v1','1');scheduleCloudSync();}
    queueSmartInsightRefresh();
  }
  catch(e){toast('⚠️ Память заполнена! Сделай бэкап');}
}
function getTasks(){const d=load();return d.tasks||[]}
function setTasks(t){const d=load();d.tasks=t;save(d);syncPushData();updateAppBadge();}
async function updateAppBadge(){
  if(!('setAppBadge'in navigator))return;
  const tk=todayKey();
  const unread=Number(localStorage.getItem('lumo_unread_count_v1')||0),due=getTasks().filter(t=>!t.done&&t.date&&t.date<=tk).length;
  const count=unread||due;
  try{
    if(count>0)await navigator.setAppBadge(count);
    else if('clearAppBadge'in navigator)await navigator.clearAppBadge();
  }catch(e){}
}
function vibrate(ms){if(navigator.vibrate)try{navigator.vibrate(ms)}catch(e){}}

const monthNames=['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
const monthFull=['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];

const DEFAULT_CATS=[
  {id:'personal',emoji:'📋',name:'Личное'},
  {id:'car',emoji:'🚗',name:'Авто'},
  {id:'farm',emoji:'🌱',name:'Огород'},
  {id:'work',emoji:'💼',name:'Работа'}
];
function getCats(){const d=load();if(!d.cats){d.cats=JSON.parse(JSON.stringify(DEFAULT_CATS));save(d);}return d.cats;}
function setCats(c){const d=load();d.cats=c;save(d);}
function catLabel(id){const c=getCats().find(x=>x.id===id);return c?`${c.emoji} ${c.name}`:'📋 Личное';}
const modLabel=new Proxy({},{get:(_,id)=>catLabel(id)});

const DEFAULT_EXPCATS=[
  {name:'Продукты',i:'🛒',c:'#00b894'},{name:'Топливо',i:'⛽',c:'#e17055'},{name:'Кафе',i:'🍔',c:'#fdcb6e'},
  {name:'Транспорт',i:'🚌',c:'#0984e3'},{name:'Одежда',i:'👕',c:'#e84393'},{name:'Развлечения',i:'🎮',c:'#6c5ce7'},
  {name:'Жильё',i:'🏠',c:'#6c5ce7'}, 
  {name:'Коммуналка',i:'💡',c:'#0984e3'},
  {name:'Здоровье',i:'💊',c:'#00cec9'},{name:'Дом',i:'🛋️',c:'#fab1a0'},{name:'Дети',i:'👶',c:'#fd79a8'},
  {name:'Авто',i:'🚗',c:'#e17055'},{name:'Огород',i:'🌱',c:'#00b894'},{name:'Прочее',i:'📦',c:'#b2bec3'}
];
function getExpCats(){
  const d=load();
  if(!d.expcats){
    d.expcats=JSON.parse(JSON.stringify(DEFAULT_EXPCATS));
    save(d);
  }
  // МИГРАЦИЯ: добавляем новые категории старым юзерам
  const need=[
    {name:'Жильё',i:'🏠',c:'#6c5ce7'},
    {name:'Коммуналка',i:'💡',c:'#0984e3'}
  ];
  let changed=false;
  need.forEach(nc=>{
    if(!d.expcats.some(c=>c.name===nc.name)){
      d.expcats.splice(d.expcats.length-1,0,nc); // перед "Прочее"
      changed=true;
    }
  });
  if(changed)save(d);
  return d.expcats;
}
function setExpCats(c){const d=load();d.expcats=c;save(d);}
const CAT_COLORS=['#00b894','#e17055','#fdcb6e','#0984e3','#e84393','#6c5ce7','#00cec9','#fab1a0','#fd79a8','#a29bfe','#55efc4','#ffeaa7'];
function catStyleOf(name){const c=getExpCats().find(x=>x.name===name);return c||{i:'📦',c:'#b2bec3'};}

const priColor={R:'var(--bad)',Y:'var(--warn)',B:'var(--brand)'};
  /* ===== НАСТРАИВАЕМОЕ МЕНЮ ===== */
// Все разделы, которыми можно управлять (кроме "Ещё" — он всегда есть)
const NAV_SECTIONS=[
  {id:'today',    icon:ICONS.today,    name:'Сегодня'},
  {id:'all',      icon:ICONS.all,      name:'Дела'},
  {id:'finance',  icon:ICONS.finance,  name:'Финансы'},
  {id:'ai',       icon:ICONS.ai,       name:'ИИ'},
  {id:'calendar', icon:ICONS.calendar, name:'Календарь'},
  {id:'notes',    icon:ICONS.notes,    name:'Заметки'}, 
  {id:'habits',   icon:ICONS.habits,   name:'Привычки'},
  {id:'shopping', icon:ICONS.shopping, name:'Покупки'},
  {id:'family',   icon:ICONS.family,   name:'Семья'},
  {id:'ach',      icon:ICONS.ach,      name:'Награды'},
  {id:'matrix',   icon:ICONS.matrix,   name:'Матрица'}
];
// Набор по умолчанию (максимум 4 своих + "Ещё")
const DEFAULT_NAV=['today','all','finance','ai'];
function getNavConfig(){
  const d=load();
  if(!Array.isArray(d.navConfig)||!d.navConfig.length)return DEFAULT_NAV.slice();
  return d.navConfig.slice(0,5);
}
function setNavConfig(arr){const d=load();d.navConfig=arr.slice(0,5);save(d);}
function sectionInfo(id){return NAV_SECTIONS.find(s=>s.id===id)||null;}

let currentTab='all',currentPri='Y',editId=null,expType='exp',finDate=new Date(),calDate=new Date(),calSel=null;
let expShared=false, editFinId=null, editFinType=null;

function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function jsArg(s){
  return JSON.stringify(String(s==null?'':s))
    .replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'\\u003c');
}
function todayKey(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function fmtDate(k){if(!k)return'';const[y,m,d]=k.split('-').map(Number);if(!y)return k;return d+' '+monthNames[m-1]}
function fmtMoney(n){return Number(n||0).toLocaleString('ru-RU')}
function fmtReceiptQty(n){const v=Number(n)||1;return v.toLocaleString('ru-RU',{maximumFractionDigits:3})}
let linkSource=null;
function dataLinkRecords(){
  const d=load(),out=[];
  (d.tasks||[]).forEach(x=>out.push({type:'task',id:String(x.id),icon:'✓',title:x.title||'Дело'}));
  (d.notes||[]).forEach(x=>out.push({type:'note',id:String(x.id),icon:'▤',title:x.title||'Заметка'}));
  (d.finance||[]).forEach(x=>out.push({type:'expense',id:String(x.id),icon:'₽',title:(x.merchant||x.desc||x.category||'Расход')+' · '+fmtMoney(x.amount)+' ₽'}));
  (d.income||[]).forEach(x=>out.push({type:'income',id:String(x.id),icon:'＋',title:(x.source||x.desc||'Доход')+' · '+fmtMoney(x.amount)+' ₽'}));
  (d.habits||[]).forEach(x=>out.push({type:'habit',id:String(x.id),icon:'◇',title:x.name||'Привычка'}));
  (d.shopping||[]).forEach(x=>out.push({type:'shopping',id:String(x.id),icon:'□',title:x.t||'Покупка'}));
  return out;
}
function getDataLinks(){const d=load();return Array.isArray(d.dataLinks)?d.dataLinks:[]}
function recordByRef(type,id){return dataLinkRecords().find(x=>x.type===type&&String(x.id)===String(id))}
function linksFor(type,id){return getDataLinks().filter(x=>(x.aType===type&&String(x.aId)===String(id))||(x.bType===type&&String(x.bId)===String(id)))}
function otherLinkRef(link,type,id){return link.aType===type&&String(link.aId)===String(id)?recordByRef(link.bType,link.bId):recordByRef(link.aType,link.aId)}
function relatedLinksHTML(type,id){const refs=linksFor(type,id).map(x=>otherLinkRef(x,type,id)).filter(Boolean);return refs.length?`<div class="related-chips">${refs.slice(0,4).map(x=>`<button onclick="event.stopPropagation();openLinkedRecord(${jsArg(x.type)},${jsArg(x.id)})">${x.icon} ${esc(x.title)}</button>`).join('')}</div>`:''}
function openDataLinks(type,id){linkSource={type,id:String(id)};const src=recordByRef(type,id);if(!src)return;document.getElementById('link-title').textContent='Связи: '+src.title;renderDataLinks();document.getElementById('modal-links').classList.add('on')}
function closeDataLinks(){document.getElementById('modal-links').classList.remove('on');linkSource=null}
function renderDataLinks(){if(!linkSource)return;const existing=linksFor(linkSource.type,linkSource.id),current=document.getElementById('link-current');current.innerHTML=existing.length?existing.map(l=>{const x=otherLinkRef(l,linkSource.type,linkSource.id);return x?`<div class="link-row"><span>${x.icon} ${esc(x.title)}<small>${esc(x.type)}</small></span><button onclick="deleteDataLink(${jsArg(l.id)})">×</button></div>`:''}).join(''):'<div class="local-edit-note">Связей пока нет</div>';const linked=new Set(existing.map(l=>{const x=otherLinkRef(l,linkSource.type,linkSource.id);return x?x.type+':'+x.id:''}));const choices=dataLinkRecords().filter(x=>!(x.type===linkSource.type&&x.id===linkSource.id)&&!linked.has(x.type+':'+x.id));document.getElementById('link-target').innerHTML=choices.map(x=>`<option value="${esc(x.type+':'+x.id)}">${x.icon} ${esc(x.title)}</option>`).join('')||'<option value="">Нет доступных записей</option>'}
function saveDataLink(){if(!linkSource)return;const raw=document.getElementById('link-target').value;if(!raw)return;const p=raw.indexOf(':'),type=raw.slice(0,p),id=raw.slice(p+1),d=load();d.dataLinks=Array.isArray(d.dataLinks)?d.dataLinks:[];d.dataLinks.push({id:'ln'+Date.now(),aType:linkSource.type,aId:linkSource.id,bType:type,bId:id,createdAt:Date.now()});save(d);renderDataLinks();toast('Связь добавлена')}
function deleteDataLink(id){const d=load();d.dataLinks=(d.dataLinks||[]).filter(x=>x.id!==id);save(d);renderDataLinks()}
function openLinkedRecord(type,id){closeDataLinks();if(type==='task')editTask(Number(id));else if(type==='note')openNoteModal(Number(id));else if(type==='expense'){const x=(load().finance||[]).find(r=>String(r.id)===String(id));x?.receiptItems?openReceiptDetails(x.id):editExpense(x.id)}else if(type==='income')editIncome(Number(id));else if(type==='habit'){switchTab('habits');setTimeout(()=>openHabitStats(id),80)}else if(type==='shopping')openShopping()}
  function normAmount(a){
  if(typeof a==='string')a=a.replace(/\s/g,'').replace(',','.');
  let n=Math.abs(Number(a));
  return isNaN(n)?0:n;
}
function toast(t){const el=document.getElementById('toast');el.textContent=t;el.classList.add('on');setTimeout(()=>el.classList.remove('on'),1800)}

/* ===== ПОГОДА (Open-Meteo, без ключа) ===== */
const WEATHER_KEY='weather_cache_v1';
const WMO={0:['☀️','ясно'],1:['🌤️','малооблачно'],2:['⛅','облачно'],3:['☁️','пасмурно'],45:['🌫️','туман'],48:['🌫️','изморозь'],51:['🌦️','морось'],53:['🌦️','морось'],55:['🌧️','морось'],61:['🌧️','дождь'],63:['🌧️','дождь'],65:['🌧️','ливень'],66:['🌧️','ледяной дождь'],67:['🌧️','ледяной дождь'],71:['🌨️','снег'],73:['🌨️','снег'],75:['❄️','снегопад'],77:['❄️','снег'],80:['🌦️','ливни'],81:['🌧️','ливни'],82:['⛈️','ливни'],85:['🌨️','снег'],86:['❄️','снег'],95:['⛈️','гроза'],96:['⛈️','гроза'],99:['⛈️','гроза с градом']};
function wmoInfo(code){return WMO[code]||['🌡️','погода'];}
function getWeatherCache(){try{return JSON.parse(localStorage.getItem(WEATHER_KEY))||null}catch(e){return null}}
function setWeatherCache(w){localStorage.setItem(WEATHER_KEY,JSON.stringify(w))}

async function fetchWeatherByCoords(lat,lon){
  const url=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&forecast_days=2`;
  const r=await fetch(url);
  if(!r.ok)throw new Error('weather http '+r.status);
  const d=await r.json();
  const cur=d.current||{},day=d.daily||{};
  const [icon,desc]=wmoInfo(cur.weather_code);
  const [ticon,tdesc]=wmoInfo((day.weather_code||[])[1]);
  return {
    ok:true,ts:Date.now(),lat,lon,
    temp:Math.round(cur.temperature_2m),icon,desc,
    wind:Math.round(cur.wind_speed_10m||0),hum:cur.relative_humidity_2m||0,
    tmax:Math.round((day.temperature_2m_max||[])[0]),tmin:Math.round((day.temperature_2m_min||[])[0]),
    rainToday:(day.precipitation_probability_max||[])[0]||0,
    tomIcon:ticon,tomDesc:tdesc,tomMax:Math.round((day.temperature_2m_max||[])[1]),
    tomRain:(day.precipitation_probability_max||[])[1]||0
  };
}
function getCoords(force){
  return new Promise((resolve,reject)=>{
    const cache=getWeatherCache();
    if(!force&&cache&&cache.lat){resolve({lat:cache.lat,lon:cache.lon});return;}
    if(!navigator.geolocation){
      if(cache&&cache.lat)resolve({lat:cache.lat,lon:cache.lon});else reject(new Error('no geo'));return;
    }
    navigator.geolocation.getCurrentPosition(
      p=>resolve({lat:p.coords.latitude,lon:p.coords.longitude}),
      ()=>{if(cache&&cache.lat)resolve({lat:cache.lat,lon:cache.lon});else reject(new Error('geo denied'));},
      {timeout:8000,maximumAge:600000}
    );
  });
}
async function refreshWeather(force){
  const chip=document.getElementById('weatherChip');if(!chip)return;
  const cache=getWeatherCache();
  if(!force&&cache&&cache.temp!=null&&(Date.now()-cache.ts<1800000)){renderWeatherChip(cache);return;}
  if(cache&&cache.temp!=null)renderWeatherChip(cache);else chip.textContent='🌤️ погода...',chip.style.display='';
  try{
    const {lat,lon}=await getCoords(force);
    const w=await fetchWeatherByCoords(lat,lon);
    setWeatherCache(w);renderWeatherChip(w);
    if(force)toast('🌤️ Погода обновлена');
  }catch(e){if(!cache)chip.style.display='none';}
}
function renderWeatherChip(w){
  const chip=document.getElementById('weatherChip');
  if(!chip||w.temp==null){if(chip)chip.style.display='none';return;}
  chip.style.display='';
  chip.textContent=`${w.icon} ${w.temp}°C · ${w.desc}`;
}
function weatherSummaryText(){
  const w=getWeatherCache();if(!w||w.temp==null)return null;
  let s=`Сейчас ${w.icon} ${w.temp}°C, ${w.desc}`;
  if(w.tmax!=null&&w.tmin!=null)s+=`. Днём до ${w.tmax}°, ночью ${w.tmin}°`;
  if(w.wind)s+=`. Ветер ${w.wind} км/ч`;
  if(w.hum)s+=`, влажность ${w.hum}%`;
  if(w.rainToday>=50)s+=`. ☔ Вероятность осадков ${w.rainToday}% — возьми зонт!`;
  if(w.tomMax!=null)s+=`\n\nЗавтра: ${w.tomIcon} ${w.tomDesc}, до ${w.tomMax}°`;
  return s+'.';
}
function isWeatherQuery(text){
  return /погод|градус|тепло|холодно|дожд|снег|солнеч|ветер|ясно|пасмурн|температур|на улице|за окном|зонт|одеть|одеться/i.test(text);
}

/* ===== РОЛИ ===== */
const FAMILY_ROLES=[
  {id:'husband',emoji:'👨',name:'Муж'},{id:'wife',emoji:'👩',name:'Жена'},
  {id:'son',emoji:'👦',name:'Сын'},{id:'daughter',emoji:'👧',name:'Дочь'},
  {id:'parent',emoji:'👴',name:'Родитель'},{id:'other',emoji:'🧑',name:'Другое'}
];
function roleInfo(id){return FAMILY_ROLES.find(r=>r.id===id)||FAMILY_ROLES[5];}

function renderNav(){
  const nav=document.getElementById('nav');
  const cfg=getNavConfig();
  const tk=todayKey();
  const overdueCount=getTasks().filter(t=>isOverdue(t)&&t.date<tk).length;
  let html='';
  cfg.forEach(id=>{
    const s=sectionInfo(id);
    if(!s)return;
    const badge=(s.id==='all'&&overdueCount)?`<span class="badge">${overdueCount}</span>`:'';
    html+=`<button data-tab="${s.id}" class="${currentTab===s.id?'active':''}" onclick="switchTab('${s.id}')">${badge}<i>${s.icon}</i>${esc(s.name)}</button>`;
  });
  // "Ещё" — всегда последняя
 html+=`<button data-tab="more" class="${currentTab==='more'?'active':''}" onclick="switchTab('more')"><i>${ICONS.more}</i>Ещё</button>`;
  nav.innerHTML='<span id="nav-pill"></span>'+html;
  // Плашка создаётся заново вместе с меню. Ставим её на место синхронно,
  // до первого кадра — иначе iOS успевает показать перелёт от края экрана.
  const pill=nav.querySelector('#nav-pill');
  const active=nav.querySelector('button.active');
  if(pill&&active){
    pill.style.transition='none';
    pill.style.left=active.offsetLeft+'px';
    pill.style.width=active.offsetWidth+'px';
    pill.style.opacity='1';
    _lastPillLeft=active.offsetLeft;
    void pill.offsetWidth;
    requestAnimationFrame(()=>{if(pill.isConnected)pill.style.transition='';});
  }
  alignFloatingControls();
  requestAnimationFrame(alignFloatingControls);
  }

let _lastPillLeft=null;
function alignFloatingControls(){
  const nav=document.getElementById('nav');if(!nav)return;
  const navTop=nav.getBoundingClientRect().top;
  if(!Number.isFinite(navTop)||navTop<=0)return;
  [document.getElementById('ai-bar'),document.getElementById('fab')].forEach(el=>{
    if(!el||getComputedStyle(el).display==='none')return;
    const rect=el.getBoundingClientRect();
    const gap=navTop-rect.bottom;
    if(!Number.isFinite(gap)||Math.abs(gap-8)<.5)return;
    const bottom=parseFloat(getComputedStyle(el).bottom)||91;
    el.style.bottom=Math.max(4,bottom-(gap-8))+'px';
  });
}
function moveNavPill(){
  const nav=document.getElementById('nav');
  const pill=document.getElementById('nav-pill');
  if(!nav||!pill)return;
  const active=nav.querySelector('button.active');
  if(!active){pill.style.opacity='0';return;}
  const newLeft=active.offsetLeft;
  const newW=active.offsetWidth;
  const isFirstPosition=_lastPillLeft===null;

  if(isFirstPosition){
    pill.style.transition='none';
  }

  // определяем направление
  pill.classList.remove('morph-left','morph-right','morphing');
  if(_lastPillLeft!==null&&Math.abs(newLeft-_lastPillLeft)>2){
    pill.classList.add(newLeft>_lastPillLeft?'morph-right':'morph-left');
    void pill.offsetWidth; // рестарт анимации
    pill.classList.add('morphing');
    setTimeout(()=>pill.classList.remove('morphing','morph-left','morph-right'),430);
  }
  _lastPillLeft=newLeft;

  pill.style.left=newLeft+'px';
  pill.style.width=newW+'px';
  pill.style.opacity='1';
  if(isFirstPosition){
    void pill.offsetWidth;
    requestAnimationFrame(()=>{pill.style.transition='';});
  }
}
window.addEventListener('resize',()=>setTimeout(moveNavPill,50));
window.addEventListener('resize',()=>setTimeout(alignFloatingControls,60));
function syncSafeBottomInset(){
  const probe=document.createElement('div');
  probe.style.cssText='position:fixed;left:-9999px;bottom:0;padding-bottom:env(safe-area-inset-bottom);visibility:hidden;pointer-events:none';
  document.body.appendChild(probe);
  const measured=parseFloat(getComputedStyle(probe).paddingBottom)||0;
  probe.remove();
  const standalone=window.matchMedia?.('(display-mode: standalone)').matches||navigator.standalone===true;
  const safe=standalone?Math.max(0,Math.min(34,measured)):Math.max(0,Math.min(24,measured));
  document.documentElement.style.setProperty('--lumo-safe-bottom',safe+'px');
}
syncSafeBottomInset();
window.addEventListener('pageshow',syncSafeBottomInset);
window.addEventListener('resize',()=>setTimeout(syncSafeBottomInset,40));
if(window.visualViewport)window.visualViewport.addEventListener('resize',()=>{setTimeout(alignFloatingControls,60);setTimeout(syncSafeBottomInset,40)});
function fabRipple(e){
  const fab=document.getElementById('fab');
  if(!fab)return;
  const rect=fab.getBoundingClientRect();
  const r=document.createElement('span');
  r.className='ripple';
  const x=(e&&e.clientX?e.clientX:rect.left+rect.width/2)-rect.left;
  const y=(e&&e.clientY?e.clientY:rect.top+rect.height/2)-rect.top;
  r.style.left=x+'px';r.style.top=y+'px';
  r.style.width=r.style.height=rect.width+'px';
  fab.appendChild(r);
  fab.classList.add('drop');
  setTimeout(()=>{r.remove();fab.classList.remove('drop');},600);
  vibrate(15);
}
  
function switchTab(tab){
  const _vv=document.getElementById('view');
  if(_vv){_vv.classList.remove('page-in');void _vv.offsetWidth;_vv.classList.add('page-in');}
  const heroText=document.getElementById('hero-textblock');
  if(heroText)heroText.style.display='';
  const heroBtns=document.querySelector('.hero-btns');
  if(heroBtns)heroBtns.style.display='flex';
  currentTab=tab;
  const isAI=tab==='ai',isFin=tab==='finance',isCal=tab==='calendar',isHabits=tab==='habits';
  const isMore=tab==='more',isToday=tab==='today',isMatrix=tab==='matrix',isNotes=tab==='notes';
  const hideList=isAI||isFin;
  document.getElementById('ai-view').style.display=isAI?'block':'none';
  document.getElementById('ai-bar').style.display=isAI?'flex':'none';
  document.getElementById('view').style.display=isAI?'none':'block';
  document.getElementById('fab').style.display=(isAI||isMore)?'none':'flex';
  document.getElementById('filters').style.display=(hideList||isCal||isHabits||isMore||isToday||isMatrix||isNotes)?'none':'flex';
  document.getElementById('search-wrap').style.display=(hideList||isCal||isHabits||isMore||isToday||isMatrix||isNotes)?'none':'block';
  document.querySelector('.hero-stats').style.display=(hideList||isCal||isHabits||isMore||isToday||isMatrix||isNotes)?'none':'flex';
  let title='Мои дела';
  if(tab==='all')title='Мои дела';
else if(tab==='finance')title='Финансы';
else if(tab==='ai')title='Ассистент';
else if(tab==='calendar')title='Календарь';
else if(tab==='habits')title='Привычки';
else if(tab==='more')title='Ещё';
else if(tab==='today')title='Сегодня';
else if(tab==='matrix')title='Матрица Эйзенхауэра';
  else if(tab==='notes')title='Заметки';
  else title=catLabel(tab);

  // Приветствие по времени суток — только на "Сегодня"
  if(tab==='today'){
     title=''; 
  }
  document.getElementById('hero-title').textContent=title;
 document.getElementById('streakBox').style.display=(hideList||isToday)?'none':'inline-flex';
  // Скрываем всю строку чипов + дату на "Сегодня"
const chipsRow=document.getElementById('hero-chips-row');
if(chipsRow)chipsRow.style.display=(isToday||hideList)?'none':'flex';
document.getElementById('hero-date').style.display=isToday?'none':'';
if(!isToday)renderHeroDate();
  const qc=document.getElementById('quoteChip');
if(qc)qc.style.display=(isToday||hideList)?'none':'';
document.getElementById('weatherChip').style.display=(hideList||isToday)?'none':'';
  if(isAI){document.getElementById('fab').style.display='none';if(!document.getElementById('ai-chat').children.length)aiHello();}
  else if(isFin)renderFinance();
  else if(isCal)renderCalendar();
  else if(isHabits)renderHabits();
  else if(tab==='more')renderMore();
  else if(tab==='today')renderToday();
  else if(tab==='notes')renderNotes();
  else if(tab==='matrix')renderMatrix();
  else render();
  updateFabLabel();
  renderNav();
}
function refreshCurrentTab(){
  switchTab(currentTab);
}
let activeCalendarDay=todayKey(),dayBoundaryTimer=null;
function scheduleDayBoundaryRefresh(){
  if(dayBoundaryTimer)clearTimeout(dayBoundaryTimer);
  const next=new Date();next.setHours(24,0,1,0);
  dayBoundaryTimer=setTimeout(()=>{refreshDayBoundary();scheduleDayBoundaryRefresh();},Math.max(1000,next.getTime()-Date.now()));
}
function refreshDayBoundary(force=false){
  const nextDay=todayKey();if(!force&&nextDay===activeCalendarDay)return false;
  activeCalendarDay=nextDay;bulkMode=false;bulkSelected.clear();updateBulkBar();
  renderHeroDate();renderStreak();renderFilters();refreshCurrentTab();updateAppBadge();
  scheduleAllTimeouts();scheduleHabitReminderLocal();scheduleShoppingReminderLocal();
  processAutoPays();scheduleAutoPayReminders();scheduleDebtReminders();
  scheduleMorningPush();scheduleHabitPushServer();scheduleShoppingPushServer();scheduleSmartInsightPush();syncPushData();
  return true;
}
let filterState='active';
let bulkMode=false;
const bulkSelected=new Set();
function bulkVisibleTasks(){
  let tasks=getTasks().slice();
  if(currentTab!=='all')tasks=tasks.filter(t=>t.module===currentTab);
  const tk=todayKey();
  if(filterState==='active')tasks=tasks.filter(t=>!t.done);
  else if(filterState==='done')tasks=tasks.filter(t=>t.done);
  else if(filterState==='today')tasks=tasks.filter(t=>t.date===tk);
  const q=(document.getElementById('search')?.value||'').toLowerCase().trim();
  if(q)tasks=tasks.filter(t=>`${t.title||''} ${t.desc||''}`.toLowerCase().includes(q));
  return tasks;
}
function renderFilters(){
  const f=document.getElementById('filters');
  const opts=[['active','Активные'],['today','Сегодня'],['done','Готово'],['all','Всё']];
  const canSelect=bulkVisibleTasks().length>0;
  if(!canSelect&&bulkMode){bulkMode=false;bulkSelected.clear();updateBulkBar();}
  const selectLabel=bulkMode?'Завершить выбор':'Выбрать несколько дел';
  f.innerHTML=opts.map(([k,l])=>`<button class="${filterState===k?'active':''}" onclick="setFilter('${k}')">${l}</button>`).join('')+(canSelect?`<button class="bulk-toggle ${bulkMode?'on':''}" onclick="toggleBulkMode()" aria-label="${selectLabel}" title="${selectLabel}">${bulkMode?ICONS.habits:ICONS.all}<span>${bulkMode?'Готово':'Выбрать'}</span></button>`:'');
}
function setFilter(k){filterState=k;renderFilters();render();}
function openTaskStat(kind){
  switchTab('all');
  filterState=kind==='today'?'today':kind==='done'?'done':'active';
  renderFilters();render();
}

function isOverdue(t){
  if(t.done||!t.date)return false;
  const tk=todayKey();
  if(t.date>tk)return false;
  if(t.date<tk)return true;
  if(t.time){const now=new Date();const hm=String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');return t.time<hm;}
  return false;
}
function taskCardHTML(t, isFam){
  if(isFam===undefined)isFam=!!getFamilyState();
  const subs=t.subs||[];
  const sdone=subs.filter(s=>s.done).length;
  const over=isOverdue(t);
  const fromBadge=t.fromName?`<span class="assign-badge">📥 от ${esc(t.fromName)}</span>`:'';
  return `<div class="task ${t.done?'done':''} ${over?'overdue':''} ${bulkSelected.has(String(t.id))?'bulk-selected':''}" data-id="${t.id}">
    <div class="bar" style="background:${over?'var(--bad)':(priColor[t.pri]||priColor.Y)}"></div>
    <div class="chk ${t.done?'on':''}" onclick="${bulkMode?`toggleBulkTask(${jsArg(t.id)})`:`toggleTask(${t.id})`}">${bulkMode?(bulkSelected.has(String(t.id))?'✓':''):t.done?'✓':''}</div>
    <div class="t-body">
      <div class="t-title" onclick="editTask(${t.id})" role="button" tabindex="0">${esc(t.title)}</div>
      <div class="t-meta"><span>${modLabel[t.module]||'📋 Личное'}</span>${fromBadge}${t.date?`<span class="${over?'overdue-badge':''}">📅 ${fmtDate(t.date)}</span>`:''}${t.time?`<span class="time-badge">🕐 ${esc(t.time)}</span>`:''}${t.duration?`<span>⏱ ${Number(t.duration)} мин</span>`:''}${t.energy?`<span>${t.energy==='high'?'⚡':t.energy==='low'?'🌿':'◐'} ${t.energy==='high'?'много':t.energy==='low'?'мало':'средне'}</span>`:''}${t.repeat?`<span class="rep-badge">🔁 ${t.repeat==='daily'?'день':t.repeat==='weekly'?'нед':'мес'}</span>`:''}${subs.length?`<span class="subprog">✅ ${sdone}/${subs.length}</span>`:''}</div>
      ${t.desc?`<div class="t-desc">${esc(t.desc)}</div>`:''}
	  ${relatedLinksHTML('task',t.id)}
	  ${(t.photos&&t.photos.length)?`<div class="task-photos">${t.photos.map((p,i)=>`<img class="task-photo" src="${p}" onclick="openTaskPhoto(${t.id},${i})">`).join('')}</div>`:''}
      ${subs.length?`<div class="subtasks">${subs.map((s,i)=>`<div class="subtask ${s.done?'done':''}"><div class="sc ${s.done?'on':''}" onclick="toggleSubtask(${t.id},${i})">${s.done?'✓':''}</div><span>${esc(s.t)}</span></div>`).join('')}</div>`:''}
    </div>
    <button class="task-more" onclick="event.stopPropagation();toggleTaskActions(this)" aria-label="Действия">${ICONS.more}</button>
    <div class="t-acts" onclick="event.stopPropagation()">
      ${isFam?`<button onclick="openAssign(${t.id})" title="Поручить" aria-label="Поручить">${ICONS.send}</button>`:''}
      <button onclick="openDataLinks('task',${jsArg(t.id)})" title="Связи" aria-label="Связи">${ICONS.link}</button>
      <button onclick="openPostpone(${t.id})" title="Отложить" aria-label="Отложить">${ICONS.postpone}</button>
      <button onclick="editTask(${t.id})" title="Изменить" aria-label="Изменить">${ICONS.edit}</button>
      <button onclick="delTask(${t.id})" title="Удалить" aria-label="Удалить">${ICONS.trash}</button>
    </div>
  </div>`;
}

function toggleTaskActions(button){
  const card=button?.closest('.task');if(!card)return;
  document.querySelectorAll('.task.actions-open').forEach(x=>{if(x!==card)x.classList.remove('actions-open')});
  card.classList.toggle('actions-open');vibrate(8);
}

function toggleBulkMode(){bulkMode=!bulkMode;if(!bulkMode)bulkSelected.clear();renderFilters();render();updateBulkBar();}
function toggleBulkTask(id){const k=String(id);bulkSelected.has(k)?bulkSelected.delete(k):bulkSelected.add(k);render();updateBulkBar();}
function updateBulkBar(){const bar=document.getElementById('bulk-bar'),count=document.getElementById('bulk-count');if(!bar)return;const visible=bulkMode&&bulkSelected.size>0;bar.classList.toggle('on',visible);bar.setAttribute('aria-hidden',visible?'false':'true');if(count)count.textContent=bulkSelected.size+' выбрано';}
function bulkApply(mutator){if(!bulkSelected.size){toast('Сначала выбери дела');return;}const tasks=getTasks();let n=0;tasks.forEach(t=>{if(bulkSelected.has(String(t.id))){mutator(t);n++;}});setTasks(tasks);bulkSelected.clear();render();updateBulkBar();toast('Изменено дел: '+n);}
function bulkMoveDate(offset){const d=new Date();d.setDate(d.getDate()+offset);bulkApply(t=>{t.date=dateKeyOf(d);if(offset===0&&t.time&&isPastTaskSchedule(t.date,t.time))t.time='';t.done=false;});}
function openBulkEdit(){if(!bulkSelected.size){toast('Сначала выбери дела');return;}const cat=document.getElementById('bulk-category');cat.innerHTML='<option value="">Не менять</option>'+getCats().map(c=>`<option value="${esc(c.id)}">${c.emoji} ${esc(c.name)}</option>`).join('');document.getElementById('bulk-date').value='';document.getElementById('bulk-priority').value='';document.getElementById('modal-bulk-edit').classList.add('on');}
function applyBulkEdit(){const date=document.getElementById('bulk-date').value,category=document.getElementById('bulk-category').value,priority=document.getElementById('bulk-priority').value;if(!date&&!category&&!priority){toast('Выбери хотя бы одно изменение');return;}bulkApply(t=>{if(date){t.date=date;if(t.time&&isPastTaskSchedule(date,t.time))t.time='';}if(category)t.module=category;if(priority)t.pri=priority;});document.getElementById('modal-bulk-edit').classList.remove('on');}
function bulkComplete(){bulkApply(t=>{t.done=true;});}
async function bulkDelete(){if(!bulkSelected.size)return;if(!await lumoConfirm('Будут удалены выбранные дела: '+bulkSelected.size+'. Это действие нельзя отменить.','Удалить дела','Удалить',true))return;const selected=new Set(bulkSelected),tasks=getTasks().filter(t=>!selected.has(String(t.id)));setTasks(tasks);bulkSelected.clear();render();updateBulkBar();toast('Выбранные дела удалены');}

function render(){
  renderFilters();
  const view=document.getElementById('view');
  const _isFamilyMember=getFamilyState(); // вычисляем один раз
  let tasks=getTasks().slice();
  const q=(document.getElementById('search')?.value||'').toLowerCase().trim();
  if(q){renderGlobalSearch(q);return;}
  if(currentTab!=='all')tasks=tasks.filter(t=>t.module===currentTab);
  const tk=todayKey();
  if(filterState==='active')tasks=tasks.filter(t=>!t.done);
  else if(filterState==='done')tasks=tasks.filter(t=>t.done);
  else if(filterState==='today')tasks=tasks.filter(t=>t.date===tk);
  renderStats();renderSmartHint();
  const overdueCount=getTasks().filter(t=>isOverdue(t)&&t.date<tk).length;
  let head='';
  if(overdueCount&&filterState!=='done'){
    head=`<div class="reschedule-bar"><span>⚠️ Просрочено: ${overdueCount}</span><button onclick="rescheduleOverdue()">➡️ На сегодня</button></div>`;
  }
  if(!tasks.length){view.innerHTML=head+(q?emptyState(ICONS.search||ICONS.all,'Ничего не найдено','Попробуй изменить запрос','',''):emptyState(ICONS.all,'Список дел пуст','Добавь первое дело — остальное Lumo поможет организовать','openModal()','Добавить дело'));return;}
  const priOrd={R:0,Y:1,B:2};
  tasks.sort((a,b)=>{const da=a.date||'9999',db=b.date||'9999';if(da!==db)return da<db?-1:1;const ta=a.time||'99:99',tb=b.time||'99:99';if(ta!==tb)return ta<tb?-1:1;return (priOrd[a.pri]??1)-(priOrd[b.pri]??1);});
  const groups={};
  tasks.forEach(t=>{const k=t.date||'Без даты';(groups[k]=groups[k]||[]).push(t);});
  let html=head+'<div class="list">';
  Object.keys(groups).forEach(k=>{
    let lbl=k==='Без даты'?'📌 Без даты':fmtDate(k);
    if(k===tk)lbl='📅 Сегодня';
    else if(k<tk&&k!=='Без даты')lbl='⚠️ '+fmtDate(k);
    html+=`<div class="day-sep">${lbl}</div>`;
    const _fam=!!getFamilyState();
groups[k].forEach(t=>{html+=taskCardHTML(t,_fam);});
  });
  html+='</div>';
  view.innerHTML=html;
  attachSwipes();
}

function rescheduleOverdue(){
  const tk=todayKey();
  const t=getTasks();let n=0;
  t.forEach(x=>{if(!x.done&&x.date&&x.date<tk){x.date=tk;if(x.time&&isPastTaskSchedule(x.date,x.time))x.time='';n++;}});
  if(!n){toast('Нет просроченных');return;}
  setTasks(t);refreshCurrentTab();confetti();vibrate(30);toast('➡️ Перенесено на сегодня: '+n);
}
  /* ===== ПРИВЫЧКИ ===== */
function getHabits(){
  const d=load();
  if(!d.habits){
    d.habits=[
      {id:'h1',name:'Пить воду',icon:'💧',log:{}},
      {id:'h2',name:'Зарядка',icon:'🏃',log:{}},
      {id:'h3',name:'Чтение',icon:'📖',log:{}}
    ];
    save(d); // ← вот это было пропущено
  }
  return d.habits;
}
function saveHabits(h){const d=load();d.habits=h;save(d);}
function last7Keys(){
  const arr=[];
  for(let i=6;i>=0;i--){
    const dt=new Date();dt.setDate(dt.getDate()-i);
    arr.push({
      key:dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0')+'-'+String(dt.getDate()).padStart(2,'0'),
      label:['Вс','Пн','Вт','Ср','Чт','Пт','Сб'][dt.getDay()],
      isToday:i===0
    });
  }
  return arr;
}
function habitStreak(h){
  let s=0;
  for(let i=0;i<365;i++){
    const dt=new Date();dt.setDate(dt.getDate()-i);
    const k=dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0')+'-'+String(dt.getDate()).padStart(2,'0');
    if(h.log&&h.log[k])s++;else if(i>0)break;
  }
  return s;
}
function habitBestStreak(h){
  const keys=Object.keys(h.log||{}).filter(k=>h.log[k]).sort();let best=0,current=0,prev=null;
  keys.forEach(k=>{const day=new Date(k+'T12:00:00');if(prev){const diff=Math.round((day-prev)/86400000);current=diff===1?current+1:1;}else current=1;best=Math.max(best,current);prev=day;});
  return best;
}
function habitEncouragement(streak){
  if(streak>=30)return 'Невероятно! Месяц ритма — продолжай 🌟';
  if(streak>=7)return `Ты молодец! Уже ${streak} дней подряд 🔥`;
  if(streak>=2)return `Отлично! Серия — ${streak} дня. Давай дальше 🔥`;
  return 'Первый шаг сделан! Ты молодец, давай дальше 🌱';
}
let _habitJustDone=null;
function toggleHabit(id,key){
  const habits=getHabits();
  const h=habits.find(x=>x.id===id);
  if(!h)return;
  if(!h.log)h.log={};
  if(h.log[key]){delete h.log[key];_habitJustDone=null;vibrate(15);}
  else{
    h.log[key]=true;vibrate(30);
    if(key===todayKey()){_habitJustDone=id;confetti();setTimeout(()=>toast(habitEncouragement(habitStreak(h))),40);}
  }
  saveHabits(habits);
  scheduleHabitReminderLocal();syncPushData();scheduleHabitPushServer();
  renderHabits();
}
function toggleHabitComposer(force){
  const box=document.getElementById('habit-composer');if(!box)return;
  const open=typeof force==='boolean'?force:!box.classList.contains('on');
  box.classList.toggle('on',open);
  if(open)setTimeout(()=>document.getElementById('habit-name')?.focus(),80);
}
function addHabit(){
  const name=(document.getElementById('habit-name')?.value||'').trim();
  const icon=(document.getElementById('habit-icon')?.value||'').trim()||'⭐';
  if(!name){toast('Введи название привычки');return;}
  const habits=getHabits();
  habits.push({id:'h'+Date.now(),name,icon,log:{}});
  saveHabits(habits);
  scheduleHabitReminderLocal();syncPushData();scheduleHabitPushServer(true);
  toast('Привычка добавлена 💪');
  renderHabits();
  setTimeout(()=>toggleHabitComposer(false),0);
}
async function deleteHabit(id){
  if(!await lumoConfirm('История выполнения этой привычки тоже будет удалена.','Удалить привычку','Удалить',true))return;
  saveHabits(getHabits().filter(h=>h.id!==id));
  scheduleHabitReminderLocal();syncPushData();scheduleHabitPushServer(true);
  renderHabits();
}
function renderHabits(){
  const view=document.getElementById('view');
  if(!view)return;
  const habits=getHabits();
  const days=last7Keys();
  const tk=todayKey();
  const doneToday=habits.filter(h=>h.log&&h.log[tk]).length;
  const pct=habits.length?Math.round(doneToday/habits.length*100):0;
  const ring=201.1,offset=ring-(ring*pct/100);
  const left=Math.max(0,habits.length-doneToday);
  const best=habits.reduce((m,h)=>Math.max(m,habitStreak(h)),0);
  const summaryTitle=!habits.length?'Создай свой первый ритм':left===0?'Сегодня всё выполнено!':left===1?'Остался последний шаг':`Осталось привычек: ${left}`;
  const summaryText=!habits.length?'Начни с одного простого действия':left===0?'Отличный день — сохрани этот темп':best>=2?`Лучшая текущая серия — ${best} дн.`:best===1?'Первый день ритма уже есть':'Каждое выполнение укрепляет ритм';

  let cards='';
  habits.forEach(h=>{
    const st=habitStreak(h),bestSt=habitBestStreak(h),todayOn=!!(h.log&&h.log[tk]);
    const week=days.map(d=>{
      const on=!!(h.log&&h.log[d.key]);
      return `<button class="habit-day ${on?'on':''} ${d.isToday?'today':''}" onclick="toggleHabit(${jsArg(h.id)},${jsArg(d.key)})" aria-label="${esc(d.label)}">
        <span class="habit-dot">${on?'✓':''}</span><span>${d.isToday?'Сегодня':d.label}</span>
      </button>`;
    }).join('');
    cards+=`<article class="habit-card ${todayOn?'done':''} ${_habitJustDone===h.id?'just-done':''}">
      <div class="habit-card-top">
        <div class="habit-emoji">${esc(h.icon||'⭐')}</div>
        <div><div class="habit-name">${esc(h.name)}</div>
          <div class="habit-caption"><span>Ежедневно</span><span>${todayOn?'Выполнено':'На сегодня'}</span></div>
        </div>
        <button class="habit-today ${todayOn?'on':''}" onclick="toggleHabit(${jsArg(h.id)},${jsArg(tk)})" aria-label="Отметить сегодня">
          <svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.2 4L19 7"/></svg>
        </button>
      </div>
      <div class="habit-week">${week}</div>
      <div class="habit-card-foot">
        <div class="habit-streak">${st>=2?`🔥 Серия: <b>${st} дн.</b>`:st===1?'🌱 <b>Первый шаг</b>':bestSt>=2?`↻ Последняя серия: <b>${bestSt} дн.</b>`:bestSt===1?'↻ Был первый шаг':'○ Серия ещё не началась'}</div>
        <div style="display:flex;align-items:center;gap:5px"><button class="habit-stats-btn" onclick="openDataLinks('habit',${jsArg(h.id)})">${ICONS.link} Связи</button><button class="habit-stats-btn" onclick="openHabitStats(${jsArg(h.id)})">История</button><button class="habit-delete" onclick="deleteHabit(${jsArg(h.id)})" aria-label="Удалить привычку">${ICONS.trash}</button></div>
      </div>
    </article>`;
  });

  view.innerHTML=`<div class="habit-page">
    <section class="habit-summary">
      <div class="habit-ring">
        <svg viewBox="0 0 72 72"><circle class="track" cx="36" cy="36" r="32"/><circle class="fill" cx="36" cy="36" r="32" stroke-dasharray="${ring}" stroke-dashoffset="${offset}"/></svg>
        <div class="habit-ring-label">${pct}%<small>сегодня</small></div>
      </div>
      <div class="habit-summary-copy"><b>${summaryTitle}</b><span>${summaryText}</span></div>
    </section>
    <div class="habit-toolbar">
      <h2>Мой ритм</h2>
      <button class="habit-add-btn" onclick="toggleHabitComposer()">${ICONS.plus}<span>Новая</span></button>
    </div>
    <div class="habit-composer" id="habit-composer">
      <input id="habit-icon" placeholder="⭐" maxlength="4" aria-label="Иконка">
      <input id="habit-name" placeholder="Например, читать 20 минут" onkeydown="if(event.key==='Enter')addHabit()">
      <button onclick="addHabit()" aria-label="Добавить">+</button>
    </div>
    <div class="habit-list">${cards||'<div class="habit-empty"><div>✨</div><b>Здесь появится твой ритм</b><br><small>Добавь одну привычку, с которой легко начать</small></div>'}</div>
  </div>`;
}
let habitStatsId=null,habitStatsMode='month',habitStatsDate=new Date();
function openHabitStats(id){habitStatsId=id;habitStatsMode='month';habitStatsDate=new Date();document.getElementById('modal-habit-stats').classList.add('on');renderHabitStats();}
function closeHabitStats(){document.getElementById('modal-habit-stats').classList.remove('on');habitStatsId=null;}
function setHabitStatsMode(mode){habitStatsMode=mode;document.getElementById('habit-stats-month-btn').classList.toggle('on',mode==='month');document.getElementById('habit-stats-year-btn').classList.toggle('on',mode==='year');renderHabitStats();}
function habitStatsNav(dir){if(habitStatsMode==='month')habitStatsDate.setMonth(habitStatsDate.getMonth()+dir);else habitStatsDate.setFullYear(habitStatsDate.getFullYear()+dir);renderHabitStats();}
function habitKey(y,m,d){return y+'-'+String(m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');}
function renderHabitStats(){
  const h=getHabits().find(x=>x.id===habitStatsId),body=document.getElementById('habit-stats-body');if(!h||!body)return;
  document.getElementById('habit-stats-title').textContent=h.name;
  const y=habitStatsDate.getFullYear(),m=habitStatsDate.getMonth(),now=new Date(),tk=todayKey();
  if(habitStatsMode==='month'){
    const days=new Date(y,m+1,0).getDate(),first=new Date(y,m,1),offset=(first.getDay()+6)%7;let done=0,cells='';
    ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'].forEach(x=>cells+=`<div class="hm-label">${x}</div>`);for(let i=0;i<offset;i++)cells+='<div></div>';
    for(let d=1;d<=days;d++){const k=habitKey(y,m,d),on=!!h.log?.[k];if(on)done++;cells+=`<div class="hm-day ${on?'on':''} ${k===tk?'today':''}">${on?'✓':d}</div>`;}
    const elapsed=(y===now.getFullYear()&&m===now.getMonth())?now.getDate():new Date(y,m+1,0)<now?days:0,pct=elapsed?Math.round(done/elapsed*100):0;
    const streak=habitStreak(h);body.innerHTML=`<div class="habit-stats-head"><button onclick="habitStatsNav(-1)">‹</button><b>${monthFull[m]} ${y}</b><button onclick="habitStatsNav(1)">›</button></div><div class="habit-stats-summary"><div><b>${done}</b><small>выполнено</small></div><div><b>${pct}%</b><small>регулярность</small></div><div><b>${streak}</b><small>${streak>=2?'серия':streak===1?'первый день':'нет серии'}</small></div></div><div class="habit-month-grid">${cells}</div>`;
  }else{
    let total=0,possible=0,cards='';for(let month=0;month<12;month++){const days=new Date(y,month+1,0).getDate();let done=0;for(let d=1;d<=days;d++)if(h.log?.[habitKey(y,month,d)])done++;const elapsed=y===now.getFullYear()?month<now.getMonth()?days:month===now.getMonth()?now.getDate():0:y<now.getFullYear()?days:0,pct=elapsed?Math.round(done/elapsed*100):0;total+=done;possible+=elapsed;cards+=`<div class="habit-year-month"><b>${monthFull[month]}</b><small>${done} из ${elapsed||days} дн. · ${pct}%</small><div class="habit-year-bar"><i style="width:${Math.min(100,pct)}%"></i></div></div>`;}
    const streak=habitStreak(h);body.innerHTML=`<div class="habit-stats-head"><button onclick="habitStatsNav(-1)">‹</button><b>${y} год</b><button onclick="habitStatsNav(1)">›</button></div><div class="habit-stats-summary"><div><b>${total}</b><small>выполнений</small></div><div><b>${possible?Math.round(total/possible*100):0}%</b><small>за год</small></div><div><b>${streak}</b><small>${streak>=2?'серия':streak===1?'первый день':'нет серии'}</small></div></div><div class="habit-year-grid">${cards}</div>`;
  }
}
function renderSmartHint(){
  const box=document.getElementById('quoteChip');
  if(!box)return;
  const tasks=getTasks();
  const tk=todayKey();
  const tmr=new Date();tmr.setDate(tmr.getDate()+1);
  const tmrKey=tmr.getFullYear()+'-'+String(tmr.getMonth()+1).padStart(2,'0')+'-'+String(tmr.getDate()).padStart(2,'0');
  const todayLeft=tasks.filter(t=>t.date===tk&&!t.done).length;
  const tmrCount=tasks.filter(t=>t.date===tmrKey&&!t.done).length;
  const over=tasks.filter(t=>isOverdue(t)&&t.date<tk).length;
  let msg='';
  if(over>0)msg=`⚠️ Просрочено ${over} — займись!`;
  else if(todayLeft>0)msg=`📌 Сегодня осталось: ${todayLeft} ${todayLeft===1?'дело':todayLeft<=4?'дела':'дел'}`;
  else if(tmrCount>0)msg=`🌅 Завтра тебя ждёт: ${tmrCount} ${tmrCount===1?'дело':tmrCount<=4?'дела':'дел'}`;
  else msg=`На сегодня задач нет`;
  box.textContent=msg;
  box.style.display='';
}
  
function renderStats(){
  const el=document.getElementById('hero-stats');
  let tasks=getTasks();
  if(currentTab!=='all'&&currentTab!=='calendar')tasks=tasks.filter(t=>t.module===currentTab);
  const tk=todayKey();
  const total=tasks.length,done=tasks.filter(t=>t.done).length,today=tasks.filter(t=>t.date===tk).length;
  el.innerHTML=`<button class="hstat" onclick="openTaskStat('today')"><b>${today}</b><small>Сегодня</small></button><button class="hstat" onclick="openTaskStat('active')"><b>${total-done}</b><small>Активных</small></button><button class="hstat" onclick="openTaskStat('done')"><b>${done}</b><small>Готово</small></button>`;
}

function toggleTask(id){
  const t=getTasks();const x=t.find(a=>a.id===id);if(!x)return;
  x.done=!x.done;
  if(x.done&&x.repeat){
    const nd=nextRepeatDate(x.date,x.repeat);
    t.push({id:Date.now()+Math.floor(Math.random()*10000),title:x.title,module:x.module,date:nd,time:x.time||'',desc:x.desc,pri:x.pri,repeat:x.repeat,subs:(x.subs||[]).map(s=>({t:s.t,done:false})),done:false});
    toast('🔁 Повтор создан на '+fmtDate(nd));
  }
  setTasks(t);
  if(x.done){
    confetti();vibrate(40);if(!x.repeat)toast('Готово! 🎉');updateStreak();bumpDoneCount();checkAchievements();
    if(x.fromUserId)notifyTaskDone(x);
  }
  refreshCurrentTab();
}
let _lastDeleted=null,_undoTimer=null;
function delTask(id){
  const tasks=getTasks();
  const victim=tasks.find(a=>a.id===id);
  if(!victim)return;
  _lastDeleted=JSON.parse(JSON.stringify(victim));
  setTasks(tasks.filter(a=>a.id!==id));
  refreshCurrentTab();
  showUndoToast();
}
function showUndoToast(){
  const el=document.getElementById('toast');
  el.innerHTML='Удалено 🗑 <span onclick="undoDelete()" style="text-decoration:underline;cursor:pointer;margin-left:8px;font-weight:800">Отменить</span>';
  el.classList.add('on');
  el.style.pointerEvents='auto';
  clearTimeout(_undoTimer);
  _undoTimer=setTimeout(()=>{el.classList.remove('on');el.style.pointerEvents='none';_lastDeleted=null;},5000);
}
function undoDelete(){
  if(!_lastDeleted)return;
  const t=getTasks();t.push(_lastDeleted);setTasks(t);
  _lastDeleted=null;clearTimeout(_undoTimer);
  document.getElementById('toast').classList.remove('on');
  document.getElementById('toast').style.pointerEvents='none';
  vibrate(20);
  refreshCurrentTab();
  toast('Восстановлено ✅');
}
function editTask(id){
  const t=getTasks().find(a=>a.id===id);if(!t)return;
  editId=id;fillModuleSelect();fillAssignSelect();editSubs=(t.subs||[]).map(s=>({...s}));
  document.getElementById('modal-title').textContent='Изменить дело';
  document.getElementById('f-title').value=t.title||'';
  document.getElementById('f-module').value=t.module||'personal';
  document.getElementById('f-date').value=t.date||'';
  document.getElementById('f-time').value=t.time||'';
  document.getElementById('f-desc').value=t.desc||'';
  document.getElementById('f-repeat').value=t.repeat||'';
  document.getElementById('f-duration').value=String(t.duration||30);
  document.getElementById('f-energy').value=t.energy||'medium';
  document.getElementById('task-extra').open=!!(t.desc||(t.photos&&t.photos.length)||(t.subs&&t.subs.length));
  renderSubList();pickPri(t.pri||'Y');
  editPhotos=(t.photos||[]).slice();renderPhotoList();
  document.getElementById('modal').classList.add('on');
  requestAnimationFrame(()=>{const sheet=document.querySelector('#modal .sheet');if(sheet)sheet.scrollTop=0;});
  syncTaskTimeConstraints();
}

function fillModuleSelect(){
  document.getElementById('f-module').innerHTML=getCats().map(c=>`<option value="${c.id}">${c.emoji} ${esc(c.name)}</option>`).join('');
}
function updateFabLabel(){
  const label=document.getElementById('fab-label');if(!label)return;
  label.textContent=currentTab==='finance'?'Расход':currentTab==='notes'?'Заметка':currentTab==='habits'?'Привычка':'Новое дело';
}
function openQuickCreate(){document.getElementById('modal-quick-create').classList.add('on');vibrate(12)}
function closeQuickCreate(){document.getElementById('modal-quick-create').classList.remove('on')}
function quickCreate(type){
  closeQuickCreate();
  if(type==='task')openModal();
  else if(type==='expense')openExpModal();
  else if(type==='note')openNoteModal();
  else if(type==='habit'){switchTab('habits');setTimeout(()=>toggleHabitComposer(true),80)}
  else if(type==='receipt')openReceiptScanner();
  else if(type==='voice'){switchTab('ai');setTimeout(()=>toggleMic(),160)}
}
function fabAction(){
  if(currentTab==='finance')openExpModal();
  else if(currentTab==='notes')openNoteModal();
  else if(currentTab==='habits')toggleHabitComposer(true);
  else openModal();
}
function openModal(){
  editId=null;fillModuleSelect();fillAssignSelect();editSubs=[];
  document.getElementById('modal-title').textContent='Новое дело';
  document.getElementById('f-title').value='';
  const validCat=getCats().some(c=>c.id===currentTab);
  document.getElementById('f-module').value=validCat?currentTab:'personal';
  document.getElementById('f-date').value=(currentTab==='calendar'&&calSel)?calSel:todayKey();
  document.getElementById('f-time').value='';
  document.getElementById('f-desc').value='';
  document.getElementById('f-repeat').value='';
  document.getElementById('f-duration').value='30';
  document.getElementById('f-energy').value='medium';
  document.getElementById('task-extra').open=false;
  renderSubList();pickPri('Y');
  editPhotos=[];renderPhotoList();
  document.getElementById('modal').classList.add('on');
  requestAnimationFrame(()=>{const sheet=document.querySelector('#modal .sheet');if(sheet)sheet.scrollTop=0;});
  syncTaskTimeConstraints();
}
async function fillAssignSelect(){
  const sel=document.getElementById('f-assign');
  if(!sel)return;
  const field=document.getElementById('assign-field');
  if(field)field.style.display=getFamilyState()?'block':'none';
  const fam=getFamilyState();
  if(!fam){ sel.innerHTML='<option value="">Себе</option>'; return; }
  sel.innerHTML='<option value="">Себе</option>';
  try{
    const r=await fetch(FAMILY_SERVER+'/family/list',{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({userId:PUSH_USER_ID})
    });
    const data=await r.json();
    if(data.ok){
      data.members.filter(m=>m.userId!==PUSH_USER_ID).forEach(m=>{
        const o=document.createElement('option');
        const ri=roleInfo(m.role);
        o.value=m.userId; o.textContent=ri.emoji+' '+m.name+(m.role&&m.role!=='other'?' ('+ri.name+')':'');
        sel.appendChild(o);
      });
    }
  }catch(e){}
}
function closeModal(){document.getElementById('modal').classList.remove('on');}
function taskTimeFloor(){const d=new Date(Date.now()+60000);return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');}
function isPastTaskSchedule(date,time){if(!date||!time)return false;const at=new Date(date+'T'+time+':00');return Number.isFinite(at.getTime())&&at.getTime()<=Date.now();}
function syncTaskTimeConstraints(){
  const date=document.getElementById('f-date'),time=document.getElementById('f-time'),hint=document.getElementById('task-time-hint');if(!date||!time)return;
  date.min=todayKey();time.min=date.value===todayKey()?taskTimeFloor():'';
  const bad=isPastTaskSchedule(date.value,time.value);time.setCustomValidity(bad?'Это время уже прошло':'');
  if(hint){hint.classList.toggle('bad',bad);hint.textContent=bad?'Это время уже прошло — выбери будущее':date.value===todayKey()?'Доступно с '+taskTimeFloor():'';}
}
function rejectPastTaskTime(){
  const date=document.getElementById('f-date'),time=document.getElementById('f-time');if(!date||!time)return;
  if(isPastTaskSchedule(date.value,time.value)){time.value='';syncTaskTimeConstraints();toast('Выбери время, которое ещё не прошло');}
}
let postponeTaskId=null;
function postponeBase(task,now=new Date()){
  const scheduled=task?.date?new Date(task.date+'T'+(task.time||'09:00')+':00'):null;
  return scheduled&&Number.isFinite(scheduled.getTime())&&scheduled>now?scheduled:new Date(now);
}
function postponeTarget(task,mode,now=new Date()){
  const base=postponeBase(task,now),target=new Date(base);
  if(mode==='hour')target.setHours(target.getHours()+1);
  else if(mode==='evening'){target.setHours(19,0,0,0);if(target<=base)target.setDate(target.getDate()+1);}
  else if(mode==='day')target.setDate(target.getDate()+1);
  else if(mode==='monday'){let days=(1-target.getDay()+7)%7;if(days===0)days=7;target.setDate(target.getDate()+days);}
  return {date:dateKeyOf(target),time:mode==='hour'||mode==='evening'?String(target.getHours()).padStart(2,'0')+':'+String(target.getMinutes()).padStart(2,'0'):(task?.time||'')};
}
function postponeLabel(target){const d=new Date(target.date+'T12:00:00'),day=d.toLocaleDateString('ru-RU',{day:'numeric',month:'short'}).replace('.','');return `${day}${target.time?' · '+target.time:''}`;}
function renderPostponeOptions(task){['hour','evening','day','monday'].forEach(mode=>{const el=document.getElementById('postpone-'+mode+'-sub');if(el)el.textContent=postponeLabel(postponeTarget(task,mode));});}
function openPostpone(id){
  postponeTaskId=id;
  const task=getTasks().find(t=>t.id===id);if(task)renderPostponeOptions(task);
  document.getElementById('modal-postpone').classList.add('on');
}
function closePostpone(){
  postponeTaskId=null;
  document.getElementById('modal-postpone').classList.remove('on');
}
function postponeTask(mode){
  const tasks=getTasks();
  const task=tasks.find(t=>t.id===postponeTaskId);
  if(!task){closePostpone();return;}
  const target=postponeTarget(task,mode);task.date=target.date;task.time=target.time;
  task.done=false;
  setTasks(tasks);
  const label=postponeLabel(target);
  closePostpone();
  scheduleAllTimeouts();
  refreshCurrentTab();
  vibrate(18);
  toast('⏰ Новый срок: '+label);
}
function pickPri(p){currentPri=p;document.querySelectorAll('#modal .seg button').forEach(b=>b.classList.toggle('on',b.dataset.pri===p));}
function saveTask(){
  const title=document.getElementById('f-title').value.trim();
  if(!title){toast('Введи название');return;}
  const chosenDate=document.getElementById('f-date').value||'',chosenTime=document.getElementById('f-time').value||'';
  if(isPastTaskSchedule(chosenDate,chosenTime)){syncTaskTimeConstraints();toast('Нельзя сохранить дело на прошедшее время');return;}
  const obj={title,module:document.getElementById('f-module').value,date:chosenDate,time:chosenTime,desc:document.getElementById('f-desc').value.trim(),pri:currentPri,repeat:document.getElementById('f-repeat').value||'',duration:Number(document.getElementById('f-duration').value)||30,energy:document.getElementById('f-energy').value||'medium',subs:editSubs.slice(),photos:editPhotos.slice()};
  const t=getTasks();
  if(editId){const x=t.find(a=>a.id===editId);if(x)Object.assign(x,obj);}
  else{obj.id=Date.now()+Math.floor(Math.random()*1000);obj.done=false;t.push(obj);}
  setTasks(t);
  const assignTo=document.getElementById('f-assign')?document.getElementById('f-assign').value:'';
  if(assignTo){
    const assignEventId='assign_'+String(obj.id||editId)+'_'+assignTo;
    const assignPayload={userId:PUSH_USER_ID,toUserId:assignTo,task:{
      title:obj.title,desc:obj.desc||'',date:obj.date||'',time:obj.time||'',pri:obj.pri||'Y',module:obj.module||'personal',clientEventId:assignEventId
    },familyId:getFamilyState(),fromName:getMyName(),notification:{type:'family-task',eventId:assignEventId,title:'📥 Новое поручение',body:(getMyName()?getMyName()+': ':'')+obj.title,taskId:assignEventId}};
    sendOrQueue('/family/assign',assignPayload,'assign:'+(obj.id||editId)+':'+assignTo).then(sent=>{
      toast(sent?'✅ Поручено!':'📤 Поручение сохранено в очереди');
    });
  }
  closeModal();
  if(editId){const saved=t.find(a=>a.id===editId);if(saved)scheduleLocalTimeout(saved);}
  else scheduleLocalTimeout(obj);
  refreshCurrentTab();
  if(!assignTo)toast('Сохранено ✅');
}

/* ===== ФОТО К ЗАДАЧЕ ===== */
let editPhotos=[];
function renderPhotoList(){
  const el=document.getElementById('photo-list');if(!el)return;
  let html=editPhotos.map((p,i)=>`<img class="task-photo" src="${p}" onclick="openPhotoPreview(${i})" alt="">`).join('');
  html+=`<div class="photo-add-btn" onclick="document.getElementById('photo-input').click()">📷</div>`;
  el.innerHTML=html;
}
function fileAsDataURL(file){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=()=>resolve(reader.result);
    reader.onerror=reject;
    reader.readAsDataURL(file);
  });
}
async function compressPhoto(file){
  const source=URL.createObjectURL(file);
  try{
    const img=await new Promise((resolve,reject)=>{
      const el=new Image();
      el.onload=()=>resolve(el);el.onerror=reject;el.src=source;
    });
    const maxSide=1600;
    const scale=Math.min(1,maxSide/Math.max(img.naturalWidth,img.naturalHeight));
    const width=Math.max(1,Math.round(img.naturalWidth*scale));
    const height=Math.max(1,Math.round(img.naturalHeight*scale));
    const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
    const ctx=canvas.getContext('2d',{alpha:false});
    ctx.fillStyle='#fff';ctx.fillRect(0,0,width,height);
    ctx.drawImage(img,0,0,width,height);
    return canvas.toDataURL('image/jpeg',.8);
  }catch(e){
    return fileAsDataURL(file);
  }finally{
    URL.revokeObjectURL(source);
  }
}
async function addPhotos(ev){
  const files=Array.from(ev.target.files).slice(0,Math.max(0,6-editPhotos.length));
  ev.target.value='';
  if(!files.length){toast('Максимум 6 фото');return;}
  toast('Подготавливаю фото…');
  for(const file of files){
    editPhotos.push(await compressPhoto(file));
    renderPhotoList();
  }
}
function openPhotoPreview(idx){
  const wrap=document.createElement('div');wrap.className='photo-preview-wrap';
  wrap.innerHTML=`<button class="photo-preview-close" onclick="closePhotoPreview()">✕</button><img src="${editPhotos[idx]}" alt=""><button class="photo-del-btn" onclick="deletePhoto(${idx})">🗑 Удалить</button>`;
  document.body.appendChild(wrap);
}
function closePhotoPreview(){document.querySelector('.photo-preview-wrap')?.remove();}
function deletePhoto(idx){editPhotos.splice(idx,1);closePhotoPreview();renderPhotoList();toast('Фото удалено');}
function openTaskPhoto(taskId,idx){
  const t=getTasks().find(a=>a.id==taskId);if(!t||!t.photos)return;
  editPhotos=t.photos.slice();openPhotoPreview(idx);
}

let editSubs=[];
function renderSubList(){
  const el=document.getElementById('sub-list');if(!el)return;
  el.innerHTML=editSubs.map((s,i)=>`
    <div class="subtask ${s.done?'done':''}">
      <div class="sc ${s.done?'on':''}" onclick="toggleSubEdit(${i})">${s.done?'✓':''}</div>
      <span>${esc(s.t)}</span>
      <span class="sd" onclick="delSubEdit(${i})">🗑</span>
    </div>`).join('');
}
function addSubtask(){
  const inp=document.getElementById('sub-input');const v=inp.value.trim();if(!v)return;
  editSubs.push({t:v,done:false});inp.value='';renderSubList();
}
function toggleSubEdit(i){editSubs[i].done=!editSubs[i].done;renderSubList();}
function delSubEdit(i){editSubs.splice(i,1);renderSubList();}
function toggleSubtask(taskId,idx){
  const t=getTasks();const x=t.find(a=>a.id===taskId);if(!x||!x.subs)return;
  x.subs[idx].done=!x.subs[idx].done;setTasks(t);vibrate(20);
  refreshCurrentTab();
}

function nextRepeatDate(dateStr,repeat){
  const d=dateStr?new Date(dateStr+'T12:00:00'):new Date();
  if(repeat==='daily')d.setDate(d.getDate()+1);
  else if(repeat==='weekly')d.setDate(d.getDate()+7);
  else if(repeat==='monthly'){
    const originalDay=d.getDate();
    d.setDate(1);
    d.setMonth(d.getMonth()+1);
    const lastDay=new Date(d.getFullYear(),d.getMonth()+1,0).getDate();
    d.setDate(Math.min(originalDay,lastDay));
  }
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}

function attachSwipes(){
  document.querySelectorAll('#view .task[data-id]').forEach(el=>{
    let sx=0,sy=0,cur=0,drag=false;
    el.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY;drag=false;el.style.transition='';},{passive:true});
    el.addEventListener('touchmove',e=>{
      const dx=e.touches[0].clientX-sx,dy=e.touches[0].clientY-sy;
      if(Math.abs(dx)>Math.abs(dy)+6){drag=true;cur=dx;el.style.transform=`translateX(${dx}px)`;}
    },{passive:true});
    el.addEventListener('touchend',()=>{
      el.style.transition='transform .2s';
      const id=Number(el.dataset.id);
      if(cur<-90){delTask(id);}
      else if(cur>90){toggleTask(id);}
      else el.style.transform='';
      cur=0;
    });
  });
}
/* ===== ЗАМЕТКИ ===== */
function getNotes(){const d=load();return d.notes||[];}
function setNotes(n){const d=load();d.notes=n;save(d);}
let editNoteId=null;
const NOTE_COLORS=['#7c6cf0','#ffb347','#36b37e','#ff6b7a','#4aa8ff','#b66cf0'];
let noteDraftColor=NOTE_COLORS[0],noteDraftPinned=false;
function renderNoteColorPicker(){const el=document.getElementById('note-color-row');if(el)el.innerHTML=NOTE_COLORS.map(c=>`<button type="button" class="note-color-dot ${c===noteDraftColor?'on':''}" style="background:${c}" onclick="pickNoteColor(${jsArg(c)})" aria-label="Цвет"></button>`).join('');}
function pickNoteColor(c){noteDraftColor=c;renderNoteColorPicker();}
function toggleNotePinned(){noteDraftPinned=!noteDraftPinned;const b=document.getElementById('note-pin-box');b.classList.toggle('on',noteDraftPinned);b.textContent=noteDraftPinned?'✓':'';}
function openNoteModal(id){
  editNoteId=id||null;const n=id?getNotes().find(x=>x.id===id):null;if(id&&!n)return;
  document.getElementById('note-title').value=n?.title||'';document.getElementById('note-text').value=n?.text||'';
  document.getElementById('note-date').value=n?.date||((currentTab==='calendar'&&calSel)?calSel:todayKey());
  noteDraftColor=n?.color||NOTE_COLORS[0];noteDraftPinned=!!n?.pinned;
  document.querySelector('#modal-note h3').textContent=n?'Изменить заметку':'Новая заметка';renderNoteColorPicker();
  const pin=document.getElementById('note-pin-box');pin.classList.toggle('on',noteDraftPinned);pin.textContent=noteDraftPinned?'✓':'';
  document.getElementById('modal-note').classList.add('on');
}
function closeNoteModal(){document.getElementById('modal-note').classList.remove('on');}
function saveNote(){
  const title=document.getElementById('note-title').value.trim();
  const text=document.getElementById('note-text').value.trim();
  const date=document.getElementById('note-date').value||todayKey();
  if(!title&&!text){toast('Введи текст заметки');return;}
  const notes=getNotes();
  if(editNoteId){
    const n=notes.find(x=>x.id===editNoteId);
    if(n){n.title=title;n.text=text;n.date=date;n.color=noteDraftColor;n.pinned=noteDraftPinned;n.updatedAt=Date.now();}
  }else{
    notes.push({id:Date.now()+Math.floor(Math.random()*1000),title,text,date,color:noteDraftColor,pinned:noteDraftPinned,updatedAt:Date.now()});
  }
  setNotes(notes);
  closeNoteModal();vibrate(20);confetti();toast('Заметка сохранена 📝');
  if(currentTab==='calendar')renderCalendar();
  else if(currentTab==='notes')renderNotes();
}
async function delNote(id){
  if(!await lumoConfirm('Заметка будет удалена без возможности восстановления.','Удалить заметку','Удалить',true))return;
  setNotes(getNotes().filter(n=>n.id!==id));
  toast('Удалено 🗑');
  if(currentTab==='calendar')renderCalendar();
  else if(currentTab==='notes')renderNotes();
}
function noteCardHTML(n){
  return `<div class="task" data-note-id="${n.id}">
    <div class="bar" style="background:var(--warn)"></div>
    <div class="t-body">
      ${n.title?`<div class="t-title">📝 ${esc(n.title)}</div>`:''}
      ${n.date?`<div class="t-meta"><span>📅 ${fmtDate(n.date)}</span></div>`:''}
      ${n.text?`<div class="t-desc">${esc(n.text).replace(/\n/g,'<br>')}</div>`:''}
    </div>
    <div class="t-acts"><button onclick="openNoteModal(${n.id})" aria-label="Изменить">${ICONS.edit}</button><button onclick="delNote(${n.id})" aria-label="Удалить">${ICONS.trash}</button></div>
  </div>`;
}
function emptyState(icon,title,text,action,label){return `<div class="empty-state"><div class="empty-icon">${icon}</div><b>${esc(title)}</b><span>${esc(text||'')}</span>${action?`<button onclick="${action}">${esc(label||'Добавить')}</button>`:''}</div>`}
function renderNotes(){
  const view=document.getElementById('view');
  const notes=getNotes().slice().sort((a,b)=>{
    if(!!a.pinned!==!!b.pinned)return a.pinned?-1:1;
    if((b.updatedAt||0)!==(a.updatedAt||0))return (b.updatedAt||0)-(a.updatedAt||0);
    const da=a.date||'';
    const db=b.date||'';
    if(db>da)return 1;
    if(db<da)return -1;
    return 0;
  });
  let html=`<div class="notes-page"><div class="notes-tools"><input id="notes-search" placeholder="🔍 Поиск по заметкам..." oninput="filterNotes(this.value)"><button onclick="openNoteModal()">${ICONS.plus}<span>Новая</span></button></div>`;
  if(!notes.length){
    html+=emptyState(ICONS.notes,'Заметок пока нет','Сохраняй идеи, списки и важные мысли','openNoteModal()','Создать заметку');
  }else{
    html+='<div class="notes-grid" id="notes-grid">';
    notes.forEach(n=>html+=modernNoteHTML(n));
    html+='</div>';
  }
  html+='</div>';
  view.innerHTML=html;
}
/* ===== КАЛЕНДАРЬ ===== */
function calNav(dir){calDate.setMonth(calDate.getMonth()+dir);calSel=null;renderCalendar();}
function calPick(k){calSel=(calSel===k)?null:k;renderCalendar();}
function renderCalendar(){
  const view=document.getElementById('view');
  const y=calDate.getFullYear(),m=calDate.getMonth();
  const tk=todayKey();
  const first=new Date(y,m,1);
  let startDow=first.getDay();startDow=startDow===0?6:startDow-1;
  const daysInMonth=new Date(y,m+1,0).getDate();
  const tasks=getTasks();
  const notes=getNotes();                         /* ← ДОБАВЛЕНО */
  const monthPrefix=y+'-'+String(m+1).padStart(2,'0');
  const byDay={};
  tasks.forEach(t=>{if(t.date&&t.date.startsWith(monthPrefix)){(byDay[t.date]=byDay[t.date]||[]).push(t);}});
  const notesByDay={};                            /* ← ДОБАВЛЕНО */
  notes.forEach(n=>{if(n.date&&n.date.startsWith(monthPrefix)){(notesByDay[n.date]=notesByDay[n.date]||[]).push(n);}});
  const dow=['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
  let html=`<div class="calendar">
    <div class="cal-head"><button onclick="calNav(-1)">‹</button><span>${monthFull[m]} ${y}</span><button onclick="calNav(1)">›</button></div>
    <div class="cal-grid">`;
  dow.forEach((d,i)=>html+=`<div class="cal-dow" style="${i>=5?'color:#e5484d':''}">${d}</div>`);
  for(let i=0;i<startDow;i++)html+=`<div></div>`;
    for(let d=1;d<=daysInMonth;d++){
    const k=y+'-'+String(m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
    const list=byDay[k]||[];
    const noteList=notesByDay[k]||[];             /* ← ДОБАВЛЕНО */
    const hasOver=list.some(t=>!t.done&&k<tk);
    const hasTask=list.some(t=>!t.done);
    const hasNote=noteList.length>0;              /* ← ДОБАВЛЕНО */
    const cellDow=(startDow+d-1)%7;
    const isWeekend=cellDow===5||cellDow===6;
    let cls='cal-cell';
    if(isWeekend)cls+=' weekend';
    if(k===tk)cls+=' today';
    if(k===calSel)cls+=' sel';
    /* точки: задача (зел/красн) + заметка (жёлтая) */
    let dots='';
    if(hasTask)dots+=`<span class="dot ${hasOver?'over':''}"></span>`;
    if(hasNote)dots+=`<span class="dot note"></span>`;
    html+=`<div class="${cls}" onclick="calPick('${k}')">${d}${dots?`<span class="dots-wrap">${dots}</span>`:''}</div>`;
  }
  html+='</div></div>';

  if(calSel){
    const list=(byDay[calSel]||[]).slice().sort((a,b)=>(a.time||'99')<(b.time||'99')?-1:1);
    const noteList=(notesByDay[calSel]||[]);      /* ← ДОБАВЛЕНО */
    html+=`<div class="day-sep" style="margin-left:20px">📌 ${fmtDate(calSel)}</div>`;
    if(list.length||noteList.length){
      html+='<div class="list">';
      list.forEach(t=>html+=taskCardHTML(t));
      noteList.forEach(n=>html+=noteCardHTML(n)); /* ← ДОБАВЛЕНО */
      html+='</div>';
    }else{
      html+=emptyState(ICONS.calendar,'На этот день ничего нет','Можно оставить день свободным или добавить дело','openModal()','Добавить дело');
    }
    /* быстрая кнопка добавить заметку на выбранный день */
    html+=`<div style="text-align:center;margin:4px 16px 14px"><button class="btn ghost" onclick="openNoteModal()">📝 Заметка на ${fmtDate(calSel)}</button></div>`;
  }else{
    html+=`<div class="ai-hint">Нажми на день, чтобы посмотреть дела 👆</div>`;
  }
  view.innerHTML=html;
  attachSwipes();
}

let catEditId=null,pickedEmoji='⭐';
const EMOJI_LIST=['📋','🚗','🌱','💼','🏋️','📚','🏠','🐶','✈️','🎮','🎵','🍔','💊','👕','🛒','⚽','💻','🎨','📷','🔧','❤️','⭐','🔥','🎯','👶','🍼'];

function openCatModal(){renderCatList();renderExpCatList();document.getElementById('modal-cat').classList.add('on');}
function closeCatModal(){document.getElementById('modal-cat').classList.remove('on');}

function renderCatList(){
  const cats=getCats();
  let html=`<div class="cat-item"><span class="emo">📋</span><span class="nm">Все</span><span class="locked">🔒 системная</span></div>`;
  cats.forEach(c=>{
    html+=`<div class="cat-item"><span class="emo">${c.emoji}</span><span class="nm">${esc(c.name)}</span>
      <button onclick="openCatEdit(${jsArg(c.id)})" aria-label="Изменить">${ICONS.edit}</button>
      ${c.id==='personal'?'<span class="locked">базовая</span>':`<button onclick="delCat(${jsArg(c.id)})" aria-label="Удалить">${ICONS.trash}</button>`}</div>`;
  });
  document.getElementById('cat-list').innerHTML=html;
}
function openCatEdit(id){
  catEditId=id||null;
  if(id){const c=getCats().find(x=>x.id===id);document.getElementById('cat-edit-title').textContent='Изменить категорию';document.getElementById('cat-name').value=c.name;document.getElementById('cat-emoji').value=c.emoji;pickedEmoji=c.emoji;}
  else{document.getElementById('cat-edit-title').textContent='Новая категория';document.getElementById('cat-name').value='';document.getElementById('cat-emoji').value='';pickedEmoji='⭐';}
  renderEmojiPick();
  document.getElementById('modal-cat-edit').classList.add('on');
}
function closeCatEdit(){document.getElementById('modal-cat-edit').classList.remove('on');}
function renderEmojiPick(){
  const cur=document.getElementById('cat-emoji').value||pickedEmoji;
  document.getElementById('emoji-pick').innerHTML=EMOJI_LIST.map(e=>`<span class="${e===cur?'sel':''}" onclick="pickEmoji('${e}')">${e}</span>`).join('');
}
function pickEmoji(e){pickedEmoji=e;document.getElementById('cat-emoji').value=e;renderEmojiPick();}
function saveCat(){
  const name=document.getElementById('cat-name').value.trim();
  const emoji=document.getElementById('cat-emoji').value.trim()||pickedEmoji||'⭐';
  if(!name){toast('Введи название');return;}
  const cats=getCats();
  if(catEditId){const c=cats.find(x=>x.id===catEditId);if(c){c.name=name;c.emoji=emoji;}}
  else{cats.push({id:'cat_'+Date.now(),emoji,name});}
  setCats(cats);closeCatEdit();renderCatList();renderNav();render();toast('Сохранено ✅');
}
async function delCat(id){
  if(id==='personal'){toast('Базовую нельзя удалить');return;}
  const cats=getCats();const c=cats.find(x=>x.id===id);if(!c)return;
  const tasks=getTasks();const inCat=tasks.filter(t=>t.module===id);
  let msg=`Удалить категорию "${c.name}"?`;if(inCat.length)msg+=`\n\n${inCat.length} дел(а) будут перенесены в "Личное".`;
  if(!await lumoConfirm(msg,'Удалить категорию','Удалить',true))return;
  if(inCat.length){tasks.forEach(t=>{if(t.module===id)t.module='personal';});setTasks(tasks);}
  setCats(cats.filter(x=>x.id!==id));
  if(currentTab===id)currentTab='all';
  renderCatList();renderNav();render();toast('Категория удалена 🗑');
}

let expCatEditName=null,pickedExpEmoji='📦';
const EXP_EMOJI_LIST=['🛒','⛽','🍔','🚌','👕','🎮','💊','🏠','👶','🚗','🌱','📦','🐶','🎓','🎁','💡','📱','✈️','🏋️','☕','🍺','💇','🔧','🎬'];

function renderExpCatList(){
  const cats=getExpCats();
  document.getElementById('expcat-list').innerHTML=cats.map(c=>{
    const locked=c.name==='Прочее';
    return `<div class="cat-item"><span class="emo">${c.i}</span><span class="nm">${esc(c.name)}</span>
      <button onclick="openExpCatEdit(${jsArg(c.name)})" aria-label="Изменить">${ICONS.edit}</button>
      ${locked?'<span class="locked">базовая</span>':`<button onclick="delExpCat(${jsArg(c.name)})" aria-label="Удалить">${ICONS.trash}</button>`}</div>`;
  }).join('');
}
function openExpCatEdit(name){
  expCatEditName=name||null;
  if(name){const c=getExpCats().find(x=>x.name===name);document.getElementById('expcat-edit-title').textContent='Изменить категорию трат';document.getElementById('expcat-name').value=c.name;document.getElementById('expcat-emoji').value=c.i;pickedExpEmoji=c.i;}
  else{document.getElementById('expcat-edit-title').textContent='Новая категория трат';document.getElementById('expcat-name').value='';document.getElementById('expcat-emoji').value='';pickedExpEmoji='📦';}
  renderExpEmojiPick();
  document.getElementById('modal-expcat-edit').classList.add('on');
}
function closeExpCatEdit(){document.getElementById('modal-expcat-edit').classList.remove('on');}
function renderExpEmojiPick(){
  const cur=document.getElementById('expcat-emoji').value||pickedExpEmoji;
  document.getElementById('expemoji-pick').innerHTML=EXP_EMOJI_LIST.map(e=>`<span class="${e===cur?'sel':''}" onclick="pickExpEmoji('${e}')">${e}</span>`).join('');
}
function pickExpEmoji(e){pickedExpEmoji=e;document.getElementById('expcat-emoji').value=e;renderExpEmojiPick();}
function saveExpCat(){
  const name=document.getElementById('expcat-name').value.trim();
  const emoji=document.getElementById('expcat-emoji').value.trim()||pickedExpEmoji||'📦';
  if(!name){toast('Введи название');return;}
  const cats=getExpCats();
  if(expCatEditName){const c=cats.find(x=>x.name===expCatEditName);if(c){c.name=name;c.i=emoji;}}
  else{
    if(cats.some(x=>x.name===name)){toast('Такая категория уже есть');return;}
    const color=CAT_COLORS[cats.length%CAT_COLORS.length];
    cats.splice(cats.length-1,0,{name,i:emoji,c:color});
  }
  setExpCats(cats);closeExpCatEdit();renderExpCatList();toast('Сохранено ✅');
}
async function delExpCat(name){
  if(name==='Прочее'){toast('Базовую нельзя удалить');return;}
  if(!await lumoConfirm(`Категория трат «${name}» будет удалена. Старые операции сохранят это название.`,'Удалить категорию','Удалить',true))return;
  setExpCats(getExpCats().filter(x=>x.name!==name));
  renderExpCatList();toast('Удалено 🗑');
}

/* ===== БЮДЖЕТЫ ===== */
function getBudgets(){const d=load();return d.budgets||{};}
function setBudgets(b){const d=load();d.budgets=b;save(d);}
function openBudget(){
  const budgets=getBudgets();
  document.getElementById('limit-list').innerHTML=getExpCats().map(c=>`
    <div class="limit-row"><span class="ln">${c.i} ${esc(c.name)}</span>
    <input type="number" inputmode="numeric" data-cat="${esc(c.name)}" value="${budgets[c.name]||''}" placeholder="—"></div>`).join('');
  document.getElementById('modal-budget').classList.add('on');
}
function closeBudget(){document.getElementById('modal-budget').classList.remove('on');}
function saveBudgets(){
  const b={};
  document.querySelectorAll('#limit-list input').forEach(inp=>{const v=Number(inp.value)||0;if(v>0)b[inp.dataset.cat]=v;});
  setBudgets(b);closeBudget();toast('Лимиты сохранены 🎯');
  if(currentTab==='finance')renderFinance();
}
function renderBudgets(){
  const budgets=getBudgets();
  const keys=Object.keys(budgets);
  if(!keys.length)return '';
  const s=getExpenseStats();
  const spent={};s.byCat.forEach(x=>spent[x.name]=x.sum);
  let html=`<div class="fin-log-h">🎯 Бюджеты</div>`;
  keys.forEach(name=>{
    const limit=budgets[name],used=spent[name]||0;
    const pct=Math.min(100,Math.round(used/limit*100));
    const over=used>limit,near=pct>=80&&!over;
    const st=catStyleOf(name);
    let color=over?'var(--bad)':near?'var(--warn)':'var(--ok)';
    html+=`<div class="budget-card">
      <div class="bh"><span>${st.i} ${esc(name)}</span><span class="${over?'budget-warn':''}">${fmtMoney(used)} / ${fmtMoney(limit)}₽</span></div>
      <div class="budget-bar"><i style="width:${pct}%;background:${color}"></i></div>
      <div class="budget-sub"><span>${pct}%</span><span class="${over?'budget-warn':''}">${over?`⚠️ Превышен на ${fmtMoney(used-limit)}₽`:near?`⚠️ Осталось ${fmtMoney(limit-used)}₽`:`Осталось ${fmtMoney(limit-used)}₽`}</span></div>
    </div>`;
  });
  html+=`<div style="text-align:center;margin:4px 16px 14px"><button class="btn ghost" onclick="openBudget()">⚙️ Изменить лимиты</button></div>`;
  return html;
}
function checkBudgetAlert(cat){
  const b=getBudgets();if(!b[cat])return;
  const s=getExpenseStats();
  const used=(s.byCat.find(x=>x.name===cat)||{}).sum||0;
  if(used>b[cat])toast(`⚠️ Лимит «${cat}» превышен!`);
  else if(used>=b[cat]*0.8)toast(`⚠️ 80% лимита «${cat}»`);
}
/* ===== ЦЕЛИ-КОПИЛКИ ===== */
function getGoals(){const d=load();return d.goals||[];}
function setGoals(g){const d=load();d.goals=g;save(d);}
function openGoal(){
  document.getElementById('goal-name').value='';
  document.getElementById('goal-emoji').value='';
  document.getElementById('goal-target').value='';
  document.getElementById('goal-start').value='';
  document.getElementById('modal-goal').classList.add('on');
}
function closeGoal(){document.getElementById('modal-goal').classList.remove('on');}
function saveGoal(){
  const name=document.getElementById('goal-name').value.trim();
  const target=Number(document.getElementById('goal-target').value)||0;
  if(!name){toast('Введи название');return;}
  if(!target){toast('Введи сумму цели');return;}
  const emoji=document.getElementById('goal-emoji').value.trim()||'🎯';
  const start=Number(document.getElementById('goal-start').value)||0;
  const g=getGoals();g.push({id:Date.now(),name,emoji,target,saved:start});setGoals(g);
  closeGoal();confetti();toast('Цель создана 🎯');
  if(currentTab==='finance')renderFinance();
}
function addToGoal(id){
  const inp=document.getElementById('goal-in-'+id);if(!inp)return;
  const v=Number(inp.value)||0;if(!v){toast('Введи сумму');return;}
  const g=getGoals();const x=g.find(a=>a.id===id);if(!x)return;
  x.saved=(x.saved||0)+v;setGoals(g);
  const done=x.saved>=x.target;
  confetti();vibrate(done?[40,60,40]:30);
  toast(done?'🎉 Цель достигнута!':'+'+fmtMoney(v)+'₽ в копилку');
  renderFinance();
}
async function delGoal(id){
  if(!await lumoConfirm('Прогресс накопления этой цели будет удалён.','Удалить цель','Удалить',true))return;
  setGoals(getGoals().filter(a=>a.id!==id));renderFinance();toast('Удалено 🗑');
}
function renderGoals(){
  const goals=getGoals();
  if(!goals.length)return '';
  let html=`<div class="fin-log-h">🎯 Цели-копилки</div>`;
  goals.forEach(g=>{
    const pct=Math.min(100,Math.round((g.saved||0)/g.target*100));
    const done=(g.saved||0)>=g.target;
    html+=`<div class="goal-card">
      <div class="gh"><span>${g.emoji} ${esc(g.name)} ${done?'✅':''}</span><span class="gd" onclick="delGoal(${g.id})">🗑</span></div>
      <div class="goal-bar"><i style="width:${pct}%"></i></div>
      <div class="goal-sub"><span>${fmtMoney(g.saved||0)} / ${fmtMoney(g.target)}₽</span><span>${pct}%</span></div>
      ${done?'':`<div class="goal-add-row"><input id="goal-in-${g.id}" type="number" inputmode="numeric" placeholder="Добавить ₽"><button onclick="addToGoal(${g.id})">+</button></div>`}
    </div>`;
  });
  html+=`<div style="text-align:center;margin:4px 16px 14px"><button class="btn ghost" onclick="openGoal()">➕ Новая цель</button></div>`;
  return html;
}

/* ===== ФИНАНСЫ ===== */
function receiptBreakdownOf(r){
  if(!Array.isArray(r.receiptItems)||!r.receiptItems.length)return null;
  const cats={};let itemTotal=0;
  r.receiptItems.forEach(raw=>{
    const x=typeof raw==='string'?{name:raw,price:0,category:r.category||'Прочее'}:raw;
    const price=Math.abs(Number(x.price)||0);if(!price)return;
    const cat=x.category||r.category||'Прочее';cats[cat]=(cats[cat]||0)+price;itemTotal+=price;
  });
  if(!itemTotal)return null;
  const diff=Math.round((Math.abs(Number(r.amount)||0)-itemTotal)*100)/100;
  if(Math.abs(diff)>.009)cats[r.category||'Прочее']=(cats[r.category||'Прочее']||0)+diff;
  return cats;
}
function finStats(y,m){
  const ym=y+'-'+String(m+1).padStart(2,'0');
  const exp=load().finance||[],inc=load().income||[];
  let total=0,income=0;const cats={};
  exp.forEach(r=>{if(!r.amount||!r.date||!r.date.startsWith(ym))return;total+=Math.abs(r.amount);const split=receiptBreakdownOf(r);if(split)Object.entries(split).forEach(([cat,sum])=>cats[cat]=(cats[cat]||0)+sum);else cats[r.category||'Прочее']=(cats[r.category||'Прочее']||0)+r.amount;});
  inc.forEach(r=>{if(!r.amount||!r.date||!r.date.startsWith(ym))return;income+=r.amount;});
  return{total,income,balance:income-total,byCat:Object.keys(cats).map(k=>({name:k,sum:cats[k]})).sort((a,b)=>b.sum-a.sum)};
}
function getExpenseStats(){const d=new Date();return finStats(d.getFullYear(),d.getMonth());}
function finNav(dir){finDate.setMonth(finDate.getMonth()+dir);renderFinance();}

function weekInsight(){
  const now=new Date();
  const weekAgo=now.getTime()-7*24*60*60*1000;
  const exp=load().finance||[];
  let weekSum=0,prevSum=0;
  const prevWeekAgo=weekAgo-7*24*60*60*1000;
  exp.forEach(r=>{
    if(!r.amount||!r.date)return;
    const ms=new Date(r.date).getTime();
    if(ms>=weekAgo)weekSum+=r.amount;
    else if(ms>=prevWeekAgo&&ms<weekAgo)prevSum+=r.amount;
  });
  if(!weekSum&&!prevSum)return '💡 Записывай траты — покажу недельную статистику!';
  let diff='';
  if(prevSum>0){
    const p=Math.round((weekSum-prevSum)/prevSum*100);
    if(p>5)diff=` 📈 На <b>${p}%</b> больше, чем прошлую неделю`;
    else if(p<-5)diff=` 📉 На <b>${Math.abs(p)}%</b> меньше — молодец!`;
    else diff=' ➡️ Примерно как обычно';
  }
  return `💸 За 7 дней: <b>${fmtMoney(weekSum)} ₽</b>.${diff}`;
}

function dayBars(y,m){
  const ym=y+'-'+String(m+1).padStart(2,'0');
  const days=new Date(y,m+1,0).getDate();
  const tk=todayKey();
  const arr=new Array(days).fill(0);
  (load().finance||[]).forEach(r=>{if(r.amount&&r.date&&r.date.startsWith(ym)){const d=Number(r.date.split('-')[2]);if(d>=1&&d<=days)arr[d-1]+=r.amount;}});
  const max=Math.max(...arr,1);
  if(!arr.some(v=>v>0))return '';
  let bars='';
  for(let i=0;i<days;i++){
    const h=Math.round(arr[i]/max*100);
    const k=ym+'-'+String(i+1).padStart(2,'0');
    bars+=`<div class="db ${k===tk?'today':''}" style="height:${h}%" title="${i+1}: ${fmtMoney(arr[i])}₽"></div>`;
  }
  return `<div class="fin-log-h">📊 По дням месяца</div><div class="daybars">${bars}</div>`;
}

function donutSVG(byCat,total){
  const R=70,C=2*Math.PI*R;let off=0;
  if(!total)return `<svg width="180" height="180" viewBox="0 0 180 180"><circle cx="90" cy="90" r="${R}" fill="none" stroke="var(--line)" stroke-width="24"/></svg>`;
  let seg='';
  byCat.forEach(x=>{const frac=x.sum/total,len=frac*C;const col=catStyleOf(x.name).c;seg+=`<circle cx="90" cy="90" r="${R}" fill="none" stroke="${col}" stroke-width="24" stroke-dasharray="${len} ${C-len}" stroke-dashoffset="${-off}" transform="rotate(-90 90 90)"/>`;off+=len;});
  return `<svg width="180" height="180" viewBox="0 0 180 180"><circle cx="90" cy="90" r="${R}" fill="none" stroke="var(--line)" stroke-width="24"/>${seg}</svg>`;
}

function renderFinance(){
  const view=document.getElementById('view');
  const y=finDate.getFullYear(),m=finDate.getMonth();
  const ym=y+'-'+String(m+1).padStart(2,'0');
  const s=finStats(y,m);
  const prevDate=new Date(y,m-1,1),prev=finStats(prevDate.getFullYear(),prevDate.getMonth());
  const delta=prev.total?Math.round((s.total-prev.total)/prev.total*100):null;
  const monthLbl=monthFull[m]+' '+y;
  let html=`<div class="finance-page"><div class="fin-hero">
    <div class="fin-monthnav"><button onclick="finNav(-1)">‹</button><span>${monthLbl}</span><button onclick="finNav(1)">›</button></div>
    <div class="fin-balance">
      <div class="fin-bal-item"><small>Доход</small><b class="money-in">${s.income?'+':''}${fmtMoney(s.income)} ₽</b></div>
      <div class="fin-bal-item"><small>Расход</small><b class="money-out">${s.total?'-':''}${fmtMoney(s.total)} ₽</b></div>
      <div class="fin-bal-item"><small>Баланс</small><b>${s.balance>=0?'+':''}${fmtMoney(s.balance)} ₽</b></div>
    </div>
    <div class="fin-chart">${donutSVG(s.byCat,s.total)}<div class="center"><b>${fmtMoney(s.total)} ₽</b><small>Расходы</small></div></div>
  </div>${delta===null?'':`<div class="fin-compare ${delta<=0?'good':''}">${delta<=0?'↓':'↑'} ${Math.abs(delta)}% к прошлому месяцу <span>${delta<=0?'Расходы снизились':'Расходы выросли'}</span></div>`}`;

  html+=financeToolHub();
  html+=`<div class="fin-insight">${weekInsight()}</div>`;
  html+=dayBars(y,m);
  html+=renderGoals();
  html+=renderBudgets();
  html+=renderAutoPayBlock();
html+=renderDebtBlock();

  if(s.byCat.length){
    html+=`<div class="fin-log-h">📊 По категориям</div><div class="list">`;
    s.byCat.forEach(x=>{const st=catStyleOf(x.name);const pct=s.total?Math.round(x.sum/s.total*100):0;html+=`<div class="task"><div class="bar" style="background:${st.c}"></div><div class="t-body"><div class="t-title">${st.i} ${esc(x.name)}</div><div class="t-meta"><span>${pct}%</span></div></div><b style="align-self:center">${fmtMoney(x.sum)}₽</b></div>`;});
    html+='</div>';
  }

  const incLog=(load().income||[]).filter(r=>r.date&&r.date.startsWith(ym)).slice().reverse();
  if(incLog.length){
    html+=`<div class="fin-log-h">💵 Доходы · ${incLog.length}</div><div class="list">`;
    html+=incLog.map(t=>`<div class="task"><div class="bar" style="background:var(--ok)"></div><div class="t-body"><div class="t-title" style="color:var(--ok)">📈 +${fmtMoney(t.amount)}₽ · ${esc(t.source||'Доход')}</div><div class="t-meta"><span>📅 ${fmtDate(t.date)||t.date}</span></div>${t.desc?`<div class="t-desc">${esc(t.desc)}</div>`:''}</div><div class="t-acts"><button onclick="openDataLinks('income',${jsArg(t.id)})" aria-label="Связи">${ICONS.link}</button><button onclick="editIncome(${t.id})" aria-label="Изменить">${ICONS.edit}</button><button onclick="delIncome(${t.id})" aria-label="Удалить">${ICONS.trash}</button></div></div>`).join('')+'</div>';
  }

  const expLog=(load().finance||[]).filter(r=>r.date&&r.date.startsWith(ym)).slice().reverse();
  if(expLog.length){
    html+=`<div class="fin-log-h">📉 Расходы · ${expLog.length}</div><div class="list">`;
       html+=expLog.map(t=>{const st=catStyleOf(t.category),split=receiptBreakdownOf(t);const sh=t.shared?'<span class="assign-badge">👨‍👩‍👦 общая</span>':'';const tags=split?`<div class="receipt-breakdown">${Object.entries(split).filter(x=>x[1]>0).map(([c,v])=>`<span>${catStyleOf(c).i} ${esc(c)} · ${fmtMoney(v)}₽</span>`).join('')}</div>`:'';return `<div class="task"><div class="bar" style="background:${st.c}"></div><div class="t-body" ${t.receiptItems?`onclick="openReceiptDetails(${t.id})" style="cursor:pointer"`:''}><div class="t-title">${t.receiptItems?'🧾':st.i} ${fmtMoney(t.amount)}₽ · ${esc(t.category||'Прочее')}</div><div class="t-meta"><span>📅 ${fmtDate(t.date)||t.date}</span>${sh}${t.receiptItems?'<span>Открыть чек ›</span>':''}</div>${t.desc?`<div class="t-desc">${esc(t.desc)}</div>`:''}${relatedLinksHTML('expense',t.id)}${tags}</div><div class="t-acts"><button onclick="openDataLinks('expense',${jsArg(t.id)})" aria-label="Связи">${ICONS.link}</button><button onclick="editExpense(${t.id})" aria-label="Изменить">${ICONS.edit}</button><button onclick="delExpense(${t.id})" aria-label="Удалить">${ICONS.trash}</button></div></div>`;}).join('')+'</div>';
  }

  if(!incLog.length&&!expLog.length)html+=emptyState(ICONS.finance,'Операций пока нет','Добавь первый расход или отсканируй чек','openExpModal()','Добавить расход');
  view.innerHTML=html+'</div>';
}
function financeToolHub(){
  const tools=[
    ['openReceiptScanner()','receipt','Сканировать чек'],['renderPriceHistory()','trend','История цен'],['openGoal()','target','Новая цель'],
    ['openBudget()','limit','Лимиты'],['openAutoPaysList()','repeat','Платежи'],['openDebtModal()','debt','Долг']
  ];
  const icons={receipt:'<path d="M7 3h10a2 2 0 012 2v16l-3-2-4 2-4-2-3 2V5a2 2 0 012-2zM8 9h8M8 13h6"/>',trend:'<path d="M4 17l5-5 4 3 7-8M15 7h5v5"/>',target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',limit:'<path d="M4 18V9M10 18V5M16 18v-7M22 18V3"/>',repeat:'<path d="M4 8h12l-3-3M20 16H8l3 3"/>',debt:'<path d="M4 7h16v11H4zM7 11h6M16 14h1"/>'};
  return `<div class="finance-tools">${tools.map(x=>`<button onclick="${x[0]}"><svg viewBox="0 0 24 24" fill="none">${icons[x[1]]}</svg><span>${x[2]}</span></button>`).join('')}</div>`;
}
function modernNoteHTML(n){const color=n.color||NOTE_COLORS[0],search=esc(((n.title||'')+' '+(n.text||'')).toLowerCase());return `<article class="note-modern ${n.pinned?'pinned':''}" style="--note-color:${color}" data-search="${search}" onclick="openNoteModal(${n.id})"><button class="note-pin" onclick="event.stopPropagation();toggleNotePin(${n.id})" aria-label="Закрепить">${n.pinned?'📌':'○'}</button><h3>${esc(n.title||'Без заголовка')}</h3><p>${esc(n.text||'').replace(/\n/g,'<br>')}</p>${relatedLinksHTML('note',n.id)}<div class="note-date">${n.date?'📅 '+fmtDate(n.date):''}</div><div class="note-actions"><button onclick="event.stopPropagation();openDataLinks('note',${jsArg(n.id)})">${ICONS.link}</button><button onclick="event.stopPropagation();openNoteModal(${n.id})">${ICONS.edit}</button><button onclick="event.stopPropagation();delNote(${n.id})">${ICONS.trash}</button></div></article>`;}
function toggleNotePin(id){const notes=getNotes(),n=notes.find(x=>x.id===id);if(!n)return;n.pinned=!n.pinned;n.updatedAt=Date.now();setNotes(notes);renderNotes();vibrate(10);}
function filterNotes(q){const s=String(q||'').toLowerCase();document.querySelectorAll('#notes-grid .note-modern').forEach(x=>x.style.display=!s||x.dataset.search.includes(s)?'block':'none');}
function cleanReceiptMerchant(value){return String(value||'').replace(/^\s*\d{2,}\s*["'«]*/,'').replace(/^[^\p{L}]+/u,'').replace(/^(?:ооо|ип|ао)\s*["'«]*/i,'').replace(/["'»]+$/,'').replace(/\s+/g,' ').trim().slice(0,80)||'Магазин'}
function cleanReceiptItemName(value){return String(value||'').replace(/^\s*\d{1,2}\s*[:.)-]\s*\d{4,14}\s+/,'').replace(/^\s*\d{1,3}[.)]\s*/,'').replace(/\s+(?:(?:бн|шт|x|х)\s*["'«]?\d+["'»]?|["'«]\d+["'»]?)\s*$/i,'').replace(/\s*["'«»]+\s*$/,'').replace(/[*=]+/g,'').replace(/\s+/g,' ').trim()}
function normalizeReceiptItem(raw,receipt){
  const x=typeof raw==='string'?{name:raw,price:0,category:receipt.category||'Прочее'}:raw||{};
  const quantity=Math.max(.001,Number(x.quantity)||1),price=Math.abs(Number(x.price)||0),unitPrice=Math.abs(Number(x.unitPrice)||(price/quantity)||0);
  return {name:cleanReceiptItemName(x.name),quantity,unitPrice:Math.round(unitPrice*100)/100,price:Math.round(price*100)/100,category:x.category||receipt.category||'Прочее',warning:x.warning||'',originalPrice:Number(x.originalPrice)||0,mergedCount:Number(x.mergedCount)||1};
}
function receiptSearchKey(s){return String(s||'').toLowerCase().replace(/ё/g,'е').replace(/[^\p{L}\p{N}]+/gu,' ').trim();}
function receiptProductHistory(){
  const rows=[];
  (load().finance||[]).filter(r=>Array.isArray(r.receiptItems)).forEach(r=>{
    r.receiptItems.forEach(raw=>{const x=normalizeReceiptItem(raw,r);if(!x.price&&r.receiptItems.length===1){x.price=Math.abs(Number(r.amount)||0);x.unitPrice=Math.round(x.price/x.quantity*100)/100}if(x.name)rows.push({...x,price:x.unitPrice||x.price,lineTotal:x.price,date:r.date,merchant:cleanReceiptMerchant(r.merchant||String(r.desc||'').replace(/^Чек:\s*/i,'')),receiptId:r.id,key:receiptSearchKey(x.name)});});
  });
  return rows.sort((a,b)=>String(b.date).localeCompare(String(a.date)));
}
function openReceiptDetails(id){
  const r=(load().finance||[]).find(x=>x.id===id);if(!r||!Array.isArray(r.receiptItems))return;
  const items=r.receiptItems.map(x=>normalizeReceiptItem(x,r));
  document.getElementById('receipt-details-title').textContent='Чек · '+cleanReceiptMerchant(r.merchant||String(r.desc||'').replace(/^Чек:\s*/i,''));
  document.getElementById('receipt-details-body').innerHTML=`<div class="local-edit-note">${fmtDate(r.date)} · <b>${fmtMoney(r.amount)} ₽</b></div>
    ${items.map(x=>`<div class="global-result"><div class="gr-icon">${catStyleOf(x.category).i}</div><div><b>${esc(x.name)}</b><small>${esc(x.category)} · ${fmtReceiptQty(x.quantity)} × ${fmtMoney(x.unitPrice)} ₽</small></div><b>${x.price?fmtMoney(x.price)+' ₽':'—'}</b></div>`).join('')}
    <div class="receipt-breakdown">${Object.entries(receiptBreakdownOf(r)||{}).filter(x=>x[1]>0).map(([c,v])=>`<span>${catStyleOf(c).i} ${esc(c)} · ${fmtMoney(v)}₽</span>`).join('')}</div><button class="btn ghost" onclick="openReceiptEditor(${r.id})">Исправить чек</button>`;
  document.getElementById('modal-receipt-details').classList.add('on');
}
function renderPriceHistory(){
  const rows=receiptProductHistory(),view=document.getElementById('view');
  document.getElementById('hero-title').textContent='История цен';
  const groups=new Map();
  rows.filter(x=>x.price>0).forEach(x=>{const key=x.key;if(!groups.has(key))groups.set(key,[]);groups.get(key).push(x);});
  const cards=[...groups.values()].sort((a,b)=>b.length-a.length||String(b[0].date).localeCompare(String(a[0].date)));
  view.innerHTML=`<div class="price-history"><button class="btn ghost" onclick="renderFinance()">← Вернуться в финансы</button>
    <label class="inline-search"><svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/></svg><input type="search" placeholder="Найти товар или магазин" aria-label="Найти товар или магазин" oninput="filterPriceHistory(this.value)"></label>
    <div id="price-history-list">${cards.length?cards.map(priceHistoryCard).join(''):'<div class="empty"><div>🧾</div>Отсканируй несколько чеков — здесь появится история цен</div>'}</div></div>`;
}
function priceHistoryCard(list){
  const latest=list[0],prev=list[1],delta=prev&&prev.price?Math.round((latest.price-prev.price)/prev.price*100):0;
  const trend=!prev?'новинка':delta>0?`↑ ${delta}%`:delta<0?`↓ ${Math.abs(delta)}%`:'без изменений';
  return `<div class="price-card" data-search="${esc(receiptSearchKey(list.map(x=>x.name+' '+x.merchant).join(' ')))}" onclick="openReceiptDetails(${latest.receiptId})">
    <div class="price-card-head"><div><b>${esc(latest.name)}</b><small>${esc(latest.merchant)} · ${fmtDate(latest.date)} · ${esc(latest.category)}</small></div><div class="price-trend">${fmtMoney(latest.price)} ₽<small>${trend}</small></div></div>
    ${list.length>1?`<small>Покупок: ${list.length} · раньше ${fmtMoney(prev.price)} ₽ в «${esc(prev.merchant)}»</small>`:''}</div>`;
}
function filterPriceHistory(q){
  const key=receiptSearchKey(q);document.querySelectorAll('#price-history-list .price-card').forEach(x=>x.style.display=!key||x.dataset.search.includes(key)?'block':'none');
}
async function delExpense(id){if(!await lumoConfirm('Операция и связанные позиции чека будут удалены.','Удалить расход','Удалить',true))return;const d=load();d.finance=(d.finance||[]).filter(x=>x.id!==id);save(d);renderFinance();toast('Удалено 🗑');}
async function delIncome(id){if(!await lumoConfirm('Запись о доходе будет удалена.','Удалить доход','Удалить',true))return;const d=load();d.income=(d.income||[]).filter(x=>x.id!==id);save(d);renderFinance();toast('Удалено 🗑');}

  // Открыть модалку для РЕДАКТИРОВАНИЯ расхода
function editExpense(id){
  const rec=(load().finance||[]).find(x=>x.id===id);
  if(!rec)return;
  editFinId=id;editFinType='exp';
  expType='exp';pickType('exp');
  expShared=!!rec.shared;renderSharedBox();
  document.getElementById('e-amount').value=rec.amount||'';
  document.getElementById('e-desc').value=rec.desc||'';
  document.getElementById('e-date').value=rec.date||todayKey();
  document.getElementById('e-cat').innerHTML=getExpCats().map(c=>`<option value="${esc(c.name)}" ${c.name===rec.category?'selected':''}>${c.i} ${esc(c.name)}</option>`).join('');
  const shTog=document.getElementById('e-shared-toggle');
  if(shTog)shTog.style.display=getFamilyState()?'flex':'none';
  document.querySelector('#modal-exp h3').textContent='Изменить расход';
  document.getElementById('modal-exp').classList.add('on');
}

// Открыть модалку для РЕДАКТИРОВАНИЯ дохода
function editIncome(id){
  const rec=(load().income||[]).find(x=>x.id===id);
  if(!rec)return;
  editFinId=id;editFinType='inc';
  expType='inc';pickType('inc');
  document.getElementById('e-amount').value=rec.amount||'';
  document.getElementById('e-desc').value=rec.desc||'';
  document.getElementById('e-date').value=rec.date||todayKey();
  // выставляем источник
  const srcSel=document.getElementById('e-src');
  let found=false;
  Array.from(srcSel.options).forEach(o=>{if(o.value===rec.source){srcSel.value=rec.source;found=true;}});
  if(!found&&rec.source){const o=document.createElement('option');o.value=rec.source;o.textContent=rec.source;srcSel.insertBefore(o,srcSel.firstChild);srcSel.value=rec.source;}
  document.querySelector('#modal-exp h3').textContent='Изменить доход';
  document.getElementById('modal-exp').classList.add('on');
}
function openExpModal(){
  editFinId=null;editFinType=null;
  document.querySelector('#modal-exp h3').textContent='Добавить операцию';
  expType='exp';pickType('exp');expShared=false;renderSharedBox();
  document.getElementById('e-amount').value='';document.getElementById('e-desc').value='';document.getElementById('e-date').value=todayKey();
  document.getElementById('e-cat').innerHTML=getExpCats().map(c=>`<option value="${esc(c.name)}">${c.i} ${esc(c.name)}</option>`).join('');
  // Семейную трату показываем только в семье
  const shTog=document.getElementById('e-shared-toggle');
  if(shTog)shTog.style.display=getFamilyState()?'flex':'none';
  document.getElementById('modal-exp').classList.add('on');
}
function closeExpModal(){editFinId=null;editFinType=null;document.getElementById('modal-exp').classList.remove('on');}
function pickType(t){
  expType=t;
  document.getElementById('type-exp').classList.toggle('on',t==='exp');
  document.getElementById('type-inc').classList.toggle('on',t==='inc');
  document.getElementById('e-cat-field').style.display=t==='exp'?'block':'none';
  document.getElementById('e-src-field').style.display=t==='inc'?'block':'none';
  document.getElementById('e-shared-toggle').style.display=(t==='exp'&&getFamilyState())?'flex':'none';
}
function toggleExpShared(){expShared=!expShared;renderSharedBox();}
function renderSharedBox(){document.getElementById('e-shared-box').classList.toggle('on',expShared);document.getElementById('e-shared-box').textContent=expShared?'✓':'';}
function saveExpModal(){
  const amount=Number(document.getElementById('e-amount').value)||0;
  if(!amount){toast('Введи сумму');return;}
  const date=document.getElementById('e-date').value||todayKey();
  const desc=document.getElementById('e-desc').value.trim();
  const d=load();let cat=null;

  // ===== РЕЖИМ РЕДАКТИРОВАНИЯ =====
  if(editFinId){
    if(editFinType==='exp'){
      cat=document.getElementById('e-cat').value;
      const rec=(d.finance||[]).find(x=>x.id===editFinId);
      if(rec){rec.amount=amount;rec.date=date;rec.desc=desc;rec.category=cat;rec.shared=expShared;}
      save(d);toast('Расход изменён ✅');if(cat)checkBudgetAlert(cat);
    }else{
      const rec=(d.income||[]).find(x=>x.id===editFinId);
      if(rec){rec.amount=amount;rec.date=date;rec.desc=desc;rec.source=document.getElementById('e-src').value;}
      save(d);toast('Доход изменён ✅');
    }
    editFinId=null;editFinType=null;
    closeExpModal();vibrate(20);renderFinance();
    return;
  }

  // ===== РЕЖИМ СОЗДАНИЯ (как было) =====
  if(expType==='exp'){cat=document.getElementById('e-cat').value;if(!d.finance)d.finance=[];d.finance.push({id:Date.now()+Math.floor(Math.random()*1000),date,desc,amount,category:cat,shared:expShared});save(d);toast(expShared?'Общая трата записана 👨‍👩‍👦':'Расход записан 💰');if(expShared)pushSharedExpense({date,desc,amount,category:cat});}
  else{if(!d.income)d.income=[];d.income.push({id:Date.now()+Math.floor(Math.random()*1000),date,desc,amount,source:document.getElementById('e-src').value});save(d);toast('Доход записан 💵');}
  closeExpModal();confetti();vibrate(30);
  if(cat)checkBudgetAlert(cat);
  renderFinance();
}

let receiptFile=null,receiptWorker=null,receiptSource='finance',receiptItemsDraft=[],receiptEditId=null,receiptAuditDraft={};
function resetReceiptSheetPosition(toTop=false){requestAnimationFrame(()=>{const sheet=document.querySelector('#modal-receipt .sheet');if(sheet){sheet.scrollLeft=0;if(toTop)sheet.scrollTop=0;}if(document.scrollingElement)document.scrollingElement.scrollLeft=0;});}
function openReceiptScanner(source='finance'){
  receiptSource=source;
  receiptEditId=null;
  receiptFile=null;
  document.getElementById('receipt-file').value='';
  document.getElementById('receipt-camera').value='';
  document.getElementById('receipt-preview').style.display='none';
  document.getElementById('receipt-review').style.display='none';
  document.getElementById('receipt-scan-btn').disabled=true;
  document.getElementById('receipt-save-btn').textContent='Записать расход';
  setReceiptProgress(0,'Выбери чёткое фото чека');
  document.getElementById('modal-receipt').classList.add('on');
  resetReceiptSheetPosition(true);
}
function openAIReceipt(){
  aiAddMsg('user','📷 Хочу добавить чек');
  aiAddMsg('ai','Выбери фотографию чека или сделай новый снимок. Я локально распознаю сумму, дату, магазин и покупки, а перед сохранением дам всё проверить.');
  openReceiptScanner('ai');
}
async function closeReceiptScanner(){
  document.getElementById('modal-receipt').classList.remove('on');
  receiptEditId=null;
  if(receiptWorker){try{await receiptWorker.terminate();}catch(e){}receiptWorker=null;}
}
function receiptFilePicked(ev){
  receiptFile=ev.target.files?.[0]||null;if(!receiptFile)return;
  const img=document.getElementById('receipt-preview');img.src=URL.createObjectURL(receiptFile);img.style.display='block';
  document.getElementById('receipt-scan-btn').disabled=false;setReceiptProgress(0,'Фото готово к распознаванию');
}
function openReceiptEditor(id){
  const r=(load().finance||[]).find(x=>x.id===id);if(!r||!Array.isArray(r.receiptItems))return;
  document.getElementById('modal-receipt-details').classList.remove('on');receiptEditId=id;receiptSource='finance';receiptFile=null;
  document.getElementById('receipt-preview').style.display='none';document.getElementById('receipt-scan-btn').disabled=true;document.getElementById('receipt-review').style.display='block';
  document.getElementById('receipt-merchant').value=cleanReceiptMerchant(r.merchant||r.desc);document.getElementById('receipt-total').value=r.amount||'';document.getElementById('receipt-date').value=r.date||todayKey();
  const cat=document.getElementById('receipt-category');cat.innerHTML=getExpCats().map(c=>`<option value="${esc(c.name)}">${c.i} ${esc(c.name)}</option>`).join('');cat.value=r.category||'Прочее';receiptItemsDraft=r.receiptItems.map(x=>normalizeReceiptItem(x,r));renderReceiptItemsEditor();document.getElementById('receipt-save-btn').textContent='Сохранить изменения';setReceiptProgress(100,'Проверь количество, цену и категорию');document.getElementById('modal-receipt').classList.add('on');resetReceiptSheetPosition(true);
}
function setReceiptProgress(p,text){
  document.getElementById('receipt-progress-bar').style.width=Math.max(0,Math.min(100,Math.round(p)))+'%';
  if(text)document.getElementById('receipt-status').textContent=text;
}
function loadReceiptOCR(){
  if(window.Tesseract)return Promise.resolve();
  return new Promise((resolve,reject)=>{
    const old=document.getElementById('tesseract-loader');if(old){old.addEventListener('load',resolve,{once:true});old.addEventListener('error',reject,{once:true});return;}
    const s=document.createElement('script');s.id='tesseract-loader';s.src='https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';s.onload=resolve;s.onerror=()=>reject(new Error('Не удалось загрузить локальный OCR'));document.head.appendChild(s);
  });
}
function prepareReceiptImage(file){
  return new Promise((resolve,reject)=>{
    const img=new Image(),url=URL.createObjectURL(file);
    img.onload=()=>{
      const scale=Math.min(3,Math.max(1,1600/img.naturalWidth)),w=Math.max(1,Math.round(img.naturalWidth*scale)),h=Math.max(1,Math.round(img.naturalHeight*scale));
      const c=document.createElement('canvas');c.width=w;c.height=h;const ctx=c.getContext('2d',{willReadFrequently:true});ctx.drawImage(img,0,0,w,h);
      const d=ctx.getImageData(0,0,w,h);
      for(let i=0;i<d.data.length;i+=4){const g=.299*d.data[i]+.587*d.data[i+1]+.114*d.data[i+2];const v=Math.max(0,Math.min(255,(g-128)*1.35+128));d.data[i]=d.data[i+1]=d.data[i+2]=v;}
      ctx.putImageData(d,0,0);URL.revokeObjectURL(url);resolve(c.toDataURL('image/jpeg',.88));
    };
    img.onerror=()=>{URL.revokeObjectURL(url);reject(new Error('Не удалось открыть изображение'));};img.src=url;
  });
}
async function scanReceipt(){
  if(!receiptFile)return;
  const btn=document.getElementById('receipt-scan-btn');btn.disabled=true;
  try{
    setReceiptProgress(3,'Загружаю локальный OCR…');await loadReceiptOCR();
    const image=await prepareReceiptImage(receiptFile);
    receiptWorker=await Tesseract.createWorker('rus+eng',1,{logger:m=>{
      const pct=m.progress!=null?8+m.progress*88:5;const labels={'loading tesseract core':'Загружаю OCR…','loading language traineddata':'Загружаю русский словарь…','initializing api':'Готовлю распознавание…','recognizing text':'Читаю чек…'};
      setReceiptProgress(pct,labels[m.status]||'Обрабатываю чек…');
    }});
    await receiptWorker.setParameters({tessedit_pageseg_mode:'6',preserve_interword_spaces:'1'});
    const result=await receiptWorker.recognize(image);await receiptWorker.terminate();receiptWorker=null;
    document.getElementById('receipt-raw').value=result.data.text||'';reviewReceiptText();setReceiptProgress(100,'Чек распознан — проверь результат');
  }catch(e){
    setReceiptProgress(0,e.message||'Не удалось распознать чек');toast('Ошибка распознавания чека');
  }finally{btn.disabled=false;}
}
function receiptNumber(s){const raw=String(s||'').trim(),sp=raw.match(/^(\d{1,6})\s+(\d{2})$/);if(sp)return Number(sp[1]+'.'+sp[2])||0;return Number(raw.replace(/\s/g,'').replace(',','.').replace(/[^\d.]/g,''))||0;}
function receiptItemCategory(name){const cat=expenseCategory(name);return getExpCats().some(c=>c.name===cat)?cat:'Прочее';}
function receiptBlockAmount(lines,total){
  for(let i=lines.length-1;i>=0;i--){
    const line=String(lines[i]||'').replace(/[ОO](?=\d)|(?<=\d)[ОO]/g,'0');
    const explicit=line.match(/(?:=|₽|\bруб\.?)[^\d]{0,3}(\d{1,7}(?:\s*[.,]\s*\d{1,2})?)/i);
    if(explicit){let value=receiptNumber(explicit[1]);if(total&&value>total*1.2&&/^\d{3,}$/.test(explicit[1].replace(/\D/g,''))){const divided=value/100;if(divided<=total*1.2)value=divided;}return Math.round(value*100)/100;}
    if(i>0&&/^\D*\d{2,7}(?:[.,]\d{1,2})?\D*$/.test(line)){
      const value=receiptNumber(line);if(value>1&&(!total||value<=total*1.2))return Math.round(value*100)/100;
    }
  }
  return 0;
}
function receiptPriceCandidates(value,total){
  value=Math.round((Number(value)||0)*100)/100;const out=new Set();if(value>0)out.add(value);
  const raw=String(value),parts=raw.split('.'),whole=parts[0]||'';
  if((parts[1]?.length===1&&whole.length>=3)||(total&&value>total*1.05)){
    for(let i=0;i<whole.length;i++){const n=Number(whole.slice(0,i)+whole.slice(i+1)+(parts[1]?'.'+parts[1]:''));if(n>0&&(!total||n<=total*1.05))out.add(Math.round(n*100)/100);}
  }
  if(total&&value>total*1.05){const digits=raw.replace(/\D/g,'');[2,3,4].forEach(n=>{if(digits.length>=n){const v=Number(digits.slice(-n))/(n>=4?100:1);if(v>0&&v<=total*1.05)out.add(Math.round(v*100)/100);}});}
  return [...out].filter(x=>x>0&&(!total||x<=total*1.05));
}
function reconcileReceiptItemPrices(items,target){
  if(!target||!items.length)return items;const current=items.reduce((s,x)=>s+(x.price||0),0),currentGap=Math.abs(target-current);let states=[{sum:0,picks:[]}];
  items.forEach((x,index)=>{const opts=[...new Set([...(x._candidates||[]),x.price].filter(v=>v>0).map(v=>Math.round(v*100)))],next=[],expected=target*100*((index+1)/items.length);states.forEach(st=>opts.forEach(v=>{const sum=st.sum+v;if(sum<=Math.round(target*115)+200)next.push({sum,picks:[...st.picks,v]});}));next.sort((a,b)=>Math.abs(expected-a.sum)-Math.abs(expected-b.sum));states=next.slice(0,5000);});
  states.sort((a,b)=>Math.abs(target*100-a.sum)-Math.abs(target*100-b.sum));
  if(!states.length)return items;const best=states[0],bestGap=Math.abs(target-best.sum/100);if(bestGap+.01>=currentGap)return items;
  return items.map((x,i)=>{const corrected=best.picks[i]/100,changed=Math.abs(corrected-x.price)>.009;return {...x,originalPrice:changed?x.price:0,price:corrected,unitPrice:Math.round(corrected/(x.quantity||1)*100)/100,_reconciled:changed};});
}
function parseStructuredReceiptItems(lines,total){
  const start=/^(\d{1,2})\s*[:.)-]?\s*(\d{4,14})\s+(.+)$/,blocks=[];let block=null;
  for(const line of lines){
    if(/^(?:итого?|оплата|сумма\s+чека|к\s+оплате|скидка|налич|безнал|сдача)(?:\s|=|:|$)/i.test(line)){if(block){blocks.push(block);block=null;}continue;}
    const m=line.match(start);
    if(m){if(block)blocks.push(block);block={head:line,name:m[3],lines:[line]};}
    else if(block)block.lines.push(line);
  }
  if(block)blocks.push(block);
  return blocks.map(b=>{
    const joined=b.lines.join(' '),mul=joined.match(/(\d+(?:[.,]\d+)?)\s*[*х]\s*\d/i)||joined.match(/(\d+(?:[.,]\d+)?)\s+x\s+\d/i)||joined.match(/[*х]\s*(\d+(?:[.,]\d+)?)/i);
    const separate=b.lines.slice(1).map(x=>x.match(/^\s*(\d+(?:[.,]\d+)?)\s*$/)?.[1]).find(x=>x&&receiptNumber(x)<=100);
    const quantity=Math.max(.001,receiptNumber(mul?.[1]||separate||1)||1),price=receiptBlockAmount(b.lines,total);
    const name=cleanReceiptItemName(String(b.name).replace(/\s*(?:=|₽|\bруб\.?).*$/i,' ').replace(/\s+/g,' ').trim());
    return {name,quantity,unitPrice:quantity?Math.round(price/quantity*100)/100:price,price,category:receiptItemCategory(name),_candidates:receiptPriceCandidates(price,total)};
  }).filter(x=>x.name.length>2&&x.price>0&&!/^(?:итог|итого|оплата|сумма\s+чека|скидка)$/i.test(x.name));
}
function parseReceiptText(text){
  const lines=String(text||'').split(/\r?\n/).map(x=>x.replace(/\s+/g,' ').trim()).filter(Boolean);
  const moneyRe=/(\d{1,3}(?:[ \u00a0]\d{3})*[,.]\d{2}|\d+[,.]\d{2}|\d{1,6}\s+\d{2}(?![\d.,]))/g;
  const moneyTest=/(\d{1,3}(?:[ \u00a0]\d{3})*[,.]\d{2}|\d+[,.]\d{2}|\d{1,6}\s+\d{2}(?![\d.,]))/;
  const isDateLine=x=>/\b[0-3]?\d[./-][01]?\d[./-](?:20)?\d{2}\b/.test(x);
  let total=0;
  const payable=lines.filter(x=>/^(?:итого?|к оплате|оплата\s*1?)(?:\s|=|:|$)/i.test(x));
  for(const line of payable){const nums=(line.match(moneyRe)||[]).map(receiptNumber);if(nums.length)total=nums[nums.length-1];}
  if(!total)lines.forEach(line=>{if(/сумма чека|всего/i.test(line)){const nums=[...(line.match(moneyRe)||[])].map(receiptNumber);if(nums.length)total=nums[nums.length-1];}});
  if(!total){const tail=lines.slice(-15).filter(x=>!isDateLine(x)).flatMap(x=>(x.match(moneyRe)||[]).map(receiptNumber));if(tail.length)total=Math.max(...tail);}
  let discount=0;lines.filter(x=>/скидк|купон|акци/i.test(x)).forEach(line=>{const nums=(line.match(moneyRe)||[]).map(receiptNumber).filter(x=>x>0&&(!total||x<total));if(nums.length)discount=Math.max(discount,nums[nums.length-1]);});
  let date=todayKey();const dm=text.match(/\b([0-3]?\d)[./-]([01]?\d)[./-](20\d{2}|\d{2})\b/);
  if(dm){const y=dm[3].length===2?'20'+dm[3]:dm[3];date=`${y}-${String(dm[2]).padStart(2,'0')}-${String(dm[1]).padStart(2,'0')}`;}
  const merchant=cleanReceiptMerchant(lines.slice(0,12).find(x=>/[а-яa-z]{3}/i.test(x)&&!/касс|чек|инн|фн|фд|фп|смен|добро пожаловать/i.test(x))||'Магазин');
  let items=parseStructuredReceiptItems(lines,total);
  if(items.length<2)items=lines.filter(x=>!isDateLine(x)&&moneyTest.test(x)&&!(/итог|оплат|сумма|налич|безнал|сдача|ндс|скидка|касса|кассир|чек\s*№|инн|фн|фд|фп/i.test(x))).map(x=>{
    const prices=x.match(moneyRe)||[],qtyMatch=x.match(/[*xх]\s*(\d+(?:[.,]\d+)?)/i),quantity=qtyMatch?Number(qtyMatch[1].replace(',','.'))||1:1;
    const eqMatch=x.match(/=\s*(\d+(?:[.,]\d{2}|\s+\d{2}))/),lineTotal=eqMatch?receiptNumber(eqMatch[1]):(prices.length?receiptNumber(prices[prices.length-1]):0);
    const scannedUnit=prices.length>1?receiptNumber(prices[0]):0,alternateTotal=scannedUnit?Math.round(scannedUnit*quantity*100)/100:0;
    const name=cleanReceiptItemName(x.replace(moneyRe,'').replace(/[=*xх]\s*\d+(?:[.,]\d+)?/gi,' '));
    return {name,quantity,unitPrice:quantity?Math.round(lineTotal/quantity*100)/100:lineTotal,price:lineTotal,category:receiptItemCategory(name),alternateTotal,_candidates:[...receiptPriceCandidates(lineTotal,total),...receiptPriceCandidates(alternateTotal,total)]};
  }).filter(x=>x.name.length>2&&!/^(?:итог|итого|оплата|сумма\s+чека|скидка)$/i.test(x.name)).slice(0,40);
  // OCR иногда ошибается только в одной из двух одинаковых цен строки. Сверяем
  // варианты со всей суммой чека и выбираем комбинацию, которая ей соответствует.
  items=reconcileReceiptItemPrices(items,Math.round((total+discount)*100)/100);
  const parsedSum=()=>Math.round(items.reduce((s,x)=>s+(x.price||0),0)*100)/100;
  if(total&&items.length&&Math.abs(total-parsedSum())<=Math.max(5,total*.02)){
    const used=new Set();
    while(true){
      const current=parsedSum(),currentGap=Math.abs(total-current);let best=null,bestGap=currentGap;
      items.forEach((x,i)=>{if(used.has(i)||!x.alternateTotal||Math.abs(x.alternateTotal-x.price)>.1*Math.max(10,x.price))return;const gap=Math.abs(total-(current-x.price+x.alternateTotal));if(gap+.009<bestGap){best={i,value:x.alternateTotal};bestGap=gap;}});
      if(!best)break;items[best.i].price=best.value;used.add(best.i);
    }
  }
  items=items.map(x=>({name:x.name,quantity:x.quantity,unitPrice:x.quantity?Math.round(x.price/x.quantity*100)/100:x.price,price:x.price,category:x.category,warning:x._reconciled?'Цена исправлена по итогу чека — проверь':x.warning||''}));
  // Одинаковые строки с одинаковой ценой объединяем, но сохраняем количество.
  const grouped=new Map();items.forEach(x=>{const key=receiptSearchKey(x.name)+'|'+x.unitPrice.toFixed(2);if(grouped.has(key)){const g=grouped.get(key);g.quantity=Math.round((g.quantity+x.quantity)*1000)/1000;g.price=Math.round((g.price+x.price)*100)/100;g.mergedCount=(g.mergedCount||1)+1;}else grouped.set(key,{...x,mergedCount:1});});items=[...grouped.values()];
  const itemSum=Math.round(items.reduce((s,x)=>s+(Number(x.price)||0),0)*100)/100,subtotal=Math.round((total+discount)*100)/100,difference=Math.round((subtotal-itemSum)*100)/100;
  items.forEach(x=>{const digitShare=(x.name.match(/\d/g)||[]).length/Math.max(1,x.name.length);if(total&&x.price>total*1.02)x.warning='Сумма позиции больше итога чека';else if(digitShare>.45)x.warning='В названии слишком много цифр — проверь OCR';else if(!x.quantity||!x.unitPrice)x.warning='Не удалось уверенно определить количество или цену';});
  const uncertain=items.filter(x=>x.warning).length;
  return {merchant,total,date,items,category:expenseCategory(text),audit:{itemSum,difference,discount,subtotal,uncertain}};
}
function receiptCatOptions(selected){
  return getExpCats().map(c=>`<option value="${esc(c.name)}" ${c.name===selected?'selected':''}>${c.i} ${esc(c.name)}</option>`).join('');
}
function renderReceiptItemsEditor(){
  const el=document.getElementById('receipt-items-editor');if(!el)return;
  receiptItemsDraft=receiptItemsDraft.map(x=>normalizeReceiptItem(x,{category:'Прочее'}));
  el.innerHTML=receiptItemsDraft.length?receiptItemsDraft.map((x,i)=>`<div class="receipt-item-row ${x.warning?'uncertain':''}">
    <label class="ri-name-field"><span>Название · можно изменить</span><input class="ri-name" value="${esc(x.name)}" placeholder="Название товара" oninput="receiptItemsDraft[${i}].name=this.value"></label>
    <label class="ri-field"><span>Кол-во</span><input value="${x.quantity||1}" type="number" min="0.001" step="0.001" inputmode="decimal" oninput="updateReceiptItem(${i},'quantity',this.value)"></label>
    <label class="ri-field"><span>Цена/ед.</span><input value="${x.unitPrice||''}" type="number" min="0" step="0.01" inputmode="decimal" placeholder="₽" oninput="updateReceiptItem(${i},'unitPrice',this.value)"></label>
    <div class="ri-total"><span>Сумма</span><b id="ri-total-${i}">${fmtMoney(x.price)} ₽</b>${x.originalPrice?`<span class="receipt-price-old">${fmtMoney(x.originalPrice)} ₽</span>`:''}</div>
    <select class="ri-cat" onchange="receiptItemsDraft[${i}].category=this.value">${receiptCatOptions(x.category)}</select>
    <button onclick="removeReceiptItem(${i})" aria-label="Удалить">×</button>${x.warning?`<div class="ri-warning">⚠️ ${esc(x.warning)}</div>`:''}${x.mergedCount>1?`<div class="ri-warning">Объединено одинаковых строк: ${x.mergedCount}</div>`:''}
  </div>`).join(''):'<div class="local-edit-note">Позиции не найдены — их можно добавить вручную.</div>';
}
function refreshReceiptAudit(){
  const audit=document.getElementById('receipt-audit');if(!audit)return receiptAuditDraft;
  const total=Number(document.getElementById('receipt-total')?.value)||0,discount=Number(receiptAuditDraft.discount)||0,itemSum=Math.round(receiptItemsDraft.reduce((s,x)=>s+(Number(x.price)||0),0)*100)/100;
  const expected=Math.round((total+discount)*100)/100,difference=Math.round((expected-itemSum)*100)/100,gap=Math.abs(difference),uncertain=receiptItemsDraft.filter(x=>x.warning).length;
  receiptAuditDraft={...receiptAuditDraft,itemSum,subtotal:expected,difference,uncertain};audit.style.display='block';audit.classList.toggle('bad',gap>.02||uncertain);
  audit.innerHTML=`Позиции: <b>${fmtMoney(itemSum)} ₽</b>${discount?` · до скидки: <b>${fmtMoney(expected)} ₽</b> · скидка: <b>${fmtMoney(discount)} ₽</b>`:''}<br>${gap>.02?`⚠️ Не сходится на ${fmtMoney(gap)} ₽. Исправь отмеченные строки перед сохранением.`:'✓ Сумма позиций сходится с итогом чека'}${uncertain?` · проверить строк: ${uncertain}`:''}`;
  return receiptAuditDraft;
}
function updateReceiptItem(i,field,value){const x=receiptItemsDraft[i];if(!x)return;x[field]=Math.max(field==='quantity'?.001:0,Number(String(value).replace(',','.'))||0);x.price=Math.round((x.quantity||1)*(x.unitPrice||0)*100)/100;x.warning='';x.originalPrice=0;const total=document.getElementById('ri-total-'+i);if(total)total.textContent=fmtMoney(x.price)+' ₽';refreshReceiptAudit();}
function addReceiptItem(){receiptItemsDraft.push({name:'',quantity:1,unitPrice:0,price:0,category:'Прочее'});renderReceiptItemsEditor();refreshReceiptAudit();}
function removeReceiptItem(i){receiptItemsDraft.splice(i,1);renderReceiptItemsEditor();refreshReceiptAudit();}
function reviewReceiptText(){
  const raw=document.getElementById('receipt-raw').value,parsed=parseReceiptText(raw);
  document.getElementById('receipt-merchant').value=parsed.merchant;document.getElementById('receipt-total').value=parsed.total||'';
  document.getElementById('receipt-date').value=parsed.date;receiptItemsDraft=parsed.items;receiptAuditDraft=parsed.audit||{};renderReceiptItemsEditor();
  refreshReceiptAudit();
  const cat=document.getElementById('receipt-category');cat.innerHTML=getExpCats().map(c=>`<option value="${esc(c.name)}">${c.i} ${esc(c.name)}</option>`).join('');
  if([...cat.options].some(x=>x.value===parsed.category))cat.value=parsed.category;
  document.getElementById('receipt-review').style.display='block';
  resetReceiptSheetPosition(false);
}
function saveReceiptExpense(){
  const amount=Number(document.getElementById('receipt-total').value)||0;if(!amount){toast('Проверь итоговую сумму');return;}
  const merchant=document.getElementById('receipt-merchant').value.trim()||'Магазин',category=document.getElementById('receipt-category').value;
  const items=receiptItemsDraft.map(x=>normalizeReceiptItem(x,{category:category})).filter(x=>x.name);
  const audit=refreshReceiptAudit(),gap=Math.abs(audit.difference||0),allowedGap=Math.max(2,amount*.03);if(items.length&&gap>allowedGap){toast(`Чек не сходится на ${fmtMoney(gap)} ₽ — исправь позиции`);document.getElementById('receipt-audit')?.scrollIntoView({behavior:'smooth',block:'center'});return;}
  const breakdown={};items.forEach(x=>breakdown[x.category]=(breakdown[x.category]||0)+x.price);
  const d=load();if(!d.finance)d.finance=[];const payload={date:document.getElementById('receipt-date').value||todayKey(),desc:'Чек: '+merchant,merchant,amount,category,receiptItems:items,receiptBreakdown:breakdown,receiptAudit:receiptAuditDraft};if(receiptEditId){const old=d.finance.find(x=>x.id===receiptEditId);if(old)Object.assign(old,payload)}else d.finance.push({id:Date.now()+Math.floor(Math.random()*1000),...payload});
  const wasEditing=!!receiptEditId;save(d);checkBudgetAlert(category);closeReceiptScanner();confetti();toast(wasEditing?'Чек исправлен':'Расход по чеку записан');
  if(receiptSource==='ai'){
    switchTab('ai');
    aiAddMsg('ai',`✅ Чек сохранён<br><b>${esc(merchant)}</b> · ${fmtMoney(amount)} ₽<br><small>${esc(category)} · ${items.length} позиций</small>`);
  }else renderFinance();
}

/* ===== ДОСТИЖЕНИЯ ===== */
function getDoneCount(){const d=load();return d.doneTotal||0;}
function bumpDoneCount(){const d=load();d.doneTotal=(d.doneTotal||0)+1;save(d);pushDoneStat();}
const ACHIEVEMENTS=[
  {id:'first',ico:'🌱',an:'Первый шаг',ad:'Выполни 1 дело',chk:d=>d.done>=1},
  {id:'ten',ico:'⭐',an:'Новичок',ad:'10 дел выполнено',chk:d=>d.done>=10},
  {id:'fifty',ico:'🔥',an:'В деле',ad:'50 дел выполнено',chk:d=>d.done>=50},
  {id:'hundred',ico:'💯',an:'Сотка',ad:'100 дел выполнено',chk:d=>d.done>=100},
  {id:'streak3',ico:'📅',an:'Три дня',ad:'Серия 3 дня',chk:d=>d.streak>=3},
  {id:'streak7',ico:'🔥',an:'Неделя огня',ad:'Серия 7 дней',chk:d=>d.streak>=7},
  {id:'streak30',ico:'🏆',an:'Железная воля',ad:'Серия 30 дней',chk:d=>d.streak>=30},
  {id:'saver',ico:'💰',an:'Копилка',ad:'Записан 1-й доход',chk:d=>d.hasIncome},
  {id:'planner',ico:'💸',an:'Учёт',ad:'Записана 1-я трата',chk:d=>d.hasExpense},
  {id:'goal',ico:'🎯',an:'Мечтатель',ad:'Создана цель-копилка',chk:d=>d.hasGoal}
];
function getUnlocked(){const d=load();return d.achUnlocked||[];}
function achState(){
  const d=load();
  return{done:d.doneTotal||0,streak:(d.streak||{}).count||0,hasIncome:(d.income||[]).length>0,hasExpense:(d.finance||[]).length>0,hasGoal:(d.goals||[]).length>0};
}
function checkAchievements(){
  const st=achState();
  const unlocked=getUnlocked();
  let newly=null;
  ACHIEVEMENTS.forEach(a=>{if(!unlocked.includes(a.id)&&a.chk(st)){unlocked.push(a.id);if(!newly)newly=a;}});
  const d=load();d.achUnlocked=unlocked;save(d);
  if(newly){confetti();vibrate([30,50,30]);setTimeout(()=>toast('🏆 Достижение: '+newly.an+'!'),400);}
}
function openAchievements(){
  checkAchievements();
  const unlocked=getUnlocked();
  const done=unlocked.length,total=ACHIEVEMENTS.length;
  let html=`<p style="font-size:.85rem;color:var(--muted);margin-bottom:14px">Открыто <b style="color:var(--brand)">${done}/${total}</b> достижений</p><div class="ach-grid">`;
  ACHIEVEMENTS.forEach(a=>{const on=unlocked.includes(a.id);html+=`<div class="ach ${on?'unlocked':''}"><div class="ico">${on?a.ico:'🔒'}</div><div class="an">${a.an}</div><div class="ad">${a.ad}</div></div>`;});
  html+='</div>';
  document.getElementById('ach-body').innerHTML=html;
  document.getElementById('modal-ach').classList.add('on');
}
function closeAchievements(){document.getElementById('modal-ach').classList.remove('on');}

/* ===== СЕРИЯ (STREAK) ===== */
function getStreak(){const d=load();return d.streak||{count:0,last:''};}
function updateStreak(){
  const d=load();const s=d.streak||{count:0,last:''};
  const tk=todayKey();
  if(s.last===tk){save(d);renderStreak();return;}
  const y=new Date();y.setDate(y.getDate()-1);
  const yk=y.getFullYear()+'-'+String(y.getMonth()+1).padStart(2,'0')+'-'+String(y.getDate()).padStart(2,'0');
  if(s.last===yk)s.count=(s.count||0)+1;else s.count=1;
  s.last=tk;d.streak=s;save(d);
  renderStreak();checkAchievements();
}
function renderStreak(){
  const s=getStreak();
  const box=document.getElementById('streakBox');
  if(!box)return;
  const tk=todayKey();
  const y=new Date();y.setDate(y.getDate()-1);
  const yk=y.getFullYear()+'-'+String(y.getMonth()+1).padStart(2,'0')+'-'+String(y.getDate()).padStart(2,'0');
  let cnt=s.count||0;
  if(s.last!==tk&&s.last!==yk)cnt=0;
  box.innerHTML=cnt>=2?`🔥 Серия: ${cnt} ${cnt<=4?'дня':'дней'}`:cnt===1?'🌱 Первый день':'○ Начни серию';
}
function renderHeroDate(){
  const el=document.getElementById('hero-date');
  if(!el)return;
  const s=new Date().toLocaleDateString('ru-RU',{weekday:'long',day:'numeric',month:'long'});
  el.textContent=s.charAt(0).toUpperCase()+s.slice(1);
}
async function askMyName(){
  const cur=getMyName();
  const nm=await lumoPrompt('Как тебя зовут?','Так Lumo сможет обращаться к тебе по имени.',cur||'','Имя');
  if(nm===null)return;
  const clean=nm.trim();
  const d=load();
  d.myName=clean;
  save(d);
  if(clean){
    toast('Приятно познакомиться, '+clean+'! 👋');
    confetti();
  }
  syncPushData();
  switchTab('today'); // перерисуем шапку с приветствием
}
/* ===== КОНФЕТТИ ===== */
function confetti(){
  const colors=['#6c5ce7','#a29bfe','#00b894','#fdcb6e','#e17055','#0984e3','#e84393'];
  for(let i=0;i<26;i++){
    const c=document.createElement('div');c.className='confetti';
    c.style.left=(20+Math.random()*60)+'%';c.style.top='40%';
    c.style.background=colors[Math.floor(Math.random()*colors.length)];
    c.style.borderRadius=Math.random()>.5?'50%':'2px';
    document.body.appendChild(c);
    const dx=(Math.random()-.5)*260,dy=-(120+Math.random()*220),rot=Math.random()*720;
    c.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:`translate(${dx}px,${dy}px) rotate(${rot}deg)`,opacity:0}],{duration:900+Math.random()*600,easing:'cubic-bezier(.2,.6,.4,1)'}).onfinish=()=>c.remove();
  }
}

/* ===== ТЕМА / НАСТРОЙКИ ===== */
const ACCENTS=[['#6c5ce7','#a29bfe'],['#00b894','#55efc4'],['#e17055','#fab1a0'],['#0984e3','#74b9ff'],['#e84393','#fd79a8'],['#fdcb6e','#ffeaa7'],['#00cec9','#81ecec']];
function applyAccent(){
  const d=load();const i=d.accent||0;const[a,b]=ACCENTS[i]||ACCENTS[0];
  document.documentElement.style.setProperty('--brand',a);
  document.documentElement.style.setProperty('--brand2',b);
  const meta=document.getElementById('meta-theme');if(meta)meta.content=a;
  // Определяем яркость акцента → тёмный текст для светлых цветов
  const light=isLightColor(a);
  document.querySelectorAll('.hero').forEach(h=>h.classList.toggle('light-accent',light));
  document.body.classList.toggle('light-accent-body',light);
}
// Вычисляет яркость HEX-цвета (true = светлый, нужен тёмный текст)
function isLightColor(hex){
  const c=hex.replace('#','');
  const r=parseInt(c.substr(0,2),16);
  const g=parseInt(c.substr(2,2),16);
  const bl=parseInt(c.substr(4,2),16);
  // формула яркости (luminance)
  const lum=(0.299*r+0.587*g+0.114*bl);
  return lum>150; // порог: выше — светлый
}
function renderColorPick(){
  const d=load();const cur=d.accent||0;
  document.getElementById('color-pick').innerHTML=ACCENTS.map((c,i)=>`<span class="${i===cur?'sel':''}" style="background:linear-gradient(135deg,${c[0]},${c[1]})" onclick="pickAccent(${i})"></span>`).join('');
}
function pickAccent(i){const d=load();d.accent=i;save(d);applyAccent();renderColorPick();vibrate(20);}

function getThemeMode(){return load().themeMode||'dark';}
function setThemeMode(mode){
  const d=load();d.themeMode=mode;save(d);applyTheme();updateThemeButtons();
}
function updateThemeButtons(){
  const m=getThemeMode();
  ['auto','light','dark'].forEach(x=>{const b=document.getElementById('th-'+x);if(b)b.classList.toggle('on',m===x);});
}
function applyTheme(){
  const m=getThemeMode();
  let dark;
  if(m==='auto')dark=window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches;
  else dark=(m==='dark');
  document.body.classList.toggle('dark',dark);
  
  const mt=document.getElementById('meta-theme');
  if(mt)mt.content=dark?'#0E0D18':'#F6F6FA';
}
function toggleTheme(){
  const m=getThemeMode();
  setThemeMode(m==='dark'?'light':'dark');
  toast(getThemeMode()==='dark'?'🌙 Тёмная тема':'☀️ Светлая тема');
}
function openSettings(){renderColorPick();updateThemeButtons();loadNotifyHour();loadQuietHours();loadHabitReminder();loadShoppingReminder();loadInsightReminder();renderLocalMemoryInfo();cloudStatusText();document.getElementById('modal-settings').classList.add('on');checkPushHealth(false);}
function closeSettings(){document.getElementById('modal-settings').classList.remove('on');}

/* НАПОМИНАНИЯ / ТИХИЕ ЧАСЫ */
function loadNotifyHour(){document.getElementById('notify-hour').value=load().notifyHour||'09:00';}
function saveNotifyHour(){const d=load();d.notifyHour=document.getElementById('notify-hour').value||'09:00';save(d);toast('🔔 Время сохранено');syncPushData();}
function getQuiet(){return load().quiet||{enabled:false,from:'22:00',to:'08:00'};}
function loadQuietHours(){const q=getQuiet();document.getElementById('quiet-from').value=q.from;document.getElementById('quiet-to').value=q.to;document.getElementById('quiet-box').classList.toggle('on',q.enabled);document.getElementById('quiet-box').textContent=q.enabled?'✓':'';}
function saveQuietHours(){const d=load();const q=getQuiet();q.from=document.getElementById('quiet-from').value;q.to=document.getElementById('quiet-to').value;d.quiet=q;save(d);syncPushData();}
function toggleQuietEnabled(){const d=load();const q=getQuiet();q.enabled=!q.enabled;d.quiet=q;save(d);loadQuietHours();syncPushData();}
function inQuietHours(){
  const q=getQuiet();if(!q.enabled)return false;
  const now=new Date();const hm=String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');
  if(q.from<q.to)return hm>=q.from&&hm<q.to;
  return hm>=q.from||hm<q.to;
}

function requestNotify(){
  if(!('Notification'in window)){toast('Уведомления не поддерживаются');return;}
  Notification.requestPermission().then(p=>{toast(p==='granted'?'🔔 Напоминания включены':'Уведомления отклонены');if(p==='granted'){scheduleAllTimeouts();scheduleHabitReminderLocal();scheduleHabitPushServer(true);scheduleShoppingReminderLocal();scheduleShoppingPushServer(true);scheduleSmartInsightPush(true);syncPushData();}});
}
let localTimeouts=[];
function scheduleAllTimeouts(){localTimeouts.forEach(t=>clearTimeout(t));localTimeouts=[];getTasks().forEach(scheduleLocalTimeout);}
async function scheduleLocalTimeout(t){
  if(!t.date||!t.time||t.done)return;
  if(!('Notification'in window)||Notification.permission!=='granted')return;
  try{const reg=await navigator.serviceWorker?.ready,sub=await reg?.pushManager?.getSubscription();if(sub)return;}catch(e){}
  const at=new Date(t.date+'T'+t.time).getTime(),important=t.pri==='R';
  const stages=[...(important?[{key:'important2h',offset:-7200000,title:'🔴 Важное дело — за 2 часа'}]:[]),
    {key:'h1',offset:-3600000,title:important?'🔴 Важное дело — за час':'Скоро дело — за час'},
    {key:'m30',offset:-1800000,title:important?'🔴 Важное дело — за 30 минут':'Скоро дело — за 30 минут'},
    {key:'start',offset:0,title:important?'🔴 ВАЖНО: '+t.title:'⏰ '+t.title},
    {key:'overdue',offset:900000,title:important?'🚨 Важное дело просрочено':'⚠️ Просроченное дело'}];
  stages.forEach(stage=>{
    const delay=at+stage.offset-Date.now();if(delay<=0||delay>86400000*2)return;
    const id=setTimeout(()=>{
      if(inQuietHours())return;
      const key=`task:${t.id}:${t.date}:${t.time}:${stage.key}`;
      notifyOnce(key,()=>{try{new Notification(stage.title,{body:(stage.key==='start'||stage.key==='overdue'?t.title+' · ':t.title+' · ')+catLabel(t.module),tag:key,renotify:false,icon:'./assets/icons/icon.png'});vibrate(important?[100,60,100]:[50,30,50]);}catch(e){}});
    },delay);localTimeouts.push(id);
  });
}
function getHabitReminder(){return load().habitReminder||{enabled:false,time:'09:00'};}
function loadHabitReminder(){const r=getHabitReminder(),box=document.getElementById('habit-reminder-box'),time=document.getElementById('habit-reminder-time');if(box){box.classList.toggle('on',r.enabled);box.textContent=r.enabled?'✓':'';}if(time)time.value=r.time||'09:00';}
function toggleHabitReminder(){const d=load(),r=getHabitReminder();r.enabled=!r.enabled;d.habitReminder=r;save(d);loadHabitReminder();scheduleHabitReminderLocal();syncPushData();scheduleHabitPushServer();toast(r.enabled?'🌱 Напоминания о привычках включены':'Напоминания о привычках выключены');}
function saveHabitReminderTime(){const d=load(),r=getHabitReminder();r.time=document.getElementById('habit-reminder-time').value||'09:00';d.habitReminder=r;save(d);scheduleHabitReminderLocal();syncPushData();scheduleHabitPushServer(true);toast('🌱 Время привычек сохранено');}
function getInsightReminder(){return load().insightReminder||{enabled:false,time:'18:30'}}
function loadInsightReminder(){const r=getInsightReminder(),box=document.getElementById('insight-reminder-box'),inp=document.getElementById('insight-reminder-time');if(box){box.classList.toggle('on',r.enabled);box.textContent=r.enabled?'✓':''}if(inp)inp.value=r.time||'18:30'}
function toggleInsightReminder(){const d=load(),r=getInsightReminder();r.enabled=!r.enabled;d.insightReminder=r;save(d);loadInsightReminder();scheduleSmartInsightPush(true);toast(r.enabled?'Умные предложения включены':'Умные предложения выключены')}
function saveInsightReminderTime(){const d=load(),r=getInsightReminder();r.time=document.getElementById('insight-reminder-time').value||'18:30';d.insightReminder=r;save(d);scheduleSmartInsightPush(true);toast('Время предложений сохранено')}
let habitReminderTimeout=null;
let shoppingReminderTimeout=null;
function incompleteHabits(){const tk=todayKey();return getHabits().filter(h=>!h.log?.[tk]);}
function scheduleHabitReminderLocal(){
  if(habitReminderTimeout){clearTimeout(habitReminderTimeout);habitReminderTimeout=null;}const r=getHabitReminder();if(!r.enabled||!('Notification'in window)||Notification.permission!=='granted')return;
  const [hh,mm]=(r.time||'09:00').split(':').map(Number),at=new Date();at.setHours(hh||0,mm||0,0,0);if(at.getTime()<=Date.now())at.setDate(at.getDate()+1);
  habitReminderTimeout=setTimeout(()=>{if(!inQuietHours()){const left=incompleteHabits();if(left.length){const key='habit-local:'+todayKey();notifyOnce(key,()=>{try{new Notification('🌱 Не забудь о привычках',{body:left.slice(0,4).map(h=>h.icon+' '+h.name).join(' · '),tag:key,renotify:false,icon:'./assets/icons/icon.png'});}catch(e){}});}}scheduleHabitReminderLocal();},at.getTime()-Date.now());
}
function getShoppingReminder(){return load().shoppingReminder||{enabled:true,time:'18:00'};}
function loadShoppingReminder(){const r=getShoppingReminder(),box=document.getElementById('shopping-reminder-box'),time=document.getElementById('shopping-reminder-time');if(box){box.classList.toggle('on',r.enabled);box.textContent=r.enabled?'✓':'';}if(time)time.value=r.time||'18:00';}
function toggleShoppingReminder(){const d=load(),r=getShoppingReminder();r.enabled=!r.enabled;d.shoppingReminder=r;save(d);loadShoppingReminder();scheduleShoppingReminderLocal();syncPushData();scheduleShoppingPushServer(true);toast(r.enabled?'🛒 Напоминания о покупках включены':'Напоминания о покупках выключены');}
function saveShoppingReminderTime(){const d=load(),r=getShoppingReminder();r.time=document.getElementById('shopping-reminder-time').value||'18:00';d.shoppingReminder=r;save(d);scheduleShoppingReminderLocal();syncPushData();scheduleShoppingPushServer(true);toast('🛒 Время покупок сохранено');}
function activeShoppingItems(){return getShopping().filter(x=>!x.done);}
async function showShoppingNotification(title,items,type='shopping-reminder',eventId=''){
  if(!('Notification'in window)||Notification.permission!=='granted'||inQuietHours()||!items.length)return;
  if(type==='shopping-reminder'){try{const cache=await caches.open('lumo-push-state-v1'),key='./__push_seen__/shopping:'+todayKey();if(await cache.match(key))return;await cache.put(key,new Response(String(Date.now())));}catch(e){}}
  const body=items.slice(0,5).map(x=>x.t||x).join(' · '),tag=type+':'+(eventId||todayKey());
  try{const reg=await navigator.serviceWorker.ready;await reg.showNotification(title,{body,icon:'./assets/icons/icon.png',badge:'./assets/icons/icon.png',tag,renotify:false,data:{type,eventId}});}catch(e){try{new Notification(title,{body,icon:'./assets/icons/icon.png',tag});}catch(_){}}
}
function scheduleShoppingReminderLocal(){
  if(shoppingReminderTimeout){clearTimeout(shoppingReminderTimeout);shoppingReminderTimeout=null;}const r=getShoppingReminder();if(!r.enabled||!('Notification'in window)||Notification.permission!=='granted')return;
  const [hh,mm]=(r.time||'18:00').split(':').map(Number),at=new Date();at.setHours(hh||0,mm||0,0,0);if(at.getTime()<=Date.now())at.setDate(at.getDate()+1);
  shoppingReminderTimeout=setTimeout(()=>{const items=activeShoppingItems();if(items.length){const key='shopping-local:'+todayKey()+':'+items.map(x=>x.id).join(',');notifyOnce(key,()=>showShoppingNotification('🛒 Не забудь про покупки',items));}scheduleShoppingReminderLocal();},at.getTime()-Date.now());
}
function snoozeTaskOneHour(taskId){
  const tasks=getTasks();
  const task=tasks.find(t=>String(t.id)===String(taskId));
  if(!task){toast('Не удалось найти задачу для переноса');return;}
  const base=new Date();
  base.setHours(base.getHours()+1);
  task.date=dateKeyOf(base);
  task.time=String(base.getHours()).padStart(2,'0')+':'+String(base.getMinutes()).padStart(2,'0');
  task.done=false;
  setTasks(tasks);
  scheduleAllTimeouts();
  refreshCurrentTab();
  toast('⏰ Отложено на 1 час');
}
function snoozeTaskFifteenMinutes(taskId){const tasks=getTasks(),task=tasks.find(t=>String(t.id)===String(taskId));if(!task)return toast('Не удалось найти задачу');const at=new Date(Date.now()+15*60000);task.date=dateKeyOf(at);task.time=String(at.getHours()).padStart(2,'0')+':'+String(at.getMinutes()).padStart(2,'0');task.done=false;setTasks(tasks);scheduleAllTimeouts();refreshCurrentTab();toast('⏰ Напомним через 15 минут');}
function completeTaskFromPush(taskId){const tasks=getTasks(),task=tasks.find(t=>String(t.id)===String(taskId));if(!task)return toast('Не удалось найти задачу');task.done=true;task.doneAt=Date.now();setTasks(tasks);scheduleAllTimeouts();refreshCurrentTab();toast('✅ Дело выполнено');}
async function openFamilyTaskFromPush(taskId){
  await pullAssignedTasks();openAssignmentsInbox();toast('📥 Открыты входящие поручения');
}
function openShoppingFromPush(){switchTab('more');setTimeout(()=>openShopping(),100);}
function handleLaunchActions(){
  const url=new URL(location.href);
  const taskId=url.searchParams.get('snoozeTask');
  if(taskId){
    snoozeTaskOneHour(taskId);
    url.searchParams.delete('snoozeTask');
    history.replaceState(null,'',url.pathname+url.search+url.hash);
  }
  const task15=url.searchParams.get('snoozeTask15');if(task15){snoozeTaskFifteenMinutes(task15);url.searchParams.delete('snoozeTask15');history.replaceState(null,'',url.pathname+url.search+url.hash)}
  const completeTask=url.searchParams.get('completeTask');if(completeTask){completeTaskFromPush(completeTask);url.searchParams.delete('completeTask');history.replaceState(null,'',url.pathname+url.search+url.hash)}
  const insight=url.searchParams.get('assistantInsight');
  if(insight){try{const data=JSON.parse(insight);setTimeout(()=>openInsightConversation(data.prompt||'',data.summary||data.body||''),180)}catch(e){}url.searchParams.delete('assistantInsight');history.replaceState(null,'',url.pathname+url.search+url.hash)}
  const familyTask=url.searchParams.get('familyTask');if(familyTask!==null){setTimeout(()=>openFamilyTaskFromPush(familyTask),180);url.searchParams.delete('familyTask');history.replaceState(null,'',url.pathname+url.search+url.hash)}
  if(url.searchParams.get('openShopping')==='1'){setTimeout(()=>openShoppingFromPush(),180);url.searchParams.delete('openShopping');history.replaceState(null,'',url.pathname+url.search+url.hash)}
  const quick=url.searchParams.get('quick');if(quick){setTimeout(()=>quickCreate(quick),220);url.searchParams.delete('quick');history.replaceState(null,'',url.pathname+url.search+url.hash)}
  if(url.searchParams.get('notifications')==='1'){setTimeout(openNotificationCenter,220);url.searchParams.delete('notifications');history.replaceState(null,'',url.pathname+url.search+url.hash)}
  const focusDone=url.searchParams.get('focusDone');if(focusDone!==null){acknowledgeFocusPush();setTimeout(()=>{switchTab('matrix');toast('⏱ Фокус завершён')},180);url.searchParams.delete('focusDone');history.replaceState(null,'',url.pathname+url.search+url.hash)}
  const cloudInvite=url.searchParams.get('cloudInvite');if(cloudInvite){setTimeout(()=>acceptCloudInvite(cloudInvite),500);url.searchParams.delete('cloudInvite');history.replaceState(null,'',url.pathname+url.search+url.hash)}
  if(url.searchParams.get('forceUpdate')==='1'){url.searchParams.delete('forceUpdate');history.replaceState(null,'',url.pathname+url.search+url.hash);navigator.serviceWorker?.getRegistration()?.then(async reg=>{await reg?.update();reg?.waiting?.postMessage({type:'SKIP_WAITING'});toast('Lumo обновляется…');setTimeout(()=>location.reload(),1200)});}
}

/* ===== СИНХРОНИЗАЦИЯ УСТРОЙСТВ ===== */
const CLOUD_CODE_KEY='lumo_cloud_code_v1',CLOUD_REV_KEY='lumo_cloud_revision_v1';
let cloudTimer=null,cloudConflict=null;
function cloudPayload(){return {planner:load(),assistantMemory:getLocalMemory(),savedAt:Date.now()};}
function scheduleCloudSync(){if(!localStorage.getItem(CLOUD_CODE_KEY))return;clearTimeout(cloudTimer);cloudTimer=setTimeout(()=>cloudSyncNow(false),1800);}
function cloudStatusText(){const code=localStorage.getItem(CLOUD_CODE_KEY),el=document.getElementById('cloud-sync-status');if(!el)return;if(!code){el.textContent='Синхронизация не подключена';return;}const at=Number(localStorage.getItem('lumo_cloud_at_v1')||0);el.innerHTML=`Подключено · <span class="sync-code" onclick="copyCloudCode()">${esc(code)}</span><br>${at?'Последняя синхронизация: '+new Date(at).toLocaleString('ru-RU'):'Ожидает первой синхронизации'}`;}
async function createCloudSync(){try{const r=await fetch(FAMILY_SERVER+'/cloud/create',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID,data:cloudPayload()})}),d=await r.json();if(!d.ok)throw new Error(d.err);localStorage.setItem(CLOUD_CODE_KEY,d.code);localStorage.setItem(CLOUD_REV_KEY,d.revision);localStorage.setItem('lumo_cloud_dirty_v1','0');localStorage.setItem('lumo_cloud_at_v1',d.updatedAt);cloudStatusText();copyCloudCode();toast('Код создан и скопирован');}catch(e){toast(e.message||'Не удалось создать синхронизацию');}}
async function connectCloudSync(){const code=(document.getElementById('cloud-code-input')?.value||'').toUpperCase().replace(/[^A-Z0-9]/g,'');if(code.length!==12){toast('Проверь 12-значный код');return;}try{const r=await fetch(FAMILY_SERVER+'/cloud/connect',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID,code})}),d=await r.json();if(!d.ok)throw new Error(d.err);localStorage.setItem(CLOUD_CODE_KEY,code);localStorage.setItem(CLOUD_REV_KEY,d.revision);localStorage.setItem('lumo_cloud_dirty_v1','0');await cloudSyncNow(true,'pull');cloudStatusText();toast('Устройство подключено');}catch(e){toast(e.message||'Код не найден');}}
function copyCloudCode(){const code=localStorage.getItem(CLOUD_CODE_KEY)||'';if(code&&navigator.clipboard)navigator.clipboard.writeText(code);if(code)toast('Код скопирован');}
async function shareRecoveryKey(){const code=localStorage.getItem(CLOUD_CODE_KEY)||'';if(!code)return toast('Сначала создай ключ восстановления');const text=`Ключ восстановления Lumo: ${code}\nХрани его в безопасном месте.`;try{if(navigator.share)await navigator.share({title:'Ключ восстановления Lumo',text});else{await navigator.clipboard.writeText(text);toast('Ключ скопирован');}}catch(e){if(e?.name!=='AbortError')toast('Не удалось поделиться ключом');}}
let deviceInvite=null;
async function createDeviceInvite(){if(!localStorage.getItem(CLOUD_CODE_KEY))return toast('Сначала создай ключ восстановления');try{const r=await fetch(FAMILY_SERVER+'/cloud/invite/create',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID})}),d=await r.json();if(!d.ok)throw new Error(d.err);deviceInvite=d;document.getElementById('device-invite-qr').src=d.qr;document.getElementById('device-invite-until').textContent='Действует до '+new Date(d.expiresAt).toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'});document.getElementById('modal-device-invite').classList.add('on');}catch(e){toast(e.message||'Не удалось создать приглашение');}}
function closeDeviceInvite(){document.getElementById('modal-device-invite').classList.remove('on');deviceInvite=null;}
async function shareDeviceInvite(){if(!deviceInvite)return;const text='Подключи это устройство к моей Lumo. Ссылка одноразовая и действует 15 минут.';try{if(navigator.share)await navigator.share({title:'Подключение Lumo',text,url:deviceInvite.url});else{await navigator.clipboard.writeText(deviceInvite.url);toast('Ссылка скопирована');}}catch(e){if(e?.name!=='AbortError')toast('Не удалось поделиться ссылкой');}}
async function acceptCloudInvite(token){if(!await lumoConfirm('Это устройство получит общие дела, покупки, финансы, заметки и настройки.','Подключить к Lumo','Подключить'))return;try{const r=await fetch(FAMILY_SERVER+'/cloud/invite/use',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID,token})}),d=await r.json();if(!d.ok)throw new Error(d.err);localStorage.setItem(CLOUD_CODE_KEY,d.code);localStorage.setItem(CLOUD_REV_KEY,d.revision);localStorage.setItem('lumo_cloud_dirty_v1','0');await cloudSyncNow(true,'pull');cloudStatusText();toast('Второе устройство подключено');}catch(e){toast(e.message||'Приглашение недействительно');}}
async function disconnectCloudSync(){if(!localStorage.getItem(CLOUD_CODE_KEY))return;await fetch(FAMILY_SERVER+'/cloud/disconnect',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID})}).catch(()=>{});localStorage.removeItem(CLOUD_CODE_KEY);localStorage.removeItem(CLOUD_REV_KEY);localStorage.removeItem('lumo_cloud_dirty_v1');cloudStatusText();toast('Синхронизация отключена на этом устройстве');}
function applyCloudPayload(payload){if(!payload?.planner)return;window.__lumoCloudApplying=true;try{localStorage.setItem(KEY,JSON.stringify(payload.planner));if(payload.assistantMemory)localStorage.setItem(LOCAL_MEMORY_KEY,JSON.stringify(payload.assistantMemory));}finally{window.__lumoCloudApplying=false;}localStorage.setItem('lumo_cloud_dirty_v1','0');applyTheme();applyAccent();refreshCurrentTab();}
function mergeCloudPayload(local,remote){const a=local?.planner||{},b=remote?.planner||{},out={...b,...a};['tasks','finance','income','notes','habits','shopping','cats','expCats','goals'].forEach(key=>{if(Array.isArray(a[key])||Array.isArray(b[key])){const map=new Map();[...(b[key]||[]),...(a[key]||[])].forEach((x,i)=>map.set(String(x?.id??x?.name??i),x));out[key]=[...map.values()];}});return {planner:out,assistantMemory:{taskModules:{...(remote?.assistantMemory?.taskModules||{}),...(local?.assistantMemory?.taskModules||{})},expenseCategories:{...(remote?.assistantMemory?.expenseCategories||{}),...(local?.assistantMemory?.expenseCategories||{})}},savedAt:Date.now()};}
async function cloudSyncNow(showToast=false,forcedAction=''){if(!localStorage.getItem(CLOUD_CODE_KEY))return showToast&&toast('Сначала подключи синхронизацию');const dirty=localStorage.getItem('lumo_cloud_dirty_v1')==='1',action=forcedAction||(dirty?'push':'pull');try{const body={userId:PUSH_USER_ID,baseRevision:Number(localStorage.getItem(CLOUD_REV_KEY)||0),action};if(action!=='pull')body.data=cloudPayload();const r=await fetch(FAMILY_SERVER+'/cloud/sync',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}),d=await r.json();if(d.conflict){cloudConflict={local:cloudPayload(),server:d.server.data,serverRevision:d.server.revision};document.getElementById('modal-sync-conflict').classList.add('on');return;}if(!d.ok)throw new Error(d.err);if(d.data)applyCloudPayload(d.data);localStorage.setItem(CLOUD_REV_KEY,d.revision);localStorage.setItem('lumo_cloud_at_v1',d.updatedAt||Date.now());localStorage.setItem('lumo_cloud_dirty_v1','0');cloudStatusText();if(showToast)toast('Данные синхронизированы');}catch(e){if(showToast)toast(e.message||'Нет связи с сервером');}}
async function resolveCloudConflict(choice){if(!cloudConflict)return;let data=choice==='server'?cloudConflict.server:choice==='merge'?mergeCloudPayload(cloudConflict.local,cloudConflict.server):cloudConflict.local;if(choice==='server'){applyCloudPayload(data);localStorage.setItem(CLOUD_REV_KEY,cloudConflict.serverRevision);}else{const r=await fetch(FAMILY_SERVER+'/cloud/sync',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID,baseRevision:cloudConflict.serverRevision,action:'force',data})}),d=await r.json();if(d.ok){applyCloudPayload(data);localStorage.setItem(CLOUD_REV_KEY,d.revision);}}cloudConflict=null;document.getElementById('modal-sync-conflict').classList.remove('on');localStorage.setItem('lumo_cloud_at_v1',Date.now());cloudStatusText();toast('Конфликт решён');}

/* ===== СЕМЬЯ + ПУШИ (сервер) ===== */
const FAMILY_SERVER='https://pushevgen.duckdns.org'; // без слэша на конце, через https!
const LUMO_APP_VERSION='v99';
const LUMO_DEVICE_ID=(()=>{let id=localStorage.getItem('lumo_device_id_v1');if(!id){id='dev_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,10);localStorage.setItem('lumo_device_id_v1',id)}return id})();
const LUMO_SUPPORT_CODE=(()=>{let code=localStorage.getItem('lumo_support_code_v1');if(!code){const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';code='';for(let i=0;i<8;i++)code+=chars[Math.floor(Math.random()*chars.length)];localStorage.setItem('lumo_support_code_v1',code)}return code})();
function diagnosticPlatform(){const ua=navigator.userAgent||'';if(/android/i.test(ua))return'Android';if(/iphone|ipad|ipod/i.test(ua))return'iOS';if(/windows/i.test(ua))return'Windows';if(/macintosh|mac os/i.test(ua))return'macOS';return'Web'}
function diagnosticDisplayMode(){return window.matchMedia?.('(display-mode: standalone)').matches||navigator.standalone?'standalone':'browser'}
async function reportDeviceHealth(force=false){
  const last=Number(localStorage.getItem('lumo_device_health_at')||0);if(!force&&Date.now()-last<6*60*60*1000)return;
  try{let subscribed=false,swVersion='none';if('serviceWorker'in navigator){const reg=await navigator.serviceWorker.ready.catch(()=>null);subscribed=!!(await reg?.pushManager?.getSubscription().catch(()=>null));swVersion=reg?.active?.scriptURL?.split('/').pop()||'none'}
    await fetch(FAMILY_SERVER+'/telemetry/device',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID,deviceId:LUMO_DEVICE_ID,supportCode:LUMO_SUPPORT_CODE,platform:diagnosticPlatform(),appVersion:LUMO_APP_VERSION,swVersion,displayMode:diagnosticDisplayMode(),pushPermission:typeof Notification==='undefined'?'unsupported':Notification.permission,pushSubscribed:subscribed}),keepalive:true});localStorage.setItem('lumo_device_health_at',Date.now())
  }catch(_){}
}
let diagnosticErrorSending=false;
function reportClientError(kind,error,extra=''){
  if(diagnosticErrorSending)return;diagnosticErrorSending=true;
  const message=String(error?.message||error||'unknown error'),stack=String(error?.stack||''),path=location.pathname;
  fetch(FAMILY_SERVER+'/telemetry/error',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID,deviceId:LUMO_DEVICE_ID,kind,message:message+(extra?' · '+extra:''),stack,path,appVersion:LUMO_APP_VERSION}),keepalive:true}).catch(()=>{}).finally(()=>{diagnosticErrorSending=false});
}
window.addEventListener('error',event=>reportClientError('javascript',event.error||event.message));
window.addEventListener('unhandledrejection',event=>reportClientError('promise',event.reason));
let PUSH_USER_ID=localStorage.getItem('push_user_id')||'';
if(!PUSH_USER_ID){PUSH_USER_ID='u_'+Date.now()+'_'+Math.random().toString(36).slice(2,8);localStorage.setItem('push_user_id',PUSH_USER_ID);}
const VAPID_PUBLIC=localStorage.getItem('vapid_public')||''; // подставится с сервера при подписке

function getMyName(){return load().myName||'';}
function getMyRole(){return load().myRole||'other';}
function getFamilyState(){return load().familyId||null;}
function isIOSDevice(){return /iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);}
function isStandalonePWA(){return window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;}
const OFFLINE_QUEUE_KEY='offline_changes_v1';
function getOfflineQueue(){
  try{const q=JSON.parse(localStorage.getItem(OFFLINE_QUEUE_KEY));return Array.isArray(q)?q:[];}catch(e){return[];}
}
function saveOfflineQueue(queue){
  try{localStorage.setItem(OFFLINE_QUEUE_KEY,JSON.stringify(queue.slice(-100)));}catch(e){}
  window.dispatchEvent(new CustomEvent('lumo-queue-change',{detail:{count:queue.length}}));
}
function enqueueChange(path,payload,dedupeKey){
  const queue=getOfflineQueue();
  const item={id:'q_'+Date.now()+'_'+Math.random().toString(36).slice(2,7),path,payload,createdAt:Date.now(),attempts:0,dedupeKey:dedupeKey||''};
  if(dedupeKey){
    const index=queue.findIndex(x=>x.dedupeKey===dedupeKey);
    if(index>=0)queue.splice(index,1);
  }
  queue.push(item);saveOfflineQueue(queue);
  return item;
}
async function sendOrQueue(path,payload,dedupeKey){
  if(!navigator.onLine){enqueueChange(path,payload,dedupeKey);return false;}
  try{
    const response=await fetch(FAMILY_SERVER+path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(!response.ok)throw new Error('HTTP '+response.status);
    return true;
  }catch(e){
    enqueueChange(path,payload,dedupeKey);
    return false;
  }
}
let _flushingOfflineQueue=false;
async function flushOfflineQueue(){
  if(_flushingOfflineQueue||!navigator.onLine)return;
  _flushingOfflineQueue=true;
  const original=getOfflineQueue();
  const pending=[];
  let sent=0;
  for(const item of original){
    try{
      const response=await fetch(FAMILY_SERVER+item.path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(item.payload)});
      if(!response.ok)throw new Error('HTTP '+response.status);
      sent++;
    }catch(e){
      item.attempts=(item.attempts||0)+1;
      pending.push(item);
    }
  }
  saveOfflineQueue(pending);
  _flushingOfflineQueue=false;
  if(sent)toast(`☁️ Синхронизировано изменений: ${sent}`);
}

async function subscribePush(){
  try{
    if(isIOSDevice()&&!isStandalonePWA()){
      await lumoAlert('На iPhone фоновые push-уведомления работают только после установки Lumo на экран «Домой».\n\nОткрой меню «Поделиться» в Safari → «На экран Домой», затем запусти Lumo с иконки.','Как включить push на iPhone');
      return;
    }
    if(!('serviceWorker'in navigator)||!('PushManager'in window)){toast('Пуши не поддерживаются этим браузером');return;}
    const perm=await Notification.requestPermission();
    if(perm!=='granted'){toast('Разреши уведомления для пушей');return;}
    const reg=await navigator.serviceWorker.ready;
    const old=await reg.pushManager.getSubscription();
    if(old)await old.unsubscribe();
    const keyResp=await fetch(FAMILY_SERVER+'/key').then(r=>r.json()).catch(()=>null);
    const pub=keyResp&&keyResp.key?keyResp.key:VAPID_PUBLIC;
    if(!pub){toast('Сервер пушей не настроен');return;}
    localStorage.setItem('vapid_public',pub);
    const sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:urlB64ToUint8(pub)});
    await fetch(FAMILY_SERVER+'/subscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID,subscription:sub,name:getMyName(),role:getMyRole()})});
    toast('📲 Фоновые пуши включены!');
    syncPushData();scheduleShoppingPushServer(true);
  }catch(e){toast('Не вышло подписаться на пуши');}
}
function urlB64ToUint8(b64){const pad='='.repeat((4-b64.length%4)%4);const s=(b64+pad).replace(/-/g,'+').replace(/_/g,'/');const raw=atob(s);return Uint8Array.from([...raw].map(c=>c.charCodeAt(0)));}
async function testPush(){
  try{
    if(!('serviceWorker'in navigator)||Notification.permission!=='granted'){toast('Сначала разреши уведомления');return;}
    const reg=await navigator.serviceWorker.ready,sub=await reg.pushManager.getSubscription();
    if(!sub){toast('Сначала включи фоновые push');return;}
    const r=await fetch(FAMILY_SERVER+'/test',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID})});
    if(!r.ok)throw new Error('HTTP '+r.status);
    const data=await r.json().catch(()=>({ok:true}));if(data.ok===false)throw new Error(data.error||data.err||'Сервер отклонил push');
    toast('🧪 Отправлен один тесовый push');
  }catch(e){toast('Тес push не прошёл');}
  checkPushHealth(false);
}
async function checkPushHealth(showToast=false){
  const el=document.getElementById('push-health');if(!el)return;
  const lines=[];let ok=true;
  lines.push(`🆔 Код поддержки: <b>${esc(LUMO_SUPPORT_CODE)}</b> · версия ${esc(LUMO_APP_VERSION)}`);
  const permission=('Notification'in window)?Notification.permission:'unsupported';
  lines.push(permission==='granted'?'✅ Уведомления разрешены':'❌ Уведомления не разрешены');if(permission!=='granted')ok=false;
  try{
    if(!('serviceWorker'in navigator)||!('PushManager'in window))throw new Error();
    const reg=await navigator.serviceWorker.ready;lines.push(reg.active?'✅ Service worker активен':'❌ Service worker не активен');if(!reg.active)ok=false;
    const sub=await reg.pushManager.getSubscription();lines.push(sub?'✅ Фоновая push-подписка активна':'❌ Нет фоновой push-подписки');if(!sub)ok=false;
    const server=await fetch(FAMILY_SERVER+'/key',{cache:'no-store'});lines.push(server.ok?'✅ Push-сервер доступен':'❌ Push-сервер вернул '+server.status);if(!server.ok)ok=false;
  }catch(e){lines.push('❌ Не удалось проверить push-службу');ok=false;}
  const now=Date.now(),next=getTasks().filter(t=>!t.done&&t.date&&t.time).map(t=>({...t,_at:new Date(t.date+'T'+t.time).getTime()})).filter(t=>t._at>now).sort((a,b)=>a._at-b._at)[0];
  lines.push(next?`🕒 Ближайшее: ${esc(next.title)} — ${fmtDate(next.date)}, ${esc(next.time)}`:'ℹ️ Нет будущих дел с точным временем');
  el.innerHTML=lines.join('<br>');if(showToast)toast(ok?'✅ Push-цепочка готова':'Есть проблема в push-настройках');
}
async function scheduleHabitPushServer(force=false){
  const r=getHabitReminder();if(!('serviceWorker'in navigator))return;
  const left=incompleteHabits();
  const key=`habit_push_scheduled_v2:${todayKey()}:${r.time}:${r.enabled?'on':'off'}:${left.map(h=>h.id).join(',')}`;
  if(!force&&localStorage.getItem('habit_push_last_key')===key)return;
  try{
    const reg=await navigator.serviceWorker.ready,sub=await reg.pushManager.getSubscription();if(!sub)return;
    const [hour,minute]=(r.time||'09:00').split(':').map(Number);
    const response=await fetch(FAMILY_SERVER+'/schedule-morning',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID,subscription:sub,type:'habit',scheduleId:'habit:'+PUSH_USER_ID,enabled:!!r.enabled,reminderTime:r.time,title:'🌱 Не забудь о привычках',body:left.slice(0,5).map(h=>h.icon+' '+h.name).join(' · ')||'Проверь сегодняшний ритм',hour:hour||0,minute:minute||0,tzOffset:-new Date().getTimezoneOffset(),date:todayKey()})});
    if(response.ok)localStorage.setItem('habit_push_last_key',key);
  }catch(e){}
}
async function scheduleShoppingPushServer(force=false){
  const r=getShoppingReminder(),items=activeShoppingItems();if(!('serviceWorker'in navigator))return;
  const fingerprint=items.map(x=>String(x.id)+':'+String(x.t)).join('|').slice(0,220),key=`shopping_push:${todayKey()}:${r.time}:${r.enabled?'on':'off'}:${fingerprint}`;
  if(!force&&localStorage.getItem('shopping_push_last_key')===key)return;
  try{
    const reg=await navigator.serviceWorker.ready,sub=await reg.pushManager.getSubscription();if(!sub)return;
    const [hour,minute]=(r.time||'18:00').split(':').map(Number),response=await fetch(FAMILY_SERVER+'/schedule-morning',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID,subscription:sub,type:'shopping-reminder',scheduleId:'shopping:'+PUSH_USER_ID,enabled:!!r.enabled&&!!items.length,reminderTime:r.time,title:'🛒 Не забудь про покупки',body:items.slice(0,5).map(x=>x.t).join(' · ')||'Список покупок пока пуст',hour:hour||18,minute:minute||0,tzOffset:-new Date().getTimezoneOffset(),date:todayKey()})});
    if(response.ok)localStorage.setItem('shopping_push_last_key',key);
  }catch(e){}
}
function syncPushData(){
  if(!PUSH_USER_ID)return;
  const now=Date.now(),notifyHour=load().notifyHour||'09:00';
  const tasks=getTasks().filter(t=>!t.done&&t.date).map(t=>{
    const time=t.time||notifyHour,scheduledAt=new Date(t.date+'T'+time).getTime();
    return {id:String(t.id),title:t.title,date:t.date,time:t.time||'',module:t.module,pri:t.pri||'Y',scheduledAt:Number.isFinite(scheduledAt)?scheduledAt:null};
  }).filter(t=>!t.scheduledAt||t.scheduledAt>now-86400000);
  const habits=getHabits().map(h=>({id:String(h.id),name:h.name,icon:h.icon||'⭐',doneToday:!!h.log?.[todayKey()]})),habitReminder=getHabitReminder(),shoppingReminder=getShoppingReminder(),shopping=activeShoppingItems().map(x=>({id:String(x.id),t:x.t}));
  const payload={userId:PUSH_USER_ID,name:getMyName(),role:getMyRole(),notifyHour,tzOffset:-new Date().getTimezoneOffset(),quiet:getQuiet(),habitReminder:{...habitReminder,habits},shoppingReminder,shopping,syncVersion:Date.now(),tasks};
  const snapshot={type:'TASK_SNAPSHOT',tasks,notifyHour,habits,habitReminder,shoppingReminder,shopping,day:todayKey()};
  if(navigator.serviceWorker?.controller)navigator.serviceWorker.controller.postMessage(snapshot);
  else navigator.serviceWorker?.ready?.then(reg=>reg.active?.postMessage(snapshot)).catch(()=>{});
  sendOrQueue('/sync',payload,'sync');
}
function pushDoneStat(){
  sendOrQueue('/done',{userId:PUSH_USER_ID,name:getMyName(),date:todayKey()});
}
function pushSharedExpense(exp){
  sendOrQueue('/shared-expense',{userId:PUSH_USER_ID,name:getMyName(),expense:exp},'shared-expense:'+(exp.id||Date.now()));
}
function notifyTaskDone(t){
  if(!t.fromUserId)return;
  sendOrQueue('/task-done',{fromUserId:t.fromUserId,byName:getMyName(),title:t.title},'task-done:'+(t.assignId||t.id));
}

function openFamily(){renderFamily();document.getElementById('modal-family').classList.add('on');}
function closeFamily(){document.getElementById('modal-family').classList.remove('on');}
async function renderFamily(){
  const name=getMyName(),role=getMyRole(),fam=getFamilyState();
  let html=`<div class="field"><label>Твоё имя</label><input id="fam-name" value="${esc(name)}" placeholder="Например: Алексей"></div>
    <div class="field"><label>Твоя роль</label><select id="fam-role">${FAMILY_ROLES.map(r=>`<option value="${r.id}" ${r.id===role?'selected':''}>${r.emoji} ${r.name}</option>`).join('')}</select></div>
    <button class="btn" onclick="saveMyProfile()">💾 Сохранить профиль</button>`;
  if(!fam){
    html+=`<div class="sub-h">Создать или войти в семью</div>
      <button class="btn" onclick="createFamily()">➕ Создать семью</button>
      <div class="field" style="margin-top:10px"><label>Код приглашения</label><input id="fam-code" placeholder="ABCD12"></div>
      <button class="btn ghost" onclick="joinFamily()">🔗 Войти по коду</button>`;
  }else{
    html+=`<div class="fam-code-box">Код семьи: <b>${esc(fam)}</b><button onclick="copyFamCode(${jsArg(fam)})">📋</button></div>
      <button class="btn ghost" onclick="openRating()">📊 Рейтинг семьи</button>
      <div id="fam-members" class="fam-members"></div>
      <button class="btn ghost" onclick="leaveFamily()">🚪 Выйти из семьи</button>`;
  }
  document.getElementById('family-body').innerHTML=html;
  if(fam)loadFamilyMembers();
}
function saveMyProfile(){
  const d=load();d.myName=document.getElementById('fam-name').value.trim();d.myRole=document.getElementById('fam-role').value;save(d);
  toast('Профиль сохранён 👤');syncPushData();
  sendOrQueue('/profile',{userId:PUSH_USER_ID,name:d.myName,role:d.myRole},'profile');
}
async function createFamily(){
  if(!getMyName()){toast('Сначала введи имя');return;}
  saveMyProfile();
  try{
    const r=await fetch(FAMILY_SERVER+'/family/create',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID,name:getMyName(),role:getMyRole()})});
    const d=await r.json();
    if(d.ok){
      const s=load();
      s.familyId=d.familyCode;   // ← familyCode, не familyId!
      save(s);
      confetti();
      toast('👨‍👩‍👦 Семья создана! Код: '+d.familyCode);
      renderFamily();
    } else toast(d.err||'Ошибка создания');
  }
  catch(e){toast('Сервер недоступен');}
}
async function joinFamily(){
  const code=document.getElementById('fam-code').value.trim().toUpperCase();
  if(!code){toast('Введи код');return;}
  if(!getMyName()){toast('Сначала введи имя');return;}
  saveMyProfile();
  try{
    const r=await fetch(FAMILY_SERVER+'/family/join',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID,familyCode:code,name:getMyName(),role:getMyRole()})});
    const d=await r.json();
    if(d.ok){
      const s=load();
      s.familyId=d.familyCode;   // ← familyCode!
      save(s);
      confetti();
      toast('🔗 Ты в семье!');
      renderFamily();
    } else toast(d.err||'Код не найден');   // ← d.err, не d.error!
  }
  catch(e){toast('Сервер недоступен');}
}
async function loadFamilyMembers(){
  try{const r=await fetch(FAMILY_SERVER+'/family/list',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID})});const d=await r.json();
    if(d.ok){const el=document.getElementById('fam-members');if(!el)return;el.innerHTML='<div class="sub-h">Участники</div>'+d.members.map(m=>{const ri=roleInfo(m.role);return `<div class="fam-member"><span>${ri.emoji} ${esc(m.name)}</span><small>${m.userId===PUSH_USER_ID?'ты':ri.name}</small></div>`;}).join('');}}
  catch(e){}
}
function copyFamCode(c){navigator.clipboard&&navigator.clipboard.writeText(c);toast('📋 Код скопирован');}
async function leaveFamily(){if(!await lumoConfirm('Общие дела и покупки больше не будут синхронизироваться с этой семьёй.','Выйти из семьи','Выйти',true))return;const fam=getFamilyState();sendOrQueue('/family/leave',{userId:PUSH_USER_ID,familyId:fam},'family-leave');const d=load();d.familyId=null;save(d);toast('Вышел из семьи');renderFamily();}

/* ПОРУЧЕНИЕ конкретной задачи */
let assignTaskId=null;
async function openAssign(id){
  if(!getFamilyState()){toast('Сначала создай/войди в семью 👨‍👩‍👦');openFamily();return;}
  assignTaskId=id;
  document.getElementById('modal-assign').classList.add('on');
  document.getElementById('assign-body').innerHTML='<div class="ai-hint">Загрузка...</div>';
  try{const r=await fetch(FAMILY_SERVER+'/family/list',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID})});const d=await r.json();
    if(d.ok){const others=d.members.filter(m=>m.userId!==PUSH_USER_ID);
      document.getElementById('assign-body').innerHTML=others.length?others.map(m=>{const ri=roleInfo(m.role);return `<button class="assign-btn" onclick="doAssign(${jsArg(m.userId)},${jsArg(m.name)})">${ri.emoji} ${esc(m.name)} <small>${ri.name}</small></button>`;}).join(''):'<div class="empty"><div>😶</div>В семье пока только ты</div>';}}
  catch(e){document.getElementById('assign-body').innerHTML='<div class="empty">Нет связи с сервером</div>';}
}
function closeAssign(){document.getElementById('modal-assign').classList.remove('on');}
async function firstFamilyEvent(eventId){
  const id=String(eventId||'');if(!id)return true;const key='./__push_seen__/family:'+encodeURIComponent(id);
  try{const cache=await caches.open('lumo-push-state-v1');if(await cache.match(key))return false;await cache.put(key,new Response(String(Date.now())));return true;}catch(e){const k='family_seen:'+id;if(localStorage.getItem(k))return false;localStorage.setItem(k,String(Date.now()));return true;}
}
async function showIncomingFamilyNotification(type,event){
  if(!event||!await firstFamilyEvent(event.eventId||event.assignId||event.id))return;
  const title=type==='family-task'?'📥 Новое поручение':'🛒 Новая общая покупка',body=type==='family-task'?`${event.fromName?event.fromName+': ':''}${event.title||'Новое дело'}`:`${event.fromName?event.fromName+' добавил(а): ':''}${(event.items||[]).map(x=>x.t||x).join(' · ')}`;
  if('Notification'in window&&Notification.permission==='granted'){
    try{const reg=await navigator.serviceWorker.ready;await reg.showNotification(title,{body,icon:'./assets/icons/icon.png',badge:'./assets/icons/icon.png',tag:type+':'+(event.eventId||event.assignId||event.id),data:{type,eventId:event.eventId||event.assignId||event.id||'',taskId:event.assignId||''}});}catch(e){}
  }
}
async function doAssign(toUserId,toName){
  const t=getTasks().find(a=>a.id===assignTaskId);if(!t)return;
  const eventId='assign_'+String(t.id)+'_'+toUserId,sent=await sendOrQueue('/family/assign',{userId:PUSH_USER_ID,toUserId,familyId:getFamilyState(),fromName:getMyName(),task:{title:t.title,desc:t.desc||'',date:t.date||'',time:t.time||'',pri:t.pri||'Y',module:t.module||'personal',clientEventId:eventId},notification:{type:'family-task',eventId,title:'📥 Новое поручение',body:(getMyName()?getMyName()+': ':'')+t.title,taskId:eventId}},'assign:'+t.id+':'+toUserId);
  if(sent){confetti();toast('📤 Поручено: '+toName);}
  else toast('📤 Поручение сохранено в очереди');
  closeAssign();
}
async function pullAssignedTasks(){
  if(!PUSH_USER_ID)return;
  try{const r=await fetch(FAMILY_SERVER+'/inbox',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID})});const d=await r.json();
    if(d.ok){window.pendingAssignments=d.tasks||[];updateNotificationBadge();}}
  catch(e){}
}

function notificationIcon(type){return type==='assignment'?'📥':type==='assignment-response'?'↩️':type==='family-shopping'?'🛒':type==='budget'?'💳':'🔔';}
function relativeEventTime(ts){const m=Math.max(0,Math.round((Date.now()-Number(ts||Date.now()))/60000));return m<1?'сейчас':m<60?m+' мин назад':m<1440?Math.round(m/60)+' ч назад':new Date(ts).toLocaleDateString('ru-RU');}
async function fetchNotificationEvents(){try{const r=await fetch(FAMILY_SERVER+'/events/list',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID})}),d=await r.json();if(d.ok){window.notificationEvents=d.events||[];return window.notificationEvents;}}catch(e){}return window.notificationEvents||[];}
async function updateNotificationBadge(){const events=await fetchNotificationEvents(),pending=(window.pendingAssignments||[]).length,nonAssignment=events.filter(x=>!x.read&&x.type!=='assignment').length,assignmentUnread=events.filter(x=>!x.read&&x.type==='assignment').length,unread=nonAssignment+Math.max(pending,assignmentUnread);localStorage.setItem('lumo_unread_count_v1',String(unread));const dot=document.getElementById('notify-dot');if(dot){dot.textContent=unread>99?'99+':unread;dot.style.display=unread?'grid':'none';}updateAppBadge();}
async function openNotificationCenter(){const modal=document.getElementById('modal-notifications'),body=document.getElementById('notification-body');modal.classList.add('on');body.innerHTML='<div class="ai-hint">Загружаю события…</div>';await pullAssignedTasks();const events=await fetchNotificationEvents(),pending=(window.pendingAssignments||[]).length,visible=events.filter(e=>!(pending&&e.type==='assignment'));let html=pending?`<button class="smart-card" onclick="openAssignmentsInbox()"><i>📥</i><span><b>Входящие поручения</b><small>Ждут ответа: ${pending}</small></span><em>›</em></button>`:'';html+=visible.map(e=>`<div class="feed-item ${e.read?'':'unread'}" onclick="openNotificationEvent(${jsArg(e.id)},${jsArg(e.type)})"><span class="feed-icon">${notificationIcon(e.type)}</span><span><b>${esc(e.title)}</b><p>${esc(e.body)}</p><small>${relativeEventTime(e.ts)}</small></span></div>`).join('');body.innerHTML=html||'<div class="empty"><div>🔔</div>Новых событий нет</div>';}
async function openNotificationEvent(id,type){await fetch(FAMILY_SERVER+'/events/read',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID,ids:[id]})}).catch(()=>{});if(type==='assignment'){document.getElementById('modal-notifications').classList.remove('on');openAssignmentsInbox();}else if(type==='family-shopping'){document.getElementById('modal-notifications').classList.remove('on');openShopping();}else{await openNotificationCenter();}updateNotificationBadge();}
async function markAllNotificationsRead(){await fetch(FAMILY_SERVER+'/events/read',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID})}).catch(()=>{});await openNotificationCenter();updateNotificationBadge();}
async function openAssignmentsInbox(){await pullAssignedTasks();const items=window.pendingAssignments||[],body=document.getElementById('inbox-body');document.getElementById('modal-inbox').classList.add('on');body.innerHTML=items.length?items.map(a=>`<div class="inbox-card"><h4>${esc(a.title)}</h4><p>От ${esc(a.fromName||'участника семьи')} · ${a.date?fmtDate(a.date):'без даты'}${a.time?' · '+esc(a.time):''}</p>${a.desc?`<p>${esc(a.desc)}</p>`:''}<input id="inbox-comment-${esc(a.assignId)}" placeholder="Комментарий отправителю (необязательно)"><div class="inbox-actions"><button class="reject" onclick="respondAssignment(${jsArg(a.assignId)},'rejected')">Отклонить</button><button class="accept" onclick="respondAssignment(${jsArg(a.assignId)},'accepted')">Принять</button></div></div>`).join(''):'<div class="empty"><div>📥</div>Новых поручений нет</div>';}
async function respondAssignment(assignId,status){const a=(window.pendingAssignments||[]).find(x=>x.assignId===assignId);if(!a)return;const comment=document.getElementById('inbox-comment-'+assignId)?.value.trim()||'',payload={userId:PUSH_USER_ID,assignId,status,comment};let d={ok:true},queued=false;try{const r=await fetch(FAMILY_SERVER+'/inbox/respond',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});d=await r.json();}catch(e){enqueueChange('/inbox/respond',payload,'inbox-response:'+assignId);queued=true;}if(!d.ok){toast(d.err||'Не удалось отправить ответ');return;}if(status==='accepted'&&!getTasks().some(x=>x.assignId===assignId)){const tasks=getTasks();tasks.push({id:Date.now()+Math.floor(Math.random()*10000),assignId,title:a.title,module:a.module||'personal',date:a.date||todayKey(),time:a.time||'',desc:a.desc||'',pri:a.pri||'Y',done:false,fromUserId:a.fromUserId,fromName:a.fromName});setTasks(tasks);}window.pendingAssignments=(window.pendingAssignments||[]).filter(x=>x.assignId!==assignId);openAssignmentsInbox();updateNotificationBadge();toast(queued?'Ответ сохранён и уйдёт при появлении сети':status==='accepted'?'Поручение добавлено в дела':'Поручение отклонено');}

/* ===== РЕЙТИНГ СЕМЬИ ===== */
async function openRating(){
  document.getElementById('modal-rating').classList.add('on');
  document.getElementById('rating-body').innerHTML='<div class="ai-hint">Загрузка...</div>';
  try{const r=await fetch(FAMILY_SERVER+'/rating',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID})});const d=await r.json();
    if(d.ok&&d.rating&&d.rating.length){const max=Math.max(...d.rating.map(x=>x.count),1);const medals=['🥇','🥈','🥉'];
      document.getElementById('rating-body').innerHTML=d.rating.sort((a,b)=>b.count-a.count).map((x,i)=>{const ri=roleInfo(x.role);return `<div class="rating-row"><span class="rk">${medals[i]||(i+1)+'.'}</span><span class="rn">${ri.emoji} ${esc(x.name)}${x.userId===PUSH_USER_ID?' (ты)':''}</span><div class="rating-bar"><i style="width:${Math.round(x.count/max*100)}%"></i></div><b>${x.count}</b></div>`;}).join('');}
    else document.getElementById('rating-body').innerHTML='<div class="empty"><div>📊</div>Пока нет данных за неделю</div>';}
  catch(e){document.getElementById('rating-body').innerHTML='<div class="empty">Нет связи с сервером</div>';}
}
function closeRating(){document.getElementById('modal-rating').classList.remove('on');}

/* ===== СПИСОК ПОКУПОК ===== */
function getShopping(){const d=load();return d.shopping||[];}
function setShopping(s,event=null){const d=load();d.shopping=s;save(d);scheduleShoppingReminderLocal();syncPushData();scheduleShoppingPushServer(true);if(getFamilyState())syncShopping(event);}
function openShopping(){renderShopping();document.getElementById('modal-shopping').classList.add('on');if(getFamilyState())pullShopping();}
function closeShopping(){document.getElementById('modal-shopping').classList.remove('on');}
function addShoppingItems(names,source='manual'){
  const clean=(names||[]).map(x=>String(x||'').trim()).filter(Boolean);if(!clean.length)return[];
  const s=getShopping(),createdAt=Date.now(),eventId='shopping_'+PUSH_USER_ID+'_'+createdAt,items=clean.map((t,i)=>({id:createdAt+i+Math.floor(Math.random()*1000),t,done:false,by:getMyName()||'',byUserId:PUSH_USER_ID,familyEventId:eventId,createdAt,updatedAt:createdAt}));s.push(...items);
  const event={type:'family-shopping',eventId,fromUserId:PUSH_USER_ID,fromName:getMyName(),familyId:getFamilyState(),createdAt,source,items:items.map(x=>({id:x.id,t:x.t}))};setShopping(s,event);return items;
}
function addShopItem(){
  const inp=document.getElementById('shop-input');const v=inp.value.trim();if(!v)return;
  addShoppingItems([v]);inp.value='';renderShopping();vibrate(20);toast(getFamilyState()?'🛒 Добавлено в общий список':'🛒 Добавлено в покупки');
}
function toggleShopItem(id){const s=getShopping();const x=s.find(a=>a.id===id);if(x){x.done=!x.done;x.updatedAt=Date.now();setShopping(s);renderShopping();vibrate(15);}}
function delShopItem(id){setShopping(getShopping().filter(a=>a.id!==id));renderShopping();}
function clearDoneShop(){setShopping(getShopping().filter(a=>!a.done));renderShopping();toast('Куплённое убрано');}
function renderShopping(){
  const s=getShopping();const active=s.filter(x=>!x.done),done=s.filter(x=>x.done);
  let html='';
  if(!s.length){html='<div class="empty"><div>🛒</div>Список пуст</div>';}
  else{
    html='<div class="shop-list">';
    active.forEach(i=>{html+=`<div class="shop-item"><div class="sc" onclick="toggleShopItem(${i.id})"></div><span>${esc(i.t)}</span>${i.by?`<small>${esc(i.by)}</small>`:''}<button class="shop-link" onclick="openDataLinks('shopping',${jsArg(i.id)})">${ICONS.link}</button><span class="sd" onclick="delShopItem(${i.id})">×</span></div>`;});
    if(done.length){html+=`<div class="shop-done-h">✅ Куплено (${done.length}) <button onclick="clearDoneShop()">очистить</button></div>`;done.forEach(i=>{html+=`<div class="shop-item done"><div class="sc on" onclick="toggleShopItem(${i.id})">✓</div><span>${esc(i.t)}</span><span class="sd" onclick="delShopItem(${i.id})">🗑</span></div>`;});}
    html+='</div>';
  }
  document.getElementById('shopping-body').innerHTML=html;
}
function syncShopping(event=null){sendOrQueue('/shopping/set',{userId:PUSH_USER_ID,name:getMyName(),familyId:getFamilyState(),items:getShopping(),event:event||undefined},'shopping');}
async function pullShopping(){
  try{
    const r=await fetch(FAMILY_SERVER+'/shopping/get',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID})});
    const d=await r.json();
    if(d.ok&&d.items){const cur=getShopping(),curIds=new Set(cur.map(x=>String(x.id))),merged=cur.slice(),added=[];d.items.forEach(it=>{if(!curIds.has(String(it.id))){merged.push(it);if(!it.byUserId||it.byUserId!==PUSH_USER_ID)added.push(it);}});if(added.length){const dd=load();dd.shopping=merged;save(dd);renderShopping();scheduleShoppingReminderLocal();syncPushData();scheduleShoppingPushServer(true);const first=added[0],eventId=first.familyEventId||'shopping_remote_'+added.map(x=>x.id).join('_');showIncomingFamilyNotification('family-shopping',{eventId,fromName:first.by||'',items:added});toast('🛒 В общем списке новые покупки: '+added.length);}}
  }catch(e){}
}

/* ===== ИИ-АССИСТЕНТ ===== */
let aiHistory=[];
let assistantDialogue={lastTaskId:null,suggestedTaskIds:[],suggestionIndex:0,lastTopic:'',pendingTeachPhrase:'',teachingStage:''};
function aiHello(){
  const chat=document.getElementById('ai-chat');
  const name=getMyName();
  const greet=name?`Привет, ${esc(name)}! 👋`:'Привет! 👋';
  aiAddMsg('ai',`<div class="assistant-welcome"><span class="assistant-mark">${ICONS.ai}</span><div><b>${greet}</b><p>Скажи, что нужно сделать — я разберу фразу на дела, покупки, расходы и привычки.</p><small>Работаю локально и всегда показываю результат перед сохранением.</small></div></div>`);
  renderAISuggest();
}
function renderAISuggest(){
  const box=document.getElementById('ai-suggest');if(!box)return;
  const s=['🎙️ Завтра позвонить маме в 18 купить молоко','📊 Мои дела на сегодня','💰 Сколько потратил за месяц','🧾 Сколько стоило молоко'];
  box.innerHTML=s.map(x=>`<button onclick="aiQuick('${x.replace(/'/g,'')}')">${x}</button>`).join('')+
    '<button onclick="openAIReceipt()">🧾 Добавить чек</button>';
}
let _assistantAutoPromptKey='',_assistantAutoPromptAt=0;
function submitAssistantPrompt(prompt){
  const text=String(prompt||'').trim();if(!text)return;const now=Date.now(),key=text.toLowerCase().replace(/\s+/g,' ');
  if(key===_assistantAutoPromptKey&&now-_assistantAutoPromptAt<1400)return;
  _assistantAutoPromptKey=key;_assistantAutoPromptAt=now;const input=document.getElementById('ai-input');if(input)input.value='';switchTab('ai');
  setTimeout(()=>aiSend(text),80);
}
function aiQuick(t){submitAssistantPrompt(t);}
function aiAddMsg(who,html){
  const chat=document.getElementById('ai-chat');
  const div=document.createElement('div');div.className='ai-msg '+who;
  div.innerHTML=`<div class="bubble">${html}</div>`;
  chat.appendChild(div);chat.scrollTop=chat.scrollHeight;
  return div;
}
function aiTyping(){
  const chat=document.getElementById('ai-chat');
  const div=document.createElement('div');div.className='ai-msg ai typing';div.id='ai-typing';
  div.innerHTML='<div class="bubble"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
  chat.appendChild(div);chat.scrollTop=chat.scrollHeight;
}
function aiStopTyping(){const t=document.getElementById('ai-typing');if(t)t.remove();}

  const WEEKDAYS={'понедельник':1,'понедельн':1,'пн':1,'вторник':2,'вт':2,'сред':3,'ср':3,'четверг':4,'чт':4,'пятниц':5,'пт':5,'суббот':6,'сб':6,'воскрес':0,'вс':0};
function nextWeekday(target){
  const d=new Date();const cur=d.getDay();
  let diff=(target-cur+7)%7;if(diff===0)diff=7;
  d.setDate(d.getDate()+diff);
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function dateFromText(low){
  if(/сегодня/.test(low))return todayKey();
  let after=low.match(/через\s+(\d{1,3})\s*(?:дн|день|дня|дней)/);
  if(after){const d=new Date();d.setDate(d.getDate()+(+after[1]));return localDateKey(d);}
  if(/послезавтра/.test(low)){const d=new Date();d.setDate(d.getDate()+2);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
  if(/завтра/.test(low)){const d=new Date();d.setDate(d.getDate()+1);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
  const numeric=low.match(/(?:^|\s)([0-3]?\d)[./]([01]?\d)(?:[./](20\d{2}|\d{2}))?(?=\s|$)/);
  if(numeric){
    const now=new Date(),day=Number(numeric[1]),month=Number(numeric[2]);let year=numeric[3]?Number(numeric[3]):now.getFullYear();
    if(year<100)year+=2000;
    const d=new Date(year,month-1,day);
    if(!numeric[3]&&d<new Date(now.getFullYear(),now.getMonth(),now.getDate()))d.setFullYear(year+1);
    if(d.getDate()===day&&d.getMonth()===month-1)return localDateKey(d);
  }
  const dayOnly=low.match(/(?:^|\s)([1-9]|[12]\d|3[01])\s*(?:числа|число)(?=\s|$)/);
  if(dayOnly){const now=new Date(),day=Number(dayOnly[1]),d=new Date(now.getFullYear(),now.getMonth(),day);if(d<new Date(now.getFullYear(),now.getMonth(),now.getDate()))d.setMonth(d.getMonth()+1);if(d.getDate()===day)return localDateKey(d);}
  const shortDay=low.match(/(?:^|\s)(?:на|за)\s+(0[1-9]|[12]\d|3[01])(?=\s|$)/);
  if(shortDay){const now=new Date(),day=Number(shortDay[1]),d=new Date(now.getFullYear(),now.getMonth(),day);if(d<new Date(now.getFullYear(),now.getMonth(),now.getDate()))d.setMonth(d.getMonth()+1);if(d.getDate()===day)return localDateKey(d);}
  const months={январ:0,феврал:1,март:2,апрел:3,мая:4,май:4,июн:5,июл:6,август:7,сентябр:8,октябр:9,ноябр:10,декабр:11};
  const dm=low.match(/\b(\d{1,2})\s+(январ\w*|феврал\w*|март\w*|апрел\w*|мая|май|июн\w*|июл\w*|август\w*|сентябр\w*|октябр\w*|ноябр\w*|декабр\w*)/);
  if(dm){
    const stem=Object.keys(months).find(x=>dm[2].startsWith(x));
    if(stem){const now=new Date();let y=now.getFullYear();const d=new Date(y,months[stem],+dm[1]);if(d<new Date(now.getFullYear(),now.getMonth(),now.getDate()))d.setFullYear(++y);return localDateKey(d);}
  }
  for(const w in WEEKDAYS){if(low.includes(w))return nextWeekday(WEEKDAYS[w]);}
  return todayKey();
}
function timeFromText(low){
  const relative=relativeScheduleFromText(low);if(relative)return relative.time;
  const withoutDates=low.replace(/\b[0-3]?\d[./][01]?\d(?:[./](?:20)?\d{2})?\b/g,' ').replace(/(?:^|\s)(?:на|за)\s+0[1-9](?=\s|$)/g,' ');
  const tm=withoutDates.match(/(?:в|к|на|после)\s*(\d{1,2})(?:[:.\-\s](\d{2}))?(?!\s*(?:т(?:\s|$)|тыс|тыщ|руб|₽))(?:\s*(?:ч(?:ас(?:а|ов)?)?|утра|дня|вечера))?|\b(\d{1,2})[:.\-](\d{2})\b/);
  if(tm){let hh=Number(tm[1]||tm[3]),mm=Number(tm[2]||tm[4]||0);if(/вечера/.test(tm[0])&&hh<12)hh+=12;if(/дня/.test(tm[0])&&hh<7)hh+=12;if(hh<=23&&mm<=59)return String(hh).padStart(2,'0')+':'+String(mm).padStart(2,'0');}
  return '';
}
function findOrNull(name){return getExpCats().some(c=>c.name===name)?name:null;}
let pendingCat=null;
let pendingLocalPlan=null;
let pendingLocalOps=null;
let pendingLocalChoice=null;
const LOCAL_MEMORY_KEY='lumo_local_memory_v1';
function getLocalMemory(){
  try{
    const m=JSON.parse(localStorage.getItem(LOCAL_MEMORY_KEY)||'{}');
    return {taskModules:m.taskModules||{},expenseCategories:m.expenseCategories||{},phrases:m.phrases||{}};
  }catch(e){return {taskModules:{},expenseCategories:{},phrases:{}};}
}
function memoryTokens(text){
  const stop=new Set(['завтра','сегодня','послезавтра','сделать','нужно','надо','оплатить','купить','добавить','создать','рублей','тысяч','тыщи','через','каждый','каждую','каждое','понедельник','вторник','среду','четверг','пятницу','субботу','воскресенье','меня','мне','него','них','этого','того','просто','уже']);
  return [...new Set(String(text||'').toLowerCase().replace(/ё/g,'е').match(/[а-яa-z]{4,}/g)||[])].filter(x=>!stop.has(x)).slice(0,8);
}
function learnLocalAction(a){
  if(!a)return;
  const m=getLocalMemory(),tokens=memoryTokens((a._source||'')+' '+(a.title||'')+' '+(a.desc||''));
  if(a._learnModule&&a.module)tokens.forEach(t=>m.taskModules[t]=a.module);
  if(a._learnExpenseCategory&&a.category)tokens.forEach(t=>m.expenseCategories[t]=a.category);
  localStorage.setItem(LOCAL_MEMORY_KEY,JSON.stringify(m));
}
function localMemoryCount(){
  const m=getLocalMemory();return Object.keys(m.taskModules).length+Object.keys(m.expenseCategories).length+Object.keys(m.phrases).length;
}
function renderLocalMemoryInfo(){
  const el=document.getElementById('local-memory-info');if(!el)return;
  const n=localMemoryCount();el.textContent=n?`Изучено правил: ${n}. Они хранятся только на этом устройстве.`:'Пока нет изученных правил. Исправь категорию или объясни непонятную фразу — Lumo её запомнит.';
}
async function clearLocalAssistantMemory(){
  if(!await lumoConfirm('Все исправления категорий, которым ты обучил Lumo, будут удалены.','Очистить память помощника','Очистить',true))return;
  localStorage.removeItem(LOCAL_MEMORY_KEY);renderLocalMemoryInfo();toast('Память помощника очищена');
}
let assistantRulesDraft=[];
function openAssistantRules(){const m=getLocalMemory();assistantRulesDraft=[...Object.entries(m.taskModules).map(([word,value])=>({word,type:'task',value})),...Object.entries(m.expenseCategories).map(([word,value])=>({word,type:'expense',value})),...Object.entries(m.phrases).map(([word,value])=>({word,type:'phrase',value}))];renderAssistantRules();document.getElementById('modal-rules').classList.add('on');}
function assistantRuleOptions(rule){const arr=rule.type==='task'?getCats().map(c=>({value:c.id,label:c.emoji+' '+c.name})):getExpCats().map(c=>({value:c.name,label:c.i+' '+c.name}));return arr.map(x=>`<option value="${esc(x.value)}" ${x.value===rule.value?'selected':''}>${esc(x.label)}</option>`).join('');}
function renderAssistantRules(){const el=document.getElementById('rules-body');if(!el)return;el.innerHTML=`<div class="settings-inline"><button onclick="addAssistantRule('task')">+ Категория дела</button><button onclick="addAssistantRule('expense')">+ Категория расхода</button></div><div class="rule-list">${assistantRulesDraft.map((r,i)=>`<div class="rule-row"><input value="${esc(r.word)}" placeholder="${r.type==='phrase'?'Непонятная фраза':'Слово'}" oninput="assistantRulesDraft[${i}].word=this.value">${r.type==='phrase'?`<input value="${esc(r.value)}" placeholder="Правильная команда" oninput="assistantRulesDraft[${i}].value=this.value">`:`<select onchange="assistantRulesDraft[${i}].value=this.value">${assistantRuleOptions(r)}</select>`}<button onclick="assistantRulesDraft.splice(${i},1);renderAssistantRules()">×</button></div>`).join('')}</div>`;}
function addAssistantRule(type='task'){const first=type==='task'?getCats()[0]?.id:getExpCats()[0]?.name;assistantRulesDraft.push({word:'',type,value:first||''});renderAssistantRules();setTimeout(()=>document.querySelector('#rules-body .rule-row:last-child input')?.focus(),30);}
function saveAssistantRules(){const m={taskModules:{},expenseCategories:{},phrases:{}};assistantRulesDraft.forEach(r=>{const word=String(r.word||'').toLowerCase().trim().replace(/ё/g,'е');if(!word)return;if(r.type==='phrase'){const value=String(r.value||'').trim();if(value)m.phrases[word]=value;}else (r.type==='expense'?m.expenseCategories:m.taskModules)[word]=r.value;});localStorage.setItem(LOCAL_MEMORY_KEY,JSON.stringify(m));localStorage.setItem('lumo_cloud_dirty_v1','1');scheduleCloudSync();renderLocalMemoryInfo();document.getElementById('modal-rules').classList.remove('on');toast('Правила помощника сохранены');}
function assistantPhraseKey(text){return normalizeAssistantText(text).toLowerCase().replace(/[.,!?;:]+$/,'').replace(/\s+/g,' ').trim();}
function learnedAssistantPhrase(text){return getLocalMemory().phrases[assistantPhraseKey(text)]||'';}
function finishAssistantTeaching(correctText){const source=assistantDialogue.pendingTeachPhrase;if(!source)return;const key=assistantPhraseKey(source),value=String(correctText||'').trim();assistantDialogue.pendingTeachPhrase='';if(!key||!value||key===assistantPhraseKey(value))return;const m=getLocalMemory();m.phrases[key]=value;localStorage.setItem(LOCAL_MEMORY_KEY,JSON.stringify(m));localStorage.setItem('lumo_cloud_dirty_v1','1');scheduleCloudSync();renderLocalMemoryInfo();aiAddMsg('ai',`🧠 Запомнил: «<b>${esc(source)}</b>» означает «<b>${esc(value)}</b>».`);}

function localDateKey(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function localRepeat(text){
  if(/кажд\S*\s+(?:утро|вечер)|по\s+утрам|по\s+вечерам/.test(text))return 'daily';
  if(/кажд\S*\s+день|ежеднев/.test(text))return 'daily';
  if(/кажд\S*\s+(понедельник|вторник|сред|четверг|пятниц|суббот|воскрес)|еженедел/.test(text))return 'weekly';
  if(/кажд\S*\s+месяц|ежемесяч/.test(text))return 'monthly';
  return '';
}
function relativeScheduleFromText(text,base=new Date()){
  const low=String(text||'').toLowerCase().replace(/ё/g,'е');
  const match=low.match(/через\s+(?:(\d{1,3})\s*)?(минут(?:у|ы)?|мин(?:ут)?|час(?:а|ов)?|полчаса|полчасика)(?=\s|$)/);
  if(!match)return null;
  let amount=match[1]?Number(match[1]):1;
  const unit=match[2],date=new Date(base);
  if(/^полчас/.test(unit))date.setMinutes(date.getMinutes()+30);
  else if(/^час/.test(unit))date.setHours(date.getHours()+amount);
  else date.setMinutes(date.getMinutes()+amount);
  return {date:localDateKey(date),time:String(date.getHours()).padStart(2,'0')+':'+String(date.getMinutes()).padStart(2,'0'),raw:match[0]};
}
function cleanLocalTitle(text){
  const relative=relativeScheduleFromText(text);
  return String(text).replace(relative?.raw||/(?!)/,' ')
    .replace(/^(?:у\s+меня\s+|мне\s+)?\d+\s+(?:дела?|задач[аи])\s*/i,'')
    .replace(/^\d{1,2}\s+(?=[а-яё])/i,'')
    .replace(/^(?:срочн\S*|важн\S*|приоритетн\S*|как можно скорее)\s*(?:задач\S*|дело)?\s*/i,'')
    .replace(/(?:^|\s)(?:на|примерно)\s+\d{1,3}\s*(?:минут\w*|мин\b|час\w*)/gi,' ')
    .replace(/(?:^|\s)(?:с\s+)?(?:низк\S*|средн\S*|высок\S*)\s+энерги\S*/gi,' ')
    .replace(/(?:^|\s)в\s+(\d{1,3})\s+кабинет\w*/gi,' кабинет $1 ')
    .replace(/^(?:и\s+)?(?:напомни|создай|добавь|запиши|запланируй|поставь|нужно|надо|не забыть)\s*/i,'')
    .replace(/^(?:у\s+меня|мне)\s+/i,'')
    .replace(/(?:^|\s)(?:сегодня|завтра|послезавтра|через\s+(?:(?:\d+\s+)?(?:дн[а-яё]*|час[а-яё]*|мин[а-яё]*)|полчас(?:а|ика)?))(?=\s|$)/gi,' ')
    .replace(/(?:^|\s)(?:в|во)\s+(?:понедельник|вторник|среду?|четверг|пятницу?|субботу?|воскресенье)(?=\s|$)/gi,' ')
    .replace(/\b\d{1,2}\s+(?:январ\w*|феврал\w*|март\w*|апрел\w*|мая|июн\w*|июл\w*|август\w*|сентябр\w*|октябр\w*|ноябр\w*|декабр\w*)/gi,'')
    .replace(/\b[0-3]?\d[./][01]?\d(?:[./](?:20)?\d{2})?\b/g,' ')
    .replace(/(?:^|\s)(?:в|к|на)\s*\d{1,2}(?:(?:[:.\-]|\s)\d{2})?\s*(?:час(?:а|ов)?|утра|дня|вечера)?/gi,' ')
    .replace(/(?:^|\s)после\s+(?:в\s+)?\d{1,2}(?:(?:[:.\-]|\s)\d{2})?\s*(?:час(?:а|ов)?)?/gi,' ')
    .replace(/\b\d{1,2}[:.\-]\d{2}\b/g,' ')
    .replace(/(?:^|\s)кажд\S*\s+(?:день|недел\S*|месяц|понедельник|вторник|среду?|четверг|пятницу?|субботу?|воскресенье)(?=\s|$)/gi,' ')
    .replace(/(?:^|\s)(?:на|примерно)\s+\d{1,3}\s*(?:минут\w*|мин\b|час\w*)/gi,' ')
    .replace(/(?:^|\s)(?:с\s+)?(?:низк\w*|средн\w*|высок\w*)\s+энерги\w*/gi,' ')
    .replace(/^\s+/,'')
    .replace(/^(?:у\s+меня\s+|мне\s+)?(?:нужно|надо|необходимо)\s+/i,'')
    .replace(/^(?:у\s+меня|мне)\s+/i,'')
    .replace(/^из\s+них(?:\s+я)?(?:\s+уже)?\s+/i,'')
    .replace(/^по\s+работе\s+/i,'')
    .replace(/^(?:срочн\S*|важн\S*|приоритетн\S*|как можно скорее)\s*(?:задач\S*|дело)?\s*/i,'')
    .replace(/^после\s+/i,'')
    .replace(/^(?:нужно|надо|необходимо)\s+/i,'')
    .replace(/\s+так[- ]?же$/i,'')
    .replace(/\s+/g,' ').replace(/^[,.\s]+|[,.\s]+$/g,'').trim();
}
function normalizeAssistantText(text){
  let value=String(text||'').replace(/ё/g,'е').replace(/\s+/g,' ').trim();
  const rules=[
    [/(^|\s)(?:севодня|сигодня|сегдня)(?=\s|$)/gi,'$1сегодня'],
    [/(^|\s)(?:заврта|зафтра|завтр)(?=\s|$)/gi,'$1завтра'],
    [/(^|\s)(?:послизафтра|послезавтр)(?=\s|$)/gi,'$1послезавтра'],
    [/(^|\s)чз(?=\s|$)/gi,'$1через'],
    [/(^|\s)(?:напом|напомнить|напомена|напомени)(?=\s|$)/gi,'$1напомни'],
    [/(^|\s)(?:позв|позванить|пазвонить|позвонит)(?=\s|$)/gi,'$1позвонить'],
    [/(^|\s)(?:встретитса|встретица|встретится)(?=\s|$)/gi,'$1встретиться'],
    [/(^|\s)(?:сделат|зделать)(?=\s|$)/gi,'$1сделать'],
    [/(^|\s)забрат(?=\s|$)/gi,'$1забрать'],
    [/(^|\s)отправит(?=\s|$)/gi,'$1отправить'],
    [/(^|\s)заказат(?=\s|$)/gi,'$1заказать'],
    [/(^|\s)(?:патратил|потрател)(?=\s|$)/gi,'$1потратил'],
    [/(^|\s)(?:зарплта|зараплата)(?=\s|$)/gi,'$1зарплата'],
    [/(^|\s)(?:купи|куп)(?=\s|$)/gi,'$1купить'],
    [/(^|\s)доб(?=\s|$)/gi,'$1добавить']
  ];
  rules.forEach(([pattern,replacement])=>{value=value.replace(pattern,replacement);});
  return value.replace(/\s+/g,' ').trim();
}
function splitLocalSpeech(text){
  let s=normalizeAssistantText(text);
  s=s.replace(/^так\s+/i,'').replace(/(?:^|\s)в\s+пн(?=\s|$)/gi,' в понедельник').replace(/(?:^|\s)во?\s+вт(?=\s|$)/gi,' во вторник').replace(/(?:^|\s)в\s+ср(?=\s|$)/gi,' в среду').replace(/(?:^|\s)в\s+чт(?=\s|$)/gi,' в четверг').replace(/(?:^|\s)в\s+пт(?=\s|$)/gi,' в пятницу').replace(/(?:^|\s)в\s+сб(?=\s|$)/gi,' в субботу').replace(/(?:^|\s)в\s+вс(?=\s|$)/gi,' в воскресенье').trim();
  if((/привычк/.test(s)||/(?:кажд\S*\s+(?:утро|вечер)|ежедневно).*(?:зарядк|читать|пить|бег|трениров|гулять)/.test(s))&&!/(?:потрат|зарплат|доход|расход|купить.+(?:и|после).+(?:позвон|встреч|заказать))/.test(s))return [s];
  s=s.replace(/[;,\n]+|[.!?]+(?=\s|$)/g,' | ');
  const starters='позвон(?:ить|и)|созвон(?:иться|ится|иться)|написать|отправить|забрать|отвезти|отнести|привезти|сходить|съездить|встретиться|встретить|встреча|проводить|подготовить|сделать|проверить|закончить|начать|забронировать|вызвать|помыть|убраться|убрать|погулять|полить|посадить|принять|выпить|к\\s+врачу|врач|купить|докупить|заказать|оплат(?:ить|ил[аи]?)|заплат(?:ить|ил[аи]?)|потратил|потратила|купил|купила|отдать|вернуть|получить|получил|получила|пришл[ао]?\\s+(?:зп|зарплата)|зарплата|аванс|премия|тренировка|зарядка|заниматься|читать|напомни|добавь|создай';
  s=s.replace(/\s+(?=из\s+них(?:\s+я)?(?:\s+уже)?\s+(?:потратила?|заплатила?|отдала?|ушло))/gi,' | ');
  // Время непосредственно перед новым глаголом относится к новому действию:
  // «купить хлеб в 18 позвонить маме».
  s=s.replace(new RegExp(`\\s+(?:и\\s+)?(?=(${starters})(?:\\s|$))`,'gi'),' | ');
  // Повторный короткий проход страхует самые частые глаголы после времени:
  // «во вторник в 9 заказать… после в 11 вызвать… отдать… получить…».
  s=s.replace(/\s+(?:и\s+)?(?=(?:заказать|вызвать|отдать|вернуть|получить)(?:\s|$))/gi,' | ');
  // «пришла зарплата 90 тысяч из них 50 тысяч отдал за квартиру»
  // содержит две финансовые операции без союза и пунктуации.
  s=s.replace(/\s+(?=из\s+них(?:\s+я)?(?:\s+уже)?\s+(?:потратила?|заплатила?|отдала?|ушло))/gi,' | ');
  s=s.replace(/\s+(?=из\s+них(?:\s+я)?(?:\s+уже)?\s+\d)/gi,' | ');
  s=s.replace(/\s+(?:и\s+)?(?=(?:сегодня|завтра|послезавтра|во?\s+(?:понедельник|вторник|среду|четверг|пятницу|субботу|воскресенье)|кажд\S*\s+(?:день|понедельник|вторник|среду|четверг|пятницу|субботу|воскресенье))\s+(?:мне\s+)?(?:нужно\s+|надо\s+)?)/gi,' | ');
  const raw=s.split('|').map(x=>x.trim()).filter(x=>x.length>1),out=[];
  for(let i=0;i<raw.length-1;i++){
    if(/^из\s+них(?:\s+я)?(?:\s+уже)?$/i.test(raw[i])){raw[i+1]=raw[i]+' '+raw[i+1];raw[i]='';continue;}
    const detachedAmount=raw[i].match(/^(?:из\s+них(?:\s+я)?(?:\s+уже)?\s+)?(\d[\d\s]{1,9}(?:\s*(?:₽|р|руб\w*|т|тыс\w*|тыщ\w*))?)$/i);
    if(detachedAmount&&/^(?:потрат|заплат|оплат|отдал|отдать|вернуть|ушло)/i.test(raw[i+1])){raw[i+1]=raw[i+1]+' '+detachedAmount[1];raw[i]='';continue;}
    if(/(?:мне\s+)?(?:нужно|надо)(?:\s+по\s+работе)?\s+(?:в|к)\s*\d{1,2}(?::\d{2})?$/i.test(raw[i])){raw[i+1]=raw[i]+' '+raw[i+1];raw[i]='';}
  }
  for(let i=0;i<raw.length-1;i++){
    if(!raw[i])continue;
    const timingTail=raw[i].match(/\s+((?:(?:в|во)\s+(?:понедельник|вторник|среду?|четверг|пятницу?|субботу?|воскресенье)\s+)?(?:после\s+)?(?:в|к|на)\s*\d{1,2}(?:(?:[:.\-]|\s)\d{2})?\s*(?:час(?:а|ов)?|утра|дня|вечера)?(?:\s+(?:нужно|надо))?)$/i);
    if(timingTail){raw[i]=raw[i].slice(0,timingTail.index).trim();raw[i+1]=timingTail[1]+' '+raw[i+1];}
    const incomeLead=raw[i].match(/\s+(пришл\S*|получил\S*)$/i);
    if(incomeLead&&/^(?:зарплата|аванс|премия)(?:\s|$)/i.test(raw[i+1])){
      raw[i]=raw[i].slice(0,incomeLead.index).trim();
      raw[i+1]=incomeLead[1]+' '+raw[i+1];
    }
  }
  const onlyWhen=/^(?:и\s+)?(?:сегодня|завтра|послезавтра|во?\s+(?:понедельник|вторник|среду?|четверг|пятницу?|субботу?|воскресенье)|кажд\S*\s+(?:день|понедельник|вторник|среду?|четверг|пятницу?|субботу?|воскресенье))(?:\s+(?:(?:очень\s+)?срочн\S*|важн\S*|приоритетн\S*|как можно скорее))?(?:\s+(?:у\s+меня|мне)(?:\s+(?:нужно|надо))?)?(?:\s+(?:в|к|на)\s*\d{1,2}(?:(?:[:.\-]|\s)\d{2})?\s*(?:час(?:а|ов)?|утра|дня|вечера)?)?$/i;
  for(let i=0;i<raw.length;i++){
    if(!raw[i])continue;
    const relativeOnly=/^(?:напомни\s+)?через\s+(?:(?:\d{1,3}\s+)?(?:минут(?:у|ы)?|мин(?:ут)?|час(?:а|ов)?)|полчас(?:а|ика)?)(?=\s|$)$/i.test(raw[i]);
    if((onlyWhen.test(raw[i])||relativeOnly)&&raw[i+1])raw[i+1]=raw[i]+' '+raw[i+1];
    else if((onlyWhen.test(raw[i])||relativeOnly)&&out.length)out[out.length-1]+=' '+raw[i];
    else out.push(raw[i]);
  }
  return out;
}
function cleanExpenseTitle(text){return cleanLocalTitle(text).replace(/^(?:потратил[аи]?|купил[аи]?|заплатил[аи]?|оплатил[аи]?|отдал[аи]?|отдать|вернуть|ушло)\s*/i,'').replace(/\b\d[\d\s]{0,9}(?:\s*(?:₽|р(?=\s|$)|руб[а-я]*|т(?=\s|$)|тыс[а-я]*|тыщ[а-я]*))?/gi,' ').replace(/(?:^|\s)(?:₽|р|руб[а-я]*|т|тыс[а-я]*|тыщ[а-я]*)(?=\s|$)/gi,' ').replace(/^\s*(?:на|за)\s+/i,'').replace(/\s+(?:и|так[- ]?же)$/i,'').replace(/\s+/g,' ').trim()||'Расход'}
function expenseCategory(text){
  const low=text.toLowerCase();
  const learned=getLocalMemory().expenseCategories;
  const learnedToken=memoryTokens(low).find(t=>learned[t]&&getExpCats().some(c=>c.name===learned[t]));
  if(learnedToken)return learned[learnedToken];
  if(/продукт|еда|магаз|хлеб|молок|сыр|овощ|фрукт|сок|колбас|сосиск|пельмен|п[ае]штет|драж|мяс|ветчин|тушен|вермиш|макарон|barilla|кантуч|рыб|камбал|куриц|говяж|свинин|яйц|масл|кефир|творог|сметан|круп|печень/.test(low))return 'Продукты';
  if(/бензин|топлив|заправ/.test(low))return findOrNull('Топливо')||'Топливо';
  if(/кафе|ресторан|кофе|обед/.test(low))return findOrNull('Кафе')||'Кафе';
  if(/квартир|аренд|ипотек|жиль/.test(low))return findOrNull('Жильё')||'Жильё';
  if(/коммунал|свет|газ|интернет/.test(low))return findOrNull('Коммуналка')||'Коммуналка';
  if(/лекар|аптек|врач/.test(low))return findOrNull('Здоровье')||'Здоровье';
  if(/шампун|порошок|мыл|чистящ|губк|салфет|бумаг|бытов|fairy|средство\s+для|посуд/.test(low))return findOrNull('Дом')||'Прочее';
  if(/одеж|футбол|рубаш|джинс|куртк|обув|кроссов|носк/.test(low))return findOrNull('Одежда')||'Прочее';
  if(/такси|автобус|метро|проезд|билет/.test(low))return findOrNull('Транспорт')||'Прочее';
  if(/корм|собак|кошк|ветеринар/.test(low))return findOrNull('Питомцы')||'Питомцы';
  return 'Прочее';
}
function inferTaskModule(text){
  const low=text.toLowerCase();
  const learned=getLocalMemory().taskModules;
  const learnedToken=memoryTokens(low).find(t=>learned[t]&&getCats().some(c=>c.id===learned[t]));
  if(learnedToken)return learned[learnedToken];
  const preferred=
    /сотрудник|коллег|начальник|клиент|заказчик|офис|работ|совещан|отч[её]т|договор|пропуск|смен[аыу]|зарплат/.test(low)?'work':
    /машин|авто|гараж|шиномонтаж|техосмотр|масло|заправ/.test(low)?'car':
    /огород|теплиц|грядк|рассад|полив|урожай|посадить/.test(low)?'farm':
    'personal';
  const cats=getCats();
  if(cats.some(c=>c.id===preferred))return preferred;
  const names={work:/работ/i,car:/авто|машин/i,farm:/огород|сад/i,personal:/личн/i};
  return (cats.find(c=>names[preferred].test(c.name))||cats[0]||{id:'personal'}).id;
}
function parseLocalPlan(text){
  const chunks=splitLocalSpeech(text);const actions=[];const unknown=[];let contextDate=todayKey(),contextPri='Y';
  chunks.forEach(chunk=>{
    const low=chunk.toLowerCase();
    if(/не\s+срочн|\bпотом\b/.test(low))contextPri='B';
    else if(/срочн|важн|приоритетн|как можно скорее|немедлен/.test(low))contextPri='R';
    const priorityOnly=/^(?:(?:очень\s+)?(?:срочн\S*|важн\S*|приоритетн\S*)|как можно скорее|немедленно)(?:\s+(?:задач\S*|дело))?$/i.test(chunk.trim());
    if(priorityOnly)return;
    if(/^(?:(?:добавь|запиши|сохрани)\s+)?(?:в\s+)?заметк(?:у|и)(?=\s|$)/i.test(chunk.trim())){
      const noteText=chunk.replace(/^(?:(?:добавь|запиши|сохрани)\s+)?(?:в\s+)?заметк(?:у|и)\s*/i,'').trim();
      const noteHasDate=/(?:сегодня|завтра|послезавтра|через\s+\d+\s+д|во?\s+(?:понедельник|вторник|среду?|четверг|пятницу?|субботу?|воскресенье)|\d{1,2}\s+(?:числа|январ|феврал|март|апрел|мая|июн|июл|август|сентябр|октябр|ноябр|декабр)|[0-3]?\d[./][01]?\d)/i.test(noteText);
      if(noteText)actions.push({type:'note',title:noteText.length>64?noteText.slice(0,61)+'…':noteText,text:noteText,date:noteHasDate?dateFromText(noteText.toLowerCase()):todayKey(),_source:chunk});else unknown.push(chunk);
      return;
    }
    const hasDate=/(?:^|\s)(?:сегодня|завтра|послезавтра|через\s+\d+\s+д|во?\s+(?:понедельник|вторник|среду?|четверг|пятницу?|субботу?|воскресенье)|кажд\S*\s+(?:понедельник|вторник|среду?|четверг|пятницу?|субботу?|воскресенье)|\d{1,2}\s+(?:январ|феврал|март|апрел|мая|июн|июл|август|сентябр|октябр|ноябр|декабр)|[0-3]?\d[./][01]?\d(?:[./](?:20)?\d{2})?)(?=\s|$)/.test(low);
    if(hasDate)contextDate=dateFromText(low);
    const relative=relativeScheduleFromText(low);
    let date=relative?.date||contextDate,time=relative?.time||timeFromText(low)||extractTime(low),timeAdjusted='';
    if(time&&isPastTaskSchedule(date,time)){
      if(!hasDate){date=matrixFutureKey(1);timeAdjusted='Время сегодня прошло — перенёс на завтра';}
      else{time='';timeAdjusted='Прошедшее время убрано — выбери новое';}
    }
    let amountMatch=low.match(/(\d[\d\s]{0,9})\s*(₽|р(?=\s|$)|руб(?:лей)?|т(?=\s|$)|тыс(?:яч[аиу]?)?|тыщ[аиу]?)/);
    let amount=amountMatch?Number(amountMatch[1].replace(/\s/g,'')):0;
    if(amountMatch&&/^(?:т|тыс|тыщ)/.test(amountMatch[2])&&amount<1000)amount*=1000;
    if(!amount&&/(потрат|купил|заплат|оплат|отдал|отдать|вернуть|ушло)/.test(low)){const plain=low.match(/\b(\d[\d\s]{2,})\b/);amount=plain?Number(plain[1].replace(/\s/g,'')):0;}
    if(/зарплат|\bзп\b|аванс|преми|получить|получил|получила|пришла|пришло|доход|заработал/.test(low)){
      if(!amount){const m=low.match(/\b(\d[\d\s]{2,})\b/);amount=m?Number(m[1].replace(/\s/g,'')):0;}
      actions.push({type:'income',amount,source:/аванс/.test(low)?'Аванс':/преми/.test(low)?'Премия':'Зарплата',date,desc:chunk,_source:chunk});return;
    }
    if(amount&&/(потрат|купил|купила|заплат|оплатить|оплатил|оплатила|отдал|отдать|вернуть|ушло)/.test(low)){
      actions.push({type:'expense',amount,category:expenseCategory(low),desc:cleanExpenseTitle(chunk),date,_source:chunk});return;
    }
    const shoppingIntent=/(?:^|\s)(?:купить|докупить)(?=\s|$)/.test(low)||(/(?:^|\s)заказать(?=\s|$)/.test(low)&&/продукт|еду|пицц|ролл|суши|молок|хлеб|сыр|овощ|фрукт/.test(low));
    if(shoppingIntent&&!amount){
      let list=cleanLocalTitle(chunk).replace(/^(?:купить|докупить|заказать)\s+/i,'');
      const known=['молоко','хлеб','сыр','яйца','масло','кефир','творог','сметана','мясо','курица','рыба','рис','гречка','макароны','картошка','лук','морковь','помидоры','огурцы','яблоки','бананы','вода','кофе','чай'];
      const found=known.filter(x=>new RegExp(`(?:^|\\s)${x}(?:\\s|$)`,'i').test(list));
      const goods=found.length>1?found:list.split(/\s+и\s+|,\s*/).map(x=>x.trim()).filter(Boolean);
      if(goods.length)actions.push({type:'shopping',items:goods,title:goods.join(', '),date,_source:chunk});else unknown.push(chunk);
      return;
    }
    const repeat=localRepeat(low);
    if(/(?:добавь|создай|запиши|хочу|нужно|новая|новую).{0,18}привычк|привычк.{0,12}(?:добавь|создай|запиши)/.test(low)){
      let name=cleanLocalTitle(chunk)
        .replace(/^(?:я\s+)?(?:хочу|нужно|надо)?\s*(?:добавить|добавь|создать|создай|записать|запиши)?\s*(?:новую?\s+)?привычк(?:у|и)?\s*/i,'')
        .replace(/^(?:каждый день|ежедневно)\s*/i,'').trim();
      if(name){name=name.charAt(0).toUpperCase()+name.slice(1);actions.push({type:'habit',title:name,date,time,repeat:repeat||'daily',_source:chunk});}
      else unknown.push(chunk);
      return;
    }
    if(repeat&&/(трениров|зарядк|читать|прогул|заниматься|пить|учить|бег)/.test(low)){
      let name=cleanLocalTitle(chunk).replace(/^(?:кажд\S*\s+(?:утро|вечер)|по\s+(?:утрам|вечерам)|ежедневно)\s*/i,'');if(name)actions.push({type:'habit',title:name.charAt(0).toUpperCase()+name.slice(1),date,time,repeat,_source:chunk});else unknown.push(chunk);return;
    }
    let title=cleanLocalTitle(chunk);
    if(/^(?:напоминани[ея]|напомнить)$/i.test(title))title='Напоминание';
    if(title&&(/напомн|создай|добавь|запиши|заплан|нужно|надо|не забыть|позвон|созвон|написать|отправить|забрать|отвезти|сходить|съездить|встреч|заказать|вызвать|оплатить|трениров/.test(low)||date!==todayKey()||time)){
      title=title.charAt(0).toUpperCase()+title.slice(1);
      const durationMatch=low.match(/(?:на|примерно)\s+(\d{1,3})\s*(?:минут|мин\b)/),hourMatch=low.match(/(?:на|примерно)\s+(\d{1,2})\s*(?:час|часа|часов)/);
      const duration=durationMatch?Number(durationMatch[1]):hourMatch?Number(hourMatch[1])*60:30;
      const energy=/(?:высок\S*\s+энерг\S*|много\s+сил|сложн\S*\s+задач)/.test(low)?'high':/(?:низк\S*\s+энерг\S*|мало\s+сил|л[её]гк\S*\s+задач)/.test(low)?'low':'medium';
      actions.push({type:'task',title,date,time,module:inferTaskModule(low),pri:contextPri,repeat,duration,energy,_timeAdjusted:timeAdjusted,_source:chunk});contextPri='Y';return;
    }
    if(/[\p{L}\p{N}]/u.test(chunk))unknown.push(chunk);
  });
  // Голосовая вводная «у меня 3 дела: 1 …» задаёт количество, но не является делом.
  const withoutHeaders=actions.filter(a=>!(a.type==='task'&&/^\d+\s+(?:дела?|задач[аи])(?:\s+\d+)?$/i.test(a.title||'')));
  // При речи без пауз глагол иногда отделяется дважды. Если одинаковая карточка
  // получилась и без времени, и с точным временем, оставляем точную.
  const compact=withoutHeaders.filter((a,index,list)=>{
    if(a.type!=='task'||a.time)return true;
    const key=(a.title||'').toLowerCase().replace(/\s+/g,' ').trim();
    return !list.some((b,j)=>j!==index&&b.type==='task'&&b.time&&b.date===a.date&&(b.title||'').toLowerCase().replace(/\s+/g,' ').trim()===key);
  });
  return {actions:compact,unknown};
}
function localPlanMeta(a){
  if(a.type==='expense')return `${fmtMoney(a.amount)} ₽ · ${a.category}`;
  if(a.type==='income')return `+${fmtMoney(a.amount)} ₽ · ${a.source}`;
  if(a.type==='note')return `Заметка · ${fmtDate(a.date||todayKey())}`;
  if(a.type==='shopping')return 'Список покупок';
  if(a.type==='habit')return `${a.repeat==='daily'?'Каждый день':'Каждую неделю'}${a.time?' · '+a.time:''}`;
  return `${a.pri==='R'?'🔴 Важно · ':a.pri==='B'?'🔵 Потом · ':''}${fmtDate(a.date)}${a.time?' · '+a.time:''}${a.module?' · '+catLabel(a.module):''}${a.duration?' · ⏱ '+a.duration+' мин':''}${a.energy?` · ${a.energy==='high'?'⚡ много энергии':a.energy==='low'?'🌿 мало энергии':'◐ средняя энергия'}`:''}${a.repeat?' · повтор':''}${a._timeAdjusted?' · ⚠️ '+a._timeAdjusted:''}`;
}
function tryLocalAnswer(text){
  const low=text.toLowerCase();
  const receiptAnswer=tryReceiptAnswer(text);if(receiptAnswer)return receiptAnswer;
  if(/заверш\w*\s+день|итог\w*\s+(?:дня|сегодня)|вечерн\w*\s+(?:итог|обзор)/.test(low)){
    const tasks=getTasks().filter(t=>t.date===todayKey()),done=tasks.filter(t=>t.done),left=tasks.filter(t=>!t.done),habits=getHabits(),habitDone=habits.filter(h=>h.log?.[todayKey()]).length;
    const habitLeft=habits.filter(h=>!h.log?.[todayKey()]);
    const tail=left.length?`<br><br>Остались дела: ${left.slice(0,5).map(t=>esc(t.title)).join(' · ')}<br><small>Могу перенести лишнее на завтра — напиши «разгрузи остаток дня».</small>`:habitLeft.length?`<br><br>Дела закрыты, но остались привычки: ${habitLeft.slice(0,5).map(h=>esc((h.icon||'')+' '+h.name)).join(' · ')}`:'<br><br>Всё действительно закрыто — можно спокойно завершать день ✨';
    return `<b>Итог дня</b><br>✅ Дел выполнено: ${done.length} из ${tasks.length}<br>🌱 Привычек: ${habitDone} из ${habits.length}${tail}`;
  }
  if(/перегруз|разгруз\w*\s+(?:мой\s+)?день|слишком\s+много\s+(?:дел|задач)/.test(low)){
    const tasks=getTasks().filter(t=>!t.done&&t.date===todayKey()),minutes=tasks.reduce((n,t)=>n+Number(t.duration||30),0),high=tasks.filter(t=>t.energy==='high').length;
    if(!tasks.length)return 'На сегодня активных дел нет — перегрузки не вижу.';
    return `На сегодня <b>${tasks.length}</b> дел примерно на <b>${Math.floor(minutes/60)} ч ${minutes%60} мин</b>. Энергоёмких: <b>${high}</b>.<br><br>${minutes>480||high>3?'План перегружен. Оставь одно важное и одно короткое дело, остальные перенеси.':'Нагрузка выглядит выполнимой, если делать по одному делу и оставить перерывы.'}`;
  }
  if(/(?:невыполненн|оставш|не сделал|не сделала|не отметил|не отметила).*(?:привыч)|(?:привыч).*(?:сегодня|вечер|остал|выполн)/.test(low)){
    const tk=todayKey(),left=getHabits().filter(h=>!h.log?.[tk]);
    if(!left.length)return 'Все привычки на сегодня выполнены — отличный ритм 🌿';
    const ordered=left.slice().sort((a,b)=>Number(!!a.time)-Number(!!b.time));
    return `Сегодня осталось привычек: <b>${ordered.length}</b><br>${ordered.slice(0,8).map((h,i)=>`${i+1}. ${esc(h.icon||'◇')} <b>${esc(h.name)}</b>${h.time?' · '+esc(h.time):''}`).join('<br>')}<br><br><small>Короткий план: начни с самой простой, затем сделай следующую без перерыва. После выполнения отметь её в разделе «Привычки».</small>`;
  }
  if(/покаж\w*.*(?:дел|задач).*(?:недел)/.test(low)){
    const end=new Date();end.setDate(end.getDate()+7);const endKey=localDateKey(end);
    let list=getTasks().filter(t=>!t.done&&t.date>=todayKey()&&t.date<=endKey);
    if(/рабоч|работ/.test(low))list=list.filter(t=>t.module==='work');
    list.sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
    return list.length?`На ближайшие 7 дней:<br>${list.slice(0,12).map(t=>`• ${esc(t.title)} — ${fmtDate(t.date)}${t.time?', '+esc(t.time):''}`).join('<br>')}`:'На ближайшие 7 дней подходящих дел нет.';
  }
  if(/(?:мои|какие|сколько).*(?:дел|задач).*(?:сегодня)|что\s+у\s+нас.*(?:сегодня).*(?:дел|задач)|(?:дел|задач).*(?:на сегодня|сегодня)/.test(low)){
    const list=getTasks().filter(t=>!t.done&&t.date===todayKey());
    return list.length
      ?`Сегодня ${list.length} ${list.length===1?'дело':'дел'}:<br>${list.slice(0,8).map(t=>`• ${esc(t.title)}${t.time?' — '+esc(t.time):''}`).join('<br>')}`
      :'На сегодня активных дел нет.';
  }
  if(/сколько.*(?:потрат|расход)|расход.*месяц/.test(low)){
    const s=getExpenseStats();
    return `За текущий месяц потрачено <b>${fmtMoney(s.total)} ₽</b>${s.byCat.length?`.<br>Больше всего: ${esc(s.byCat[0].name)} — ${fmtMoney(s.byCat[0].sum)} ₽`:'.'}`;
  }
  if(/сколько.*(?:заработ|доход)|баланс/.test(low)){
    const s=getExpenseStats();
    return `Доходы: <b>${fmtMoney(s.income)} ₽</b><br>Расходы: ${fmtMoney(s.total)} ₽<br>Баланс: <b>${fmtMoney(s.balance)} ₽</b>`;
  }
  if(/что купить|список покупок|покупки/.test(low)){
    const s=getShopping().filter(x=>!x.done);
    return s.length?`В списке покупок:<br>${s.slice(0,12).map(x=>'• '+esc(x.t)).join('<br>')}`:'Список покупок пуст.';
  }
  return null;
}
function localTaskOrder(){
  const tk=todayKey();return getTasks().filter(t=>!t.done).sort((a,b)=>{
    const ao=isOverdue(a)?0:a.date===tk?1:a.date?2:3,bo=isOverdue(b)?0:b.date===tk?1:b.date?2:3;if(ao!==bo)return ao-bo;
    const ap=a.pri==='R'?0:a.pri==='Y'?1:2,bp=b.pri==='R'?0:b.pri==='Y'?1:2;if(ap!==bp)return ap-bp;return String((a.date||'9999')+(a.time||'99:99')).localeCompare(String((b.date||'9999')+(b.time||'99:99')));
  });
}
function tryLocalDialogue(text){
  const low=String(text).toLowerCase().replace(/ё/g,'е').trim();
  if(/^(привет|здравствуй|доброе утро|добрый день|добрый вечер|хай|салют)(?:$|[\s,.!?])/.test(low)){assistantDialogue.lastTopic='greeting';return 'Привет! 👋 Я рядом. Можешь продиктовать весь день одной фразой, спросить, с чего начать, добавить привычку или попросить изменить уже созданное дело.';}
  if(/^(спасибо|благодарю|круто|отлично|молодец|понял|поняла)\b/.test(low))return 'Рад помочь 🙂 Продолжаем — что разобрать или запланировать дальше?';
  if(/(?:объясни|расскажи).*(?:понятн|проще)|(?:научи|обучи)\s+меня|я\s+не\s+понял.*(?:сказал|объяснил)/.test(low))return 'Конечно. Я могу:<br>• создать дело: «завтра позвонить Егору в 10»;<br>• добавить привычку: «добавь привычку пить воду каждый день»;<br>• записать деньги: «потратил 850 рублей на продукты»;<br>• показать данные: «что у нас сегодня по делам?»;<br>• изменить запись: «перенеси созвон с Егором на 2 августа».<br><br>Пиши обычной фразой — запятые не нужны. Ничего не сохраню без экрана проверки.';
  if(/кто ты|что ты умеешь|чем поможешь|расскажи о себе/.test(low))return 'Я локальный помощник Lumo. Разбираю длинную речь на дела, покупки, доходы, расходы и привычки, ищу по данным и предлагаю изменения с подтверждением. Свободные знания обо всём мире без Grok ограничены, зато данные планировщика не отправляю в интернет.';
  if(/(?:мне\s+)?(?:тяжело|грустно|плохо|тревожно)|я\s+(?:устал|устала|не успеваю)|слишком много дел/.test(low)){
    const list=localTaskOrder();assistantDialogue.suggestedTaskIds=list.map(x=>x.id);assistantDialogue.suggestionIndex=0;assistantDialogue.lastTopic='support';
    if(!list.length)return 'Похоже, сейчас лучше выдохнуть: активных дел нет. Сделай небольшой перерыв и не добавляй себе лишнего 💜';
    const first=list[0];assistantDialogue.lastTaskId=first.id;return `Давай без перегруза. Сейчас выбери только одно: <b>${esc(first.title)}</b>${first.time?' к '+esc(first.time):''}. Остальное пока не трогай. Когда закончишь, напиши «что дальше».`;
  }
  const asksNext=/что\s+(?:мне\s+)?(?:делать\s+)?(?:сначала|первым)|с\s+чего\s+начать|что\s+важнее|расставь\s+приоритет|спланируй\s+(?:мне\s+|мой\s+)?день|план\s+на\s+(?:сегодня|день)|что\s+дальше|а\s+потом/.test(low);
  if(asksNext){
    let list=assistantDialogue.suggestedTaskIds.map(id=>getTasks().find(t=>t.id===id)).filter(t=>t&&!t.done);
    const continuation=/что\s+дальше|а\s+потом/.test(low)&&list.length;if(!continuation){list=localTaskOrder();assistantDialogue.suggestedTaskIds=list.map(x=>x.id);assistantDialogue.suggestionIndex=0;}else assistantDialogue.suggestionIndex++;
    if(!list.length)return 'Активных дел нет — можно отдохнуть или добавить одно новое дело.';
    if(continuation&&assistantDialogue.suggestionIndex>=list.length)return 'Это было последнее активное дело в текущем плане. Можно отдохнуть или добавить новое только при необходимости 🌿';
    const idx=Math.min(assistantDialogue.suggestionIndex,list.length-1),task=list[idx];assistantDialogue.lastTaskId=task.id;assistantDialogue.lastTopic='plan';
    return `${idx?'Следующим':'Начни с'}: <b>${esc(task.title)}</b>${task.date?` · ${fmtDate(task.date)}`:''}${task.time?' в '+esc(task.time):''}.${idx+1<list.length?' После этого напиши «что дальше».':' Это последнее активное дело в текущем плане.'}`;
  }
  if(/давай поговорим|поговори со мной|мне скучно/.test(low))return 'Давай 🙂 Я лучше всего поддерживаю разговор вокруг твоего дня: могу помочь разгрузить голову, разобрать планы, расходы или выбрать одно главное дело. Что сейчас больше беспокоит?';
  if(/помоги(?:\s+мне)?$|что посоветуешь|дай совет/.test(low)){const list=localTaskOrder(),s=getExpenseStats();return `Сейчас вижу активных дел: <b>${list.length}</b>, расходов за месяц: <b>${fmtMoney(s.total)} ₽</b>. ${list.length?`Я бы начал с «${esc(list[0].title)}».`:'По делам всё спокойно.'} Можешь уточнить: дела, деньги, покупки или привычки?`;}
  return null;
}
function receiptQueryTerms(text){
  return receiptSearchKey(text).split(' ').filter(x=>x.length>1&&!/^(найди|найти|покажи|показать|чек|чеки|чека|где|когда|сколько|стоил|стоила|стоило|стоит|цена|купил|купила|покупал|покупала|покупали|последний|последняя|последний|раз|дешевле|дороже|история|цен|цены|товар|магазин|из|в|на|за|я|мы)$/.test(x));
}
function receiptTextMatches(haystack,terms){
  return terms.every(t=>haystack.includes(t)||(t.length>4&&haystack.includes(t.slice(0,-1)))||(t.length>6&&haystack.includes(t.slice(0,-2))));
}
function tryReceiptAnswer(text){
  const low=receiptSearchKey(text);
  if(!/(чек|стоил|стоила|стоило|цена|дешевле|дороже|покупал|покупала)/.test(low))return null;
  const rows=receiptProductHistory(),terms=receiptQueryTerms(text);
  const found=rows.filter(x=>terms.length?receiptTextMatches(x.key+' '+receiptSearchKey(x.merchant),terms):true);
  if(!rows.length)return 'История чеков пока пуста. Нажми кнопку чека рядом с микрофоном и отсканируй первую покупку.';
  if(!found.length)return `В сохранённых чеках ничего не нашёл по запросу «${esc(terms.join(' '))}».`;
  if(/дешевле|минимальн|самая низкая/.test(low)){
    const priced=found.filter(x=>x.price>0).sort((a,b)=>a.price-b.price);if(!priced.length)return 'Нашёл товар, но в старом чеке не сохранена его цена.';
    const x=priced[0];return `Самая низкая найденная цена: <b>${esc(x.name)} — ${fmtMoney(x.price)} ₽</b><br>${esc(x.merchant)} · ${fmtDate(x.date)}<br><button class="local-plan-edit" onclick="openReceiptDetails(${x.receiptId})">Открыть чек</button>`;
  }
  if(/сколько|стоил|стоила|стоило|цена|последн/.test(low)){
    const x=found.find(x=>x.price>0)||found[0],same=found.filter(y=>y.key===x.key&&y.price>0);
    if(!x.price)return `Нашёл <b>${esc(x.name)}</b>, но OCR не смог надёжно прочитать цену.<br>${esc(x.merchant)} · ${fmtDate(x.date)}<br><button class="local-plan-edit" onclick="openReceiptDetails(${x.receiptId})">Открыть и исправить чек</button>`;
    const prev=same[1],change=prev&&prev.price?Math.round((x.price-prev.price)/prev.price*100):0;
    return `<b>${esc(x.name)}</b> в последний раз стоил <b>${fmtMoney(x.price)} ₽</b><br>${esc(x.merchant)} · ${fmtDate(x.date)}${prev?`<br>Предыдущая цена: ${fmtMoney(prev.price)} ₽${change?` (${change>0?'+':''}${change}%)`:''}`:''}<br><button class="local-plan-edit" onclick="openReceiptDetails(${x.receiptId})">Открыть чек</button>`;
  }
  const unique=[];found.forEach(x=>{if(!unique.some(y=>y.receiptId===x.receiptId))unique.push(x);});
  return `Нашёл ${unique.length} ${unique.length===1?'чек':'чека'}:<br>${unique.slice(0,8).map(x=>`• <button class="local-plan-edit" onclick="openReceiptDetails(${x.receiptId})">${esc(x.merchant)} · ${fmtDate(x.date)}</button> — ${esc(x.name)}${x.price?' '+fmtMoney(x.price)+' ₽':''}`).join('<br>')}`;
}
function localPlanHTML(plan){
  const icons={task:'✓',expense:'−₽',income:'+₽',note:'▤',shopping:'🛒',habit:'↻'};
  let html='<div class="local-plan"><div class="local-plan-head">Я разобрал фразу</div><div class="local-plan-sub">Проверь и только потом сохрани. Всё обработано на устройстве.</div>';
  plan.actions.forEach((a,i)=>{html+=`<div class="local-plan-item" id="local-plan-${i}" style="${a._removed?'display:none':''}"><div class="local-plan-icon">${icons[a.type]||'✓'}</div><div><div class="local-plan-title">${esc(a.title||a.desc||a.source||'Действие')}</div><div class="local-plan-meta">${esc(localPlanMeta(a))}${a._edited?' · исправлено':''}</div></div><button class="local-plan-edit" onclick="editLocalPlanItem(${i})" aria-label="Исправить">${ICONS.edit}</button><button class="local-plan-del" onclick="removeLocalPlanItem(${i})" aria-label="Убрать">×</button></div>`;});
  if(plan.unknown.length)html+=`<div class="local-plan-sub">Не уверен: «${esc(plan.unknown.join(' · '))}» — этот фрагмент не сохраню.</div>`;
  html+='<div class="local-plan-actions"><button class="local-plan-cancel" onclick="cancelLocalPlan()">Отмена</button><button class="local-plan-save" onclick="confirmLocalPlan()">Сохранить всё</button></div></div>';
  return html;
}
function showLocalPlan(plan){
  pendingLocalPlan=plan;
  aiAddMsg('ai',localPlanHTML(plan));
}
function refreshLocalPlanPreview(){
  const box=document.querySelector('.local-plan');
  if(box&&pendingLocalPlan)box.outerHTML=localPlanHTML(pendingLocalPlan);
}
function removeLocalPlanItem(i){
  if(!pendingLocalPlan||!pendingLocalPlan.actions[i])return;
  pendingLocalPlan.actions[i]._removed=true;const el=document.getElementById('local-plan-'+i);if(el)el.style.display='none';
}
function cancelLocalPlan(){if(!pendingLocalPlan)return;pendingLocalPlan=null;document.querySelector('.local-plan')?.closest('.ai-msg')?.remove();aiAddMsg('ai','Хорошо, ничего не сохраняю.');}
let localEditIndex=-1;
function editLocalPlanItem(i){
  if(!pendingLocalPlan||!pendingLocalPlan.actions[i])return;
  localEditIndex=i;
  const a=pendingLocalPlan.actions[i];
  document.getElementById('local-edit-body').innerHTML=`<div class="field"><label>Что распознано</label><select id="local-edit-type" onchange="renderLocalEditFields()">
    <option value="task" ${a.type==='task'?'selected':''}>Дело</option><option value="shopping" ${a.type==='shopping'?'selected':''}>Покупки</option>
    <option value="expense" ${a.type==='expense'?'selected':''}>Расход</option><option value="income" ${a.type==='income'?'selected':''}>Доход</option>
    <option value="note" ${a.type==='note'?'selected':''}>Заметка</option><option value="habit" ${a.type==='habit'?'selected':''}>Привычка</option></select></div><div id="local-edit-fields"></div>`;
  renderLocalEditFields(a);
  document.getElementById('modal-local-edit').classList.add('on');
}
function renderLocalEditFields(source){
  const old=source||pendingLocalPlan?.actions[localEditIndex]||{};
  const type=document.getElementById('local-edit-type')?.value||old.type||'task';
  const body=document.getElementById('local-edit-fields');if(!body)return;
  const date=old.date||todayKey(),time=old.time||'';
  if(type==='task'){
    body.innerHTML=`<div class="field"><label>Название</label><input id="le-title" value="${esc(old.title||old.desc||'')}"></div>
      <div class="field"><label>Категория</label><select id="le-module">${getCats().map(c=>`<option value="${esc(c.id)}" ${c.id===(old.module||'personal')?'selected':''}>${c.emoji} ${esc(c.name)}</option>`).join('')}</select></div>
      <div class="two-col"><div class="field"><label>Дата</label><input id="le-date" type="date" min="${todayKey()}" value="${esc(date)}" onchange="syncLocalEditTimeConstraints()"></div><div class="field"><label>Время</label><input id="le-time" type="time" min="${date===todayKey()?taskTimeFloor():''}" value="${esc(time)}"></div></div>
      <div class="two-col"><div class="field"><label>Оценка времени</label><select id="le-duration">${[15,30,45,60,90,120].map(n=>`<option value="${n}" ${Number(old.duration||30)===n?'selected':''}>${n} мин</option>`).join('')}</select></div><div class="field"><label>Энергия</label><select id="le-energy"><option value="low" ${old.energy==='low'?'selected':''}>Низкая</option><option value="medium" ${!old.energy||old.energy==='medium'?'selected':''}>Средняя</option><option value="high" ${old.energy==='high'?'selected':''}>Высокая</option></select></div></div>
      <div class="field"><label>Повтор</label><select id="le-repeat"><option value="">Без повтора</option><option value="daily" ${old.repeat==='daily'?'selected':''}>Каждый день</option><option value="weekly" ${old.repeat==='weekly'?'selected':''}>Каждую неделю</option><option value="monthly" ${old.repeat==='monthly'?'selected':''}>Каждый месяц</option></select></div>`;
  }else if(type==='expense'){
    body.innerHTML=`<div class="field"><label>Сумма ₽</label><input id="le-amount" type="number" inputmode="decimal" value="${Number(old.amount||0)}"></div>
      <div class="field"><label>Категория</label><select id="le-exp-cat">${getExpCats().map(c=>`<option value="${esc(c.name)}" ${c.name===(old.category||'Прочее')?'selected':''}>${c.i} ${esc(c.name)}</option>`).join('')}</select></div>
      <div class="field"><label>Комментарий</label><input id="le-desc" value="${esc(old.desc||old.title||'')}"></div><div class="field"><label>Дата</label><input id="le-date" type="date" value="${esc(date)}"></div>`;
  }else if(type==='income'){
    body.innerHTML=`<div class="field"><label>Сумма ₽</label><input id="le-amount" type="number" inputmode="decimal" value="${Number(old.amount||0)}"></div>
      <div class="field"><label>Источник</label><select id="le-source">${['Зарплата','Аванс','Премия','Подработка','Продажа','Прочее'].map(x=>`<option ${x===(old.source||'Зарплата')?'selected':''}>${x}</option>`).join('')}</select></div>
      <div class="field"><label>Дата</label><input id="le-date" type="date" value="${esc(date)}"></div>`;
  }else if(type==='shopping'){
    body.innerHTML=`<div class="field"><label>Позиции через запятую</label><textarea id="le-items">${esc((old.items||[old.title||'']).join(', '))}</textarea></div>`;
  }else if(type==='note'){
    body.innerHTML=`<div class="field"><label>Заголовок</label><input id="le-title" value="${esc(old.title||'Заметка')}"></div><div class="field"><label>Текст</label><textarea id="le-note-text">${esc(old.text||old.title||'')}</textarea></div>`;
  }else{
    body.innerHTML=`<div class="field"><label>Название привычки</label><input id="le-title" value="${esc(old.title||old.desc||'')}"></div>
      <div class="two-col"><div class="field"><label>Первый день</label><input id="le-date" type="date" value="${esc(date)}"></div><div class="field"><label>Время</label><input id="le-time" type="time" value="${esc(time)}"></div></div>
      <div class="field"><label>Ритм</label><select id="le-repeat"><option value="daily" ${old.repeat!=='weekly'&&old.repeat!=='monthly'?'selected':''}>Каждый день</option><option value="weekly" ${old.repeat==='weekly'?'selected':''}>Каждую неделю</option><option value="monthly" ${old.repeat==='monthly'?'selected':''}>Каждый месяц</option></select></div>`;
  }
}
function syncLocalEditTimeConstraints(){const d=document.getElementById('le-date'),t=document.getElementById('le-time');if(d&&t)t.min=d.value===todayKey()?taskTimeFloor():'';}
function saveLocalPlanEdit(){
  if(localEditIndex<0||!pendingLocalPlan?.actions[localEditIndex])return;
  const old=pendingLocalPlan.actions[localEditIndex],type=document.getElementById('local-edit-type').value;
  let a={type,_source:old._source||'',_edited:true};
  if(type==='task'){
    a.title=document.getElementById('le-title').value.trim()||'Дело';a.module=document.getElementById('le-module').value;
    a.date=document.getElementById('le-date').value||todayKey();a.time=document.getElementById('le-time').value;
    if(isPastTaskSchedule(a.date,a.time)){toast('Нельзя поставить прошедшее время');return;}
    a.repeat=document.getElementById('le-repeat').value;a.pri=old.pri||'Y';a.duration=Number(document.getElementById('le-duration').value)||30;a.energy=document.getElementById('le-energy').value||'medium';a._learnModule=old.type!=='task'||old.module!==a.module;
  }else if(type==='expense'){
    a.amount=Number(document.getElementById('le-amount').value)||0;a.category=document.getElementById('le-exp-cat').value;
    a.desc=document.getElementById('le-desc').value.trim();a.date=document.getElementById('le-date').value||todayKey();
    a._learnExpenseCategory=old.type!=='expense'||old.category!==a.category;
  }else if(type==='income'){
    a.amount=Number(document.getElementById('le-amount').value)||0;a.source=document.getElementById('le-source').value;a.date=document.getElementById('le-date').value||todayKey();
  }else if(type==='shopping'){
    a.items=document.getElementById('le-items').value.split(/[,\n]+/).map(x=>x.trim()).filter(Boolean);a.title=a.items.join(', ');
  }else if(type==='note'){
    a.title=document.getElementById('le-title').value.trim()||'Заметка';a.text=document.getElementById('le-note-text').value.trim();a.date=old.date||todayKey();
  }else{
    a.title=document.getElementById('le-title').value.trim()||'Привычка';a.date=document.getElementById('le-date').value||todayKey();
    a.time=document.getElementById('le-time').value;a.repeat=document.getElementById('le-repeat').value;
  }
  pendingLocalPlan.actions[localEditIndex]=a;closeLocalPlanEdit();refreshLocalPlanPreview();toast('Исправление применено');
}
function closeLocalPlanEdit(){localEditIndex=-1;document.getElementById('modal-local-edit').classList.remove('on');}
function confirmLocalPlan(){
  if(!pendingLocalPlan)return;
  const plan=pendingLocalPlan;pendingLocalPlan=null;
  const created=[];
  plan.actions.filter(a=>!a._removed).forEach(a=>{
    learnLocalAction(a);
    if(a.type==='shopping'){
      addShoppingItems(a.items,'assistant');created.push({type:'shopping',data:a});return;
    }
    if(a.type==='habit'){
      const h=getHabits();h.push({id:'h'+Date.now()+Math.floor(Math.random()*999),name:a.title,icon:'✨',log:{}});saveHabits(h);
      if(a.time){const task={type:'task',title:a.title,date:a.date,time:a.time,module:'personal',pri:'Y',repeat:a.repeat};applyActionReturn(task);}
      created.push({type:'habit',data:a});return;
    }
    const id=applyActionReturn(a);created.push({type:a.type,id,data:a});
  });
  document.querySelector('.local-plan')?.closest('.ai-msg')?.remove();confetti();vibrate([30,50,30]);checkAchievements();
  aiAddMsg('ai',`✅ Готово. Сохранено действий: <b>${created.length}</b>`);
  refreshCurrentTab();
}

function commandTokens(text){
  const stop=new Set(['задачу','задача','дело','дела','встречу','перенеси','перенести','удали','удалить','отметь','выполненной','выполнено','сделанной','сегодня','завтра','послезавтра','понедельник','вторник','среду','четверг','пятницу','субботу','воскресенье','последнюю','последний','добавь','подзадачи','подзадачу']);
  return memoryTokens(text).filter(x=>!stop.has(x)).map(commandTokenStem);
}
function commandTokenStem(token){
  const value=String(token||'').toLowerCase().replace(/ё/g,'е');
  if(value.length<5)return value;
  return value.replace(/(?:ами|ями|ого|ему|ому|ыми|ими|ой|ей|ом|ем|ах|ях|у|ю|а|я|ы|и)$/,'')||value;
}
function findTaskForCommand(query){
  return findTaskCandidatesForCommand(query)[0]||null;
}
function findTaskCandidatesForCommand(query){
  const tasks=getTasks().filter(t=>!t.done);
  if(!tasks.length)return [];
  if(/^(?:его|её|ее|это|эту|его задачу|эту задачу|это дело)$/i.test(String(query||'').trim())&&assistantDialogue.lastTaskId){const remembered=tasks.find(t=>String(t.id)===String(assistantDialogue.lastTaskId));if(remembered)return [remembered];}
  if(/последн/.test(query.toLowerCase()))return [tasks.slice().sort((a,b)=>(b.id||0)-(a.id||0))[0]];
  const q=commandTokens(query),scored=[];
  tasks.forEach(t=>{
    const tt=commandTokens(t.title+' '+(t.desc||''));
    const overlap=q.reduce((n,x)=>n+(tt.some(y=>y===x||y.startsWith(x)||x.startsWith(y))?1:0),0);let score=overlap;
    if(String(t.title).toLowerCase().includes(query.toLowerCase().trim()))score+=3;
    if(overlap)scored.push({task:t,score,overlap});
  });
  if(!scored.length)return [];
  scored.sort((a,b)=>b.overlap-a.overlap||b.score-a.score||String(a.task.date||'').localeCompare(String(b.task.date||'')));
  const best=scored[0].overlap;
  return scored.filter(x=>x.overlap===best).map(x=>x.task);
}
function taskCommandQuery(text){
  return String(text).toLowerCase()
    .replace(/^(?:а\s+)?(?:теперь|тогда|ещ[её])\s+/,'')
    .replace(/^(?:пожалуйста\s+)?(?:перенеси|перенести|отметь|удали|удалить|измени|добавь)\s*/,'')
    .replace(/^(?:дело|задачу|задача)\s*/,'')
    .replace(/\s+(?:на|в)\s+(?:сегодня|завтра|послезавтра|понедельник|вторник|среду?|четверг|пятницу?|субботу?|воскресенье).*$/,'')
    .replace(/\s+(?:в|на)\s*\d{1,2}(?::\d{2})?.*$/,'')
    .replace(/\s+(?:выполненн\w*|сделанн\w*)$/,'').trim();
}
function taskOpState(t){
  if(!t)return '—';
  return `${esc(t.title||'Дело')}<br>${esc(t.date?fmtDate(t.date):'Без даты')}${t.time?' · '+esc(t.time):''}${t.done?' · Выполнено':''}`;
}
function expenseOpState(x){
  if(!x)return '—';
  return `${fmtMoney(x.amount)} ₽ · ${esc(x.category||'Прочее')}<br>${esc(x.date?fmtDate(x.date):'')}${x.desc?' · '+esc(x.desc):''}`;
}
function parseLocalManagement(text,forcedTaskId=null){
  text=String(text).replace(/^(?:а\s+)?(?:теперь|тогда|хорошо|ладно)\s+/i,'').replace(/^и\s+(?=(?:перенес|отмет|удал|измени|добав))/i,'');
  const trailingMove=text.match(/^(.+?)\s+(перенес\S*)\s+((?:на|за)\s+.+)$/i);
  if(trailingMove)text=`${trailingMove[2]} ${trailingMove[1]} ${trailingMove[3]}`;
  const low=text.toLowerCase().replace(/ё/g,'е'),ops=[];
  if(/^(?:не|не надо|не нужно)\s+(?:перенос|удал|отмеч|меняй|измен)/.test(low))return {error:'Понял, ничего менять не буду.'};
  if(/перенес\S*\s+(?:все\s+)?просроченн/.test(low)){
    const list=getTasks().filter(t=>isOverdue(t));
    if(!list.length)return {error:'Просроченных дел нет.'};
    ops.push({kind:'tasks_bulk_today',ids:list.map(x=>x.id),title:`Перенести просроченные дела: ${list.length}`,before:`${list.length} дел с прошедшей датой`,after:`Все на сегодня · ${fmtDate(todayKey())}`});
    return {ops};
  }
  if(/добав\S*\s+к\s+(?:делу|задаче)/.test(low)&&/подзадач|пункт/.test(low)){
    const m=text.match(/добав\S*\s+к\s+(?:делу|задаче)\s+(.+?)\s+(?:подзадач\S*|пункт\S*)\s*:?\s*(.+)$/i);
    if(m){
      const task=findTaskForCommand(m[1]);if(!task)return {error:`Не нашёл дело «${m[1]}».`};
      const items=m[2].split(/\s+и\s+|,\s*|;\s*/).map(x=>x.trim()).filter(Boolean);
      if(!items.length)return {error:'Не услышал названия подзадач.'};
      const after={...task,subs:[...(task.subs||[]),...items.map(t=>({t,done:false}))]};
      ops.push({kind:'task_update',id:task.id,title:'Добавить подзадачи',before:taskOpState(task),after:taskOpState(after)+`<br>+ ${items.map(esc).join(', ')}`,patch:{subs:after.subs}});
      return {ops};
    }
  }
  if(/измени\s+категори\S*\s+(?:последн\S*\s+)?(?:траты|расхода)/.test(low)){
    const all=(load().finance||[]).slice().sort((a,b)=>(b.id||0)-(a.id||0));const x=all[0];
    if(!x)return {error:'Расходов пока нет.'};
    const m=text.match(/\sна\s+([^,.;]+)$/i);if(!m)return {error:'Скажи новую категорию после слова «на».'};
    const wanted=m[1].trim();const found=getExpCats().find(c=>c.name.toLowerCase()===wanted.toLowerCase());
    const category=found?found.name:wanted.charAt(0).toUpperCase()+wanted.slice(1);
    ops.push({kind:'expense_update',id:x.id,title:'Изменить категорию расхода',before:expenseOpState(x),after:expenseOpState({...x,category}),patch:{category}});
    return {ops};
  }
  if(/удал\S*.*(?:расход|трат)/.test(low)){
    const amountM=low.match(/(\d[\d\s]*)\s*(?:р|руб|₽)?/);const amount=amountM?Number(amountM[1].replace(/\s/g,'')):0;
    const all=(load().finance||[]).slice().sort((a,b)=>(b.id||0)-(a.id||0));
    const x=amount?all.find(a=>Number(a.amount)===amount):all[0];
    if(!x)return {error:'Не нашёл подходящий расход.'};
    ops.push({kind:'expense_delete',id:x.id,title:'Удалить расход',before:expenseOpState(x),after:'Будет удалён'});
    return {ops};
  }
  if(/^(?:отмет\S*).*(?:выполн|сделан)/.test(low)){
    const task=findTaskForCommand(taskCommandQuery(text));if(!task)return {error:'Не нашёл подходящее активное дело.'};
    ops.push({kind:'task_update',id:task.id,title:'Выполнить дело',before:taskOpState(task),after:taskOpState({...task,done:true}),patch:{done:true}});
    return {ops};
  }
  if(/^удал\S*(?:\s+(?:дело|задачу))?/.test(low)&&!/(?:расход|трат)/.test(low)){
    const task=findTaskForCommand(taskCommandQuery(text));if(!task)return {error:'Не нашёл подходящее дело.'};
    ops.push({kind:'task_delete',id:task.id,title:'Удалить дело',before:taskOpState(task),after:'Будет удалено'});
    return {ops};
  }
  if(/^перенес\S*/.test(low)){
    const query=taskCommandQuery(text),candidates=forcedTaskId?getTasks().filter(t=>String(t.id)===String(forcedTaskId)&&!t.done):findTaskCandidatesForCommand(query);
    if(!candidates.length)return {error:'Не нашёл дело, которое нужно перенести.'};
    if(candidates.length>1)return {choice:{kind:'task_move',text,items:candidates.map(t=>({id:t.id,title:t.title,meta:`${fmtDate(t.date)}${t.time?' · '+t.time:''}`}))}};
    const task=candidates[0];
    const date=dateFromText(low),time=timeFromText(low)||task.time||'';
    if(isPastTaskSchedule(date,time))return {error:'Это время уже прошло. Назови будущее время или скажи «через час».'};
    ops.push({kind:'task_update',id:task.id,title:'Перенести дело',before:taskOpState(task),after:taskOpState({...task,date,time}),patch:{date,time}});
    return {ops};
  }
  if(/^измени\S*(?:\s+(?:дело|задачу|встречу|созвон))?/.test(low)){
    const query=taskCommandQuery(text),candidates=forcedTaskId?getTasks().filter(t=>String(t.id)===String(forcedTaskId)&&!t.done):findTaskCandidatesForCommand(query);
    if(!candidates.length)return {error:'Не нашёл подходящее активное дело. Назови часть названия, человека или дату.'};
    if(candidates.length>1)return {choice:{kind:'task_edit',text,items:candidates.map(t=>({id:t.id,title:t.title,meta:`${fmtDate(t.date)}${t.time?' · '+t.time:''}`}))}};
    const task=candidates[0],relative=relativeScheduleFromText(low),hasDate=/(?:сегодня|завтра|послезавтра|через\s+\d+\s+д|понедельник|вторник|сред|четверг|пятниц|суббот|воскрес)/.test(low);
    const explicitTime=timeFromText(low)||extractTime(low),date=relative?.date||(hasDate?dateFromText(low):task.date),time=relative?.time||explicitTime||task.time||'';
    if(isPastTaskSchedule(date,time))return {error:'Это время уже прошло. Назови будущее время или другую дату.'};
    const titleMatch=text.match(/(?:названи\S*|переименуй\S*)\s+(?:на\s+)?[«"]?(.+?)[»"]?$/i),patch={date,time};
    if(titleMatch&&!/\d{1,2}(?::|\-|\.)\d{2}/.test(titleMatch[1]))patch.title=titleMatch[1].trim();
    const after={...task,...patch};
    ops.push({kind:'task_update',id:task.id,title:'Изменить дело',before:taskOpState(task),after:taskOpState(after),patch});
    return {ops};
  }
  return null;
}
function localChoiceHTML(choice){
  return `<div class="local-choice"><div class="local-plan-head">Что именно изменить?</div><div class="local-plan-sub">Нашёл несколько актуальных совпадений. Выбери нужную запись.</div>${choice.items.map(x=>`<button class="smart-card" onclick="chooseLocalManagementItem(${jsArg(x.id)})"><span><b>${esc(x.title)}</b><small>${esc(x.meta||'')}</small></span><em>›</em></button>`).join('')}<button class="local-plan-cancel" onclick="cancelLocalManagementChoice()">Отмена</button></div>`;
}
function showLocalManagementChoice(choice){pendingLocalChoice=choice;aiAddMsg('ai',localChoiceHTML(choice));}
function cancelLocalManagementChoice(){pendingLocalChoice=null;document.querySelector('.local-choice')?.closest('.ai-msg')?.remove();aiAddMsg('ai','Изменение отменено.');}
function chooseLocalManagementItem(id){
  if(!pendingLocalChoice)return;const choice=pendingLocalChoice;pendingLocalChoice=null;document.querySelector('.local-choice')?.closest('.ai-msg')?.remove();
  const result=parseLocalManagement(choice.text,id);if(result?.ops)showLocalOps(result);else aiAddMsg('ai','Не удалось подготовить изменение — уточни команду.');
}
function localOpsHTML(plan,demo=false){
  let html='<div class="local-ops"><div class="local-plan-head">Подтвердить изменения</div><div class="local-op-warn">Lumo ничего не изменит, пока ты не нажмёшь «Применить».</div>';
  plan.ops.forEach(op=>{html+=`<div class="local-op"><div class="local-op-title">${esc(op.title)}</div><div class="local-op-diff"><div class="local-op-side"><small>Было</small>${op.before}</div><div class="local-op-arrow">→</div><div class="local-op-side"><small>Станет</small>${op.after}</div></div></div>`;});
  html+=demo?'<div class="local-op-warn">Учебный пример — кнопки отключены.</div></div>':'<div class="local-plan-actions"><button class="local-plan-cancel" onclick="cancelLocalOps()">Отмена</button><button class="local-plan-save" onclick="confirmLocalOps()">Применить</button></div></div>';
  return html;
}
function showLocalOps(plan){pendingLocalOps=plan;const op=plan?.ops?.find(x=>x.id);if(op)assistantDialogue.lastTaskId=op.id;aiAddMsg('ai',localOpsHTML(plan));}
function cancelLocalOps(){if(!pendingLocalOps)return;pendingLocalOps=null;document.querySelector('.local-ops')?.closest('.ai-msg')?.remove();aiAddMsg('ai','Изменения отменены.');}
function confirmLocalOps(){
  if(!pendingLocalOps||!Array.isArray(pendingLocalOps.ops))return;
  let tasks=getTasks(),data=load();
  pendingLocalOps.ops.forEach(op=>{
    if(op.kind==='task_update'){const t=tasks.find(x=>x.id===op.id);if(t)Object.assign(t,op.patch);}
    else if(op.kind==='task_delete')tasks=tasks.filter(x=>x.id!==op.id);
    else if(op.kind==='tasks_bulk_today')tasks.forEach(t=>{if(op.ids.includes(t.id)){t.date=todayKey();if(t.time&&isPastTaskSchedule(t.date,t.time))t.time='';}});
    else if(op.kind==='expense_update'){const x=(data.finance||[]).find(a=>a.id===op.id);if(x){Object.assign(x,op.patch);if(op.patch.category&&!getExpCats().some(c=>c.name===op.patch.category)){const cats=getExpCats();cats.splice(cats.length-1,0,{name:op.patch.category,i:'📦',c:CAT_COLORS[cats.length%CAT_COLORS.length]});data.expcats=cats;}}}
    else if(op.kind==='expense_delete')data.finance=(data.finance||[]).filter(x=>x.id!==op.id);
  });
  data.tasks=tasks;save(data);syncPushData();scheduleAllTimeouts();updateAppBadge();
  const n=pendingLocalOps.ops.length;pendingLocalOps=null;confetti();vibrate([30,40,30]);
  aiAddMsg('ai',`✅ Изменения применены: <b>${n}</b>`);refreshCurrentTab();
}

function tryLocalCommand(text){
  const parts=text.split(/[\n,;]|(?:\s+(?:после|потом|затем|также|так[- ]?же|ещё|еще|а)\s+)/i).map(s=>s.trim()).filter(s=>s.length>2);
  let results=[];let anyDone=false;
  parts.forEach(part=>{
    const low=part.toLowerCase();
    if(/зарплат|аванс|преми|получил|пришл\w* деньг|доход|заработал/.test(low)){
      // сначала пробуем "100000 руб", если нет — просто любое число в тексте
      let am=low.match(/(\d[\d\s]*)\s*(?:р|руб|₽|тыс)/);
      if(!am)am=low.match(/(\d[\d\s]{2,})/);        // 🔧 просто число (от 3 цифр)
      if(!am)am=low.match(/(\d+)/);                  // 🔧 или любое число
      let amount=am?Number(am[1].replace(/\s/g,'')):0;
      if(/тыс/.test(low)&&amount<1000)amount*=1000;
      let src='Зарплата';
      if(/аванс/.test(low))src='Аванс';else if(/преми/.test(low))src='Премия';
      const d=load();if(!d.income)d.income=[];
      d.income.push({id:Date.now()+Math.floor(Math.random()*9999),date:todayKey(),desc:part,amount:amount||0,source:src});
      save(d);anyDone=true;
      results.push(amount?`💵 Доход: <b>+${fmtMoney(amount)}₽</b> (${src})`:`💵 Отметил доход (${src}). Сумму допиши в Финансах`);
      return;
    }
    const expM =
  low.match(/(\d[\d\s]*)\s*(?:р|руб|₽)/i) ||
  low.match(/(?:на|за|потрат\w*)[\s\S]*?(\d[\d\s]*)/i);
    if(expM&&/(потрат|купил|заплат|отдал|ушло|на\s+\d|за\s+\d)/.test(low)){
      const amount=Number(expM[1].replace(/\s/g,''));
      if(amount){
        let cat=null;
        getExpCats().forEach(c=>{if(low.includes(c.name.toLowerCase()))cat=c.name;});
        if(!cat){
          if(/вод[аыу]|продукт|еда|магаз|хлеб|молоко/.test(low))cat='Продукты';
         else if(/бензин|топлив|заправ/.test(low))cat='Топливо';
         else if(/кафе|ресторан|обед|кофе/.test(low))cat='Кафе';
         else if(/квартир|аренд|ипотек|квартплат|жиль|съём|съем/.test(low))cat=findOrNull('Жильё');   // ← ДОБАВЬ
         else if(/коммунал|свет|электр|газ|отоплен|интернет/.test(low))cat=findOrNull('Коммуналка');  // ← ДОБАВЬ
         else if(/подгуз|памперс|детск|малыш/.test(low))cat=findOrNull('Дети');
         else if(/корм|собак|кошк|кот|питом|животн|ветеринар/.test(low))cat=findOrNull('Питомцы');
        }
        if(!cat){
          const guess=/корм|собак|кошк|питом/.test(low)?'Питомцы':/подгуз|детск/.test(low)?'Дети':'Прочее';
          pendingCat={amount,desc:part,guess};
          results.push(`🤔 Трата <b>${fmtMoney(amount)}₽</b> — не нашёл категорию. Создать «<b>${guess}</b>»? Напиши «да» или название`);
          anyDone=true;return;
        }
        const d=load();if(!d.finance)d.finance=[];
        d.finance.push({id:Date.now()+Math.floor(Math.random()*9999),date:todayKey(),desc:part,amount,category:cat});
        save(d);checkBudgetAlert(cat);anyDone=true;
        results.push(`💰 Расход: <b>${fmtMoney(amount)}₽</b> — ${catStyleOf(cat).i} ${cat}`);
        return;
      }
    }
    if(/напомн|создай|добавь|закинь|скинь|нужно|надо|запланируй|встреч|поставь|запиши|не забыть|сходить|съездить|к \d|в больниц/.test(low)){
      const date=dateFromText(low);
      const time=timeFromText(low);
      let title=part
        .replace(/напомни|создай дело|создай|добавь дело|добавь|закинь дело|закинь|скинь|нужно|надо|запланируй|поставь дело|поставь|запиши дело|запиши|не забыть|мне|у меня/gi,'')
        .replace(/послезавтра|завтра|сегодня/gi,'')
        .replace(/в понедельник|во вторник|в среду|в четверг|в пятницу|в субботу|в воскресенье|в пн|во вт|в ср|в чт|в пт|в сб|в вс/gi,'')
        .replace(/(?:в|к|на)\s*\d{1,2}[:.\-]?\d{0,2}(?:\s*ч)?/gi,'')
        .replace(/\s+/g,' ').trim();
      if(title.length>1){
        const t=getTasks();
        const obj={id:Date.now()+Math.floor(Math.random()*9999),title:title.charAt(0).toUpperCase()+title.slice(1),module:'personal',date,time,desc:'',pri:'Y',done:false};
        t.push(obj);setTasks(t);scheduleLocalTimeout(obj);anyDone=true;
        results.push(`✅ <b>${esc(obj.title)}</b> — 📅 ${fmtDate(date)}${time?' 🕐 '+time:''}`);
        return;
      }
    }
  });
  if(anyDone){checkAchievements();return results.join('<br><br>');}
  return null;
}
function buildContext(){
  const tasks=getTasks();const tk=todayKey();
  const today=tasks.filter(t=>t.date===tk&&!t.done);
  const over=tasks.filter(t=>isOverdue(t));
  const s=getExpenseStats();
  let ctx=`Сегодня ${new Date().toLocaleDateString('ru-RU',{weekday:'long',day:'numeric',month:'long'})}. `;
  ctx+=`Дел на сегодня: ${today.length}`;
  if(today.length)ctx+=' ('+today.slice(0,5).map(t=>t.title).join(', ')+')';
  ctx+='. ';
  if(over.length)ctx+=`Просрочено: ${over.length}. `;
  ctx+=`Расходы за месяц: ${fmtMoney(s.total)}₽, доходы: ${fmtMoney(s.income)}₽, баланс: ${fmtMoney(s.balance)}₽. `;
  if(s.byCat.length)ctx+=`Топ трат: ${s.byCat.slice(0,3).map(x=>x.name+' '+fmtMoney(x.sum)+'₽').join(', ')}. `;
  const w=weatherSummaryText();if(w)ctx+='Погода: '+w.replace(/\n/g,' ')+' ';
  return ctx;
}

async function aiSend(textOverride=null){
  if(Date.now() < _cooldownUntil){
    const sec=Math.ceil((_cooldownUntil-Date.now())/1000);
    toast(`⏳ Подожди ${sec} сек перед следующим запросом`);
    return;
  }
  const inp=document.getElementById('ai-input'),hasOverride=typeof textOverride==='string';
  const rawText=(hasOverride?textOverride:inp.value).trim();if(!rawText)return;
  let text=learnedAssistantPhrase(rawText)||rawText;
  window._lastUserText=rawText;
  if(!hasOverride||inp.value.trim()===rawText)inp.value='';aiAddMsg('user',esc(rawText));

  const teachingLow=rawText.toLowerCase().replace(/ё/g,'е').trim();
  if(assistantDialogue.teachingStage==='awaitingPhrase'){
    if(/^(?:отмена|отмени|не надо)$/.test(teachingLow)){assistantDialogue.teachingStage='';aiAddMsg('ai','Хорошо, режим обучения закрыт.');return;}
    assistantDialogue.teachingStage='';assistantDialogue.pendingTeachPhrase=rawText;
    aiAddMsg('ai',`Хорошо, запоминаем фразу «<b>${esc(rawText)}</b>». Теперь напиши, что она должна означать, обычной понятной командой. Например: «добавь привычку читать каждый день» или «перенеси встречу на завтра в 10».`);
    return;
  }
  if(/^(?:давай\s+)?(?:я\s+)?тебя\s+(?:научу|обучу)|^хочу\s+научить\s+тебя|^режим\s+обучения/.test(teachingLow)){
    assistantDialogue.teachingStage='awaitingPhrase';assistantDialogue.pendingTeachPhrase='';
    aiAddMsg('ai','Давай. Сначала отправь фразу, которую я сейчас понимаю неправильно. Следующим сообщением объясни, какое действие она должна выполнять. Я покажу результат перед сохранением и только после успешного разбора запомню правило. Для выхода напиши «отмена».');
    return;
  }

  if(pendingLocalPlan||pendingLocalOps){
    const low=text.toLowerCase().trim();
    if(/^(да|давай|сохрани|сохранить|примени|применить|подтверждаю|верно|все верно|всё верно)$/.test(low)){pendingLocalPlan?confirmLocalPlan():confirmLocalOps();return;}
    if(/^(нет|отмена|отмени|не надо|не сохраняй|не применяй)$/.test(low)){pendingLocalPlan?cancelLocalPlan():cancelLocalOps();return;}
    aiAddMsg('ai','Предыдущий разбор ещё ждёт решения. Напиши «сохрани» или «отмени», либо используй кнопки.');
    return;
  }

  if(pendingCat){
    const low=text.toLowerCase().trim();
    let catName=pendingCat.guess;
    if(/^(да|давай|ага|ок|создай|конечно|угу)$/.test(low)){catName=pendingCat.guess;}
    else if(low!=='нет'&&low.length>1&&low.length<20){catName=text.trim();}
    if(low!=='нет'){
      const cats=getExpCats();
      if(!cats.some(c=>c.name===catName)){
        const color=CAT_COLORS[cats.length%CAT_COLORS.length];
        const emoji=/питом|собак|корм/.test(catName.toLowerCase())?'🐶':/дет|подгуз/.test(catName.toLowerCase())?'👶':'📦';
        cats.splice(cats.length-1,0,{name:catName,i:emoji,c:color});
        setExpCats(cats);
      }
      const d=load();if(!d.finance)d.finance=[];
      d.finance.push({id:Date.now()+Math.floor(Math.random()*9999),date:todayKey(),desc:pendingCat.desc,amount:pendingCat.amount,category:catName});
      save(d);checkBudgetAlert(catName);
      aiAddMsg('ai',`✅ Создал категорию «<b>${esc(catName)}</b>» и записал трату <b>${fmtMoney(pendingCat.amount)}₽</b>`);
      pendingCat=null;confetti();return;
    }
    pendingCat=null;aiAddMsg('ai','Ок, не создаю 👌');return;
  }

  if(assistantDialogue.pendingTeachPhrase&&/^(?:отмена|отмени|не надо|не учи)$/i.test(rawText)){
    assistantDialogue.pendingTeachPhrase='';aiAddMsg('ai','Хорошо, эту формулировку не запоминаю.');return;
  }

  if(isWeatherQuery(text)){
    const w=weatherSummaryText();
    if(w){finishAssistantTeaching(text);aiAddMsg('ai','🌤️ '+w.replace(/\n/g,'<br>'));return;}
  }

  const management=parseLocalManagement(text);
  if(management){
    if(!management.error)finishAssistantTeaching(text);
    if(management.choice)showLocalManagementChoice(management.choice);
    else if(management.error)aiAddMsg('ai','🤔 '+esc(management.error));
    else showLocalOps(management);
    return;
  }

  const dialogueAnswer=tryLocalDialogue(text);
  if(dialogueAnswer){finishAssistantTeaching(text);aiAddMsg('ai',dialogueAnswer);return;}

  const localPlan=parseLocalPlan(text);
  if(localPlan.actions.length){
    finishAssistantTeaching(text);
    showLocalPlan(localPlan);
    return;
  }

  const localAnswer=tryLocalAnswer(text);
  if(localAnswer){finishAssistantTeaching(text);aiAddMsg('ai',localAnswer);return;}

  if(assistantDialogue.pendingTeachPhrase)aiAddMsg('ai','Пока не смог разобрать объяснение. Попробуй одной конкретной командой: что сделать, с чем, когда или на какую сумму. Например: «добавь привычку пить воду каждый день». Для выхода напиши «отмена».');
  else aiAddMsg('ai','Я понял слова, но не вижу конкретного действия или вопроса по данным Lumo. Можешь написать, например: «что у нас сегодня по делам?», «добавь привычку читать каждый день» или «завтра позвонить Егору в 10». Если хочешь научить меня своей фразе, напиши «я тебя научу».');
}

async function aiParse(text){return parseLocalPlan(text);}
  /* ===== НЕДОСТАЮЩИЕ ФУНКЦИИ ДВИЖКА ИИ ===== */
let _cooldownUntil = 0;

async function fetchWithRetry(url, options, retries=1, delay=800){
  try{
    return await fetch(url, options);
  }catch(err){
    if(retries>0){
      await new Promise(r=>setTimeout(r, delay));
      return fetchWithRetry(url, options, retries-1, delay);
    }
    throw err;
  }
}

function extractTime(text){
  if(!text)return '';
  const relative=relativeScheduleFromText(text);if(relative)return relative.time;
  let m=text.match(/(\b[01]?\d|2[0-3])\s*[:.\-\s]\s*(\d{2})\b/);
  if(m){
    let h=Math.min(23,+m[1]), mi=Math.min(59,+m[2]);
    return String(h).padStart(2,'0')+':'+String(mi).padStart(2,'0');
  }
  m=text.match(/\bв?\s*([01]?\d|2[0-3])\s*(утра|вечера|дня|час|часов|часа)?\b/i);
  if(m&&/утра|вечера|дня|час|часов|часа/i.test(text)){
    let h=+m[1];
    if(/вечера/i.test(text)&&h<12)h+=12;
    return String(Math.min(23,h)).padStart(2,'0')+':00';
  }
  return '';
}

function renderResultList(created){
  const chat=document.getElementById('ai-chat');
  const div=document.createElement('div');
  div.className='ai-msg ai';
  let rows='<div class="bubble"><b>✅ Создано:</b>';
  created.forEach(c=>{
    const d=c.data;
    let line='';
    if(c.type==='task'){
      line=`📋 ${esc(d.title||'Дело')}`;
      if(d.date)line+=` · ${fmtDate(d.date)}`;
      if(d.time)line+=` 🕐 ${esc(d.time)}`;
    }else if(c.type==='expense'){
      const st=catStyleOf(d.category);
      line=`${st.i} -${fmtMoney(d.amount)}₽ · ${esc(d.category||'Прочее')}`;
    }else if(c.type==='income'){
      line=`📈 +${fmtMoney(d.amount)}₽ · ${esc(d.source||'Доход')}`;
    }
    rows+=`<br><span id="resrow-${c.id}">${line} <span onclick="delFromResult('${c.type}',${c.id})" style="cursor:pointer;opacity:.6">🗑</span></span>`;
  });
  rows+='</div>';
  div.innerHTML=rows;
  chat.appendChild(div);chat.scrollTop=chat.scrollHeight;
  renderNav();renderStreak();
  if(currentTab==='finance')renderFinance();
  else if(currentTab==='calendar')renderCalendar();
  else if(currentTab!=='ai')render();
}

function delFromResult(type,id){
  const d=load();
  if(type==='task')d.tasks=(d.tasks||[]).filter(x=>x.id!==id);
  else if(type==='expense')d.finance=(d.finance||[]).filter(x=>x.id!==id);
  else if(type==='income')d.income=(d.income||[]).filter(x=>x.id!==id);
  save(d);
  const row=document.getElementById('resrow-'+id);
  if(row){row.style.opacity='.4';row.innerHTML='<s>Удалено</s>';}
  vibrate(20);toast('Удалено 🗑');
  if(currentTab==='finance')renderFinance();
  else if(currentTab==='calendar')renderCalendar();
  else if(currentTab!=='ai')render();
}


// Рекурсивно достаём все действия из любой структуры ответа ИИ
function collectActions(r){
  let out=[];
  const validTypes=['task','expense','income','chat'];
  function walk(node){
    if(!node)return;
    if(Array.isArray(node)){node.forEach(walk);return;}
    if(typeof node==='object'){
      // это готовое действие?
      if(node.type&&validTypes.includes(node.type)){out.push(node);return;}
      // иначе обходим все поля (items, tasks, expenses, income и т.п.)
      Object.keys(node).forEach(k=>walk(node[k]));
    }
  }
  walk(r);
  return out;
}
  
function handleAIResult(r){
  let items=collectActions(r);

  const raw=window._lastUserText||'';
  items.forEach(it=>{
    if(it.type==='task'){
      if(/через\s+\d/i.test(raw)){
        const t=extractTime(raw);
        if(t){it.time=t;it.date=todayKey();}
      }else if(!it.time){
        const t=extractTime(raw);
        if(t)it.time=t;
      }
    }
  });

    const actions=[];
  items.forEach(it=>{
    if(it.type==='chat')aiAddMsg('ai',esc(it.reply||it.chat||'👍'));
    else actions.push(it);
  });

  if(!actions.length){
    if(!items.some(it=>it.type==='chat'))aiAddMsg('ai',esc((r&&r.chat)||'Не понял 🤔 Попробуй иначе.'));
    return;
  }

  // создаём всё и запоминаем id для удаления
  const created=[];
  actions.forEach(a=>{
    const newId=applyActionReturn(a);
    created.push({type:a.type,id:newId,data:a});
  });

  confetti();vibrate([30,50,30]);checkAchievements();

  // всегда синхронизируем месяц финансов с сегодняшним
  finDate=new Date();

  renderResultList(created);
}

// создаёт запись и возвращает её id
function applyActionReturn(r){
  if(!r)return null;
  const id=Date.now()+Math.floor(Math.random()*100000);

  // 🔧 нормализуем дату: если ИИ вернул слово ("сегодня","завтра","понедельник") — конвертим в ГГГГ-ММ-ДД
  let fixedDate=normalizeDate(r.date);

  if (r.type === 'task') {
  const t = getTasks();

  const task = {
    id,
    title: r.title || 'Дело',
    module: getCats().some(c => c.id === r.module)
      ? r.module
      : 'personal',
    date: fixedDate,
    time: isPastTaskSchedule(fixedDate,r.time||'') ? '' : (r.time || ''),
    desc: r.desc || '',
    pri: r.pri || 'Y',
    repeat: r.repeat || '',
    subs: [],
    done: false
  };

  t.push(task);
  setTasks(t);
  scheduleLocalTimeout(task);
  }else if(r.type==='expense'){
    const d=load();if(!d.finance)d.finance=[];
    let cat=(r.category||'Прочее').trim();
    if(cat && !getExpCats().some(c=>c.name===cat)){
      const cats=getExpCats();
      const color=CAT_COLORS[cats.length%CAT_COLORS.length];
      const low=cat.toLowerCase();
      const emoji=/питом|собак|кошк|корм|животн|ветеринар/.test(low)?'🐶'
        :/дет|подгуз|малыш/.test(low)?'👶'
        :/здоров|лекарств|аптек|таблет/.test(low)?'💊'
        :/книг|образован|учеб/.test(low)?'📚'
        :/красот|космет|салон|стрижк/.test(low)?'💇'
        :'📦';
      cats.splice(cats.length-1,0,{name:cat,i:emoji,c:color});
      setExpCats(cats);
    }
    if(!cat)cat='Прочее';
    d.finance.push({id,date:fixedDate||todayKey(),desc:r.desc||'',amount:normAmount(r.amount),category:cat});
    save(d);checkBudgetAlert(cat);
  }else if(r.type==='income'){
    const d=load();if(!d.income)d.income=[];
    d.income.push({id,date:fixedDate||todayKey(),desc:'',amount:normAmount(r.amount),source:r.source||'Доход'});
    save(d);
  }else if(r.type==='note'){
    const d=load();if(!d.notes)d.notes=[];
    d.notes.push({id,title:r.title||'Заметка',text:r.text||r.title||'',date:fixedDate||todayKey(),color:NOTE_COLORS[0],pinned:false,updatedAt:Date.now()});
    save(d);
  }
  return id;
}

// 🔧 Превращает "сегодня"/"завтра"/дни недели/пустое → в дату ГГГГ-ММ-ДД
function normalizeDate(raw){
  if(!raw)return todayKey();
  const s=String(raw).trim().toLowerCase();
  // уже правильный формат ГГГГ-ММ-ДД?
  if(/^\d{4}-\d{2}-\d{2}$/.test(s))return s;
  // слова → используем существующий парсер dateFromText
  return dateFromText(s);
}
  // Разовая починка старых записей, где дата = слово
function fixBrokenDates(){
  const d=load();let changed=false;
  const fix=arr=>{
    (arr||[]).forEach(x=>{
      if(x.date && !/^\d{4}-\d{2}-\d{2}$/.test(x.date)){
        x.date=dateFromText(String(x.date).toLowerCase());
        changed=true;
      }
    });
  };
  fix(d.tasks);fix(d.finance);fix(d.income);
  if(changed){save(d);}
}
  /* ===== ЭКРАН "ЕЩЁ" ===== */
function renderMore(){
  const view=document.getElementById('view');
  const cfg=getNavConfig();
  // разделы, которых НЕТ в нижнем меню — показываем тут
  const hidden=NAV_SECTIONS.filter(s=>!cfg.includes(s.id));
  const openers={
    today:"switchTab('today')",
    all:"switchTab('all')",
    finance:"switchTab('finance')",
    ai:"switchTab('ai')",
    calendar:"switchTab('calendar')",
    habits:"switchTab('habits')",
    shopping:"openShopping()",
    family:"openFamily()",
    ach:"openAchievements()",
    matrix:"switchTab('matrix')",
    notes:"switchTab('notes')"
  };
  const items=hidden.map(s=>`<button class="more-tile" onclick="${openers[s.id]}"><span>${s.icon}</span><b>${esc(s.name)}</b></button>`).join('');
  view.innerHTML=`<div class="more-page">
    ${hidden.length?`<div class="sub-h">Все разделы</div><div class="more-grid">${items}</div>`:''}
    <div class="sub-h">Управление</div><div class="more-manage">
      <button onclick="openNotificationCenter()">${ICONS.bell||ICONS.help}<span><b>Уведомления</b><small>Семья, покупки и важные события</small></span><i>›</i></button>
      <button onclick="openAssignmentsInbox()">${ICONS.send}<span><b>Входящие поручения</b><small>Принять, отклонить или ответить</small></span><i>›</i></button>
      <button onclick="openSettings()">${ICONS.settings}<span><b>Настройки</b><small>Оформление, уведомления и данные</small></span><i>›</i></button>
      <button onclick="openHelp()">${ICONS.help}<span><b>Обучение</b><small>Повторить интерактивный тур</small></span><i>›</i></button>
    </div>
  </div>`;
}


function renderToday(){
  document.getElementById('filters').style.display='none';
  const view=document.getElementById('view');
  const tk=todayKey();
  const tasks=getTasks();
  const todayTasks=tasks.filter(t=>t.date===tk&&!t.done)
    .sort((a,b)=>(a.time||'99:99')<(b.time||'99:99')?-1:1);
  const overdue=tasks.filter(t=>isOverdue(t)&&t.date<tk);
  const doneToday=tasks.filter(t=>t.date===tk&&t.done).length;
  const totalToday=todayTasks.length+doneToday;
  const pct=totalToday?Math.round(doneToday/totalToday*100):0;
  const nothingPlanned=(totalToday===0); // на сегодня вообще ничего не было

  const name=getMyName();
  const h=new Date().getHours();
  const hi=h<6?'Доброй ночи':h<12?'Доброе утро':h<18?'Добрый день':'Добрый вечер';
  const greet=name?`${hi}, ${esc(name)}! 👋`:`${hi}! 👋`;

  const w=getWeatherCache();
  const weatherLine=(w&&w.temp!=null)
    ?`<div class="today-weather-compact">${w.icon} ${w.temp}° · ${esc(w.desc)}</div>`
    :'';

  // текст рядом с кольцом
  let ringSub;
  if(overdue.length)ringSub=`⚠️ Просрочено: <b>${overdue.length}</b>`;
  else if(totalToday===0)ringSub='Дел на сегодня нет 🎉';
  else if(todayTasks.length===0&&doneToday>0)ringSub=`Всё выполнено! 🔥 (${doneToday})`;
  else ringSub=`Осталось <b>${todayTasks.length}</b> из ${totalToday}`;

  // кольцо (r=32, длина окружности ≈ 201)
   const R=34, C=2*Math.PI*R, off=C-(pct/100)*C;

  const todayLabel=new Date().toLocaleDateString('ru-RU',{weekday:'long',day:'numeric',month:'long'});
  let html=`<div class="today-shell">
    <div class="today-head"><div><div class="today-greeting">${greet}</div><div class="today-date">${todayLabel}</div></div>${weatherLine}</div>
    <div class="tw-card today-progress-action" role="button" tabindex="0"
         aria-label="${todayTasks.length?'Перейти к делам на сегодня':'Добавить дело на сегодня'}"
         onclick="handleTodayProgress()"
         onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();handleTodayProgress()}"
         style="display:flex;align-items:center;gap:16px;margin-bottom:12px">
      <div class="ring-wrap" style="--rc:var(--brand)">
        <svg width="84" height="84" viewBox="0 0 84 84">
          <circle class="ring-bg" cx="42" cy="42" r="${R}"></circle>
          <circle class="ring-fg" cx="42" cy="42" r="${R}" stroke-dasharray="${C}" stroke-dashoffset="${off}"></circle>
        </svg>
        <div class="ring-txt"><b>${pct}%</b><small>сегодня</small></div>
      </div>
      <div class="ring-side">
        <div class="rs-big">${nothingPlanned?'Нет дел':`${doneToday}/${totalToday} дел`}</div>
        <div class="rs-sub">${ringSub}</div>
      </div>
    </div>`;

  // мини-виджеты
  const fs=getExpenseStats();
  const habits=getHabits();
  const habitsDone=habits.filter(hb=>hb.log&&hb.log[tk]).length;
  html+=`<div class="tw-grid">
    <div class="tw-card" onclick="switchTab('finance')">
      <div class="tw-ico">${ICONS.finance}</div>
      <div class="tw-lbl">Расходы за месяц</div>
      <div class="tw-val">${fmtMoney(fs.total)} ₽</div>
      <div class="tw-sub">Баланс: ${fs.balance>=0?'+':''}${fmtMoney(fs.balance)} ₽</div>
    </div>
    <div class="tw-card" onclick="switchTab('habits')">
      <div class="tw-ico">${ICONS.habits}</div>
      <div class="tw-lbl">Привычки</div>
      <div class="tw-val">${habitsDone}/${habits.length}</div>
      <div class="tw-sub">${habitsDone===habits.length&&habits.length?'Все готовы! 🔥':'выполнено сегодня'}</div>
    </div>
  </div>`;

  html+=renderSmartSuggestions();

  if(overdue.length){
    html+=`<div class="reschedule-bar" style="margin:6px 0 10px"><span>⚠️ Просрочено: ${overdue.length}</span><button onclick="rescheduleOverdue()">➡️ На сегодня</button></div>`;
  }

  html+=`<div class="sub-h" id="today-task-section">Дела на сегодня</div>`;
  if(todayTasks.length){
    html+='<div class="list" style="padding:0">';
    todayTasks.forEach(t=>html+=taskCardHTML(t));
    html+='</div>';
  }else{
    html+=emptyState(ICONS.today,'Сегодня всё свободно','Хороший момент отдохнуть или запланировать что-то важное','openModal()','Добавить дело');
  }

  html+=`<div class="sub-h">Быстрые действия</div>
    <div class="qa-grid">
      <div class="qa-btn" onclick="openModal()"><div class="qa-ico" style="background:linear-gradient(135deg,#6c5ce7,#a29bfe)">${ICONS.plus}</div>Добавить дело</div>
      <div class="qa-btn" onclick="switchTab('calendar')"><div class="qa-ico" style="background:linear-gradient(135deg,#7c6cf0,#9b8ff5)">${ICONS.calendar}</div>Календарь</div>
      <div class="qa-btn" onclick="openShopping()"><div class="qa-ico" style="background:linear-gradient(135deg,#8a7cf0,#b3a9f8)">${ICONS.shopping}</div>Покупки</div>
      <div class="qa-btn" onclick="switchTab('ai')"><div class="qa-ico" style="background:linear-gradient(135deg,#9b6cf0,#c8a9f8)">${ICONS.ai}</div>Ассистент</div>
    </div>
  </div>`;

  view.innerHTML=html;
  attachSwipes();
}
function globalOpen(type,id){
  document.getElementById('search').value='';
  if(type==='task'){switchTab('all');setTimeout(()=>editTask(id),80);}
  else if(type==='expense'){const x=(load().finance||[]).find(r=>r.id===id);switchTab('finance');setTimeout(()=>x?.receiptItems?openReceiptDetails(id):editExpense(id),80);}
  else if(type==='income'){switchTab('finance');setTimeout(()=>editIncome(id),80);}
  else if(type==='shopping'){openShopping();}
  else if(type==='note'){switchTab('notes');setTimeout(()=>openNoteModal(id),80);}
}
function openGlobalSearch(){
  switchTab('all');
  setTimeout(()=>{
    const input=document.getElementById('search');
    if(!input)return;
    input.focus();
    input.scrollIntoView({behavior:'smooth',block:'center'});
  },80);
}
function renderGlobalSearch(q){
  const view=document.getElementById('view'),data=load(),groups=[];
  const has=(...parts)=>parts.join(' ').toLowerCase().includes(q);
  const tasks=(data.tasks||[]).filter(x=>has(x.title,x.desc,(x.subs||[]).map(s=>s.t).join(' '))).map(x=>({type:'task',id:x.id,icon:'✓',title:x.title,meta:`Дело · ${fmtDate(x.date)}${x.time?' · '+x.time:''}`}));
  const expenses=(data.finance||[]).filter(x=>has(x.desc,x.merchant,x.category,x.amount,(x.receiptItems||[]).map(i=>typeof i==='string'?i:[i.name,i.category,i.price].join(' ')).join(' '))).map(x=>({type:'expense',id:x.id,icon:x.receiptItems?'🧾':'₽',title:x.receiptItems?`${x.merchant||x.desc} · ${fmtMoney(x.amount)} ₽`:`${fmtMoney(x.amount)} ₽ · ${x.category}`,meta:`Расход · ${fmtDate(x.date)}`}));
  const incomes=(data.income||[]).filter(x=>has(x.desc,x.source,x.amount)).map(x=>({type:'income',id:x.id,icon:'＋',title:`${fmtMoney(x.amount)} ₽ · ${x.source}`,meta:`Доход · ${fmtDate(x.date)}`}));
  const shopping=(data.shopping||[]).filter(x=>has(x.t)).map(x=>({type:'shopping',id:x.id,icon:'🛒',title:x.t,meta:x.done?'Куплено':'В списке покупок'}));
  const notes=(data.notes||[]).filter(x=>has(x.title,x.text)).map(x=>({type:'note',id:x.id,icon:'📝',title:x.title||'Заметка',meta:(x.text||'').slice(0,70)}));
  if(tasks.length)groups.push(['Дела',tasks]);if(expenses.length||incomes.length)groups.push(['Финансы',[...expenses,...incomes]]);if(shopping.length)groups.push(['Покупки',shopping]);if(notes.length)groups.push(['Заметки',notes]);
  renderStats();
  if(!groups.length){view.innerHTML=emptyState(ICONS.all,'Ничего не найдено','Попробуй изменить поисковый запрос','','');return;}
  view.innerHTML='<div class="global-results">'+groups.map(([name,items])=>`<div class="global-group">${name} · ${items.length}</div>${items.slice(0,20).map(x=>`<div class="global-result" onclick="globalOpen(${jsArg(x.type)},${Number(x.id)||0})"><div class="gr-icon">${x.icon}</div><div><b>${esc(x.title)}</b><small>${esc(x.meta)}</small></div><span>›</span></div>`).join('')}`).join('')+'</div>';
}
function handleTodayProgress(){
  const hasTodayTasks=getTasks().some(t=>t.date===todayKey());
  if(!hasTodayTasks){
    openModal();
    return;
  }
  openTaskStat('today');vibrate(10);
}
  let _searchTimer=null;
function debouncedRender(){
  clearTimeout(_searchTimer);
  _searchTimer=setTimeout(render,180);
}
/* ===== МАТРИЦА ЭЙЗЕНХАУЭРА ===== */
function matrixQuadrant(t){
  const tk=todayKey();
  const tmr=new Date();tmr.setDate(tmr.getDate()+1);
  const tmrKey=tmr.getFullYear()+'-'+String(tmr.getMonth()+1).padStart(2,'0')+'-'+String(tmr.getDate()).padStart(2,'0');
  const important=(t.pri==='R');
  const urgent=t.date&&t.date<=tmrKey; // сегодня, завтра или просрочено
  if(important&&urgent)return 'q1';
  if(important&&!urgent)return 'q2';
  if(!important&&urgent)return 'q3';
  return 'q4';
}
let matrixMoveTaskId=null;
let matrixTouchDrag=null,matrixSuppressClickUntil=0,focusTickInterval=null,focusAudioContext=null;
const MATRIX_META={
  q1:{title:'Сделать сейчас',sub:'Важно и срочно',icon:'🔥'},
  q2:{title:'Запланировать',sub:'Важно, не срочно',icon:'◷'},
  q3:{title:'Сделать быстро',sub:'Срочно или делегировать',icon:'↗'},
  q4:{title:'Отложить',sub:'Не важно, не срочно',icon:'…'}
};
function matrixFutureKey(days=3){const d=new Date();d.setDate(d.getDate()+days);return dateKeyOf(d);}
function toggleMatrixMove(id){matrixMoveTaskId=matrixMoveTaskId===id?null:id;renderMatrix();}
function moveTaskToMatrix(id,quadrant){
  const tasks=getTasks(),t=tasks.find(x=>x.id===id);if(!t||!MATRIX_META[quadrant])return;
  const previous=matrixQuadrant(t);
  if(quadrant==='q1'){t.pri='R';t.date=todayKey();if(t.time&&isPastTaskSchedule(t.date,t.time))t.time='';}
  if(quadrant==='q2'){t.pri='R';if(!t.date||t.date<=matrixFutureKey(1))t.date=matrixFutureKey(3);}
  if(quadrant==='q3'){t.pri='Y';t.date=todayKey();if(t.time&&isPastTaskSchedule(t.date,t.time))t.time='';}
  if(quadrant==='q4'){t.pri='B';t.date='';t.time='';}
  setTasks(tasks);matrixMoveTaskId=null;scheduleAllTimeouts();vibrate([18,35,18]);renderMatrix();toast('Перемещено: '+MATRIX_META[quadrant].title);
  if(quadrant==='q1'&&previous!=='q1')setTimeout(()=>openFocusTimer(id),180);
}
function newMatrixTask(quadrant){
  openModal();const meta=MATRIX_META[quadrant];document.getElementById('modal-title').textContent=meta?'Новое · '+meta.title:'Новое дело';
  if(quadrant==='q1'){pickPri('R');document.getElementById('f-date').value=todayKey();}
  if(quadrant==='q2'){pickPri('R');document.getElementById('f-date').value=matrixFutureKey(3);}
  if(quadrant==='q3'){pickPri('Y');document.getElementById('f-date').value=todayKey();}
  if(quadrant==='q4'){pickPri('B');document.getElementById('f-date').value='';}
  syncTaskTimeConstraints();setTimeout(()=>document.getElementById('f-title')?.focus(),80);
}
function matrixDragStart(ev,id){matrixMoveTaskId=id;ev.dataTransfer.effectAllowed='move';ev.dataTransfer.setData('text/plain',String(id));ev.currentTarget.classList.add('moving');}
function matrixDragEnd(ev){ev.currentTarget.classList.remove('moving');document.querySelectorAll('.matrix-zone').forEach(x=>x.classList.remove('drag-over'));}
function matrixDragOver(ev){ev.preventDefault();ev.currentTarget.classList.add('drag-over');}
function matrixDragLeave(ev){if(!ev.currentTarget.contains(ev.relatedTarget))ev.currentTarget.classList.remove('drag-over');}
function matrixDrop(ev,quadrant){ev.preventDefault();ev.currentTarget.classList.remove('drag-over');const id=Number(ev.dataTransfer.getData('text/plain')||matrixMoveTaskId);if(id)moveTaskToMatrix(id,quadrant);}
function matrixTaskClick(ev,id){if(Date.now()<matrixSuppressClickUntil){ev.preventDefault();ev.stopPropagation();return;}editTask(id);}
function clearMatrixTouchDrag(){
  if(!matrixTouchDrag)return;clearTimeout(matrixTouchDrag.hold);matrixTouchDrag.ghost?.remove();matrixTouchDrag.el?.classList.remove('drag-source');document.body.classList.remove('matrix-dragging');document.querySelectorAll('.matrix-zone').forEach(x=>x.classList.remove('drag-over'));matrixTouchDrag=null;
}
function matrixPointerDown(ev,id){
  if(ev.pointerType==='mouse'||ev.target.closest('button'))return;
  clearMatrixTouchDrag();const el=ev.currentTarget,startX=ev.clientX,startY=ev.clientY;
  matrixTouchDrag={id,el,startX,startY,x:startX,y:startY,active:false,zone:null,hold:setTimeout(()=>{
    if(!matrixTouchDrag||matrixTouchDrag.id!==id)return;matrixTouchDrag.active=true;matrixSuppressClickUntil=Date.now()+800;el.classList.add('drag-source');document.body.classList.add('matrix-dragging');
    const ghost=document.createElement('div');ghost.className='matrix-drag-ghost';ghost.textContent=getTasks().find(t=>t.id===id)?.title||'Дело';document.body.appendChild(ghost);matrixTouchDrag.ghost=ghost;positionMatrixGhost(startX,startY);vibrate([25,35,25]);
  },430)};
}
function positionMatrixGhost(x,y){if(matrixTouchDrag?.ghost){matrixTouchDrag.ghost.style.left=x+'px';matrixTouchDrag.ghost.style.top=y+'px';}}
function matrixPointerMove(ev){
  const d=matrixTouchDrag;if(!d)return;d.x=ev.clientX;d.y=ev.clientY;
  if(!d.active){if(Math.hypot(d.x-d.startX,d.y-d.startY)>10){clearTimeout(d.hold);matrixTouchDrag=null;}return;}
  ev.preventDefault();positionMatrixGhost(d.x,d.y);const zone=document.elementFromPoint(d.x,d.y)?.closest('.matrix-zone');if(zone!==d.zone){d.zone?.classList.remove('drag-over');d.zone=zone;d.zone?.classList.add('drag-over');vibrate(8);}
}
function matrixPointerUp(ev){
  const d=matrixTouchDrag;if(!d)return;clearTimeout(d.hold);if(d.active){ev.preventDefault();ev.stopPropagation();const q=d.zone?.dataset.quadrant,id=d.id;clearMatrixTouchDrag();matrixSuppressClickUntil=Date.now()+700;if(q)moveTaskToMatrix(id,q);else toast('Перенос отменён');}else matrixTouchDrag=null;
}
function matrixPointerCancel(){clearMatrixTouchDrag();}
function getFocusState(){try{return JSON.parse(localStorage.getItem('lumo_focus_timer_v1')||'null')}catch(e){return null}}
async function cacheFocusState(state){try{const cache=await caches.open('lumo-push-state-v1');await cache.put('./__focus_timer__',new Response(JSON.stringify(state||{active:false}),{headers:{'Content-Type':'application/json'}}));}catch(e){}}
function openFocusTimer(taskId){const task=getTasks().find(t=>String(t.id)===String(taskId));if(!task)return;document.getElementById('focus-task-title').innerHTML=`<b>${esc(task.title)}</b><br>Выбери продолжительность — после сигнала дело останется в «Сделать сейчас».`;document.getElementById('modal-focus').dataset.taskId=task.id;document.getElementById('focus-custom-minutes').value='';document.getElementById('modal-focus').classList.add('on');}
function closeFocusTimerModal(){document.getElementById('modal-focus').classList.remove('on')}
function warmFocusSound(){try{focusAudioContext=focusAudioContext||new(window.AudioContext||window.webkitAudioContext)();focusAudioContext.resume?.()}catch(e){}}
async function ensureFocusPush(){
  if(!('Notification'in window)||!('serviceWorker'in navigator)||!('PushManager'in window))return null;
  try{if(Notification.permission!=='granted')await subscribePush();const reg=await navigator.serviceWorker.ready;let sub=await reg.pushManager.getSubscription();if(!sub){await subscribePush();sub=await reg.pushManager.getSubscription();}return sub;}catch(e){return null;}
}
async function scheduleFocusPush(state,readySubscription=null){
  const sub=readySubscription||await ensureFocusPush();if(!sub)return false;const exactEnd=new Date(state.endAt),serverEnd=new Date(Math.ceil(state.endAt/60000)*60000);
  try{const r=await fetch(FAMILY_SERVER+'/schedule-morning',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID,subscription:sub,type:'focus',scheduleId:'focus:'+PUSH_USER_ID,taskId:String(state.taskId),endAt:state.endAt,scheduledAt:state.endAt,title:'⏱ Время вышло',body:state.title,hour:serverEnd.getHours(),minute:serverEnd.getMinutes(),date:dateKeyOf(serverEnd),exactTime:exactEnd.toISOString()})});return r.ok;}catch(e){return false;}
}
async function startFocusTimer(minutes){
  const own=Number(document.getElementById('focus-custom-minutes')?.value),mins=Math.max(1,Math.min(180,Number(minutes||own||25))),taskId=document.getElementById('modal-focus').dataset.taskId,task=getTasks().find(t=>String(t.id)===String(taskId));if(!task)return;
  warmFocusSound();const pushReady=ensureFocusPush(),state={active:true,taskId:task.id,title:task.title,minutes:mins,startedAt:Date.now(),endAt:Date.now()+mins*60000};localStorage.setItem('lumo_focus_timer_v1',JSON.stringify(state));await cacheFocusState(state);closeFocusTimerModal();renderMatrix();startFocusTicker();const pushed=await scheduleFocusPush(state,await pushReady);toast(pushed?`Фокус на ${mins} мин · сигнал придёт даже с блокировкой`:`Фокус на ${mins} мин · включи push для сигнала при блокировке`);
}
function focusTimeText(ms){const total=Math.max(0,Math.ceil(ms/1000)),m=Math.floor(total/60),s=total%60;return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')}
function focusBannerHtml(){const s=getFocusState();if(!s?.active)return'';return `<div class="focus-banner"><div class="focus-ring" id="focus-countdown">${focusTimeText(s.endAt-Date.now())}</div><div class="focus-copy"><b>${esc(s.title)}</b><small>Фокус идёт · ${s.minutes} мин</small></div><button class="focus-stop" onclick="cancelFocusTimer()" aria-label="Остановить таймер">×</button></div>`;}
function playFocusAlarm(){
  try{const ctx=focusAudioContext||new(window.AudioContext||window.webkitAudioContext)();focusAudioContext=ctx;ctx.resume?.();[0,.28,.56].forEach((delay,i)=>{const osc=ctx.createOscillator(),gain=ctx.createGain();osc.frequency.value=i===2?1046:880;gain.gain.setValueAtTime(.001,ctx.currentTime+delay);gain.gain.exponentialRampToValueAtTime(.22,ctx.currentTime+delay+.02);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+delay+.2);osc.connect(gain).connect(ctx.destination);osc.start(ctx.currentTime+delay);osc.stop(ctx.currentTime+delay+.22)});}catch(e){}
}
async function finishFocusTimer(){const s=getFocusState();if(!s?.active)return;s.active=false;s.finishedAt=Date.now();localStorage.setItem('lumo_focus_timer_v1',JSON.stringify(s));await cacheFocusState(s);clearInterval(focusTickInterval);focusTickInterval=null;if(document.visibilityState==='visible'){playFocusAlarm();vibrate([100,80,100,80,180]);toast('⏱ Время вышло: '+s.title);try{const reg=await navigator.serviceWorker.ready;await reg.showNotification('⏱ Время вышло',{body:s.title,icon:'./assets/icons/icon.png',badge:'./assets/icons/icon.png',tag:'focus:'+s.taskId+':'+s.endAt,data:{type:'focus',taskId:String(s.taskId)}})}catch(e){}}if(currentTab==='matrix')renderMatrix();}
function startFocusTicker(){clearInterval(focusTickInterval);const tick=()=>{const s=getFocusState();if(!s?.active){clearInterval(focusTickInterval);return;}if(Date.now()>=s.endAt){finishFocusTimer();return;}const el=document.getElementById('focus-countdown');if(el)el.textContent=focusTimeText(s.endAt-Date.now())};tick();focusTickInterval=setInterval(tick,1000);}
async function cancelFocusTimer(){const s=getFocusState();if(s){s.active=false;s.cancelledAt=Date.now();localStorage.setItem('lumo_focus_timer_v1',JSON.stringify(s));await cacheFocusState(s);}clearInterval(focusTickInterval);focusTickInterval=null;renderMatrix();toast('Таймер остановлен');}
async function acknowledgeFocusPush(){const s=getFocusState();if(s?.active){s.active=false;s.finishedAt=Date.now();s.finishedByPush=true;localStorage.setItem('lumo_focus_timer_v1',JSON.stringify(s));await cacheFocusState(s);}clearInterval(focusTickInterval);focusTickInterval=null;}
function renderMatrix(){
  const view=document.getElementById('view');
  const tasks=getTasks().filter(t=>!t.done);
  const q={q1:[],q2:[],q3:[],q4:[]};
  tasks.forEach(t=>q[matrixQuadrant(t)].push(t));
  let html=`<div class="matrix-page">${focusBannerHtml()}<div class="matrix-intro"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18"/><rect x="3" y="3" width="18" height="18" rx="3"/></svg><span><b>Зажми дело и перенеси пальцем.</b><br>Отпусти карточку в нужном квадрате. Кнопка ↗ остаётся быстрым вариантом без перетаскивания.</span></div><div class="matrix-board">`;
  Object.keys(MATRIX_META).forEach(k=>{
    const m=MATRIX_META[k],list=q[k].sort((a,b)=>(a.date||'9999').localeCompare(b.date||'9999'));
    html+=`<section class="matrix-zone matrix-${k}" data-quadrant="${k}" ondragover="matrixDragOver(event)" ondragleave="matrixDragLeave(event)" ondrop="matrixDrop(event,'${k}')"><div class="matrix-zone-head"><div><div class="matrix-zone-title">${m.icon} ${m.title}</div><div class="matrix-zone-sub">${m.sub}</div></div><div class="matrix-zone-count">${list.length}</div></div>`;
    if(!list.length)html+=`<div class="matrix-empty" onclick="newMatrixTask('${k}')">＋<br>Добавить дело</div>`;
    list.forEach(t=>{const dateLbl=t.date?(t.date===todayKey()?'Сегодня':fmtDate(t.date)):'Без даты',moving=matrixMoveTaskId===t.id;
      html+=`<article class="matrix-task ${moving?'move-open':''}" draggable="true" ondragstart="matrixDragStart(event,${t.id})" ondragend="matrixDragEnd(event)" onpointerdown="matrixPointerDown(event,${t.id})" onpointermove="matrixPointerMove(event)" onpointerup="matrixPointerUp(event)" onpointercancel="matrixPointerCancel()" onclick="matrixTaskClick(event,${t.id})"><div class="matrix-task-main"><div><div class="matrix-task-title">${esc(t.title)}</div><div class="matrix-task-meta">${dateLbl}${t.time?' · '+esc(t.time):''}</div></div><button class="matrix-move-toggle" onclick="event.stopPropagation();toggleMatrixMove(${t.id})" aria-label="Переместить"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg></button></div>${moving?`<div class="matrix-move-menu"><button onclick="event.stopPropagation();moveTaskToMatrix(${t.id},'q1')" title="Сделать сейчас">🔥</button><button onclick="event.stopPropagation();moveTaskToMatrix(${t.id},'q2')" title="Запланировать">◷</button><button onclick="event.stopPropagation();moveTaskToMatrix(${t.id},'q3')" title="Сделать быстро">↗</button><button onclick="event.stopPropagation();moveTaskToMatrix(${t.id},'q4')" title="Отложить">…</button></div>`:''}</article>`;
    });
    if(list.length)html+=`<button class="matrix-add" onclick="newMatrixTask('${k}')">＋ Добавить сюда</button>`;
    html+='</section>';
  });
  html+=`</div><div class="matrix-help">Перемещение меняет приоритет и срок дела — это можно отменить обычным редактированием.</div></div>`;
  view.innerHTML=html;startFocusTicker();
}
function openMenuEditor(){
  renderMenuEditor();
  document.getElementById('modal-menu-editor').classList.add('on');
}
function closeMenuEditor(){
  document.getElementById('modal-menu-editor').classList.remove('on');
}
function renderMenuEditor(){
  const cfg=getNavConfig();
  const active=cfg.map(id=>sectionInfo(id)).filter(Boolean);
  const hidden=NAV_SECTIONS.filter(s=>!cfg.includes(s.id));

  // Активные — с стрелками порядка и кнопкой убрать
  let a='';
  active.forEach((s,i)=>{
    a+=`<div class="cat-item">
      <span class="emo">${s.icon}</span>
      <span class="nm">${esc(s.name)}</span>
      <button onclick="menuMove(${i},-1)" ${i===0?'style="opacity:.25"':''}>⬆️</button>
      <button onclick="menuMove(${i},1)" ${i===active.length-1?'style="opacity:.25"':''}>⬇️</button>
      <button onclick="menuRemove('${s.id}')">➖</button>
    </div>`;
  });
  if(!active.length)a=`<div style="font-size:.82rem;color:var(--muted);padding:6px 2px">Пусто — добавь снизу</div>`;
  document.getElementById('menu-editor-active').innerHTML=a;

  // Скрытые — с кнопкой добавить
  let h='';
  hidden.forEach(s=>{
    const full=active.length>=5;
    h+=`<div class="cat-item">
      <span class="emo">${s.icon}</span>
      <span class="nm">${esc(s.name)}</span>
      <button onclick="menuAdd('${s.id}')" ${full?'style="opacity:.25"':''}>➕</button>
    </div>`;
  });
  if(!hidden.length)h=`<div style="font-size:.82rem;color:var(--muted);padding:6px 2px">Все разделы в панели</div>`;
  document.getElementById('menu-editor-hidden').innerHTML=h;
}
function menuAdd(id){
  const cfg=getNavConfig();
  if(cfg.length>=5){toast('Максимум 5 разделов + «Ещё»');return;}
  if(cfg.includes(id))return;
  cfg.push(id);
  setNavConfig(cfg);
  vibrate(15);
  renderMenuEditor();renderNav();
}
function menuRemove(id){
  let cfg=getNavConfig().filter(x=>x!==id);
  if(!cfg.length){toast('Оставь хотя бы один раздел');return;}
  setNavConfig(cfg);
  vibrate(15);
  // если убрали текущую вкладку — перейдём на первую оставшуюся
  if(currentTab===id){currentTab=cfg[0];}
  renderMenuEditor();renderNav();
}
function menuMove(i,dir){
  const cfg=getNavConfig();
  const j=i+dir;
  if(j<0||j>=cfg.length)return;
  [cfg[i],cfg[j]]=[cfg[j],cfg[i]];
  setNavConfig(cfg);
  vibrate(10);
  renderMenuEditor();renderNav();
}
/* ===== ИНИЦИАЛИЗАЦИЯ ===== */
const ONBOARDING_KEY='lumo_onboarding_v1';
let helpStep=0,helpIsOnboarding=false;
function guideItem(icon,title,text){
  return `<div class="guide-item"><div class="gi">${icon}</div><div><b>${title}</b><span>${text}</span></div></div>`;
}
function getHelpSlides(){
  return [
    {
      title:'Добро пожаловать в Lumo',
      icon:ICONS.sun,
      intro:'Все важные части дня собраны в одном приложении. За минуту покажем основное.',
      items:[
        ['✓','Дела','Планируй задачи, даты, приоритеты, повторы и подзадачи.'],
        [ICONS.habits,'Привычки','Создавай ритм и отмечай выполнение одним касанием.'],
        [ICONS.finance,'Финансы','Следи за расходами, доходами, бюджетами и целями.']
      ]
    },
    {
      title:'Дела и календарь',
      icon:ICONS.all,
      intro:'Добавляй дело кнопкой «+» и сразу указывай всё необходимое.',
      items:[
        [ICONS.calendar,'Дата и время','Задача появится в нужном дне и напомнит о себе.'],
        [ICONS.postpone,'Быстро отложить','Выбери новый срок: на час позже самой задачи, ближайший вечер, на день позже или следующий понедельник. Перед нажатием видны точные дата и время.'],
        ['↔','Жесты','Свайп вправо выполняет задачу, влево — удаляет.']
      ]
    },
    {
      title:'Твой ежедневный ритм',
      icon:ICONS.habits,
      intro:'Экран «Сегодня» показывает главное, а привычки помогают сохранять темп.',
      items:[
        ['◉','Прогресс дня','Видно, сколько дел и привычек уже выполнено.'],
        [ICONS.habits,'Недельная цепочка','Отмечай дни и следи за текущей серией.'],
        [ICONS.shopping,'Покупки','Веди общий список и отмечай купленное в магазине.']
      ]
    },
    {
      title:'Деньги и семья',
      icon:ICONS.finance,
      intro:'Lumo помогает вести бытовые финансы и совместные дела.',
      items:[
        ['₽','Доходы и расходы','Категории, месячный баланс, бюджеты и регулярные платежи.'],
        ['◎','Цели и долги','Копилки показывают прогресс, а долги — сроки возврата.'],
        [ICONS.family,'Семейный режим','Общие покупки, поручения, семейные push и рейтинг выполнения.']
      ]
    },
    {
      title:'Локальный помощник',
      icon:ICONS.ai,
      intro:'Напиши или надиктуй несколько действий одной фразой — даже без запятых.',
      items:[
        ['🎙️','Диктуй естественно','Помощник разделит речь на дела, покупки, расходы и привычки. Если прямой голосовой ввод недоступен, Lumo откроет системную диктовку клавиатуры.'],
        ['👀','Сначала проверка','Перед сохранением появятся карточки — лишнее можно удалить.'],
        ['⌁','Работает локально','Команды и текст разбираются на устройстве без внешней языковой модели.']
      ],
      example:'Пример: «завтра встреча в 15 в понедельник сделать отчёт пришла зарплата 90000».'
    }
  ];
}
function renderHelpStep(){
  const slides=getHelpSlides(),s=slides[helpStep];
  document.getElementById('help-title').textContent=s.title;
  document.getElementById('help-progress').innerHTML=slides.map((_,i)=>`<i class="${i<=helpStep?'on':''}"></i>`).join('');
  document.getElementById('help-body').innerHTML=`<div class="guide-hero"><div class="guide-icon">${s.icon}</div><p>${s.intro}</p></div>
    <div class="guide-list">${s.items.map(x=>guideItem(x[0],x[1],x[2])).join('')}</div>
    ${s.example?`<div class="guide-example">${s.example}</div>`:''}`;
  const back=document.getElementById('help-back'),next=document.getElementById('help-next'),skip=document.getElementById('help-skip');
  const actions=document.querySelector('#modal-help .guide-actions');
  back.style.display=helpStep===0?'none':'block';
  actions.classList.toggle('single',helpStep===0);
  next.textContent=helpStep===0?'Начать живой тур':helpStep===slides.length-1?'Начать пользоваться':'Далее';
  skip.textContent=helpIsOnboarding?'Пропустить обучение':'Закрыть справку';
}
function openHelp(fromOnboarding=false){
  helpIsOnboarding=!!fromOnboarding;helpStep=0;
  renderHelpStep();
  document.getElementById('modal-help').classList.add('on');
}
function helpBack(){if(helpStep>0){helpStep--;renderHelpStep();}}
function helpNext(){
  if(helpStep===0){startAppTour();return;}
  const last=getHelpSlides().length-1;
  if(helpStep<last){helpStep++;renderHelpStep();vibrate(10);return;}
  closeHelp(true);
}
function skipOnboarding(){closeHelp(true);}
function closeHelp(markDone=false){
  document.getElementById('modal-help').classList.remove('on');
  if(markDone||helpIsOnboarding)localStorage.setItem(ONBOARDING_KEY,'1');
  helpIsOnboarding=false;
}
function scheduleOnboarding(delay){
  if(localStorage.getItem(ONBOARDING_KEY))return;
  setTimeout(()=>{
    if(!localStorage.getItem(ONBOARDING_KEY)&&!document.querySelector('.modal.on'))openHelp(true);
  },delay);
}

let tourStep=-1,tourDemoDone=false,tourTypingTimer=null,tourOwnPlan=false,tourPositionTimer=null;
const TOUR_TOTAL=21,TOUR_AI_STEP=18,TOUR_MANAGE_STEP=19;
function clearTourFocus(){document.querySelectorAll('.tour-focus').forEach(x=>x.classList.remove('tour-focus'));}
function closeTourModals(){
  document.querySelectorAll('.modal.on').forEach(x=>x.classList.remove('on'));
  editId=null;editFinId=null;editFinType=null;
}
function focusTourElement(selector){
  clearTourFocus();
  const el=document.querySelector(selector);
  if(el){el.classList.add('tour-focus');requestAnimationFrame(()=>{el.scrollIntoView({behavior:'auto',block:'center',inline:'nearest'});scheduleTourCoachPosition(40);});}
  return el;
}
function scheduleTourCoachPosition(delay=110){clearTimeout(tourPositionTimer);tourPositionTimer=setTimeout(()=>positionTourCoach(true),delay);}
function tourScrollParent(el){for(let p=el?.parentElement;p&&p!==document.body;p=p.parentElement){const s=getComputedStyle(p);if(/auto|scroll/.test(s.overflowY)&&p.scrollHeight>p.clientHeight+2)return p;}return null;}
function moveTourTargetIntoRegion(target,regionTop,regionBottom){
  if(!target||regionBottom-regionTop<90)return false;const r=target.getBoundingClientRect(),pad=12;
  if(r.top>=regionTop+pad&&r.bottom<=regionBottom-pad)return false;
  const visibleHeight=Math.min(r.height,Math.max(60,regionBottom-regionTop-pad*2)),desiredTop=regionTop+pad+Math.max(0,(regionBottom-regionTop-pad*2-visibleHeight)/2),delta=r.top-desiredTop;
  const scroller=tourScrollParent(target);if(scroller)scroller.scrollTop+=delta;else window.scrollBy({top:delta,behavior:'auto'});return true;
}
function positionTourCoach(adjustTarget=true){
  const coach=document.querySelector('.tour-coach');if(!coach)return;
  const target=document.querySelector('.tour-focus'),vv=window.visualViewport,vh=vv?.height||window.innerHeight,offsetTop=vv?.offsetTop||0,inModal=!!target?.closest('.modal'),safeTop=offsetTop+(inModal?70:88),safeBottom=inModal?14:96,gap=14;
  coach.classList.remove('place-top','place-bottom');coach.style.top='';coach.style.bottom='';
  if(!target){coach.classList.add(coach.dataset.preferTop==='1'?'place-top':'place-bottom');return;}
  const r=target.getBoundingClientRect(),placeCoachTop=(r.top+r.height/2)>vh*.5;let regionTop=safeTop,regionBottom=vh-safeBottom;
  if(placeCoachTop){coach.style.top=safeTop+'px';coach.style.bottom='auto';regionTop=coach.getBoundingClientRect().bottom+gap;}
  else{coach.style.bottom=safeBottom+'px';coach.style.top='auto';regionBottom=coach.getBoundingClientRect().top-gap;}
  if(adjustTarget&&moveTourTargetIntoRegion(target,regionTop,regionBottom))setTimeout(()=>positionTourCoach(false),40);
}
window.addEventListener('orientationchange',scheduleTourCoachPosition);
if(window.visualViewport){window.visualViewport.addEventListener('resize',scheduleTourCoachPosition);window.visualViewport.addEventListener('scroll',scheduleTourCoachPosition);}
function renderTourCoach({title,text,example='',primary='Далее',top=false}){
  const layer=document.getElementById('tour-layer');layer.style.display='block';
  layer.innerHTML=`<div class="tour-shade"></div><div class="tour-coach ${top?'place-top':'place-bottom'}" data-prefer-top="${top?'1':'0'}">
    <div class="tour-count">Шаг ${tourStep+1} из ${TOUR_TOTAL}</div>
    <h4>${title}</h4><p>${text}</p>${example?`<div class="tour-example">${example}</div>`:''}
    <div class="tour-buttons"><button class="secondary" onclick="finishAppTour()">Пропустить</button>
      <button class="primary" onclick="tourNext()">${primary}</button></div></div>`;
  scheduleTourCoachPosition();
}
function startAppTour(){
  closeHelp(false);tourStep=0;tourDemoDone=false;tourOwnPlan=false;
  showTourStep();
}
function showTourStep(){
  clearInterval(tourTypingTimer);clearTourFocus();closeTourModals();
  if(tourStep===0){
    switchTab('today');setTimeout(()=>focusTourElement('.today-progress-action'),100);
    renderTourCoach({title:'Экран «Сегодня»',text:'Это главный экран дня: прогресс, ближайшие дела, привычки и быстрые действия. Если на сегодня есть записи, нажатие на прогресс откроет их все, включая выполненные. Если записей нет — откроется создание дела.',example:'Карточки статистики в разделе дел тоже нажимаются: «Сегодня», «Активных» и «Готово» открывают соответствующие списки.'});return;
  }
  if(tourStep===1){
    switchTab('all');
    setTimeout(()=>{
      openModal();
      document.getElementById('f-title').value='Подготовить презентацию';
      document.getElementById('f-module').value='work';
      document.getElementById('f-date').value=dateFromText('завтра');
      document.getElementById('f-time').value='11:30';
      focusTourElement('#modal .task-form-section');
    },80);
    renderTourCoach({title:'Как создать дело',text:'Укажи название, категорию, будущую дату, приоритет, примерную длительность и нужную энергию. По этим оценкам Lumo заметит перегруженный день. Прошедшее время выбрать нельзя.',example:'Заметка, фото и чек-лист находятся в «Дополнительно». Демонстрация не будет сохранена.',top:true});return;
  }
  if(tourStep===2){
    switchTab('more');setTimeout(()=>{openCatModal();setTimeout(()=>focusTourElement('#cat-list .cat-item:first-child'),60);},80);
    renderTourCoach({title:'Категории дел и расходов',text:'В разделе «Ещё → Категории» можно добавлять свои разделы, менять иконки и редактировать категории расходов.',example:'Например: «Работа», «Дом», «Авто» или «Учёба». Удалённые дела безопасно переносятся в «Личное».',top:true});return;
  }
  if(tourStep===3){
    switchTab('calendar');setTimeout(()=>focusTourElement('.cal-head'),100);
    renderTourCoach({title:'Календарь',text:'Точки отмечают дни с делами. Нажми на дату, чтобы увидеть её задачи или добавить новое дело сразу на выбранный день.',example:'Стрелками сверху переключаются месяцы.'});return;
  }
  if(tourStep===4){
    switchTab('habits');setTimeout(()=>focusTourElement('.habit-summary'),100);
    renderTourCoach({title:'Привычки и серии',text:'Кольцо показывает прогресс дня. Первое выполнение — это «Первый шаг», а серия начинается со второго дня подряд. Кнопка «История» открывает весь месяц и год с процентом регулярности.',example:'В настройках можно отдельно включить утреннее напоминание только о невыполненных привычках.'});return;
  }
  if(tourStep===5){
    switchTab('more');setTimeout(()=>{renderShopping();document.getElementById('modal-shopping').classList.add('on');setTimeout(()=>focusTourElement('#modal-shopping .sub-add'),60);},80);
    renderTourCoach({title:'Список покупок',text:'Добавляй продукты одной строкой и отмечай купленное прямо в магазине. В семейном режиме новая позиция синхронизируется со всеми участниками и создаёт семейное уведомление.',example:'Помощник тоже умеет добавлять покупки голосом. В настройках отдельно включается напоминание о незакрытом списке и выбирается время.',top:true});return;
  }
  if(tourStep===6){
    switchTab('all');
    setTimeout(()=>{
      const input=document.getElementById('search');input.value='продукты';
      document.getElementById('view').innerHTML=`<div class="global-results tour-search-demo">
        <div class="global-group">Результаты из всех разделов</div>
        <div class="global-result"><div class="gr-icon">✓</div><div><b>Купить продукты</b><small>Дело · завтра</small></div><span>›</span></div>
        <div class="global-result"><div class="gr-icon">₽</div><div><b>2 450 ₽ · Продукты</b><small>Расход · сегодня</small></div><span>›</span></div>
        <div class="global-result"><div class="gr-icon">🛒</div><div><b>Продукты на завтрак</b><small>В списке покупок</small></div><span>›</span></div>
      </div>`;
      focusTourElement('.tour-search-demo .global-result');
    },80);
    renderTourCoach({title:'Общий поиск',text:'Лупа в шапке открывает один поиск по делам, расходам и доходам, покупкам и заметкам. Результаты сразу разделяются по типам.',example:'Нажатие на результат открывает нужную запись. Сейчас показан безопасный пример.'});return;
  }
  if(tourStep===17){bulkMode=false;bulkSelected.clear();updateBulkBar();}
  if(tourStep===7){
    switchTab('finance');setTimeout(()=>focusTourElement('.fin-hero'),100);
    renderTourCoach({title:'Обзор финансов',text:'Верхняя карточка показывает доходы, расходы, баланс, сравнение с прошлым месяцем и диаграмму. Компактная панель ниже открывает чек, историю цен, цели, лимиты, платежи и долги.',example:'Стрелками переключаются месяцы, а операции остаются в общей ленте ниже.'});return;
  }
  if(tourStep===8){
    switchTab('finance');
    setTimeout(()=>{
      openExpModal();document.getElementById('e-amount').value='850';document.getElementById('e-desc').value='Продукты на неделю';
      const sel=document.getElementById('e-cat');if([...sel.options].some(x=>x.value==='Продукты'))sel.value='Продукты';
      focusTourElement('#modal-exp .field');
    },80);
    renderTourCoach({title:'Как записать расход или доход',text:'На экране финансов кнопка «+» открывает эту форму. Выбери тип операции, сумму, категорию, дату и комментарий.',example:'Пример 850 ₽ показан только для обучения и не сохранится.',top:true});return;
  }
  if(tourStep===9){
    switchTab('finance');setTimeout(()=>{openReceiptScanner();setTimeout(()=>focusTourElement('.receipt-source-grid'),60);},80);
    renderTourCoach({title:'Умный просмотр чека',text:'Выбери отдельную кнопку: «Сфотографировать» откроет камеру, а «Выбрать фото» — галерею устройства. Lumo распознает магазин, итог, товар, количество, цену за единицу и сумму позиции.',example:'Поля с цветной рамкой редактируются. Если позиции не сходятся с итогом, Lumo покажет разницу и не сохранит ошибочный расход.'});return;
  }
  if(tourStep===10){
    switchTab('finance');setTimeout(()=>focusTourElement('.goal-card, .budget-card, button[onclick=\"openGoal()\"]'),120);
    renderTourCoach({title:'Планирование денег',text:'В панели финансов открой «Цель», «Лимиты», «Платежи» или «Долг». Бюджеты контролируют категории, цели показывают накопления, регулярные платежи создают операции по расписанию.',example:'Все инструменты собраны в одной компактной панели без длинного списка пустых кнопок.'});return;
  }
  if(tourStep===11){
    switchTab('more');setTimeout(()=>{openFamily();setTimeout(()=>focusTourElement('.fam-code-box, #family-body .field:first-child'),90);},80);
    renderTourCoach({title:'Семейный режим',text:'Создай семью или войди по коду. При делегировании участник получает новое поручение, а общие покупки появляются у всей семьи.',example:'Нажатие на семейный push открывает переданное дело или общий список. Для фоновой доставки каждый участник устанавливает PWA и включает push.',top:true});return;
  }
  if(tourStep===12){
    switchTab('matrix');setTimeout(()=>focusTourElement('.matrix-zone:first-child'),100);
    renderTourCoach({title:'Матрица Эйзенхауэра',text:'Четыре квадрата разделяют дела по важности и срочности. На сенсорном экране зажми карточку, перенеси пальцем и отпусти в нужном квадрате. Кнопка ↗ — быстрый запасной способ.',example:'После переноса в «Сделать сейчас» можно запустить фокус на 15, 25, 45, 60 минут или выбрать своё время. О завершении сообщит системный push.'});return;
  }
  if(tourStep===13){
    switchTab('more');setTimeout(()=>{openMenuEditor();setTimeout(()=>focusTourElement('#menu-editor-active .cat-item:first-child'),70);},80);
    renderTourCoach({title:'Настрой нижнее меню',text:'Открой «Настройки → Оформление → Настроить меню», выбери нужные разделы и поменяй их порядок. Остальные автоматически появятся в компактной сетке «Ещё».',example:'Кнопка «Ещё» всегда остаётся последней. Все формы Lumo открываются одинаковыми нижними шторками: крестик закрывает окно, а главное действие всегда выделено внизу.',top:true});return;
  }
  if(tourStep===14){
    switchTab('more');setTimeout(()=>{openSettings();setTimeout(()=>focusTourElement('#modal-settings .settings-group:nth-of-type(2)'),70);},80);
    renderTourCoach({title:'Умные предложения и данные',text:'В «Настройки → Напоминания» отдельно включаются предложения Lumo. Они сообщают о просрочках, превышении бюджета, платежах, покупках, долгах и привычках.',example:'Нажми такое уведомление — помощник сразу выполнит готовый запрос, дополнительная отправка не нужна. В группе «Данные» хранится резервная JSON-копия.',top:true});return;
  }
  if(tourStep===15){
    switchTab('more');setTimeout(()=>{openNotificationCenter();setTimeout(()=>focusTourElement('#modal-notifications .sheet-topbar'),160);},80);
    renderTourCoach({title:'Центр уведомлений и входящие',text:'Колокольчик хранит семейные события, новые покупки и ответы на поручения. Поручение больше не добавляется молча: его можно принять, отклонить и снабдить комментарием.',example:'Красный badge показывает непрочитанные события и ожидающие решения.',top:true});return;
  }
  if(tourStep===16){
    switchTab('more');setTimeout(()=>{openSettings();setTimeout(()=>focusTourElement('#modal-settings .settings-group:nth-of-type(4)'),70);},80);
    renderTourCoach({title:'Синхронизация устройств',text:'В «Настройки → Синхронизация» создай 12-значный код и введи его на втором устройстве. Дела, финансы, привычки, заметки и правила помощника будут храниться в общей серверной копии.',example:'Если два устройства изменили данные одновременно, Lumo предложит объединить версии или выбрать нужную — без тихой перезаписи.',top:true});return;
  }
  if(tourStep===17){
    switchTab('all');setTimeout(()=>{bulkMode=true;renderFilters();render();updateBulkBar();setTimeout(()=>focusTourElement('#bulk-bar'),50);},80);
    renderTourCoach({title:'Массовые действия и свои правила',text:'Кнопка «Выбрать» позволяет отметить несколько дел и разом перенести их на сегодня или завтра, выполнить либо удалить. В «Настройки → Помощник» правила категорий можно создавать и редактировать вручную.',example:'Например: «клиент» → «Работа», «аптека» → «Здоровье».'});return;
  }
  if(tourStep===TOUR_AI_STEP){
    switchTab('ai');
    setTimeout(()=>{
      focusTourElement('#ai-bar');
      const phrase='В понедельник встреча в 15:00 после в 17:00 позвонить коллеге во вторник в 9:00 заказать пропуска';
      const input=document.getElementById('ai-input');input.value='';let i=0;
      tourTypingTimer=setInterval(()=>{input.value=phrase.slice(0,++i);if(i>=phrase.length)clearInterval(tourTypingTimer);},20);
      renderTourCoach({title:'Локальный помощник и голос',text:'Микрофон работает через собственный Whisper на поддерживаемых телефонах, планшетах и компьютерах. Lumo сам вводит длинный запрос без запятых и разделяет его на действия.',example:'Расшифровка и разбор работают без внешней языковой модели. Перед сохранением всегда показываются карточки проверки.',primary:'Разобрать пример',top:true});
    },80);return;
  }
  if(tourStep===TOUR_MANAGE_STEP){
    switchTab('ai');
    setTimeout(()=>{
      const fake={ops:[{title:'Перенести дело',before:'Встреча с мамой<br>30 июля · 15:00',after:'Встреча с мамой<br>31 июля · 18:00'}]};
      aiAddMsg('user','Перенеси встречу с мамой на завтра в 18:00');
      aiAddMsg('ai',`<div class="tour-management-demo">${localOpsHTML(fake,true)}</div>`);
      focusTourElement('.tour-management-demo');
    },80);
    renderTourCoach({title:'Управление существующими данными',text:'Помощник умеет переносить, выполнять и удалять дела, менять расходы и добавлять подзадачи. Перед изменением он всегда показывает «Было → Станет».',example:'Это безопасный пример: реальная встреча не создаётся и не изменяется.'});return;
  }
  switchTab('today');setTimeout(()=>focusTourElement('.today-progress-action'),100);
  renderTourCoach({title:'Готово — теперь можно начинать',text:'Ты увидел все основные возможности Lumo на настоящих экранах. Обучение всегда можно повторить кнопкой «?».',primary:'Завершить'});
}
function __showTourStepForTest(step){tourStep=Math.max(0,Math.min(TOUR_TOTAL-1,Number(step)||0));tourDemoDone=true;showTourStep();}
function __tourTotalForTest(){return TOUR_TOTAL;}
function tourNext(){
  if(tourStep===TOUR_AI_STEP&&!tourDemoDone){runTourAssistantDemo();return;}
  if(tourStep>=TOUR_TOTAL-1){finishAppTour();return;}
  if(tourStep===TOUR_AI_STEP&&tourOwnPlan){
    pendingLocalPlan=null;tourOwnPlan=false;
    document.querySelector('.local-plan')?.closest('.ai-msg')?.remove();
  }
  if(tourStep===6){
    const input=document.getElementById('search');if(input)input.value='';
  }
  if(tourStep===17){bulkMode=false;bulkSelected.clear();updateBulkBar();}
  if(tourStep===TOUR_MANAGE_STEP)document.querySelector('.tour-management-demo')?.closest('.ai-msg')?.remove();
  const cheers=['Отлично, идём дальше ✨','Ты молодец — следующий шаг 🌿','Готово! Смотрим дальше 👌'];
  tourStep++;showTourStep();toast(cheers[tourStep%cheers.length]);vibrate(10);
}
function runTourAssistantDemo(){
  clearInterval(tourTypingTimer);
  const input=document.getElementById('ai-input');
  input.value='В понедельник встреча в 15:00 после в 17:00 позвонить коллеге во вторник в 9:00 заказать пропуска';
  if(pendingLocalPlan&&!tourOwnPlan){
    renderTourCoach({title:'Есть незавершённый разбор',text:'Сначала сохрани или отмени карточки, которые уже находятся в помощнике.',primary:'Продолжить',top:true});
    tourDemoDone=true;return;
  }
  aiSend();tourDemoDone=true;tourOwnPlan=true;
  setTimeout(()=>{
    focusTourElement('.local-plan');
    renderTourCoach({
      title:'Вот результат разбора',
      text:'Помощник разделил одну фразу на карточки. Перед сохранением их можно проверить и удалить лишнее. В обычном диалоге можно ответить «сохрани» или «отмени».',
      example:'Вопросы «с чего начать?» и «что дальше?» ведут по активным делам с учётом срока и приоритета. Во время обучения ничего сохранять не нужно — нажми «Далее».',
      primary:'Далее'
    });
  },120);
}
function finishAppTour(){
  clearInterval(tourTypingTimer);clearTimeout(tourPositionTimer);clearTourFocus();closeTourModals();
  if(tourOwnPlan){pendingLocalPlan=null;document.querySelector('.local-plan')?.closest('.ai-msg')?.remove();}
  document.querySelector('.tour-management-demo')?.closest('.ai-msg')?.remove();
  tourOwnPlan=false;tourStep=-1;if(bulkMode){bulkMode=false;bulkSelected.clear();updateBulkBar();}
  document.getElementById('tour-layer').style.display='none';
  document.getElementById('tour-layer').innerHTML='';
  localStorage.setItem(ONBOARDING_KEY,'1');
  switchTab('today');toast('Обучение можно повторить через кнопку ?');
}
/* ===== ГОЛОСОВОЙ РЕЖИМ (обычный + хендсфри) ===== */
let _handsFree=false, _rec=null, _wakeLock=null, _listenMode='idle';
let _tapRec=null,_tapMicWatch=null,_tapTranscript='',_tapMicFailed=false,_tapMicStarted=false;
let _pcmVoice=null,_voiceUploading=false;
const VOICE_FALLBACK_KEY='lumo_ios_voice_fallback_v1';
const WAKE_WORDS=['планировщик','ассистент','помощник'];

// Озвучка ответа
function speak(text){
  try{
    const u=new SpeechSynthesisUtterance(text.replace(/[^\wа-яё0-9\s.,!?-]/gi,''));
    u.lang='ru-RU';u.rate=1.05;
    speechSynthesis.cancel();speechSynthesis.speak(u);
  }catch(e){}
}

function micIcon(){return '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3M8 21h8"/></svg>';}
function setTapMicState(active,uploading=false){const mic=document.getElementById('mic');if(!mic)return;mic.classList.toggle('listening',active);mic.classList.toggle('uploading',uploading);mic.innerHTML=active?'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="7" y="7" width="10" height="10" rx="2"/></svg>':uploading?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12a8 8 0 11-2.3-5.7"/></svg>':micIcon();mic.setAttribute('aria-label',active?'Остановить запись':uploading?'Распознаю голос':'Голосовой ввод');}
function clearTapMic(){clearTimeout(_tapMicWatch);_tapMicWatch=null;_tapRec=null;_tapMicStarted=false;setTapMicState(false);}
function speechErrorText(code){return ({'not-allowed':'Нет доступа к микрофону','service-not-allowed':'Сервис распознавания браузера недоступен','audio-capture':'Устройство не дало доступ к микрофону','network':'Распознавание браузера недоступно без сети','language-not-supported':'Русский язык не поддерживается'})[code]||'Распознавание браузера не ответило';}
function openNativeDictation(reason='Используй системную диктовку экранной клавиатуры'){
  clearTapMic();if(isIOSDevice())localStorage.setItem(VOICE_FALLBACK_KEY,'1');
  document.getElementById('voice-fallback-reason').textContent=reason;
  document.getElementById('voice-native-input').value=document.getElementById('ai-input')?.value||'';
  document.getElementById('modal-voice-fallback').classList.add('on');
  setTimeout(focusNativeDictation,80);
}
function focusNativeDictation(){const input=document.getElementById('voice-native-input');input.focus();input.setSelectionRange(input.value.length,input.value.length);}
function closeNativeDictation(){document.getElementById('modal-voice-fallback').classList.remove('on');document.getElementById('voice-native-input').blur();}
function submitNativeDictation(){const text=document.getElementById('voice-native-input').value.trim();if(!text){toast('Сначала продиктуй фразу');focusNativeDictation();return;}closeNativeDictation();aiSend(text);}
function retryWebSpeech(){localStorage.removeItem(VOICE_FALLBACK_KEY);closeNativeDictation();toggleMic();}

function encodeVoiceWav(chunks,inputRate){
  const total=chunks.reduce((n,x)=>n+x.length,0),merged=new Float32Array(total);let offset=0;
  chunks.forEach(x=>{merged.set(x,offset);offset+=x.length;});
  const targetRate=16000,ratio=inputRate/targetRate,length=Math.max(1,Math.floor(merged.length/ratio)),pcm=new Int16Array(length);
  for(let i=0;i<length;i++){
    const from=Math.floor(i*ratio),to=Math.min(merged.length,Math.max(from+1,Math.floor((i+1)*ratio)));let sum=0;
    for(let j=from;j<to;j++)sum+=merged[j];
    const sample=Math.max(-1,Math.min(1,sum/(to-from)));pcm[i]=sample<0?sample*32768:sample*32767;
  }
  const buffer=new ArrayBuffer(44+pcm.length*2),view=new DataView(buffer),write=(at,s)=>{for(let i=0;i<s.length;i++)view.setUint8(at+i,s.charCodeAt(i));};
  write(0,'RIFF');view.setUint32(4,36+pcm.length*2,true);write(8,'WAVE');write(12,'fmt ');view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,1,true);view.setUint32(24,targetRate,true);view.setUint32(28,targetRate*2,true);view.setUint16(32,2,true);view.setUint16(34,16,true);write(36,'data');view.setUint32(40,pcm.length*2,true);
  for(let i=0;i<pcm.length;i++)view.setInt16(44+i*2,pcm[i],true);
  return new Blob([buffer],{type:'audio/wav'});
}
async function startServerVoiceRecording(){
  if(!navigator.mediaDevices?.getUserMedia)return false;
  let stream;
  try{stream=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:true,noiseSuppression:true,autoGainControl:true}});}catch(e){return false;}
  try{
    const AC=window.AudioContext||window.webkitAudioContext;if(!AC)throw new Error('AudioContext unavailable');
    const context=new AC(),source=context.createMediaStreamSource(stream),processor=context.createScriptProcessor(4096,1,1),mute=context.createGain(),chunks=[];
    mute.gain.value=0;source.connect(processor);processor.connect(mute);mute.connect(context.destination);
    processor.onaudioprocess=e=>chunks.push(new Float32Array(e.inputBuffer.getChannelData(0)));
    await context.resume();
    _pcmVoice={stream,context,source,processor,mute,chunks,sampleRate:context.sampleRate,timer:setTimeout(()=>stopServerVoiceRecording(),45000)};
    setTapMicState(true);toast('Говори — нажми микрофон ещё раз, когда закончишь');vibrate(20);return true;
  }catch(e){stream.getTracks().forEach(t=>t.stop());return false;}
}
async function uploadVoiceWav(wav,retry=true){
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),95000);
  try{
    const response=await fetch(FAMILY_SERVER+'/voice/transcribe',{method:'POST',headers:{'Content-Type':'audio/wav','X-Lumo-User':PUSH_USER_ID},body:wav,signal:controller.signal,cache:'no-store'});
    const data=await response.json().catch(()=>({}));
    if(response.status===503&&retry){await new Promise(r=>setTimeout(r,Math.min(4000,Number(data.retryAfter||2)*1000)));return uploadVoiceWav(wav,false);}
    if(!response.ok||!data.text)throw new Error(data.error||'voice unavailable');
    return data.text.trim();
  }finally{clearTimeout(timer);}
}
async function stopServerVoiceRecording(){
  const session=_pcmVoice;if(!session||_voiceUploading)return;_pcmVoice=null;_voiceUploading=true;clearTimeout(session.timer);session.processor.onaudioprocess=null;
  try{session.source.disconnect();session.processor.disconnect();session.mute.disconnect();}catch(e){}session.stream.getTracks().forEach(t=>t.stop());try{await session.context.close();}catch(e){}
  if(session.chunks.reduce((n,x)=>n+x.length,0)<session.sampleRate*.3){_voiceUploading=false;setTapMicState(false);toast('Речь не услышана — попробуй ещё раз');return;}
  setTapMicState(false,true);toast('Lumo распознаёт голос…');
  try{const text=await uploadVoiceWav(encodeVoiceWav(session.chunks,session.sampleRate));if(!text)throw new Error('no speech');vibrate([25,35,25]);aiSend(text);}
  catch(e){openNativeDictation(e.name==='AbortError'?'Распознавание заняло слишком много времени':'Whisper сейчас недоступен — используй диктовку клавиатуры');}
  finally{_voiceUploading=false;setTapMicState(false);}
}

// Одна фраза: собственный Whisper, затем доступный браузерный API и системная диктовка.
async function toggleMic(){
  if(_handsFree){stopHandsFree();return;}
  if(_pcmVoice){stopServerVoiceRecording();return;}
  if(_voiceUploading)return;
  if(_tapRec){try{_tapRec.stop();}catch(e){}return;}
  if(await startServerVoiceRecording())return;
  startTapRecognition(false);
}
function startTapRecognition(force=false){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){openNativeDictation('Браузер не дал доступ к прямой записи — используй микрофон клавиатуры');return;}
  _tapTranscript='';_tapMicFailed=false;_tapMicStarted=false;
  const rec=new SR();_tapRec=rec;rec.lang='ru-RU';rec.interimResults=true;rec.continuous=false;rec.maxAlternatives=3;
  rec.onstart=()=>{_tapMicStarted=true;clearTimeout(_tapMicWatch);setTapMicState(true);toast('Говори — нажми ещё раз, чтобы закончить');};
  rec.onresult=e=>{let text='';for(let i=0;i<e.results.length;i++)text+=(text?' ':'')+(e.results[i][0]?.transcript||'');_tapTranscript=text.trim();if(_tapTranscript)document.getElementById('ai-input').value=_tapTranscript;};
  rec.onerror=ev=>{_tapMicFailed=true;const code=ev.error||'unknown';clearTapMic();if(code==='aborted')return;if(code==='no-speech'){toast('Речь не услышана — попробуй ещё раз');return;}openNativeDictation(speechErrorText(code));};
  rec.onend=()=>{const text=_tapTranscript.trim(),failed=_tapMicFailed,started=_tapMicStarted;clearTapMic();if(!failed&&text){aiSend(text);}else if(!failed&&started)toast('Речь не распознана — попробуй ещё раз');};
  try{rec.start();setTapMicState(true);_tapMicWatch=setTimeout(()=>{if(_tapRec&&!_tapMicStarted){_tapMicFailed=true;try{_tapRec.abort();}catch(e){}clearTapMic();openNativeDictation('Распознавание браузера не запустилось — переключил на системную диктовку');}},3500);}catch(e){clearTapMic();openNativeDictation('Браузер не смог запустить распознавание — используй системную диктовку');}
}

// Долгий тап на 🎤 → включить хендсфри
function initMicLongPress(){
  const mic=document.getElementById('mic');
  if(!mic)return;
  let timer=null;
  const start=()=>{timer=setTimeout(()=>{startHandsFree();},600);};
  const cancel=()=>{clearTimeout(timer);};
  mic.addEventListener('touchstart',start,{passive:true});
  mic.addEventListener('touchend',cancel);
  mic.addEventListener('touchmove',cancel);
  mic.addEventListener('mousedown',start);
  mic.addEventListener('mouseup',cancel);
  mic.addEventListener('mouseleave',cancel);
}

async function startHandsFree(){
  if(isIOSDevice()){openNativeDictation('Непрерывное прослушивание ограничено в iOS PWA — используй системную диктовку');return;}
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){toast('🎤 Голос не поддерживается');return;}
  _handsFree=true;_listenMode='wake';
  const mic=document.getElementById('mic');
  if(mic){mic.classList.add('listening');mic.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6"/></svg>';}
  toast('🎙️ Хендсфри ВКЛ. Скажи «Планировщик»');
  speak('Слушаю. Скажи планировщик');
  vibrate([30,50,30]);
  // держим экран включённым
  try{if('wakeLock'in navigator)_wakeLock=await navigator.wakeLock.request('screen');}catch(e){}
  runRecognizer();
}

function stopHandsFree(){
  _handsFree=false;_listenMode='idle';
  if(_rec){try{_rec.onend=null;_rec.stop();}catch(e){}_rec=null;}
  if(_wakeLock){try{_wakeLock.release();}catch(e){}_wakeLock=null;}
  const mic=document.getElementById('mic');
  if(mic){mic.classList.remove('listening');mic.innerHTML=micIcon();}
  speechSynthesis.cancel();
  toast('🎙️ Хендсфри выключен');
  vibrate(20);
}

function runRecognizer(){
  if(!_handsFree)return;
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  _rec=new SR();
  _rec.lang='ru-RU';
  _rec.interimResults=false;
  _rec.continuous=false;

  _rec.onresult=e=>{
    const said=(e.results[e.results.length-1][0].transcript||'').toLowerCase().trim();
    if(!said)return;

    if(_listenMode==='wake'){
      // ждём кодовое слово
      const hit=WAKE_WORDS.find(w=>said.includes(w));
      if(hit){
        // может, команда сказана сразу после слова: "планировщик напомни завтра..."
        const after=said.split(hit)[1]?.trim();
        if(after&&after.length>3){
          processVoiceCommand(after);
        }else{
          _listenMode='command';
          vibrate([40,40,40]);
          speak('Да, слушаю');
          toast('🎙️ Говори команду...');
        }
      }
    }else if(_listenMode==='command'){
      processVoiceCommand(said);
    }
  };

  _rec.onerror=ev=>{
    // no-speech / aborted — норм, просто перезапустим
    if(ev.error==='not-allowed'||ev.error==='service-not-allowed'){
      stopHandsFree();toast('🎤 Нет доступа к микрофону');
    }
  };

  _rec.onend=()=>{
    // авто-перезапуск, пока хендсфри включён
    if(_handsFree)setTimeout(runRecognizer,250);
  };

  try{_rec.start();}catch(e){}
}

function processVoiceCommand(text){
  _listenMode='wait'; // пауза, пока обрабатываем
  vibrate(30);

  // Единый безопасный поток: локальный разбор всегда показывает предпросмотр.
  aiSend(text);

  // вернуться к ожиданию кодового слова
  setTimeout(()=>{if(_handsFree){_listenMode='wake';toast('🎙️ Скажи «Планировщик»');}},1200);
}
function clearAIChatHistory(){aiHistory=[];document.getElementById('ai-chat').innerHTML='';toast('История очищена 🗑');if(currentTab==='ai')aiHello();}
function exportData(){
  const blob=new Blob([JSON.stringify(load(),null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download='planner-backup-'+todayKey()+'.json';a.click();toast('📥 Копия скачана');
}
let _fabLongPressed=false;
function initFabLongPress(){
  const fab=document.getElementById('fab');if(!fab)return;
  let timer=null;
  const start=()=>{_fabLongPressed=false;timer=setTimeout(()=>{_fabLongPressed=true;openQuickCreate()},520)};
  const cancel=()=>clearTimeout(timer);
  fab.addEventListener('touchstart',start,{passive:true});fab.addEventListener('touchend',cancel);fab.addEventListener('touchmove',cancel);
  fab.addEventListener('mousedown',start);fab.addEventListener('mouseup',cancel);fab.addEventListener('mouseleave',cancel);
  fab.addEventListener('click',e=>{if(_fabLongPressed){e.stopImmediatePropagation();e.preventDefault();_fabLongPressed=false}},true);
}
function validateImportedData(d){
  if(!d||typeof d!=='object'||Array.isArray(d))return false;
  const arrayFields=['tasks','notes','habits','finance','income','goals','shopping','autopays','debts','cats','expcats'];
  for(const key of arrayFields){
    if(key in d&&!Array.isArray(d[key]))return false;
  }
  if(Array.isArray(d.tasks)&&d.tasks.some(t=>!t||typeof t!=='object'||typeof t.title!=='string'))return false;
  if(Array.isArray(d.finance)&&d.finance.some(x=>!x||typeof x!=='object'||!Number.isFinite(Number(x.amount))))return false;
  if(Array.isArray(d.income)&&d.income.some(x=>!x||typeof x!=='object'||!Number.isFinite(Number(x.amount))))return false;
  return true;
}
function importData(ev){
  const f=ev.target.files[0];if(!f)return;
  const r=new FileReader();
  r.onload=async()=>{try{
    const d=JSON.parse(r.result);
    if(!validateImportedData(d)){toast('Файл не похож на резервную копию Lumo');return;}
    if(!await lumoConfirm('Текущие данные на устройстве будут заменены содержимым резервной копии.','Восстановить данные','Заменить',true))return;
    save(d);toast('📤 Данные загружены');location.reload();
  }catch(e){toast('Ошибка файла');}};
  r.readAsText(f);
}
let _lastForegroundSync=0;
function resumeForegroundServices(force){
  if(document.visibilityState==='hidden')return;
  const dayChanged=refreshDayBoundary();scheduleDayBoundaryRefresh();
  const now=Date.now();
  if(!force&&!dayChanged&&now-_lastForegroundSync<30000)return;
  _lastForegroundSync=now;
  scheduleAllTimeouts();
  scheduleHabitReminderLocal();scheduleHabitPushServer();scheduleShoppingReminderLocal();scheduleShoppingPushServer();scheduleSmartInsightPush();
  processAutoPays();
  scheduleAutoPayReminders();
  scheduleDebtReminders();
  flushOfflineQueue().then(()=>syncPushData());
  pullAssignedTasks();
  if(getFamilyState())pullShopping();
  refreshWeather(false);
}
function initApp(){
  applyTheme();applyAccent();
  enhanceModalSheets();
  getCats();getExpCats();
   fixBrokenDates();
  updateAppBadge();
  renderNav();renderStreak();
  renderHeroDate();
  switchTab('all');
  activeCalendarDay=todayKey();scheduleDayBoundaryRefresh();
  const introWasShown=!!sessionStorage.getItem('introShown');
  playCinematicIntro();
  scheduleOnboarding(introWasShown?350:2250);
  processAutoPays();
scheduleAutoPayReminders();
scheduleDebtReminders();
scheduleHabitReminderLocal();
scheduleShoppingReminderLocal();

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').then(reg => {
    // Принудительно обновляем SW
    reg.update();
    
    reg.addEventListener('updatefound', () => {
      const newSW = reg.installing;
      newSW.addEventListener('statechange', () => {
        if(newSW.state === 'installed' && navigator.serviceWorker.controller){
          // Новый SW готов — перезагружаем страницу
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            window.location.reload();
          });
          newSW.postMessage({type: 'SKIP_WAITING'});
        }
      });
    });
    scheduleAllTimeouts();
  }).catch(()=>{});
  navigator.serviceWorker.addEventListener('message',e=>{
    if(e.data&&e.data.type==='SNOOZE_TASK')snoozeTaskOneHour(e.data.taskId);
    if(e.data&&e.data.type==='SNOOZE_TASK_15')snoozeTaskFifteenMinutes(e.data.taskId);
    if(e.data&&e.data.type==='COMPLETE_TASK')completeTaskFromPush(e.data.taskId);
    if(e.data&&e.data.type==='OPEN_INSIGHT')openInsightConversation(e.data.prompt||'',e.data.summary||'');
    if(e.data&&e.data.type==='OPEN_FAMILY_TASK')openFamilyTaskFromPush(e.data.taskId||'');
    if(e.data&&e.data.type==='OPEN_SHOPPING')openShoppingFromPush();
    if(e.data&&e.data.type==='OPEN_NOTIFICATION_CENTER')openNotificationCenter();
    if(e.data&&e.data.type==='OPEN_FOCUS'){acknowledgeFocusPush();switchTab('matrix');toast('⏱ Фокус завершён');}
  });
}

  // тема авто-обновление
  if(window.matchMedia){
    window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',()=>{if(getThemeMode()==='auto')applyTheme();});
  }

  // погода
  refreshWeather(false);

  // синхронизация с сервером
  flushOfflineQueue().then(()=>syncPushData());
  if(localStorage.getItem(CLOUD_CODE_KEY))cloudSyncNow(false);
  pullAssignedTasks();
  updateNotificationBadge();
  if(getFamilyState())pullShopping();
  scheduleMorningPush()
  scheduleHabitPushServer();
  scheduleShoppingPushServer();
  scheduleSmartInsightPush();
  startFocusTicker();

  // периодические проверки
  setInterval(()=>{refreshDayBoundary();pullAssignedTasks();updateNotificationBadge();if(getFamilyState())pullShopping();},60000);
  setInterval(()=>refreshWeather(false),1800000);
  document.addEventListener('visibilitychange',()=>resumeForegroundServices(false));
  window.addEventListener('pageshow',()=>resumeForegroundServices(false));
  window.addEventListener('online',()=>resumeForegroundServices(true));

  // клик по погоде — обновить
  const chip=document.getElementById('weatherChip');
  if(chip)chip.addEventListener('click',()=>refreshWeather(true));

  // Enter в чате ИИ
  const aiInp=document.getElementById('ai-input');
  if(aiInp)aiInp.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();aiSend();}});

  // Enter в подзадачах и покупках
  const subInp=document.getElementById('sub-input');
  if(subInp)subInp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();addSubtask();}});
  const shopInp=document.getElementById('shop-input');
  if(shopInp)shopInp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();addShopItem();}});

  // приветствие ключа при первом ИИ
  handleLaunchActions();
  initMicLongPress();
  initFabLongPress();
  checkAchievements();
    // Haptic-подобная вибрация на все интерактивные тапы
  document.addEventListener('pointerdown',e=>{
    const el=e.target.closest('button,.task,.chk,.sc,.hstat,.cal-cell,.assign-btn,.streak-chip,.weather-chip,.shop-item');
    if(el)vibrate(8);
  },{passive:true});
    // Закрытие модалок по клику на фон
  document.querySelectorAll('.modal').forEach(modal=>{
    modal.addEventListener('click', e=>{
      if(e.target === modal){
        modal.classList.remove('on');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded',initApp);
 /* ═══════ БЫСТРЫЙ ЗАПУСК LUMO ═══════ */
function playCinematicIntro(){
  const cin=document.getElementById('cinematic');
  if(!cin)return;
  if(sessionStorage.getItem('introShown')||window.matchMedia?.('(prefers-reduced-motion: reduce)').matches){cin.remove();return;}
  sessionStorage.setItem('introShown','1');
  // Спокойный брендовый вход: достаточно долгий, чтобы знак и название успели прочитаться.
  requestAnimationFrame(()=>setTimeout(()=>{cin.classList.add('hide');setTimeout(()=>cin.remove(),480);},3250));
}

  // ═══════════════════════════════════════════
// УМНЫЙ УТРЕННИЙ ПУШ В 8:00
// ═══════════════════════════════════════════

function getTasksForToday(){
  const tk=todayKey();
  return getTasks().filter(t=>t.date===tk&&!t.done)
    .sort((a,b)=>(a.time||'99:99')<(b.time||'99:99')?-1:1);
}

function getMonthBalanceText(){
  const s=getExpenseStats();
  const sign=s.balance>=0?'+':'-';
  return sign+fmtMoney(Math.abs(s.balance))+'₽';
}

function getStreakCount(){
  const s=getStreak();
  const tk=todayKey();
  const y=new Date();y.setDate(y.getDate()-1);
  const yk=y.getFullYear()+'-'+String(y.getMonth()+1).padStart(2,'0')+'-'+String(y.getDate()).padStart(2,'0');
  let cnt=s.count||0;
  if(s.last!==tk&&s.last!==yk)cnt=0;
  return cnt;
}

async function scheduleMorningPush(){
  try{
    const scheduleKey='morning_push_scheduled_v1';
    if(localStorage.getItem(scheduleKey)===todayKey())return;
    // Нет подписки — выходим
    const reg=await navigator.serviceWorker.ready;
    const sub=await reg.pushManager.getSubscription();
    if(!sub)return;

    // Собираем данные
    const tasks=getTasksForToday();
    const balance=getMonthBalanceText();
    const streak=getStreakCount();
    const name=getMyName();

    // Формируем текст
    const taskLines=tasks.length>0
      ? tasks.slice(0,3).map(t=>`• ${t.title}${t.time?' в '+t.time:''}`).join('\n')
      : '• Дел на сегодня нет 🎉';

    const greeting=name?`Доброе утро, ${name}!`:'Доброе утро!';

    const body=[
      '📋 '+taskLines,
      `💰 Баланс: ${balance}`,
      streak>=2?`🔥 Серия: ${streak} дней`:streak===1?'🌱 Первый день ритма':null
    ].filter(Boolean).join('\n');

    // Отправляем на сервер
    const resp=await fetch(FAMILY_SERVER+'/schedule-morning',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        userId:PUSH_USER_ID,
        subscription:sub,
        type:'morning',
        title:'☀️ '+greeting,
        body:body,
        hour:8,
        minute:0
      })
    });

    const d=await resp.json();
    if(d.ok){
      localStorage.setItem(scheduleKey,todayKey());
      console.log('✅ Утренний пуш запланирован на 8:00');
    }
  }catch(e){
    console.log('scheduleMorningPush: нет связи или нет подписки');
  }
}
  /* ═══════════════════════════════════════════
   АВТО-ПЛАТЕЖИ
═══════════════════════════════════════════ */
/* ═══════════════════════════════════════════
   АВТО-ПЛАТЕЖИ
═══════════════════════════════════════════ */
function getAutoPays(){const d=load();return d.autopays||[];}
function setAutoPays(a){const d=load();d.autopays=a;save(d);}

let apRemind=true;
function toggleApRemind(){
  apRemind=!apRemind;
  const box=document.getElementById('ap-remind-box');
  box.classList.toggle('on',apRemind);
  box.textContent=apRemind?'✓':'';
}

document.addEventListener('change',e=>{
  if(e.target.id==='ap-freq'){
    const isMonthly=e.target.value==='monthly';
    document.getElementById('ap-day-field').style.display=isMonthly?'block':'none';
    document.getElementById('ap-dow-field').style.display=isMonthly?'none':'block';
  }
});

let editApId=null;
function openAutoPay(id){
  editApId=id||null;
  document.getElementById('ap-cat').innerHTML=
    getExpCats().map(c=>`<option value="${esc(c.name)}">${c.i} ${esc(c.name)}</option>`).join('');
  if(id){
    const ap=getAutoPays().find(x=>x.id===id);
    if(!ap)return;
    document.getElementById('ap-name').value=ap.name||'';
    document.getElementById('ap-amount').value=ap.amount||'';
    document.getElementById('ap-cat').value=ap.cat||'Прочее';
    document.getElementById('ap-freq').value=ap.freq||'monthly';
    document.getElementById('ap-day').value=ap.day||1;
    document.getElementById('ap-dow').value=ap.dow||1;
    apRemind=ap.remind!==false;
  }else{
    document.getElementById('ap-name').value='';
    document.getElementById('ap-amount').value='';
    document.getElementById('ap-day').value=new Date().getDate();
    apRemind=true;
  }
  const box=document.getElementById('ap-remind-box');
  box.classList.toggle('on',apRemind);
  box.textContent=apRemind?'✓':'';
  const freq=document.getElementById('ap-freq').value;
  document.getElementById('ap-day-field').style.display=freq==='monthly'?'block':'none';
  document.getElementById('ap-dow-field').style.display=freq==='weekly'?'block':'none';
  document.getElementById('modal-autopay').classList.add('on');
}
function closeAutoPay(){document.getElementById('modal-autopay').classList.remove('on');}
function openAutoPaysList(){renderAutoPaysList();document.getElementById('modal-autopays-list').classList.add('on');}
function closeAutoPaysList(){document.getElementById('modal-autopays-list').classList.remove('on');}

function saveAutoPay(){
  const name=document.getElementById('ap-name').value.trim();
  const amount=Number(document.getElementById('ap-amount').value)||0;
  const cat=document.getElementById('ap-cat').value||'Прочее';
  const freq=document.getElementById('ap-freq').value||'monthly';
  const day=Number(document.getElementById('ap-day').value)||1;
  const dow=Number(document.getElementById('ap-dow').value)||1;
  if(!name){toast('Введи название');return;}
  if(!amount){toast('Введи сумму');return;}
  const pays=getAutoPays();
  if(editApId){
    const x=pays.find(p=>p.id===editApId);
    if(x){x.name=name;x.amount=amount;x.cat=cat;x.freq=freq;x.day=day;x.dow=dow;x.remind=apRemind;}
  }else{
    pays.push({id:Date.now()+Math.floor(Math.random()*9999),name,amount,cat,freq,day,dow,remind:apRemind,lastPaid:null,createdAt:todayKey()});
  }
  setAutoPays(pays);
  closeAutoPay();
  renderAutoPaysList();
  toast('🔁 Платёж сохранён');
  vibrate(20);
}

async function delAutoPay(id){
  if(!await lumoConfirm('Будущие напоминания об этом платеже будут отменены.','Удалить регулярный платёж','Удалить',true))return;
  setAutoPays(getAutoPays().filter(x=>x.id!==id));
  renderAutoPaysList();
  toast('Удалено 🗑');
}

function nextPayDate(ap){
  const now=new Date();now.setHours(0,0,0,0);
  const y=now.getFullYear(),m=now.getMonth();
  if(ap.freq==='monthly'){
    const requested=Math.max(1,Math.min(31,Number(ap.day)||1));
    const makeDate=(yy,mm)=>{
      const last=new Date(yy,mm+1,0).getDate();
      return new Date(yy,mm,Math.min(requested,last));
    };
    const thisMonth=makeDate(y,m);
    const thisKey=dateKeyOf(thisMonth);
    if(thisMonth>now||(thisMonth.getTime()===now.getTime()&&ap.lastPaid!==thisKey))return thisMonth;
    return makeDate(y,m+1);
  }
  if(ap.freq==='weekly'){
    const target=ap.dow??1;
    const cur=now.getDay();
    let diff=(target-cur+7)%7;
    if(diff===0&&ap.lastPaid===todayKey())diff=7;
    const d=new Date(now);
    d.setDate(d.getDate()+diff);
    d.setHours(0,0,0,0);
    return d;
  }
  return now;
}

function getSmartSuggestions(){
  const d=load(),tk=todayKey(),out=[];
  const todayOpen=(d.tasks||[]).filter(t=>!t.done&&t.date===tk),todayAll=(d.tasks||[]).filter(t=>t.date===tk),loadMinutes=todayOpen.reduce((n,t)=>n+Number(t.duration||30),0),highEnergy=todayOpen.filter(t=>t.energy==='high').length;
  if(loadMinutes>480||todayOpen.length>8||highEnergy>3)out.push({id:'overload',level:'warn',title:'День перегружен',body:`${todayOpen.length} дел · около ${Math.floor(loadMinutes/60)} ч ${loadMinutes%60} мин · энергоёмких ${highEnergy}`,prompt:'Разгрузи мой день с учётом оценки времени и энергии и предложи что оставить а что перенести'});
  const overdue=(d.tasks||[]).filter(t=>!t.done&&t.date&&t.date<tk);
  if(overdue.length)out.push({id:'overdue',level:'bad',title:`Просрочено дел: ${overdue.length}`,body:overdue.slice(0,3).map(x=>x.title).join(' · '),prompt:`Помоги разобрать ${overdue.length} просроченных дел: предложи, что перенести, выполнить или удалить`});
  const budgets=d.budgets||{},stats=getExpenseStats();Object.entries(budgets).forEach(([cat,limit])=>{const used=(stats.byCat.find(x=>x.name===cat)||{}).sum||0,pct=limit?Math.round(used/limit*100):0;if(pct>=100)out.push({id:'budget:'+cat,level:'bad',title:`Лимит «${cat}» превышен`,body:`Потрачено ${fmtMoney(used)} ₽ из ${fmtMoney(limit)} ₽`,prompt:`Покажи расходы категории ${cat} и помоги понять, почему лимит превышен на ${fmtMoney(used-limit)} рублей`});else if(pct>=80)out.push({id:'budget-near:'+cat,level:'warn',title:`Лимит «${cat}» почти исчерпан`,body:`Использовано ${pct}%`,prompt:`Проанализируй расходы ${cat} и предложи, как не превысить лимит до конца месяца`})});
  const due=(d.autopays||[]).map(x=>({...x,_days:daysUntil(nextPayDateKey(x))})).filter(x=>x._days>=0&&x._days<=2);if(due.length)out.push({id:'payments',level:'warn',title:'Скоро регулярные платежи',body:due.slice(0,3).map(x=>`${x.name} · ${fmtMoney(x.amount)} ₽`).join(' · '),prompt:'Покажи ближайшие регулярные платежи и проверь, хватает ли текущего баланса'});
  const habits=(d.habits||[]).filter(h=>!h.log?.[tk]);if(habits.length)out.push({id:'habits',level:'info',title:`Осталось привычек: ${habits.length}`,body:habits.slice(0,4).map(x=>(x.icon||'')+' '+x.name).join(' · '),prompt:'Покажи невыполненные привычки сегодня и помоги составить короткий план на день'});
  const shopping=(d.shopping||[]).filter(x=>!x.done);if(shopping.length>=3)out.push({id:'shopping',level:'info',title:`В покупках ${shopping.length} позиций`,body:shopping.slice(0,4).map(x=>x.t).join(' · '),prompt:'Покажи текущий список покупок и помоги сгруппировать его по отделам магазина'});
  const oldDebts=(d.debts||[]).filter(x=>!x.closed&&x.remind&&(Date.now()-new Date(x.date).getTime())>=7*86400000);if(oldDebts.length)out.push({id:'debts',level:'warn',title:`Давно открытых долгов: ${oldDebts.length}`,body:oldDebts.slice(0,3).map(x=>`${x.name} · ${fmtMoney(x.amount)} ₽`).join(' · '),prompt:'Покажи незакрытые долги и предложи, кому пора напомнить'});
  if(new Date().getHours()>=18&&todayOpen.length){const done=todayAll.filter(t=>t.done).length;out.push({id:'evening-review',level:'info',title:'Разобрать остаток дня',body:`Осталось ${todayOpen.length} из ${todayAll.length} дел`,prompt:'Подведи итог дня покажи что выполнено и помоги решить что делать с остатком'});}
  const severity={bad:0,warn:1,info:2};
  return out.map((item,index)=>({...item,_order:index})).sort((a,b)=>(severity[a.level]??3)-(severity[b.level]??3)||a._order-b._order);
}
function renderSmartSuggestions(){const list=getSmartSuggestions().slice(0,1);if(!list.length)return'';return `<section class="smart-suggestions"><div class="smart-head"><span>Предложение Lumo</span></div>${list.map(x=>`<button class="smart-card ${x.level}" onclick="openInsightConversation(${jsArg(x.prompt)},${jsArg(x.title+' — '+x.body)})"><i>${ICONS.ai}</i><span><b>${esc(x.title)}</b><small>${esc(x.body)}</small></span><em>›</em></button>`).join('')}</section>`}
function openInsightConversation(prompt,summary){submitAssistantPrompt(prompt||summary||'')}
async function scheduleSmartInsightPush(force=false){
  const r=getInsightReminder(),suggestions=getSmartSuggestions(),top=suggestions[0]||{id:'none',title:'Предложение Lumo',body:'',prompt:''};
  const fingerprint=(top.id+':'+top.title+':'+top.body).slice(0,180),key=`insight_push:${todayKey()}:${r.time}:${r.enabled&&suggestions.length?'on':'off'}:${fingerprint}`;if(!force&&localStorage.getItem('insight_push_last_key')===key)return;
  try{const reg=await navigator.serviceWorker.ready,sub=await reg.pushManager.getSubscription();if(!sub)return;const [hour,minute]=String(r.time||'18:30').split(':').map(Number);const response=await fetch(FAMILY_SERVER+'/schedule-morning',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:PUSH_USER_ID,subscription:sub,type:'insight',scheduleId:'insight:'+PUSH_USER_ID,enabled:!!r.enabled&&!!suggestions.length,reminderTime:r.time,title:top.title,body:top.body,prompt:top.prompt,hour:hour||18,minute:minute||30,tzOffset:-new Date().getTimezoneOffset(),date:todayKey()})});if(response.ok)localStorage.setItem('insight_push_last_key',key)}catch(e){}
}

function dateKeyOf(d){
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}

function latestDueDate(ap){
  const now=new Date();now.setHours(0,0,0,0);
  if(ap.freq==='monthly'){
    const requested=Math.max(1,Math.min(31,Number(ap.day)||1));
    const makeDate=(yy,mm)=>{
      const last=new Date(yy,mm+1,0).getDate();
      return new Date(yy,mm,Math.min(requested,last));
    };
    let due=makeDate(now.getFullYear(),now.getMonth());
    if(due>now)due=makeDate(now.getFullYear(),now.getMonth()-1);
    return due;
  }
  const target=Number(ap.dow??1);
  const due=new Date(now);
  due.setDate(due.getDate()-((due.getDay()-target+7)%7));
  return due;
}

function nextPayDateKey(ap){
  const d=nextPayDate(ap);
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}

function daysUntil(dateKey){
  const now=new Date();now.setHours(0,0,0,0);
  const target=new Date(dateKey);
  return Math.round((target-now)/(1000*60*60*24));
}

function renderAutoPaysList(){
  const pays=getAutoPays();
  const el=document.getElementById('autopays-body');
  if(!el)return;
  if(!pays.length){
    el.innerHTML=`<div class="empty"><div>🔁</div>Нет регулярных платежей</div>`;
    return;
  }
  const sorted=pays.slice().sort((a,b)=>nextPayDateKey(a)<nextPayDateKey(b)?-1:1);
  let html='';
  sorted.forEach(ap=>{
    const nextKey=nextPayDateKey(ap);
    const days=daysUntil(nextKey);
    const st=catStyleOf(ap.cat||'Прочее');
    let urgency='';
    let cls='autopay-card';
    if(days===0){urgency='⚠️ Сегодня!';cls+=' today';}
    else if(days===1){urgency='Завтра';cls+=' upcoming';}
    else urgency=`через ${days} дн.`;
    const freqLbl=ap.freq==='monthly'?`📅 ${ap.day}-го числа`:`📅 каждую неделю`;
    html+=`<div class="${cls}">
      <div class="ap-ico">${st.i}</div>
      <div class="ap-info">
        <div class="ap-name">${esc(ap.name)}</div>
        <div class="ap-meta">${freqLbl} · ${esc(ap.cat)}${ap.remind?' · 🔔':''}</div>
        <div class="ap-meta" style="color:${days===0?'var(--bad)':days===1?'var(--warn)':'var(--muted)'};font-weight:${days<=1?700:400}">
          ${urgency} (${fmtDate(nextKey)})
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
        <div class="ap-amount">-${fmtMoney(ap.amount)}₽</div>
        <div style="display:flex;gap:4px">
          <button class="icon-action" onclick="openAutoPay(${ap.id})" aria-label="Изменить">${ICONS.edit}</button>
          <button class="icon-action" onclick="delAutoPay(${ap.id})" aria-label="Удалить">${ICONS.trash}</button>
        </div>
      </div>
    </div>`;
  });
  el.innerHTML=html;
}

function processAutoPays(){
  const pays=getAutoPays();
  const tk=todayKey();
  let changed=false;
  let messages=[];
  pays.forEach(ap=>{
    const dueKey=dateKeyOf(latestDueDate(ap));
    if(ap.lastPaid===dueKey)return;
    if(ap.createdAt&&dueKey<ap.createdAt)return;
    const d=load();
    if(!d.finance)d.finance=[];
    d.finance.push({
      id:Date.now()+Math.floor(Math.random()*9999),
      date:dueKey,desc:'🔁 '+ap.name,
      amount:ap.amount,category:ap.cat||'Прочее',
      autoPayId:ap.id
    });
    save(d);
    ap.lastPaid=dueKey;
    changed=true;
    messages.push(`🔁 ${ap.name}: -${fmtMoney(ap.amount)}₽`);
  });
  if(changed){
    setAutoPays(pays);
    setTimeout(()=>{messages.forEach((msg,i)=>{setTimeout(()=>toast(msg),i*2000);});},1500);
    checkBudgetAlerts();
  }
}

function checkBudgetAlerts(){
  getAutoPays().forEach(ap=>{if(ap.cat)checkBudgetAlert(ap.cat);});
}

const _scheduledReminderKeys=new Set();
const NOTIFICATION_LOG_KEY='notification_log_v1';
function notifyOnce(key,show){
  let log={};
  try{log=JSON.parse(localStorage.getItem(NOTIFICATION_LOG_KEY))||{};}catch(e){}
  if(log[key])return false;
  show();
  log[key]=Date.now();
  const cutoff=Date.now()-14*86400000;
  Object.keys(log).forEach(k=>{if(log[k]<cutoff)delete log[k];});
  try{localStorage.setItem(NOTIFICATION_LOG_KEY,JSON.stringify(log));}catch(e){}
  return true;
}

function scheduleAutoPayReminders(){
  const pays=getAutoPays();
  if(!('Notification'in window)||Notification.permission!=='granted')return;
  pays.forEach(ap=>{
    if(!ap.remind)return;
    const nextKey=nextPayDateKey(ap);
    const days=daysUntil(nextKey);
    if(days===1){
      const notifyHour=load().notifyHour||'09:00';
      const[hh,mm]=notifyHour.split(':').map(Number);
      const when=new Date();
      when.setHours(hh,mm,0,0);
      const ms=when.getTime()-Date.now();
      const reminderKey=`autopay:${ap.id}:${nextKey}:tomorrow`;
      if(ms>0&&ms<86400000&&!_scheduledReminderKeys.has(reminderKey)){
        _scheduledReminderKeys.add(reminderKey);
        setTimeout(()=>{
          _scheduledReminderKeys.delete(reminderKey);
          if(inQuietHours())return;
          notifyOnce(reminderKey,()=>{
            try{new Notification('🔁 Завтра спишется '+ap.name,{body:`-${fmtMoney(ap.amount)}₽ · ${ap.cat||''}`,icon:'assets/icons/icon.svg'});vibrate([30,50,30]);}catch(e){}
          });
        },ms);
      }
    }
    if(days===0){
      notifyOnce(`autopay:${ap.id}:${nextKey}:today`,()=>{
        try{new Notification('💳 Сегодня спишется '+ap.name,{body:`-${fmtMoney(ap.amount)}₽`,icon:'assets/icons/icon.svg'});}catch(e){}
      });
    }
  });
}

function renderAutoPayBlock(){
  const pays=getAutoPays();
  if(!pays.length){
    return '';
  }
  const sorted=pays.slice().sort((a,b)=>nextPayDateKey(a)<nextPayDateKey(b)?-1:1);
  let html=`<div class="fin-log-h">🔁 Регулярные платежи
    <button onclick="openAutoPaysList()" style="background:none;border:none;color:var(--brand);font-size:.75rem;cursor:pointer;text-decoration:underline;margin-left:8px">все</button>
  </div>`;
  sorted.slice(0,3).forEach(ap=>{
    const nextKey=nextPayDateKey(ap);
    const days=daysUntil(nextKey);
    const st=catStyleOf(ap.cat||'Прочее');
    let urgency='';
    let cls='autopay-card';
    if(days===0){urgency='⚠️ Сегодня!';cls+=' today';}
    else if(days===1){urgency='Завтра ⚠️';cls+=' upcoming';}
    else urgency=`через ${days} дн.`;
    html+=`<div class="${cls}" style="margin:0 16px 8px">
      <div class="ap-ico">${st.i}</div>
      <div class="ap-info">
        <div class="ap-name">${esc(ap.name)}</div>
        <div class="ap-meta" style="color:${days<=1?'var(--warn)':'var(--muted)'};font-weight:${days<=1?700:400}">${urgency}</div>
      </div>
      <div class="ap-amount">-${fmtMoney(ap.amount)}₽</div>
    </div>`;
  });
  if(pays.length>3){
    html+=`<div style="text-align:center;margin:0 16px 14px;font-size:.8rem;color:var(--muted)">
      и ещё ${pays.length-3}...
      <button onclick="openAutoPaysList()" style="background:none;border:none;color:var(--brand);cursor:pointer;text-decoration:underline">показать</button>
    </div>`;
  }
  return html;
}

/* ═══════════════════════════════════════════
   ДОЛГИ
═══════════════════════════════════════════ */
function getDebts(){const d=load();return d.debts||[];}
function setDebts(dts){const d=load();d.debts=dts;save(d);}

let debtType='tome';
let debtRemind=true;

function pickDebtType(t){
  debtType=t;
  document.getElementById('debt-type-tome').classList.toggle('on',t==='tome');
  document.getElementById('debt-type-iowe').classList.toggle('on',t==='iowe');
}

function toggleDebtRemind(){
  debtRemind=!debtRemind;
  const box=document.getElementById('debt-remind-box');
  box.classList.toggle('on',debtRemind);
  box.textContent=debtRemind?'✓':'';
}

function openDebtModal(){
  debtType='tome';debtRemind=true;
  pickDebtType('tome');
  document.getElementById('debt-name').value='';
  document.getElementById('debt-amount').value='';
  document.getElementById('debt-desc').value='';
  document.getElementById('debt-date').value=todayKey();
  const box=document.getElementById('debt-remind-box');
  box.classList.add('on');box.textContent='✓';
  document.getElementById('modal-debt').classList.add('on');
}
function closeDebtModal(){document.getElementById('modal-debt').classList.remove('on');}
function openDebtsList(){renderDebtsList();document.getElementById('modal-debts-list').classList.add('on');}
function closeDebtsList(){document.getElementById('modal-debts-list').classList.remove('on');}

function saveDebt(){
  const name=document.getElementById('debt-name').value.trim();
  const amount=Number(document.getElementById('debt-amount').value)||0;
  const desc=document.getElementById('debt-desc').value.trim();
  const date=document.getElementById('debt-date').value||todayKey();
  if(!name){toast('Введи имя');return;}
  if(!amount){toast('Введи сумму');return;}
  const debts=getDebts();
  debts.push({
    id:Date.now()+Math.floor(Math.random()*9999),
    type:debtType,name,amount,desc,date,
    remind:debtRemind,closed:false,closedDate:null
  });
  setDebts(debts);
  closeDebtModal();
  renderDebtsList();
  confetti();vibrate(20);
  toast(debtType==='tome'?'💚 Долг записан — тебе должны!':'❤️ Долг записан — ты должен');
}

function closeDebt(id){
  const debts=getDebts();
  const x=debts.find(d=>d.id===id);
  if(!x)return;
  x.closed=true;x.closedDate=todayKey();
  setDebts(debts);
  renderDebtsList();
  confetti();vibrate([30,50,30]);
  toast(x.type==='tome'?'💚 Деньги получены!':'✅ Долг отдан!');
}

function reopenDebt(id){
  const debts=getDebts();
  const x=debts.find(d=>d.id===id);
  if(x){x.closed=false;x.closedDate=null;}
  setDebts(debts);
  renderDebtsList();
  toast('Долг восстановлен');
}

async function delDebt(id){
  if(!await lumoConfirm('Запись и её статус будут удалены.','Удалить долг','Удалить',true))return;
  setDebts(getDebts().filter(x=>x.id!==id));
  renderDebtsList();
  toast('Удалено 🗑');
}

function renderDebtsList(){
  const el=document.getElementById('debts-body');
  if(!el)return;
  const debts=getDebts();
  const active=debts.filter(d=>!d.closed);
  const closed=debts.filter(d=>d.closed);
  const tome=active.filter(d=>d.type==='tome').reduce((s,d)=>s+d.amount,0);
  const iowe=active.filter(d=>d.type==='iowe').reduce((s,d)=>s+d.amount,0);
  const balance=tome-iowe;
  let html='';
  if(active.length){
    html+=`<div class="debt-summary">
      <div class="debt-sum-item"><b style="color:var(--ok)">+${fmtMoney(tome)}₽</b><small>Мне должны</small></div>
      <div class="debt-sum-item"><b style="color:var(--bad)">-${fmtMoney(iowe)}₽</b><small>Я должен</small></div>
      <div class="debt-sum-item"><b style="color:${balance>=0?'var(--ok)':'var(--bad)'}">${balance>=0?'+':''}${fmtMoney(balance)}₽</b><small>Баланс</small></div>
    </div>`;
  }
  if(!debts.length){
    html+=`<div class="empty"><div>💸</div>Долгов нет — отлично!</div>`;
    el.innerHTML=html;return;
  }
  if(active.length){
    html+=`<div class="sub-h">Активные (${active.length})</div>`;
    active.forEach(dt=>{
      const days=Math.round((Date.now()-new Date(dt.date).getTime())/(1000*60*60*24));
      const overdue=dt.remind&&days>=7;
      html+=`<div class="debt-card ${dt.type}">
        <div class="debt-bar"></div>
        <div class="debt-info">
          <div class="debt-who">${dt.type==='tome'?'💚':'❤️'} ${esc(dt.name)}${overdue?'<span class="debt-overdue-badge">'+days+'дн.</span>':''}</div>
          ${dt.desc?`<div class="debt-meta">📝 ${esc(dt.desc)}</div>`:''}
          <div class="debt-meta">📅 ${fmtDate(dt.date)}${dt.remind?' · 🔔':''}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
          <div class="debt-amount">${dt.type==='tome'?'+':'−'}${fmtMoney(dt.amount)}₽</div>
          <div style="display:flex;gap:4px">
            <button onclick="closeDebt(${dt.id})" style="background:var(--ok);color:#fff;border:none;border-radius:8px;padding:4px 8px;font-size:.72rem;cursor:pointer;white-space:nowrap">${dt.type==='tome'?'✅ Вернул':'✅ Отдал'}</button>
            <button class="icon-action" onclick="delDebt(${dt.id})" aria-label="Удалить">${ICONS.trash}</button>
          </div>
        </div>
      </div>`;
    });
  }
  if(closed.length){
    html+=`<div class="sub-h" style="margin-top:16px;cursor:pointer"
      onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'">
      ✅ Закрытые (${closed.length}) ▾</div>
    <div style="display:none">`;
    closed.forEach(dt=>{
      html+=`<div class="debt-card ${dt.type} closed">
        <div class="debt-bar"></div>
        <div class="debt-info">
          <div class="debt-who">${esc(dt.name)}</div>
          ${dt.desc?`<div class="debt-meta">📝 ${esc(dt.desc)}</div>`:''}
          <div class="debt-meta">📅 ${fmtDate(dt.date)}${dt.closedDate?' → закрыт '+fmtDate(dt.closedDate):''}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
          <div class="debt-amount">${dt.type==='tome'?'+':'−'}${fmtMoney(dt.amount)}₽</div>
          <div style="display:flex;gap:4px">
            <button onclick="reopenDebt(${dt.id})" style="background:none;border:1px solid var(--line);border-radius:8px;padding:3px 7px;font-size:.7rem;cursor:pointer">↩️</button>
            <button class="icon-action" onclick="delDebt(${dt.id})" aria-label="Удалить">${ICONS.trash}</button>
          </div>
        </div>
      </div>`;
    });
    html+=`</div>`;
  }
  el.innerHTML=html;
}

function scheduleDebtReminders(){
  const debts=getDebts();
  if(!('Notification'in window)||Notification.permission!=='granted')return;
  debts.forEach(dt=>{
    if(dt.closed||!dt.remind)return;
    const days=Math.round((Date.now()-new Date(dt.date).getTime())/(1000*60*60*24));
    if(days===7){
      notifyOnce(`debt:${dt.id}:${days}`,()=>{
        try{
          new Notification(
            dt.type==='tome'?`💸 ${dt.name} должен тебе уже неделю!`:`💸 Ты должен ${dt.name} уже неделю!`,
            {body:`${fmtMoney(dt.amount)}₽${dt.desc?' · '+dt.desc:''}`,icon:'assets/icons/icon.svg'}
          );
          vibrate([30,50,30,50,30]);
        }catch(e){}
      });
    }
    if(days>7&&days%7===0){
      notifyOnce(`debt:${dt.id}:${days}`,()=>{
        try{
          new Notification(
            dt.type==='tome'?`⏰ ${dt.name} должен тебе ${days} дней!`:`⏰ Ты должен ${dt.name} уже ${days} дней!`,
            {body:`${fmtMoney(dt.amount)}₽`,icon:'assets/icons/icon.svg'}
          );
          vibrate([30,50,30]);
        }catch(e){}
      });
    }
  });
}

function renderDebtBlock(){
  const debts=getDebts();
  const active=debts.filter(d=>!d.closed);
  if(!active.length){
    return '';
  }
  const tome=active.filter(d=>d.type==='tome').reduce((s,d)=>s+d.amount,0);
  const iowe=active.filter(d=>d.type==='iowe').reduce((s,d)=>s+d.amount,0);
  const balance=tome-iowe;
  let html=`<div class="fin-log-h">💸 Долги
    <button onclick="openDebtsList()" style="background:none;border:none;color:var(--brand);font-size:.75rem;cursor:pointer;text-decoration:underline;margin-left:8px">все</button>
  </div>
  <div class="debt-summary" style="margin:0 16px 12px">
    <div class="debt-sum-item"><b style="color:var(--ok)">+${fmtMoney(tome)}₽</b><small>Мне должны</small></div>
    <div class="debt-sum-item"><b style="color:var(--bad)">-${fmtMoney(iowe)}₽</b><small>Я должен</small></div>
    <div class="debt-sum-item"><b style="color:${balance>=0?'var(--ok)':'var(--bad)'}">${balance>=0?'+':''}${fmtMoney(balance)}₽</b><small>Баланс</small></div>
  </div>`;
  active.slice(0,3).forEach(dt=>{
    const days=Math.round((Date.now()-new Date(dt.date).getTime())/(1000*60*60*24));
    const overdue=dt.remind&&days>=7;
    html+=`<div class="debt-card ${dt.type}" style="margin:0 16px 8px">
      <div class="debt-bar"></div>
      <div class="debt-info">
        <div class="debt-who">${dt.type==='tome'?'💚':'❤️'} ${esc(dt.name)}${overdue?'<span class="debt-overdue-badge">'+days+'д.</span>':''}</div>
        ${dt.desc?`<div class="debt-meta">${esc(dt.desc)}</div>`:''}
      </div>
      <div class="debt-amount">${dt.type==='tome'?'+':'−'}${fmtMoney(dt.amount)}₽</div>
    </div>`;
  });
  if(active.length>3){
    html+=`<div style="text-align:center;margin:0 16px 14px;font-size:.8rem;color:var(--muted)">
      и ещё ${active.length-3}...
      <button onclick="openDebtsList()" style="background:none;border:none;color:var(--brand);cursor:pointer;text-decoration:underline">показать</button>
    </div>`;
  }
  return html;
}
