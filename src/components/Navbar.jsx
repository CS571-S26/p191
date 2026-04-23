import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavbar() { {/* Utilize boostrap for formatting */}
  return ( 
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>

        <Navbar.Brand as={Link} to="/">
          LegacyM
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav" />

        <Navbar.Collapse id="nav">
          <Nav className="ms-auto">
            {/* Three relevant pages to navigate to */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/decades">
              Decades
            </Nav.Link>

            <Nav.Link as={Link} to="/favorites">
              Favorites
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}