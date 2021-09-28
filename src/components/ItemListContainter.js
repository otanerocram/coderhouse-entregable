import ItemList from "./ItemList";
import {Row, Col} from "react-bootstrap"

/* Entregable 03 */
function ItemListContainter(props) {
  const { greeting } = props;
  return (
    <>
    
      <Row className="item-list-container">
        <Col md={1}>{greeting}</Col>
        <Col md={11} className="d-flex justify-content-center">
          <ItemList />
        </Col>
      </Row>
    </>
  );
}

export default ItemListContainter;
