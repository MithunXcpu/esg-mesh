# CLAUDE.md — ESG Mesh

## What This Is
An ESG (Environmental, Social, Governance) scoring platform that analyzes consumer spending transactions and rewards sustainable purchasing behavior.

## Tech Stack
- Next.js 16, React 19, TypeScript
- Tailwind CSS v4 (**NEVER** use custom `*` CSS reset or arbitrary bracket values like `bg-[#hex]`)
- Clerk (`@clerk/nextjs`) for authentication
- Supabase (`@supabase/supabase-js`) for database/storage
- Recharts for data visualizations
- Framer Motion for animations
- Fuse.js for fuzzy search
- Lucide React for icons

## Key Architecture

### Routes (`src/app/`)
- `/` — Landing page
- `/dashboard` — User dashboard with ESG score overview
- `/transactions` — View and manage spending transactions
- `/upload` — Upload transaction data (CSV/bank statements)
- `/leaderboard` — Community ESG score rankings
- `/rewards` — Earn and redeem sustainability rewards
- `/admin` — Admin panel
  - `/admin/analytics` — Platform-wide analytics
  - `/admin/companies` — Manage company ESG ratings
  - `/admin/rewards` — Manage reward offerings

### Components (`src/components/`)
- `Header.tsx` — App navigation header
- `ESGScoreGauge.tsx` — Visual gauge for ESG scores
- `ScoreBadge.tsx` — Badge display for score tiers
- `StatsCard.tsx` — Metric summary cards
- `TransactionRow.tsx` — Individual transaction display

### Lib (`src/lib/`)
- `scoring.ts` — ESG score calculation logic
- `storage.ts` — Supabase storage/data layer
- `types.ts` — TypeScript type definitions

## Commands
```bash
npm run dev
npm run build
npm run lint
```

## Conventions
- Accent color: emerald/teal (`--color-primary`)
- Dark theme throughout
- Clerk handles auth — admin routes likely role-gated
- Supabase for all persistent data
- Transaction upload flow: upload -> parse -> score -> store
