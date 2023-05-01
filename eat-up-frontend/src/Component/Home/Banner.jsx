import React from 'react';
import burger from '../../Images/burger.png';

const Banner = () => {
    return (
        <>
            <div className='bg-emerald-50 flex flex-col md:flex-row items-center h-full py-16 gap-5 px-4'>
                <div className='md:w-1/2 gap-6 flex flex-col justify-center items-center'>
                    <h1 className='text-5xl font-extrabold text-center z-10'>Discover Restaurants that deliver near you.</h1>
                    <div className='w-2/3 relative z-10'>
                        <input type="search" className="w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-full outline-none" placeholder="Enter Your Delivery Address" required>
                        </input>
                        <button className="rounded-full py-2 px-6 text-white absolute bg-red-600 top-1/2 -translate-y-1/2 mr-2 right-0 hover:text-red-600 hover:bg-white border border-red-600">Search</button>
                    </div>
                </div>
                <div className='md:w-1/2 w-3/4'>
                    <img src={burger} alt="" />
                </div>
            </div>
        </>
    );
};


export default Banner; 