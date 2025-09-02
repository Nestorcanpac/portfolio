import React from 'react'
import './proyectos.css'

export default function Proyectos() {
  return (
    <section className="proyectos-section">
      <h2 className="proyectos-title">Proyectos</h2>
      <div className="proyectos-item">
        <h3>Proyecto 1</h3>
        <p className="proyectos-texto">Aquí puedes escribir los detalles de tu primer proyecto.</p>
      </div>
      <div className="proyectos-item">
        <h3>Proyecto 2</h3>
        <p className="proyectos-texto">Aquí puedes escribir los detalles de tu segundo proyecto.</p>
      </div>
    </section>
  )
}
