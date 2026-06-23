/// <reference types="vite/client" />

// Tell TypeScript about our custom env var from .env.local
interface ImportMetaEnv {
  readonly VITE_CONVEX_URL: string
}
