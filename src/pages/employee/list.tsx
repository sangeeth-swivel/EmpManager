import AddEmployeeButton from "@/component/Button/AddButton";
import Header from "@/component/Header/Header";
import { GridView } from "@/component/List";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

function ListEmployee() {
  const route = useRouter();
  const handeClick = () => {
    console.log("Add Employee ");
    route.push("/employee/add");
  };

  return (
    <>
      <Header />
      <main className="py-5">
        <Container>
          <AddEmployeeButton />
          <GridView/>
        </Container>
      </main>
    </>
  );
}

export default ListEmployee;
