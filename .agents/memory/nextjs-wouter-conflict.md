---
name: Next.js + Wouter SSR Conflict
description: Why wouter crashes Next.js App Router even inside "use client" components, and how to fix it.
---

## Rule
Never import anything from `wouter` in a Next.js App Router project — not `Link`, not `useLocation`, not `usePathname`. Use `next/link` and `next/navigation` instead.

**Why:** Next.js renders "use client" components on the server first (SSR) before hydrating on the client. Wouter's `Link` calls `useLocation`, which calls `window.location` synchronously. `window` does not exist on the server → runtime crash (500 error). This hits even when the component has `"use client"` at the top.

**How to apply:** After any migration from Vite/wouter to Next.js, run:
```
grep -r "from \"wouter\"" src/
```
and replace every hit with the Next.js equivalent:
- `import { Link } from "wouter"` → `import Link from "next/link"`
- `import { useLocation } from "wouter"` → `import { useRouter } from "next/navigation"`
- `import { usePathname } from "wouter"` → `import { usePathname } from "next/navigation"`

The fix is a one-liner sed across all affected files:
```bash
sed -i 's/import { Link } from "wouter"/import Link from "next\/link"/g' src/components/pages/*.tsx
```
