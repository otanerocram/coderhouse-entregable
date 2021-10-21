import { createContext, useContext, useEffect, useState } from "react";
import { useAlert } from "react-alert";

const CartContext = createContext();

export const CartContextUse = () => {
  return useContext(CartContext);
};

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const alert = useAlert();

  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    const filteredCart = () => cart.filter((el) => el.item.id !== id);
    setCart(filteredCart);
  };

  const totalCart = cart.reduce((total, currVal) => (total += currVal.qty), 0);

  const totalProducts = () => {
    return cart.length;
  };

  const addItem = ({ title, price, pictureUrl, description, id, qty }) => {
    console.log(`Add to cart Item: ${id} -> ${qty}pcs`);

    const isInCart = (thisId, thisQty) => {
      var found = false;

      const empty = cart.length === 0 ? true : false;

      if (empty) {
        console.log("Carrito vacio");
        found = false;
      } else {
        const exists = cart.find((e) => e.product.id == thisId);

        if (typeof exists === "undefined") {
          console.log("Carrito no está vacio, ID no existe");
          found = false;
        } else {
          console.log("Carrito no está vacío, ID sí existe");
          found = true;
        }
      }

      console.log(`IsInCart: ${found}`);

      return found;
    };

    if (!isInCart(id, qty)) {
      const product = {
        id: id,
        title: title,
        description: description,
        price: price,
        pictureUrl: pictureUrl,
        qty: qty,
      };
      setCart([...cart, { product }]);
      console.log(`ItemID: ${id} added!`);
    } else {
      const newCart = [...cart];
      newCart.map((el) => el.product.id === id && (el.product.qty += qty));
      setCart(newCart);
      console.log(`Updating... ItemID: ${id}!`);
    }

    alert.show(`Se agregó ${qty} ${title} a su carrito de compras`);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, clear, removeItem, totalCart, totalProducts }}
    >
      {children}
    </CartContext.Provider>
  );
}
