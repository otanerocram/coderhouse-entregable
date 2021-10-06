import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import "./App.css";
import BannerCarousel from "./components/Carousel";
import ItemListContainter from "./components/ItemList/ItemListContainter";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const storeInfo = {
    storeName: "InfoTec",
    categories: ["Laptops", "Pc´s", "Servidores"],
  };

  return (
    <BrowserRouter>
      <header>
        <Container fluid>
          <NavBar storeInfo={storeInfo} />
        </Container>
      </header>
      <main>
        <BannerCarousel />
      </main>

      <Container>
        <ItemListContainter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
