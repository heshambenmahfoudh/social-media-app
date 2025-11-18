import React, {  useState } from 'react'
import { BsCaretDownFill } from 'react-icons/bs'
import { BsCameraVideo } from 'react-icons/bs'
import { BsCamera } from 'react-icons/bs'
import { BsEmojiSmile } from 'react-icons/bs'
import avatar4 from '../data/images/avatar4.jpg'
import { useStateContextAuth } from '../context/authContext'
import { ApiPostImageRequest, ApiPostRequest } from '../Lib/apiRequest'
import { useStateContext } from '../context/contextProvider'

export default function CreatePost ()  {

  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const {loading, setLoading} = useStateContext()
  const [loadingImageUrl, setLoadingImageUrl] = useState(false)
  const { user:userData } = useStateContextAuth()
  
async function changeImage  (e){
  ApiPostImageRequest (e, setLoadingImageUrl, setImageUrl)
  }

async function handleNewPost  (e) {
    const data = {
     description,
      user:userData?.id,
      imageUrl
    }
    
    ApiPostRequest(
      e,
      'posts',
      setLoading,
      'Post',
      data,
        )
       
}
const date = new Date()


  return (
   <div className="p-[20px] sms:p-[10px] bg-slate-200  rounded-[10px]  ">
      <div className="flex items-center gap-[15px] mb-[2px] leading-4">
        <img 
        src={!userData?.profileImageUrl ?  avatar4 
                    : userData?.profileImageUrl}
         alt=""
        className='w-[40px] h-[40px] rounded-full '
        />
        <div>
          <p className='font-semibold text-14 '>{`${userData?.name}`}</p>
          <small className='text-12 text-gray-500'>
            <span>{date?.toString()?.slice(15,25)}</span>
            Public
            <BsCaretDownFill  className='text-[10px] ml-[5px] align-middle'/>
          </small>
        </div>
      </div>
      <div className="ml-[5px] mt-1">
        <textarea
          placeholder= {`What's on youre mind ${userData?.name}`}
          cols="30"
          rows="10"
          className=' outline-none w-full focus:bg-gray-300 p-2 rounded-lg 
          resize-none text-15 leading-4   bg-transparent
          border-b-1 border-[#ccc] h-[60px]
          '
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className='mb-3'>
        {imageUrl && (
              <img
                className="rounded-xl h-[280px] "
                src={ imageUrl}
                alt=""
              />
            )}
           </div>
        <div className="flex items-center justify-between ">
          <div className='flex items-center  
          gap-8 smd:gap-10
           sms:gap-4'>
             <label
          className='flex items-center text-14 cursor-pointer'
          >
              <input type="file" onChange={changeImage} className="hidden" />
            <BsCamera  className='mr-[10px] text-18 text-green-500'/>
            Photo/video
          </label>
          <label
          className='flex items-center text-14'
          >
            <BsCameraVideo  className='mr-[10px] text-18 text-red-600'/>
            Live/video
          </label>
          <label className='flex items-center text-14 smss:hidden'>
            <BsEmojiSmile  className='mr-[10px] text-18 ext-blue-500'/>
            Feeling/activity
          </label>
          </div>
          <button 
          onClick={handleNewPost}
                className=" font-bold text-13 w-[7rem] focus:outline-none  placeholder:capitalize
            hover:bg-transparent hover:border-2 p-1.5
             border-blue-500 border-2 bg-blue-500 rounded-xl 
              hover:text-black text-white cursor-pointer capitalize">
                {loading  ? 'deploy...': 'deploy'}
              </button>
        </div>
      </div>
   </div>
  )
}

