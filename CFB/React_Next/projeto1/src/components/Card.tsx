interface CardProps{
  produto: string,
  valor: number,
  desconto?: number,
  funcao: any,
}

export default function Card(props:CardProps) {
  return (
    <div className={`flex flex-col ${props.desconto? 'border-4 border-red-700' : 'border-2 border-blue-700'} rounded-xl p-1`}>
      <div>Produto: {props.produto}</div>
      <div>Valor original: R${props.valor}</div>
      {props.desconto? (props.desconto < 1? <div>Desconto: {props.desconto * 100}% - R${(props.valor * props.desconto).toFixed(2)}</div> : <div>Desconto: R$ {props.desconto}</div>) : null}
      {/* {props.desconto? <div>Valor c/ desconto: R${(props.valor - (props.valor * props.desconto)).toFixed(2)}</div> : <div/>} */}
      <div>{props.desconto? `Valor c/ desconto: R$ ${(props.funcao(props.valor, props.desconto).toFixed(2))}`: <div/>}</div>
      {!!props.desconto && (<div> Desconto incluso</div>) /* RENDERIZAÇÃO CONDICIONAL && // NEGAÇÃO DUPLA PARA TORNAR O TESTE LÓGICO BOOLEANO*/}    
    </div>
  )
}