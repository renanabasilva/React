interface DisplayStateProps{
  valor:number,
}

export default function DisplayState(props:DisplayStateProps){
  return (
    <div>{props.valor}</div>
  )
}