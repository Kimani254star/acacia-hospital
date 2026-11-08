window.CFG = { url: "https://dvyboakfwecqnjqjczur.supabase.co", key: "sb_publishable__bL-cHZPo4AejqQXtf0HTg_x5TjXPDe" };


/* ===== Shared helpers (core) ===== */
const $ = (s, r = document) => r.querySelector(s);
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const money = n => "KSh " + Number(n || 0).toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const price = p => Math.round(p.base_price * (1 - (p.discount || 0) / 100));
const sb = window.supabase.createClient(CFG.url, CFG.key);
const App = { profile: null, pages: {}, can: roles => roles.includes(App.profile.role) };
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 2800); }
async function q(promise) { const { data, error } = await promise; if (error) { toast(error.message); throw error; } return data; }
function page(name, title, roles, render) { App.pages[name] = { title, roles, render }; }


/* ===== Public shop ===== */
(function () {
const KSH = n => "KSh " + Number(n).toLocaleString("en-KE");
const eff = p => Math.round(p.base_price * (1 - (p.discount || 0) / 100));
let products = [], cat = "All", term = "", cart = JSON.parse(localStorage.getItem("apex_cart") || "[]");

async function load() {
  const { data, error } = await sb.from("apex_products").select("*").order("name");
  if (error) { $("#grid").innerHTML = "<p>Could not load products.</p>"; return; }
  products = data; $("#cats").innerHTML = ["All", ...new Set(data.map(p => p.category))].map(c => `<button data-c="${esc(c)}" class="${c === cat ? "on" : ""}">${esc(c)}</button>`).join("");
  draw();
}
function draw() {
  const list = products.filter(p => (cat === "All" || p.category === cat) && p.name.toLowerCase().includes(term));
  $("#grid").innerHTML = list.map(p => { const out = !p.in_stock || p.stock < 1;
    return `<article class="card"><img loading="lazy" src="${esc((p.images || [])[0] || "")}" alt=""><div>
    <b>${esc(p.name)}</b><small>${esc(p.brand || "")} · ${esc(p.form || "")}</small>
    <span class="price"><b>${KSH(eff(p))}</b>${p.discount > 0 ? `<s>${KSH(p.base_price)}</s>` : ""}</span>
    ${p.rx === "Rx Required" ? '<span class="tag">Rx required</span>' : ""}${out ? '<span class="tag out">Out of stock</span>' : ""}
    <button class="btn" data-add="${p.id}" ${out ? "disabled" : ""}>Add to cart</button></div></article>`; }).join("") || "<p>No products found.</p>";
}
function drawCart() {
  localStorage.setItem("apex_cart", JSON.stringify(cart));
  $("#cartN").textContent = cart.reduce((s, c) => s + c.qty, 0);
  const rows = cart.map(c => ({ ...c, p: products.find(x => x.id === c.id) })).filter(r => r.p);
  $("#lines").innerHTML = rows.map(r => `<div class="line"><span>${esc(r.p.name)}<br><small>${KSH(eff(r.p))}</small></span>
    <span><button data-d="${r.id}">−</button> ${r.qty} <button data-i="${r.id}">+</button></span><b>${KSH(eff(r.p) * r.qty)}</b></div>`).join("") || "<p>Your cart is empty.</p>";
  $("#total").textContent = "Total: " + KSH(rows.reduce((s, r) => s + eff(r.p) * r.qty, 0));
  $("#rxNote").hidden = !rows.some(r => r.p.rx === "Rx Required");
}
document.addEventListener("click", e => { const a = e.target.dataset, add = (id, n) => { const c = cart.find(x => x.id === id);
  if (c) c.qty += n; else if (n > 0) cart.push({ id, qty: 1 }); cart = cart.filter(x => x.qty > 0); drawCart(); };
  if (a.c) { cat = a.c; document.querySelectorAll("#cats button").forEach(b => b.classList.toggle("on", b.dataset.c === cat)); draw(); }
  if (a.add) { add(+a.add, 1); toast("Added to cart"); } if (a.i) add(+a.i, 1); if (a.d) add(+a.d, -1); });
$("#search").oninput = e => { term = e.target.value.toLowerCase(); draw(); };
$("#cartBtn").onclick = () => { drawCart(); $("#cart").hidden = false; };
$("#closeCart").onclick = () => $("#cart").hidden = true;
$("#checkout").onsubmit = async e => { e.preventDefault();
  const rows = cart.map(c => ({ ...c, p: products.find(x => x.id === c.id) })).filter(r => r.p);
  if (!rows.length) return toast("Your cart is empty");
  const items = rows.map(r => ({ id: r.id, name: r.p.name, qty: r.qty, price: eff(r.p) }));
  const { error } = await sb.from("apex_orders").insert({ name: $("#cName").value.trim(), phone: $("#cPhone").value.trim(), address: $("#cAddr").value.trim(),
    payment: $("#cPay").value, items, total: items.reduce((s, i) => s + i.price * i.qty, 0) });
  if (error) return toast("Could not place order: " + error.message);
  cart = []; drawCart(); e.target.reset(); $("#cart").hidden = true; toast("Order placed! We will contact you shortly.");
};
sb.channel("apex-shop").on("postgres_changes", { event: "*", schema: "public", table: "apex_products" }, load).subscribe();
load().then(drawCart);

})();

