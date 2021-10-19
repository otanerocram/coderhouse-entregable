import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartContextUse = () => {
  return useContext(CartContext);
};

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    const filteredCart = () => cart.filter((el) => el.item.id !== id);
    setCart(filteredCart);
  };

  const totalCart = cart.reduce(
    (total, currVal) => (total += currVal.quantity),
    0
  );

  const addItem = (item, qty) => {
    const { id } = item;

    const isInCart = (id) => {
      console.log(`busca: ${id}`);
      console.log(`items in my cart: ${qty}`)
      const found = cart.length && cart.find((el) => el.item.id === id);
      console.log(found);
      return found;
    };

    if (isInCart(id) === 0) {
      setCart([...cart, { item, qty }]);
      console.log(`ItemID: ${id} added!`);
    } else {
      const newCart = [...cart];
      newCart.map((el) => el.item.id === item.id && (el.qty += qty));
      setCart(newCart);
      console.log(`ItemID: ${id} added!`);
    }

    // if (isInCart(item.id)) {
    // } else {
    //   setCart([...cart, { item, qty }]);
    // }

    // if (isInCart(item.id)) {
    //   const newCart = [...cart];

    //   newCart.map((el, idx) => {
    //     if (el.item.id === item.id) {
    //       el.quantity += quantity;
    //     }
    //   });
    //   setCart(newCart);
    // } else {
    //   setCart([...cart, { item, quantity }]);
    // }
  };

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <CartContext.Provider
      value={{ cart, addItem, clear, removeItem, totalCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
