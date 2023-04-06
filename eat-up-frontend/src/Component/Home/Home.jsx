import React from 'react';
import Banner from './Banner';
import DeliveryProcess from './DeliveryProcess';
import Food from './Food';

const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <Banner></Banner>
            <Food></Food>
            <DeliveryProcess></DeliveryProcess>
              
            
        </div>
    );
};

export default Home;