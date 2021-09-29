import { useState, useEffect } from "react";
import { Row, Spinner } from "react-bootstrap";
import Item from "./Item";

/* Entregable 05 */
function ItemList(props) {
  const { items } = props;

  const [products, setProducts] = useState(0);
  
  const valm = typeof items.length === "undefined" ? 0 : items.length;

  useEffect(() => {
    if (valm > 0) {
      setProducts(
        items.map((element, index) => <Item props={element} key={index} />)
      );
    }
  }, [valm, items]);

  return (
    <>
      {products ? (
        <Row>{products}</Row>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </>
  );
}

export default ItemList;
