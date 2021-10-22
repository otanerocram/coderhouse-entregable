import Button from "@restart/ui/esm/Button";
import { Container, Row, Col, Table, Card } from "react-bootstrap";

import { CartContextUse } from "../context/CartContext";

const CartContainer = () => {
  const { clear, removeItem, cart } = CartContextUse();

  console.log(cart);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={9}>
          <Card>
            <Card.Header>Carrito</Card.Header>
            <Card.Body>
              {cart.length > 0 ? (
                <>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>SKU</th>
                        <th>Producto</th>
                        <th>Cant</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((el, idx) => (
                        <tr key={idx}>
                          <td>{el.product.id}</td>
                          <td>{el.product.title}</td>
                          <td>{el.product.qty}</td>
                          <td>S/ {el.product.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </>
              ) : (
                <>
                  <h3>Su carrito está vacío...</h3>
                  <Button variant="warning">Seguir Comprando</Button>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default CartContainer;
