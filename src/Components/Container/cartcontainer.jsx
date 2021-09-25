import React from "react";
import { CartContextUse } from '../context/cartContext'


export default function Carrito() {

  const {clearCart} = CartContextUse();
  
  
  return (
    <div class="carritou">
      <button onClick={clearCart} className="btn btn-dark">Limpiar carrito </button>
      
    </div>
  );
}
  