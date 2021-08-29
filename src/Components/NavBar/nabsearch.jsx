//import cart from '../Images/cart.png';
import * as ReactBootStrap from 'react-bootstrap';


function NabSearch (){
return (
    <>
<ReactBootStrap.Form className="d-flex">
<ReactBootStrap.FormControl
  type="search"
  placeholder="Search"
  className="mr-2"
  aria-label="Search"
/>
<ReactBootStrap.Button className="button1"></ReactBootStrap.Button>
</ReactBootStrap.Form>
</>
);
}

export default NabSearch