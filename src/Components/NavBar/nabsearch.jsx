//import cart from '../Images/cart.png';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NabSearch (){
return (
    <>
<ReactBootStrap.Form className="d-flex">
<ReactBootStrap.FormControl
  type="search"
  placeholder="Search"
  className="mr-2"
  aria-label="Search"
  id="inputName4"
/>
<Link to="/cart"><img src="Productos/cart.png" className="cartero" alt="carrito" /></Link>
</ReactBootStrap.Form>
</>
);
}

export default NabSearch