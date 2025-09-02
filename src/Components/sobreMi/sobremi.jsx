import React from 'react'
import './sobremi.css'

export default function Sobremi() {
  return (
    <section className="sobremi-section">
      <h2 className="sobremi-title">Sobre mí</h2>
      <div className="sobremi-presentacion">
        <h3>Presentación personal</h3>
        <p className="sobremi-texto">Soy una persona autodidacta y apasionada por el mundo empresarial y el desarrollo de software. Me destaco por mi capacidad de análisis, el uso de herramientas estadísticas y la gestión de datos. Disfruto aprendiendo de manera continua y tengo un gran interés en el análisis de datos y en la aplicación de soluciones tecnológicas en entornos empresariales.</p>
      </div>
      <div className="sobremi-aptitudes">
        <h3>Aptitudes y conocimientos</h3>
        <p className="sobremi-texto">- Capacidad de adaptación y aprendizaje rápido.<br/>
- Experiencia en sistemas de gestión empresarial y metodologías ágiles.<br/>
- Habilidades en análisis de datos y uso de herramientas estadísticas.<br/>
- Proactividad, responsabilidad y orientación a resultados.<br/>
- Facilidad para el trabajo en equipo y la comunicación.</p>
      </div>
      <div className="sobremi-gustos">
        <h3>Gustos personales</h3>
        <p className="sobremi-texto">Me gusta mantenerme actualizado en tecnología, aprender nuevos lenguajes de programación y explorar soluciones innovadoras. Disfruto del trabajo en equipo, el deporte y la música.</p>
      </div>
    </section>
  )
}