/* ===== Portal pages ===== */
page("dashboard", "Dashboard", ["admin", "pharmacist", "assistant"], async el => {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const [sales, prods] = await Promise.all([
    q(sb.from("apex_sales").select("*").gte("created_at", today.toISOString()).order("created_at", { ascending: false })),
    q(sb.from("apex_products").select("id,name,stock,reorder_level"))]);
  const low = prods.filter(p => p.stock <= p.reorder_level);
  el.innerHTML = `<div class="kpis">
    <div class="kpi">Today's sales<b>${money(sales.reduce((s, x) => s + Number(x.total), 0))}</b></div>
    <div class="kpi">Transactions today<b>${sales.length}</b></div>
    <div class="kpi">Products<b>${prods.length}</b></div>
    <div class="kpi">Low / out of stock<b>${low.length}</b></div></div>
    <div class="grid2"><div class="panel"><h3>Today's sales</h3><table><tr><th>#</th><th>Time</th><th>Customer</th><th>Total</th></tr>
    ${sales.slice(0, 8).map(s => `<tr><td>${s.id}</td><td>${new Date(s.created_at).toLocaleTimeString()}</td><td>${esc(s.customer_name)}</td><td>${money(s.total)}</td></tr>`).join("") || "<tr><td colspan=4 class=muted>No sales yet today.</td></tr>"}</table></div>
    <div class="panel"><h3>Needs restocking</h3><table>${low.slice(0, 8).map(p => `<tr><td>${esc(p.name)}</td><td><span class="tag">${p.stock} left</span></td></tr>`).join("") || "<tr><td class=muted>All stocked.</td></tr>"}</table></div></div>`;
});

