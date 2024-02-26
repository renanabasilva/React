import { useEffect, useState } from "react";

export default function MenuEffect() {
  const [value, setValue] = useState('initial value');
  const [checked, setChecked] = useState(false);

  useEffect(()=>{
    return()=>{
      console.log('teste')
    }
  },[]);

  return(
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
    </div>
  )
}