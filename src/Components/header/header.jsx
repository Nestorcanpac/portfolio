import React from 'react'
import { Avatar } from '@mui/material'
import './header.css'

export default function ParteArribaHeader() {

  const [info, setInfo] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const panelRef = React.useRef(null);
  const profileRef = React.useRef(null);

  const toggleInfo = () => setInfo((v) => !v);

  React.useEffect(() => {
    if (!info) return;
    const handleClickOutside = (e) => {
      const panel = panelRef.current;
      const profile = profileRef.current;
      if (panel && profile && !panel.contains(e.target) && !profile.contains(e.target)) {
        setInfo(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [info]);

  const onKeyToggle = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (isMobile) {
        setMobileOpen((v) => !v);
      } else {
        toggleInfo();
      }
    }
  };

  // Bloquear scroll del body cuando el menú móvil está abierto
  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Detectar móvil por media query
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 600px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener('change', update) : mq.addListener(update);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', update) : mq.removeListener(update);
    };
  }, []);

  return (
    <div className={`header-container ${info ? 'with-contact-panel' : ''}`}>

    <div className='header-left'>
      <div 
        className="header-profile"
        onClick={() => {
          if (isMobile) {
            setMobileOpen(true);
          } else {
            toggleInfo();
          }
        }}
        onKeyDown={onKeyToggle}
        role="button"
        tabIndex={0}
        ref={profileRef}
      >
        {isMobile ? (
          <button
            className="hamburger-button"
            aria-label="Abrir menú"
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              marginRight: '12px',
              cursor: 'pointer'
            }}
          >
            <svg
              className="hamburger-icon"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="6" width="18" height="2" rx="1" fill="#ff0055"/>
              <rect x="3" y="11" width="18" height="2" rx="1" fill="#ff0055"/>
              <rect x="3" y="16" width="18" height="2" rx="1" fill="#ff0055"/>
            </svg>
          </button>
        ) : (
          <Avatar 
            src="/nestor perfil.jpeg" 
            className="avatar-grande"
          />
        )}
        <div className="header-identity">
          <h1>Néstor Cantarero Pacheco</h1>
          <p>Investigador de Software</p>
        </div>
      </div>
      <div className={info ? 'info-animada' : 'info-oculta'} ref={panelRef}>
        <div className="info-header">
          <h1>Contáctame aquí</h1>
          <button className="info-close" onClick={() => setInfo(false)} aria-label="Cerrar">×</button>
        </div>
        <div className="info-links">
          <a href="https://www.linkedin.com/in/néstor-cantarero-pacheco-8594622ab/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:nestorcan1234@gmail.com">Email</a>
          <a href="tel:+34681633623">Teléfono</a>
        </div>
      </div>
    </div>
    {/* Navegación de escritorio */}
    <nav className="header-nav">
      <a href="#sobremi">Sobre mí</a>
      <a href="#formacion">Formación</a>
      <a href="#experiencia">Experiencia</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#tecnologias">Tecnologías</a>
      <a href="#contacto">Contacto</a>
    </nav>

    {/* Overlay y cajón lateral móvil */}
    <div
      className={`backdrop ${mobileOpen ? 'show' : ''}`}
      onClick={() => setMobileOpen(false)}
      aria-hidden={!mobileOpen}
    />
    <aside id="mobile-drawer" className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
      <div className="drawer-header">
        <div className="drawer-profile">
          <Avatar src="/nestor perfil.jpeg" className="avatar-drawer" />
          <div>
            <h2>Néstor Cantarero Pacheco</h2>
            <span>Investigador de Software</span>
          </div>
        </div>
        <button className="drawer-close" onClick={() => setMobileOpen(false)} aria-label="Cerrar">×</button>
      </div>
      <div className="drawer-section">
        <h3 className="drawer-subtitle">Navegación</h3>
        <nav className="drawer-nav" onClick={() => setMobileOpen(false)}>
          <a href="#sobremi">Sobre mí</a>
          <a href="#formacion">Formación</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
      <div className="drawer-section drawer-contacts">
        <h3 className="drawer-subtitle">Contáctame</h3>
        <div className="drawer-nav">
          <a href="https://www.linkedin.com/in/néstor-cantarero-pacheco-8594622ab/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:nestorcan1234@gmail.com">Email</a>
          <a href="tel:+34681633623">Teléfono</a>
        </div>
      </div>
    </aside>
    </div>
  )
}
