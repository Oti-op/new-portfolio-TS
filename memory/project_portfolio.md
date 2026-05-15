---
name: project-portfolio
description: Personal portfolio site — static HTML in oti-portfolio/, Tailwind CDN, dark-mode first
metadata:
  type: project
---

Multi-page static site lives in `oti-portfolio/`. Four pages: index.html, projects.html, blog.html, cv.html.

**Why:** Personal portfolio for Oti Oseji, styled after stmio.net — minimal, typography-first, monochrome.

**How to apply:** All pages are self-contained (no build step, no external JS dependencies beyond Tailwind CDN). Dark mode is class-based (`html.dark`), toggled via localStorage with a light/system/dark button set in the footer. Shared structure: 128px initials avatar, max-width 640px centered layout, staggered fade-in on load, project cards with sliding arrow on hover.
