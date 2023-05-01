import React, { useState } from 'react'
import logo from '../../../Images/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const Links = [
        {name: "Home", link: '/'},
        {name: "Service", link: '/service'},
        {name: "About", link: '/about'},
        {name: "Contact", link: '/contact'}
    ]
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState(5);
    const location = useLocation();

    return (

    <div className='shadow-xl shadow-teal-400/20 w-full fixed top-0 left-0 md:px-0 px-8 bg-white z-50'>
        <div className='flex md:w-9/12 m-auto items-center justify-between bg-white py-1'>
            <Link to='/'><img src={logo} className='h-10' alt='Logo'/></Link>
      
            <div onClick={()=>setOpen(!open)} className='absolute right-32 top-3 mr-2 cursor-pointer md:hidden text-teal-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            <ul className={`md:flex absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 ':'top-[-150px]'}`}>
            {
                Links.map((link) => (
                    <Link to={link.link} key={link.name} className='md:px-4  md:my-0 my-7 font-semibold'><li className={`text-gray-800 hover:text-red-500 duration-500 ${location.pathname === link.link ? 'text-teal-500' : ''}`}>{link.name}</li></Link>
                ))
            }
            </ul>
            <div className='relative flex gap-4'>
                <Link to='/login' className={`text-gray-800 hover:text-red-500 font-semibold duration-500 ${location.pathname === '/login' ? 'text-teal-500' : ''}`}>LOGIN</Link>
                <Link to='/home' className='text-teal-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg></Link>
                {item ? <h1 className='absolute right-0 bottom-0 -mr-4 mb-3 bg-teal-500 rounded-full px-2 text-sm text-white'>{item}</h1> : <></>}
            </div>
        </div>
    </div>
    );
};

export default Navbar;