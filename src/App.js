import logo from './logo.svg';
import './App.css';
import ParteArribaHeader from './Components/header/header';
import Sobremi from './Components/sobreMi/sobremi';
import Formacion from './Components/formacion/formacion';
import Proyectos from './Components/proyectos/proyectos';
import Experiencia from './Components/experiencia/experiencia';
import Contacto from './Components/contacto/contacto';

function App() {
  return (
    <div className="App bg-dots-dark">
      <ParteArribaHeader />
      <header className="App-header">
        <div className="bg-dots-light fade-hero-light">
          <div id="sobremi" className="seccion">
            <Sobremi />
          </div>
        </div>
        <div className="bg-dots-dark">
          <div id="formacion" className="seccion">
            <Formacion />
          </div>
        </div>
        <div className="bg-dots-light">
          <div id="experiencia" className="seccion">
            <Experiencia />
          </div>
        </div>
        <div className="bg-dots-dark">
          <div id="proyectos" className="seccion">
            <Proyectos />
          </div>
        </div>
      </header>
      <footer id="contacto" className="seccion bg-dots-dark">
        <Contacto />
      </footer>
    </div>
  );
}

export default App;
