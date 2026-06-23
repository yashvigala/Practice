import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import './index.css'
import App from './App.tsx'

// One client for the whole app, pointed at our Convex deployment.
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* ConvexProvider makes useQuery/useMutation available everywhere below it */}
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </StrictMode>,
)
