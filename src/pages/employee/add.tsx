import EmployeeForm from "@/component/Form/Form";
import Header from "@/component/Header/Header";
import { Col, Container, Row } from "react-bootstrap";

function AddEmployee() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col class="col-xs-6 col-md-4"/>
          <Col class="col-xs-6 col-md-4">
            <EmployeeForm />
          </Col>
          <Col class="col-xs-6 col-md-4" />
        </Row>
      </Container>
    </>
  );
}

export default AddEmployee;