page("pos", "Point of Sale", ["admin", "pharmacist", "assistant"], async el => {
  const [prods, custs] = await Promise.all([q(sb.from("apex_products").select("*").order("name")), q(sb.from("apex_customers").select("*").order("name"))]);
  let cart = [], term = "";
  el.innerHTML = `<div class="grid2"><div class="panel"><input id="ps" placeholder="Search medicine or SKU..."><table id="pl"></table></div>
    <div class="panel"><h3>Cart</h3><table id="cl"></table><h2 id="ct" style="margin:10px 0"></h2>
    <div class="row"><select id="cc"><option value="">Walk-in customer</option>${custs.map(c => `<option value="${c.id}">${esc(c.name)}</option>`).join("")}</select>
    <select id="cp"><option>Cash</option><option>M-Pesa</option><option>Card</option><option>Credit</option></select></div>
    <button id="done" class="btn" style="width:100%">Complete sale</button></div></div>`;
  const draw = () => {
    const f = prods.filter(p => (p.name + (p.sku || "")).toLowerCase().includes(term));
    $("#pl", el).innerHTML = f.slice(0, 40).map(p => `<tr><td>${esc(p.name)}<br><span class="muted">${esc(p.brand || "")}</span></td><td>${money(price(p))}</td><td>${p.stock}</td><td><button class="btn sm" data-add="${p.id}" ${p.stock < 1 ? "disabled" : ""}>Add</button></td></tr>`).join("");
    $("#cl", el).innerHTML = cart.map(c => { const p = prods.find(x => x.id === c.id); return `<tr><td>${esc(p.name)}</td><td><input type="number" min="1" max="${p.stock}" value="${c.qty}" data-qty="${c.id}" style="width:70px"></td><td>${money(price(p) * c.qty)}</td><td><button class="btn sm red" data-rm="${c.id}">×</button></td></tr>`; }).join("");
    $("#ct", el).textContent = "Total: " + money(cart.reduce((s, c) => s + price(prods.find(x => x.id === c.id)) * c.qty, 0));
  };
  el.onclick = e => { const a = e.target.dataset;
    if (a.add) { const id = +a.add, c = cart.find(x => x.id === id); c ? c.qty++ : cart.push({ id, qty: 1 }); draw(); }
    if (a.rm) { cart = cart.filter(x => x.id !== +a.rm); draw(); } };
  el.onchange = e => { if (e.target.dataset.qty) { cart.find(x => x.id === +e.target.dataset.qty).qty = Math.max(1, +e.target.value); draw(); } };
  $("#ps", el).oninput = e => { term = e.target.value.toLowerCase(); draw(); };
  $("#done", el).onclick = async () => {
    if (!cart.length) return toast("Cart is empty");
    const cid = $("#cc", el).value, cust = custs.find(c => String(c.id) === cid);
    try { const id = await q(sb.rpc("apex_create_sale", { p_customer_id: cid ? +cid : null, p_customer_name: cust ? cust.name : "Walk-in", p_payment: $("#cp", el).value, p_items: cart }));
      toast("Sale #" + id + " saved"); App.show("pos"); } catch (e) { /* toast shown */ }
  };
  draw();
});

page("orders", "Online Orders", ["admin", "pharmacist", "assistant"], async el => {
  const rows = await q(sb.from("apex_orders").select("*").order("created_at", { ascending: false }).limit(200));
  el.innerHTML = `<div class="panel"><table><tr><th>#</th><th>Date</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th><th></th></tr>
  ${rows.map(o => `<tr><td>${o.id}</td><td>${new Date(o.created_at).toLocaleString()}</td><td>${esc(o.name)}<br><span class="muted">${esc(o.phone)} · ${esc(o.address)}</span></td>
  <td>${o.items.map(i => esc(i.name) + " ×" + i.qty).join(", ")}</td><td>${money(o.total)}</td><td><span class="tag ${o.status === "Delivered" ? "ok" : ""}">${o.status}</span></td>
  <td>${o.status === "Pending" ? `<button class="btn sm" data-s="Confirmed" data-id="${o.id}">Confirm</button> ` : ""}${["Pending", "Confirmed"].includes(o.status) ? `<button class="btn sm" data-s="Delivered" data-id="${o.id}">Delivered</button> <button class="btn sm red" data-s="Cancelled" data-id="${o.id}">Cancel</button>` : ""}</td></tr>`).join("") || "<tr><td colspan=7 class=muted>No online orders yet.</td></tr>"}</table></div>`;
  el.onclick = async e => { const { s, id } = e.target.dataset; if (!s) return; const o = rows.find(x => x.id === +id);
    try { if (s === "Delivered") await q(sb.rpc("apex_create_sale", { p_customer_id: null, p_customer_name: o.name, p_payment: o.payment === "M-Pesa" ? "M-Pesa" : "Cash", p_items: o.items.map(i => ({ id: i.id, qty: i.qty })) }));
      await q(sb.from("apex_orders").update({ status: s }).eq("id", o.id)); toast("Order " + s.toLowerCase()); App.show("orders"); } catch (err) { /* toast shown */ } };
});

