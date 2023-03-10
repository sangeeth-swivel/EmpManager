import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Form } from "react-bootstrap";
import PRIMARYCOLOR from "@/styles/primaryColor";

const EmployeeForm = () => {
  const initialValuesAdd = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
  };
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <Container className="py-5">
      <Form
        className="px-3 py-3 border rounded mb-3"
        onSubmit={handleSubmit((data: any) => setData(JSON.stringify(data)))}
      >
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            {...register("firstName")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            {...register("lastName")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="empEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("empEmail")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="empPhone">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Phone"
            {...register("empPhone")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>

        <div className="right">
          <Button
            style={{ backgroundColor: PRIMARYCOLOR }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EmployeeForm;
