import Topo from "@/components/Topo";
import { useState, useEffect } from "react";
import useeffect from "../useeffect/useeffect";

// const carros = [
//   { id: 0, categ: "Esporte", valor: "120000.00", modelo: "Golf GTI" },
//   { id: 1, categ: "Esporte", valor: "200000.00", modelo: "Camaro" },
//   { id: 2, categ: "SUV", valor: "100000.00", modelo: "HRV" },
//   { id: 3, categ: "SUV", valor: "100000.00", modelo: "T-Cross" },
//   { id: 4, categ: "Utilitario", valor: "180000.00", modelo: "Hillux" },
//   { id: 5, categ: "Utilitario", valor: "160000.00", modelo: "Ranger" },
// ];

let carros:any=''
let listaPronta = false;


export default function Filtragem() {
  const [categ, setCateg] = useState('')
  const [linhas, setLinhas] = useState<any[]>([])
  
  useEffect(() =>{
    fetch('url')
    .then(res => res.json())
    .then(res => {
      carros = res
      listaPronta = true
    })
  },[])


  function criarLinhas(cat:any){
    if (listaPronta){
      setCateg(cat)
      let l:any[]=[]
      carros.forEach((c:any) => {
        if(c.categ==cat){
          l.push(
            <div className="flex flex-row w-[500px]" key={c.id}>
              <div className="w-full">{c.categ}</div>
              <div className="w-full">{c.valor}</div>
              <div className="w-full">{c.modelo}</div>
            </div>
          )
        }
      })
      setLinhas(l)
    } else {
      alert('Lista ainda não está pronta')
    }
  }

  return (
    <div>
      <Topo />
      <label>Selecione a categoria: </label>
      <select value={categ} onChange={(evt) => {criarLinhas(evt.target.value)}}>
        <option value=''>Nenhum</option>
        <option value='Esporte'>Esporte</option>
        <option value='SUV'>SUV</option>
        <option value='Utilitario'>Utilitario</option>
      </select>

      <div className="flex flex-col">
        <div className="flex flex-row w-[500px]">
          <div className="w-full">Categoria</div>
          <div className="w-full">Valor</div>
          <div className="w-full">Modelo</div>
        </div>
        {linhas}
      </div>
    </div>
  );
}
