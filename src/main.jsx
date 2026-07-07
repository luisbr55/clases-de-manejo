import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import RoadMap from './RoadMap.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout />
    <App />

  </StrictMode>,
)
