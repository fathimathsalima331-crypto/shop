import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ✅ ADD TO CART (INCREMENT IF EXISTS)
  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find(item => item.id === product.id);

      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ✅ REMOVE ITEM COMPLETELY
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // ✅ DECREASE QUANTITY
  const decreaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
