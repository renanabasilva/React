import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "pages/inicio";
import Favoritos from "pages/favoritos";
import Player from "pages/player";
import NaoEncontrada from "pages/naoEncontrada";
import PaginaBase from "pages/paginaBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NaoEncontrada />} />
          <Route path="/404" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;