import styles from "./SobreMim.module.css"
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Renan!
      </h3>

      <img
        className={styles.fotoSobreMim}
        src={fotoSobreMim}
        alt="Foto do Renan"
      />

      <p className={styles.paragrafo}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab earum atque, vitae obcaecati ullam placeat assumenda voluptate mollitia dignissimos officiis hic inventore temporibus accusantium, facilis et illo nisi? Aperiam, obcaecati?</p>
      <p className={styles.paragrafo}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab earum atque, vitae obcaecati ullam placeat assumenda voluptate mollitia dignissimos officiis hic inventore temporibus accusantium, facilis et illo nisi? Aperiam, obcaecati?</p>
      <p className={styles.paragrafo}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab earum atque, vitae obcaecati ullam placeat assumenda voluptate mollitia dignissimos officiis hic inventore temporibus accusantium, facilis et illo nisi? Aperiam, obcaecati?</p>

      <p className={styles.paragrafo}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab earum atque, vitae obcaecati ullam placeat assumenda voluptate mollitia dignissimos officiis hic inventore temporibus accusantium, facilis et illo nisi? Aperiam, obcaecati?</p>
      <p className={styles.paragrafo}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab earum atque, vitae obcaecati ullam placeat assumenda voluptate mollitia dignissimos officiis hic inventore temporibus accusantium, facilis et illo nisi? Aperiam, obcaecati?</p>
    </PostModelo>
  )
}