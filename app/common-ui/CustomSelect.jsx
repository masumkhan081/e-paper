"use client"

import React, { useEffect, useRef, useState } from "react";
import { BsCaretDown } from "react-icons/bs";

const CustomSelect = ({ options, value, onChange }) => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block w-full" ref={dropdownRef}>
      {/* {JSON.stringify(options)} */}


      <div

        className="py-1 px-4 bg-blue-800  rounded-md  cursor-pointer flex items-center text-white"
        onClick={toggleDropdown}
      >
        <span>{value ? value : 'Select Catagory'}</span>
        <BsCaretDown className="w-1.5 h-1.5 ms-1" />

      </div>



      {isOpen ? (
        <ul className="absolute w-10.6 z-10 top-full text-black  border  rounded-md shadow   overflow-y-auto scrollbar bg-white max-h-60">
          {options?.map((option, index) => (<li
            key={index}
            className={`${value === option ? 'bg-primary' : "bg-white text-black"} py-2 px-4 cursor-pointer   hover:bg-blue-800 hover:text-white`}
            onClick={() => {
              onChange(option);
              setIsOpen(false);
            }}
          >
            {option}
          </li>
          )
          )}
        </ul>
      ) : null}
    </div>
  );
};

export default CustomSelect;
