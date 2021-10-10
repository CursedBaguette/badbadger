import React from 'react'
import { useState } from 'react';
import {  getFirestore } from '../../services/getFirebase';
import { CartContextUse } from '../context/cartContext'
import firebase from "firebase";
import "firebase/firestore";

export default function Cartformu() {



  const {cart, cartTotal, cartAmount} = CartContextUse();

    




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
      .then((resp) => alert(resp.id));
  };
  const handleOnChange = (change) => {
    setFormData({
      ...formData,
      [change.target.name]: change.target.value,
    });
  };

  var validacionForm;

  if(formData.email === "" || formData.Telefono === "" || formData.Direccion === "" || formData.Pago === "" ) {
    validacionForm = true;
  } else {
    validacionForm = false;
  }

  /*function alerta1(){
    alert("Por favor complete todos los datos")
  
  }*/

  
    return (
        <div  className="formcenter formulario12">
            <form onChange={handleOnChange}>
  <div className="form-row ">
    <div className="form-group col-md-6">
      <label htmlFor="email">Email</label>
      <input type="email" value={formData.email} name="email" className="form-control inputForm1" id="inputEmail4" placeholder="Email" required="required" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPhone4">Teléfono</label>
      <input type="number" value={formData.Telefono} name="Telefono" className="form-control inputForm1" id="inputPhone4" placeholder="Teléfono" required="required" />
    </div>
  </div>
  <div class="form-group">
    <label htmlFor="inputAddress">Dirección</label>
    <input type="text" value={formData.Direccion} name="Direccion" className="form-control inputForm1" id="inputAddress" placeholder="Calle Falsa 123" required="required" />
  </div>
  <div class="form-group">
    <label htmlFor="inputAddress">Tarjeta de  Crédito</label>
    <input type="number" value={formData.Pago} name="Pago" className="form-control inputForm1" id="inputAddress" placeholder="123 456 789" required="required" />
  </div>


</form>



{validacionForm ? <></> :
<button type="submit" className="btn btn-dark btn-dark2" onClick={handleOnSubmit}>Comprar</button> 


}

        </div>
    )
}
