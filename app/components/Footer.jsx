import React from 'react'
import Image from 'next/image'
import brandIcon from '../../public/images/brand.png'


export default function Footer() {
   return (

      <div className='flex flex-col gap-6 px-1.5 pt-2.5 pb-1.0 bg-black '>

         <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4  '>
            <div className='col-span-1 flex flex-col  sm:items-center items-start gap-4  '>
               <span className='text-white font-bold text-3xl font-poppins tracking-wider'>Khulnanchal</span>
               <Image
                  src={brandIcon}
                  className='h-50 w-100 rounded-sm'
                  alt="Picture of the author"
               />
            </div>


            <ul className='col-span-1 flex flex-col  sm:items-center items-start space-y-4 text-slate-300   '>

               <li className='font-bold text-white'>প্রকাশনা ও মুদ্রণ </li>

               <li>
                  <ul className='space-y-1  '>
                     <li><span className='mr-2'>সম্পাদক:</span><span>মো. মিজানুর রহমান মিলটন</span></li>
                     <li><span className='mr-2'>প্রকাশক:</span><span>মো. মিজানুর রহমান মিলটন</span></li>
                     <li><span className='mr-2'>মুদ্রণ:</span><span>খুলনাঞ্চল প্রেস এন্ড পাবলিকেশন্স</span></li>
                  </ul>
               </li>
            </ul>

            <ul className='md:col-span-1 sm:col-span-1 flex flex-col items-start space-y-4 text-slate-300 '>
               <ul>
                  <li className='font-bold text-white'>যোগাযোগ</li>
               </ul>
               <ul className='space-y-2  '>
                  <ul>
                     <li><span className='mr-0'>ই-মেইল:</span><span>khulnanchal@gmail.com</span></li>
                  </ul>
                  <ul>
                     <li className='overflow-clip'><span className='mr-2'>ঢাকা অফিস:</span><span>৮০, শেরে বাংলা রোড</span></li>
                     <li><span className='mr-0'>মোবাইল:</span><span>০১৭১১-০১৭৪৭৬</span></li>
                  </ul>
                  <ul>
                     <li><span className='mr-0'>খুলনা অফিস:</span><span>রায়ের বাজার, খুলনা</span></li>
                     <li><span className='mr-0'>মোবাইল:</span><span>০১৭১১-০২৬৬১৩</span></li>
                  </ul>
               </ul>
            </ul>
         </div>

         <p className='flex gap-2 justify-center py-1.0'>
            <span className='text-white'>Developed by</span>
            <span className='text-blue-600'> Softronixs System Ltd</span>
         </p>
      </div>

   )
}