page("inventory", "Inventory", ["admin", "pharmacist"], async el => {
  const rows = await q(sb.from("apex_products").select("*").order("name"));
  el.innerHTML = `<div class="panel"><div class="row"><input id="is" placeholder="Search...">
    <button id="add" class="btn">+ Add product</button></div>
    <table><tr><th>Name</th><th>Category</th><th>Price</th><th>Stock</th><th>Reorder at</th><th></th></tr>
    ${rows.map(p => `<tr><td>${esc(p.name)}</td><td>${esc(p.category)}</td><td>${money(price(p))}</td>
      <td><span class="tag ${p.stock > p.reorder_level ? "ok" : ""}">${p.stock}</span></td><td>${p.reorder_level}</td>
      <td><button class="btn sm" data-rec="${p.id}">+ Receive</button> <button class="btn sm" data-edit="${p.id}">Edit</button></td></tr>`).join("")}</table></div>`;
  $("#is", el).oninput = e => el.querySelectorAll("table tr:not(:first-child)").forEach(r => r.hidden = !r.textContent.toLowerCase().includes(e.target.value.toLowerCase()));
  $("#add", el).onclick = async () => {
    const name = prompt("Product name"); if (!name) return;
    const base_price = +prompt("Selling price (KSh)", "0"), stock = +prompt("Opening stock", "0");
    await q(sb.from("apex_products").insert({ name, category: prompt("Category (Prescription, OTC Medicine, Vitamins, First Aid)", "OTC Medicine"), base_price, stock }));
    toast("Product added"); App.show("inventory"); };
  el.onclick = async e => { const a = e.target.dataset, p = rows.find(x => x.id === +(a.rec || a.edit));
    if (a.rec) { const n = parseInt(prompt("Units received for " + p.name, "10"), 10); if (n > 0) { await q(sb.from("apex_products").update({ stock: p.stock + n }).eq("id", p.id)); toast("Stock updated"); App.show("inventory"); } }
    if (a.edit) { const bp = prompt("Selling price", p.base_price), d = prompt("Discount %", p.discount), r = prompt("Reorder level", p.reorder_level);
      if (bp !== null) { await q(sb.from("apex_products").update({ base_price: +bp, discount: +d, reorder_level: +r }).eq("id", p.id)); toast("Saved"); App.show("inventory"); } } };
});

page("customers", "Customers", ["admin", "pharmacist", "assistant"], async el => {
  const rows = await q(sb.from("apex_customers").select("*").order("name"));
  el.innerHTML = `<div class="panel"><form id="cf" class="row"><input id="cn" placeholder="Name" required><input id="cph" placeholder="Phone"><input id="ce" type="email" placeholder="Email"><button class="btn">Add customer</button></form>
    <table><tr><th>Name</th><th>Phone</th><th>Email</th><th></th></tr>${rows.map(c => `<tr><td>${esc(c.name)}</td><td>${esc(c.phone)}</td><td>${esc(c.email)}</td>
    <td>${App.can(["admin"]) ? `<button class="btn sm red" data-del="${c.id}">Delete</button>` : ""}</td></tr>`).join("") || "<tr><td colspan=4 class=muted>No customers yet.</td></tr>"}</table></div>`;
  $("#cf", el).onsubmit = async e => { e.preventDefault(); await q(sb.from("apex_customers").insert({ name: $("#cn", el).value.trim(), phone: $("#cph", el).value.trim(), email: $("#ce", el).value.trim() })); App.show("customers"); };
  el.onclick = async e => { if (e.target.dataset.del && confirm("Delete customer?")) { await q(sb.from("apex_customers").delete().eq("id", +e.target.dataset.del)); App.show("customers"); } };
});

