const API = 'https://pushevgen.duckdns.org';
const $ = id => document.getElementById(id);
let token = sessionStorage.getItem('lumoDeveloperToken') || '';
let timer = 0, latest = null, showAllErrors = false, currentSupportCode = '', currentSupport = null, deviceFilter = 'all';
const formatBytes = value => { const mb = Number(value || 0) / 1048576; return `${mb.toFixed(mb >= 10 ? 0 : 1)} МБ`; };
const formatTime = value => value ? new Intl.DateTimeFormat('ru-RU',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(new Date(value)) : '—';
const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));

function showLogin(message='') { clearInterval(timer); $('dashboard').hidden=true; $('loginView').hidden=false; $('logoutBtn').hidden=true; $('loginError').textContent=message; }
function metric(label,value,detail=''){ return `<article class="metric"><strong>${escapeHtml(value)}</strong><small>${escapeHtml(label)}${detail?` · ${escapeHtml(detail)}`:''}</small></article>`; }
function service(label,ok,detail){ return `<article class="service"><span class="service-icon">${ok?'✓':'!'}</span><div><strong>${escapeHtml(label)}</strong><span class="state ${ok?'':'bad'}">${ok?'работает':'недоступен'}</span><small>${escapeHtml(detail||'')}</small></div></article>`; }
function empty(list,text){ list.className='table-list empty'; list.textContent=text; }
function headers(){ return {'x-developer-token':token,'Content-Type':'application/json'}; }
async function action(path,body={}) { const response=await fetch(`${API}${path}`,{method:'POST',headers:headers(),body:JSON.stringify(body)}); const data=await response.json().catch(()=>({})); if(!response.ok) throw new Error(data.error||`Сервер ответил ${response.status}`); return data; }
async function query(path) { const response=await fetch(`${API}${path}`,{headers:headers(),cache:'no-store'}); const data=await response.json().catch(()=>({})); if(!response.ok) throw new Error(data.error||`Сервер ответил ${response.status}`); return data; }
function toast(message,bad=false){ const panel=$('alertPanel'); panel.hidden=false; panel.className=`panel alert-panel ${bad?'bad':''}`; panel.textContent=message; clearTimeout(panel._timer); panel._timer=setTimeout(()=>panel.hidden=true,5000); }
const versionRank=value=>Number(String(value||'').match(/\d+/)?.[0]||0);
function currentVersion(data=latest){ return Math.max(0,...(data?.versions||[]).map(row=>versionRank(row.version))); }
function deviceNeedsAttention(row,version=currentVersion()){ return !!(row.blocked||row.stale||!row.pushSubscribed||(version&&versionRank(row.appVersion)<version)); }
function renderDevices(){
  const devices=latest?.devices||[], version=currentVersion(), filters={
    all:()=>true,
    attention:row=>deviceNeedsAttention(row,version),
    outdated:row=>version&&versionRank(row.appVersion)<version,
    'no-push':row=>!row.pushSubscribed&&!row.blocked
  };
  const rows=devices.filter(filters[deviceFilter]||filters.all), list=$('deviceList');
  document.querySelectorAll('[data-device-filter]').forEach(button=>button.classList.toggle('active',button.dataset.deviceFilter===deviceFilter));
  $('deviceCount').textContent=deviceFilter==='all'?String(devices.length):`${rows.length} / ${devices.length}`;
  if(!rows.length)return empty(list,deviceFilter==='all'?'Устройства ещё не передавали диагностику':'По этому фильтру проблем нет');
  list.className='table-list';
  list.innerHTML=rows.map(row=>`<div class="row device-row ${row.stale?'resolved':''} ${row.blocked?'blocked-row':''}"><div><strong>${escapeHtml(row.platform||'Устройство')} · ${escapeHtml(row.supportCode||'без кода')}</strong><br><small>${escapeHtml(row.userId)} · ${escapeHtml(row.displayMode||'')}</small></div><span class="mono">${escapeHtml(row.appVersion||'—')}</span><span class="${row.blocked?'fail':row.pushSubscribed&&!row.stale?'good':'fail'}">${row.blocked?'доступ выключен':row.stale?'неактивно 7+ дней':row.pushSubscribed?'push готов':'нет push'}</span><div class="row-action"><small>${formatTime(row.lastSeen)}</small><button class="chip open-support" data-support-code="${escapeHtml(row.supportCode||'')}">Открыть</button><button class="chip test-push" data-device-id="${escapeHtml(row.deviceId)}">Тест</button><button class="chip update-device" data-device-id="${escapeHtml(row.deviceId)}">Обновить</button></div></div>`).join('');
}
function attentionCard({label,value,detail,page,filter='',tone='good'}){
  return `<button class="attention-card ${tone}" data-attention-page="${page}" ${filter?`data-attention-filter="${filter}"`:''}><span class="attention-value">${escapeHtml(value)}</span><span class="attention-copy"><strong>${escapeHtml(label)}</strong><small>${escapeHtml(detail)}</small></span><span class="attention-arrow" aria-hidden="true">›</span></button>`;
}
function renderAttention(data){
  const devices=data.devices||[], version=currentVersion(data), now=Date.now();
  const outdated=devices.filter(row=>version&&versionRank(row.appVersion)<version).length;
  const noPush=devices.filter(row=>!row.pushSubscribed&&!row.blocked).length;
  const openErrors=(data.errors||[]).filter(row=>!row.resolvedAt).length;
  const failedPush=Number(data.delivery24h?.failed||0);
  const newestBackup=(data.backups||[]).map(row=>new Date(row.createdAt).getTime()).filter(Number.isFinite).sort((a,b)=>b-a)[0]||0;
  const backupHours=newestBackup?Math.max(0,Math.floor((now-newestBackup)/3600000)):null;
  const backupBad=backupHours===null||backupHours>26;
  const restore=data.restoreTest||null,restoreHours=restore?.checkedAt?Math.max(0,Math.floor((now-restore.checkedAt)/3600000)):null,restoreBad=!restore?.ok||restoreHours===null||restoreHours>24*7;
  const issues=outdated+noPush+openErrors+failedPush+(backupBad?1:0)+(restoreBad?1:0);
  $('attentionBadge').textContent=issues?String(issues):'всё чисто';
  $('attentionBadge').className=`badge ${issues?'danger':''}`;
  $('attentionGrid').innerHTML=[
    attentionCard({label:'Устаревшие устройства',value:outdated,detail:version?`текущая версия v${version}`:'версий пока нет',page:'users',filter:'outdated',tone:outdated?'warn':'good'}),
    attentionCard({label:'Устройства без push',value:noPush,detail:'активные клиенты без подписки',page:'users',filter:'no-push',tone:noPush?'warn':'good'}),
    attentionCard({label:'Новые ошибки',value:openErrors,detail:'ещё не отмечены исправленными',page:'errors',tone:openErrors?'danger':'good'}),
    attentionCard({label:'Ошибки доставки',value:failedPush,detail:'за последние 24 часа',page:'push',tone:failedPush?'danger':'good'}),
    attentionCard({label:'Резервная копия',value:backupHours===null?'нет':`${backupHours} ч`,detail:backupBad?'нужно создать свежую копию':'копия актуальна',page:'system',tone:backupBad?'warn':'good'}),
    attentionCard({label:'Проверка восстановления',value:restore?.ok?'пройдена':'нет',detail:restoreBad?'нужно проверить копию':`проверено ${restoreHours} ч назад`,page:'system',tone:restoreBad?'warn':'good'})
  ].join('');
}

