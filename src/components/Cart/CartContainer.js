import { Card, Button, Container } from "react-bootstrap";

import { CartContextUse } from "../context/CartContext";

const CartContainer = () => {

  const { clear, removeItem, cart } = CartContextUse();

  console.log(cart);

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>Carrito</Card.Header>
        <Card.Body>
          <ul>
            {
              cart.map((el, idx) => (
                <li key={idx}>{el.product.title} --> {el.product.qty}</li>
              ))
            }
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CartContainer;
