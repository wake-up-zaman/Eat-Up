import React, { useEffect, useState } from 'react';
import burger from '../../Images/burger.png';
import axios from 'axios';
const Banner = () => {

    const [items, setItems] = useState('');
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const loadItem = async () => {
            const response = await axios.get('https://eat-up.onrender.com/restaurant');
            setItems(response.data);
        }
        loadItem();
    }, [])

    console.log(items);

    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = items.filter(item => {
                console.log(item)
                const regex = new RegExp(`${text}`, 'gi');
                return item.name.match(regex)
            })
        }
        console.log('Matches: ', matches)
        setSuggestions(matches)
        setText(text);
    }

    const onSuggestionHandler = (text) => {
        setText(text)
        setSuggestions([])
    }
    return (
        <>
            <div className='bg-emerald-50 flex flex-col md:flex-row items-center h-full w-full py-16 gap-5 px-4'>
                <div className='md:w-1/2 gap-6 flex flex-col justify-center items-center relative'>
                    <p className='text-center uppercase sm:text-2xl text-4xl mb-4 text-bolder'>Discover Restaurants that deliver near you.</p>
                    <div className='w-2/3 relative z-10'>
                        <input
                            className="w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-full outline-none"
                            placeholder="Enter Your Favorite Restaurant Name"
                            type="text"
                            onChange={(e) => onChangeHandler(e.target.value)}
                            value={text}
                            name="From"
                            autoComplete="off"
                            required>
                        </input>
                        <button className="rounded-full py-2 px-6 text-white absolute bg-red-600 top-1/2 -translate-y-1/2 mr-2 right-0 hover:text-red-600 hover:bg-white border border-red-600">Search</button>
                    </div>
                    <div className="from-text bg-teal-400 text-black  absolute top-36 left-44 rounded-lg">
                        {suggestions &&
                            suggestions.slice(0, 10).map((suggestion, i) => (
                                <div
                                    onClick={() => onSuggestionHandler(suggestion.name)}
                                    className="py-1 px-20 border-b hover:text-white hover:font-semibold"
                                    key={i}
                                >
                                    <span></span>{suggestion.name}
                                </div>
                            ))}
                    </div>
                </div>
                <div className='md:w-1/2 w-3/4'>
                    <img src={burger} alt="" />
                </div>
            </div>
        </>
    );
};


export default Banner; 