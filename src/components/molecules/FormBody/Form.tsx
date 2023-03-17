import PRIMARYCOLOR from "@/styles/PrimaryColor";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const FormEmployee = () => {
  return (
    <>
      <Container className="py-1">
        <Form className="px-3 py-3 border rounded mb-3">
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              id="firstname"
              type="text"
              placeholder="Enter First Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="empEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="empPhone">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>
          <Row>
            <Col />
            <Col xs="auto" className="ml-auto">
              <Button
                style={{ backgroundColor: PRIMARYCOLOR }}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default FormEmployee;
