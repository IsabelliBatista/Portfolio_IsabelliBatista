import './App.css';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Redes from './components/Redes';
import Conteudo from './components/Conteudo';
import Galeria from './components/Galeria';

function App() {
  return (
    <div className="App">
     <Header/>
     <Sobre />
     <Redes />
     <Conteudo />
     <Galeria />
    </div>
  );
}

export default App;
