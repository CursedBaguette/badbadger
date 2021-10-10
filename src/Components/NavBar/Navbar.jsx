import { Navbar, Container, Nav, NavDropdown }  from 'react-bootstrap';
import IconNav from './navicon';
import NabSearch from './nabsearch';
import { Link } from 'react-router-dom';


function NavBar() {
return (
<>
  <Navbar bg="dark" variant="dark">
    <Container >

    <Nav className="me-auto">
    <Nav.Link as={Link} to="/" className="links">Home</Nav.Link>
    <NavDropdown title="Morfi" id="collasible-nav-dropdown">
              
                <NavDropdown.Item as={Link} to="/cat/Pizza" className="links"  >
                  Pizza
                </NavDropdown.Item>
             
              
                <NavDropdown.Item as={Link} to="/cat/Empanada" className="links">
                  Empanadas
                </NavDropdown.Item>
              
         
                <NavDropdown.Item as={Link} to="/cat/Sushi" className="links">
                      Sushis
              </NavDropdown.Item>
              
            
                <NavDropdown.Item as={Link} to="/cat/Postre" className="links">
                      Postres
              </NavDropdown.Item>
             
            </NavDropdown>
    <Nav.Link as={Link} to="/" className="links">Contacto</Nav.Link>
    </Nav>

        <NabSearch />



    </Container>
    <Navbar.Brand href="#home"><IconNav />BadBadger<IconNav /></Navbar.Brand>
  </Navbar>
 
</>
);
}

export default NavBar;