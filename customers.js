page("customers", "Customers", ["admin", "pharmacist", "assistant"], async el => {
  const rows = await q(sb.from("apex_customers").select("*").order("name"));
  el.innerHTML = `<div class="panel"><form id="cf" class="row"><input id="cn" placeholder="Name" required><input id="cph" placeholder="Phone"><input id="ce" type="email" placeholder="Email"><button class="btn">Add customer</button></form>
    <table><tr><th>Name</th><th>Phone</th><th>Email</th><th></th></tr>${rows.map(c => `<tr><td>${esc(c.name)}</td><td>${esc(c.phone)}</td><td>${esc(c.email)}</td>
    <td>${App.can(["admin"]) ? `<button class="btn sm red" data-del="${c.id}">Delete</button>` : ""}</td></tr>`).join("") || "<tr><td colspan=4 class=muted>No customers yet.</td></tr>"}</table></div>`;
  $("#cf", el).onsubmit = async e => { e.preventDefault(); await q(sb.from("apex_customers").insert({ name: $("#cn", el).value.trim(), phone: $("#cph", el).value.trim(), email: $("#ce", el).value.trim() })); App.show("customers"); };
  el.onclick = async e => { if (e.target.dataset.del && confirm("Delete customer?")) { await q(sb.from("apex_customers").delete().eq("id", +e.target.dataset.del)); App.show("customers"); } };
});
