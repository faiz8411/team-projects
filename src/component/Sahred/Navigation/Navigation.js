import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='navigation-container'>
            <Navbar bg="" variant="warning" className=' nav'>
                <Container>
                    <Navbar.Brand href="#home" className='text-white'>
                        {/* <img src={logo} alt="" /> */}
                        logo
                    </Navbar.Brand>

                    <Nav className="mx-auto">
                        <Nav.Link as={HashLink} className='text-white' to="/home">Home</Nav.Link>

                        <Nav.Link as={HashLink} className='text-white' to="/features">Features</Nav.Link>
                        <Nav.Link as={HashLink} className='text-white' to="/order">Order</Nav.Link>
                        <Nav.Link as={HashLink} className='text-white' to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={HashLink} className='text-white' to="/login" className=" text-white rounded">logout</Nav.Link>
                        :
                        <Nav.Link as={HashLink} to="/login" className="rounded">login</Nav.Link>
                        <Navbar.Collapse className="justify-content-end ">
                            <Navbar.Text className="text-white ">

                                <span className='dispalayName'> Welcome: </span>

                            </Navbar.Text>
                        </Navbar.Collapse>

                    </Nav>
                </Container>

            </Navbar>
            <div>
                <Navbar>
                    <Container>

                        <Navbar.Brand href="#home" className="m-2">

                        </Navbar.Brand>
                        <Navbar.Toggle />

                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Navigation;