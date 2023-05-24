import React from 'react';

const PlaceLocationListToggle = ({ list, selectedList, handleSelectToggle }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-evenly">
      {list.map(({ label, id, value }) => (
        <button
          key={id}
          className={`border text-sm ${
            selectedList === value ? 'bg-teal-500 text-white rounded-lg h-10   p-2' : 'rounded-lg h-10   p-2'
          }`}
          onClick={() => handleSelectToggle(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default PlaceLocationListToggle ;