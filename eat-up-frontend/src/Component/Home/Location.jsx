import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import dhaka from '../../Images/Locations/dhaka.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default Location = () => {
    const places = [
        'Uttara', 'Airport', 'Khilkhet', 'Mirpur', 'Badda', 'Gulshan', 'Mohakhali', 'Agargaon', 'Old Dhaka', 'Jatrabari', 'ECB', 'Rampura', 'Banani', 'Tejgaon', 'Dhanmondi'
    ]
    return (
        <>
            <h1 className="text-black font-extrabold md:text-5xl text-3xl text-center p-16">Select the place where you want to pick or delivery</h1>
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={25}
                slidesPerView={'auto'}
                navigation
                loop= {true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                {
                    places.map((place) => (
                        <SwiperSlide className="swiper-slide relative mb-10">
                            <div className="swiper-slide-image w-44 h-44">
                                <img src={dhaka} alt={place} className=" w-full h-full object-cover" />
                            </div>
                            <h1 className="absolute text-white font-extrabold text-3xl bottom-1 w-full text-center">{place}</h1>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <style jsx>{`  
                .swiper-slide-active, .swiper-slide-next, .swiper-slide{
                    width: fit-content;
                }   
            `}</style>
        </>
      );
}