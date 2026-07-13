---
name: Shrinking the GitHub repo without disturbing platform git
description: How to purge bloat from origin's history here without rewriting the platform-managed workspace git.
---

# Purging history bloat from the GitHub origin repo

The workspace `.git` is platform-managed (has `gitsafe-backup` + `subrepl-*` remotes powering checkpoints). **Do NOT run `git filter-repo`/history rewrites on the workspace repo** — it can break the platform's checkpoint/VCS system.

**Safe pattern to shrink the GitHub repo (origin):**
1. `pip install git-filter-repo` (binary lands at `.pythonlibs/bin/git-filter-repo`).
2. Bare **mirror clone** origin into `/tmp` with `GIT_LFS_SKIP_SMUDGE=1` (skips downloading LFS blobs — fast).
3. `git-filter-repo --force --path <dir>/ --invert-paths` on the mirror, then `git reflog expire --expire=now --all && git gc --prune=now --aggressive`.
4. Re-add origin (filter-repo strips the remote) and `git push --force origin main:main`.
5. Verify with a fresh bare clone: `du -sh` + `git lfs ls-files --all | wc -l`.

**Why:** the goal ("fresh clone is small") is about the GitHub repo, achieved by the force-push; the workspace `.git` staying large is fine and must be left untouched.

**Gotchas:**
- `git-filter-repo` echoes the old remote URL (incl. the token) in a NOTICE — always `sed` redact, and rotate `GITHUB_TOKEN` afterward if it printed.
- Removing GitHub LFS *pointers* does NOT reclaim GitHub's LFS storage quota (orphaned objects persist until GitHub GC), but unreferenced LFS is never fetched, so fresh clones are small.
- All this repo's LFS objects were `.next/` build artifacts; `.gitattributes` (only stale `.next` LFS rules) was deleted since `.next/` is gitignored — never LFS-track build output.
