import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import contactImg from '../../images/image-37-copyright.jpg'

import './Contact.css'
const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const form = useRef();
    // const onSubmit = data => {
    //     console.log(data)
    //     reset()
    // };
    const sendEmail = (e) => {


        emailjs.sendForm('service_y52o7jr', 'template_n6o99bj', e.target, 'user_TjnMJ4Kh1pbAUhNvEvLRG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        e.preventDefault();
    };
    return (
        <div className="about-container">
            {/* <h4 className="text-warning">About</h4> */}

            <Row>
                <Col xs={12} md={6}>
                    <img className="img-fluid image-about" src={contactImg} alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <h4 className='text-contact'>contact with us</h4>
                    <form ref={form} onSubmit={sendEmail}>

                        <input className="contact" type="text" name="name" placeholder="name" />
                        <br />

                        <input className="contact" type="email" name="email" placeholder="email" />
                        <br />

                        <input className="contact" type="text" name="subject" placeholder="subject" />
                        <br />

                        <textarea className="contactText" name="message" placeholder="write massage" />
                        <br />
                        <input className="button-send" type="submit" value="Send" />
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;