import React from 'react'
import './experiencia.css'

export default function Experiencia() {
  return (
    <section className="experiencia-section reveal">
      <h2 className="experiencia-title">Experiencia</h2>

      <div className="experiencia-item experiencia-row reveal">
        <div className="experiencia-content">
          <h3>Trabajo en UNDF Studio</h3>
          <p className="experiencia-texto">Aquí estuve ayudando a desarrollar la ERP de Toten junto con su app para Android.</p>
        </div>
        <div className="experiencia-logo">
          <img src="/undf logo.jpeg" alt="UNDF Studio" className="logo-img" />
        </div>
      </div>

      <div className="experiencia-item experiencia-row reveal">
        <div className="experiencia-content">
          <h3>Prácticas en el extranjero (BOC Group, Viena, Austria, Junio - Agosto 2024)</h3>
          <p className="experiencia-texto">Colaboré en el departamento de IT, participando en proyectos de testing y aprendiendo TypeScript en un entorno internacional.</p>
        </div>
        <div className="experiencia-logo">
          <img src="/Boc Logo.jpeg" alt="BOC Group" className="logo-img" />
        </div>
      </div>

      <div className="experiencia-item experiencia-row reveal">
        <div className="experiencia-content">
          <h3>Prácticas en Bulhgra (Marzo - Mayo 2024, 600h)</h3>
          <p className="experiencia-texto">Desarrollé y desplegué soluciones para sistemas empresariales, especializándome en el lenguaje ABAP y contribuyendo a la mejora de los procesos internos de la empresa.</p>
        </div>
        <div className="experiencia-logo">
          <img src="/blumaq logo.jpeg" alt="Bulhgra" className="logo-img" />
        </div>
      </div>

      <div className="experiencia-item experiencia-row reveal">
        <div className="experiencia-content">
          <h3>Sector restauración (Julio 2022 - Actualidad)</h3>
          <p className="experiencia-texto">Trabajo en el sector de la restauración, donde he potenciado mis habilidades de trabajo en equipo, atención al cliente y gestión bajo presión.</p>
        </div>
        <div className="experiencia-logo">
          <div className="logo-placeholder">Logo empresa</div>
        </div>
      </div>
    </section>
  )
}
