import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'
import { HashLink } from 'react-router-hash-link';
// import logo from '../../../images/logo.png'
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logout } = useAuth()
    return (
        <div className='navigation-container fixed-top' >

            <Navbar bg="dark" variant="warning" className='nav' >
                {/* <p className='text-white mb-5'>time</p> */}

                <Container>
                    <Navbar.Brand href="#home" className='text-white'>
                        {/* <img src={logo} alt="" /> */}
                        logo
                    </Navbar.Brand>

                    <Nav className="mx-auto">
                        <Nav.Link as={HashLink} className='text-white' to="/home">Home</Nav.Link>

                        <Nav.Link as={HashLink} className='text-white' to="/features">Features</Nav.Link>
                        {user?.email && <Nav.Link as={HashLink} className='text-white' to="/order">Order</Nav.Link>}
                        {user.email && <Nav.Link as={HashLink} className='text-white' to="/dashboard">Dashboard</Nav.Link>}
                        {user?.email ? <Nav.Link as={HashLink} className='text-white' to="/login" className=" text-white rounded" onClick={logout}>logout</Nav.Link>
                            :
                            <Nav.Link as={HashLink} to="/login" className="rounded text-white">login</Nav.Link>}
                        <Navbar.Collapse className="justify-content-end ">
                            <Navbar.Text className="text-white ">
                                {user?.email && <p>welcome : {user.displayName}</p>}

                            </Navbar.Text>
                        </Navbar.Collapse>

                    </Nav>
                </Container>

            </Navbar>

        </div>
    );
};

export default Navigation;