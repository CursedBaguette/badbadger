import { useState, useEffect } from "react";
import ListaItems from "../Shop/listaitems";
import { getFetch } from "../Shop/shopbd";
import loguito from "../Images/pizita.gif";
import { useParams } from "react-router-dom"

function Pizza() {
  const [pizzaState, setPizza] = useState([]);
  const [loadingState, setLoading] = useState(true);
  const { morfi } = useParams();
console.log(morfi)
  useEffect(() => {

    if (morfi) {
      getFetch.then((itm) => {
        setPizza(itm.filter((tipo) => tipo.categoria === morfi));
        setLoading(false);
      });
    } else {    
      getFetch.then((itm) => {
      setPizza(itm);
      setLoading(false);
    });}
  }, [morfi]);

  
  return (
    <div className="d-flex justify-content-center">
      {loadingState ? <img src={loguito} alt="asd"/> : <ListaItems pizza={pizzaState} />}
    </div>
  );
}

export default Pizza;
