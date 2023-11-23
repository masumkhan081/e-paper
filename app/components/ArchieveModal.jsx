import React, { useRef, useEffect } from 'react'
import CustomButton from '../common-ui/CustomButton';
import { IoCalendarOutline, IoCloseSharp } from "react-icons/io5";

import Image from 'next/image'
import { ViewContext } from '../context/Provider';
import NoRecord from './NoRecord';

export default function ArchieveModal() {

   const { filteredPages, setFilteredPages, archModalVisible, setArchModal, pageKeys, selectedDate, setSelectedDate, selectedCatagory, setSelectedCatagory,
      categories, pageOnView, setPageOnView,
      loadedPages, newsPages, setNewsPages, today } = React.useContext(ViewContext);

   const styleActive = (pageKey) => pageKey == pageOnView ? "shadow-md shadow-blue-700 border-t-2 border-slate-600" : "border-t-2 border-b-2 border-slate-500";
   const cmn_icon_style = "w-1.5 h-1.5 mx-1 "

   function onModalSelected(pageSelected) {
      setPageOnView(pageSelected);
      setArchModal(false);
   }

   const dropdownRef = useRef(null);
   const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
         setArchModal(false);
      }
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <div className={archModalVisible ? " fixed flex justify-center   py-2.5 overflow-hidden w-screen min-h-screen left-0 top-0 z-10 bg-black bg-opacity-40 text-black border rounded-md shadow " : "hidden"}>
         {/* <div className=' border border-red-500'> */}
         <div ref={dropdownRef} className={archModalVisible ? "absolute flex flex-col gap-4 top-[20px] bottom-[20px]  sm:w-1/2 w-full z-20  text-black border rounded-md shadow overflow-y-auto scrollbar bg-white min-h-[400px]  " : "hidden"}>
            <div className='flex justify-end pr-2 py-2'>
               <CustomButton click={() => setArchModal(false)} iconStart={<IoCloseSharp className={cmn_icon_style} />} />
            </div>
            <ul className='flex flex-wrap justify-center gap-4'>

               {filteredPages?.map((page, index) => {
                  return <button onClick={() => onModalSelected(page)}
                     className={`flex flex-col gap-2 p-0.75 ${styleActive(page)}  rounded-md shadow-sm`}>
                     <span className='capitalize font-bold '>{page}</span>
                     <Image src={newsPages[page].src} className='w-7.8 h-12.5' /></button>
               })}

            </ul>
            {filteredPages?.length == 0 ? <NoRecord /> : null}
         </div>
         {/* </div> */}
      </div>
   )

}
