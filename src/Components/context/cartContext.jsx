import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextUse = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cart, SetCart] = useState([]);

  const isInCart = (id) => cart.find((prods) => prods.itens.id === id);

  const addItem = (itens, cantidad) => {

    if (isInCart(itens.id)) {
      const cantidad2 = [...cart];
      
      cantidad2.map((element) => {

        if (element.itens.id === itens.id) {
          element.cantidad += cantidad;
          console.log(element.cantidad);
          if (element.cantidad >12){
              alert('Maxima cantidad es 12')
              element.cantidad = 12;
              
          } else{
            return SetCart(cantidad2);
          }
        
      }

        return SetCart(cantidad2);
      });
      console.log("productor ya agregado");
      
    } else 
    { 
    return SetCart([...cart, { itens, cantidad }]);

    }



};


  const clearCart = () => SetCart([])

  const removeItem = (itens, cantidad) => {
    if (isInCart(itens.id)) {
      const cantidad2 = [...cart];
      cantidad2.map((element) => {
        if (element.itens.id === itens.id) {
          element.cantidad -= cantidad;
          console.log(element.cantidad);
          if (element.cantidad <= 0){
              alert('No hay mas de este objeto agregado')
              element.cantidad = 0;
              cantidad2.splice(cantidad2.indexOf(element), 1)
          } else{
            return SetCart(cantidad2);
          }
        }
        return SetCart(cantidad2);
      });
      console.log("removiendo productonop");
    
  };
  }


  console.log("carrito", cart);
  return (
    <CartContext.Provider value={{ cart, addItem, clearCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
