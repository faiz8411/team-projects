import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='banner-container '>
            <h2 className='mb-5 text-primary'>RESTBEEF STEAKHOUSE</h2>
            <h4 className='m-5'>best sticks and grilled</h4>
            <h3>you can love it</h3>


            <div className='mx-5'>
                <p className='paragraph'>We are making the original steaks based  on traditional recipes. <br /> We use only fresh meat from the best suppliers. Our staff are professionals, <br /> and we make everything to left our clients satisfied.</p>
                <button className='button'>watch menu</button>


            </div>




        </div>
    );
};

export default Banner;