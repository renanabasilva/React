import './App.css';
// import HelloWorld from './components/HelloWorld';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import List from './components/List'
import Form from './components/Form'
import Evento from './components/Evento'

function App() {
  //   const name = 'Renan'

  //   function sum(a, b) {
  //     return a + b
  //   }

  //   const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <Evento numero={1}/>
      <Evento numero={2}/>
      <Form />
      {/* <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha imagem" />
      <HelloWorld />
      <SayMyName nome={name} />
      <Pessoa
        nome="Renan"
        idade="31"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <List/> */}
    </div>
  );
}

export default App;  
