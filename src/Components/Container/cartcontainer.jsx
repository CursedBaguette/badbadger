import React from "react";
import Cartformu from "../Shop/cartformu";
import Cartmain from "../Shop/cartmain";
import { useState } from "react";

export default function Carrito() {

  const [formulario, Setformulario] = useState(true)
  
  
  return (
    <>
    {formulario ?(
      <>
         <div class="carritou">
         <Cartmain />
        <button onClick={()=>Setformulario(false)}>finalizar compra</button>
        </div>
    </>
     
    ): (<div class="carritou">
      <Cartformu />
    </div>)}
 
    
    </>
  );
}
  