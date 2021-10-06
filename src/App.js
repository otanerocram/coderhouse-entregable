import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import "./App.css";
import BannerCarousel from "./components/Carousel";
import ItemListContainter from "./components/ItemListContainter";



function App() {
  /* Entregable 02 --> */
  const propsNav = {
    storeName: "InfoTec",
    categories: ["Laptops", "Pc´s", "Servidores"],
  };
  /* <-- Entregable 02 */
  return (
    <>
      {/* Entregable 02 -->  */}
      <header>
        <Container fluid>
          <NavBar params={propsNav} />
        </Container>
      </header>
      <main>
        <BannerCarousel />
      </main>
      {/* <-- Entregable 02 */}

      <Container>
        {/* Entregable 03 --> */}
        <ItemListContainter />
        {/* <-- Entregable 03 */}
      </Container>
    </>
  );
}

export default App;
