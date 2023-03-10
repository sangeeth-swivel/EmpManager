import { useRouter } from "next/router";
import Header from "@/component/Header/Header";
import EmployeeForm from "@/component/Form/Form";
import { Container, Col, Row } from "react-bootstrap";

function EditEmployee() {
  const router = useRouter();
  const employeeId = router.query.id;

  return (
    <>
      <Header />
      {/* <div className="h1">EDIT EMPLOYEE FOR ID {employeeId} </div> */}
      <Container>
        <Row>
          <Col className="col-xs-6 col-md-4" />
          <Col className="col-xs-6 col-md-4">
            <EmployeeForm />
          </Col>
          <Col className="col-xs-6 col-md-4" />
        </Row>
      </Container>
    </>
  );
}

export default EditEmployee;
