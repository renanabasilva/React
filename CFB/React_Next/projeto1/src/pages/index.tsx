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

function calcDescPerc(v:number, d?:number){
  return d? v - (v*d) : v
}

function calcDescDir(v:number, d?:number){
  return d? v - d : v
}

export default function Home() {
  return (
    <main>
      {/* {Topo()} */}
      <Topo />
      <div style={testecss}>
        <div>Curso de React Next</div>
        <div style={{ color: "#f00", backgroundColor: "#bbb" }}>React</div>
      </div>
      <div className="flex justify-center gap-3">
        <Card produto={"Mouse"} valor={49.90} desconto={0.2} funcao={calcDescPerc}></Card>
        <Card produto={"Teclado"} valor={69.90} desconto={0.15} funcao={calcDescPerc}/>
        <Card produto={"Monitor"} valor={459.90} desconto={50} funcao={calcDescDir}></Card>
        <Card produto={"CPU"} valor={799.90} desconto={0} funcao={calcDescDir}/>
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
