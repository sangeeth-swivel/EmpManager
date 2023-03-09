import EmployeeForm from "@/component/Form/Form";
import Header from "@/component/Header/Header";
import { Col, Container, Row } from "react-bootstrap";

function AddEmployee() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <EmployeeForm />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default AddEmployee;
