import React from 'react'

export default function CustomButton({ txt, iconStart, iconEnd, style, bg, click }) {

   const bgMap = {
      "light": "bg-slate-300 text-black border border-slate-500 border border-slate-400",
      "blue": "bg-blue-700 text-white"
   }

   const cmn_style = `py-1 px-1 flex  rounded-md shadow-sm  ${bgMap[bg]} `
   return (
      <button className={style ? style : cmn_style} onClick={() => click()}>
         {iconStart}
         {txt}
         {iconEnd}
      </button>
   )
}
