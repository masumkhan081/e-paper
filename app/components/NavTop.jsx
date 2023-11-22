"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

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


export default function NavTop() {


   const { selectedCategory, setSelectedCategory,
      categories, currentPage, setCurrentPage,
      loadedPages } = React.useContext(ViewContext);

   const cmn_icon_style = "w-1.5 h-1.5 mx-1 "

   useEffect(() => {
      selectedCategory ? setTimeout(() => alert("Backend comes to play here. \nFiltered pages/news portion should appear regarding selectedCategory catagory", 200)) : null
   }, [selectedCategory])

   return (
      <div className='flex flex-col gap-0.25 '>

         <div className='flex flex-wrap items-start gap-4 pt-1.0 pb-1.5  '>
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
         <div className='border-t-[7px]  border-blue-700 rounded-md mb-1.0'>
            <div className='flex justify-between items-center bg-black py-0.75 px-1.5'>
               <FaHome className='w-2.0 h-2.0 text-white' />
               <div className='flex gap-1.0'>
                  <button className='bg-blue-700 text-slate-100 px-1.0 py-0.25 flex gap-1 items-center rounded-md'><IoCalendarOutline />Archieve</button>


                  <CustomSelect value={selectedCategory} options={categories} onChange={(value) => setSelectedCategory(value)} />

                  <CustomInput inputType='text' ph="Search .." buttonIcon={<FaSearch className={cmn_icon_style} />} />

               </div>
            </div>
            <div className='bg-slate-100 flex items-center justify-start gap-2 py-0.5 px-1.0'>
               <span>Home</span> <IoIosArrowForward /> <span>All Catagories</span> <IoIosArrowForward /> <span>{selectedCategory ? selectedCategory : "All"} </span>
            </div>
         </div>

         <div className='border-t-[5px] border-b-2 border-b-slate-400 rounded-md  border-t-blue-700 flex justify-start gap-4 py-0.5 px-1.0'>
            <span className='text-xl font-medium'>Bangla Date</span>

            <span className='text-sm font-medium'>Englist Date</span>

         </div>
         <div className='flex sm:px-2 justify-between bg-slate-100 py-0.5 px-1.0 rounded-md'>

            <div className='flex gap-4 items-center'>

               <div className='flex gap-1 items-center'>
                  <CustomButton txt="First" iconStart={<IoArrowBackCircleOutline className={cmn_icon_style} />} />
                  <CustomButton txt="" iconStart={<IoArrowBackCircleOutline className={cmn_icon_style} />} />
                  <span className='min-w-[24px] text-center py-1 px-1 border rounded-md shadow-sm border-slate-400'>{currentPage}</span>
                  <CustomButton txt="" iconStart={<IoArrowForwardCircleOutline className={cmn_icon_style} />} />
                  <CustomButton txt="Last" iconEnd={<IoArrowForwardCircleOutline className={cmn_icon_style} />} />
               </div>
               <div className='flex gap-2'>
                  <CustomSelect value={selectedCategory} options={Object.keys(loadedPages)} onChange={(value) => setSelectedCategory(value)} />
                  <CustomButton iconStart={<CgMenuGridR className={cmn_icon_style} />} />

               </div>
            </div>
            <div>
               <span>calendar</span>
            </div>
         </div>


      </div>
   )
}
