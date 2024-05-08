import React, { ReactElement } from "react"
// import { ReactElement } from "react"
import "./Botao.css"

interface BotaoProps {
  children: ReactElement | string 
  texto?: string;
}

const Botao = (props: BotaoProps) => {
  return (
    <button className="botao">{props.children}</button>
  )
}

export default Botao