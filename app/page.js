
"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { ViewContext } from './context/Provider'
import { usePathname } from 'next/navigation'
import NoRecord from './components/NoRecord'

export default function Home() {

  const pathName = usePathname();
  const { pageKeys, currentPage, setCurrentPage, newsPages, selectedCategory } = React.useContext(ViewContext);

  const styleActive = (pageKey) => pageKey == currentPage ? "shadow-md shadow-blue-700 border-t-2 border-blue-800" : "bg-slate-100 border-t-2 border-b-2 border-slate-500";

  useEffect(() => {
    // alert("date will be extracted from url and load data accordingly   \nCurrent pathname is: " + pathName)

    if (selectedCategory == "All") {
      setCurrentPage(pageKeys[0]);
    } else {
      let firstPageOfThatCatagory = pageKeys.filter((item, ind) => selectedCategory == "All" || newsPages[item].catagory.name == selectedCategory)[0]
      setCurrentPage(firstPageOfThatCatagory);
    }
  }, [selectedCategory])


  return (
    <main className="grid grid-cols-4 ">
      <div className='col-span-1 md:flex hidden flex-col gap-4 items-center py-2'>

        {pageKeys.filter((item, ind) => selectedCategory == "All" || newsPages[item].catagory.name == selectedCategory)?.map((page, index) => {
          return <button onClick={() => setCurrentPage(page)}
            className={`p-0.75 ${styleActive(page)}  rounded-md shadow-sm`}>
            <Image src={newsPages[page].src} className=' w-10.6 h-17.6' /></button>
        })
        }
      </div>
      <div className='md:col-span-3 col-span-4 bg-slate-100 min-h-fit'>
      {newsPages[currentPage]?.src ? <Image src={newsPages[currentPage].src} className='w-full h-fit' />:<NoRecord/>}
      </div>
    </main>
  )
}
