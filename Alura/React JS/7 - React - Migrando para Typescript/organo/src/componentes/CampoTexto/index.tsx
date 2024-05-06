import "./CampoTexto.css";

interface CampoTextoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor: string;
  obrigatorio: boolean;
}

const CampoTexto = ({ aoAlterado, placeholder, label, valor, obrigatorio }: CampoTextoProps) => {
  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
    // console.log(evento.target.value)
  };

  return (
    <fieldset className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        // onChange={evento => aoDigitado}    //Para verificar o tipo de elemento é a variável "evento"
        required={obrigatorio}
        placeholder={placeholder}
      />
    </fieldset>
  );
};

export default CampoTexto;
