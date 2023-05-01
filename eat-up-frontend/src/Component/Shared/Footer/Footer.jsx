import React from 'react';

const Footer = () => {
    return (
        <div className='py-16'>
            <div className='sm:flex justify-between sm:items-center flex-wrap p-8'>
                <h1 className='text-4xl font-bold'>Connect with us</h1>
                <div className='flex sm:pt-0 pt-4'>
                    <i className="fa-brands fa-facebook-f p-4 border border-solid cursor-pointer hover:text-teal-400"></i>
                    <i className="fa-brands fa-twitter p-4 border border-solid cursor-pointer hover:text-teal-400"></i>
                    <i className="fa-brands fa-instagram p-4 border border-solid cursor-pointer hover:text-teal-400"></i>
                    <i className="fa-brands fa-youtube p-4 border border-solid cursor-pointer hover:text-teal-400"></i>
                    <i className="fa-brands fa-linkedin p-4 border border-solid cursor-pointer hover:text-teal-400"></i>
                </div>
            </div>
            <hr/>
            <div className='sm:flex justify-start gap-x-24 lg:gap-40 flex-wrap px-8 my-2'>
                <div>
                    <h1 className='font-bold py-2 text-xl'>More About Eat-Up</h1>
                    <h1 className='font-semibold py-2 cursor-pointer hover:text-teal-400'>Who we are</h1>
                    <h1 className='font-semibold py-2 cursor-pointer hover:text-teal-400'>What we do</h1>
                    <h1 className='font-semibold py-2 cursor-pointer hover:text-teal-400'>Our Values</h1>
                    <h1 className='font-semibold py-2 cursor-pointer hover:text-teal-400'>Leadership</h1>
                </div>    
                <div>
                    <h1 className='font-bold py-2 text-xl'>Can we help?</h1>
                    <h1 className='font-semibold py-2 cursor-pointer hover:text-teal-400'>Job Search for Professionals</h1>
                    <h1 className='font-semibold py-2 cursor-pointer hover:text-teal-400'>Eat-Up Social Media</h1>
                    <h1 className='font-semibold py-2 cursor-pointer hover:text-teal-400'>Eat-Up Apps</h1>
                    <h1 className='font-semibold py-2 cursor-pointer hover:text-teal-400'>Eat-Up Global Helpline</h1>
                </div>    
                <div>
                    <h1 className='font-bold py-2 text-xl'>Site Information</h1>
                    <h1 className='font-semibold py-2 cursor-pointer hover:text-teal-400'>Accessibilty</h1>
                    <h1 className='font-semibold py-2 cursor-pointer hover:text-teal-400'>Terms and Conditions</h1>
                    <h1 className='font-semibold py-2 cursor-pointer hover:text-teal-400'>Privacy Notices</h1>
                    <h1 className='font-semibold py-2 cursor-pointer hover:text-teal-400'>Contact Us</h1>
                </div>    
            </div>
            <hr />
        </div>
    );
};


export default Footer;