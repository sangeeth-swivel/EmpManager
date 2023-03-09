import AddEmployeeButton from "@/component/Button/AddButton";
import Header from "@/component/Header/Header";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import { BiUserPlus } from "react-icons/bi";
import AddEmployee from "./add";

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
        <Container className="mx-auto flex justify-between py-5 border-b">
          <AddEmployeeButton />
        </Container>
      </main>
    </>
  );
}

export default ListEmployee;
