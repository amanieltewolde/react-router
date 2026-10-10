import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext()

export default function CartContextProvider({ children }) {

  const [cartProducts, setCartProducts] = useState([]);

  const totCartProducts = cartProducts.length;

  function handleAddCardProducts(product) {
    setCartProducts(actual => [...actual, product])
  }

  return (
    <CartContext value={{
      cartProducts,
      totCartProducts,
      handleAddCardProducts,
    }}>
      {children}
    </CartContext>
  )
}

// eslint-disable-next-line
export function useCartContext() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('To use context this component must be wrapped by CartContext provider')
  }
  return context
}