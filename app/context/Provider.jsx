'use client';
import { createContext, useEffect, useState } from 'react';
// data 
import { categories } from '../../static-data/data.js'
import { loadedPages } from '../../static-data/data.js'

export const ViewContext = createContext();

export default function Provider({ children }) {

   const [pageKeys, setPageKeys] = useState(Object.keys(loadedPages));
   const [newsPages, setNewsPages] = useState(loadedPages);
   const [currentPage, setCurrentPage] = useState(pageKeys[0]);
   const [selectedCategory, setSelectedCategory] = useState("All");
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [archModalVisible, setArchModal] = useState(false);


 

   return (<ViewContext.Provider value={{ archModalVisible, setArchModal, pageKeys, selectedDate, setSelectedDate, today: new Date(), newsPages, setNewsPages, currentPage, setCurrentPage, categories, loadedPages, selectedCategory, setSelectedCategory }}>
      {children}
   </ViewContext.Provider>)
   hhhh
}