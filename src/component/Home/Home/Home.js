import React from 'react';
import Contact from '../../Contact/Contact';
import Navigation from '../../Sahred/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import HomePage from './HomePage';

const Home = () => {
    return (
        <div>

            {/* <homePage></homePage> */}
            <Banner></Banner>
            <Services></Services>

            <HomePage></HomePage>
            <Contact></Contact>




        </div>
    );
};

export default Home;