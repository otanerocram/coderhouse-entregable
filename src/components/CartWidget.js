import { Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function CartWidget(props) {
  return (
    <NavLink to="/cart">
      <div className="cart-item-list">
        <FaShoppingCart />{" "}
        <Badge pill bg="success" style={{ fontSize: 15 }}>
          0
        </Badge>
      </div>
    </NavLink>
  );
}

export default CartWidget;
