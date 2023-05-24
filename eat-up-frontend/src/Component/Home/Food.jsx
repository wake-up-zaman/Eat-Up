import React, { useState } from 'react';
import biryani from '../../Images/FoodItems/biriyani.jpg';
import burger from '../../Images/FoodItems/burger-2.jpeg';
import chicken from '../../Images/FoodItems/chicken.jpg';
import steak from '../../Images/FoodItems/steak.jpeg';
import pizza from '../../Images/FoodItems/pizza.jpg';
import chowMein from '../../Images/FoodItems/chowMein.jpg';
import haleem from '../../Images/FoodItems/Haleem.jpg';
import sandwich from '../../Images/FoodItems/sandwich-3.jpeg';
import salmon from '../../Images/FoodItems/salmon2.jpg';
import soup from '../../Images/FoodItems/soup2.jpg'
import { useNavigate } from 'react-router-dom';


const Food = () => {
    const [foodName, setFoodName] = useState("");
    console.log(foodName);

    const navigate = useNavigate();
    const handleSearch = () => {
        navigate("/filterPanel", { state: { foodName } });
    };


    return (
        <section className="mb-1 sm:p-16 p-3">
            <h2 className='text-center uppercase sm:text-2xl text-xl mb-4 text-bolder'>Explore The Most Popular Dishes</h2>
            <div className="grid sm:grid-rows-2 sm:grid-cols-5 gap-2">
                <div
                    onMouseEnter={() => setFoodName("Pizza")}
                    onMouseLeave={() => setFoodName("null")}
                    className="row-span-full col-span-2 flex rounded-lg group relative cursor-pointer items-center justify-center  overflow-hidden transition-shadow">
                    <img className="h-full w-full object-cover transition-transform duration-500" src={pizza} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/10 group-hover:via-black/30 group-hover:to-black/50"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <p className='sm:mb-1 md:mb-1 mb-1 xl:text-xl lg:text-lg md:text-sm text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Pizza</p>
                        <button onClick={handleSearch} className="rounded-full bg-white xl:py-2 xl:px-3.5 lg:py-1 lg:px-2 md:py-1 md:px-2 sm:py-1 sm:px-2 py-1 px-3 font-com xl:text-base  md:text-xs text-sm capitalize text-black shadow shadow-black/60">Explore <span className='hidden md:hidden lg:inline xl:inline'>More</span></button>
                    </div>
                </div>
                <div
                    onMouseEnter={() => setFoodName("Chicken")}
                    onMouseLeave={() => setFoodName("null")}
                    className="flex rounded-lg group relative cursor-pointer items-center justify-center  overflow-hidden transition-shadow">

                    <img className="h-full w-full object-cover transition-transform duration-500" src={chicken} alt="" />

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/10 group-hover:via-black/30 group-hover:to-black/50"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <p className='sm:mb-1 md:mb-1 mb-1 xl:text-lg lg:text-lg md:text-sm text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Fried Chicken</p>
                        <button onClick={handleSearch} className="rounded-full bg-white xl:py-2 xl:px-3.5 lg:py-1 lg:px-2 md:py-1 md:px-2 sm:py-1 sm:px-2 py-1 px-3  font-com md:text-xs text-sm capitalize text-black shadow shadow-black/60">Explore <span className='hidden md:hidden lg:inline xl:inline'>More</span></button>
                    </div>
                </div>
                <div
                    onMouseEnter={() => setFoodName("Biryani")}
                    onMouseLeave={() => setFoodName("null")}

                    className=" row-span-2 col-span-1 flex rounded-lg group relative cursor-pointer items-center justify-center  overflow-hidden transition-shadow">
                    <img className="h-full w-full object-cover transition-transform duration-500" src={biryani} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/10 group-hover:via-black/30 group-hover:to-black/50"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <p className='sm:mb-1 md:mb-1 mb-1 xl:text-lg lg:text-lg md:text-sm text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Biryani</p>
                        <button onClick={handleSearch} className="rounded-full bg-white xl:py-2 xl:px-3.5 lg:py-1 lg:px-2 md:py-1 md:px-2 sm:py-1 sm:px-2 py-1 px-3 font-com md:text-xs text-sm capitalize text-black shadow shadow-black/60">Explore <span className='hidden md:hidden lg:inline xl:inline'>More</span></button>
                    </div>
                </div>
                <div
                    onMouseEnter={() => setFoodName("Sandwich")}
                    onMouseLeave={() => setFoodName("null")}
                    className="flex rounded-lg group relative cursor-pointer items-center justify-center  overflow-hidden transition-shadow">

                    <img className="h-full w-full object-cover transition-transform duration-500" src={sandwich} alt="" />

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/10 group-hover:via-black/30 group-hover:to-black/50"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                        <p className='sm:mb-1 md:mb-1 mb-1 xl:text-lg lg:text-lg md:text-sm text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Sandwich</p>
                        <button onClick={handleSearch} className="rounded-full bg-white xl:py-2 xl:px-3.5 lg:py-1 lg:px-2 md:py-1 md:px-2 sm:py-1 sm:px-2 py-1 px-3 font-com  md:text-xs text-sm capitalize text-black shadow shadow-black/60">Explore <span className='hidden md:hidden lg:inline xl:inline'>More</span></button>
                    </div>
                </div>
                <div
                    onMouseEnter={() => setFoodName("Haleem")}
                    onMouseLeave={() => setFoodName("null")}
                    className="row-span-2 col-span-1 flex rounded-lg group relative cursor-pointer items-center justify-center  overflow-hidden transition-shadow">
                    <img className="h-full w-full object-cover transition-transform duration-500" src={haleem} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/10 group-hover:via-black/30 group-hover:to-black/50"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <p className='sm:mb-1 md:mb-1 mb-1 xl:text-lg lg:text-lg md:text-sm text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Haleem</p>
                        <button onClick={handleSearch} className="rounded-full bg-white xl:py-2 xl:px-3.5 lg:py-1 lg:px-2 md:py-1 md:px-2 sm:py-1 sm:px-2 py-1 px-3 font-com md:text-xs text-sm  capitalize text-black shadow shadow-black/60">Explore <span className='hidden md:hidden lg:inline xl:inline'>More</span></button>
                    </div>
                </div>
                <div
                    onMouseEnter={() => setFoodName("Steak")}
                    onMouseLeave={() => setFoodName("null")}
                    className="flex rounded-lg group relative cursor-pointer items-center justify-center  overflow-hidden transition-shadow">
                    <img className="h-full w-full object-cover transition-transform duration-500" src={steak} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/10 group-hover:via-black/30 group-hover:to-black/50"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <p className='sm:mb-1 md:mb-1 mb-1 xl:text-lg lg:text-lg md:text-sm text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Steak</p>
                        <button onClick={handleSearch} className="rounded-full bg-white xl:py-2 xl:px-3.5 lg:py-1 lg:px-2 md:py-1 md:px-2 sm:py-1 sm:px-2 py-1 px-3 font-com md:text-xs text-sm capitalize text-black shadow shadow-black/60">Explore <span className='hidden md:hidden lg:inline xl:inline'>More</span></button>
                    </div>
                </div>
                <div
                    onMouseEnter={() => setFoodName("Burger")}
                    onMouseLeave={() => setFoodName("null")}
                    className="flex rounded-lg group relative cursor-pointer items-center justify-center  overflow-hidden transition-shadow">
                    <img className="h-full w-full object-cover transition-transform duration-500" src={burger} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/10 group-hover:via-black/30 group-hover:to-black/50"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <p className='sm:mb-1 md:mb-1 mb-1 xl:text-lg lg:text-lg md:text-sm text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Burger</p>
                        <button onClick={handleSearch} className="rounded-full bg-white xl:py-2 xl:px-3.5 lg:py-1 lg:px-2 md:py-1 md:px-2 sm:py-1 sm:px-2 py-1 px-3 font-com md:text-xs  text-sm capitalize text-black shadow shadow-black/60">Explore <span className='hidden md:hidden lg:inline xl:inline'>More</span></button>
                    </div>
                </div>
                <div
                    onMouseEnter={() => setFoodName("Salmon")}
                    onMouseLeave={() => setFoodName("null")}
                    className="flex rounded-lg group relative cursor-pointer items-center justify-center  overflow-hidden transition-shadow">
                    <img className="h-full w-full object-cover transition-transform duration-500" src={salmon} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/10 group-hover:via-black/30 group-hover:to-black/50"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <p className='sm:mb-1 md:mb-1 mb-1 xl:text-lg lg:text-lg md:text-sm text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Salmonish</p>
                        <button onClick={handleSearch} className="rounded-full bg-white xl:py-2 xl:px-3.5 lg:py-1 lg:px-2 md:py-1 md:px-2 sm:py-1 sm:px-2 py-1 px-3 font-com md:text-xs text-sm capitalize text-black shadow shadow-black/60">Explore <span className='hidden md:hidden lg:inline xl:inline'>More</span></button>
                    </div>
                </div>
                <div
                    onMouseEnter={() => setFoodName("Thai Soup")}
                    onMouseLeave={() => setFoodName("null")}
                    className="flex rounded-lg group relative cursor-pointer items-center justify-center  overflow-hidden transition-shadow">
                    <img className="h-full w-full object-cover transition-transform duration-500" src={haleem} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/10 group-hover:via-black/30 group-hover:to-black/50"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <p className='sm:mb-1 md:mb-1 mb-1 xl:text-lg lg:text-lg md:text-sm text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Thai Soup</p>
                        <button onClick={handleSearch} className="rounded-full bg-white xl:py-2 xl:px-3.5 lg:py-1 lg:px-2 md:py-1 md:px-2 sm:py-1 sm:px-2 py-1 px-3 font-com md:text-xs text-sm capitalize text-black shadow shadow-black/60">Explore <span className='hidden md:hidden lg:inline xl:inline'>More</span></button>
                    </div>
                </div>
                <div
                    onMouseEnter={() => setFoodName("ChowMein")}
                    onMouseLeave={() => setFoodName("null")}
                    className="flex rounded-lg group relative cursor-pointer items-center justify-center  overflow-hidden transition-shadow">
                    <img className="hidden sm:inline h-full w-full object-cover transition-transform duration-500" src={chowMein} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/10 group-hover:via-black/30 group-hover:to-black/50"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <p className='sm:mb-1 md:mb-1 mb-1 xl:text-lg lg:text-lg md:text-sm text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Chawmein</p>
                        <button onClick={handleSearch} className="rounded-full bg-white xl:py-2 xl:px-3.5 lg:py-1 lg:px-2 md:py-1 md:px-2 sm:py-1 sm:px-2 py-1 px-3 font-com md:text-xs text-sm capitalize text-black shadow shadow-black/60">Explore <span className='hidden md:hidden lg:inline xl:inline'>More</span></button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Food;