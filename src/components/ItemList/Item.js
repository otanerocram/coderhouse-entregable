import { Card, Badge } from "react-bootstrap";
import { NavLink, useRouteMatch } from "react-router-dom";

function Item(props) {
  const { id, title, pictureUrl, price } = props.props;

  let { path, url } = useRouteMatch();

  return (
    <div className="col-sm-6 col-md-3">
      <NavLink to={`${url}/${id}`} className="item-link" activeClassName="actite-item-link">
        <Card>
          <Card.Img variant="top" src={pictureUrl} width="60%" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              <Badge bg="success">Precio: S/ {price}</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </NavLink>
    </div>
  );
}

export default Item;
