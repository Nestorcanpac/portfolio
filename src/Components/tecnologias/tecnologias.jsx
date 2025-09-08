import React, { useState, useEffect } from 'react'
import './tecnologias.css'

export default function Tecnologias() {
  const tecnologias = [
    { nombre: 'SAP ABAP', id: 1, imagen: '/sap-abap.png' },
    { nombre: 'TypeScript', id: 2, imagen: '/typescript.png' },
    { nombre: 'Java', id: 3, imagen: '/java.png' },
    { nombre: 'SQL', id: 4, imagen: '/sql.png' },
    { nombre: 'HTML', id: 5, imagen: '/html.png' },
    { nombre: 'CSS', id: 6, imagen: '/css.png' },
    { nombre: 'JavaScript', id: 7, imagen: '/JavaScript.png' },
    { nombre: 'React', id: 8, imagen: '/React.png' },
    { nombre: 'Kotlin', id: 9, imagen: '/kotlin.png' },
    { nombre: 'Vue', id: 10, imagen: '/Vue.png' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % tecnologias.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, tecnologias.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? tecnologias.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tecnologias.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="tecnologias-section reveal">
      <h2 className="tecnologias-title">Tecnologías y lenguajes</h2>
      <div className="tecnologias-carrusel">
        <button className="carrusel-btn prev" onClick={handlePrev} aria-label="Anterior">&#10094;</button>
        
        <div className="carrusel-contenido">
          <div className="carrusel-item">
            <div className="tecnologia-card">
              <img 
                src={tecnologias[currentIndex].imagen} 
                alt={tecnologias[currentIndex].nombre} 
                className="tecnologia-imagen"
              />
              <h3>{tecnologias[currentIndex].nombre}</h3>
            </div>
          </div>
        </div>
        
        <button className="carrusel-btn next" onClick={handleNext} aria-label="Siguiente">&#10095;</button>
      </div>
      
      <div className="carrusel-dots">
        {tecnologias.map((tech, index) => (
          <span 
            key={tech.id}
            className={`carrusel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  )
}