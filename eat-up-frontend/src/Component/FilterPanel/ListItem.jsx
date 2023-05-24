import React from 'react';

const ListItem = ({item:{coverSrc,title,price,deliveryFee,serviceTime,rating,foodType}}) => {
    return (
        <div className='mb-5 lg:w-80 md:w-52 w-52 '>
            <img src={coverSrc} alt='' className='mb-2 rounded-2xl lg:h-60 md:h-48 object-center object-cover'></img>
            <header className='flex justify-between m-1 items-center'>
                <h4>{title}</h4>
                <p><b> {foodType}</b></p>
                <span>{rating}★</span>
            </header>
            <footer className='flex justify-center items-center'>
                {/* <p><span>Delivery fee ${deliveryFee}</span></p>   */}
            </footer>
        </div>
    );
};

export default ListItem;