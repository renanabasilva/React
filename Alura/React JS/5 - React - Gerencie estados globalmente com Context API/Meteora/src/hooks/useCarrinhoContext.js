import { useContext, useEffect } from "react"
import { CarrinhoContext } from "@/context/CarrinhoContext"

export const useCarrinhoContext = () => {

  const { carrinho, setCarrinho, quantidade, setQuantidade, valorTotal, setValorTotal } = useContext(CarrinhoContext)

  function mudarQuantidade(id, quantidade) {
    return carrinho.map((itemDoCarrinho) => {
      if (itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade
      return itemDoCarrinho;
    })
  }

  function adicionarProduto(novoProduto) {
    const temOProduto = carrinho.some((itemDoCarrinho) => (     // A função some percorre o array e caso o teste dê positivo, retorna true. Retorna false para teste negativo.
      itemDoCarrinho.id === novoProduto.id
    ));

    if (!temOProduto) {
      novoProduto.quantidade = 1;
      return setCarrinho((carrinhoAnterior) => [
        ...carrinhoAnterior,
        novoProduto,
      ]);
    }

    const carrinhoAtualizado = mudarQuantidade(novoProduto.id, 1)

    setCarrinho([...carrinhoAtualizado]);
  }

  function removerProduto(id) {
    const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id)
    const eOUltimo = produto.quantidade === 1
    if (eOUltimo) {
      return setCarrinho((carrinhoAnterior) => carrinhoAnterior.filter((itemDoCarrinho) => itemDoCarrinho.id !== id))
    }

    const carrinhoAtualizado = mudarQuantidade(id, -1)

    setCarrinho([...carrinhoAtualizado]);
  }

  function removerProdutoCarrinho(id) {
    const produto = carrinho.filter((itemDoCarrinho) => itemDoCarrinho.id !== id)
    setCarrinho(produto);
  }

  useEffect(() => {
    const { totalTemp, quantidadeTemp } = carrinho.reduce(
      (acumulador, produto) => ({
        quantidadeTemp: acumulador.quantidadeTemp + produto.quantidade,
        totalTemp: acumulador.totalTemp + produto.preco * produto.quantidade
      }),
      {
        quantidadeTemp: 0,
        totalTemp: 0,
      }
    );
    setQuantidade(quantidadeTemp);
    setValorTotal(totalTemp);
  }, [carrinho]);

  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
    valorTotal,
    quantidade,
  }
}