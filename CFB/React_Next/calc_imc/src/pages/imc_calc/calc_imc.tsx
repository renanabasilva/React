import { useState } from "react";
import Campform from "@/components/Campform";
import Tabelaimc from "@/components/Tabelaimc";

const Calc_imc = () => {
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [imc, setImc] = useState<number>(0);

  function calcular(){
    let res = peso/(altura * altura)
    setImc(res)
  }

  return (
    <div className="flex flex-col border border-black w-[300px] gap-5">
      <p className="w-full text-center bg-zinc-400 font-bold text-lg">Cálculo IMC</p>
      <Campform label="peso" state={peso} funcState={setPeso}/>
      <Campform label="altura" state={altura} funcState={setAltura}/>
      <button className="bg-indigo-900 text-white mx-2 p-1 rounded-md cursor-pointer" onClick={calcular}>Calcular</button>
      <p className="bg-zinc-100 p-1">Resultado: {imc}</p>
      <Tabelaimc/>
    </div>
  );
};

export default Calc_imc;
