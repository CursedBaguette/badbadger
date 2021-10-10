import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartContextUse = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cart, SetCart] = useState([]);
  const [badge, SetBadge] = useState(0);
  const [cartAmount, setCartAmount] = useState("");
  const [cartTotal, setCartTotal] = useState("");

  useEffect(() => {
    const total = cart.reduce(
      (acc, unidad) => acc + unidad.cantidad * unidad.itens.precio,
      0
    );
    setCartTotal(total);
  }, [cart]);
  
  useEffect(() => {
    const amount = cart.reduce((acc, itens) => acc + itens.cantidad, 0);
    setCartAmount(amount);
  }, [cart]);





  const isInCart = (id) => cart.find((prods) => prods.itens.id === id);

  const addItem = (itens, cantidad) => {

    if (isInCart(itens.id)) {
      const cantidad2 = [...cart];
      
      cantidad2.map((element) => {

        if (element.itens.id === itens.id) {
          element.cantidad += cantidad;
   
          if (element.cantidad >12){
              alert('Maxima cantidad es 12')
              element.cantidad = 12;
              
          } else{
            return SetCart(cantidad2);
          }
        
      }

        return SetCart(cantidad2);
      });

      
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

    
  };
  }

  const removeItem2 = (id) => {
    const cartFilter = cart.filter((removedor) => removedor.itens.id !== id);

    SetCart(cartFilter);
  };

  const badgeFunction = () => {
    let badgeFinal = 0;
    cart.forEach((x) => (badgeFinal += x.cantidad));
    SetBadge(badgeFinal);
  };

  useEffect(() => {
    badgeFunction();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);







  return (
    <CartContext.Provider value={{ cart, addItem, clearCart, removeItem, removeItem2, badge, cartAmount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
