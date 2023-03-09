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
      <Navbar onClick={handeClick} bg="primary" expand="lg">
        <Container>
          <Navbar.Brand >Employee Manager</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
