/* Entregable 03 */
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  return (
    <div className="cart-item-list">
      {" "}
      Carrito:  {" "}
      <FaShoppingCart />
      &nbsp;{" "}
    </div>
  );
}

export default CartWidget;
