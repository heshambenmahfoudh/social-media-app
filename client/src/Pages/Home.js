import React from 'react'
import CreatePost from '../Components/CreatePost'
import FrindsRequest from '../Components/FrindsRequest'
import Logo from '../Components/Logo'
import Navbar from '../Components/Navbar'
import OnlienFrinds from '../Components/OnlienFrinds'
import Story from '../Components/Story'
import Posts from '../Components/Posts'
import { AiOutlineMenu } from 'react-icons/ai'
import { useStateContext } from '../context/contextProvider'
import RightSideBar from '../Components/RightSideBar'
import ProfileOverView from '../Components/ProfileOverView'

export default function Home ()  {
  const { openSideBarRight, setOpneSideBarRight } = useStateContext()
  return (
    <div
      className="grid grid-cols-[1fr_2fr_1fr] slg:grid-cols-[1fr_2fr]
    smd:grid-cols-[1fr] gap-4 relative smd:mt-16  min-h-full"
    >
      <div className=" sticky top-3  self-start smd:hidden">
        <Logo />
        <ProfileOverView/>
        <FrindsRequest/>
      </div>
      <div className="  flex flex-col gap-3   ">
        <Story />
        <CreatePost />
        <Posts />
      </div>
      <div className=" sticky top-3 self-start  slg:hidden ">
        <Navbar />
        <OnlienFrinds />
      </div>
      <div
        className="absolute -right-3 top-60 text-black px-1.5 py-3  hidden slg:block
          rounded-tl-lg
          rounded-bl-lg
          bg-white text-20
          cursor-pointer
          "
        onClick={() => setOpneSideBarRight((prev) => !prev)}
      >
        {' '}
        <AiOutlineMenu />
      </div>
      {openSideBarRight && <RightSideBar />}
    </div>
  )
}


