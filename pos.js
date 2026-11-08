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
