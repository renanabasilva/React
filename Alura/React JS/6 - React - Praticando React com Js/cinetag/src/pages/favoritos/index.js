import Banner from "components/banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/titulo";
import Card from "components/card";
import videos from "json/db.json";

function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card id='1' titulo='Gato bonifácio' capa='https://thecatapi.com/api/images/get?format=src&type=png' />
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>
    </>
  )
}

export default Favoritos;