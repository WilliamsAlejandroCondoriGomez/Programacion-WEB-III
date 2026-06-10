import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    setCart((prev) => [...prev, product]);

  };

  const removeFromCart = (id) => {

    setCart(
      cart.filter(
        item => item.id !== id
      )
    );

  };

  const clearCart = () => {

    setCart([]);

  };

  const total = cart.reduce(
    (acc, item) => acc + item.precio,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}