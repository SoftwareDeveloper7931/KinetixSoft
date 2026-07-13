---
name: GitHub git push auth in this environment
description: How to authenticate `git push` to GitHub here; the GitHub connector does NOT provide git credentials.
---

# Pushing to GitHub from this repl

`git push` to `origin` (https://github.com/SoftwareDeveloper7931/KinetixSoft) fails with
"Invalid username or token. Password authentication is not supported" because the Replit
`replit-git-askpass` helper returns username `token` with no valid password.

**The GitHub connector (integrations / connectors-v2) does NOT solve this.** After
`proposeIntegration` + "connection set up successfully", the credential proxy
(`$REPLIT_CONNECTORS_HOSTNAME/api/v2/connection?...&connector_names=github`) authenticates
(HTTP 200 with `repl $REPL_IDENTITY`) but returns `total: 0` for github, and
`listConnections('github')` returns `[]`. So no OAuth token is available for git.

**What works:** request a `GITHUB_TOKEN` secret (PAT with `repo` / Contents:R+W) and push with:
`git -c credential.helper= push "https://x-access-token:${GITHUB_TOKEN}@github.com/<owner>/<repo>.git" main:main`
Always pipe through `sed -E "s/${GITHUB_TOKEN}/<redacted>/g"` so the token never prints.

**Why:** the connector is API-only; git-over-HTTPS needs the token as the password directly.
**How to apply:** don't waste time retrying the connector for git push — go straight to a PAT secret.
