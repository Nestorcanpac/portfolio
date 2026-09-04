import React from 'react'
import './sobremi.css'
import Typewriter from '../Typewriter'

export default function Sobremi() {
  return (
    <section className="sobremi-section reveal">
      <h2 className="sobremi-title"><Typewriter text="Sobre mí" speed={50} /></h2>
      <div className="sobremi-presentacion reveal">
        <h3><Typewriter text="Presentación personal" speed={30} /></h3>
        <p className="sobremi-texto">
          <Typewriter
            text="Soy una persona autodidacta y apasionada por el mundo empresarial y el desarrollo de software. Me destaco por mi capacidad de análisis, el uso de herramientas estadísticas y la gestión de datos. Disfruto aprendiendo de manera continua y tengo un gran interés en el análisis de datos y en la aplicación de soluciones tecnológicas en entornos empresariales."
            speed={5}
          />
        </p>
      </div>
      <div className="sobremi-aptitudes reveal">
        <h3><Typewriter text="Aptitudes y conocimientos" speed={30} /></h3>
        <p className="sobremi-texto">
          <Typewriter text="- Capacidad de adaptación y aprendizaje rápido." speed={10} /><br />
          <Typewriter text="- Experiencia en sistemas de gestión empresarial y metodologías ágiles." speed={10} /><br />
          <Typewriter text="- Habilidades en análisis de datos y uso de herramientas estadísticas." speed={10} /><br />
          <Typewriter text="- Proactividad, responsabilidad y orientación a resultados." speed={10} /><br />
          <Typewriter text="- Facilidad para el trabajo en equipo y la comunicación." speed={10} />
        </p>
      </div>
      <div className="sobremi-gustos reveal">
        <h3><Typewriter text="Gustos personales" speed={30} /></h3>
        <p className="sobremi-texto">
          <Typewriter
            text="Me gusta mantenerme actualizado en tecnología, aprender nuevos lenguajes de programación y explorar soluciones innovadoras. Disfruto del trabajo en equipo, el deporte y la música."
            speed={5}
          />
        </p>
      </div>
      <div className="sobremi-idiomas reveal">
        <h3><Typewriter text="Idiomas" speed={30} /></h3>
        <ul className="sobremi-lista">
          <li><Typewriter text="Castellano: Nativo" speed={20} /></li>
          <li><Typewriter text="Valenciano: Nativo" speed={20} /></li>
          <li><Typewriter text="Inglés: B1" speed={20} /></li>
        </ul>
      </div>
      <div className="sobremi-idiomas reveal">
        <h3><Typewriter text="Otra información" speed={30} /></h3>
        <p className="sobremi-texto">
          <Typewriter text="Dispongo de coche propio por lo que tengo facilidad de transporte y adaptabilidad a los horarios." speed={10} />
        </p>
      </div>
    </section>
  )
}
