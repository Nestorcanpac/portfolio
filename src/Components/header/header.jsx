import React from 'react'
import { Avatar } from '@mui/material'
import './header.css'


export default function ParteArribaHeader() {

  const [info, setInfo] = React.useState(false);

  const muestraInfo = () => {
    setInfo(!info);
  }

  

  return (
    <div className='header-container'>

    <div className='header-left'>
      <Avatar 
        src="/fotoperfil.jpg" 
        className="avatar-grande"
        onMouseEnter={() => setInfo(true)}
        onMouseLeave={() => setInfo(false)}
      />
      <div className={info ? 'info-animada' : 'info-oculta'}>
        <h1>Néstor</h1>
        <h1>Cantarero Pacheco</h1>   
        <p>Desarrollador de software</p>
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
