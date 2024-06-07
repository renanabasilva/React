import style from '../Lista.module.scss';

function Item({tarefa, tempo}: {tarefa: string, tempo: string}){
// function Item(props: {tarefa: string, tempo: string}){
  // const {tarefa, tempo} = props
  return(
    <li className={style.item}>
    <h3>
      {tarefa}
    </h3>
    <span>
      {tempo}
    </span>
  </li>
  )
}

export default Item