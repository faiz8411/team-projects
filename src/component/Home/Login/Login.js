import React, { useState } from 'react';
import { Alert, Button, Col, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, SetLoginData] = useState({})
    const { user, loginUser, isLoading, signWithGoogle, authError } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const handleOnChange = (e) => {
        const Field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[Field] = value
        console.log(Field, value)
        SetLoginData(newLoginData)
        e.preventDefault()
    }


    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault()
    }
    const handleGoogleSignIn = () => {
        signWithGoogle(location, navigate)
    }
    return (
        <div>
            <Row>
                <Col xs={12} md={6} className='mt-5'>
                    <form onSubmit={handleLoginSubmit}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input
                            style={{ width: '80%', margin: 20 }}
                            // defaultValue="email"
                            onChange={handleOnChange}
                            type="email"
                            name='email'
                            placeholder='email'
                        /> <br />
                        <input
                            style={{ width: '80%', margin: 10, borderBottom: '' }}
                            // defaultValue="password"
                            placeholder='password'
                            onChange={handleOnChange}
                            name='password'
                            type="password" />

                        <br />

                        {/* include validation with required or other standard HTML validation rules */}

                        {/* {errors.exampleRequired && <span>This field is required</span>} */}

                        <input type="submit" value="login" onClick={handleLoginSubmit} className='bg-success rounded text-white border-0 p-2 m-2' /> <br />
                        <Link to="/register"><Button variant='Link' className='text-danger'>are you new user?please register</Button></Link> <br />

                        <button className='bg-success rounded text-white border-0 p-2' onClick={handleGoogleSignIn}>google sign in</button>
                        {isLoading &&
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        }
                        {user?.email && <Alert>
                            user create successfully
                        </Alert>}
                        {authError && <Alert  >
                            {authError}
                        </Alert>}
                    </form>
                </Col>
                <Col xs={12} md={6}>
                    <img className="img-fluid image-about" src="https://i.ibb.co/QPvBk3p/Support1.png" alt="" />
                </Col>

            </Row>

        </div>
    );
};

export default Login;