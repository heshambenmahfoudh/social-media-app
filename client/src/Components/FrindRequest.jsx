import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import avatar4 from "../data/images/avatar4.jpg"
import { useStateContextAuth } from '../context/authContext'
import { useStateContext } from '../context/contextProvider'
import useFetchData from '../hooks/useFetchData'
import { follwingByUser, unfollwingByUser } from '../Lib/apiRequest'

export default function FrindRequest ({user})  {
 const {user:currUser } =  useStateContextAuth()
 const {loading,setLoading} = useStateContext()
 const { data:userData  } = useFetchData(`users/find/${currUser&&currUser?.id}`,loading);
 const [follwingUser, setFollwingUser] = useState()

 useEffect(() => {
   setFollwingUser(userData?.following?.includes(user?._id) )
 }, [user?._id, userData,currUser])
 
    

function handleFollwingUser (e) {
  if (follwingUser) {
    unfollwingByUser(e,user?._id ,currUser?.id, setLoading)
  }else{
    follwingByUser(e,user?._id ,currUser?.id, setLoading)
  }
    setFollwingUser(!follwingUser)
}
  return (
  <>
    {user?._id !== currUser?.id && (
       <article className='flex justify-between items-center grow' key={user?._id}>
                <div className='flex gap-2 items-center'>
                    <img src={!user?.profileImageUrl?  avatar4 
                    : user?.profileImageUrl}
                    className="w-[45px] h-[45px] rounded-full  
                    border-2 border-blue-500 object-cover"
                    alt=""  />
                    <div className='leading-4'>
                        <h2 className='text-12 font-medium capitalize'>{`${user?.name} 
                        `}</h2>
                        <span className='text-12'>{user?.username}</span>
                    </div>
                </div>
                <Link className={`py-1.5 px-4 rounded-3xl 
                hover:bg-transparent hover:text-black border-1 border-blue-500
                 text-14 font-semibold ${follwingUser ?
                  `text-black bg-transparent`:`bg-blue-500 text-white`}`} 
                 onClick={ handleFollwingUser }
                 >
                 {follwingUser === true ?"nuFollow":'Follow'}   
                </Link>
       </article>
    )} 
  </>
           
  )
}

