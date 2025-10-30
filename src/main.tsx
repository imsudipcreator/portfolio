import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import AiChat from './pages/AiChat.tsx';
import App from './App.tsx'
import './index.css'
import { AiProvider } from './contexts/AiContextProvider.tsx';
import Terminal from './pages/Terminal.tsx';
import Home from './pages/Home.tsx';
import { CliProvider } from './contexts/CliContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AiProvider>
      <CliProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route index element={<Home />} />
              <Route path='/terminal' element={<Terminal />} />
            </Route>
            <Route path="/chat" element={<AiChat />} />
          </Routes>
        </BrowserRouter>
      </CliProvider>
    </AiProvider>
  </StrictMode>,
)
