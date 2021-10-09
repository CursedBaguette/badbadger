import { useState, useEffect } from "react";
//import { getFetch } from "../Shop/shopbd";
import loguito from "../Images/pizita.gif";
import { useParams } from "react-router-dom"
import DetallesItem from "../Shop/DetallesItem";
import { getFirestore } from "../../services/getFirebase";

export default function Itemdetailconteiner() {

  const [detalleState, setDetalle] = useState([]);
  const [loadingState, setLoading] = useState(true);
  const { iditem } = useParams();
  useEffect(() => {
    const dbQuery = getFirestore();

    dbQuery
      .collection("items")
      .doc(iditem)
      .get()
  
      .then((item) => {
        setDetalle({ id: item.id, ...item.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [iditem]);
  
  

  return (
    <div className="d-flex justify-content-center">
      {loadingState ? <img src={loguito} alt="asd"/> : <DetallesItem detalle123={detalleState} />}
      
    </div>
  );
}


