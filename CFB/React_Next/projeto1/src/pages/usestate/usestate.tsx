import { useState } from "react";
import DisplayState from "@/components/DisplayState";

// const usestate = () => {

export default function usestate() {
  const [cont, setCont] = useState<number>(10);

  return (
    <div>
      useState
      <DisplayState valor={cont} fvalor={setCont}></DisplayState>
    </div>
  );
}

// export default usestate