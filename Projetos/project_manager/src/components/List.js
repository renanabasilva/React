import ItemLista from './ItemLista'

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <ItemLista marca='Ferrari' ano_lancamento={1985} />
        <ItemLista marca='Fiat' ano_lancamento={1964} />
        <ItemLista marca='Renault' />
        <ItemLista marca='Chevrolet' ano_lancamento={1999} />
      </ul>
    </>
  )
}

export default List