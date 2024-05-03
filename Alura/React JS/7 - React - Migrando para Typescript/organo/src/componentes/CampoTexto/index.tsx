import "./CampoTexto.css";

interface CampoTextoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor: string;
  obrigatorio: boolean;
}

const CampoTexto = (props: CampoTextoProps) => {
  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    props.aoAlterado(evento.target.value);
    // console.log(evento.target.value)
  };

  return (
    <fieldset className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        // onChange={evento => aoDigitado}    //Para verificar o tipo de elemento é a variável "evento"
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </fieldset>
  );
};

export default CampoTexto;
