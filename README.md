# Apex Pharmacy & Medical Supplies

One page, three files, backed by Supabase (shared project with Sweet Flowers Garden; all tables start with `apex_`).

- `index.html` – markup for both the public shop and the staff portal
- `style.css` – all styling
- `script.js` – all logic (Supabase URL and publishable key are at the top)
- `sql/` – run in Supabase > SQL Editor, in order: `01_schema.sql`, then `02_pos_orders.sql`

The shop is at `index.html`. The staff portal is the same page at `index.html#portal` (also the "Staff login" link).
Portal: dashboard, point of sale, online orders, inventory, customers, sales & reports.

## Setup
1. Run `sql/01_schema.sql`, then `sql/02_pos_orders.sql`.
2. Make sure `adminacaciabooks@gmail.com` exists in Authentication > Users (re-run the last block of `01_schema.sql` if you create it later).
3. Host the three files on any static host (Netlify, GitHub Pages, `npx serve`).

Never commit a Supabase *service role* key. The publishable key in `script.js` is meant to be public; Row Level Security protects the data.
