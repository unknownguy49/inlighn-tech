# Inlighn Tech Redesign

This project is a redesigned front-end for Inlighn Tech, built with **Next.js 13+**, **Tailwind CSS**, and **TypeScript**. It supports both **light and dark themes**, features modern UI animations, and is fully responsive across devices.

---

## Features

### UI Components

- Parallax sections and scroll-based animations
- Starfield animated background with custom cursor
- Animated Hero, Typing Effects, and Section Dividers

### Modular Components

- Reusable components like Buttons, Loaders, Navigation, Footer, FAQ, Testimonials
- Skeleton loaders and Page loader for smooth transitions

### Certificate Verification

- Certificate validator page with dynamic loading

### SEO & Performance

- Optimized images and lazy loading
- Page structure suitable for indexing

---

## Tech Stack

- Next.js App Router
- Tailwind CSS with dark mode
- TypeScript
- PostCSS
- `next-themes` for theme handling

---

## Folder Structure

```
.
├── app/
│   ├── components/
│   ├── verify-certificate/
│   ├── about/
│   ├── contact/
│   └── layout.tsx, page.tsx, globals.css
├── public/
│   └── images/, logos/
├── styles/
│   └── globals.css
├── components/
│   └── ui/, theme-provider.tsx
├── tailwind.config.ts
```

---

## Getting Started

Install dependencies and run locally:

```bash
pnpm install
pnpm dev
```

Make sure `pnpm` is installed globally or use `npm`/`yarn` if preferred.

---

## Preview

This project includes dynamic and animated sections with immersive UI to deliver a premium, modern web experience.
