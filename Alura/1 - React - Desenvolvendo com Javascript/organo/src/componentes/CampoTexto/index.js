import './CampoTexto.css'

const CampoTexto = (props) => {
  return (
    <fieldset className="campo-texto"> 
      <label >{props.label}</label>
      <input required={props.obrigatorio} placeholder={props.placeholder}/>
    </fieldset>
  )
}

export default CampoTexto