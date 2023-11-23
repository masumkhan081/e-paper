import React, { useContext } from 'react'
import { ViewContext } from '../context/Provider'

export default function NoRecord() {

   const { selectedCatagory } = useContext(ViewContext);
   return (

      <div className='text-xl font-medium text-yellow-700 py-4 bg-white text-center'>

         {selectedCatagory === "All" ? "Pages Not Yet Ready For Today" : `No Page Under Catagory: ${selectedCatagory}`}  </div>
   )
}
