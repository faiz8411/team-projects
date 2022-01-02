import React from 'react';
import Navigation from '../../Sahred/Navigation/Navigation';
import img1 from '../../../images/about.PNG';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className='bg-info p-5'>
                <div className='container'>
                <h1>Best Steaks and Grill <br />
                RESTBEEF STEAKHOUSE</h1>
                <p>We are making the original steaks based on traditional recipes. We use only fresh meat from <br /> the best suppliers. Our staff are professionals, and we make everything to left our clients satisfied.</p>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <button className='btn btn-outline-danger'><strong>WATCH MENU</strong></button>
                        <button className='btn btn-outline-danger m-3'><strong>BOOK A TABLE</strong></button>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                </div>
            </div>
            {/* about  */}
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <img className='w-100' src={img1} alt="" />
                    </div>
                    <div className="col-md-6 py-5">
                        <div className='shadow p-5'>
                        <h3><i>Our Story</i></h3>
                        <h1><strong>HOW WE BEGIN</strong></h1>
                        <p>The Restbeef Steakhouse was est in 1989 in Chicago City. With more than 30 years of experience and base on traditional recipes, we understand how to best serve our customers through tried service principles. Instead of following trends, we set them. We create steaks and grill we’re proud to serve and deliver it fast, with a smile. No matter where you find us, we’re making sure each meal our clients enjoy is delicious and one-of-a-kind. Our steaks is always perfect and our professional team working hard to make you happy.</p>
                        <button className='btn btn-outline-danger'>LEARN MORE ABOUT US</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* about  */}
        </div>
    );
};

export default Home;