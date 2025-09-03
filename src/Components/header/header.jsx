import React from 'react'
import { Avatar } from '@mui/material'
import './header.css'

export default function ParteArribaHeader() {

  const [info, setInfo] = React.useState(false);
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
      toggleInfo();
    }
  };

  return (
    <div className='header-container'>

    <div className='header-left'>
      <div 
        className="header-profile"
        onClick={toggleInfo}
        onKeyDown={onKeyToggle}
        role="button"
        tabIndex={0}
        ref={profileRef}
      >
        <Avatar 
          src="/nestor perfil.jpeg" 
          className="avatar-grande"
        />
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
          <a href="mailto:nombre@correo.com">Email</a>
          <a href="tel:+34600000000">Teléfono</a>
        </div>
      </div>
    </div>
    <nav className="header-nav">
      <a href="#sobremi">Sobre mí</a>
      <a href="#formacion">Formación</a>
      <a href="#experiencia">Experiencia</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
    </nav>
    </div>
  )
}
