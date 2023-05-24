import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import List from './List';
import Sidebar from './Sidebar';
import { dataList, categoryList, ratingList, locationList, foodList } from '../../Constants/Constants';
import filterPanelCover from './/../../Images/Cover/filterPanelCover.jpg'
import '../../Styles/Styles.css';
import EmptyView from './EmptyView';
import { useLocation } from 'react-router-dom';
import { IoFilterSharp } from "react-icons/io5";
import { IoIosArrowDropleftCircle, IoMdClose } from "react-icons/io";

const FilterPanel = () => {

    const location = useLocation();
    const [place, setPlace] = useState(location.state.place)
    const [food, setFood] = useState(location.state.foodName);

    const [initialCategory, setInitialCategory] = useState('');

    const [selectedPlace, setSelectedPlace] = useState(place);
    const [selectedDish, setSelectedDish] = useState();

    const [selectedRating, setSelectedRating] = useState(null)
    const [cuisines, setCuisines] = useState([
        { id: 1, checked: false, label: 'Pizza' },
        { id: 2, checked: false, label: 'Burger' },
        { id: 3, checked: false, label: 'Biryani' },
        { id: 4, checked: false, label: 'Chicken' },
        { id: 5, checked: false, label: 'Haleem' },
        { id: 6, checked: false, label: 'Steak' },
        { id: 7, checked: false, label: 'Chawmein' },
        { id: 8, checked: false, label: 'Sandwich' },
        { id: 9, checked: false, label: 'Italian' },
        { id: 10, checked: false, label: 'Dissert' },
    ]);

    useEffect(() => {
        setInitialCategory(place ? "place" : "dish");
        setSelectedPlace(place);
        setSelectedDish(food);
        handleChangeChecked(food);

        if (food) {
            const cuisinesStateList = cuisines;
            const changeCheckedCuisines = cuisinesStateList.map(item =>
                item.label === food ? { ...item, checked: !item.checked } : item);
            setCuisines(changeCheckedCuisines);

        }
    }, [place, food]);

    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        setSelectedCategory(initialCategory);
    }, [initialCategory]);

    const [value, setValue] = useState(5000);
    const [special, setSpecial] = useState(5000);
    const [list, setList] = useState(dataList);
    const [searchInput, setSearchInput] = useState('');
    const [resultFound, setResultFound] = useState(false);

    const handleToggleOfCategory = (value) => {
        setSelectedCategory(value === selectedCategory ? null : value);
    };

    const handleToggleOfRating = (value) => {
        setSelectedRating(value === selectedRating ? null : value);
    };
    const handleToggleOfPlace = (value) => {
        setSelectedPlace(value === selectedPlace ? null : value);
    };
    const handleToggleOfDish = (value) => {
        setSelectedDish(value === selectedDish ? null : value);
    };

    const handleChangeChecked = (id) => {
        if (id) {
            const cuisinesStateList = cuisines;
            const changeCheckedCuisines = cuisinesStateList.map(item =>
                item.id === id ? { ...item, checked: !item.checked } : item);
            setCuisines(changeCheckedCuisines);
        }
    }

    const handleChange = (event) => {
        const { value: newValue } = event.target;
        setValue(newValue);
        setSpecial(newValue);
    };

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    };

    const applyFilter = () => {

        //Rating Filter
        let updatedList = dataList;
        if (selectedRating) {
            updatedList = updatedList.filter(
                (item) => parseInt(item.rating) === parseInt(selectedRating));
            setList(updatedList);
        }

        //Location Filter
        if (selectedPlace) {
            updatedList = updatedList.filter(
                item => item.location === selectedPlace);
            setList(updatedList);
        }

        //Food Filter
        const cuisineChecked = cuisines
            .filter((item) => item.checked).map((item) => item.label.toLowerCase())

        if (cuisineChecked.length) {
            updatedList = updatedList.filter((item) =>
                cuisineChecked.includes(item.cuisine))
            setList(updatedList);
        };

        //Price Filter
        if (special) {
            const maxPrice = special;
            updatedList = updatedList.filter(item => item.price <= maxPrice);
            setList(updatedList);
        }

        // Search Filter
        if (searchInput) {
            updatedList = updatedList.filter(
                (item) =>
                    item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
                    -1
            );
            setList(updatedList);
        }

        !updatedList.length ? setResultFound(false) : setResultFound(true);

    }

    useEffect(() => {
        applyFilter();
    }, [selectedRating, selectedPlace, cuisines, special, searchInput]);

    const [display, setDisplay] = useState(false);


    return (
        <div className='flex flex-col lg:h-screen  lg:px-5 md:px-2 mt-20 position:relative'>
            <SearchBar value={searchInput} changeInput={handleSearchInput}></SearchBar>
            <div className='flex justify-center lg:hidden  items-center mt-2 mb-2 '>
                <button className='flex justify-center lg:hidden  items-center bg-teal-400 w-30 p-2 rounded-lg text-white ' onClick={() => setDisplay(!display)}>{display && <IoMdClose className='text-white w-10 h-6 font-bold px-1' />} {!display && <IoIosArrowDropleftCircle className='text-white w-10 h-6 font-bold px-1' />}<span>Filter</span></button>
            </div>
            {display && <div className='px-2 lg:hidden inline w-full'>
                    <Sidebar
                        categoryList={categoryList}
                        selectedCategory={selectedCategory}
                        handleToggleOfCategory={handleToggleOfCategory}
                        foodList={foodList}
                        selectedDish={selectedDish}
                        handleToggleOfDish={handleToggleOfDish}
                        locationList={locationList}
                        selectedPlace={selectedPlace}
                        handleToggleOfPlace={handleToggleOfPlace}
                        ratingList={ratingList}
                        selectedRating={selectedRating}
                        handleToggleOfRating={handleToggleOfRating}
                        cuisines={cuisines}
                        handleChangeChecked={handleChangeChecked}
                        special={special}
                        value={value}
                        handleChange={handleChange}
                    ></Sidebar>
                </div>}
            <div className='lg:px-8 md:px-2 flex w-full overflow-y-auto mt-4 gap-6'>
                <div className='px-2 lg:inline lg:w-1/4 md:hidden md:w-[400px] hidden overflow-y-auto'>
                    
                    <Sidebar
                        categoryList={categoryList}
                        selectedCategory={selectedCategory}
                        handleToggleOfCategory={handleToggleOfCategory}
                        foodList={foodList}
                        selectedDish={selectedDish}
                        handleToggleOfDish={handleToggleOfDish}
                        locationList={locationList}
                        selectedPlace={selectedPlace}
                        handleToggleOfPlace={handleToggleOfPlace}
                        ratingList={ratingList}
                        selectedRating={selectedRating}
                        handleToggleOfRating={handleToggleOfRating}
                        cuisines={cuisines}
                        handleChangeChecked={handleChangeChecked}
                        special={special}
                        value={value}
                        handleChange={handleChange}
                    ></Sidebar>
                </div>
                <div className='px-3 lg:w-3/4 md:w-full overflow-y-auto'>
                <h2 className='mb-3 text-teal-400 font-bold text-xl'>Total Restaurants Found: {list.length}</h2>
                    {resultFound ? <List list={list}></List> : <EmptyView />}
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;

//<div>
//<img src={filterPanelCover} alt="" className='w-full h-48 object-cover object-top'></img>
//</div> 