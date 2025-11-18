import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CreatePost from '../Components/CreatePost'
import Frinds from '../Components/Frinds'
import FrindsRequest from '../Components/FrindsRequest'
import LeftSideBar from '../Components/LeftSideBar'
import Logo from '../Components/Logo'
import Navbar from '../Components/Navbar'
import Posts from '../Components/Posts'
import RightSideBar from '../Components/RightSideBar'
import { useStateContext } from '../context/contextProvider'
import ProfileInformation from '../Components/ProfileInformation'
import ProfileOverView from '../Components/ProfileOverView'

export default function ProfilePage() {
  const {
    changeProfile,
    openSideBarRight,
    setOpneSideBarRight,
    openSideBarLeft,
    setOpneSideBarLeft,
  } = useStateContext()

  return (
    <div
      className="
      grid grid-cols-[1fr_2fr_1fr]
      slg:grid-cols-[1fr_2fr]
      smd:grid-cols-[1fr]
      gap-4
      relative"
    >
      <div className=" sticky top-3 self-start smd:hidden ">
        <Logo />
        <ProfileInformation />
        <FrindsRequest />
      </div>
      <div className="   flex flex-col gap-3 ">
        <ProfileOverView />
        <CreatePost />
        <Posts />
      </div>
      <div
        className={` ${
          changeProfile && '-z-10'
        }   sticky top-3 self-start  slg:hidden `}
      >
        <Navbar />
        <Frinds />
      </div>
      <div
        className="
            absolute -right-[.99rem] 
            top-60 text-black 
            px-1.5 py-3 
            hidden slg:block
            rounded-tl-lg
            rounded-bl-lg
            bg-white text-20
            cursor-pointer"
        onClick={() => setOpneSideBarRight((prev) => !prev)}
      >
        {' '}
        <AiOutlineMenu />
      </div>
      <div
        className="
          absolute -left-[.99rem]
          top-60 text-black px-1.5 
          py-3  hidden smd:block
          rounded-tr-lg
          rounded-br-lg
          bg-white text-20
          cursor-pointer "
        onClick={() => setOpneSideBarLeft((prev) => !prev)}
      >
        {' '}
        <AiOutlineMenu />
      </div>
      {openSideBarRight && <RightSideBar />}
      {openSideBarLeft && <LeftSideBar />}
    </div>
  )
}
