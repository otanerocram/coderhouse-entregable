import NavBar from "./components/NavBar";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./App.css";
// import BannerCarousel from "./components/Carousel";
import ItemListContainter from "./components/ItemListContainter";
import ItemCount from "./components/ItemCount";

function App() {
  /* Entregable 02 -->   
  Crea una carpeta dentro de src llamada components que contenga a NavBar.js 
  para crear una barra de menú simple, que tenga:
    Brand (título/nombre de la tienda)
    Un listado de categorías clickeables

   Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia (opcional).
  */
  const propsNav = {
    storeName: "MagiTech",
    categories: ["Laptops", "Pc´s", "Servidores"],
  };
  /* <-- Entregable 02 */

  /* Entregable 04 --> 
    Se declara un array con un item para efectos de prueba
  */
  
  const product = {
    id: 1,
    item: "Laptop",
    details: "informacion detallada",
    stock: 20,
    initial: 1,
    onAdd: (stock,cantidad) => {
      alert(`Se agregarán ${cantidad} unidades al carrito`)
      return stock-cantidad
    },
    precio: 100,
  };
  /* <--- Entregable 04*/

  return (
    <>
      {/* Entregable 02 -->  */}
      <Container fluid>
        <header>
          <NavBar params={propsNav} />
        </header>
        {/* <main>
          <BannerCarousel />
        </main> */}
      </Container>
      {/* <-- Entregable 02 */}

      <Container className="d-flex justify-content-center">
        <Row>
          <Col md="6">
            {/* Entregable 04 --> 
              Crea un componente ItemCount.js, que debe estar compuesto de un botón y controles, 
              para incrementar y decrementar la cantidad requerida de ítems
            */}
            <Card>
              <Card.Img variant="top" src="laptop.jpg" />
              <Card.Body>
                <Card.Title>Laptop Dynabook</Card.Title>
                <Card.Text>
                  LAPTOP DYNABOOK TECRA A40-G I3-10110U ( PMZ21U-00P009 ) 14" -
                  I3 - 256 SSD - 8GB.
                </Card.Text>
                
                <ItemCount props={product} /> {/* <-- Entregable 04 */}
              </Card.Body>
            </Card>
            {/* <-- Entregable 04 */}
          </Col>
          <Col md="6">
            {/* Entregable 03 --> 
              Crea un componente contenedor ItemListContainer.js con una prop greeting, 
              muestra el mensaje dentro del contenedor con el styling integrado.
            */}
            <ItemListContainter greeting="Greetings!" />{" "}
            {/*<-- Entregable 03 */}
            {/* <-- Entregable 03 */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
