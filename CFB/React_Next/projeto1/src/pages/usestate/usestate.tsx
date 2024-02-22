import { useState } from "react";
import DisplayState from "@/components/DisplayState";
import Topo from "@/components/Topo"

// const usestate = () => {

export default function Usestate() {
  const [cont, setCont] = useState<number>(10);

  return (
    <div>
      <Topo/>
      useState
      <DisplayState valor={cont} fvalor={setCont}></DisplayState>
    </div>
  );
}

// export default usestate