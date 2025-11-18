import React from 'react'
import { LoaderIcon } from 'react-hot-toast'
import { FaPlus } from 'react-icons/fa'

export default function 
Buttons ({ text ,onClick ,loading ,title })  {
 
 if (text==='Logout') {
  loading=false
 }
  return (
    <button 
    onClick={onClick}  
    className={` 
    text-14 text-white font-medium
    py-2.5 px-5 rounded-md  flex items-center gap-2
                 bg-blue-500
                 ${ loading   ?'mt-[-1px]' :' mt-5' }
                  `} >
                    {loading?
                   <LoaderIcon className=' text-white'/>
                  :
                  <FaPlus className='text-11'/> } 
                    {` 
                     ${loading ?`  ${ text === 'Update' ? 
                     text.slice(0,6)+'d':text.slice(0,5)+'ing'} ${title} Please White...`
              : `${text} ${title}`}
              `}
    </button>
  )
}

