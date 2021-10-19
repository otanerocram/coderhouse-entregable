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
          <Card.Title>El contenido de tu carrito</Card.Title>
          <Card.Text>Aquí aparecerá el contenido de tu carrito</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CartContainer;
