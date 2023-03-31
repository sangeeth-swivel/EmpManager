import router, { useRouter } from "next/router";
import { Card, Col, Container, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { ICard } from "./CardInterface";
import ActionButton from "@/components/atoms/Button/IconButton/ActionButton";
import { IACard } from "@/components/organisms/View/CardView/CardViewInterface";
import { useDispatch } from "react-redux";

const CardEmployee = ({ employees, onClickDelete }: IACard) => {
  const router = useRouter();
  const dispatch: any = useDispatch();

  return (
    <>
      {employees.map((employee) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            // variant="top"
            src={employee.photo}
          />
          <Card.Body>
            <Card.Text>{employee.firstName}</Card.Text>
            <Card.Text>{employee.email}</Card.Text>
            <Card.Text>{employee.phone}</Card.Text>
            <Card.Text>{employee.gender}</Card.Text>
            <Row>
              <Col xs={12} md={6}></Col>
              <Col xs={12} md={6}>
                <ActionButton
                  onClick={() => router.push(`/employee/edit/${employee._id}`)}
                  icon={<FaUserEdit />}
                  color={"success"}
                />
                <ActionButton
                  onClick={() => router.push("/employee/delete/:id")}
                  icon={<AiFillDelete />}
                  color={"danger"}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default CardEmployee;
