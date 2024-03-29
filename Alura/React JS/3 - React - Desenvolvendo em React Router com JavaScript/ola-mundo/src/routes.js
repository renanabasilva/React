// const { default: SobreMim } = require("./paginas/Sobremim")
// const { default: Inicio } = require("./paginas/inicio")

// console.log(window.location)
// const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />
import Rodape from "componentes/rodape";
import Menu from "./componentes/menu";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/Sobremim";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
  return (
    <BrowserRouter> 
      <ScrollToTop />

      <Menu />
    
      <Routes>
        
        <Route path="/" element={<PaginaPadrao/>}>
          {/* <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim/>} /> */}
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim/>} />
        </Route>

        {/* 
          Na rota "/", a estrutura a ser renderizada é:
          <PaginaPadrao>
          <Inicio />
          </PaginaPadrao>
          
          Na rota "/sobremim", a estrutura a ser renderizada é:
          <PaginaPadrao>
          <SobreMim />
          </PaginaPadrao>
          
        */}

        <Route path="posts/:id/*" element={<Post/>} />
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>

      <Rodape />
      
    </BrowserRouter>
  );
}

export default AppRoutes;
