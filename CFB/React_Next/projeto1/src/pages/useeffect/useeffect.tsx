import { useState, useEffect } from "react"
import Topo from "@/components/Topo"

export default function useeffect() {
  
  const [cont, setCont] = useState<number>(0)
  const [aux, setAux] = useState<number>(0)

  useEffect(() => {
    alert('useEffect disparado')
  }, [aux])                              // Um array vazio como segundo termo do useEffect, faz com que a página só seja renderizada uma vez.

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
    </div>
  )
}