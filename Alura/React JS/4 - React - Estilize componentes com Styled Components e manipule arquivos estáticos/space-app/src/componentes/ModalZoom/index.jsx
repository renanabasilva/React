import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "../BotaoIcone"

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`

const DialogEstilizado = styled.dialog`
  position: fixed;
  /* top: 294px; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  /* transform: scale(0.9); */
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: fadeInScale 0.5s forwards;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
  @keyframes fadeInScale {
    to {
      opacity: 1;
      transform: translate(-50%, -50%)  scale(1);
    }
  }
`

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  return (
    <>
      {foto && <>
        <Overlay />
        <DialogEstilizado open={!!foto} onClose={aoFechar}>
          <Imagem
            foto={foto}
            expandida={true}
            titulo={foto.titulo}
            fonte={foto.fonte}
            path={foto.path}
            id={foto.id}
            tagId={foto.tagId}
            aoAlternarFavorito={aoAlternarFavorito}
          />
          <form method="dialog">
            <BotaoIcone formMethod="dialog">
              <img src="/icones/fechar.png" alt="Icone de fechar" />
            </BotaoIcone>
          </form>
        </DialogEstilizado>
      </>}
    </>
  );
};

export default ModalZoom;
