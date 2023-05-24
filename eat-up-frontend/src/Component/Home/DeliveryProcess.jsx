import React from 'react';
import order from '../../Images/DeliveryProcess/order2.png'
import delivery from '../../Images/DeliveryProcess/delivery.jpg'
import location from '../../Images/DeliveryProcess/location.jpg'
import payment from '../../Images/DeliveryProcess/payment.jpg'


const DeliveryProcess = () => {
    const data = [
        {
            'img_id': order,
            'title': 'Make an Online Order',
            'des': 'Sit back at home and order your favorite fast food on our site.We will take care the rest'
        },
        {
            'img_id': payment,
            'title': 'Pay For The Food',
            'des': 'The whole process will take you only 20 minutes or less. Just wait and enjoy the meal'
        },
        {
            'img_id': location,
            'title': 'Enter Your Address',
            'des': 'Make Sure you enter your address correctly so our shipper can find you easily'
        },
        {
            'img_id': delivery,
            'title': 'Fast Delivery',
            'des': 'After receiving your order,the food will be served as fast as possible'
        }
    ]
    return (
       
        <div className='w-9/12 m-auto mt-8'>
           
            <h4 className='text-center uppercase sm:text-xl text-lg mb-1 text-bolder'>Our Process</h4>
            <h2 className='text-center sm:uppercase sm:text-2xl text-xl mb-8 text-bolder'>Friendly & Intuitive System</h2>
            <div className="flex gap-5 justify-center flex-wrap">
            {
                data.map((d, index) => (
                    <div className='text-center w-52 h-80 sm:w-64 sm:h-96    '>
                        <div className='h-1/2 p-1'><img src={d.img_id} alt='' className='h-full w-full object-cover'></img></div>
                        <h5 className='text-sm uppercase sm:mt-8'>Step 0{index+1}</h5>
                        <h3 className='text-lg font-semibold sm:mt-1'>{d.title}</h3>
                        <p className='text-sm text-center sm:mt-8'>{d.des}</p>
                    </div>
                ))
            }
            </div>
        </div>


    );
};


export default DeliveryProcess;

