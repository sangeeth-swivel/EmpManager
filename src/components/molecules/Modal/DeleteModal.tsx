import { Button } from "react-bootstrap";
import { IDeleteModal } from "./DeleteModalInterface";
import ModalAlert from "../../atoms/ModalAlert/ModalAlert";

const DeleteModal = ({
  employee,
  isOpen,
  onClickClose,
  onClickDelete,
}: IDeleteModal) => {
  return (
    <ModalAlert
      isOpen={isOpen}
      mainTitle="Delete Employee"
      text={`Are you sure you want to delete employee ${employee?.firstName}?`}
    >
      <>
        <Button onClick={onClickDelete} variant="danger">
          Delete
        </Button>
        <Button onClick={onClickClose} variant="secondary">
          Close
        </Button>
      </>
    </ModalAlert>
  );
};

export { DeleteModal };
