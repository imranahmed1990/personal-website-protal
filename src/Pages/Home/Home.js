import React from 'react';
import AboutUs from './AboutUs';
import ClientsFeedback from './ClientsFeedback';
import Faqs from './Faqs';
import OurProjecs from './OurProjecs';
import Services from './Services';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <OurProjecs></OurProjecs>
            <ClientsFeedback></ClientsFeedback>
            <Faqs></Faqs>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;