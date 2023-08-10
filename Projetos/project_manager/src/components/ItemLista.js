import PropTypes from 'prop-types'

function ItemLista({marca, ano_lancamento}){
  return (
    <>
      <li>{marca} - {ano_lancamento}</li>
    </>
  )
}

ItemLista.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number,
}

ItemLista.defaultProps = {
  marca: 'Faltou a marca',
  ano_lancamento: 0,
}

export default ItemLista