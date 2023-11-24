import React, { useRef, useEffect, useState } from 'react'
import { ViewContext } from '../context/Provider';
import CustomButton from '../common-ui/CustomButton';

import { TiThMenu } from "react-icons/ti";
import { FaSearch, FaFileArchive } from 'react-icons/fa'
import CustomSelect from '../common-ui/CustomSelect';
import CustomInput from '../common-ui/CustomInput';


export default function Menu({ bg, value }) {

   const { menuVisible, setMenu, selectedCatagory, setSelectedCatagory, catagories } = React.useContext(ViewContext);

   const cmn_icon_style = "w-[1.3rem] h-[1.3rem] mx-1 "

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   const dropdownRef = useRef(null);
   const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
         setMenu(false);
      }
   };

   function onPageSelect(value) {
      setSelectedCatagory(value)
      setMenu(false)
   }

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <div className="relative " ref={dropdownRef}>

         <CustomButton click={() => setMenu(!menuVisible)} iconStart={<TiThMenu className={cmn_icon_style} />} />

         {menuVisible ?
            (<div className="absolute ms-1.0 mr-2.0 px-1.5 py-2.0  min-h-[300px] flex flex-col justify-between 
            items-start  z-10 top-full right-0 bg-slate-800 border-double border-t-8 border-b-8 border-blue-400
               rounded-md shadow ">
               <div className='w-full flex flex-col gap-0.5'>
                  <CustomButton bg="light" click={() => { }} txt="Archieves" iconStart={<FaFileArchive className={`${cmn_icon_style}  shadow-sm`} />} />
                  <CustomSelect value={selectedCatagory} options={catagories} bg="light" onChange={onPageSelect} />
                  <hr className='w-full h-1 bg-slate-500 rounded-full' />
               </div>

               <CustomInput inputType='text' ph="Search .." buttonIcon={<FaSearch className={cmn_icon_style} />} />

            </div>) : null
         }
      </div>
   )
}
