const $ = s => document.querySelector(s);
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const KSH = n => "KSh " + Number(n).toLocaleString("en-KE");
const eff = p => Math.round(p.base_price * (1 - (p.discount || 0) / 100));
const sb = window.supabase.createClient(CFG.url, CFG.key);
let products = [], cat = "All", term = "", cart = JSON.parse(localStorage.getItem("apex_cart") || "[]");
const toast = m => { const t = $("#toast"); t.textContent = m; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 2500); };

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
