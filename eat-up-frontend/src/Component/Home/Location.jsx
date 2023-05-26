import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';

import agargaon from '../../Images/Locations/agargaon.jpg'
import airport from '../../Images/Locations/Airport.jpg'
import badda from '../../Images/Locations/badda.jpg'
import dhanmondi from '../../Images/Locations/Dhanmondi.jpg'
import gulshan from '../../Images/Locations/gulshan.jpg'
import khilkhet from '../../Images/Locations/khilkhet.jpg'
import mirpur from '../../Images/Locations/mirpur.jpg'
import mohakhali from '../../Images/Locations/mohakhali.jpg'
import old_dhaka from '../../Images/Locations/old_dhaka.jpg'
import uttara from '../../Images/Locations/uttara.jpg'
import { useState } from 'react';

export default Location = () => {
    const places = [
        'Uttara', 'Airport', 'Khilkhet', 'Mirpur', 'Banani', 'Gulshan', 'Mohakhali', 'Agargaon', 'Old Dhaka', 'Dhanmondi'
    ]
    const img = [uttara, airport, khilkhet, mirpur, badda, gulshan, mohakhali, agargaon, old_dhaka, dhanmondi]
    const [placeName, setPlaceName] = useState()
    const navigate = useNavigate();
    const handleLocation = (place) => {
        setPlaceName(place)
        navigate('/filterPanel', { state: { place } });
    };

    return (
        <>
            <h1 className="text-center uppercase sm:text-2xl text-xl text-bolder">Select the place where you want to pick or deliver</h1>
            <div className="flex flex-wrap justify-center p-2 w-full gap-0 lg:gap-2 xl-gap-4">
                {
                    places.map((place, index) => (
                        <div onClick={()=>handleLocation(place)} className="group lg:w-1/6 md:w-1/4 w-1/2 aspect-square relative p-2 lg:m-0 overflow-hidden cursor-pointer">
                            <img src={img[index]} alt="location image" className="w-full h-full object-cover rounded-lg" />
                            <h1 className="absolute text-rose-400 font-extrabold text-9xl bottom-2 -left-32 group-hover:left-2 duration-500 ease-out">{place[0]}</h1>
                            <h1 className='absolute bottom-2 text-white px-2 font-bold text-3xl bg-black'>{place}</h1>
                        </div>
                    ))
                }
            </div>
        </>
    );
}