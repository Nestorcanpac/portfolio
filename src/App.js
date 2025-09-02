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
    <div className="App">
      <ParteArribaHeader />
      <header className="App-header">
        <div id="sobremi" className="seccion">
          <Sobremi />
        </div>
        <div id="formacion" className="seccion">
          <Formacion />
        </div>
        <div id="experiencia" className="seccion">
          <Experiencia />
        </div>
        <div id="proyectos" className="seccion">
          <Proyectos />
        </div>
        <div id="contacto" className="seccion">
          <Contacto />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
