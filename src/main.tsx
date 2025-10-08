import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ContactPopupProvider } from './components/ContactPopupProvider';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ContactPopupProvider>
          <App />
        </ContactPopupProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);