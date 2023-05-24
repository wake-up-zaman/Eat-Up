import React from 'react';

const Footer = () => {
    return (
        <div className='mt-12 z-0 sm:mt-20'>
            <div className='sm:flex justify-between sm:items-center flex-wrap p-4'>
                <p className='text-3xl font-bold'>Connect with us</p>
                <div className='flex sm:pt-0 pt-4'>
                    <i className="fa-brands fa-facebook-f p-4 border border-solid cursor-pointer hover:text-teal-400"></i>
                    <i className="fa-brands fa-twitter p-4 border border-solid cursor-pointer hover:text-teal-400"></i>
                    <i className="fa-brands fa-instagram p-4 border border-solid cursor-pointer hover:text-teal-400"></i>
                    <i className="fa-brands fa-youtube p-4 border border-solid cursor-pointer hover:text-teal-400"></i>
                    <i className="fa-brands fa-linkedin p-4 border border-solid cursor-pointer hover:text-teal-400"></i>
                </div>
            </div>
            <hr/>
            <div className='sm:flex justify-evenly gap-x-24 lg:gap-40 flex-wrap px-8 my-2'>
                <div>
                    <p className='font-bold  py-2 text-sm'>More About Eat-Up</p>
                    <p className=' text-sm py-2 cursor-pointer hover:text-teal-400'>Who we are</p>
                    <p className=' text-sm py-2 cursor-pointer hover:text-teal-400'>What we do</p>
                    <p className=' text-sm py-2 cursor-pointer hover:text-teal-400'>Our Values</p>
                    <p className=' text-sm py-2 cursor-pointer hover:text-teal-400'>Leadership</p>
                </div>    
                <div>
                    <p className='font-bold py-2 text-sm'>Can we help?</p>
                    <p className=' text-sm py-2 cursor-pointer hover:text-teal-400'>Job Search for Professionals</p>
                    <p className=' text-sm py-2 cursor-pointer hover:text-teal-400'>Eat-Up Social Media</p>
                    <p className=' text-sm py-2 cursor-pointer hover:text-teal-400'>Eat-Up Apps</p>
                    <p className=' text-sm py-2 cursor-pointer hover:text-teal-400'>Eat-Up Global Helpline</p>
                </div>    
                <div>
                    <p className='font-bold py-2 text-sm'>Site Information</p>
                    <p className=' text-sm py-2 cursor-pointer hover:text-teal-400'>Accessibilty</p>
                    <p className=' text-sm py-2 cursor-pointer hover:text-teal-400'>Terms and Conditions</p>
                    <p className=' text-sm py-2 cursor-pointer hover:text-teal-400'>Privacy Notices</p>
                    <p className=' text-sm py-2 cursor-pointer hover:text-teal-400'>Contact Us</p>
                </div>    
            </div>
            <hr />
        </div>
    );
};


export default Footer;