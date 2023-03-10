import PRIMARYCOLOR from "@/styles/primaryColor";
import { useRouter } from "next/router";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  const route = useRouter();
  const handeClick = () => {
    console.log("Home Page");
    route.push("/employee/list");
  };

  return (
    <>
      <Navbar
        onClick={handeClick}
        expand="lg"
        style={{ backgroundColor: PRIMARYCOLOR }}
      >
        <Container>
          <Navbar.Brand className="text-white font-weight-bold">
            Employee Manager
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
