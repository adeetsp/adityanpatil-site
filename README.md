# adityanpatil.com

My personal site — life organized into four P's: **Personal**, **Physical**,
**Professional**, **Philosophical**.

Built with [Astro](https://astro.build), deployed to GitHub Pages on every push to
`main`, served at [adityanpatil.com](https://adityanpatil.com).

## Writing a post

Every post is one markdown file at `src/content/posts/<category>/<slug>.md`:

```markdown
---
title: "Goku's first six months"
description: "One-sentence summary — this becomes the SEO meta description."
category: personal          # personal | physical | professional | philosophical
pubDate: 2026-07-13
tags: [dog, life]
draft: false                # true = built nowhere, publish later
---

Post body in markdown...
```

Commit, push, and it's live at `adityanpatil.com/<category>/<slug>/` about a minute
later.

## Local dev

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to dist/
```

## Structure

- `src/consts.ts` — site title, category names/taglines/colors (edit blurbs here)
- `src/pages/index.astro` — homepage (hero + four squares)
- `src/pages/about.astro` — about page
- `src/styles/global.css` — all styling, light/dark via `prefers-color-scheme`
- `voice/` — private writing notes, gitignored, never published
