import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { IPaginacao } from "../../interfaces/IPaginacao";
import IRestaurante from "../../interfaces/IRestaurante";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";

// esses são os posséveis parâmetros que podemos enviar para a API
interface IParametrosBusca {
  ordering?: string
  search?: string
}

const ListaRestaurantes = () => {

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  const [proximaPagina, setProximaPagina] = useState('')
  const [paginaAnterior, setPaginaAnterior] = useState('')

  const [busca, setBusca] = useState('')
  const [ordenacao, setOrdenacao] = useState('')

  // agora, o carregarDados recebe opcionalmente opções de configuração do axios
  const carregarDados = (url: string, opcoes: AxiosRequestConfig = {}) => {

    axios.get<IPaginacao<IRestaurante>>(url, opcoes)
      .then(resposta => {
        setRestaurantes(resposta.data.results)
        setProximaPagina(resposta.data.next)
        setPaginaAnterior(resposta.data.previous)
      })
      .catch(erro => {
        console.log(erro)
      })
  }

  // a cada busca, montamos um objeto de opções
  const buscar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const opcoes = {
      params: {

      } as IParametrosBusca
    }
    if (busca) {
      opcoes.params.search = busca
    }
    if (ordenacao) {
      opcoes.params.ordering = ordenacao
    }
    carregarDados('http://localhost:8000/api/v1/restaurantes/', opcoes)
  }

  useEffect(() => {
    // obter restaurantes
    carregarDados('http://localhost:8000/api/v1/restaurantes/')
  }, [])

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    <form onSubmit={buscar}>
      <div>
        <input type="text" value={busca} onChange={evento => setBusca(evento.target.value)} />
      </div>
      <div>
        <label htmlFor="select-ordenacao">Ordenação</label>
        <select
          name="select-ordenacao"
          id="select-ordenacao"
          value={ordenacao}
          onChange={evento => setOrdenacao(evento.target.value)}
        >
          <option value="">Padrão</option>
          <option value="id">Por ID</option>
          <option value="nome">Por Nome</option>
        </select>
      </div>
      <div>
        <button type='submit'>buscar</button>
      </div>
    </form>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
    {<button onClick={() => carregarDados(paginaAnterior)} disabled={!paginaAnterior}>
      Página Anterior
    </button>}
    {<button onClick={() => carregarDados(proximaPagina)} disabled={!proximaPagina}>
      Próxima página
    </button>}
  </section>)
}

// =========================================================================================

// // esses são os possíveis parâmetros que podemos enviar para a API
// interface IParametrosBusca {
//   ordering?: string;
//   search?: string;
// }

// const ListaRestaurantes = () => {
//   const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
//   const [proximaPagina, setProximaPagina] = useState("");
//   const [paginaAnterior, setPaginaAnterior] = useState("");

//   const [busca, setBusca] = useState("");

//   // agora, o carregarDados recebe opcionalmente as opções de configuração do axios
//   const carregarDados = (url: string, opcoes: AxiosRequestConfig = {}) => {
//     axios
//       .get<IPaginacao<IRestaurante>>(url, opcoes)
//       .then((resposta) => {
//         setRestaurantes(resposta.data.results);
//         setProximaPagina(resposta.data.next);
//         setPaginaAnterior(resposta.data.previous);
//       })
//       .catch((erro) => {
//         console.log(erro);
//       });
//   };

//   // a cada busca, montamos um objeto de opções
//   const buscar = (evento: React.FormEvent<HTMLFormElement>) => {
//     evento.preventDefault();
//     const opcoes = {
//       params: {} as IParametrosBusca,
//     };
//     if (busca) {
//       opcoes.params.search = busca;
//     }
//     carregarDados("http://localhost:8000/api/v1/restaurantes/", opcoes);
//   };

//   useEffect(() => {
//     // obter restaurantes
//     carregarDados("http://localhost:8000/api/v1/restaurantes/");
//   }, []);

//   return (
//     <section className={style.ListaRestaurantes}>
//       <h1>
//         Os restaurantes mais <em>bacanas</em>!
//       </h1>
//       <form onSubmit={buscar}>
//         <input
//           type="text"
//           value={busca}
//           onChange={(evento) => setBusca(evento.target.value)}
//         />
//         <button type="submit">buscar</button>
//       </form>
//       {restaurantes?.map((item) => (
//         <Restaurante restaurante={item} key={item.id} />
//       ))}
//       {
//         <button
//           onClick={() => carregarDados(paginaAnterior)}
//           disabled={!paginaAnterior}
//         >
//           Página Anterior
//         </button>
//       }
//       {
//         <button
//           onClick={() => carregarDados(proximaPagina)}
//           disabled={!proximaPagina}
//         >
//           Próxima página
//         </button>
//       }
//     </section>
//   );
// };