function duplicateGroups(rows) {
  const groups=new Map();
  for(const row of rows||[]){ const key=`${row.userId}|${row.type}|${row.title}`; const list=groups.get(key)||[]; list.push(row); groups.set(key,list); }
  return [...groups.values()].filter(list=>list.length>1&&Math.max(...list.map(x=>x.ts))-Math.min(...list.map(x=>x.ts))<10*60*1000).sort((a,b)=>b.length-a.length);
}
function renderErrors(){
  const rows=(latest?.errors||[]).filter(row=>showAllErrors||!row.resolvedAt), list=$('errorList');
  $('errorsOpen').classList.toggle('active',!showAllErrors); $('errorsAll').classList.toggle('active',showAllErrors);
  if(!rows.length)return empty(list,showAllErrors?'Ошибок нет':'Новых ошибок нет');
  list.className='table-list'; list.innerHTML=rows.map(row=>`<div class="row error-row ${row.resolvedAt?'resolved':''}"><div class="truncate"><strong>${escapeHtml(row.kind||'Ошибка')}</strong><br><small>${escapeHtml(row.message)}</small></div><small>${escapeHtml(row.appVersion||'—')} · ${escapeHtml(row.path||'')}</small><small>${formatTime(row.ts)}</small><button class="chip resolve-error" data-error-id="${row.id}" data-resolved="${row.resolvedAt?'1':'0'}">${row.resolvedAt?'Вернуть':'Исправлено'}</button></div>`).join('');
}
function render(data) {
  latest=data;
  const allOk=Object.entries(data.services).filter(([key])=>!['whisperBusy','telegramLinked'].includes(key)).every(([,value])=>value!==false);
  $('overallDot').className=`dot ${allOk?'ok':'bad'}`; $('overallText').textContent=allOk?'Все основные сервисы работают':'Есть сервис, требующий внимания'; $('updatedAt').textContent=`Обновлено ${formatTime(data.generatedAt)} · uptime ${Math.floor(data.server.uptimeSec/3600)} ч`;
  $('serviceGrid').innerHTML=service('Push',data.services.push,`${data.database.subscriptions} подписок`)+service('Whisper',data.services.whisper,data.services.whisperBusy?'распознаёт аудио':'свободен')+service('SQLite',data.services.database,formatBytes(data.database.bytes))+service('Telegram',data.services.telegram,data.services.telegramLinked?'чат подключён':'нажмите /start');
  const activity=data.activity||{};$('metricGrid').innerHTML=metric('Профили',data.database.users)+metric('Активные пользователи 24ч',activity.activeUsers24h||0,`${activity.activeUsers7d||0} за 7 дней`)+metric('Активные устройства 24ч',activity.activeDevices24h||0,`${activity.activeDevices7d||0} за 7 дней`)+metric('Облачные копии',data.database.cloudCopies,`${activity.cloudSyncs24h||0} обновлено за 24ч`)+metric('Push-подписки',data.database.subscriptions)+metric('Активные расписания',data.database.activeSchedules,`из ${data.database.schedules}`);
  renderAttention(data);
  const host=data.host||{},hm=host.memory||{},disk=host.disk||{},proc=data.server.memory||{};$('serverNode').textContent=`${data.server.node} · PID ${data.server.pid}`;$('serverMetricGrid').innerHTML=metric('Процесс',formatBytes(proc.rss),`heap ${formatBytes(proc.heapUsed)}`)+metric('Память VPS',formatBytes(hm.used),`свободно ${formatBytes(hm.free)}`)+metric('Диск',formatBytes(disk.used),`свободно ${formatBytes(disk.free)}`)+metric('Load average',Number(host.load?.[0]||0).toFixed(2),`${host.cpuCores||0} CPU`);

  renderDevices();
  const versions=data.versions||[], total=versions.reduce((sum,x)=>sum+Number(x.count||0),0), versionList=$('versionList');
  versionList.className=`version-list${versions.length?'':' empty'}`; versionList.innerHTML=versions.length?versions.map(row=>`<div class="version"><div><strong>${escapeHtml(row.version||'без версии')}</strong><small>${row.count} устройств · ${formatTime(row.lastSeen)}</small></div><span style="--w:${total?Math.round(row.count/total*100):0}%"></span></div>`).join(''):'Нет данных';
  renderErrors();

  const upcoming=data.upcoming||[]; $('upcomingCount').textContent=String(upcoming.length); const upcomingList=$('upcomingList'); upcomingList.className=`timeline${upcoming.length?'':' empty'}`; upcomingList.innerHTML=upcoming.length?upcoming.map(row=>`<div class="timeline-item ${row.important?'important':''}"><time>${formatTime(row.at)}</time><div><strong>${escapeHtml(row.ref)}</strong><small>${escapeHtml(row.kind)} · ${escapeHtml(row.stage)} · ${escapeHtml(row.userId)}</small></div></div>`).join(''):'Нет запланированных уведомлений';
  const duplicates=duplicateGroups(data.recentPush); $('duplicateBadge').textContent=String(duplicates.length); $('duplicateBadge').className=`badge ${duplicates.length?'danger':''}`; const duplicateList=$('duplicateList'); if(!duplicates.length)empty(duplicateList,'Повторов не обнаружено'); else {duplicateList.className='table-list'; duplicateList.innerHTML=duplicates.map(group=>`<div class="row"><div><strong>${escapeHtml(group[0].title)}</strong><br><small>${escapeHtml(group[0].type)} · ${escapeHtml(group[0].userId)}</small></div><span class="fail">${group.length} раз</span><small>${formatTime(group[group.length-1].ts)}</small><small>за 10 минут</small></div>`).join('');}
  const traces=data.recentTrace||[];$('traceCount').textContent=String(traces.length);const traceList=$('traceList');traceList.className=`table-list${traces.length?'':' empty'}`;traceList.innerHTML=traces.length?traces.map(row=>`<div class="compact-row"><span class="${['failed','suppressed'].includes(row.stage)?'fail':'good'}">${['sent','displayed','opened','action'].includes(row.stage)?'✓':'•'}</span><div class="truncate"><strong>${escapeHtml(row.stage)}</strong> · ${escapeHtml(row.type)}<br><small>${escapeHtml(row.traceKey)} · ${escapeHtml(row.detail||'')}</small></div><small>${formatTime(row.ts)}</small></div>`).join(''):'Трассировка пока пуста';

  const d=data.delivery24h, rate=d.total?Math.round(d.sent/d.total*100):100; $('deliveryRate').textContent=`${rate}%`; $('deliveryStats').innerHTML=metric('Всего',d.total)+metric('Доставлено',d.sent)+metric('Ошибки',d.failed);
  $('scheduleCount').textContent=String(data.schedules.length); $('scheduleList').className=`table-list${data.schedules.length?'':' empty'}`; $('scheduleList').innerHTML=data.schedules.length?data.schedules.map(row=>`<div class="row"><div class="truncate"><strong>${escapeHtml(row.title||row.type)}</strong><br><small>${escapeHtml(row.type)} · ${escapeHtml(row.userId)}</small></div><span class="mono">${String(row.hour).padStart(2,'0')}:${String(row.minute).padStart(2,'0')}</span><span class="${row.enabled?'good':'fail'}">${row.enabled?'включено':'выключено'}</span><small>последний: ${escapeHtml(row.lastSentDay||'—')}</small></div>`).join(''):'Расписаний пока нет';
  $('pushList').className=`table-list${data.recentPush.length?'':' empty'}`; $('pushList').innerHTML=data.recentPush.length?data.recentPush.map(row=>`<div class="row"><div class="truncate"><strong>${escapeHtml(row.title||row.type)}</strong><br><small>${escapeHtml(row.type)} · ${escapeHtml(row.userId)}</small></div><span class="${row.ok?'good':'fail'}">${row.ok?'доставлено':'ошибка'}</span><small>${formatTime(row.ts)}</small><small class="truncate">${escapeHtml(row.error||String(row.statusCode||''))}</small></div>`).join(''):'Журнал пока пуст';

  const maintenance=data.maintenance||{enabled:false,features:{}}; $('maintenanceEnabled').checked=!!maintenance.enabled; $('maintenanceMessage').value=maintenance.message||''; $('maintenanceState').textContent=maintenance.enabled?'включён':'выключен'; $('maintenanceState').className=`badge ${maintenance.enabled?'danger':''}`; document.querySelectorAll('.feature-toggle').forEach(input=>input.checked=maintenance.features?.[input.dataset.feature]!==false);
  $('telegramState').innerHTML=`<span class="${data.telegram?.linked?'good':'fail'}">${data.telegram?.linked?'● чат подключён':'● ожидается /start'}</span> <small>${escapeHtml(data.telegram?.username||'')}</small>`; const telegramList=$('telegramList'), telegramRows=data.telegramLog||[]; telegramList.className=`table-list${telegramRows.length?'':' empty'}`; telegramList.innerHTML=telegramRows.length?telegramRows.map(row=>`<div class="compact-row"><span class="${row.ok?'good':'fail'}">${row.ok?'✓':'!'}</span><div class="truncate">${escapeHtml(row.message)}</div><small>${formatTime(row.ts)}</small></div>`).join(''):'История пуста';
  const restore=data.restoreTest||null;$('restoreTestState').innerHTML=restore?.ok?`<span class="good">✓ восстановление проверено</span> <small>${escapeHtml(restore.name)} · ${formatTime(restore.checkedAt)} · профилей ${restore.profiles||0}, облачных копий ${restore.cloudCopies||0}</small>`:'<span class="fail">! восстановление ещё не проверено</span>';const backups=data.backups||[], backupList=$('backupList'); backupList.className=`table-list${backups.length?'':' empty'}`; backupList.innerHTML=backups.length?backups.map(row=>`<div class="compact-row"><span>◫</span><div><strong>${escapeHtml(row.name)}</strong><br><small>${formatBytes(row.bytes)}</small></div><small>${formatTime(row.createdAt)}</small></div>`).join(''):'Копий пока нет';
  const access=data.accessLog||[], accessList=$('accessList'); accessList.className=`table-list${access.length?'':' empty'}`; accessList.innerHTML=access.length?access.map(row=>`<div class="compact-row"><span class="${row.ok?'good':'fail'}">${row.ok?'✓':'!'}</span><div><strong>${escapeHtml(row.ip)}</strong><br><small>${escapeHtml(row.path)}</small></div><small>${formatTime(row.ts)}</small></div>`).join(''):'Журнал пуст';
  const audit=data.adminAudit||[],auditList=$('adminAuditList');auditList.className=`table-list${audit.length?'':' empty'}`;auditList.innerHTML=audit.length?audit.map(row=>`<div class="compact-row"><span>⌁</span><div class="truncate"><strong>${escapeHtml(row.action)}</strong> · ${escapeHtml(row.supportCode||'—')}<br><small>${escapeHtml(row.detail||'')}</small></div><small>${formatTime(row.ts)}</small></div>`).join(''):'Действий пока нет';
}

