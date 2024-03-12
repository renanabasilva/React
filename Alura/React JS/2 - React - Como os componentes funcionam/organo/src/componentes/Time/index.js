import Colaborador from "../Colaborador"
import "./Time.css"
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {

  const css = { 
    backgroundImage: 'url(/imagens/fundo.png)', 
    backgroundColor: hexToRgba(props.cor, 0.6)
  }

  return (

    // Pode-se utilizar o operador && (and) ou if ternário para fazer validação se deve ou não ser renderizado.
    props.colaboradores.length > 0 && <section className="time" style={css}>
      <input type="color" className="input-color"value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.id)}  />
      <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map( colaborador => {
          return(
            <Colaborador
              corDeFundo={props.cor}
              id={colaborador.id}
              key={colaborador.nome}
              favorito={colaborador.favorito}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              aoDeletar={props.aoDeletar}
              aoFavoritar={props.aoFavoritar}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Time