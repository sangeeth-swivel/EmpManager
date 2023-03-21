import { selectEmployee } from "@/app/store";
import NavButton from "@/components/atoms/Button/TextButton/NavButton";
import { EmployeeSchema } from "@/validation/userValidation";
import { useFormik } from "formik";
import router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { IForm } from "./FormInterface";
import { updateExistingEmployee, addEmployee } from "./Logic";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";

const FormEmployee = ({ edit, text, employee }: IForm) => {
  const dispatch = useDispatch();
  const content = useSelector(selectEmployee());

  const {
    statusUpdating,
    updateEmployeeMessage,
    statusAdding,
    addEmployeeMessage,
  } = content;

  let editForm: boolean = false;

  if (edit === true && employee != null && employee != undefined) {
    editForm = true;
  }

  const formik = useFormik({
    initialValues: {
      _id: editForm ? employee?._id : "",
      firstName: editForm ? employee?.firstName : "",
      lastName: editForm ? employee?.lastName : "",
      email: editForm ? employee?.email : "",
      phone: editForm ? employee?.phone : "",
      gender: editForm ? employee?.gender : "M",
    },
    validationSchema: EmployeeSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (edit) {
        updateExistingEmployee(values, dispatch);
      } else {
        delete values["_id"];
        const emp = {
          ...values,
          photo: "https://randomuser.me/api/portraits/men/60.jpg",
        };
        addEmployee(emp, dispatch);
      }
    },
  });
  return (
    <>
      <Container>
        <Row className="py-2">
          <Col />
          <Col xs="auto" className="ml-auto">
            <NavButton
              text="List View"
              onClick={() => router.push("/employee/list")}
            />
          </Col>
        </Row>
        <Row>
          <Col class="col-xs-6 col-md-4" />
          <Col class="col-xs-6 col-md-4">
            <Card>
              <Card.Body>
                <Form onSubmit={formik.handleSubmit}>
                  {editForm ? (
                    <Form.Group className="mb-3" controlId="empId">
                      <Form.Control
                        required
                        id="firstName"
                        name="firstName"
                        autoComplete="id"
                        value={formik.values._id}
                        onChange={formik.handleChange}
                        disabled
                      >
                        {formik.touched.firstName && formik.errors.firstName ? (
                          <div className="text-danger">
                            {formik.touched.firstName &&
                              formik.errors.firstName}
                          </div>
                        ) : null}
                      </Form.Control>
                    </Form.Group>
                  ) : (
                    <></>
                  )}

                  <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter First Name"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className="text-danger">
                        {formik.touched.firstName && formik.errors.firstName}
                      </div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Last Name"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="text-danger">
                        {formik.touched.lastName && formik.errors.lastName}
                      </div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-danger">
                        {formik.touched.email && formik.errors.email}
                      </div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Phone"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-danger">
                        {formik.touched.phone && formik.errors.phone}
                      </div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select
                      id="gender"
                      name="gender"
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Select>
                  </Form.Group>

                  <Row>
                    <Col />
                    <Col xs="auto" className="ml-auto">
                      <Button variant="outline-primary mx-2" type="submit">
                        <b>{edit ? "SAVE" : "ADD"}</b>
                      </Button>
                    </Col>
                  </Row>
                  <Row className="py-2 px-2">
                    {statusUpdating === "success" ? (
                      <Alert variant="success">{updateEmployeeMessage}</Alert>
                    ) : statusUpdating === "failed" ? (
                      <Alert variant="danger">{updateEmployeeMessage}</Alert>
                    ) : statusAdding === "success" ? (
                      <Alert variant="success">{addEmployeeMessage}</Alert>
                    ) : statusAdding === "failed" ? (
                      <Alert variant="danger">{addEmployeeMessage}</Alert>
                    ) : (
                      <></>
                    )}
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col class="col-xs-6 col-md-4" />
        </Row>
      </Container>
    </>
  );
};

export default FormEmployee;
