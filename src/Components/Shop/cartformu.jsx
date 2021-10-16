import { useState } from 'react';
import {  getFirestore } from '../../services/getFirebase';
import { CartContextUse } from '../context/cartContext'
import firebase from "firebase";
import "firebase/firestore";
import { Link } from 'react-router-dom';




export default function Cartformu() {


  
  const {cart, cartTotal, cartAmount, clearCart, MySwal} = CartContextUse();

    




  const [formData, setFormData] = useState({
    Telefono: "",
    email: "",
    Direccion: "",
    Pago: ""
  });
  const handleOnSubmit = () => {
    let orden = {};







    orden.buyer = formData;
    orden.total = cartTotal;
    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.cantidad = cartAmount;
    orden.items = cart.map((cartItem) => {
      const id = cartItem.itens.id;
      const title = cartItem.itens.producto;
      const price = cartItem.itens.precio;
      const cantidad = cartItem.cantidad;
      return { id, title, price, cantidad };
    });

    const db = getFirestore();
    db.collection("orders")
      .add(orden)
      .then((orden2) => MySwal.fire({
        title: <strong className="sweet123">Gracias por su compra</strong>,
        html: <i className="sweet123">Su id de compra es {orden2.id}</i>,
        background: '#2b2a33',
        icon: 'success',
        confirmButtonColor: '#1c1f23'
        
      }))
      .finally(clearCart());
      
  

  
      
  };

  const handleOnChange = (change) => {
    setFormData({
      ...formData,
      [change.target.name]: change.target.value,
    });
  };

  let validacionForm;

  if(!/\S+@\S+.\S+/.test(formData.email) || formData.Telefono === "" || formData.Direccion === "" || formData.Pago === "" ) {
    validacionForm = true;
  } else {
    validacionForm = false;
  }


  
    return (
        <div  className="formcenter formulario12">
            <form onChange={handleOnChange}>
  <div className="form-row ">
    <div className="form-group col-md-6">
      <label htmlFor="email">Email</label>
      <input type="email" defaultValue={formData.email} name="email" className="form-control inputForm1" id="inputEmail4" placeholder="Email" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPhone4">Teléfono</label>
      <input type="number" defaultValue={formData.Telefono} name="Telefono" className="form-control inputForm1" id="inputPhone4" placeholder="Teléfono" required="required" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Dirección</label>
    <input type="text" defaultValue={formData.Direccion} name="Direccion" className="form-control inputForm1" id="inputAddress" placeholder="Calle Falsa 123" required="required" />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Tarjeta de  Crédito</label>
    <input type="number" defaultValue={formData.Pago} name="Pago" className="form-control inputForm1" id="inputAddress" placeholder="123 456 789" required="required" />
  </div>


</form>



{validacionForm ? <></> :
<Link to="/"><button type="submit" className="btn btn-dark btn-dark2" onClick={handleOnSubmit}>Comprar</button></Link>
}

        </div>
    )
}
