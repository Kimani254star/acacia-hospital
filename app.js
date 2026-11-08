const ORDER = ["dashboard", "pos", "orders", "inventory", "customers", "sales"];
App.show = async name => {
  const pg = App.pages[name]; if (!pg || !App.can(pg.roles)) name = "dashboard";
  location.hash = name; $("#title").textContent = App.pages[name].title;
  document.querySelectorAll("#nav a").forEach(a => a.classList.toggle("on", a.dataset.p === name));
  const v = $("#view"); v.innerHTML = '<p class="muted">Loading…</p>';
  try { v.innerHTML = ""; await App.pages[name].render(v); } catch (e) { v.innerHTML = '<p class="err">Could not load. Have you run apex_supabase.sql and apex_supabase_v2.sql?</p>'; }
};
async function enter(session) {
  const { data: prof } = await sb.from("apex_profiles").select("*").eq("id", session.user.id).maybeSingle();
  if (!prof) { await sb.auth.signOut(); $("#lErr").textContent = "This login has no portal access. Ask an admin."; return; }
  App.profile = prof; $("#login").hidden = true; $("#app").hidden = false;
  $("#who").textContent = prof.name + " · " + prof.role; $("#status").textContent = "● Synced";
  $("#nav").innerHTML = ORDER.filter(n => App.can(App.pages[n].roles)).map(n => `<a data-p="${n}">${App.pages[n].title}</a>`).join("");
  $("#nav").onclick = e => e.target.dataset.p && App.show(e.target.dataset.p);
  let t; sb.channel("apex-live").on("postgres_changes", { event: "*", schema: "public" }, () => { clearTimeout(t); t = setTimeout(() => App.show(location.hash.slice(1) || "dashboard"), 600); }).subscribe();
  App.show(location.hash.slice(1) || "dashboard");
}
$("#loginForm").onsubmit = async e => { e.preventDefault(); $("#lErr").textContent = "";
  const { data, error } = await sb.auth.signInWithPassword({ email: $("#lEmail").value.trim(), password: $("#lPass").value });
  if (error) return $("#lErr").textContent = error.message; enter(data.session); };
$("#logout").onclick = async () => { await sb.auth.signOut(); location.reload(); };
sb.auth.getSession().then(({ data }) => data.session && enter(data.session));
