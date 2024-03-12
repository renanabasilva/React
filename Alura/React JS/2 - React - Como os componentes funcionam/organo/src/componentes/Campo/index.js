import './Campo.css'

const Campo = (props) => {
// const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {

  // let {type = "text"} = props

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
    // console.log(evento.target.value)
  }

  return (
    <fieldset className={`campo campo-${props.type || 'text'}`}> 
      <label >{props.label}</label>
      <input 
        // type={type} 
        type={props.type || 'text'}
        value={props.valor} 
        onChange={aoDigitado} 
        required={props.obrigatorio} 
        placeholder={props.placeholder} 
      />
    </fieldset>
  )
}

export default Campo