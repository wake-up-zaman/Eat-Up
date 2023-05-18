import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FoodList = () => {
    // const location = useLocation();
    // console.log(location);
    // const [foodName,setFoodName] = useState(location.state.foodName);
    // console.log("Name from food list:",foodName);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await fetch('https://eat-up.onrender.com/food');
          const jsonData = await response.json();
          console.log("Foods: ",jsonData)
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
    return (
        <div>
            {/* <p>food list:{foodName}</p> */}
        </div>
    );
};

export default FoodList;