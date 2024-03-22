import styled from "styled-components"


const Figure = styled.figure`
  width: ${props => props.$expandida ? '90%' :'460px'};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }

  figcaption {
    background-color: #001634;
    border-radius: 0 0 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;

    h3 {
      font-family: 'GandhiSansBold';
    }

    h4 {
      flex-grow: 1;
    }

    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }

  }
  @media (min-width: 1200px) {
    /* Estilos para telas a partir de 1200px */
    /* width: 60%; */
  }
`;

const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  
`

const Imagem = ({ titulo, fonte, path, id, tagId, expandida = false }) => {
  return (
    <Figure $expandida={expandida} id={`foto-${id}`}>
      <img src={path} alt={titulo} />
      <figcaption>
        <h3>{titulo}</h3>  
        <Rodape>
          <h4>{fonte}</h4>
          <Button>Favorito</Button>
          <Button>Expandir</Button>
        </Rodape>
      </figcaption>
    </Figure>
  )
}

export default Imagem