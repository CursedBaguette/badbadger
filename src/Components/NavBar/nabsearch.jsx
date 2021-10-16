import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContextUse } from '../context/cartContext';
import Badge from "react-bootstrap/Badge";


function NabSearch (){
  const {cart, badge} = CartContextUse();

return (
    <>
<ReactBootStrap.Form className="d-flex">

<Link to="/cart"> 
{ cart.length === 0 ? <img src="/Productos/cart.png" className="cartero" alt="" /> 
            :
            <div className="d-flex">
            <img src="/Productos/cart3.png" className="cartero" alt="" />
            <Badge bg="dark" className="badge">
  {badge}</Badge> </div>

  }

  </Link>
</ReactBootStrap.Form>
</>
);
}

export default NabSearch