import Banner from "components/banner";
import Cabecalho from "components/cabecalho";
import Rodape from "components/rodape";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Rodape />
    </>
  )
}

export default Inicio;