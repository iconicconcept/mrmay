import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'
import { DarkModeProvider } from './context/DarkModeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <BrowserRouter>
        <Toaster />
        <App />
      </BrowserRouter>
    </DarkModeProvider>
  </StrictMode>,
)
