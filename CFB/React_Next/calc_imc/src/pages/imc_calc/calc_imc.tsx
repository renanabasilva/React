import { useState } from "react";
import Compform from "@/components/Compform";

const Calc_imc = () => {
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);

  return (
    <div>
      <p>Cálculo IMC</p>
      <Compform/>
      <Compform/>
    </div>
  );
};

export default Calc_imc;
