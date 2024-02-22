import { useState, useEffect } from "react"
import Topo from "@/components/Topo"
import Globais from "@/components/Globais"
import useeffect from "../useeffect/useeffect"

const cursos = ["", "HTML", "CSS", "Javascript", "React", "C++", "Arduino"]

// Formato JSON
const jcursos = [
  {"curso":""}, 
  {"curso":"HTML"}, 
  {"curso":"CSS"}, 
  {"curso":"Javascript"}, 
  {"curso":"React"}, 
  {"curso":"C++"}, 
  {"curso":"Arduino"}
]

export default function Inputs() {

  const [nome, setNome] = useState<string>('')
  const [curso, setCurso] = useState<string>('')

  useEffect(() => {
    Globais.curso="React"
  },[])

  function fcursos (){
    return (
      cursos.map((c:string, k:number)=>{
        if (k > 0) 
          return <option value={c} key={cursos[k]}>{`Curso de ${c}`}</option> 
        else
          return <option value={c} key={cursos[k]}>{`Selecionar Curso${c}`}</option> 
      })
    )
  }

  const ccursos = jcursos.map((c:any, k:number)=>{
    console.log(c)
    console.log(c.curso)
    console.log(k)
    if (k > 0) 
      return <option value={c.curso} key={cursos[k]}>{`Curso de ${c.curso}`}</option> 
    else
      return <option value={c.curso} key={cursos[k]}>{`Selecionar Curso${c.curso}`}</option> 
  })

  return (
    <div>
      <Topo/>
      <div className="campoForm">
        <label>Nome</label>
        <input type="text" value={nome} onChange={(evt) => setNome(evt.target.value)}/>
      </div>
      <div className="campoForm">
        <label>Curso</label>
        {/* <input type="text" value={curso} onChange={(evt) => setCurso(evt.target.value)}/> */}
        <select value={curso} onChange={(evt) => setCurso(evt.target.value)}>
          {/* <option value=""></option>
          <option value="HTML">HTML</option>
          <option value="React">React</option>
          <option value="C++">C++</option>
          <option value="Javascript">Javascript</option>
          <option value="Arduino">Arduino</option>
          <option value="CSS">CSS</option> */}
          {
            // cursos.map((c:string, k:number)=>{
            //   if (k > 0) 
            //     return <option value={c} key={cursos[k]}>{`Curso de ${c}`}</option> 
            //   else
            //     return <option value={c} key={cursos[k]}>{`Selecionar Curso${c}`}</option> 
            // })

            // OU :

            // fcursos()

            // OU : 

            ccursos

          }
        </select>
      </div>
      <div> Nome digitado: {nome}</div>
      <div> Curso escolhido: {curso}</div>
      <div>
        <p>{Globais.curso}</p>
        <p>{Globais.canal}</p>
        <p>{Globais.ano}</p>
      </div>
    </div>
  )
}