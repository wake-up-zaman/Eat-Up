import React from 'react';
import order from '../../Images/DeliveryProcess/order2.png'
import delivery from '../../Images/DeliveryProcess/delivery.jpg'
import location from '../../Images/DeliveryProcess/location.jpg'
import payment from '../../Images/DeliveryProcess/payment.jpg'

const DeliveryProcess = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-9/12'>
            <h4 className='text-center text-sm sm:text-xl'>Our Process</h4>
            <h2 className='text-center text-xl sm:text-3xl text-bolder'>Friendly & Intuitive System</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
                <div className='text-center w-full'>
                    <img src={order} alt='' className='h-36 w-full object-cover'></img>
                    <h5 className='text-sm uppercase mt-8'>Step 01</h5>
                    <h3 className='text-lg font-semibold mt-1'>Make an Online Order</h3>
                    <p className='text-sm text-center mt-8'>Sit back at home and order your<br></br> favorite fast food on our site.We will <br></br>take care the rest</p>
                </div>
                <div className='text-center'>
                    <img src={location} alt='' className='h-36 w-full object-cover'></img>
                    <h5 className='text-sm uppercase mt-8'>Step 02</h5>
                    <h3 className='text-lg font-semibold mt-1'>Enter Your Address</h3>
                    <p className='text-sm text-center mt-8'>Make Sure you enter your address<br></br> correctly so our shipper can find<br></br>you easily</p>
                </div>
                <div className='text-center'>
                    <img src={payment} alt='' className='h-36 w-full object-cover object-top'></img>
                    <h5 className='text-sm uppercase mt-8'>Step 03</h5>
                    <h3 className='text-lg font-semibold mt-1'>Pay For The Food</h3>
                    <p className='text-sm text-center mt-8'>The whole process will take you only<br></br> 20 minutes or less. Just wait and<br></br>enjoy the meal</p>
                </div>
                <div className='text-center'>
                    <img src={delivery} alt='' className='h-36 w-full object-cover'></img>
                    <h5 className='text-sm uppercase mt-8'>Step 04</h5>
                    <h3 className='text-lg font-semibold mt-1'>Fast Delivery</h3>
                    <p className='text-sm text-center mt-8'>After receiving your order,the food<br></br>will be served as fast as possible</p>
                </div>


            </div>
            </div>
           
        </div>
    );
};

export default DeliveryProcess;