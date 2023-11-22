import React from 'react'

export default function CustomInput({ inputType, buttonIcon, buttonText, buttonAllign, iconAlign, ph, style }) {

   const cmn_input_style = "px-1 flex-grow py-1 ms-1 outline-none"

   return (
      <div className='flex items-center bg-white rounded-md border border-red-500'>
         <input className={style ? style : cmn_input_style} type={inputType} placeholder={ph}></input>
         <button className='border-l-2 rounded-md py-1 border-slate-400'>{buttonIcon}</button>
      </div>
   )
}
