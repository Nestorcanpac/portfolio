import React from 'react'
import './proyectos.css'

const projects = [
  {
    title: 'Toten',
    image: '/toten.png',
    href: 'https://toten.app/',
    description: "Durante mi tiempo con el equipo de UNDF Studio, tuve la oportunidad de colaborar en el desarrollo de un sistema ERP (planificación de recursos empresariales) que actualmente es utilizado por varios negocios en La Vall d'Uixó. En este proyecto, mis responsabilidades incluyeron la gestión de la comunicación con clientes y proveedores, además de realizar mejoras en la gestión de inventario.",
    fit: 'contain'
  },
  {
    title: 'Toten App',
    image: '/totenapp.png',
    href: 'https://play.google.com/store/apps/details?id=com.undf.toten&hl=es_419',
    description: "Luego, junto al equipo de UNDF Studio, me uní al proyecto de la aplicación móvil de Toten. Aquí mi implicación fue mucho mayor, ya que me encargué de distintos módulos. Por ejemplo, desarrollé el módulo de TPV para que se pudiera gestionar el inventario desde la app, y también trabajé en todo el módulo de RR. HH., adaptándolo por completo para la versión móvil.",
    fit: 'cover'
  },
  {
    title: 'ADONIS',
    image: '/adonis.png',
    href: 'https://www.boc-group.com/es/adonis/',
    description: "En mi tiempo en Austria, me uní al equipo de pruebas de BOC Group para trabajar en Adonis, una herramienta para gestionar procesos. Mi trabajo se centró en evaluar el proyecto desde el punto de vista del usuario, utilizando TypeScript para todo el proceso.",
    fit: 'contain'
  }
]

export default function Proyectos() {
  return (
    <section className="proyectos-section reveal">
      <h2 className="proyectos-title">Proyectos</h2>

      <div className="proyectos-grid">
        {projects.map((p) => (
          <a
            key={p.title}
            className="project-card reveal"
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${p.title}`}
          >
            <div className={`project-media ${p.fit === 'cover' ? 'fit-cover' : 'fit-contain'}`}>
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>
            <div className="project-info">
              <h3 className="project-title">{p.title}</h3>
              {p.description && (
                <p className="project-desc">{p.description}</p>
              )}
              <span className="project-cta">Abrir proyecto →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
