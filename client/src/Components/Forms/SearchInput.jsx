import React from 'react'

export default function SearchInput ({placeholder,value,name})  {
  return (
     <input 
         type='text'
         name={name}
         placeholder={placeholder}
         value={value}
       className="p-1  border-[1px] 
              rounded-md focus:outline-none
              focus:border-blue-300   w-[400px]
         text-[14px] text-black   "
        />
  )
}

