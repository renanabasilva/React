import Topo from "@/components/Topo";
import Card from "@/components/Card";
import { useRouter } from "next/router";

const produtos = [
  {
    id: 101,
    produto: "Mouse",
    valor: 49.9,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 102,
    produto: "Teclado",
    valor: 69.9,
    desconto: 10,
    disponivel: true,
  },
  {
    id: 103,
    produto: "Monitor",
    valor: 459.9,
    desconto: 0,
    disponivel: false,
  },
  {
    id: 104,
    produto: "CPU",
    valor: 799.9,
    desconto: 100,
    disponivel: true,
  },
  {
    id: 105,
    produto: "Caixa de Som",
    valor: 49.9,
    desconto: 0,
    disponivel: false,
  },
  {
    id: 106,
    produto: "Microfone",
    valor: 65.0,
    desconto: 0,
    disponivel: true,
  },
];

function calcDescPerc(v: number, d?: number) {
  return d ? v - v * d : v;
}

function calcDescDir(v: number, d?: number) {
  return d ? v - d : v;
}

export default function produtosPagina() {
  const router = useRouter();
  // const parametros = router.query;
  // const nome = parametros.nome;
  // const curso = router.query.curso;
  const {nome, curso} = router.query
  // console.log(parametros);
  console.log(nome);
  console.log(curso);
  return (
    <div>
      <Topo></Topo>
      <div className="flex justify-center gap-3">
        {/* <Card produto={"Mouse"} valor={49.90} desconto={0.2} funcao={calcDescPerc}></Card>
      <Card produto={"Teclado"} valor={69.90} desconto={0.15} funcao={calcDescPerc}/>
      <Card produto={"Monitor"} valor={459.90} desconto={50} funcao={calcDescDir}></Card>
      <Card produto={"CPU"} valor={799.90} desconto={0} funcao={calcDescDir}/> */}
        {produtos.map((e: any) => {
          if (e.disponivel) {
            return (
              <Card
                key={e.id}
                produto={e.produto}
                valor={e.valor}
                desconto={e.desconto}
                funcao={calcDescDir}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
