import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#6100ed" }}>
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
