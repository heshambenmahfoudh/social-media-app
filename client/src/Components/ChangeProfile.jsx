
import React, { useEffect, useState } from 'react'
import {AiFillCloseCircle}  from 'react-icons/ai'
import { useStateContext } from '../context/contextProvider'
import { useStateContextAuth } from '../context/authContext'
import useFetchData from '../hooks/useFetchData'
import { useParams } from 'react-router-dom'
import { ApiPostImageRequest, ApiPutRequest } from '../Lib/apiRequest'
import Lables from './Forms/Lables'
import Inputs from './Forms/Inputs'
import Buttons from './Forms/Buttons'
import SelectImage from './Forms/SelectImage'

export default function ChangeProfile () {

const { setChangeProfile
,
  loading,setLoading
} = useStateContext()
const [information, setInformation] = useState()  
const [covserImageUrl, setCoverImageUrl] = useState('')
const [profileImageUrl, setProfileImageUrl] = useState(null)
const [loadingImage, setLoadingImage] = useState(false)
const userId = useParams().id
const { dispatch } = useStateContextAuth()
const { data: userData } = useFetchData(`users/find/${userId}`)

useEffect(() => {
  setInformation(userData)
  setProfileImageUrl(userData?.profileimage)
  setCoverImageUrl(userData?.coverpicture)
}, [userData])

  const changeImage = async (e) => {
    e.preventDefault()
    
    // ApiPostImageRequest (e, 'deploy', 'profileImg',setProfileImg,setCoverImg)
    if (profileImageUrl) {
      ApiPostImageRequest (e, setLoadingImage, setProfileImageUrl)
    }else{
      ApiPostImageRequest (e, setLoadingImage, setCoverImageUrl)
    }
  }

 const changeData = (e) =>{
  e.preventDefault()
  setInformation({...information , [e.target.name]:e.target.value} )
  
 
} 
const updateProfile =async(e) =>{
   const  data = {
  ...information,
    profileimage :profileImageUrl,   
    coverpicture:covserImageUrl
   }
 
   const response=
    await ApiPutRequest(
          `users`,
          e,
          userId,
          data,
          setLoading,
          dispatch,
          'Profile',
        )
        if (response?.includes('OK') ) {
          setChangeProfile(prev => !prev)
        }
 }
 
  return (
    <div className='fixed inset-0 bg-black/75 z-50 h-screen'>
<div className="h-screen flex items-center justify-center  ">
  <form
      className=" m-2
      p-8 smd:p-6 smss:p-4 
      rounded-md smd:mx-5  
      smss:mx-3 sms:mx-2 ssm:mx-4
      bg-white shadow-md border-p1
      w-[60%] slg:w-[60%] sms:w-[80%]
      ssm:w-[70%] smd:w-[80%] smss:w-full relative "
  >
      <span 
      className=' absolute top-1 right-1
      
      p-4 text-black  cursor-pointer text-22'
      onClick={()=> setChangeProfile(prev => !prev)}><AiFillCloseCircle/></span>
     <h2 className="text-center font-medium text-19 mb-2 text-black">Update Profile</h2>
        <div className="flex flex-col gap-1 ">
             <div className="flex justify-between items-center ssm:flex-col gap-5 ssm:gap-1">
             
              <div className="w-full">
                <Lables text="User Name" />
                <Inputs
                  type="text"
                  placeholder="User Name"
                  name="name"
                  changeValue={changeData}
                  value={userId && information?.name}
                />
              </div>
              <div className="w-full">
                <Lables text="User Name" />
                <Inputs
                  type="email"
                  name="username"
                  placeholder="User Name"
                  changeValue={changeData}
                  value={userId && information?.username}
                  readOnly={true}

                />
              </div>
            </div>
            <div className="flex justify-between items-center ssm:flex-col gap-5 ssm:gap-1">
              
              <div className="w-full">
                <Lables text="User Work At" />
                <Inputs
                  type="text"
                  placeholder="User Work At"
                  name="workat"
                  changeValue={changeData}
                  value={userId && information?.workat}
                />
              </div>
              <div className="w-full">
                <Lables text="User Live In" />
                <Inputs
                  type="text"
                  placeholder="User Live In"
                  name="livein"
                  changeValue={changeData}
                  value={userId && information?.livein}
                />
              </div>
            </div>
            <div className="flex justify-between items-center ssm:flex-col gap-5 ssm:gap-1">
              
              <div className="w-full">
                <Lables text="User Country" />
                <Inputs
                  type="text"
                  name="country"
                  placeholder="User Country"
                  changeValue={changeData}
                  value={userId && information?.country}
                />
              </div>
              <div className="w-full">
                <Lables text="User Relation Ship" />
                <Inputs
                  type="text"
                  name="relationship"
                  placeholder="User Relation Ship"
                  changeValue={changeData}
                  value={userId && information?.relationship}
                />
              </div>
            </div>
          <div className="flex justify-between 
          items-center ssm:flex-col gap-5 ssm:gap-1">
              
              <div className="w-full">
                <Lables text="User Password" />
                <Inputs
                  type="password"
                  name="password"
                  placeholder="User Password"
                  changeValue={changeData}
                  value={userId && information?.password}
                />
              </div>
              <div className="w-full">
            </div>
            </div>
        </div>
        <div className='flex  justify-between items-center gap-4 my-3'> 
                <div className='w-1/2' >
                <h2 className='text-15 font-semibold mb-2'>Profile image</h2>
                 <SelectImage 
                  chaneValue={changeImage} 
                  setImageUrl={setProfileImageUrl}
                  imgUrl={profileImageUrl}
                  name={'profileImg'} 
                  loadingImage={loadingImage}
                  
                  />
                </div>
               <div className='w-1/2' >
                <h2 className='text-15 font-semibold mb-2'>Cover image</h2>
                <SelectImage 
                chaneValue={changeImage} 
                setImageUrl={setCoverImageUrl} 
                imgUrl={setCoverImageUrl} 
                name={'coverImg'} 
                loadingImage={loadingImage}
                />
                </div>
        </div>
       <Buttons
          text={ 'Update' }
          onClick={updateProfile}
          loading={loading}
          title="Profile"
        />
      </form>
    </div>
    </div>
  )
}

