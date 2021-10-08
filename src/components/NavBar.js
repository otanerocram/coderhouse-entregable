import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
  const { storeName, categories } = props.storeInfo;

  return (
    <>
      <Navbar sticky="top" bg="dark" expand="md" variant="dark">
        <Container>
          <NavLink
            to={"/"}
            className="navbar-brand my-logo"
            activeClassName="my-selected-link"
          >
            {storeName}
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
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
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
