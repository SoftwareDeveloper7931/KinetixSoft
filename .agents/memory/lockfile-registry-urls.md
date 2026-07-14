---
name: Lockfile registry URLs for external builds
description: package-lock.json generated in this repl points resolved URLs at the Replit package firewall; rewrite before pushing to GitHub/Vercel.
---

# Lockfile resolved URLs break external builds

`npm install` in this repl writes `resolved` URLs like
`http://package-firewall.replit.local/npm/...` into `package-lock.json`.
External CI (Vercel, GitHub Actions) cannot reach that host, so `npm install`/`npm ci` fails there.

**Why:** the repl's npm registry is a Replit-internal proxy; lockfiles record the proxy URL, not the public registry.

**How to apply:** before pushing a regenerated lockfile to GitHub, run
`sed -i 's|http://package-firewall.replit.local/npm/|https://registry.npmjs.org/|g' package-lock.json`.
Integrity hashes stay valid (same tarballs). Also keep the cross-platform optional deps npm adds (darwin/arm64 swc, etc.) — external builders need them.
