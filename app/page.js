
"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { ViewContext } from './context/Provider'
import { usePathname } from 'next/navigation'
import NoRecord from './components/NoRecord'

export default function Home() {

  const pathName = usePathname();
  const { filteredPages, setFilteredPages,pageKeys, pageOnView, setPageOnView, newsPages, selectedCatagory } = React.useContext(ViewContext);

  const styleActive = (pageKey) => pageKey == pageOnView ? "shadow-lg shadow-blue-800 border-l-4 border-blue-800" : "bg-slate-100 border-t-2 border-b-2 border-slate-500";

  useEffect(() => {
    // alert("date will be extracted from url and load data accordingly   \nCurrent pathname is: " + pathName)

    if (selectedCatagory == "All") {
      setPageOnView(pageKeys[0]);
    } else {
      let firstPageOfThatCatagory = pageKeys.filter((item, ind) => selectedCatagory == "All" || newsPages[item].catagory.name == selectedCatagory)[0]
      setPageOnView(firstPageOfThatCatagory);
    }
  }, [selectedCatagory])


  return (
    <main className="grid grid-cols-4 ">
      <div className='col-span-1 md:flex hidden flex-col gap-4 items-center py-2'>

        {filteredPages?.map((page, index) => {
          return <button onClick={() => setPageOnView(page)}
            className={`p-0.75 ${styleActive(page)}  rounded-md shadow-sm`}>
            <Image src={newsPages[page].src} className=' w-10.6 h-17.6' /></button>
        })
        }
      </div>
      <div className='md:col-span-3 col-span-4 bg-slate-100 min-h-fit'>
        {newsPages[pageOnView]?.src ? <Image src={newsPages[pageOnView].src} className='w-full h-fit' /> : <NoRecord />}
      </div>
    </main>
  )
}
