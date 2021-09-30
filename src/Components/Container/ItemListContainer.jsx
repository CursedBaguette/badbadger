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

    //condicional positivo
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
     //condicional positivo
     
     //condicional negativo
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
//condicional negativo
}, [morfi]);





  console.log(morfi);
    //original
  /*if (morfi) {
      getFetch.then((itm) => {
        setPizza(itm.filter((tipo) => tipo.categoria === morfi));
        setLoading(false);
      });
    } else{    
      getFetch.then((itm) => {
      setPizza(itm);
      setLoading(false);
    });}
  }, [morfi]);
 */
  
  return (
    <div className="d-flex justify-content-center">
      {loadingState ? <img src={loguito} alt="asd"/> : <ListaItems pizza={pizzaState} />}
    </div>
  );
  }

export default Pizza;



/*    const dbQuery = getFirestore()

    dbQuery.collection('items').get()
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
*/

//itemlist
/*useEffect(() => {
  const dbQuery = getFirestore();

  dbQuery
    .collection("items")
    .doc(idSelector)
    .get()

    .then((item) => {
      setProducto({ id: item.id, ...item.data() });
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
}, [idSelector]);

console.log(producto);*/

//itemdetail
//   const dbQuery = getFirestore();

//   dbQuery
//     .collection("items")
//     .where("categoria", "==", selector)
//     .get()

//     .then((item) => {
//       setProductos(
//         item.docs.map((item) => ({ id: item.id, ...item.data() }))
//       );
//     })
//     .catch((err) => console.log(err))
//     .finally(() => setLoading(false));
// }, [selector]);