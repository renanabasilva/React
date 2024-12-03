import React from "react";
import style from "./Botao.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  onClick?: () => void;
}

function Botao({ onClick, type, children }: Props) {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {/* {this.props.texto} */}
      {children}
    </button>
  );
}

// class Botao extends React.Component<{ texto: string }> {
// class Botao1 extends React.Component<{
//   type?: "button" | "submit" | "reset" | undefined;
//   children?: React.ReactNode;
//   onClick?: () => void;
// }> {
//   render() {
//     const { type = "button", onClick } = this.props;
//     return (
//       <button type={type} className={style.botao} onClick={onClick}>
//         {/* {this.props.texto} */}
//         {this.props.children}
//       </button>
//     );
//   }
// }

export default Botao;
