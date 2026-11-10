AcaciaLogin.init({app:'hospital',name:'Acacia Hospital',color:'#1f6b4f',price:800,landing:'landing.html'});
/* Dark mode: follows the device setting until the toggle is used; choice is remembered. */
(function(){var K='acacia_theme',r=document.documentElement,b=document.createElement('button');
function cur(){var s;try{s=localStorage.getItem(K)}catch(e){}return s||(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}
function set(t){r.setAttribute('data-theme',t);b.textContent=t=='dark'?'\u2600\uFE0F':'\uD83C\uDF19';b.title=t=='dark'?'Switch to light mode':'Switch to dark mode';b.setAttribute('aria-label',b.title)}
b.id='themeBtn';b.type='button';b.onclick=function(){var t=cur()=='dark'?'light':'dark';try{localStorage.setItem(K,t)}catch(e){}set(t)};
set(cur());document.body.appendChild(b)})();
const T=(l,t,o)=>({l,t:t||'text',o});
const INV=[['Stock',[T('Item'),T('SKU'),T('Warehouse'),T('Quantity','number'),T('Buying price','number'),T('Selling price','number')]],['Movement',[T('Item'),T('Type','select',['In','Out','Transfer','Adjustment']),T('Quantity','number'),T('Date','date'),T('Reference')]],['Price List',[T('Item'),T('SKU'),T('Buying price','number'),T('Selling price','number')]],['Amendments',[T('Item'),T('Field changed'),T('Old value'),T('New value'),T('Date','date')]],['Bundle Items',[T('Bundle'),T('Components'),T('Selling price','number')]],['Bulk Adjustments',[T('Item'),T('Adjustment','select',['Increase','Decrease']),T('Quantity','number'),T('Reason'),T('Date','date')]],['Packages',[T('Order'),T('Item'),T('Quantity','number'),T('Status','select',['Packed','Ready','Dispatched'])]],['Shipments',[T('Package'),T('Carrier'),T('Date','date'),T('Status','select',['Pending','In transit','Delivered'])]]];
const M=[
{k:'patients',n:'Patient Management',f:[T('Name'),T('Age','number'),T('Gender','select',['Female','Male']),T('Phone'),T('Registered','date')],s:[]},
{k:'opd',n:'Outpatient (OPD)',f:[T('Patient'),T('Complaint'),T('Doctor'),T('Date','date'),T('Status','select',['Waiting','In consultation','Done'])],s:[]},
{k:'ipd',n:'Inpatient (IPD)',f:[T('Patient'),T('Ward'),T('Bed'),T('Admitted','date'),T('Status','select',['Admitted','Discharged'])],s:[]},
{k:'pharmacy',n:'Pharmacy',f:[T('Drug'),T('Strength'),T('Stock','number'),T('Price (KES)','number'),T('Expiry','date')],s:[]},
{k:'lab',n:'Laboratory',f:[T('Patient'),T('Test'),T('Result'),T('Date','date'),T('Status','select',['Pending','Completed'])],s:[]},
{k:'radiology',n:'Radiology & Imaging',f:[T('Patient'),T('Scan','select',['X-ray','Ultrasound','CT','MRI']),T('Body part'),T('Date','date'),T('Status','select',['Booked','Reported'])],s:[]},
{k:'staff',n:'Doctors & Nurses',f:[T('Name'),T('Role','select',['Doctor','Nurse','Pharmacist','Lab tech']),T('Department'),T('Phone'),T('Shift','select',['Day','Night'])],s:[]},
{k:'appts',n:'Appointments & Queues',f:[T('Patient'),T('Doctor'),T('Date','date'),T('Time','time'),T('Queue no.','number')],s:[]},
{k:'billing',n:'Billing & Payments',f:[T('Patient'),T('Service'),T('Amount (KES)','number'),T('Method','select',['Cash','M-Pesa','Insurance','Card']),T('Status','select',['Unpaid','Paid'])],s:[]},
{k:'insurance',n:'Insurance',f:[T('Patient'),T('Insurer'),T('Member no.'),T('Claim (KES)','number'),T('Status','select',['Submitted','Approved','Rejected'])],s:[]},
{k:'records',n:'Medical Records',f:[T('Patient'),T('Date','date'),T('Diagnosis'),T('Treatment'),T('Doctor')],s:[]},
{k:'wards',n:'Ward & Beds',f:[T('Ward'),T('Bed'),T('Type','select',['General','HDU','ICU','Private']),T('Status','select',['Free','Occupied','Cleaning'])],s:[]},
{k:'theatre',n:'Theatre',f:[T('Patient'),T('Procedure'),T('Surgeon'),T('Date','date'),T('Status','select',['Scheduled','In theatre','Completed'])],s:[]},
{k:'procure',n:'Procurement & Suppliers',f:[T('Supplier'),T('Item'),T('Qty','number'),T('Cost (KES)','number'),T('Status','select',['Ordered','Received'])],s:[]},
...INV.map(([n,f])=>({k:'inv_'+n.toLowerCase().replace(/ /g,''),g:'Inventory',n,f,s:[]})),{k:'reports',n:'Reports & Analytics',r:1},{k:'settings',n:'Settings',a:1,s:[]}
];
let cur='home',q='',db,editing=null;
try{db=JSON.parse(localStorage.getItem('acacia_hosp2_'+AcaciaLogin.companyId()))}catch(e){}
if(!db){db={};M.forEach(m=>{if(!m.r)db[m.k]=m.s.map(r=>r.slice())})}
M.forEach(m=>{if(!m.r&&!db[m.k])db[m.k]=[]});
const save=()=>{try{localStorage.setItem('acacia_hosp2_'+AcaciaLogin.companyId(),JSON.stringify(db))}catch(e){}};
try{AcaciaCloud.onRemote(function(){try{var x=JSON.parse(localStorage.getItem('acacia_hosp2_'+AcaciaLogin.companyId()));if(x)db=x}catch(e){}},function(){render()})}catch(e){}
const E=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const K=n=>'KES '+n.toLocaleString();
function nav(){document.getElementById('nav').innerHTML='<div class="brand"><img src="logo.png" alt="Acacia logo" class="logo">Acacia Hospital</div><button class="'+(cur=='home'?'on active':'')+'" onclick="go(\'home\')">Dashboard</button>'+M.filter((m,i)=>!m.g||M.findIndex(x=>x.g==m.g)==i).map(m=>{const on=cur==m.k||(m.g&&(M.find(x=>x.k==cur)||{}).g==m.g);return '<button class="'+(on?'on active':'')+'" onclick="go(\''+m.k+'\')">'+(m.g||m.n)+'</button>'}).join('')}
function go(k){cur=k;q='';document.getElementById('nav').classList.remove('open');render()}
function render(){editing=null;nav();const el=document.getElementById('main');
if(cur=='home'){el.innerHTML='<h1>Acacia Hospital</h1><p class="sub">Hospital & Pharmacy Management System · Acacia Tec Developers</p><div class="grid">'+M.filter(m=>!m.r&&!m.a).map(m=>'<div class="card" onclick="go(\''+m.k+'\')"><b>'+db[m.k].length+'</b><span>'+(m.g?m.g+' · ':'')+m.n+'</span></div>').join('')+'</div>'+kpis();return}
const m=M.find(x=>x.k==cur);
if(m.a){el.innerHTML='<h1>Settings</h1><div id="acxSet"></div>';ACX_SET.mount(document.getElementById('acxSet'),{app:'Hospital',store:()=>db,save:()=>save(),defaultType:'Hospital',types:['Hospital','Clinic','Pharmacy','Dispensary','Laboratory','Medical Centre'],defaultRole:'Receptionist',roles:['Administrator','Doctor','Nurse','Pharmacist','Lab Technician','Receptionist','Accountant']});return}
if(m.r){el.innerHTML='<h1>'+m.n+'</h1><p class="sub">Live summary from the records you have entered.</p>'+kpis()+reportTbl();return}
const rows=db[m.k];
el.innerHTML='<h1>'+(m.g||m.n)+'</h1>'+(m.g?'<div class="tabs">'+M.filter(x=>x.g==m.g).map(x=>'<button class="'+(x.k==cur?'on':'')+'" onclick="go(\''+x.k+'\')">'+x.n+'</button>').join('')+'</div>':'')+'<p class="sub">'+rows.length+' record'+(rows.length==1?'':'s')+'</p><div class="box"><form onsubmit="add(event)">'+m.f.map((f,i)=>'<div><label>'+f.l+'</label>'+(f.t=='select'?'<select name="f'+i+'">'+f.o.map(o=>'<option>'+o+'</option>').join('')+'</select>':'<input name="f'+i+'" type="'+f.t+'" required>')+'</div>').join('')+'<button class="btn">Add record</button></form></div>'+
'<div class="box"><div class="tools"><input placeholder="Search records" value="'+E(q)+'" oninput="q=this.value;list()"></div><div class="wrap" id="list"></div></div>';list()}
function list(){const m=M.find(x=>x.k==cur),L=document.getElementById('list');
const rows=db[m.k].map((r,i)=>[r,i]).filter(([r])=>r.join(' ').toLowerCase().includes(q.toLowerCase()));
if(!rows.length){L.innerHTML='<div class="empty">No records found. Add one using the form above.</div>';return}
L.innerHTML='<table><tr>'+m.f.map(f=>'<th>'+f.l+'</th>').join('')+'<th></th></tr>'+rows.map(([r,i])=>'<tr>'+r.map((c,j)=>'<td>'+(m.f[j].t=='select'?'<span class="tag">'+E(c)+'</span>':E(c))+'</td>').join('')+'<td>'+ACX_ACT({edit:'editRow('+i+')',del:'rm('+i+')',title:m.n+' record'})+'</td></tr>').join('')+'</table>'}
function add(e){e.preventDefault();const m=M.find(x=>x.k==cur),fd=new FormData(e.target);
const row=m.f.map((f,i)=>f.t=='number'?Number(fd.get('f'+i)):fd.get('f'+i));if(editing!=null){db[m.k][editing]=row;editing=null}else db[m.k].unshift(row);save();render()}
function editRow(i){const m=M.find(x=>x.k==cur),r=db[m.k][i],fm=document.querySelector('#main form');if(!fm||!r)return;editing=i;m.f.forEach((f,j)=>{const el=fm.elements['f'+j];if(el)el.value=r[j]==null?'':r[j]});const b=fm.querySelector('button.btn');if(b)b.textContent='Save changes';fm.scrollIntoView({behavior:'smooth',block:'center'})}
function rm(i){const m=M.find(x=>x.k==cur);if(confirm('Delete this record?')){db[m.k].splice(i,1);save();list();}}
function stats(){const paid=db.billing.filter(r=>r[4]=='Paid').reduce((a,r)=>a+r[2],0),due=db.billing.filter(r=>r[4]=='Unpaid').reduce((a,r)=>a+r[2],0);
const occ=db.wards.filter(r=>r[3]=='Occupied').length,low=db.pharmacy.filter(r=>r[2]<20),q=db.opd.filter(r=>r[4]=='Waiting').length;
return{paid,due,occ,beds:db.wards.length,low,q,pend:db.lab.filter(r=>r[4]=='Pending').length}}
function kpis(){const s=stats();return '<div class="grid"><div class="card"><b>'+K(s.paid)+'</b><span>Collected</span></div><div class="card"><b>'+K(s.due)+'</b><span>Outstanding bills</span></div><div class="card"><b>'+s.occ+'/'+s.beds+'</b><span>Beds occupied</span></div><div class="card"><b>'+s.q+'</b><span>Patients waiting in OPD</span></div><div class="card"><b>'+s.low.length+'</b><span>Drugs low in stock (under 20)</span></div><div class="card"><b>'+s.pend+'</b><span>Lab tests pending</span></div></div>'}
function reportTbl(){const s=stats();return '<div class="box"><h3 style="margin-top:0">Low-stock drugs</h3>'+(s.low.length?'<div class="wrap"><table><tr><th>Drug</th><th>Strength</th><th>Stock</th></tr>'+s.low.map(r=>'<tr><td>'+E(r[0])+'</td><td>'+E(r[1])+'</td><td>'+r[2]+'</td></tr>').join('')+'</table></div>':'<div class="empty">All drugs are above the reorder level.</div>')+'</div>'}
render();
