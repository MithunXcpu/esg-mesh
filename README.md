# ESG Mesh

ESG Mesh is a frontend prototype for scoring everyday purchases on environmental, social, and governance (ESG) impact, then turning those scores into points and a small rewards catalog.

Mithun Manjunatha built it as a Solutions Engineer demo of a customer-engagement story for banks and brands. Company scores, the leaderboard, and the admin metrics are sample data so the flow can be walked through in a browser with no backend.

## What you can do

- **Landing** (`/`) — product overview and links into the dashboard and upload flow.
- **Dashboard** (`/dashboard`) — spend-weighted ESG score, points, a score trend, a category breakdown, and the latest transactions.
- **Transactions** (`/transactions`) — search and filter the same transaction list.
- **Upload** (`/upload`) — add a purchase by hand or import a CSV. Each row is scored immediately and saved in this browser.
- **Rewards** (`/rewards`) — spend points on sample offers (carbon offsets, partner discounts, badges, gift cards, donations).
- **Leaderboard** (`/leaderboard`) — a fixed ranking used to show community standings.
- **Admin** (`/admin`, `/admin/analytics`, `/admin/companies`, `/admin/rewards`) — a brand view with sample engagement charts, a searchable copy of the company catalog, and toggles for reward offers.

Until you add a transaction, the dashboard and transactions pages show the bundled sample purchases. After that, they show what is stored in `localStorage`. The dashboard streak is a fixed demo value.

## How scoring works

The catalog in `src/data/companies.ts` holds 100 companies, each with an overall score plus separate environmental, social, and governance scores (0–100). Those figures are illustrative sample data for the demo.

For each purchase, `src/lib/scoring.ts`:

1. Fuzzy-matches the merchant name against company names and tickers (Fuse.js).
2. Uses that company’s overall score when the match is close enough.
3. Otherwise uses a sector benchmark for the chosen category (default 55).
4. Awards points from the score and the dollar amount.
5. Rolls transactions up into one user score: the amount-weighted average of their ESG scores.

A score of 70 or above is treated as high, 40–69 as medium, and below 40 as low.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Recharts for charts, Framer Motion for motion on the landing page
- Fuse.js for merchant matching, Lucide for icons

Transactions and the points balance live in `localStorage`. Leaderboard rows, reward offers, admin charts, and the company catalog are static modules under `src/data/`. `@clerk/nextjs` and `@supabase/supabase-js` are listed in `package.json` for a later auth and database layer. The running app does not call them, and no environment variables are required.

## Run it

Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm run start
```

### CSV format

Columns, in order: `merchant`, `amount`, `date`, `category`. A header row is optional.

```csv
merchant,amount,date,category
Starbucks,6.45,2026-01-12,Food & Drink
Patagonia,89.00,2026-01-14,Clothing
```

Categories the form already knows: Shopping, Food & Drink, Groceries, Electronics, Clothing, Gas, Travel, Transport, Entertainment, Software, Home, Health, Auto.

## Layout

```
src/app/            routes
src/components/     header, score gauge, badges, stat cards, transaction rows
src/data/           company catalog and sample transactions, rewards, leaderboard
src/lib/scoring.ts  match, score, points, category and trend helpers
src/lib/storage.ts  localStorage reads and writes
src/lib/types.ts    shared types and score bands
```
