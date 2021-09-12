import { Navbar, Container, Nav, NavDropdown }  from 'react-bootstrap';
import IconNav from './navicon';
import NabSearch from './nabsearch';
import { Link } from 'react-router-dom';


function NavBar() {
return (
<>
  <Navbar bg="dark" variant="dark">
    <Container>

    <Nav className="me-auto">
    <Nav.Link><Link to="/" className="links">Home</Link></Nav.Link>
    <NavDropdown title="Morfi" id="collasible-nav-dropdown">
              <Link to="/cat/Pizza" className="links">
                <NavDropdown.Item href="#action/3.1">
                  Pizza
                </NavDropdown.Item>
              </Link>
              <Link to="/cat/Empanada" className="links">
                <NavDropdown.Item href="#action/3.2">
                  Empanadas
                </NavDropdown.Item>
              </Link>
              <Link to="/cat/Sushi" className="links">
                <NavDropdown.Item href="#action/3.3">
                      Sushis
              </NavDropdown.Item>
              </Link>
              <Link to="/cat/Postre" className="links">
                <NavDropdown.Item href="#action/3.3">
                      Postres
              </NavDropdown.Item>
              </Link>
            </NavDropdown>
    <Nav.Link><Link to="/" className="links">Contacto</Link></Nav.Link>
    </Nav>

        <NabSearch />



    </Container>
    <Navbar.Brand href="#home"><IconNav />BadBadger<IconNav /></Navbar.Brand>
  </Navbar>
 
</>
);
}

export default NavBar;