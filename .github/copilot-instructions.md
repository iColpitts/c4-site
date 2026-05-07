# C4 Site - AI Coding Agent Instructions

## Project Overview

**c4-site** is a Nuxt 4 minimal starter with TypeScript and Tailwind CSS. The project serves as a lightweight foundation for a Vue-based web application with file-based routing and server-side capabilities.

- **Framework**: Nuxt 4.4.2 (full-stack Vue framework)
- **Styling**: Tailwind CSS 4.2.2 (via Vite plugin)
- **Language**: TypeScript with strict configuration
- **Package Manager**: npm (primary; also supports pnpm, yarn, bun)

## Architecture & Key Patterns

### Directory Structure

```
app/                      # Main application root
  ├── app.vue            # Root component (NuxtPage outlet)
  ├── components/        # Auto-imported Vue components
  └── assets/
      └── css/
          └── main.css   # Tailwind CSS imports
nuxt.config.ts           # Nuxt configuration
package.json             # Dependencies & scripts
```

### Component Architecture

- **app.vue** (app/app.vue): Root app component with `<NuxtPage />` outlet for file-based routing
- **components/** directory: Auto-imported, globally available components (currently empty)
- Components use Vue 3 Composition API or Options API; prefer `<script setup>` for brevity

### Styling System

- Tailwind CSS integrated via `@tailwindcss/vite` plugin
- app/assets/css/main.css imports entire Tailwind framework via `@import "tailwindcss"`
- Configuration in nuxt.config.ts references CSS file
- No custom Tailwind config file present; uses Tailwind defaults

## Developer Workflows

### Common Commands

```bash
npm run dev        # Start dev server on localhost:3000 (hot reload enabled)
npm run build      # Production build
npm run generate   # Static site generation (if applicable)
npm run preview    # Preview production build locally
npm install        # Install dependencies (runs `nuxt prepare` after)
```

### Build & Deploy

- **Development**: `npm run dev` — uses Nuxt's dev server with devtools enabled
- **Production**: `npm run build` — SSR/static output to `.output/` (Nuxt default)
- **Preview**: `npm run preview` — test production build locally
- TypeScript compilation handled automatically by Nuxt

### Key Configuration Files

- nuxt.config.ts: Enables devtools, configures Tailwind plugin, sets CSS import path, compatibility date
- tsconfig.json: References auto-generated `.nuxt/tsconfig.*.json` files; do not manually modify
- package.json: Scripts and dependencies (Nuxt, Vue 3, Tailwind, Vue Router)

## Project-Specific Conventions

### File-Based Routing

- Pages inferred from files in `app/pages/` directory (not yet created)
- Route structure automatically generated; no manual router configuration needed
- Example: `app/pages/about.vue` → `/about` route

### Auto-Imported Features

- Components in `app/components/` auto-imported globally
- Composables in `app/composables/` auto-imported with auto-ref unwrapping
- Utils in `app/utils/` auto-imported with camelCase naming
- No manual imports required for these

### Vue 3 + TypeScript Usage

- Use `<script setup lang="ts">` in `.vue` files for modern syntax
- Type your component props and emits explicitly
- Avoid `any` type; leverage Nuxt's type inference where possible

### CSS & Tailwind Best Practices

- Use Tailwind utility classes in templates; avoid custom CSS in components unless unavoidable
- Custom styles if needed: add to app/assets/css/main.css or component `<style scoped>`
- No CSS preprocessor (SCSS/Less) configured; use Tailwind or plain CSS

## Integration Points & Dependencies

### External Dependencies

- **Nuxt 4**: Full-stack framework (routing, rendering, build)
- **Vue 3.5.32**: Component framework
- **Vue Router 5**: Handled by Nuxt (no manual setup needed)
- **Tailwind CSS 4**: Utility-first CSS framework
- **@tailwindcss/vite**: Vite plugin for Tailwind integration

### Server/Client Boundary

- Nuxt handles SSR automatically; middleware and plugins in `app/` enable server-side logic
- API routes: define in `app/server/routes/` (conventional; not yet created)
- Composables work on both client and server; use `#client` or `#server` entry points if needed

## Quick Start for AI Agents

1. **Before coding**: Check nuxt.config.ts for any custom configuration changes (middleware, plugins, modules)
2. **Adding components**: Create in `app/components/` with PascalCase naming; auto-imported globally
3. **Adding pages**: Create in `app/pages/` (directory not yet present; create as needed)
4. **Styling**: Use Tailwind utility classes; modify app/assets/css/main.css for global styles
5. **Testing changes**: Run `npm run dev` and check `localhost:3000`
6. **Building for production**: Ensure `npm run build` completes without errors

## Known Limitations & To-Do Areas

- No API routes or server logic yet (ready to add in `app/server/`)
- No components in `app/components/` yet (ready for expansion)
- No pages in `app/pages/` yet; file-based routing is configured but unused
- No tests (testing framework not installed)

---

*Last updated: 2026-04-13*
