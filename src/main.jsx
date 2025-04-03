import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@canva/app-ui-kit/styles.css";
import { TestAppUiProvider } from "@canva/app-ui-kit";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TestAppUiProvider>
  <App />
</TestAppUiProvider>
  </StrictMode>,
)
