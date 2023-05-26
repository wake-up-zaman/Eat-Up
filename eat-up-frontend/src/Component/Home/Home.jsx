import React from 'react';
import Banner from './Banner';
import DeliveryProcess from './DeliveryProcess';
import Food from './Food';
import Location from './Location';

const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <Banner></Banner>
           
            <Location />
            <Food></Food>
            <DeliveryProcess></DeliveryProcess>
              
            
        </div>
    );
};

export default Home;