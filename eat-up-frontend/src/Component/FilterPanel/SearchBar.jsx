import React from 'react';
import { BsSearch } from "react-icons/bs";
const SearchBar = ({ value, changeInput }) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='lg:w-1/4'>
        <p></p>
      </div>
      <div className='lg:w-3/4 md:w-1/2 flex justify-center items-center '>
        <div className='flex justify-center items-center rounded-xl border-neutral-300 border px-3 lg:w-1/3 md:w-full'>
          <BsSearch className='h-5 w-6 px-1' />
          <input
            className='outline-none p-3 placeholder-gray w-full'
            type='text'
            placeholder='Enter your desire restaurant name'
            value={value}
            onChange={changeInput}
          ></input>
        </div>
      </div>
    </div>
  );
};


export default SearchBar;