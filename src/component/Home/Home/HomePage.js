import React from 'react';
import img1 from '../../../images/about.PNG'
import img2 from '../../../images/contact.PNG';
import auth1 from '../../../images/author01.jpg';
import auth2 from '../../../images/author02.jpg';
import auth3 from '../../../images/author03.jpg';
import auth4 from '../../../images/author04.jpg';
import auth5 from '../../../images/author05.jpg';
import auth6 from '../../../images/author06.jpg';
import './HomwPage.css'
import Banner from '../Banner/Banner';

const HomePage = () => {
    return (
        <div>

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
            {/* testimonial  */}
            <div className="container my-5">
                <h3><i>Our Clients Say</i></h3>
                <h1 className='mb-3'><strong>TESTIMONIALS</strong></h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card shadow">
                            <img src={auth1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">JOHN SMITH</h5>
                                <p class="card-text">The Restbeef was one of the first restaurants I discovered upon moving to Chicago last summer. Perfect steaks, service on highest level. I recommend it to all people, who love tasty meat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow">
                            <img src={auth2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">MEGAN KNIGHT</h5>
                                <p class="card-text">Love so much evening lounge music concert! It’s wonderful. But I’m vegetarian, so i don’t like meat, but there is a lot of salads and very tasty desserts, so i think everyone can find what to taste.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow">
                            <img src={auth3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> DOLORES FORD</h5>
                                <p class="card-text">Best service i’ve ever seen in Chicago. Very polite staff, beautiful serving and serving dishes. Love their burgers. At weekends they have special offers, that’s are very affordable for me and very tasty!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow">
                            <img src={auth4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> EMMY SNOW</h5>
                                <p class="card-text">Very wide range of salads to select, but i don’t like places, where people eat poor animals. But my boyfriend like steaks and beer. That place has very skilled staff and fantasitc salads. Desserts are also best.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow">
                            <img src={auth5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">FRANK STEWART</h5>
                                <p class="card-text">Me and my girlfriend are in love with this place. Here we met at first time and go here every week to taste awesome steaks and drink some beer, listening fantastic lounge music. Strongly recommend!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow">
                            <img src={auth6} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">ANGELA KELLY</h5>
                                <p class="card-text">Me and my friends like spend weekend evenings in the Restbeef. Relaxing lounge music, wide range wine card, perfect meat. What else people need after hard working week? Maybe just more action...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial  */}
            {/* contact  */}

            {/* contact  */}
        </div>
    );
};

export default HomePage;