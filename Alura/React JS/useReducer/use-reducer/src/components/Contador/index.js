import { useReducer } from "react"

const estadoInicial = {valor: 0}

const reducer = (contador, acao) => {
  switch (acao.tipo) {
    case 'INCREMENTAR':
      return { valor: contador.valor + 1 }
    case 'DECREMENTAR':
      return { valor: contador.valor - 1 }
    default:
      throw new Error()
  }
}

const Contador = () => {

  const [contador, dispatch] = useReducer(reducer, estadoInicial)

  const incrementar = () => {
    dispatch({
      tipo: 'INCREMENTAR'      
    })
  }
  
  const decrementar = () => {
    dispatch({
      tipo: 'DECREMENTAR'      
    })
  }
  
  console.log(contador.valor)

  return (
    <>
      <p>Contador: {contador.valor}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </>
  )
}

export default Contador