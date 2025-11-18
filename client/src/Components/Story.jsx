import React from 'react'
import { BsPlus} from 'react-icons/bs'
import avatar3 from '../data/images/avatar3.png'
import { useStateContextAuth } from '../context/authContext'

export default function Story () {

  const { user:userData } = useStateContextAuth()

  return (
    <div className="posts">
        <div className='grid grid-cols-5 gap-2'>
          <article
            style={{
              backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 0.7))
              , url(${userData?.profileimage
                 ? +userData?.profileimage 
                : avatar3})`,
            }}
            className='relative flex justify-center items-center 
            rounded-[10px] h-[190px] bg-cover bg-center'
          >
            <BsPlus className=' absolute
             bottom-11 text-white bg-blue-500 w-9 h-9  rounded-full
             border-1 border-white
             ' />
            <p className='absolute bottom-3 text-white leading-4 text-center text-13'> 
            {userData?.name}</p>
          </article>
             <article
            style={{
              backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 0.7))
              , url(${avatar3})`,
            }}
            className='relative flex justify-center items-center 
            rounded-[10px] h-[190px]'
          >
             <img src={avatar3} className=' absolute
                top-2 left-2 text-white bg-blue-500 w-9 h-9  rounded-full
                border-[3px] border-blue-500
             '  alt='story' />
            <p className='absolute bottom-3 text-white '>
             rabee ali</p>
          </article>
             <article
            style={{
              backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 0.7))
              , url(${avatar3})`,
            }}
            className='relative flex justify-center items-center 
            rounded-[10px] h-[190px]'
          >
           
             <img src={avatar3} className=' absolute
             top-2 left-2 text-white bg-blue-500 w-9 h-9  rounded-full
             border-[3px] border-blue-500
             '  alt='story' />
            <p className='absolute bottom-3 text-white '>saleh ali</p>
          </article>
             <article
            style={{
              backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 0.7))
              , url(${avatar3})`,
            }}
            className='relative flex justify-center items-center 
            rounded-[10px] h-[190px]'
          >
           
             <img src={avatar3} className=' absolute
             top-2 left-2 text-white bg-blue-500 w-9 h-9  rounded-full
             border-[3px] border-blue-500
             '  alt='story' />
            <p className='absolute bottom-3 text-white '>nasser ali</p>
          </article>
             <article
            style={{
              backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 0.7))
              , url(${avatar3})`,
            }}
            className='relative flex justify-center items-center 
            rounded-[10px] h-[190px]'
          >
           
             <img src={avatar3} className=' absolute
             top-2 left-2 text-white bg-blue-500 w-9 h-9  rounded-full
             border-[3px] border-blue-500
             '  alt='story' />
            <p className='absolute bottom-3 text-white '>saeed ali</p>
          </article>
         
        </div>
    </div>
  )
}


