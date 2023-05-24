import React from 'react';

const CheckedBox = ({ handleChangeChecked, cuisine }) => {
  const { checked, label, id } = cuisine;

  const handleCheckboxChange = () => {
    handleChangeChecked(id);
  };

  return (
    <div className="w-full flex justify-between items-center mb-2">
      <label className="text-sm font-medium flex justify-between w-full">
        <span className="ml-2">{label}</span>
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
          checked={checked}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
};

export default CheckedBox;
