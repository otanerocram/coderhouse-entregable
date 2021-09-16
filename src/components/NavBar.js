/* Entregable 02 */
import { Row, Col, Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = (props) => {

    /* Desestructurar la propiedad en constantes */
    const {storeName, categories} = props.params;

    return (
        <>
            <Row>
                <Col>
                    <Navbar bg="light" expand="lg">
                        {/* Entregable 02 */}
                        <Navbar.Brand href="#">{storeName}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>

                                { 
                                categories.map( item => 
                                    (<Nav.Link href="" >{item}</Nav.Link>)
                                )
                                }
                                
                            </Nav>
                            
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                {/* Entregable 03 */}
                                <CartWidget />
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </>
    )
}

export default NavBar
