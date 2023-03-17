import router from "next/router";
import { Card, Col, Container, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { ICard } from "./CardInterface";
import ActionButton from "@/components/atoms/Button/IconButton/ActionButton";

const CardEmployee = ({
  // children,
  photo,
  firstName,
  lastName,
  email,
  phone,
  gender,
}: ICard) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          // variant="top"
          src={"https://randomuser.me/api/portraits/men/36.jpg"}
        />
        <Card.Body>
          <Card.Text>name{firstName}</Card.Text>
          <Card.Text>email{email}</Card.Text>
          <Card.Text>phone{phone}</Card.Text>
          <Card.Text>gender{gender}</Card.Text>
          <Row>
            <Col xs={12} md={6}></Col>
            <Col xs={12} md={6}>
              <ActionButton
                onClick={() => router.push("/employee/edit/:id")}
                icon={<FaUserEdit/>}
                color={"success"}
              />
              <ActionButton
                onClick={() => router.push("/employee/delete/:id")}
                icon={<AiFillDelete/>}
                color={"danger"}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardEmployee;
