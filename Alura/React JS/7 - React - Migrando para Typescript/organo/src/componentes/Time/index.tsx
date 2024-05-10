import { IColaborador } from "../../shared/interfaces/IColaborador";
import Colaborador from "../Colaborador";
import "./Time.css";

interface TimeProps {
  corPrimaria: string;
  corSecundaria: string;
  nome: string;
  colaboradores: IColaborador[];    // Para indicar que é um array de objetos, coloca-se o simbolo do array no final da declaração
  // colaboradores: [{              // Modo de declaração hard-coded. Como será utilizado para outros componentes, é criado uma interface compartilhada. "shared/interfaces"
  //   nome: string;
  //   cargo: string;
  //   imagem: string;
  // }];
}

const Time = (props: TimeProps) => {
  const css = { backgroundColor: props.corSecundaria };

  return (
    // Pode-se utilizar o operador && (and) ou if ternário para fazer validação se deve ou não ser renderizado.
    props.colaboradores.length > 0 && (
      <section className="time" style={css}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              corDeFundo={props.corPrimaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              data={colaborador.data}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
