import { Inter } from "next/font/google";
import Calc_imc from "./imc_calc/calc_imc";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="flex w-full h-screen justify-start items-start">
        <Calc_imc/>
        <Link href={'menueffect/TestMenu'}>Menu Effect</Link>
      </div>
    </main>
  );
}
