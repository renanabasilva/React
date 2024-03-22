import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares.index"
import Tags from "./Tags"
import Imagem from "./Imagem"

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
            {fotos.map( 
              foto => <Imagem
                key={foto.id}
                // foto={foto}
                titulo={foto.titulo}  
                fonte={foto.fonte}  
                path={foto.path}  
                id={foto.id}  
                tagId={foto.tagId}  
              />
            )}
          </SecaoFluida>
          <Populares/>
      </GaleriaContainer>
    </>
  )
}

export default Galeria