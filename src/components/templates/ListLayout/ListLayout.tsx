import NavButton from "@/components/atoms/Button/TextButton/NavButton";
import SwitchButton from "@/components/atoms/Button/IconButton/SwitchButton";
import { useRouter } from "next/router";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoReorderThree } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IListLayoutInterface } from "./ListInterface";
import ViewList from "@/components/molecules/View/ViewList";

function ListLayout({ data }: IListLayoutInterface) {
  const router = useRouter();
  const [gridView, setGridView] = useState(true);

  return (
    <div className="py-2">
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
      <ViewList data={data} gridView={gridView} />
    </div>
  );
}
export default ListLayout;
