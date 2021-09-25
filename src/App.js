import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import Pizza from "./Components/Container/ItemListContainer";
import Carrito from "./Components/Container/cartcontainer";
import Itemdetailconteiner from "./Components/Container/itemdetailconteiner";
import { CartContextProvider } from "./Components/context/cartContext";



function App() {
  return (
    <>
    <CartContextProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Pizza} />
          <Route exact path="/cat/:morfi" component={Pizza} />
          <Route exact path="/cat/:morfi/:iditem" component={Itemdetailconteiner} />
          <Route exact path="/cart" component={Carrito} />
        </Switch>
      </Router>
      </CartContextProvider>
    </>
  );
}

export default App;
