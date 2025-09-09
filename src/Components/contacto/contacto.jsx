import React from 'react'
import './contacto.css'

export default function Contacto() {
  return (
    <div className="contacto-footer">
      <div className="contacto-container">
        <div className="contacto-column">
          <h2 className="contacto-title">Contacto</h2>
          <p className="contacto-texto">
            Teléfono: 681 63 36 23<br/>
            Email: nestorcan1234@gmail.com
          </p>
          <div className="contacto-social" style={{marginTop: '1.2em'}}>
            <a href="https://www.linkedin.com/in/n%C3%A9stor-cantarero-pacheco-8594622ab/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/Nestorcanpac" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Néstor Cantarero Pacheco. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}
