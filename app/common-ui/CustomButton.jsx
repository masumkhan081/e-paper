import React from 'react'

export default function CustomButton({ txt, iconStart, iconEnd, style }) {

   const cmn_style = "py-1 px-1 flex border rounded-md shadow-sm border-slate-400 "
   return (
      <button className={style ? style : cmn_style}>
         {iconStart}
         {txt}
         {iconEnd}
      </button>
   )
}
