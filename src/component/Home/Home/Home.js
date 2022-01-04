import React from 'react';
import Navigation from '../../Sahred/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import HomePage from './HomePage';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomePage></HomePage>
            <Banner></Banner>
            <Services></Services>


        </div>
    );
};

export default Home;