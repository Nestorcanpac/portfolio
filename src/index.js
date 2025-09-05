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

// Control del botón back-to-top
const setupBackToTop = () => {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  const formacion = document.getElementById('formacion');
  const thresholdY = formacion ? formacion.offsetTop - (window.innerHeight * 0.2) : 400;

  const onScroll = () => {
    const y = window.scrollY || window.pageYOffset;
    if (y > thresholdY) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
};

window.addEventListener('DOMContentLoaded', () => {
  setupRevealObserver();
  setupBackToTop();
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Ejecutar inmediatamente después del primer render
setupRevealObserver();
setTimeout(() => {
  setupRevealObserver();
  setupBackToTop();
}, 300);

// Fallback: si el observer no funciona, mostrar todo después de 1 segundo
setTimeout(() => {
  const hiddenElements = document.querySelectorAll('.reveal:not(.visible)');
  if (hiddenElements.length > 0) {
    console.log('Fallback: mostrando elementos ocultos');
    hiddenElements.forEach(el => el.classList.add('visible'));
  }
}, 1000);

reportWebVitals();
