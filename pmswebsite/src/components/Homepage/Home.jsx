import React from 'react';
import './Home.css';
import PmsHomeSlider from './PmsHomeSlider';
import PmsNNMHouse from './PmsNNMHouse';
import PmsAboutUs from './PmsAboutUs';
import PmsKeyHighlights from './PmsKeyHighlights';
import PmsVisionMission from './PmsVisionMission';
import Fund from './Fund';
import WhyChooseUs from './WhyChooseUs';
import Team from './Team';

const Home = () => {

    return (
        <>
            <div className='pms-container'>
                <PmsHomeSlider/>
                <PmsNNMHouse/>
                <PmsAboutUs/>
                <PmsKeyHighlights/>
                <PmsVisionMission/>
                <Fund/>
                <WhyChooseUs/>
                <Team/>
            </div>

        </>
    );
};


export default Home;
