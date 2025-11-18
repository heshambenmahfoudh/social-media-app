import React from 'react'
import { useParams } from 'react-router-dom'
import Frinds from './Frinds'
import Navbar from './Navbar'
import OnlienFrinds from './OnlienFrinds'
import {AiOutlineClose} from "react-icons/ai"
import { useStateContext } from '../context/contextProvider'

export default function RightSideBar () {
  
const id = useParams().id
const { setOpneSideBarRight } = useStateContext()
 
    
  return (
      <div className='fixed inset-0 bg-black/70 z-20 '>
        <span 
        className='absolute right-[340px] top-2 z-30 
        text-23 p-2 bg-blue-200 rounded-full
        text-black font-bold cursor-pointer'
        onClick={() =>setOpneSideBarRight(prev => !prev) }
        
        ><AiOutlineClose/></span>
        <div className=' absolute right-0 bottom-0 h-screen w-[330px] px-2 py-4 bg-blue-100 '>
          <Navbar />
          {id ? <Frinds/> : 
        <OnlienFrinds />}
            
    </div>
    </div>
  )
}

