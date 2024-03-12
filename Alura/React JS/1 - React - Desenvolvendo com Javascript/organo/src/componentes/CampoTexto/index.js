import './CampoTexto.css'

const CampoTexto = (props) => {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
    // console.log(evento.target.value)
  }

  return (
    <fieldset className="campo-texto"> 
      <label >{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
    </fieldset>
  )
}

export default CampoTexto