import React from "react";
import Cartmain from "../Shop/cartmain";
import { CartContextUse } from '../context/cartContext'
export default function Carrito() {

  const {cart} = CartContextUse();
  var condit;
  if (cart.length === 0 ){
    condit = true
  }  else {
    condit = false
  }
  
  return (
    <>
    <div className="carritou">
    {condit ? (<p>No tenes nada comprado</p>): (
 
         <Cartmain /> )}
     
         </div>
    </>
  );
}
  
