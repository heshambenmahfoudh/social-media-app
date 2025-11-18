import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useStateContext } from '../context/contextProvider'
import FrindsRequest from './FrindsRequest'
import ProfileInformation from './ProfileInformation'

export default function LeftSideBar () {
  const { setOpneSideBarLeft} = useStateContext()
 
  return (
     <div className='fixed inset-0 bg-black/70 z-20 '>
       <span 
        className='absolute right-[49%] top-2 z-30 
        text-23 p-2 bg-blue-200 rounded-full
        text-black font-bold cursor-pointer'
        onClick={() =>setOpneSideBarLeft(prev => !prev) }
        ><AiOutlineClose/></span>
        <div className=' absolute left-0 bottom-0 h-screen 
        w-[330px] px-2 py-4 bg-blue-100 '>
        <ProfileInformation />
        <FrindsRequest />
    </div>
    </div>
  )
}

