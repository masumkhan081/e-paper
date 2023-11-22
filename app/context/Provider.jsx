'use client';
import { createContext, useEffect, useState } from 'react';
// data
import { pages } from '../../static-data/data'
import { categories } from '../../static-data/data.js'
import { loadedPages } from '../../static-data/data.js'

export const ViewContext = createContext();

export default function Provider({ children }) {

   const [news, setNews] = useState(pages);
   const [currentPage, setCurrentPage] = useState(1);
   const [selectedCategory, setSelectedCategory] = useState("");

   useEffect(() => {

   }, [])

   return (<ViewContext.Provider value={{ news, setNews, currentPage, setCurrentPage, categories, loadedPages, selectedCategory, setSelectedCategory }}>
      {children}
   </ViewContext.Provider>)

}