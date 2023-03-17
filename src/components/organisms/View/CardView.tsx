import { Container, Row } from "react-bootstrap";
import CardEmployee from "../../molecules/Card/Card";

const CardView = () => {
    return (
      <>
      <Container>
        <Row>
            <CardEmployee _id={""} firstName={""} lastName={""} email={""} gender={""} phone={""} children={undefined}/>
        </Row>
      </Container>
      </>
    );
  };
  
  export default CardView;