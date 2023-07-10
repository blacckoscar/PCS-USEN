// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
