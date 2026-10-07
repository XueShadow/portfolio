# Ji Monsales Portfolio

A personal portfolio web app for **Ji Monsales**, a Computer Science student and web developer.  
This project showcases repository-backed work and skills across web development, APIs, and data/GenAI learning projects.

## Features

- Single-page portfolio layout with sections for hero, about, services, skills, projects, and contact
- Repository-based project cards linked to GitHub
- Responsive navigation with mobile menu accessibility improvements
- Reduced-motion support for users who prefer less animation
- TanStack Start + Vite setup configured for Cloudflare deployment

## Tech Stack

- **Framework:** TanStack Start (React + TypeScript)
- **Styling:** Tailwind CSS
- **Routing/Data:** TanStack Router, TanStack Query
- **Build Tool:** Vite
- **Deployment Target:** Cloudflare (Wrangler config)
- **Package Manager:** Bun

## Screenshots / Demo

- GitHub repository: https://github.com/XueShadow/portfolio
- Live demo URL is not documented in this repository.

## Installation

```bash
bun install
```

## Development

```bash
bun run dev
```

## Validation Commands

```bash
bun run lint
bun run typecheck
bun run build
```

## Build

```bash
bun run build
```

## Deployment Notes

- CI and deployment workflows use Bun with `bun.lock`.
- `wrangler.json` targets server output (`dist/server/index.js`) with static assets from `dist/client`.
- The deploy workflow runs lint, typecheck, and build before Cloudflare deploy.

## Configuration

- Main Cloudflare config: `/home/runner/work/portfolio/portfolio/wrangler.json`
- Build config: `/home/runner/work/portfolio/portfolio/vite.config.ts`
- TypeScript config: `/home/runner/work/portfolio/portfolio/tsconfig.json`

No secret environment variables are committed in this repository for local development.

## Project Structure

```text
src/
  components/portfolio/   # Portfolio sections
  components/ui/          # Reusable UI primitives
  routes/                 # TanStack Start route files
  style.css               # Global styles and animation tokens
```

## Contact Behavior

The contact section uses **direct profile links** (GitHub/profile repository) and does not claim backend message delivery.

## Known Limitations

- No integrated backend contact form or email delivery service
- Live deployment URL is not documented in repository metadata

## Future Improvements

- Add a verified live-demo URL section once deployment URL is finalized
- Add repository-specific screenshots
- Add automated UI tests when test infrastructure is introduced

## License

No license file is currently included in this repository.
