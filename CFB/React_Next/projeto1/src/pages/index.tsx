//import Image from "next/image";
//import { Inter } from "next/font/google";
import Topo from "@/components/Topo";
import Card from "@/components/Card";

// const inter = Inter({ subsets: ["latin"] });

// function retnome(){
//   return nome
// }
// const cnl = () => {
//   return canal
// }

const nome = "Renan Aba";
let canal = "Renaba";

export default function Home() {
  return (
    <main>
      {/* {Topo()} */}
      <Topo />
      <div style={testecss}>
        <div>Curso de React Next</div>
        <div style={{ color: "#f00", backgroundColor: "#bbb" }}>React</div>
      </div>
    </main>
  );
}

const testecss = {
  display: "flex",
  justifyContent: "center",
  alignItens: "center",
  color: "#00f",
  backgroundColor: "#eee",
  fontSize: "20px",
};
