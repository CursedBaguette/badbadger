//import cart from '../Images/cart.png';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContextUse } from '../context/cartContext';


function NabSearch (){
  const {cart} = CartContextUse();

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
<Link to="/cart"> 
{ cart.length === 0 ? <img src="/Productos/cart.png" className="cartero" alt="" /> 
            :
  <img src="/Productos/cart3.png" className="cartero" alt="" />}
  </Link>
</ReactBootStrap.Form>
</>
);
}

export default NabSearch