import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const FoodList = () => {
    const location = useLocation();
    console.log(location);
    const [foodName,setFoodName] = useState(location.state.foodName);
    console.log("Name from food list:",foodName);
    
    return (
        <div>
            <p>food list:{foodName}</p>
        </div>
    );
};

export default FoodList;