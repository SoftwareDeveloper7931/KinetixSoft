# KinetixSoft FlutterFlow Tutorials Website

A static, content-driven tutorial platform built with **Astro**, **Tailwind CSS**, and **MDX** for [KinetixSoft](https://kinetixsoft.com). Designed for speed, developer authority, and SEO performance.

---

## 🚀 Tech Stack

- **Framework**: [Astro v4.x](https://astro.build) (Static Site Generation with zero client-side JavaScript by default)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with `@tailwindcss/typography` & custom dark mode
- **Content Engine**: Astro MDX Content Collections with strict Zod schema validation
- **Search**: Client-side [Fuse.js](https://fusejs.io) for instant full-text filtering by title, keywords, and category
- **SEO & Metadata**: Auto-generated `sitemap-index.xml`, `robots.txt`, `rss.xml`, and comprehensive JSON-LD structured data (`TechArticle`, `HowTo`, `FAQPage`, `BreadcrumbList`, `WebSite`, `Organization`, `Person`)

---

## 🛠️ Local Development

### 1. Prerequisites
Ensure **Node.js LTS (v20+)** and **npm** are installed.

### 2. Install Dependencies
```bash
cd site
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 4. Build for Production
```bash
npm run build
```
This generates a static build in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## ✍️ How to Add a New Article

All tutorials live as `.mdx` files in `src/content/tutorials/`.

### Step 1: Create the MDX File
Create a new file named `src/content/tutorials/<your-slug>.mdx`. Use a short, keyword-rich slug (e.g., `flutterflow-fcm-push-notifications.mdx`).

### Step 2: Add Required Frontmatter
Every article **must** satisfy the Zod schema defined in `src/content/config.ts`:

```yaml
---
title: "Push Notifications in FlutterFlow (2026 Guide) | KinetixSoft"
description: "Learn how to set up Firebase Cloud Messaging (FCM) push notifications in FlutterFlow. Send automated alerts and background messages step by step."
primaryKeyword: "flutterflow push notifications"
secondaryKeywords:
  - "flutterflow fcm"
  - "flutterflow automated notifications"
  - "flutterflow background notifications"
category: "Firebase" # Must match one of the 12 predefined categories
author: "Asim Suhail" # Must match an author in src/data/authors.ts
datePublished: "2026-11-01"
dateModified: "2026-11-01"
readingTime: "14 min read"
difficulty: "Intermediate" # Beginner | Intermediate | Advanced
isPillar: false
ogImage: "/images/og-default.png"
keyTakeaways:
  - "Configure Apple APNs and Google FCM credentials in Firebase Console."
  - "Request runtime notification permissions cleanly on iOS and Android."
  - "Send targeted notifications to individual users or Firestore topic segments."
  - "Handle background tap actions and deep link routing to specific screens."
faqs:
  - question: "Do push notifications work in FlutterFlow web apps?"
    answer: "Web push notifications require a service worker and VAPID key. Firebase Cloud Messaging supports web, but mobile platforms provide the most reliable delivery."
  - question: "How do you route users to a specific page when they tap a notification?"
    answer: "Include custom data parameters (e.g. `page: 'chat', docId: '123'`) in the FCM payload and map them to Route Parameters in FlutterFlow's Push Notification settings."
relatedArticles:
  - "firebase-database-with-flutterflow"
  - "firebase-crud-pagination-multiple-deletion-flutterflow"
  - "introduction-to-low-code-flutterflow-overview"
---
```

### Step 3: Write Article Content
Follow these strict SEO and readability guidelines:
1. **Single H1**: Add one `# Title` matching the search intent.
2. **Primary Keyword**: Include the `primaryKeyword` in the first 100 words naturally.
3. **Pillar Link**: Always cross-link to the pillar article: `[Intro to Low-Code Development: FlutterFlow Overview](/introduction-to-low-code-flutterflow-overview/)`.
4. **Step-by-Step Sections**: Use `## Heading 2` and `### Heading 3` for logical hierarchy.
5. **Code Blocks**: Specify language syntax highlighting (e.g., ` ```dart `, ` ```json `).
6. **Images**: Optimize screenshots to WebP, place them in `public/images/tutorials/<slug>/`, and reference them:
   ```html
   <img src="/images/tutorials/<slug>/step-1.webp" alt="Descriptive alt text with primary keyword" class="rounded-xl border border-slate-200 dark:border-slate-800 shadow-md my-6 w-full max-w-3xl mx-auto" loading="lazy" decoding="async" />
   ```
7. **Soft CTA**: Include the mandatory agency CTA at the bottom:
   ```markdown
   ---

   > **Need a FlutterFlow app built?** [Talk to KinetixSoft](/contact/) — our senior FlutterFlow engineers design, build, and deploy production-grade mobile and web applications with bulletproof architecture.
   ```

---

## 🚢 Deployment Guide

This site produces 100% pre-rendered static HTML/CSS/JS, deployable to any edge CDN.

### Deploying to Vercel
1. Connect your Git repository to **Vercel**.
2. Set the **Root Directory** to `site`.
3. Vercel automatically detects the **Astro** framework preset.
4. Set Build Command: `npm run build` and Output Directory: `dist`.
5. Deploy! Vercel handles global edge caching, SSL, and instant rollbacks.

### Deploying to Netlify
1. Connect your repository to **Netlify**.
2. Set Base directory to `site`.
3. Build command: `npm run build`.
4. Publish directory: `site/dist`.
5. Add an optional `netlify.toml` if custom headers or redirects are desired.

---

## 📊 SEO & Performance Architecture

- **Canonical URLs**: Fixed to `https://kinetixsoft.com/<slug>/`
- **Sitemap**: Auto-generated at `/sitemap-index.xml` via `@astrojs/sitemap`
- **Robots.txt**: Served from `/robots.txt`
- **RSS Feed**: Auto-generated at `/rss.xml` for news aggregators
- **Lighthouse 95+**: Zero client-side JS overhead on content pages, modern WebP images, preconnected Google Fonts, and zero layout shift (`CLS < 0.1`).