page("sales", "Sales & Reports", ["admin", "pharmacist", "assistant"], async el => {
  const from = new Date(Date.now() - 30 * 864e5).toISOString();
  const sales = await q(sb.from("apex_sales").select("*, apex_sale_items(name,qty,price)").gte("created_at", from).order("created_at", { ascending: false }));
  const by = k => sales.reduce((m, s) => (m[s[k] || "-"] = (m[s[k] || "-"] || 0) + Number(s.total), m), {});
  const box = o => Object.entries(o).map(([k, v]) => `<tr><td>${esc(k)}</td><td>${money(v)}</td></tr>`).join("");
  el.innerHTML = `<div class="kpis"><div class="kpi">Last 30 days<b>${money(sales.reduce((s, x) => s + Number(x.total), 0))}</b></div><div class="kpi">Sales<b>${sales.length}</b></div></div>
    <div class="grid2"><div class="panel"><h3>By payment method</h3><table>${box(by("payment"))}</table></div><div class="panel"><h3>By staff</h3><table>${box(by("sold_by_name"))}</table></div></div>
    <div class="panel"><div class="row"><h3>Sales</h3><button id="csv" class="btn sm noprint">Export CSV</button></div><table><tr><th>#</th><th>Date</th><th>Customer</th><th>Items</th><th>Payment</th><th>Total</th><th></th></tr>
    ${sales.map(s => `<tr><td>${s.id}</td><td>${new Date(s.created_at).toLocaleString()}</td><td>${esc(s.customer_name)}</td><td>${s.apex_sale_items.map(i => esc(i.name) + " ×" + i.qty).join(", ")}</td><td>${s.payment}</td><td>${money(s.total)}</td><td><button class="btn sm noprint" data-p="${s.id}">Receipt</button></td></tr>`).join("")}</table></div>`;
  $("#csv", el).onclick = () => { const r = ["id,date,customer,payment,total", ...sales.map(s => [s.id, s.created_at, '"' + s.customer_name.replace(/"/g, '""') + '"', s.payment, s.total].join(","))];
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([r.join("\n")], { type: "text/csv" })); a.download = "sales.csv"; a.click(); };
  el.onclick = e => { const s = sales.find(x => x.id === +e.target.dataset.p); if (!s) return;
    const w = window.open("", "_blank", "width=380,height=600");
    w.document.write(`<pre style="font:13px monospace">APEX PHARMACY\nReceipt #${s.id}\n${new Date(s.created_at).toLocaleString()}\n--------------------------\n${s.apex_sale_items.map(i => `${esc(i.name)}\n  ${i.qty} x ${i.price} = ${i.qty * i.price}`).join("\n")}\n--------------------------\nTOTAL: ${money(s.total)}\nPaid by: ${s.payment}\nServed by: ${esc(s.sold_by_name || "")}\nThank you!</pre>`); w.print(); };
});


/* ===== Portal shell & routing ===== */
const cur = () => location.hash.replace("#portal/", "").replace("#portal", "") || "dashboard";
const ORDER = ["dashboard", "pos", "orders", "inventory", "customers", "sales"];
App.show = async name => {
  const pg = App.pages[name]; if (!pg || !App.can(pg.roles)) name = "dashboard";
  App.shown = name; location.hash = "portal/" + name; $("#title").textContent = App.pages[name].title;
  document.querySelectorAll("#nav a").forEach(a => a.classList.toggle("on", a.dataset.p === name));
  const v = $("#view"); v.innerHTML = '<p class="muted">Loading…</p>';
  try { v.innerHTML = ""; await App.pages[name].render(v); } catch (e) { v.innerHTML = '<p class="err">Could not load. Have you run apex_supabase.sql and apex_supabase_v2.sql?</p>'; }
};
async function enter(session) {
  const { data: prof } = await sb.from("apex_profiles").select("*").eq("id", session.user.id).maybeSingle();
  if (!prof) { await sb.auth.signOut(); $("#lErr").textContent = "This login has no portal access. Ask an admin."; return; }
  App.profile = prof; $("#login").hidden = true; $("#app").hidden = false;
  $("#who").textContent = prof.name + " · " + prof.role; $("#status").textContent = "● Synced";
  $("#nav").innerHTML = ORDER.filter(n => App.can(App.pages[n].roles)).map(n => `<a data-p="${n}" href="#portal/${n}">${App.pages[n].title}</a>`).join("");
  $("#nav").onclick = e => { const p = e.target.dataset.p; if (p) { e.preventDefault(); App.show(p); } };
  let t; sb.channel("apex-live").on("postgres_changes", { event: "*", schema: "public" }, () => { clearTimeout(t); t = setTimeout(() => App.show(cur()), 600); }).subscribe();
  App.show(cur());
}
$("#loginForm").onsubmit = async e => { e.preventDefault(); $("#lErr").textContent = "";
  const { data, error } = await sb.auth.signInWithPassword({ email: $("#lEmail").value.trim(), password: $("#lPass").value });
  if (error) return $("#lErr").textContent = error.message; enter(data.session); };
$("#logout").onclick = async () => { await sb.auth.signOut(); location.reload(); };

function route() {
  const p = location.hash.startsWith("#portal");
  $("#shop").hidden = p; $("#portal").hidden = !p;
  if (!p) return;
  if (App.profile) { if (App.shown !== cur()) App.show(cur()); } else sb.auth.getSession().then(({ data }) => data.session && enter(data.session));
}
addEventListener("hashchange", route); route();
