import { Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { CartContextUse } from "../context/CartContext";

function CartWidget() {
  const { totalProducts } = CartContextUse();

  return (
    <NavLink to="/cart">
      <div className="cart-item-list">
        <FaShoppingCart />
        <Badge pill bg="success" style={{ fontSize: 15 }}>
          {totalProducts()}
        </Badge>
      </div>
    </NavLink>
  );
}

export default CartWidget;
