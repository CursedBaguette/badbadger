import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextUse = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cart, SetCart] = useState([]);

  const addItem = (itens, cantidad) => {
    if (isInCart(itens)) {
      const cantidad2 = [...cart];
      cantidad2.map((element) => {
        if (element.itens === itens) {
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

  const isInCart = (id) => cart.find((prods) => prods.itens === id);

  console.log("carrito", cart);
  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
