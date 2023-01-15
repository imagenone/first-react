import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/componenteA';
import { REGISTRO } from './models/registro.contacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={REGISTRO} />
      </header>
    </div>
  );
}

export default App;