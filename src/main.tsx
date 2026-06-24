import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import './index.css'
import App from './App.tsx'

// Fail fast with a clear message if the deployment URL is missing
// (e.g. .env.local not set up). Beats an opaque crash deep inside Convex.
const convexUrl = import.meta.env.VITE_CONVEX_URL
if (!convexUrl) {
  throw new Error(
    'Missing VITE_CONVEX_URL — run `npx convex dev` to create .env.local.',
  )
}

// One client for the whole app, pointed at our Convex deployment.
const convex = new ConvexReactClient(convexUrl)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* ConvexProvider makes useQuery/useMutation available everywhere below it */}
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </StrictMode>,
)
