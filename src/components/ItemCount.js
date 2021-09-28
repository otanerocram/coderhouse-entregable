// Entregable 04 ->
import { useState, useEffect } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";

function ItemCount(props) {
  // Desestructuramos las props
  const { stock, initial, onAdd } = props.props;

  // Inicializamos los hooks y pasamos variables
  const [cantidad, setCantidad] = useState(initial);
  const [actualStock, setActualStock] = useState(stock);

  // Logica de suma y resta
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
    // To do
  }, [actualStock]);

  return (
    <div>
      <p>Cantidad disponible: {actualStock}</p>
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
          readOnly
        />
        <Button variant="outline-secondary" id="button-addon1" onClick={add}>
          +
        </Button>
      </InputGroup>
      {/* Entrega 04 -->
        Se aplica la función onAdd importada para reducir el stock actual y simular que se agrega al carrito 
        */}
      <Button
        variant="primary"
        onClick={() => {
          // e.preventDefault(); {/* Evita el trigger automático */}
          actualStock >= cantidad &&
            setActualStock(onAdd(actualStock, cantidad));
          cantidad > actualStock &&
            alert("No queda más stock, no se puede agregar al carrito!");
        }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount;
