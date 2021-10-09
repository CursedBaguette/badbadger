import { useState, useEffect } from "react";
import ListaItems from "../Shop/listaitems";
//import { getFetch } from "../Shop/shopbd";
import loguito from "../Images/pizita.gif";
import { useParams } from "react-router-dom"
import { getFirestore } from "../../services/getFirebase";

function Pizza() {
  const [pizzaState, setPizza] = useState([]);
  const [loadingState, setLoading] = useState(true);
  const { morfi } = useParams();


  useEffect(() => {

    const dbQuery = getFirestore();


    if (morfi !== undefined) { 
  dbQuery
     .collection("items")
     .where("categoria", "==", morfi)
     .get()
     .then((item) => {
       setPizza(
         item.docs.map((item) => ({ id: item.id, ...item.data() }))
       );
     })
    .catch((err) => console.log(err))
     .finally(() => setLoading(false));
 
  }else{
  dbQuery
     .collection("items")
     .get()
     .then((item) => {
       setPizza(
         item.docs.map((item) => ({ id: item.id, ...item.data() }))
       );
     })
    .catch((err) => console.log(err))
     .finally(() => setLoading(false));
}

}, [morfi]);


  
  return (
    <div className="d-flex justify-content-center">
      {loadingState ? <img src={loguito} alt="asd"/> : <ListaItems pizza={pizzaState} />}
    </div>
  );
  }

export default Pizza;



