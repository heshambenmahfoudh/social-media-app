import React from 'react'

export default function SelectInput ({  name,options,changeValue ,option,data}) {

  return (

        <select 
        name={name}
        onChange={changeValue}
        className="p-2 text-15 
        border-[2px] w-full rounded-md 
        focus:outline-none focus:border-blue-300 mt-1  capitalize 
        "
        >
          <option className="p-8 mb-4 text-18 font-body cursor-pointer capitalize">
                  Select {option}
                </option>
            {options?.map((item) => (
                      <option 
                      className='p-2 cursor-pointer capitalize' 
                        value={item?.model||item?._id || item}
                      key={item?._id || item?.model||item }
                      >{item?.name ||item?.model|| item}
                      </option>
            ))}
        </select>
  )
}

