/// <reference types="vite/client" />

// Tell TypeScript about our custom env var from .env.local.
// It's `| undefined` because .env.local is gitignored — a fresh clone won't
// have it until `npx convex dev` runs. The `| undefined` forces a guard before use.
interface ImportMetaEnv {
  readonly VITE_CONVEX_URL: string | undefined
}
