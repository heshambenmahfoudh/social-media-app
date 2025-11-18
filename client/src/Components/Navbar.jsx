import React from 'react'
import { AiOutlineHome  
  ,AiOutlineMessage , AiOutlineNotification,
  AiOutlineProfile
} from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import { useStateContextAuth } from '../context/authContext'
import { useStateContext } from '../context/contextProvider'

export default function Navbar () {
  const {  setOpneSideBarRight } = useStateContext()
  const {user:userData} = useStateContextAuth()
 
  return (
    <div className='flex justify-between items-center '>
        <NavLink to="/home"
            className='p-2'  
            onClick={()=>  setOpneSideBarRight(false)}
            >
           <AiOutlineHome  className='text-24 text-blue-500 cursor-pointer'/>
        </NavLink>
        <NavLink to={`../profile/${userData?.id}`} 
          className='p-2'
            onClick={()=>  setOpneSideBarRight(false)}
            >
          <AiOutlineProfile  className='text-24 text-blue-500 cursor-pointer'/>
        </NavLink>
        <Link to=""  
        >
           <AiOutlineMessage  className='text-24 text-blue-500 cursor-pointer'/>
        </Link>
        <Link to=""  >
           <AiOutlineNotification  className='text-24 text-blue-500 cursor-pointer'/>
        </Link>
    </div>
  )
}

