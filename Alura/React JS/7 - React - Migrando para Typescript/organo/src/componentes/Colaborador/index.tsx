import { IColaborador } from "../../shared/interfaces/IColaborador"
import "./Colaborador.css"

interface ColaboradorProps extends IColaborador{
  corDeFundo: string;
  data: string;
}

// interface ColaboradorProps {   // Neste tipo de solução, é preciso passar o "colaborador" apenas como prop no componente Time.
//   colaborador: IColaborador;
//   corDeFundo: string;
// }

// interface ColaboradorProps {
//   nome: string;
//   imagem: string;
//   cargo: string;
//   corDeFundo:string;
// }

const Colaborador = ({nome, cargo, imagem, corDeFundo, data}: ColaboradorProps) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <h5>{new Date(data).toLocaleDateString()}</h5>
      </div>
    </div>
  )
}

export default Colaborador