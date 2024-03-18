import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const ListaEstilizada = styled.ul`
  width: 212px;
  margin: 0;
  padding: 0;
  list-style: none;
`

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao 
            iconeAtivo="/icones/home-ativo.png"
            iconeInativo="/icones/home-inativo.png"  
            ativo
          >
            Início
          </ItemNavegacao>
          <ItemNavegacao 
            iconeAtivo="/icones/mais-vistas-ativo.png"
            iconeInativo="/icones/mais-vistas-inativo.png"  
            // ativo
          >
            Mais vistas
          </ItemNavegacao>
          <ItemNavegacao 
            iconeAtivo="/icones/mais-vistas-ativo.png"
            iconeInativo="/icones/mais-vistas-inativo.png"  
            // ativo
          >
            Mais curtidas
          </ItemNavegacao>
          <ItemNavegacao 
            iconeAtivo="/icones/mais-vistas-ativo.png"
            iconeInativo="/icones/mais-vistas-inativo.png"  
            // ativo
          >
            Novas
          </ItemNavegacao>
          <ItemNavegacao 
            iconeAtivo="/icones/mais-vistas-ativo.png"
            iconeInativo="/icones/mais-vistas-inativo.png"  
            // ativo
          >
            Surpreenda-me
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  )
}

export default BarraLateral