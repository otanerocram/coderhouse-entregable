import { Row, Col, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = ({ itemInfo }) => {
  const { title, stock, price, pictureUrl, description, id } = itemInfo;

  const product = {
    id: id,
    stock: stock,
    initial: 1,
    onAdd: (stock, cantidad) => {
      alert(`Se agregarán ${cantidad} unidades al carrito`);
      return stock - cantidad;
    },
    precio: price,
  };

  return (
    <>
      <Row>
        <Col md={3}> </Col>
        <Col md={9}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <img
                    src={pictureUrl}
                    title={title}
                    style={{ width: "100%" }}
                    alt={title}
                  />
                </Col>
                <Col md={6}>
                  <h1>{title}</h1>
                  <p>{description}</p>
                  <p>Precio: S/ {price}</p>
                  <ItemCount props={product} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ItemDetail;
