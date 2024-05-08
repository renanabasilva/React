import "./ListaSuspensa.css";

interface ListaSuspensaProps {
  aoAlterado: (valor: string) => void;
  label: string;
  obrigatorio: boolean;
  valor: string;
  itens: string[];    // Um array de strings
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        /*defaultValue={''}*/
        required={props.obrigatorio}
        value={props.valor}
        onChange={(evento) => props.aoAlterado(evento.target.value)}
      >
        <option value="" disabled /*selected*/>
          Selecione...
        </option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
