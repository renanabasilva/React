import { useState, useEffect } from "react"
import Topo from "@/components/Topo"
import Globais from "@/components/Globais"

export default function useeffect() {
  
  const [cont, setCont] = useState<number>(0)
  const [aux, setAux] = useState<number>(0)

  useEffect(() => {
    alert('useEffect disparado')
    Globais.canal = 'CFBDrones'
    Globais.curso = 'Typescript'
    Globais.ano = '2099'
  }, [])                              // Um array vazio como segundo termo do useEffect, faz com que a página só seja renderizada uma vez.
// }, [aux])

  function add() {
    setCont((adicionar:number) => adicionar + 1)
    setAux((adicionar:number) => adicionar + 1)
  }

  return (
    <div>
      <Topo/>
      <div>
        <p>{`Valor de cont: ${cont}`}</p>
        <p>{`Valor de cont: ${aux}`}</p>
        <button onClick={add}>Adicionar 1</button>
      </div>
      <div>
        <p>{Globais.curso}</p>
        <p>{Globais.canal}</p>
        <p>{Globais.ano}</p>
      </div>
    </div>
  )
}