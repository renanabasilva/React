import Banner from "components/banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/titulo";
import Card from "components/card";
import { useFavoritoContext } from "contextos/favoritos";

function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />
        })}
      </section>
    </>
  )
}

export default Favoritos;