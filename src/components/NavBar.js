/* Entregable 02 */
import { Row, Col, Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = (props) => {
  /* Desestructurar la propiedad en constantes */
  const { storeName, categories } = props.storeInfo;

  return (
    <>
      <Row>
        <Col>
          <Navbar bg="light" expand="lg">
            {/* Entregable 02 */}
            <Navbar.Brand href="#">{storeName}</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {categories.map((item, index) => (
                  <Nav.Link href="" key={index}  >{item}</Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
            {/* Entregable 03 -->
                    Crea un componente CartWidget.js con un ícono, y ubícalo en el navbar. 
                    Agrega algunos estilos con bootstrap/materialize u otro.
                */}
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <CartWidget />
              </Navbar.Text>
            </Navbar.Collapse>
            {/* <-- Entregable 03 */}
          </Navbar>
        </Col>
      </Row>
    </>
  );
};

export default NavBar;
