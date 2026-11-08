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