function showPage(page,updateHash=true){
  const allowed=['overview','users','push','errors','system','security'];if(!allowed.includes(page))page='overview';
  document.querySelectorAll('.console-page').forEach(el=>el.classList.toggle('active',el.dataset.pageView===page));
  document.querySelectorAll('.console-nav button').forEach(el=>el.classList.toggle('active',el.dataset.page===page));
  if(updateHash)history.replaceState(null,'',`#${page}`);
}
function renderSupport(user){
  currentSupport=user;currentSupportCode=user.supportCode;const panel=$('supportResult');panel.hidden=false;
  const cloud=user.cloud,devices=user.devices||[],push=user.recentPush||[],errors=user.errors||[];
  panel.innerHTML=`<div class="support-head"><div><p class="eyebrow">КАРТОЧКА ПОЛЬЗОВАТЕЛЯ</p><h2>${escapeHtml(user.supportCode)}</h2><small>${user.userCount} связ. устройств · найдено ${devices.length} клиентов</small></div><span class="badge ${user.blocked?'danger':''}">${user.blocked?'доступ выключен':'доступ разрешён'}</span></div>
    ${user.blocked?`<div class="support-warning">Причина: ${escapeHtml(user.reason||'не указана')}</div>`:''}
    <div class="metric-grid support-metrics">${metric('Устройства',devices.length)}${metric('Push-подписки',user.subscriptionCount)}${metric('Ошибки',errors.filter(x=>!x.resolvedAt).length)}${metric('Облачная копия',cloud?'rev. '+cloud.revision:'нет')}</div>
    <div class="support-columns"><div><h3>Устройства</h3><div class="support-device-list">${devices.length?devices.map(d=>`<article class="support-device"><div><strong>${escapeHtml(d.platform||'Устройство')} · ${escapeHtml(d.appVersion||'—')}</strong><small>${escapeHtml(d.displayMode||'')} · ${d.pushSubscribed?'push готов':'push не подключён'} · ${formatTime(d.lastSeen)}</small></div><div><button class="chip support-test" data-device-id="${escapeHtml(d.deviceId)}">Тест push</button><button class="chip support-update" data-device-id="${escapeHtml(d.deviceId)}">Обновить</button></div></article>`).join(''):'Нет устройств'}</div></div>
      <div><h3>Данные</h3>${cloud?`<div class="cloud-summary"><b>Копия от ${formatTime(cloud.updatedAt)}</b><span>Дела: ${cloud.tasks} · расходы: ${cloud.expenses} · доходы: ${cloud.income}</span><span>Заметки: ${cloud.notes} · привычки: ${cloud.habits} · история: ${cloud.history}</span><div><button class="chip support-snapshot">Сохранить копию сейчас</button><button class="chip support-restore">Вернуть вчерашнюю</button></div></div>`:'<div class="support-empty">Облачная защита не подключена — восстановление недоступно.</div>'}</div></div>
    <div class="support-columns"><div><h3>Сообщение пользователю</h3><div class="support-message"><input id="supportMessage" maxlength="220" placeholder="Например: обновление готово, откройте Lumo"><button class="primary support-send">Отправить push</button></div><small>Сообщение уйдёт на все активные устройства пользователя.</small></div>
      <div class="danger-zone"><h3>${user.blocked?'Включить доступ':'Выключить доступ'}</h3><input id="supportBlockReason" maxlength="180" placeholder="Причина блокировки" value="${escapeHtml(user.reason||'')}"><button class="${user.blocked?'primary':'danger-button'} support-access" data-blocked="${user.blocked?'0':'1'}">${user.blocked?'Разблокировать пользователя':'Заблокировать пользователя'}</button><small>Блокировка действует на синхронизацию, push и само приложение после проверки статуса.</small></div></div>
    <div class="support-columns"><div><h3>Последние push</h3><div class="mini-log">${push.length?push.slice(0,8).map(x=>`<div><span class="${x.ok?'good':'fail'}">${x.ok?'✓':'!'}</span><b>${escapeHtml(x.title||x.type)}</b><small>${formatTime(x.ts)}</small></div>`).join(''):'Отправок пока нет'}</div></div><div><h3>Последние ошибки</h3><div class="mini-log">${errors.length?errors.slice(0,8).map(x=>`<div><span class="${x.resolvedAt?'good':'fail'}">${x.resolvedAt?'✓':'!'}</span><b>${escapeHtml(x.message||x.kind)}</b><small>${formatTime(x.ts)}</small></div>`).join(''):'Ошибок нет'}</div></div></div>`;
}
async function lookupSupport(code=currentSupportCode){
  const clean=String(code||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,10);if(clean.length<6)throw new Error('Введите код поддержки полностью');
  const data=await query(`/developer/user?supportCode=${encodeURIComponent(clean)}`);renderSupport(data.user);$('supportCodeInput').value=clean;showPage('users');
}

