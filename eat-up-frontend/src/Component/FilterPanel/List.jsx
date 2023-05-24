import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ListItem from './ListItem';

const List = ({list}) => {

  const location = useLocation();
  const [foodName, setFoodName] = useState(location.state.foodName);
  console.log("Food Name:", foodName);

  return (
    <div className='flex flex-wrap lg:gap-1 md:gap-2 justify-evenly'>
        {list.map(item=><ListItem key={item.id} item={item}/>)}
    </div>
  );
};

export default List;



// const [data, setData] = useState(null);
// useEffect(() => {
//   fetchData();
// }, []);
// const fetchData = async () => {
//   try {
//     const response = await fetch('https://eat-up.onrender.com/food');
//     const jsonData = await response.json();
//     setData(jsonData);

//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };