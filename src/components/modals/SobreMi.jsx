import { Modal, Button } from "react-bootstrap";

function SobreMi({ isOpen, closeModal }) {
  if (!isOpen) return null;
  return (
    <Modal show={isOpen} onHide={closeModal} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Sobre Mi</Modal.Title>
      </Modal.Header>
      <Modal.Body>Aqui escribire algo sobre mi xD</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={closeModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SobreMi;
