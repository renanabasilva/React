import styles from "./Banner.module.css"
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/minha_foto.png"

export default function Banner() {
  return(
    <div className={styles.banner}>
      <div>
        <h1 className={styles.titulo}>
          Olá, Mundo!
        </h1>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deserunt provident asperiores molestias non possimus aliquam nisi magni exercitationem itaque ipsum at ullam, nostrum corrupti, id dolore odit eaque nam.
        </p>
      </div>
      <div className={styles.imagens}>
        <img 
          className={styles.circuloColorido}
          src={circuloColorido} 
          alt="" 
          aria-hidden={true}
        />
        <img 
          className={styles.minhaFoto}
          src={minhaFoto} 
          alt="Foto do Renan Aba" 
        />
      </div>
    </div>
  )
}