import * as ReactBootStrap from 'react-bootstrap';
import IconNav from './navicon';
import NabSearch from './nabsearch';

function NavBar() {
return (
<>
  <ReactBootStrap.Navbar bg="dark" variant="dark">
    <ReactBootStrap.Container>

    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#features">Productos</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Contacto</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
<NabSearch />



    </ReactBootStrap.Container>
    <ReactBootStrap.Navbar.Brand href="#home"><IconNav />BadBadger<IconNav /></ReactBootStrap.Navbar.Brand>
  </ReactBootStrap.Navbar>
 
</>
);
}

export default NavBar;