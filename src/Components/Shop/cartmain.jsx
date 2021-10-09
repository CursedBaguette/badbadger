import React from 'react'
import { CartContextUse } from '../context/cartContext'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cartformu from './cartformu';


export default function Cartmain() {

   const [formulario, Setformulario] = useState(true)

    const {cart, clearCart, removeItem2} = CartContextUse();
    /*var listado = [];
    listado.itens = [];
    cart.map(items => {listado = items; return});*/


    const totalCarrito = cart.map(
      (unidad) => unidad.cantidad * unidad.itens.precio
      );
      
      let sumaTotal = 0;
      for (let i = 0; i < totalCarrito.length; i++) {
      sumaTotal += totalCarrito[i];
      }





    return (
      <> <div class="carritou">
       <div>
       {cart.map((items2)=> (
          <>
          
          <div className="cartlista d-flex" key={items2.itens.id}> 
          <img className="card-img-cart" src={items2.itens.foto} alt="cap" />
          <h5 className="textocart">{items2.itens.producto}</h5>
          <p className="textocart">$ {items2.itens.precio*items2.cantidad}</p>
          <button onClick={()=>removeItem2(items2.itens.id)} className="cartbut btn-dark"> Eliminar </button>
          

          </div>
          
          </>
       ))}
         <div>
        
       <h5>El total de tu carrito es:  ${sumaTotal}</h5>
       
       
       
        </div>
          </div>{formulario ? 
          (<>
          <a href="#formcarr"><button className="btn btn-dark btn-dark2" onClick={()=>Setformulario(false)}>Finalizar Compra</button></a>
          <button onClick={clearCart} className="btn btn-dark btn-dark2">Limpiar carrito </button>
          <Link to="/"><button className="btn btn-dark2 btn-dark">Volver</button></Link>
          </>) :
           (<>
           <div id="formcarr">
          <Cartformu /> <button type="submit" class="btn btn-dark btn-dark2 formcenter" onClick={()=>Setformulario(true)} >Volver</button>
          </div>
          </> )}

 
      </div>
      
      

      </>
    );
    }


 
 
