import React from 'react'
import { CartContextUse } from '../context/cartContext'
import { Link } from 'react-router-dom';
export default function Cartmain() {


    const {cart, clearCart, removeItem2} = CartContextUse();

    var listado = [];
    listado.itens = [];
    cart.map(items => {listado = items; return});

    const totalCarrito = cart.map(
      (unidad) => unidad.cantidad * unidad.itens.precio
      );
      
      let sumaTotal = 0;
      for (let i = 0; i < totalCarrito.length; i++) {
      sumaTotal += totalCarrito[i];
      }


    return (
      <>
      <div class="carritou">
        <div>
        <button onClick={clearCart} className="btn btn-dark">Limpiar carrito </button>
       <h5>El total de tu carrito es:  ${sumaTotal}</h5>
       <Link to="/"><button className="btn btn-dark">Volver</button></Link>
        </div>

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
          </div>
      </div>
      
      
      </>
    );
    }


 
 
