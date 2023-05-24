import React, { useState } from 'react';
import FilterListToggle from './FilterListToggle';
import PlaceLocationListToggle from './PlaceLocationListToggle';
import CheckedBox from './CheckedBox';
import PriceSlider from './PriceSlider';

const Sidebar = (
    { categoryList,
        selectedCategory,
        handleToggleOfCategory,
        foodList,
        selectedDish,
        handleToggleOfDish,
        locationList,
        selectedPlace,
        handleToggleOfPlace,
        ratingList,
        selectedRating,
        handleToggleOfRating,
        cuisines,
        handleChangeChecked,
        value,
        handleChange,
        special
    }) => {


    return (
        <div className='md:w-full position:absolute top-48'>
            <div>
                <p className='text-teal-500 font-bold'>Category</p>
                <p className='w-full bg-slate-300 h-0.5 mb-2 mt-2'></p>
                <FilterListToggle
                    list={categoryList}
                    selectedList={selectedCategory}
                    handleSelectToggle={handleToggleOfCategory}
                ></FilterListToggle>
            </div>
            <div className='mt-5 mb-4 '>
                {selectedCategory === "dish" &&
                    <div>
                        <p className=' text-teal-500 font-bold'>Filter By Cuisine</p>
                        <p className='w-full bg-slate-300 h-0.5 mb-2 mt-2'></p>
                        {cuisines.map(cuisine =>
                            <CheckedBox
                                key={cuisine.id}
                                cuisine={cuisine}
                                handleChangeChecked={handleChangeChecked}
                            >
                            </CheckedBox>)}
                    </div>
                }
                {selectedCategory === "place" &&
                    <div>
                        <p className=' text-teal-500 font-bold'>Filter By Location</p>
                        <p className='w-full bg-slate-300 h-0.5 mb-2 mt-2'></p>
                        <PlaceLocationListToggle
                            list={locationList}
                            selectedList={selectedPlace}
                            handleSelectToggle={handleToggleOfPlace}
                        ></PlaceLocationListToggle>
                    </div>

                }


            </div>

            <div className='mt-5'>
                <p className=' text-teal-500 font-bold'>Restaurant's Price Range</p>
                <p className='w-full bg-slate-300 h-0.5 mb-2 mt-2'></p>
                <PriceSlider 
                value={value} 
                handleChangedPrice={handleChange}
                special={special}></PriceSlider>
                
            </div>

            <div className='mt-5'>
                <p className=' text-teal-500 font-bold'>Star Rating</p>
                <p className='w-full bg-slate-300 h-0.5 mb-2 mt-2'></p>
                <FilterListToggle
                    list={ratingList}
                    selectedList={selectedRating}
                    handleSelectToggle={handleToggleOfRating}
                ></FilterListToggle>
            </div>
        </div>
    );
};

export default Sidebar;
