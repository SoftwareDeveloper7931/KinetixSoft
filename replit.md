# KinetixSoft Website

## Overview
Modern software agency website (glassmorphism theme) built with Next.js. Contact form delivers enquiries via Brevo email.

## Tech Stack
- Framework: Next.js 16 (App Router, Turbopack)
- UI: React 18, Tailwind CSS, Framer Motion, shadcn/ui (Radix)
- Email: Brevo (transactional email API) for the contact form
- No database — the site is fully static except the Brevo contact route

## Structure
- `src/app/` — pages (App Router), layout, API route (`api/contact`), SEO (`robots.ts`, `sitemap.ts`)
- `src/components/` — shared components + `components/pages/` for page content, `components/ui/` for shadcn
- `src/lib/` — utilities
- `public/` — static assets

## Environment Variables
- `BREVO_API_KEY` — required for the contact form to send email

## Running
- Dev workflow: `npx next dev --port 5000` (port 5000, required for the Replit preview)
- Production: `npm run build` then `npm run start`

## Deployment
- Autoscale deployment: build `npm run build`, run `npm run start`

## Notes / Conventions
- Pages are static (`force-static` + daily revalidate); the `/api/contact` route stays dynamic for Brevo.
- Fonts are loaded via `next/font` (Inter + Newsreader) — never re-add a Google Fonts `@import`.
- `JsonLd` schema must render in `<body>`, never in a manual `<head>`.
- Use `next/link` and `next/image` — the old Vite/Express/wouter stack has been removed.
- Do not run `next build` while the dev server is running; use `NEXT_DIST_DIR=.next-build npx next build`.

## User preferences
- (none recorded yet)
