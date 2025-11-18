import React from 'react'
import { NavLink, useParams}  from 'react-router-dom'
import { useStateContextAuth } from '../context/authContext'
import avatar4 from "../data/images/avatar4.jpg"
import avatar3 from '../data/images/avatar3.png'
import useFetchData from '../hooks/useFetchData'
import { useStateContext } from '../context/contextProvider'

export default function ProfileOverView () {
 const id = useParams().id
 const {loading:loadData} = useStateContext()
const { user:currentUserData} = useStateContextAuth()
const { data:postsData  } = useFetchData(`posts/userpost/${currentUserData?.id}`,loadData);
const { data:userData} = useFetchData(`users/find/${currentUserData?.id}`,loadData);

return (
    <div className=' flex flex-col rounded-xl -z-10 smd:mt-16 overflow-hidden bg-blue-200'>
        <img 
            src={
            !userData?.coverImageUrl ?  avatar3
            : 
            userData?.coverImageUrl}
            className={`w-full  object-cover
            ${id?'h-[220px]':'h-[130px]'}
            `}
            alt="coverImageUrl"
        />
        <div className='relative  flex justify-center items-center mb-12 '>
            <img
               src={
                 !userData
                 ?.profileImageUrl ?
                avatar4 
                :
                userData
                ?.profileImageUrl}
                className="  absolute w-[80px] h-[80px]   rounded-full -top-[2.5rem] 
                border-2 border-blue-500 
                object-cover"
                alt="profileImageUrl" 
             />
        </div>
        <div className='text-center mb-2'>
            <h2 className='capitalize font-semibold '>
                {userData
                ?.name} 
            </h2>
            <span className='capitalize mt-1 block text-16'> {userData
            ?.workat ? userData
            ?.workat : 'Youre work'}  </span>
        </div>
        <div className={`flex justify-around items-center  bg-blue-600 p-2 ${id && 'mb-6' }` }>
            <p className='flex flex-col gap-1 text-center text-white'>
                <span>Follwers</span>
            <span><b>{userData?.follwers?.length}</b></span>
            </p>
            <p className='flex flex-col gap-1 text-center text-white'>
                <span>Follwing</span>
                <span><b>{
                    userData?.following?.length}</b> </span>
            </p>
            {id  && (
               <p className='flex flex-col gap-1 text-center text-white'>
                  <span>Posts</span>
                  <span><b>{postsData ? postsData?.length:0}</b> </span>
               </p>
            )}
        </div>
        {!id && (
            <NavLink to={`/profile/${currentUserData?.id}` }
            className='capitalize text-center my-4 font-semibold'> my profile</NavLink>
        )}
    </div>
  )
}

