import NavBar from "./components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

import ItemListContainter from "./components/ItemList/ItemListContainter";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import CartWidget from "./components/CartWidget";

// import { useEffect } from "react";

function App() {
  const storeInfo = {
    storeName: "InfoTec",
    categories: [
      { id: 1, title: "Monitores", link: "/monitors" },
      { id: 2, title: "Laptops", link: "/laptops" },
      { id: 3, title: "PCs", link: "/pcs" },
      { id: 4, title: "Servidores", link: "/servers" },
    ],
  };

  return (
    <BrowserRouter>
      <NavBar storeInfo={storeInfo} />
      <div className="cart-widget">
        <CartWidget></CartWidget>
      </div>
      <Switch>
        <Route exact path="/">
          <HomeContent />
        </Route>
        <Route path="/laptops">
          {/* <img style={{maxHeight:404}} src="../assets/laptop-banner.jpg" alt="" /> */}
          <Container>
            <ItemListContainter />
          </Container>
        </Route>
        {/* <Route path="/:miRuta" children={<UrlHandler />} /> */}
        <Route path="/servers">
          <ServersHandler />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

// const UrlHandler = () => {
//   let { miRuta } = useParams();

//   console.log({ miRuta });
//   return <div>{miRuta}</div>;
// };

const ServersHandler = () => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <ul>
        <li>
          <Link to={`${url}/Lenovo`}>Lenovo</Link>
        </li>
        <li>
          <Link to={`${url}/IBM`}>IBM</Link>
        </li>
        <li>
          <Link to={`${url}/Asus`}>Asus</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <div>Seleccione una marca</div>
        </Route>
        <Route path={`${path}/:svrbranch`}>
          <ServerBranch />
        </Route>
      </Switch>
    </>
  );
};

const ServerBranch = () => {
  let { svrbranch } = useParams();

  return (
    <>
      <h1>{svrbranch}</h1>
    </>
  );
};

export default App;
