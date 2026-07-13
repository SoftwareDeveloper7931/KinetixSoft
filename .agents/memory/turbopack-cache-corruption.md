---
name: Turbopack dev cache corruption on Replit
description: Recurring dev-server crash from Turbopack's persistent on-disk cache; durable fix
---

# Turbopack persistent dev cache corrupts on Replit's filesystem

**Symptom:** dev server (Next 16 Turbopack) crashes repeatedly with panics like
`Failed to restore task data (corrupted database or bug)`, `Unable to open static sorted file ...sst`,
`ENOENT ...routes-manifest.json`, `Cannot find module ...[turbopack]_runtime.js`, then `GET / 500`.
Logs also show `⚠ Slow filesystem detected` for `.next/dev`.

**Root cause:** Turbopack writes a persistent on-disk cache under `.next/dev/cache/turbopack/*.sst`.
Replit's workspace filesystem is network-backed/slow, so the SST cache files get corrupted or go
missing mid-session (often during heavy Fast Refresh rebuilds). Deleting `.next` only fixes it
temporarily — it recurs.

**Durable fix:** disable the persistent dev cache so Turbopack keeps its cache in memory:
```js
// next.config.mjs
experimental: { turbopackFileSystemCacheForDev: false }
```
Default is `true`. After setting it, `.next/dev/cache/turbopack` is no longer created — verify with
`ls .next/dev/cache/turbopack` (should not exist).

**Why:** eliminates the corruptible on-disk artifact entirely; in-memory cache can't be corrupted by
the network filesystem.

**Gotcha:** the startup log prints `⨯ turbopackFileSystemCacheForDev` (cross mark, not under the
"Experiments" bullet list). That is just a display quirk — the flag IS valid in the config zod schema
and IS applied. Confirm it works by checking the cache dir is absent, not by the log symbol.
