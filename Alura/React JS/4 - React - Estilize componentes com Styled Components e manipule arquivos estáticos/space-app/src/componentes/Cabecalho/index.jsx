import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`

const Cabecalho = ({ aoFiltrar }) => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="logo" />
      <CampoTexto
         aoFiltrar={aoFiltrar}
      />
    </HeaderEstilizado>
  )
}

export default Cabecalho