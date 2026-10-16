import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './i18n';

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  AOS.init({
    once: true,
    duration: 700,
  });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
