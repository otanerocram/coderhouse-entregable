import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import "./App.css";
import BannerCarousel from "./components/Carousel";
import ItemListContainter from "./components/ItemList/ItemListContainter";
import {
  BrowserRouter,
  Switch,
  Route,
  // useParams,
  useRouteMatch,
} from "react-router-dom";

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
      <Switch>
        <Route exact path="/">
          <BannerCarousel />
        </Route>
        <Route path="/laptops">
          {/* <img style={{maxHeight:404}} src="../assets/laptop-banner.jpg" alt="" /> */}
          <Container>
            <ItemListContainter />
          </Container>
        </Route>
        {/* <Route path="/:miRuta" children={<UrlHandler />} /> */}
        <Route path="/categorias">
          <CategoriesHandler />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

// const UrlHandler = () => {
//   let { miRuta } = useParams();

//   console.log({ miRuta });
//   return <div>{miRuta}</div>;
// };

const CategoriesHandler = () => {
  let { path, url } = useRouteMatch();
  console.log(`url: ${url}`)
  console.log(`path: ${path}`)
  
  return "holi";
};

export default App;
