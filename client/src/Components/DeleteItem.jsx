import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { ApiDeleteRequest } from '../Lib/apiRequest'

export default function DeleteItem ({id ,endPoint ,resourceName ,list , setList})  {
    async function handleDeleteItem (id) {
    ApiDeleteRequest (endPoint, id, resourceName)
    setList(list?.filter((item) => item?._id !== id))
  }
  return (
    <div>
      <AiFillDelete
        className="cursor-pointer text-red-600"
        onClick={() => handleDeleteItem(id)}
      />
    </div>
  )
}

