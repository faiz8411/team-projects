import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'
import { HashLink } from 'react-router-hash-link';
// import logo from '../../../images/logo.png'
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logout } = useAuth()
    return (
        <div className='header fixed-top' >
            <Navbar bg="dark" variant="warning" className='' >
                <Container>
                    <Navbar.Brand href="#home" className='text-white'>
                        {/* <img src={logo} alt="" /> */}
                        logo
                    </Navbar.Brand>

                    <Nav className="mx-auto">
                        <Nav.Link as={HashLink} className='text-white' to="/home">Home</Nav.Link>

                        {user.email && <Nav.Link as={HashLink} className='text-white' to="/Dashboard">dashboard</Nav.Link>}
                        {user?.email && <Nav.Link as={HashLink} className='text-white' to="/order">Order</Nav.Link>}
                        <Nav.Link as={HashLink} className='text-white' to="/shop">shop</Nav.Link>
                        {user?.email ? <Nav.Link as={HashLink} className='text-white' to="/login" className=" text-white rounded" onClick={logout}>logout :{user.displayName}</Nav.Link>
                            :
                            <Nav.Link as={HashLink} to="/login" className="rounded text-white">login</Nav.Link>}
                        {/* <Nav.Link as={HashLink} className='text-white' to="/login" className=" text-white rounded" >:{user.displayName}</Nav.Link> */}
                        <Navbar.Collapse className="justify-content-end ">
                            <Navbar.Text className="text-white ">


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