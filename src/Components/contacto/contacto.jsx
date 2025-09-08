import React from 'react'
import './contacto.css'

export default function Contacto() {
  return (
    <div className="contacto-footer">
      <h2 className="contacto-title">Contacto</h2>
      <p className="contacto-texto">
        Teléfono: 681 63 36 23<br/>
        Email: nestorcan1234@gmail.com<br/>
        LinkedIn: <a href="#" target="_blank" rel="noopener noreferrer">Tu perfil de LinkedIn</a><br/>
        GitHub: <a href="#" target="_blank" rel="noopener noreferrer">Tu perfil de GitHub</a>
      </p>
      <div className="contacto-extra">
        <h4>Idiomas</h4>
        <ul>
          <li>Castellano: Nativo</li>
          <li>Valenciano: Nativo</li>
          <li>Inglés: B1</li>
        </ul>
      </div>
    </div>
  )
}
