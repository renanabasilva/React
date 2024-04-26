import { useEffect, useState } from "react";
import styles from "./Inicio.module.css";
import Banner from "components/banner";
import Card from "components/card";
import Titulo from "components/titulo";
import { useVideosContext } from "contextos/video";

function Inicio() {
  // const [videos, setVideos] = useState([]);
  // useEffect(() => {
  //   fetch("https://my-json-server.typicode.com/renanabasilva/cinetag-api/videos")
  //     .then(resposta => resposta.json())
  //     .then(dados => {
  //       setVideos(dados)
  //     })
  // }, [])

  const { videos } = useVideosContext();

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>
    </>
  )
}

export default Inicio;
