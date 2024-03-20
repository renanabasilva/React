import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares.index"
import Tags from "./Tags"

const GaleriaContainer = styled.div`
  display: flex;
`

const SecaoFluida = styled.section`
  flex-grow: 1;
`

const Galeria = ({ fotos = [] }) => {
  return(
    <>
      <Tags />
      <GaleriaContainer>
          <SecaoFluida>
            <Titulo>Navegue pela galeria</Titulo>
            <ul>
            {fotos.map( foto => foto.titulo)}
            </ul>
          </SecaoFluida>
          <Populares/>
      </GaleriaContainer>
    </>
  )
}

export default Galeria