const $ = (s, r = document) => r.querySelector(s);
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const money = n => "KSh " + Number(n || 0).toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const price = p => Math.round(p.base_price * (1 - (p.discount || 0) / 100));
const sb = window.supabase.createClient(CFG.url, CFG.key);
const App = { profile: null, pages: {}, can: roles => roles.includes(App.profile.role) };
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 2800); }
async function q(promise) { const { data, error } = await promise; if (error) { toast(error.message); throw error; } return data; }
function page(name, title, roles, render) { App.pages[name] = { title, roles, render }; }
