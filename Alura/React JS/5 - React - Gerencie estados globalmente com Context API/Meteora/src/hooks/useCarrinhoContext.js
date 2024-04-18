import { useContext, useEffect, useMemo } from "react"
import { CarrinhoContext } from "@/context/CarrinhoContext"
import { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_QUANTIDADE } from "@/reducers/CarrinhoReducer"

const addProdutoAction = (novoProduto) => (
  {
    type: ADD_PRODUTO,
    payload: novoProduto,
  }
)

const removeProdutoAction = (produtoId) => (
  {
    type: REMOVE_PRODUTO,
    payload: produtoId,
  }
)

const updateQuantidadeAction = (produtoId, quantidade) => (
  {
    type: UPDATE_QUANTIDADE,
    payload: { produtoId, quantidade },
  }
)

export const useCarrinhoContext = () => {

  const {
    carrinho,
    dispatch,
    // setCarrinho,
    quantidade,
    // setQuantidade,
    valorTotal,
    // setValorTotal 
  } = useContext(CarrinhoContext)

  // function mudarQuantidade(id, quantidade) {
  //   return carrinho.map((itemDoCarrinho) => {
  //     if (itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade
  //     return itemDoCarrinho;
  //   })
  // }

  function adicionarProduto(novoProduto) {
    // A função some percorre o array e caso o teste dê positivo, retorna true. Retorna false para teste negativo.
    // const temOProduto = carrinho.some((itemDoCarrinho) => (     
    //   itemDoCarrinho.id === novoProduto.id
    // ));

    // if (!temOProduto) {
    //   novoProduto.quantidade = 1;
    //   return setCarrinho((carrinhoAnterior) => [
    //     ...carrinhoAnterior,
    //     novoProduto,
    //   ]);
    // }

    // const carrinhoAtualizado = mudarQuantidade(novoProduto.id, 1)

    // setCarrinho([...carrinhoAtualizado]);
    dispatch(addProdutoAction(novoProduto))
  }

  function removerProduto(id) {
    // const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id)
    // const eOUltimo = produto.quantidade === 1
    // if (eOUltimo) {
    //   return setCarrinho((carrinhoAnterior) => carrinhoAnterior.filter((itemDoCarrinho) => itemDoCarrinho.id !== id))
    // }

    // const carrinhoAtualizado = mudarQuantidade(id, -1)

    // setCarrinho([...carrinhoAtualizado]);
    const produto = carrinho.find((item) => item.id === id)

    if (produto && produto.quantidade > 1){
      dispatch(updateQuantidadeAction(id, produto.quantidade - 1))
    } else {
      dispatch(removeProdutoAction(id))
    }
  }

  function removerProdutoCarrinho(id) {
    // const produto = carrinho.filter((itemDoCarrinho) => itemDoCarrinho.id !== id)
    // setCarrinho(produto);
    dispatch(removeProdutoAction(id))
  }

  // const { totalTemp, quantidadeTemp } = useMemo(() => {
  //   return carrinho.reduce(
  //     (acumulador, produto) => ({
  //       quantidadeTemp: acumulador.quantidadeTemp + produto.quantidade,
  //       totalTemp: acumulador.totalTemp + produto.preco * produto.quantidade
  //     }),
  //     {
  //       quantidadeTemp: 0,
  //       totalTemp: 0,
  //     }
  //   );
  // }, [carrinho])

  // useEffect(() => {
  //   setQuantidade(quantidadeTemp);
  //   setValorTotal(totalTemp);
  // });

  return {
    carrinho,
    // setCarrinho,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
    valorTotal,
    quantidade,
  }
}