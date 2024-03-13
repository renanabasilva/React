import { Outlet } from "react-router-dom";
import Banner from "componentes/Banner";

// const { Outlet } = require("react-router-dom");

export default function PaginaPadrao({ children }) {
  return (
    <main>
      <Banner />

      <Outlet />
      {children}
    </main>
  )
}