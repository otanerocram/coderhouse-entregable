import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = (props) => {
  const { storeName, categories } = props.storeInfo;

  return (
    <header>
      <Container fluid>
        <Row>
          <Col>
            <Navbar bg="light" expand="lg">
              <NavLink
                to={"/"}
                className="navbar-brand"
                activeClassName="my-selected-link"
              >
                {storeName}
              </NavLink>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="mr-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  {categories.map((item, idx) => (
                    <Link
                      role="button"
                      className="nav-link"
                      to={item.link}
                      key={idx}
                    >
                      {item.title}
                    </Link>
                  ))}
                </Nav>
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <CartWidget />
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default NavBar;
