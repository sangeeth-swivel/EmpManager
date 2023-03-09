import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

const EmployeeForm = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    // <Form className="w-full max-w-lg" onSubmit={handleSubmit((data: any) => setData(JSON.stringify(data)))}>
    //     <input {...register("firstName")} placeholder="First name" />
    //     <select {...register("category", { required: true })}>
    //         <option value="">Select...</option>
    //         <option value="A">Option A</option>
    //         <option value="B">Option B</option>
    //     </select>
    //     <textarea {...register("aboutYou")} placeholder="About you" />
    //     <p>{data}</p>
    //     <input type="submit" />
    // </Form>

    <Form onSubmit={handleSubmit((data: any) => setData(JSON.stringify(data)))}>
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EmployeeForm;
