import React from 'react';

const FilterListToggle = ({ list, selectedList, handleSelectToggle }) => {
  return (
    <div className="flex w-full justify-between gap-3">
      {list.map(({ label, id, value }) => (
        <button
          key={id}
          className={`border ${
            selectedList === value ? 'bg-teal-500 text-white rounded-lg h-10  w-28' : 'rounded-lg h-10  w-28'
          }`}
          onClick={() => handleSelectToggle(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FilterListToggle;
