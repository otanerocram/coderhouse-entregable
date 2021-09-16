import NavBar from './components/NavBar';
import { Container, Row, Col, } from 'react-bootstrap';
import './App.css';


function App() {

  /* Array con parametros a pasar al NavBar*/
  const propsNav = {
    storeName: "MagiTech",
    categories: ['Laptops', 'Pc´s', 'Servidores', 'Impresoras', 'Monitores', 'Accesorios']
  }

  return (
    <>
    <Container fluid>
      <header>
        <NavBar params={propsNav}/>
      </header>  
    </Container>

    <Container fluid>
      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">Venta de Computadoras</h1>
          <p className="lead my-3">Algun Slogan interesante</p>
        </div>
      </div>
      <Row>
        <Col md="6"></Col>
        <Col md="6"></Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
