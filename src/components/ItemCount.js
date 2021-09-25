// Entregable 04
import { useState, useEffect } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";

function ItemCount(props) {
  const { stock, initial } = props.props;

  const [cantidad, setCantidad] = useState(initial);

  const add = () => {
    if (cantidad <= stock - 1) {
      setCantidad(cantidad + 1);
    }
  };

  const substract = () => {
    if (cantidad > initial) {
      setCantidad(cantidad - 1);
    }
  };

  useEffect(() => {
    console.log(stock);
  }, [stock]);

  return (
    <div>
      <InputGroup className="mb-3 form-calculator-minmax">
        <Button
          variant="outline-secondary"
          id="button-addon1"
          onClick={substract}
        >
          -
        </Button>
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          value={cantidad}
          // onChange={ammountChange}
          readOnly
        />
        <Button variant="outline-secondary" id="button-addon1" onClick={add}>
          +
        </Button>
      </InputGroup>
    </div>
  );
}

export default ItemCount;
