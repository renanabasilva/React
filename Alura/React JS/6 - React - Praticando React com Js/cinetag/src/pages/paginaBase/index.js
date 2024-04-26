import { Outlet } from "react-router-dom";
import FavoritosProvider from "contextos/favoritos";
import Container from "components/container";
import Cabecalho from "components/cabecalho";
import Rodape from "components/rodape";

function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  )
}

export default PaginaBase;