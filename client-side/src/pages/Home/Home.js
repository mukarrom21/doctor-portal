import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import CustomersReview from './CustomersReview';
import Info from './Info';
import MakeApoinment from './MakeApoinment';
import Services from './Services';
import Testimonial from './Testimonial ';
import YourTerms from './YourTerms';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services/>
            <YourTerms></YourTerms>
            <MakeApoinment></MakeApoinment>
            <Testimonial></Testimonial>
            <CustomersReview></CustomersReview>
            <Contact></Contact>
        </div>
    );
};

export default Home;