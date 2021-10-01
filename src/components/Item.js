import { Card, Badge } from "react-bootstrap";
// import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";

function Item(props) {
  const { title, pictureUrl, stock } = props.props;

  return (
    <div className="col-sm-6 col-md-3">
      <Card>
        <Card.Img variant="top" src={pictureUrl} width="60%" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            <Badge bg="success">Stock: {stock}</Badge>
          </Card.Text>
          <ItemDetailContainer props={props.props} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
