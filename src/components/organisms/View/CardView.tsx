import { IListLayoutInterface } from "@/components/templates/ListLayout/ListInterface";
import { IEmployee } from "@/interfaces";
import { Container, Row } from "react-bootstrap";
import CardEmployee from "../../molecules/Card/Card";

// function CardView(props:IEmployee[])  {
  function CardView({ employees }: IListLayoutInterface)  {
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