// ------------------------------------------------------------- 

// const ListaRestaurantes = () => {
//   // const restaurantes: IRestaurante[] = [
//   //   {
//   //     id: 1,
//   //     nome: "Lyllys Cafe",
//   //     pratos: [
//   //       {
//   //         id: 1,
//   //         descricao: 'Lasanha à Bolonhesa',
//   //         imagem: 'https://static.itdg.com.br/images/640-440/ec2a5e38702c60bf1ace0b5f1c8e9415/shutterstock-739787011.jpg',
//   //         nome: 'Lasanha',
//   //         restaurante: 1,
//   //         tag: 'Italiana'
//   //       },
//   //       {
//   //         id: 2,
//   //         descricao: 'Strogonoff de Frango à brasileira',
//   //         imagem: 'https://cdn0.tudoreceitas.com/pt/posts/6/8/8/strogonoff_de_frango_simples_9886_orig.jpg',
//   //         nome: 'Strogonoff',
//   //         restaurante: 1,
//   //         tag: 'Russa'
//   //       },
//   //       {
//   //         id: 3,
//   //         descricao: 'Empadão de Frango',
//   //         imagem: 'https://static.itdg.com.br/images/640-440/8542e00db2cd0f6761670765607e6255/shutterstock-2048280131-1-.jpg',
//   //         nome: 'Empadão de Frango',
//   //         restaurante: 1,
//   //         tag: 'Portuguesa'
//   //       }
//   //     ]
//   //   },
//   //   {
//   //     id: 2,
//   //     nome: "Sugiro Sushi",
//   //     pratos: [
//   //       {
//   //         id: 1,
//   //         descricao: 'Combinado de 8 peças',
//   //         imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg',
//   //         nome: 'Sushi',
//   //         restaurante: 1,
//   //         tag: 'Japonesa'
//   //       },
//   //       {
//   //         id: 2,
//   //         descricao: 'Sashimi de Salmão',
//   //         imagem: 'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2009/04/sashimi_facil.jpg',
//   //         nome: 'Sashimi',
//   //         restaurante: 1,
//   //         tag: 'Japonesa'
//   //       }
//   //     ]
//   //   },
//   //   {
//   //     id: 3,
//   //     nome: "Cantina da Escola",
//   //     pratos: [
//   //       {
//   //         id: 1,
//   //         descricao: 'Salgado de queijo com presunto',
//   //         imagem: 'https://i0.wp.com/essareceitafunciona.com.br/wp-content/uploads/2022/12/Enroladinho-de-presunto-e-queijo-Essa-Receita-Funciona-9.jpg?resize=1140%2C760&ssl=1',
//   //         nome: 'Quejunto',
//   //         restaurante: 1,
//   //         tag: 'Lanche'
//   //       },
//   //       {
//   //         id: 2,
//   //         descricao: 'Coxinha de Frango',
//   //         imagem: 'https://go.vendus.pt/foto/56615aba765a5fa8c18bdb99f49291f0.jpg',
//   //         nome: 'Coxinha',
//   //         restaurante: 1,
//   //         tag: 'Lanche'
//   //       },
//   //       {
//   //         id: 3,
//   //         descricao: 'Risole de Palmito',
//   //         imagem: 'https://togocongelados.com.br/wp-content/uploads/2022/10/119969341_2093651397445383_1060893899549623074_n-e1665673653157.jpg',
//   //         nome: 'Risole',
//   //         restaurante: 1,
//   //         tag: 'Lanche'
//   //       }
//   //     ]
//   //   }
//   // ]

//   const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
//   const [proximaPagina, setProximaPagina] = useState("");

//   useEffect(() => {
//     axios
//       .get<IPaginacao<IRestaurante>>(
//         "http://localhost:8000/api/v1/restaurantes/"
//       )
//       .then((resposta) => {
//         setRestaurantes(resposta.data.results);
//         setProximaPagina(resposta.data.next);
//       })
//       .catch((erro) => {
//         console.log(erro);
//       });
//   }, []);

//   const verMais = () => {
//     axios.get<IPaginacao<IRestaurante>>(proximaPagina)
//       .then((resposta) => {
//       setRestaurantes([...restaurantes, ...resposta.data.results]);
//       setProximaPagina(resposta.data.next);
//     })
//     .catch((erro) => {
//       console.log(erro);
//     });
//   }

//   return (
//     <section className={style.ListaRestaurantes}>
//       <h1>
//         Os restaurantes mais <em>bacanas</em>!
//       </h1>
//       {restaurantes?.map((item) => (
//         <Restaurante restaurante={item} key={item.id} />
//       ))}
//       {proximaPagina && <button onClick={verMais}> Ver mais</button>}
//     </section>
//   );
// };

export default ListaRestaurantes;
