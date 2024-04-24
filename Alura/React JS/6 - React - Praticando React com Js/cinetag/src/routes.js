import Cabecalho from "components/cabecalho";
import Container from "components/container";
import Rodape from "components/rodape";
import Favoritos from "pages/favoritos";
import Inicio from "pages/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
        </Routes>
      </Container>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;