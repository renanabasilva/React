import './Formulario.css'
import { useState } from 'react'
import { IColaborador } from '../../shared/interfaces/IColaborador'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void;
  times: string[];
}

const Formulario = (props: FormularioProps) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [data, setData] = useState('')

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
      data
    })
    // console.log('Form foi submetido', nome, cargo, imagem, time)
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
    setData('')
  }

  return (
    <section className="formulario">
      <form onSubmit={(evento) => aoSalvar(evento)}>
      {/* <form onSubmit={aoSalvar}> */}                 {/*fUNCIONA DA MESMA MANEIRA QUE EM CIMA */}
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome" 
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
          />
        <CampoTexto 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo" 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
          />
        <CampoTexto 
          // obrigatorio={true} 
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Data de entrada no time" 
          placeholder="DD/MM/AA" 
          valor={data}
          aoAlterado={valor => setData(valor)}
          tipo='date'
        />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={props.times} 
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao texto="Criar Card">
          Criar Card
          {/* <img src="/imagens/logo.png" alt=""/> */}
        </Botao>
      </form>
    </section>
  )
}

export default Formulario