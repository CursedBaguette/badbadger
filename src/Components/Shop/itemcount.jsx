import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({ initial, onAdd, test123, removeItem }) => {


  const [count, setCount] = useState(initial);

  function sumar() {
    if (count < 12) {
      setCount(count + 1);
    } else {
      alert("cantidad maxima de productos");
    }
  }

  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  

  /** Funcion que debe editarse para exportar la cantidad al carrrito **/
  function precioTotal(contar) {
    //alert(`${contar * test123.precio} Pesos`);
  }
  /** Funcion que debe editarse para exportar la cantidad al carrrito **/
  const agregarCarrito = () => {
    precioTotal(count);
    onAdd(count);
  };
  

const quitar = () =>{
  removeItem(count);
}

  var precioAB = count * test123.precio;



  return (
    <div>
      <button onClick={restar} className="btn btn-dark">
        -
      </button>
      <label className="titulos123 ">{count}</label>
      <button onClick={sumar} className="btn btn-dark">
        +
      </button>

     
        <button onClick={agregarCarrito} className="titulos123 btn btn-dark">
          Agregar{" "}
        </button>
      
        <button onClick={quitar} className="titulos123 btn btn-dark">
          Remover{" "}
        </button>

      <div className="precio1"> $ {precioAB} Pesos</div>
      <div><Link to="/cart/"><button className="titulos123 btn btn-dark">Ir al carrito</button></Link></div>
    </div>
  );
};

export default ItemCount;
