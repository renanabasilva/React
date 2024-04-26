import { useParams } from "react-router-dom";
import styles from "./Player.module.css";
// import videos from "json/db.json";
import Banner from "components/banner";
import Titulo from "components/titulo";
import NaoEncontrada from "pages/naoEncontrada";
import { useEffect, useState } from "react";
import { useVideosContext } from "contextos/video";

function Player() {
  // const [video, setVideo] = useState({});
  const {id} = useParams();
  // const {id: parametros} = useParams();
  // const video = videos.find((video) => {
  //   return video.id === Number(parametros.id);
  // })

  // useEffect(() => {
  //   fetch(`https://my-json-server.typicode.com/renanabasilva/cinetag-api/videos?id=${parametros.id}`)
  //     .then(resposta => resposta.json())
  //     .then(dados => {
  //       setVideo(...dados)
  //     })
  // }, [parametros])

  const { video, getVideo } = useVideosContext();

  useEffect(() => {
    getVideo(id);
  }, [getVideo, id]);
  
  // if (Object.keys(video).length === 0)
  //   return <NaoEncontrada />
  if (video === "404")
    return <NaoEncontrada />

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>{video.titulo}</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        >
        </iframe>
      </section>
    </>
  )
}

export default Player;
