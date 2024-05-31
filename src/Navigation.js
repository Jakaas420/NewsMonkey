import React  from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () =>{


    return (
            <Navbar expand="lg" className="Navbar fixed-top Navbar-expand-lg Navbar-dark bg-dark">
            <Container fluid>
                <Navbar.Brand as={Link} to="/business" className='text-light mx-3'>NewsMonkey</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"  className='bg-light' />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to="/general" className='text-light mx-2'>Home</Nav.Link>
                    <Nav.Link as={Link} to="/business" className='text-light'>Business</Nav.Link>
                    <Nav.Link as={Link} to="/entertainment" className='text-light'>Entertainment</Nav.Link>
                    <Nav.Link as={Link} to="/general" className='text-light'>General</Nav.Link>
                    <Nav.Link as={Link} to="/health" className='text-light'>Health</Nav.Link>
                    <Nav.Link as={Link} to="/science" className='text-light'>Science</Nav.Link>
                    <Nav.Link as={Link} to="/sports" className='text-light'>Sports</Nav.Link>
                    <Nav.Link as={Link} to="/technology" className='text-light'>Technology</Nav.Link>

                  
        
                </Nav>
             
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );
    
}


export default Navigation;
