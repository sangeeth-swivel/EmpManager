import PRIMARYCOLOR from "@/styles/PrimaryColor";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: PRIMARYCOLOR }}>
        <Container>
          <Navbar.Brand className="text-white">
          <h3>Employee Manager</h3>            
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
