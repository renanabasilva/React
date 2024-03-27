import './App.css';
import {useReducer, useState} from "react"
import reducer, { ADICIONAR_FRASE, EXCLUIR_FRASE } from './reducer';
import Contador from './components/Contador';

// lista de frases (estado)
// o usuário pode adicionar novas frases, desde que:
  // - A frase possua mais do que 20 caracteres
  // - A frase seja única

function App() {

  const [frase, setFrase] = useState('')
  const [frases, dispatch] = useReducer(reducer, [])

  function salvarFrase (evt) {
    evt.preventDefault()
    dispatch({
      tipo: ADICIONAR_FRASE,
      // frase: frase
      frase,
    })
  } 

  function excluir (fraseExcluida) {
    dispatch({
      tipo: EXCLUIR_FRASE,
      frase: fraseExcluida
    })
  }

  return (
    <div className="App">
      <Contador />
      <form onSubmit={salvarFrase}>
        <textarea 
          value={frase}
          onChange={evt => setFrase(evt.target.value)}
          required 
          placeholder='Digite sua frase...'
          cols="30" 
          rows="5"
        />
        <br />
        <button>Salvar frase</button>
      </form>
      {frases.map((fraseAtual, index) => <p key={index}>{fraseAtual} - <button onClick={() => excluir(fraseAtual)}>excluir</button></p>)}
    </div>
  );
}

export default App;
