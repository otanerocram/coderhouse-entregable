import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const { storeName, categories } = props.storeInfo;

  return (
    <>
      <Navbar sticky="top" expand="md" className="my-navbar">
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
              style={{ maxHeight: "300px" }}
              navbarScroll
            >
              {categories.map((item, idx) => (
                <NavLink
                  role="button"
                  className="my-nav-link"
                  activeClassName="my-selected-link"
                  to={item.link}
                  key={idx}
                >
                  {item.title}
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
