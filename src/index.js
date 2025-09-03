import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Observer para revelar elementos al hacer scroll
const setupRevealObserver = () => {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
  );

  const nodes = document.querySelectorAll('.reveal');
  nodes.forEach((el) => observer.observe(el));
};

// Ejecutar al cargar el DOM y también inmediatamente tras render
window.addEventListener('DOMContentLoaded', setupRevealObserver);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Ejecutar inmediatamente después del primer render
setupRevealObserver();
// Reintento tras un pequeño delay por si hay nodos que montan tarde
setTimeout(setupRevealObserver, 300);

reportWebVitals();
