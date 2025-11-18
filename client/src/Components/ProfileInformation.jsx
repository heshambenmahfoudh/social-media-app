import React from 'react'
import { AiOutlineEdit} from 'react-icons/ai'
import { useStateContextAuth } from '../context/authContext'
import { useStateContext } from '../context/contextProvider'
import ChangeProfile from './ChangeProfile'
import toast from 'react-hot-toast'
import Buttons from './Forms/Buttons'
import useFetchData from '../hooks/useFetchData'

export default function ProfileInformation ()  {
  
 const {changeProfile, setChangeProfile} = useStateContext()
  const { loading} = useStateContext()
 const {user:currentUserData,dispatch} = useStateContextAuth()
 const { data:userData} = useFetchData(`users/find/${currentUserData?.id}`,loading);
 function handleLogoutUser (){
    dispatch({type:"LOG_OUT"})
    sessionStorage.clear()
    toast.success("User LogOut Successfully")
    
 }

  return (
    <div className='bg-blue-200 p-3 rounded-lg'>
      <div className='flex justify-between items-center my-4'>
        <h2 className='capitalize text-17 font-semibold'>your information</h2>
        <span className='text-20 cursor-pointer'
        onClick={() => setChangeProfile(prev => !prev)}
        ><AiOutlineEdit/></span>
      </div>
      <div>
        <div className='flex items-center  gap-2'>
          <span className='font-semibold text-16'>works at :</span>
          <p className='text-15 capitalize '>{userData?.workat ? userData?.workat  : 'Youre work' }</p>
        </div>
        <div className='flex items-center  gap-2 mt-2.5'>
          <span className='font-semibold text-16'>lives in :</span>
          <p className='text-15 capitalize'>{userData?.livein ? userData?.livein : 'Youre lives in' }</p>
        </div>
        <div className='flex items-center  gap-2 mt-2.5'>
          <span className='font-semibold text-16'>country :</span>
          <p className='text-15 capitalize'>{userData?.country ? userData?.country: 'Youre country'}</p>
        </div>
        <div className='flex items-center  gap-2 mt-2.5'>
          <span className='font-semibold text-16'>relationShip :</span>
          <p className='text-15 capitalize'>{userData?.relationship ?  userData?.relationship : "Youre relation shap"}</p>
        </div>
        </div>
        <div className='mt-8 flex justify-end'>
        <Buttons
          text='Logout'
          onClick={handleLogoutUser}
          loading={loading}
          title=""
          />
          </div>
        {changeProfile && (
          <ChangeProfile/>
        )}
    </div>
  )
}

