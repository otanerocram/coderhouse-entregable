import { Row, Col, Card } from "react-bootstrap";
import { CartContextUse } from "../context/CartContext";
import { useAlert } from "react-alert";
import { NavLink } from "react-router-dom";
import ItemCount from "./ItemCount";
import useSound from "use-sound";
import cashMP3 from "../../audio/cash.mp3"

const ItemDetail = ({ itemInfo }) => {
  const { title, stock, price, pictureUrl, description, id } = itemInfo;
  const alert = useAlert();
  const { addItem } = CartContextUse();

  const [play] = useSound(cashMP3);

  const product = {
    id: id,
    stock: stock,
    initial: 1,
    onAdd: (stock, cantidad) => {
      const item = {
        id: id,
        title: title,
        description: description,
        price: price,
        qty: cantidad,
      };

      addItem({ ...item });

      alert.show(
        <>
          <p>
            Se agregó {cantidad} {title} a su carrito de compras
          </p>
          <br />
          <NavLink to="/cart" className="btn btn-primary">Ir al Carrito</NavLink>
        </>
      );
      play();
      return stock - cantidad;
    },
    precio: price,
  };

  return (
    <>
      <Row>
        <Col md={9}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <img
                    src={pictureUrl}
                    title={title}
                    style={{ width: "100%" }}
                    alt={title}
                  />
                </Col>
                <Col md={6}>
                  <h1>{title}</h1>
                  <h4>{description}</h4>
                  <hr />
                  <div className="my-price-order mb-4">
                    <h4>Precio: S/ {price}</h4>
                  </div>
                  <div className="bloque-envios">
                    <div className="titulo">OPCIONES DE DESPACHO</div>
                    <div className="be-sect">
                      <span>
                        <img
                          alt="img"
                          src="https://www.magitech.pe/skin/frontend/ultimo/default/images/icono-envio-lima.png"
                        />
                      </span>
                      <p className="text1">Envío en Lima</p>
                      <p className="text2">1 día hábil</p>
                    </div>
                    <div className="be-sect">
                      <span>
                        <img
                          alt="img"
                          src="https://www.magitech.pe/skin/frontend/ultimo/default/images/icono-envio-provincia.png"
                        />
                      </span>
                      <p className="text1">Envío a provincia</p>
                      <p className="text2">2 a 4 días hábiles</p>
                    </div>
                    <div className="be-sect" style={{ border: 0 }}>
                      <span>
                        <img
                          alt="img"
                          src="https://www.magitech.pe/skin/frontend/ultimo/default/images/icono-envio-tienda.png"
                        />
                      </span>
                      <p className="text1">Retiro en tienda</p>
                      <p className="text2">visítanos</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="buy-product">
          <ItemCount props={product} />
        </Col>
      </Row>
    </>
  );
};

export default ItemDetail;
