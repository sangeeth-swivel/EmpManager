import NavButton from "@/components/atoms/Button/TextButton/NavButton";
import SwitchButton from "@/components/atoms/Button/IconButton/SwitchButton";
import router from "next/router";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoReorderThree } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import CardView from "@/components/organisms/View/CardView";
import ListView from "@/components/organisms/View/ListView";
import { IListLayoutInterface } from "./ListInterface";

function ListLayout({ employees }: IListLayoutInterface) {
  const [gridView, setGridView] = useState(true);
  return (
    <>
      <Container className="py-2">
        <Row className="py-2">
          <Col />
          <Col xs="auto" className="ml-auto">
            <SwitchButton
              icon={gridView ? <IoReorderThree /> : <BsFillGrid3X3GapFill />}
              onClick={() => setGridView(!gridView)}
              color={""}
            />
            <NavButton
              text="Add Employee"
              onClick={() => router.push("/employee/add")}
            />
          </Col>
        </Row>
        <Row>{gridView ? <CardView /> : <ListView />}</Row>
      </Container>
    </>
  );
}
export default ListLayout;
