import { Inter } from "next/font/google";
import Calc_imc from "./imc_calc/calc_imc";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="flex w-full h-screen justify-start items-start">
        TESTE
        <Calc_imc/>
      </div>
    </main>
  );
}
