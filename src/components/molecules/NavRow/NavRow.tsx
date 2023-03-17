import { Col, Row } from "react-bootstrap";
import { INavRow } from "./INavRowInterface";

const NavRow = ({ data }: INavRow) => {
  return (
    <>
      <Row className="py-2">
        <Col class="col-xs-6 col-md-4" />
        <Col class="col-xs-6 col-md-4" />
        <Col xs="auto" class="col-xs-6 col-md-4">
          {data}
        </Col>
      </Row>
    </>
  );
};
export default NavRow;
