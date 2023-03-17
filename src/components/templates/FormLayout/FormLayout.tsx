import NavButton from "@/components/atoms/Button/TextButton/NavButton";
import SwitchButton from "@/components/atoms/Button/IconButton/SwitchButton";
import router from "next/router";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoReorderThree } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import CardView from "@/components/organisms/View/CardView";
import ListView from "@/components/organisms/View/ListView";
import FormEmployee from "@/components/molecules/FormBody/Form";

function FormLayout() {
  return (
    <>
      <Container className="py-2">
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
            <FormEmployee />
          </Col>
          <Col class="col-xs-6 col-md-4" />
        </Row>
      </Container>
    </>
  );
}
export default FormLayout;
