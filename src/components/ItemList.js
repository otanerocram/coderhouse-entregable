import { Spinner } from "react-bootstrap";
import Item from "./Item";

/* Entregable 05 */
function ItemList({ items }) {
  return (
    <>
      {items.length ? (
        items.map((elem, idx) => <Item props={elem} key={idx} />)
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </>
  );
}

// prueba de modificacion

export default ItemList;
