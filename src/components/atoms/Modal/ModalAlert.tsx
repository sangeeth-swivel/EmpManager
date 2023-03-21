import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IDeleteModal } from "./ModalAlertInterface";

const ModalAlert = ({
  employee,
  isOpen,
  onClickClose,
  onClickDelete,
}: IDeleteModal) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal isOpen={isOpen} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete employee</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClickClose}>
            Close
          </Button>
          <Button variant="danger" onClick={onClickDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAlert;
