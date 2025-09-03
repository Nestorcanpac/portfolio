import React from 'react'
import './formacion.css'

export default function Formacion() {
  return (
    <section className="formacion-section reveal">
      <h2 className="formacion-title">Formación</h2>
      <div className="formacion-finalizado reveal">
        <h3>He finalizado</h3>
        <p className="formacion-texto">Bachillerato Científico-Técnico<br/>
Formación sólida en ciencias, que me ha permitido desarrollar una base firme y superar con éxito las pruebas de acceso a estudios superiores.</p>
      </div>
      <div className="formacion-cursando reveal">
        <h3>Estoy cursando</h3>
        <p className="formacion-texto">Grado Superior en Desarrollo de Aplicaciones Multiplataforma (2022-2024)<br/>
Estos estudios me han permitido integrarme en el mundo SaaS y profundizar tanto en el aprendizaje en clase como de forma autodidacta. He adquirido conocimientos en sistemas de gestión empresarial y metodologías ágiles, así como en el desarrollo de aplicaciones y soluciones tecnológicas.</p>
      </div>
    </section>
  )
}
