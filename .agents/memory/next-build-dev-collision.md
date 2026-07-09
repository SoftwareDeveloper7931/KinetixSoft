---
name: Next build vs dev server .next collision
description: Running `next build` while the dev server is running corrupts shared .next output
---
Running `npx next build` while `next dev` is running fails with confusing errors (e.g. `PageNotFoundError: Cannot find module for page: /api/contact`, ChunkLoadError in browser) because both write to `.next`.

**Why:** dev and build share the same `distDir`; concurrent writes corrupt page manifests.

**How to apply:** `next.config.mjs` sets `distDir: process.env.NEXT_DIST_DIR || '.next'`. Verify builds with `NEXT_DIST_DIR=.next-build npx next build`, then `rm -rf .next-build`. Restart the workflow afterward if browser shows chunk errors.
