import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParteArribaHeader from './Components/header/header';
import Sobremi from './Components/sobreMi/sobremi';
import Formacion from './Components/formacion/formacion';
import Proyectos from './Components/proyectos/proyectos';
import Experiencia from './Components/experiencia/experiencia';
import Contacto from './Components/contacto/contacto';

function App() {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [showBackButton, setShowBackButton] = React.useState(false);

  React.useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.round((scrollTop / scrollHeight) * 100);
      setScrollProgress(Math.min(progress, 100));

      // Mostrar botón back-to-top a partir de la segunda sección
      const formacion = document.getElementById('formacion');
      const thresholdY = formacion ? formacion.offsetTop - (window.innerHeight * 0.2) : 400;
      setShowBackButton(scrollTop > thresholdY);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress(); // inicializar

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const scrollToTop = () => {
    const el = document.getElementById('sobremi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="App bg-dots-dark">
      <ParteArribaHeader />
      <header className="App-header">
        <div className="bg-dots-light fade-hero-light">
          <div id="sobremi" className="seccion">
            <Sobremi />
          </div>
        </div>
        <div className="bg-dots-dark">
          <div id="formacion" className="seccion">
            <Formacion />
          </div>
        </div>
        <div className="bg-dots-light">
          <div id="experiencia" className="seccion">
            <Experiencia />
          </div>
        </div>
        <div className="bg-dots-dark">
          <div id="proyectos" className="seccion">
            <Proyectos />
          </div>
        </div>
      </header>
      <footer id="contacto" className="seccion bg-dots-dark">
        <Contacto />
      </footer>
      <div className={`progress-indicator ${showBackButton ? 'with-back-button' : ''}`}>
        {scrollProgress}%
      </div>
      <button 
        className={`back-to-top ${showBackButton ? 'show' : ''}`} 
        onClick={scrollToTop} 
        aria-label="Volver al inicio"
      >
        ↑
      </button>
    </div>
  );
}

export default App;
