import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import AiChat from './pages/AiChat.tsx';
import App from './App.tsx'
import './index.css'
import { AiProvider } from './contexts/AiContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/chat" element={<AiChat />} />
        </Routes>
      </BrowserRouter>
    </AiProvider>
  </StrictMode>,
)
