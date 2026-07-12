---
name: Vite/Express → Next.js cleanup
description: Non-obvious follow-through points when stripping the old stack after migrating this repo to Next.js
---

# Removing the old Vite/Express/monorepo stack

This repo was migrated from a Vite React + Express + Drizzle monorepo to a pure Next.js 16 app in `src/`. When removing old-stack cruft, deleting files/packages is not enough — several config files hold *references* to deleted things that don't surface in `next build` but break later:

**Checklist of dangling references to hunt down (each bit us):**
- `next.config.mjs` `serverExternalPackages` — listed `pg`/`drizzle-orm` after those deps were uninstalled. Remove entries for any removed package.
- `scripts/post-merge.sh` (Replit-managed, runs after task merges) — called `npm run db:push`, which no longer exists once the DB is gone. Reduce to `npm install`.
- `tsconfig.json` — had `@shared/*` path + `client`/`server`/`shared` in include/exclude. Drop them.
- `package.json` — `overrides` (drizzle-kit/tsx) and `optionalDependencies` (bufferutil, for ws) referenced removed tooling; scripts still pointed at `server/index.ts`, `script/build.ts`, `dist/index.cjs`.
- `.replit` `[deployment]` `run` pointed at deleted `dist/index.cjs` — use `deployConfig` (autoscale, build `npm run build`, run `npm run start`).

**Why:** these are cross-file couplings; `next build` passing does NOT prove the cleanup is complete. Always grep for each removed package/script name across config files.

**Deferred (not done, needs user action):** `.replit` `[userenv.shared]` still holds `BREVO_API_KEY` in plaintext — should be rotated and moved to Replit Secrets.
