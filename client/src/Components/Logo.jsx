import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import { Link } from 'react-router-dom'

export default function Logo () {
  return (
    <div className='flex items-center min-w-full
     rounded-xl  justify-between  gap-2 smd:gap-5 mb-3 smd:mb-0
      smd:fixed top-[0.7222rem] ring-0 left-0 px-2 
    '>
        <h2 className='capitalize
        text-16 font-semibold
        '>
            <Link to="/"  >
              hisham
            </Link>
        </h2>
        <div className=' flex w-full bg-blue-200 rounded-xl overflow-hidden'>
        <input 
        type="text" placeholder='Search'
         name="" id=""
         className='bg-transparent text-black
          placeholder:text-black focus:bg-blue-50
           focus:outline-none  p-2
           w-full
          '
         />
         <div className='flex justify-center items-center 
          text-center bg-blue-500 text-white p-2 '>
        <AiOutlineSearch 
        className='text-21 '
        />
        </div>
        </div>
    </div>
  )
}

