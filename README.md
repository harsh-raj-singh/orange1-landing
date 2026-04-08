# Orange1 Landing

Marketing site and frontend shell for **Orange1**, an AI assistant that turns conversations and Gmail context into a connected graph of knowledge.

This repository is intentionally scoped to the public-facing landing experience. It demonstrates the product story, visual identity, and frontend architecture around Orange1 rather than the full chat backend.

## What This Repo Shows

- A polished landing page with animated graph-inspired visuals and strong product positioning
- A React + Vite frontend that can be deployed to Cloudflare Workers
- A lightweight Hono API surface for health checks and future backend expansion
- Integration hooks for analytics, auth, AI gateway configuration, and D1/R2 infrastructure

## Product Framing

Orange1 is presented here as an AI system with:

- **Graph memory** that accumulates context across conversations
- **Gmail integration** for pulling in user-relevant information from email
- **Global knowledge connections** that make future chats more context-aware
- **PII-aware handling** so personal information is not treated as generic context

The current implementation is a landing page and deployment shell. It is best read as the public entry point for the idea, not a complete end-user application.

## Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19 + Vite |
| Styling | Tailwind CSS 4 |
| Routing | wouter |
| API shell | Hono on Cloudflare Workers |
| Database tooling | Drizzle ORM + Cloudflare D1 |
| Asset/runtime helpers | Runable website runtime |
| Package manager | Bun |

## Quick Start

```bash
bun install
cp .env.example .env
bun cf-typegen
bun db:generate
bun db:migrate
bun dev
```

Open the local Vite URL and iterate on the landing page in `src/web/pages/index.tsx`.

## Configuration

The repo includes placeholders for:

- `BETTER_AUTH_SECRET` for auth flows
- `VITE_BASE_URL` for local and deployed callback URLs
- `AI_GATEWAY_BASE_URL` and `AI_GATEWAY_API_KEY` for model access
- `AUTUMN_SECRET_KEY` for billing/tracking integrations

The landing page CTA currently points to a hosted chat demo URL in `src/web/pages/index.tsx`. For production use, that should be replaced with a stable Orange1 application URL or made environment-configurable.

## Project Structure

```text
orange1-landing/
├── src/web/                  # React app, landing page, metadata, shared UI
├── src/api/                  # Hono entrypoint and database scaffolding
├── public/                   # Open Graph image, analytics runtime, favicon
├── manual/                   # Integration notes for analytics, auth, and AI setup
├── website.config.json       # Site metadata consumed by the frontend
├── wrangler.json             # Cloudflare deployment configuration
└── .env.example              # Local environment variable template
```

## Notable Implementation Details

- The home page uses a custom canvas background to reinforce the graph-memory theme without needing a heavyweight animation library.
- Metadata is driven from `website.config.json`, so Open Graph and Twitter cards stay in one place.
- The Hono API is currently minimal, which keeps the deployment footprint small while leaving room for future authenticated endpoints.
- The repo keeps deployment-oriented tools checked in even though the current public experience is mostly frontend.

## Current Limitations

- This repository does not include the full Orange1 chat product or the Gmail ingestion backend.
- `src/api/database/schema.ts` is still a scaffold, so D1 support is prepared but not yet modeled.
- The CTA points at a preview/demo target rather than a production hostname.
- Several `manual/` documents are implementation notes for future features and should not be read as shipped functionality.

## Roadmap

- Replace the hard-coded chat URL with environment-based configuration
- Add production-ready metadata, auth routes, and database schema as the app matures
- Expand the landing site with customer proof points, product screenshots, and pricing or waitlist flows

## License

MIT
