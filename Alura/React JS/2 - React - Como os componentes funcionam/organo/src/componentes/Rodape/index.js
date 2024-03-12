import "./Rodape.css"

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src="/imagens/fb.png" alt="Facebook" /></a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer"><img src="/imagens/tw.png" alt="Twitter" /></a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src="/imagens/ig.png" alt="Instagram" /></a></li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="Logo" />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  )
}

export default Rodape