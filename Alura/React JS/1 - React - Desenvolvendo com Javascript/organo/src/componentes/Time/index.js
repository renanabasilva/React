import Colaborador from "../Colaborador"
import "./Time.css"

const Time = (props) => {

  const css = { backgroundColor: props.corSecundaria }

  return (

    // Pode-se utilizar o operador && (and) ou if ternário para fazer validação se deve ou não ser renderizado.
    props.colaboradores.length > 0 && <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map( colaborador => <Colaborador
          corDeFundo={props.corPrimaria}
          key={colaborador.nome}
          nome={colaborador.nome}
          cargo={colaborador.cargo}
          imagem={colaborador.imagem}
        />)}
      </div>
    </section>
  )
}

export default Time