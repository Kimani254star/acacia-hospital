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
