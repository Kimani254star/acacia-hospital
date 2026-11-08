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
