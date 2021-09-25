/* Entregable 03 */

function ItemListContainter(props) {
  const { greeting } = props;
  return (
    <ul className="list-group">
      <li className="list-group-item">{greeting}</li>
    </ul>
  );
}

export default ItemListContainter;
