// O Princípio da Inversão de Dependência (Dependency Inversion Principle) ele diz que as entidades de alto nível não devem depender de entidades de baixo nível; ambos devem depender de abstrações. Isso se traduz em um design mais flexível e um código mais sustentável, com menos efeitos colaterais indesejáveis quando uma mudança é introduzida.

import { useEffect, useState } from "react";

function useCharacter(id) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);

  return data;
}

export default function Character() {
  const data = useCharacter(1);

  return <div>{data && data.name}</div>;
}
