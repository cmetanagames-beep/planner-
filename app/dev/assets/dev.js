const API = 'https://pushevgen.duckdns.org';
const $ = id => document.getElementById(id);
let token = sessionStorage.getItem('lumoDeveloperToken') || '';
let timer = 0;
const formatBytes = value => { const mb = Number(value || 0) / 1048576; return `${mb.toFixed(mb >= 10 ? 0 : 1)} МБ`; };
const formatTime = value => value ? new Intl.DateTimeFormat('ru-RU',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(new Date(value)) : '—';
const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));

function showLogin(message='') {
  clearInterval(timer); $('dashboard').hidden = true; $('loginView').hidden = false; $('logoutBtn').hidden = true; $('loginError').textContent = message;
}
function metric(label,value,detail=''){ return `<article class="metric"><strong>${escapeHtml(value)}</strong><small>${escapeHtml(label)}${detail?` · ${escapeHtml(detail)}`:''}</small></article>`; }
function service(label,ok,detail){ return `<article class="service"><span class="service-icon">${ok?'✓':'!'}</span><div><strong>${escapeHtml(label)}</strong><span class="state ${ok?'':'bad'}">${ok?'работает':'недоступен'}</span><small>${escapeHtml(detail||'')}</small></div></article>`; }

function render(data) {
  const allOk = Object.entries(data.services).filter(([key])=>key!=='whisperBusy').every(([,value])=>value);
  $('overallDot').className = `dot ${allOk?'ok':'bad'}`; $('overallText').textContent = allOk ? 'Все основные сервисы работают' : 'Есть сервис, требующий внимания'; $('updatedAt').textContent = `Обновлено ${formatTime(data.generatedAt)} · uptime ${Math.floor(data.server.uptimeSec/3600)} ч`;
  $('serviceGrid').innerHTML = service('Push',data.services.push,`${data.database.subscriptions} подписок`) + service('Whisper',data.services.whisper,data.services.whisperBusy?'сейчас распознаёт аудио':'свободен') + service('SQLite',data.services.database,formatBytes(data.database.bytes));
  $('metricGrid').innerHTML = metric('Пользователи',data.database.users) + metric('Семьи',data.database.families,`${data.database.familyMembers} участников`) + metric('Облачные копии',data.database.cloudCopies) + metric('Активные расписания',data.database.activeSchedules,`из ${data.database.schedules}`);
  const d=data.delivery24h, rate=d.total?Math.round(d.sent/d.total*100):100; $('deliveryRate').textContent=`${rate}%`; $('deliveryStats').innerHTML=metric('Всего',d.total)+metric('Доставлено',d.sent)+metric('Ошибки',d.failed);
  $('scheduleCount').textContent=String(data.schedules.length); $('scheduleList').className=`table-list${data.schedules.length?'':' empty'}`; $('scheduleList').innerHTML=data.schedules.length?data.schedules.map(row=>`<div class="row"><div class="truncate"><strong>${escapeHtml(row.title||row.type)}</strong><br><small>${escapeHtml(row.type)} · ${escapeHtml(row.userId)}</small></div><span class="mono">${String(row.hour).padStart(2,'0')}:${String(row.minute).padStart(2,'0')}</span><span class="${row.enabled?'good':'fail'}">${row.enabled?'включено':'выключено'}</span><small>последний: ${escapeHtml(row.lastSentDay||'—')}</small></div>`).join(''):'Расписаний пока нет';
  $('pushList').className=`table-list${data.recentPush.length?'':' empty'}`; $('pushList').innerHTML=data.recentPush.length?data.recentPush.map(row=>`<div class="row"><div class="truncate"><strong>${escapeHtml(row.title||row.type)}</strong><br><small>${escapeHtml(row.type)} · ${escapeHtml(row.userId)}</small></div><span class="${row.ok?'good':'fail'}">${row.ok?'доставлено':'ошибка'}</span><small>${formatTime(row.ts)}</small><small class="truncate">${escapeHtml(row.error||String(row.statusCode||''))}</small></div>`).join(''):'Журнал пока пуст';
}

async function refresh() {
  if(!token) return showLogin();
  $('refreshBtn').disabled=true;
  try {
    const response=await fetch(`${API}/developer/status`,{headers:{'x-developer-token':token},cache:'no-store'});
    if(response.status===401){ sessionStorage.removeItem('lumoDeveloperToken'); token=''; return showLogin('Неверный или устаревший ключ'); }
    if(!response.ok) throw new Error(`Сервер ответил ${response.status}`);
    const data=await response.json(); $('loginView').hidden=true; $('dashboard').hidden=false; $('logoutBtn').hidden=false; render(data);
  } catch(error) { if(!$('dashboard').hidden){ $('overallDot').className='dot bad'; $('overallText').textContent='Нет связи с сервером'; $('updatedAt').textContent=error.message; } else showLogin(`Не удалось подключиться: ${error.message}`); }
  finally { $('refreshBtn').disabled=false; }
}
function scheduleRefresh(){ clearInterval(timer); if($('autoRefresh').checked) timer=setInterval(refresh,30000); }
$('loginForm').addEventListener('submit',event=>{event.preventDefault();token=$('tokenInput').value.trim();sessionStorage.setItem('lumoDeveloperToken',token);refresh().then(scheduleRefresh);});
$('showToken').addEventListener('click',()=>{$('tokenInput').type=$('tokenInput').type==='password'?'text':'password';});
$('refreshBtn').addEventListener('click',refresh); $('autoRefresh').addEventListener('change',scheduleRefresh);
$('logoutBtn').addEventListener('click',()=>{token='';sessionStorage.removeItem('lumoDeveloperToken');$('tokenInput').value='';showLogin();});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&token)refresh();});
if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
if(token){refresh();scheduleRefresh();}else showLogin();
