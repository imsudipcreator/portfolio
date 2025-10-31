import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import AiChat from './pages/AiChat.tsx';
import App from './App.tsx'
import './index.css'
import { AiProvider } from './contexts/AiContextProvider.tsx';
import Terminal from './pages/Terminal.tsx';
import { CliProvider } from './contexts/CliContextProvider.tsx';
import Gallery from './pages/Gallery.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AiProvider>
      <CliProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/terminal' element={<Terminal />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path="/chat" element={<AiChat />} />
          </Routes>
        </BrowserRouter>
      </CliProvider>
    </AiProvider>
  </StrictMode>,
)
