"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// images & icons
import addPic from '../../public/add-pics/sample.jpg'
import brandIcon from '../../public/images/brand.png'
import { FaHome, FaSearch } from 'react-icons/fa'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { IoCalendarOutline, IoCalendarSharp, IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import CustomSelect from '../common-ui/CustomSelect'
import CustomInput from '../common-ui/CustomInput.jsx'
import CustomButton from '../common-ui/CustomButton.jsx'
import { ViewContext } from '../context/Provider'
import { getToday } from '@/util/thoBanglaDigit';
import ArchieveModal from './ArchieveModal';


export default function NavTop() {


   const { archModalVisible, setArchModal, pageKeys, selectedDate, setSelectedDate, selectedCategory, setSelectedCategory,
      categories, currentPage, setCurrentPage,
      loadedPages, newsPages, setNewsPages, today } = React.useContext(ViewContext);

   const cmn_icon_style = "w-1.5 h-1.5 mx-1 "

   function handleDateSelect(date) {
      setSelectedDate(date)
   }
   
   const pageOptions = () => pageKeys.filter((item, ind) => selectedCategory == "All" || newsPages[item].catagory.name == selectedCategory);
   const moveBackward = () => pageKeys.indexOf(currentPage) == 0 ? setCurrentPage(pageKeys[0]) : setCurrentPage(pageKeys[pageKeys.indexOf(currentPage) - 1]);
   const moveForward = () => pageKeys.indexOf(currentPage) == pageKeys.length - 1 ? setCurrentPage(pageKeys[pageKeys.length - 1]) : setCurrentPage(pageKeys[pageKeys.indexOf(currentPage) + 1]);
   const moveToFirst = () => setCurrentPage(pageKeys[0]);
   const moveToLast = () => setCurrentPage(pageKeys[pageKeys.length - 1]);
   const getPageNumber = () => Object.keys(newsPages).indexOf(currentPage) + 1

   useEffect(() => {
      // selectedCategory ? setTimeout(() => alert("Backend comes to play here. \nFiltered pages/news portion should appear regarding selectedCategory catagory", 200)) : null
   }, [selectedCategory])

   return (
      <div className='flex flex-col gap-0.25 '>

         <div className='flex flex-wrap items-start gap-4 py-1.0  '>
            <Image
               src={brandIcon}
               className='h-100'
               alt="Paper name"
            />
            <Image
               src={addPic}
               className='flex-shrink md:block hidden h-5.0'
               alt="somhe add"
            />
         </div>

         <div className='border-t-[7px]  border-blue-700 rounded-md '>
            <div className='flex justify-between items-center bg-black py-0.75 px-1.5'>
               <Link href={process.env.root}><FaHome className='w-2.0 h-2.0 text-white' /></Link>
               <div className='flex gap-1.0'>

                  <div className="relative inline-block ">
                     <CustomButton txt="Archieve" click={() => setArchModal(!archModalVisible)} bg="blue" iconStart={<IoCalendarOutline className={cmn_icon_style} />} />
                     {/* <ArchieveModal /> */}
                  </div>

                  <CustomSelect value={selectedCategory} options={categories} bg="blue" onChange={(value) => setSelectedCategory(value)} />
                  <CustomInput inputType='text' ph="Search .." buttonIcon={<FaSearch className={cmn_icon_style} />} />
               </div>
            </div>
            <div className='bg-slate-100 flex items-center justify-between py-0.5 px-1.0'>
               <p className='flex gap-2 items-center'>  <span>Home</span> <IoIosArrowForward /> <span>All Catagories</span> <IoIosArrowForward /> <span>{selectedCategory ? selectedCategory : "All"} </span></p>

               <p className='flex gap-4 items-center font-sora'>
                  <span className='text-xl font-bold'>{getToday().todayInBD}</span>
                  <span className='text-base font-normal tracking-tight'>{getToday().todayInEn}</span>
               </p>
            </div>
         </div>

         {/* <div className='border-t-[5px] border-b-2 border-b-slate-400 rounded-md  border-t-blue-700 flex justify-start gap-4 py-0.5 px-1.0'>
            <span className='text-xl font-medium'>Bangla Date</span>
            <span className='text-sm font-medium'>Englist Date</span>
         </div> */}

         <div className='flex sm:px-2 justify-between bg-slate-200 border-b-2 border-blue-800 py-0.5 px-1.0 rounded-b-md'>

            <div className='flex gap-4 items-center'>
               <div className='flex gap-1 items-center'>
                  <CustomButton click={moveToFirst} txt="First" bg="light" iconStart={<IoArrowBackCircleOutline className={cmn_icon_style} />} />
                  <CustomButton click={moveBackward} bg="light" iconStart={<IoArrowBackCircleOutline className={cmn_icon_style} />} />
                  <span className='min-w-[24px] bg-slate-300 text-center py-1 px-1 border rounded-md shadow-sm border-slate-400'>{getPageNumber(currentPage)}</span>
                  <CustomButton click={moveForward} bg="light" iconStart={<IoArrowForwardCircleOutline className={cmn_icon_style} />} />
                  <CustomButton click={moveToLast} txt="Last" bg="light" iconEnd={<IoArrowForwardCircleOutline className={cmn_icon_style} />} />
               </div>
               <div className='flex gap-2'>
                  <CustomSelect value={currentPage} options={pageOptions()} bg="light" onChange={(value) => setCurrentPage(value)} />
                  <CustomButton click={() => setArchModal(!archModalVisible)} bg="light" iconStart={<CgMenuGridR className={cmn_icon_style} />} />
                  <ArchieveModal />
               </div>
            </div>

            <div>
               <DatePicker className='bg-slate-300 h-full py-1 shadow-sm border border-slate-500 rounded-md font-bold text-center w-[120px]' selected={selectedDate} onSelect={handleDateSelect} onChange={(date) => setSelectedDate(date)} />
            </div>
         </div>
      </div>
   )
}
