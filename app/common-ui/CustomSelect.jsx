"use client"

import React, { useEffect, useRef, useState } from "react";
import { BsCaretDown } from "react-icons/bs";

const CustomSelect = ({ options, value, onChange, bg }) => {

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

  const styles = {
    "light": "bg-slate-300 text-black border border-slate-500",
    "blue": "bg-blue-700 text-white"
  }

  return (
    <div className="relative " ref={dropdownRef}>

      <div
        className={`py-1 px-4 min-w-[110px] rounded-md capitalize cursor-pointer flex justify-between items-center ${styles[bg]}`}
        onClick={toggleDropdown}
      >
        <span>{value ? value : 'Select Catagory'}</span>
        <BsCaretDown className="w-[1.2rem] h-[1.2rem] ms-1" />
      </div>

      {isOpen ? (
        <ul className="absolute w-10.6 z-10 top-full text-black  border  rounded-md shadow   overflow-y-auto scrollbar bg-white max-h-60">
          {options?.map((option, index) => (<li
            key={index}
            className={`${value === option ? 'bg-primary' : "bg-white text-black"} capitalize py-2 px-4 cursor-pointer   hover:bg-blue-800 hover:text-white`}
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
