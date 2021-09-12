import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import Pizza from "./Components/Container/ItemListContainer";
import Carrito from "./Components/Container/cartcontainer";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Pizza} />
          <Route exact path="/cat/:morfi" component={Pizza} />
          <Route exact path="/cart" component={Carrito} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
