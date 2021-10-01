import { Modal, Card, Badge } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  const { title, stock, price, pictureUrl, description, id } = props.props;
  const product = {
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
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Img variant="top" src={pictureUrl} width="80%" />
          <Card.Body>
            <Card.Text>
              <span style={{ textAlign: "center" }}>
                <Badge bg="success">SKU: {id}</Badge>
              </span>
              <br />
              <span>{description}</span>
              <br />
              <span>
                <Badge bg="danger">Precio: ${price}</Badge>
              </span>
            </Card.Text>
            <ItemCount props={product} /> {/* <-- Entregable 04 */}
          </Card.Body>
        </Card>
      </Modal.Body>
    </>
  );
};

export default ItemDetail;
