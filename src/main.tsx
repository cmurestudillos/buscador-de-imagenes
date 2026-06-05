import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Desregistra cualquier service worker heredado de versiones anteriores
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(reg => reg.unregister());
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
