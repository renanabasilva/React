import "./Colaborador.css"
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborador = ({ id, nome, cargo, imagem, corDeFundo, favorito, aoDeletar, aoFavoritar }) => {
  // const favoritar = () => {
  //   aoFavoritar(id)
  // }

  const propsFavorito = {
    size: 25,
    // onClick: favoritar      // É possível utilizar uma arrow function ou uma função normal, sem chama-lá
    onClick: () => aoFavoritar(id)
  }

  return (
    <div className="colaborador">
      <AiFillCloseCircle 
        size={25} 
        className="deletar" 
        onClick={() => aoDeletar(id)} 
      />      
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="favoritar">
          {favorito 
            ? <AiFillHeart {...propsFavorito} color="#ff0000" />        //As propriedades do elemento foram passadas como um objeto espalhado
            : <AiOutlineHeart {...propsFavorito} />}
        </div>
      </div>
    </div>
  )
}

export default Colaborador