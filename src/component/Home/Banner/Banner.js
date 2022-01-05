import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='banner-container  p-5 mt-3'>
            <div className=''>
                <h1 >Best Steaks and Grill <br />
                    RESTBEEF STEAKHOUSE</h1>
                <p>We are making the original steaks based on traditional recipes. We use only fresh meat from <br /> the best suppliers. Our staff are professionals, and we make everything to left our clients satisfied.</p>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <Link to="/shop"> <button className='btn btn-outline-danger'><strong>WATCH MENU</strong></button></Link>
                        <button className='btn btn-outline-danger m-3'><strong>BOOK A TABLE</strong></button>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
            {/* <Banner></Banner> */}
        </div>
    );
};

export default Banner;