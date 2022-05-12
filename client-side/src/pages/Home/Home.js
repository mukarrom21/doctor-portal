import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeApoinment from './MakeApoinment';
import Services from './Services';
import YourTerms from './YourTerms';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services/>
            <YourTerms></YourTerms>
            <MakeApoinment></MakeApoinment>
        </div>
    );
};

export default Home;