import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

`

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
`

const ModalZoom = ({ foto }) => {
  return (
    <>
      {foto && <>
        <Overlay />
        <DialogEstilizado open={!!foto}>
          <Imagem
            foto={foto}
            expandida={true}
            titulo={foto.titulo}
            fonte={foto.fonte}
            path={foto.path}
            id={foto.id}
            tagId={foto.tagId}
          />
          <form method="dialog">
            <button type="submit">ok</button>
          </form>
        </DialogEstilizado>
      </>}
    </>
  );
};

export default ModalZoom;
