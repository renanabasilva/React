import { useState } from "react";
import MenuEffect from "@/pages/menueffect/menueffect";

export default function TesteMenu(){
  const [isVisible, setIsVisible] = useState(true)
  return(
    <div>
      {isVisible && <MenuEffect/>}
      <button onClick={() => setIsVisible(!isVisible)}>Clique para esconder</button>
    </div>
  )
}