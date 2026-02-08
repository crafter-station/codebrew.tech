# CLAUDE.md

## Project Overview

**codebrew.tech** is the marketing website for Code Brew — a community organizing monthly tech meetups across Latin America and Spain. It is a static site with no backend, database, API routes, or authentication.

Live at: https://codebrew.tech

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5.9 (strict mode)
- **React**: 19
- **Styling**: Tailwind CSS 4 + custom design system in `app/globals.css`
- **Animations**: Motion (Framer Motion) 12
- **3D Globe**: COBE library
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Package Manager**: Bun (see `bun.lock`)
- **Fonts**: Geist Sans + Geist Mono (via `next/font/google`)

## Commands

```bash
bun dev          # Start dev server
bun run build    # Production build
bun start        # Start production server
bun lint         # Run ESLint (next core-web-vitals + typescript rules)
```

## Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout (metadata, fonts, analytics)
│   ├── page.tsx            # Homepage (hero, globe, stats, events, cities, partners)
│   ├── globals.css         # Full design system (colors, typography, components)
│   ├── favicon.ico
│   └── deck/
│       └── page.tsx        # Partnership deck (client-side slideshow, "use client")
├── components/
│   ├── footer.tsx          # Site footer with links and branding
│   ├── github-badge.tsx    # GitHub stars badge (client component, fetches API)
│   ├── globe.tsx           # Interactive 3D COBE globe (client component)
│   └── logos/
│       ├── crafter-station.tsx   # Crafter Station SVG logo
│       └── github.tsx            # GitHub SVG logo (multiple variants)
├── lib/
│   └── utils.ts            # cn() utility — clsx + tailwind-merge
├── scripts/
│   └── generate-assets.ts  # Generates OG images, Twitter cards, favicons (uses Sharp)
├── public/
│   ├── og.png              # Open Graph image (1200x630)
│   ├── og-twitter.png      # Twitter card image (1200x600)
│   └── favicon.ico
├── package.json
├── tsconfig.json
├── eslint.config.mjs       # ESLint flat config
├── postcss.config.mjs      # Tailwind v4 PostCSS plugin
└── next.config.ts          # Minimal Next.js config
```

## Architecture Notes

- **No backend**: No API routes, no database, no ORM, no authentication.
- **No testing framework**: No Jest, Vitest, or Playwright configured.
- **No i18n**: Single-language site (English).
- **No global state management**: Only local `useState`/`useRef` in client components.
- **Static data**: Events, cities, and stats are hardcoded arrays in page files.

## Design System (`app/globals.css`)

### Brand Colors

| Token        | Value     | Usage                     |
|-------------|-----------|---------------------------|
| Background  | `#0A0A0A` | Page background (void black) |
| Foreground  | `#E5E5E5` | Primary text              |
| Signal      | `#D42B2B` | Accent / CTAs (signal red) |
| Muted       | `#1A1A1A` | Card backgrounds          |
| Border      | `#2A2A2A` | Borders and dividers      |

### CSS Classes to Know

- **Typography**: `.text-spaced`, `.text-display`, `.text-headline`, `.text-label`, `.text-stat`, `.text-catalog`
- **Layout**: `.container-bordered` (max-width 1100px with left/right borders), `.section-border`
- **Buttons**: `.btn-signal` (primary red), `.btn-outline` (outlined)
- **Cards**: `.event-card` (hover effects), `.city-row` (hoverable list item)
- **Decorative**: `.line-marker`, `.line-full`, `.line-signal`, `.grid-overlay`, `.grain-overlay`, `.bracket-*`, `.status-dot`, `.diamond`
- **Animation**: Staggered fade-in using `.fade-delay-1` through `.fade-delay-8`

## Path Aliases

`@/*` maps to the project root (configured in `tsconfig.json`).

```tsx
import { cn } from "@/lib/utils";
```

## Conventions

- **Component style**: Functional components with TypeScript interfaces for props.
- **Client vs Server**: Only components needing browser APIs or interactivity use `"use client"`. Pages are server components by default.
- **Class merging**: Always use `cn()` from `@/lib/utils` to combine Tailwind classes (handles conflicts via `tailwind-merge`).
- **SVG logos**: Stored as React components in `components/logos/` accepting standard SVG props.
- **No `.env` files committed**: `.env*` is in `.gitignore`. Currently no environment variables are required — all external URLs are hardcoded.

## Key External Links (hardcoded in codebase)

- Discord: https://crafters.chat
- GitHub: https://github.com/crafter-station
- LinkedIn: https://linkedin.com/company/crafter-station
- X/Twitter: https://x.com/crafterstation

## Deployment

Designed for Vercel deployment (Vercel Analytics integrated). No CI/CD pipelines are configured — deployment is handled via Vercel's Git integration.
