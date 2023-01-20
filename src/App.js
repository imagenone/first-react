import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/componenteA';
import { REGISTRO } from './models/registro.contacto';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ComponenteA contacto={REGISTRO} /> */}
      {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        <Ejemplo2></Ejemplo2>
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* Todo loq ue hay aquí, es tratado como props.children */}
        {/* <Ejemplo4 nombre="Martín">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}



        
       
      </header>
    </div>
  );
}

export default App;