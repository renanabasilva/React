import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function Dadosimc(){

  const [peso, setPeso] = useState<any>('')
  const [altura, setAltura] = useState<any>('')
  const [imc, setImc] = useState<any>('')
  const [nome, setNome] = useState<any>('')
  const [data, setData] = useState<any>('')

  const router = useRouter()
  const {p_peso, p_altura, p_imc} = router.query

  useEffect(() =>{
    setPeso(p_peso)
    setAltura(p_altura)
    setImc(p_imc)
    setData('27/02/2024')
  },[p_peso, p_altura, p_imc])

  return(
    <div>
      <div>
        <div className="campoForm">
          <label>Nome</label>
          <input className="inputDados" type="text" value={nome} onChange={(evt) => setNome(evt.target.value)}/>
        </div>
        <div className="campoForm">
          <label>Peso</label>
          <input className="inputDados" type="text" value={peso}/>
        </div>
        <div className="campoForm">
          <label>Altura</label>
          <input className="inputDados" type="text" value={altura}/>
        </div>
        <div className="campoForm">
          <label>IMC</label>
          <input className="inputDados" type="text" value={imc}/>
        </div>
        <div className="campoForm">
          <label>Data</label>
          <input className="inputDados" type="text" value={data}/>
        </div>
        <div className="campoForm">
          <button className="buttonDados">Gravar</button>
        </div>
      </div>
      <div className="grid">
        <div className="gridLinhaTitulos">
          <div className="gridTitulos">Nome</div>
          <div className="gridTitulos">Peso</div>
          <div className="gridTitulos">Altura</div>
          <div className="gridTitulos">IMC</div>
          <div className="gridTitulos">Data</div>
        </div>
        <div className="gridLinhaDados">
          <div className="gridLinhas">
            <div className="gridLinha">Nome</div>
            <div className="gridLinha">Peso</div>
            <div className="gridLinha">Altura</div>
            <div className="gridLinha">IMC</div>
            <div className="gridLinha">Data</div>
          </div>
        </div>
      </div>
    </div>
  )
}