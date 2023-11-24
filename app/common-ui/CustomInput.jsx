import React from 'react'

export default function CustomInput({ inputType, buttonIcon, buttonText, buttonAllign, iconAlign, ph, style }) {

   const cmn_input_style = "flex-grow w-5.0 px-1 py-1 ms-1 outline-none"

   return (
      <div className='flex w-12.5 items-center justify-between bg-white rounded-md '>
         <input className={style ? style : cmn_input_style} type={inputType} placeholder={ph}></input>
         <button className='border-l-2 rounded-md py-1 border-slate-400'>{buttonIcon}</button>
      </div>
   )
}
