import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx';
import { AiProvider } from './contexts/AiContextProvider.tsx';
import { CliProvider } from './contexts/CliContextProvider.tsx';
import './index.css';
import AiChat from './pages/AiChat.tsx';
import Terminal from './pages/Terminal.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AiProvider>
      <CliProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/terminal' element={<Terminal />} />
            <Route path="/chat" element={<AiChat />} />
          </Routes>
        </BrowserRouter>
      </CliProvider>
    </AiProvider>
  </StrictMode>,
)
