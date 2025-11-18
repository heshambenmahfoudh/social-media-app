import React from 'react'
import product1 from '../data/images/product1.jpg'
import { onlineFrinds } from '../data/dummy'

export default function OnlienFrinds ()  {
  return (
    <div className=' mt-7 '>
         <img src={product1} alt='' className='h-56 rounded-xl' />
         <div  className='bg-blue-200 p-3 mt-5 rounded-xl' >
            <h2 className='text-17 font-semibold mb-4'>Online frinds</h2>
            <div className='flex flex-col gap-3'>
                {onlineFrinds?.map(({img ,title} ,i) =>(
                    <article key={i} className='flex gap-3 items-center relative'>
                        <span className='absolute -top-0 left-7  bg-green-600
                        rounded-full p-1 border-2 border-white
                        '></span>
                            <img src={img} alt='img'
                            className='w-[40px] h-[40px] rounded-full'
                            />
                            <span className='text-14'>{title}</span>
                    </article>
                ))}
            </div>
         </div>
    </div>
  )
}

