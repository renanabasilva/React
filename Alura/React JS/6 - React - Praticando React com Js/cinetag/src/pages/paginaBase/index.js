import { Outlet } from "react-router-dom";
import FavoritosProvider from "contextos/favoritos";
import Container from "components/container";
import Cabecalho from "components/cabecalho";
import Rodape from "components/rodape";
import { VideosProvider } from "contextos/video";

function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <VideosProvider>
        <FavoritosProvider>
          <Container>
            <Outlet />
          </Container>
        </FavoritosProvider>
      </VideosProvider>
      <Rodape />
    </main>
  )
}

export default PaginaBase;