import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParteArribaHeader from './Components/header/header';
import Sobremi from './Components/sobreMi/sobremi';
import Formacion from './Components/formacion/formacion';
import Proyectos from './Components/proyectos/proyectos';
import Experiencia from './Components/experiencia/experiencia';
import Tecnologias from './Components/tecnologias/tecnologias';
import Contacto from './Components/contacto/contacto';
import { Reveal, RevealScale } from './Components/Reveal';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import DotGrid from './Components/DotGrid';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showBackButton, setShowBackButton] = React.useState(false);

  React.useEffect(() => {
    const updateShowButton = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // Mostrar botón back-to-top a partir de 400px
      setShowBackButton(scrollTop > 400);
    };

    window.addEventListener('scroll', updateShowButton, { passive: true });
    updateShowButton(); // inicializar

    return () => {
      window.removeEventListener('scroll', updateShowButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App bg-dots-dark">
      <DotGrid />
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />

      <ParteArribaHeader />

      <header className="App-header">
        <div className="bg-dots-light fade-hero-light">
          <div id="sobremi" className="seccion">
            <RevealScale>
              <Sobremi />
            </RevealScale>
          </div>
        </div>
        <div className="bg-dots-dark">
          <div id="formacion" className="seccion">
            <Reveal>
              <Formacion />
            </Reveal>
          </div>
        </div>
        <div className="bg-dots-light">
          <div id="experiencia" className="seccion">
            <Reveal>
              <Experiencia />
            </Reveal>
          </div>
        </div>
        <div className="bg-dots-dark">
          <div id="proyectos" className="seccion">
            <RevealScale>
              <Proyectos />
            </RevealScale>
          </div>
        </div>
        <div className="bg-dots-light">
          <div id="tecnologias" className="seccion">
            <Reveal>
              <Tecnologias />
            </Reveal>
          </div>
        </div>
      </header>

      <footer id="contacto">
        <Reveal>
          <Contacto />
        </Reveal>
      </footer>

      <AnimatePresence>
        {showBackButton && (
          <motion.button
            className="back-to-top show"
            onClick={scrollToTop}
            aria-label="Volver al inicio"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
