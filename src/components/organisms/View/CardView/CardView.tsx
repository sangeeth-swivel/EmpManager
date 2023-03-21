import { IListLayoutInterface } from "@/components/templates/ListLayout/ListInterface";
import { IEmployee } from "@/interfaces";
import { useRouter } from "next/router";
import { Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CardEmployee from "../../../molecules/Card/Card";
import { setDeleteUserWithBtn } from "../../Shared/setDeleteUser";
import { IACard } from "./CardViewInterface";

// function CardView(props:IEmployee[])  {
function CardView({ employees, onClickDelete }: IACard) {
  const router = useRouter();
  const dispatch: any = useDispatch();

  const onClickDeleteBtn = (employee: IEmployee) => {
    setDeleteUserWithBtn(employee, dispatch);
    onClickDelete(); // this is the function that triggers the modal to open
  };

  return (
    <>
      <Container>
        <Row>
          {/* <CardEmployee _id={""} firstName={""} lastName={""} email={""} gender={""} phone={""} children={undefined} /> */}
        </Row>
      </Container>
    </>
  );
}

export default CardView;
