import { Navbar, Nav } from 'react-bootstrap';

const NavBar = (props) => {

    /* Desestructurar la propiedad en constantes */
    const {storeName, categories} = props.params;

    return (
        <>
            <Navbar bg="light" expand="lg">
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
            </Navbar>
        </>
    )
}

export default NavBar
