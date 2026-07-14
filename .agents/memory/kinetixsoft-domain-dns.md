---
name: kinetixsoft.com DNS points to Hostinger parking, not Vercel
description: Why the live domain can't be fixed from the repo or Vercel build settings — DNS never reaches Vercel.
---

# kinetixsoft.com DNS state (as of July 14, 2026)

The rule: before debugging Vercel build/404 issues for kinetixsoft.com, check DNS first.

**Why:** On 2026-07-14, after all repo-side Vercel fixes were pushed (vercel.json, lockfile), the domain still didn't serve the site. Its nameservers were Hostinger *parking* servers (byte.dns-parking.com / pixel.dns-parking.com, verified via 8.8.8.8), A record 2.57.91.91, serving a Hostinger "Parked Domain" page with HTTP 200 (`server: hcdn`). Traffic never reached Vercel, so no vercel.json or dashboard build setting could help. Note the parked page returns 200, so a status-code check alone looks "healthy" — inspect the HTML/server header.

**How to apply:** `dig NS kinetixsoft.com` (or Node dns.resolveNs via 8.8.8.8). If nameservers are still dns-parking.com, the user must: add the domain in Vercel → Settings → Domains, and at Hostinger either switch NS to ns1/ns2.vercel-dns.com or set A @ → 76.76.21.21 and CNAME www → cname.vercel-dns.com. The Vercel *.vercel.app project URL is unknown and no Vercel credentials exist in this workspace.
