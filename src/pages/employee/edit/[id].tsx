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
        <Row >
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

export default EditEmployee;