async function refresh() {
  if(!token)return showLogin(); $('refreshBtn').disabled=true;
  try { const response=await fetch(`${API}/developer/status`,{headers:{'x-developer-token':token},cache:'no-store'}); if(response.status===401){sessionStorage.removeItem('lumoDeveloperToken');token='';return showLogin('Неверный или устаревший ключ');} if(response.status===429)return showLogin('Слишком много попыток. Подождите 15 минут.'); if(!response.ok)throw new Error(`Сервер ответил ${response.status}`); const data=await response.json(); $('loginView').hidden=true;$('dashboard').hidden=false;$('logoutBtn').hidden=false;render(data); }
  catch(error){if(!$('dashboard').hidden){$('overallDot').className='dot bad';$('overallText').textContent='Нет связи с сервером';$('updatedAt').textContent=error.message;}else showLogin(`Не удалось подключиться: ${error.message}`);} finally{$('refreshBtn').disabled=false;}
}
function scheduleRefresh(){clearInterval(timer);if($('autoRefresh').checked)timer=setInterval(refresh,30000);}
$('loginForm').addEventListener('submit',event=>{event.preventDefault();token=$('tokenInput').value.trim();sessionStorage.setItem('lumoDeveloperToken',token);refresh().then(scheduleRefresh);});
$('showToken').addEventListener('click',()=>{$('tokenInput').type=$('tokenInput').type==='password'?'text':'password';}); $('refreshBtn').addEventListener('click',refresh); $('autoRefresh').addEventListener('change',scheduleRefresh);
$('logoutBtn').addEventListener('click',()=>{token='';sessionStorage.removeItem('lumoDeveloperToken');$('tokenInput').value='';showLogin();});
$('errorsOpen').addEventListener('click',()=>{showAllErrors=false;renderErrors();}); $('errorsAll').addEventListener('click',()=>{showAllErrors=true;renderErrors();});
$('attentionGrid').addEventListener('click',event=>{const card=event.target.closest('[data-attention-page]');if(!card)return;if(card.dataset.attentionFilter){deviceFilter=card.dataset.attentionFilter;renderDevices();}showPage(card.dataset.attentionPage);if(card.dataset.attentionPage==='users')$('devicesPanel').scrollIntoView({behavior:'smooth',block:'start'});});
document.querySelectorAll('[data-device-filter]').forEach(button=>button.addEventListener('click',()=>{deviceFilter=button.dataset.deviceFilter;renderDevices();}));
$('deviceList').addEventListener('click',async event=>{const button=event.target.closest('.test-push,.update-device,.open-support');if(!button)return;button.disabled=true;try{if(button.classList.contains('open-support')){await lookupSupport(button.dataset.supportCode);return;}if(button.classList.contains('test-push')){await action('/developer/test-push',{deviceId:button.dataset.deviceId});toast('Тестовый push отправлен');}else{await action('/developer/device/update',{deviceId:button.dataset.deviceId});toast('Предложение обновления отправлено');}await refresh();}catch(error){toast(error.message,true);}finally{button.disabled=false;}});
$('supportSearchForm').addEventListener('submit',async event=>{event.preventDefault();const button=event.submitter;button.disabled=true;try{await lookupSupport($('supportCodeInput').value);}catch(error){$('supportResult').hidden=false;$('supportResult').innerHTML=`<div class="support-empty fail">${escapeHtml(error.message)}</div>`;}finally{button.disabled=false;}});
$('supportResult').addEventListener('click',async event=>{
  const button=event.target.closest('.support-test,.support-update,.support-send,.support-snapshot,.support-restore,.support-access');if(!button||!currentSupportCode)return;button.disabled=true;
  try{
    if(button.classList.contains('support-test')){await action('/developer/test-push',{deviceId:button.dataset.deviceId});toast('Тестовый push отправлен');}
    else if(button.classList.contains('support-update')){await action('/developer/device/update',{deviceId:button.dataset.deviceId});toast('Обновление отправлено');}
    else if(button.classList.contains('support-send')){const message=$('supportMessage').value.trim();const data=await action('/developer/user/message',{supportCode:currentSupportCode,message});toast(`Сообщение доставлено: ${data.sent}/${data.total}`);$('supportMessage').value='';}
    else if(button.classList.contains('support-snapshot')){if(!confirm('Сохранить отдельную копию текущих данных пользователя?'))return;await action('/developer/user/snapshot',{supportCode:currentSupportCode});toast('Контрольная копия сохранена');}
    else if(button.classList.contains('support-restore')){if(!confirm('Вернуть данные пользователя к копии за вчера? Текущая версия сначала сохранится в истории.'))return;await action('/developer/cloud/restore-yesterday',{supportCode:currentSupportCode});toast('Вчерашняя копия восстановлена');}
    else {const blocked=button.dataset.blocked==='1',reason=$('supportBlockReason').value.trim();if(blocked&&!reason)throw new Error('Укажите причину блокировки');if(!confirm(blocked?'Полностью выключить этому пользователю серверный доступ и Lumo?':'Вернуть пользователю доступ к Lumo?'))return;await action('/developer/user/access',{supportCode:currentSupportCode,blocked,reason});toast(blocked?'Доступ пользователя выключен':'Доступ пользователя восстановлен');}
    await lookupSupport(currentSupportCode);await refresh();
  }catch(error){toast(error.message,true);}finally{button.disabled=false;}
});
$('errorList').addEventListener('click',async event=>{const button=event.target.closest('.resolve-error');if(!button)return;try{await action(`/developer/errors/${button.dataset.errorId}/resolve`,{resolved:button.dataset.resolved!=='1'});await refresh();}catch(error){toast(error.message,true);}});
$('testTelegram').addEventListener('click',async()=>{try{await action('/developer/telegram/test');toast('Тест отправлен в Telegram');await refresh();}catch(error){toast(error.message,true);}});
$('createBackup').addEventListener('click',async()=>{try{await action('/developer/backups');toast('Резервная копия создана');await refresh();}catch(error){toast(error.message,true);}});
$('testBackup').addEventListener('click',async()=>{try{await action('/developer/backups/test');toast('Копия открылась и прошла проверку восстановления');await refresh();}catch(error){toast(error.message,true);}});
$('saveMaintenance').addEventListener('click',async()=>{const features={};document.querySelectorAll('.feature-toggle').forEach(input=>features[input.dataset.feature]=input.checked);try{await action('/developer/maintenance',{enabled:$('maintenanceEnabled').checked,message:$('maintenanceMessage').value,features});toast('Режим обслуживания сохранён');await refresh();}catch(error){toast(error.message,true);}});
document.querySelectorAll('.console-nav button').forEach(button=>button.addEventListener('click',()=>showPage(button.dataset.page)));
window.addEventListener('hashchange',()=>showPage(location.hash.slice(1),false));showPage(location.hash.slice(1)||'overview',false);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&token)refresh();}); if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{}); if(token){refresh();scheduleRefresh();}else showLogin();
