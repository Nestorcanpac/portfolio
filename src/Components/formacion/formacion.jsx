import React from 'react'
import './formacion.css'
import Typewriter from '../Typewriter'

export default function Formacion() {
  return (
    <section className="formacion-section reveal">
      <h2 className="formacion-title"><Typewriter text="Formación" speed={50} /></h2>
      <div className="formacion-finalizado reveal">
        <h3><Typewriter text="He finalizado" speed={30} /></h3>
        <p className='formacion-textotitulo'><Typewriter text="Bachillerato Científico-Técnico" speed={20} /></p>
        <p className="formacion-texto">
          <Typewriter
            text="Formación sólida en ciencias, que me ha permitido desarrollar una base firme y superar con éxito las pruebas de acceso a estudios superiores."
            speed={5}
          />
        </p>

        <p> </p>
        <p> </p>

        <p className='formacion-textotitulo'><Typewriter text="Grado Superior en Desarrollo de Aplicaciones Multiplataforma (2022-2024)" speed={20} /></p>

        <p className='formacion-texto'>
          <Typewriter
            text="Estos estudios me han permitido integrarme en el mundo SaaS y profundizar tanto en el aprendizaje en clase como de forma autodidacta. He adquirido conocimientos en sistemas de gestión empresarial y metodologías ágiles, así como en el desarrollo de aplicaciones y soluciones tecnológicas."
            speed={5}
          />
        </p>

      </div>
      <div className="formacion-cursando reveal">
        <h3><Typewriter text="Estoy cursando" speed={30} /></h3>
        <p className="formacion-textotitulo"><Typewriter text="Grado Superior en Desarrollo de Aplicaciones Web" speed={20} /></p>
        <p><Typewriter text="(en progreso)" speed={20} /></p>
        <p></p>
        <p></p>

        <p className='formacion-textotitulo'><Typewriter text="Nivel inglés B2" speed={20} /></p>
        <p><Typewriter text="(en progreso)" speed={20} /></p>


      </div>
    </section>
  )
}
