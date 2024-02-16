interface DisplayStateProps{
  valor:number,
  fvalor: any,
  // fadicionar: any,
  // fsubtrair: any,
}

export default function DisplayState(props:DisplayStateProps){

  function operacao (op:number){
    let c = props.valor
    c+= op
    props.fvalor(c)
  }

  return (
    <div className="flex flex-col p-5 rounded-md bg-zinc-300 justify-center items-center w-[300px]">
      <div className="flex bg-zinc-700 text-green-500 justify-center items-center w-[200px] mb-3">{props.valor}</div>
      <div className="flex gap-5">
        <button onClick={() => operacao(1)} className="btnPadrao">adicionar</button>
        <button onClick={() => operacao(-1)} className="btnPadrao">subtrair</button> {/*Sempre que for passar parâmetros, usa-se arrow function */}
      </div>
    </div>
  )
}