import ActionButton from "@/components/atoms/Button/IconButton/ActionButton";
import { IEmployee } from "@/interfaces";
import { Card, Col, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setDeleteUserWithBtn } from "../../Shared/setDeleteUser";
import { IACard } from "./CardViewInterface";

function CardView({ employees, onClickDelete , onClickEdit}: IACard) {
  const dispatch: any = useDispatch();

  const onClickDeleteBtn = (employee: IEmployee) => {
    setDeleteUserWithBtn(employee, dispatch);
    onClickDelete();
  };

  return (
    <>
      <Col className="py-2 px-2">
        {employees.map((employee) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img src={employee.photo} />
            <Card.Body>
              <Card.Text>
                <h5>{employee.firstName}</h5>
              </Card.Text>
              <Card.Text>
                <h6>{employee.email}</h6>
              </Card.Text>
              <Card.Text>
                <h6>{employee.phone}</h6>
              </Card.Text>
              <Card.Text>
                <h6>
                  {employee.gender == "M" ? <h6>Male</h6> : <h6>Female</h6>}
                </h6>
              </Card.Text>
              <Row>
                <Col/>
                <Col md={{ span: 6, offset: 2 }}>
                  <ActionButton
                    onClick={onClickEdit}
                    icon={<FaUserEdit />}
                    color={"outline-success"}
                  />
                  <ActionButton
                    icon={<AiFillDelete />}
                    color={"outline-danger"}
                    onClick={() => onClickDeleteBtn(employee)}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </>
  );
}

export default CardView;
