# Next-Food

A modern food review and listing web app built with Next.js 16, React 19, Tailwind CSS 4, and HeroUI components.

## Features

- Next.js 16 App Router
- TypeScript & React 19
- Tailwind CSS 4 for styling
- HeroUI for beautiful, accessible UI components
- Dark mode support
- Modular folder structure

## Getting Started

### 1. Install Dependencies

```
npm install
```

### 2. Run the Development Server

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## HeroUI & Tailwind Setup

- **HeroUI packages:**
  - `@heroui/button`, `@heroui/system`, `@heroui/theme`, `@heroui/react`
- **Tailwind config:**
  - `tailwind.config.js` includes both `src` and HeroUI theme paths in `content`.
  - HeroUI plugin is added to `plugins`.
- **PostCSS config:**
  - Uses `tailwindcss` and `autoprefixer` plugins.
- **globals.css:**
  - Uses `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`.
- **Providers:**
  - App is wrapped with `HeroUIProvider` in `src/app/providers.tsx`.
- **Dark mode:**
  - Enabled via `darkMode: "class"` in Tailwind config and a script in `layout.tsx`.

## Project Structure

```
next-food/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── providers.tsx
│   │   ├── globals.css
│   │   ├── foods/
│   │   │   └── page.tsx
│   │   └── reviews/
│   │       └── page.tsx
│   └── components/
│       └── Navbar.tsx
├── tailwind.config.js
├── postcss.config.mjs
├── next.config.ts
├── package.json
└── README.md
```

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Lint code

## Troubleshooting HeroUI Button Issues

- Ensure `@heroui/*` packages are installed
- Confirm `tailwind.config.js` includes both `src` and HeroUI theme paths in `content`
- Use `@tailwind` directives in `globals.css`
- Make sure `HeroUIProvider` wraps your app in `providers.tsx`
- Restart the dev server after config changes

## License

MIT
