'use client';
import { createContext, useEffect, useState } from 'react';
// data 
import { categories } from '../../static-data/data.js'
import { loadedPages } from '../../static-data/data.js'

export const ViewContext = createContext();

export default function Provider({ children }) {

   const pageKeys = Object.keys(loadedPages);
   const [newsPages, setNewsPages] = useState(loadedPages);
   const [pageOnView, setPageOnView] = useState(pageKeys[0]);
   const [filteredPages, setFilteredPages] = useState(pageKeys);
   const [selectedCatagory, setSelectedCatagory] = useState("All");
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [archModalVisible, setArchModal] = useState(false);

   useEffect(() => {
      setFilteredPages(pageKeys.filter((item, ind) => selectedCatagory == "All" || newsPages[item].catagory.name == selectedCatagory))
   }, [selectedCatagory])

   return (<ViewContext.Provider value={{ filteredPages, setFilteredPages, archModalVisible, setArchModal, pageKeys, selectedDate, setSelectedDate, today: new Date(), newsPages, setNewsPages, pageOnView, setPageOnView, categories, loadedPages, selectedCatagory, setSelectedCatagory }}>
      {children}
   </ViewContext.Provider>)
   hhhh
}