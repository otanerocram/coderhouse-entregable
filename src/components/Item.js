import { Card, Badge } from "react-bootstrap";
import ItemCount from "./ItemCount";

function Item(props) {
  const { id, title, description, price, pictureUrl, stock } = props.props;
  /* Entregable 04 --> */
  const product = {
    stock: stock,
    initial: 1,
    onAdd: (stock, cantidad) => {
      alert(`Se agregarán ${cantidad} unidades al carrito`);
      return stock - cantidad;
    },
    precio: price,
  };
  /* <--- Entregable 04*/

  return (
    <div className="col-sm-6 col-md-3">
      <Card>
        <Card.Img variant="top" src={pictureUrl} width="80%" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <span style={{ textAlign: "center" }}>
              SKU: <Badge bg="success">{id}</Badge>
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
    </div>
  );
}

export default Item;
