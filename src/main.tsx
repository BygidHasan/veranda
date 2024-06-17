import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { VerandaProvider } from './context/VerandaCustomization.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VerandaProvider>
      <App />
    </VerandaProvider>
  </React.StrictMode>
);
