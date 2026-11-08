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
