import { Modal } from "react-bootstrap";
import { IAlertModal } from "./ModalAlertInterface";

const ModalAlert = ({ isOpen, mainTitle, text, children }: IAlertModal) => {

  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
          <Modal show={isOpen}>
            <Modal.Header closeButton>
              <Modal.Title>{mainTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{text}</Modal.Body>
            <Modal.Footer>{children}</Modal.Footer>
          </Modal>
      </div>
    </>
  );
};

export default ModalAlert;
