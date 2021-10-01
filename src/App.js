import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import "./App.css";
import BannerCarousel from "./components/Carousel";
import ItemListContainter from "./components/ItemListContainter";

/* ROADMAP

Entregables: 

02: 
Crea una carpeta dentro de src llamada components que contenga a NavBar.js  para crear una barra de menú simple, que tenga:
- Brand (título/nombre de la tienda)
- Un listado de categorías clickeables
- Incorpora alguna librería bootstrap/materialize u otro de tu preferencia (opcional).

03:
Crea un componente contenedor ItemListContainer.js con una prop greeting, muestra el mensaje dentro del contenedor con el styling integrado.

04: 
Crea un componente ItemCount.js, que debe estar compuesto de un botón y controles, para incrementar y decrementar la cantidad requerida de ítems
- Se declara un array con un item para efectos de prueba

05: 
Crea los componentes Item.js e ItemList.js para mostrar algunos productos en tu ItemListContainer.js. Los ítems deben provenir de un llamado a una promise que los resuelva en tiempo diferido (setTimeout) de 2 segundos, para emular retrasos de red.


*/

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
