import React from 'react'
import SignIn from '../Components/SignIn'
import SignUp from '../Components/SignUp'
import { useStateContext } from '../context/contextProvider'

export default function Login () {
  const { openLogin } = useStateContext()
  return (
    <div className="flex justify-center items-center h-screen smd:flex-col  gap-8 smd:gap-4 ">
      <div className="w-1/3 slg:w-2/3 smd:w-full ">
        <h2 className="text-[30px] text-blue-600  font-bold mb-3">
          WillCome To Social Media
        </h2>
        <p className="text-13 font-medium text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eius
          quae. Perferendis eaque at ad cum quod magnam quia excepturi illo
          quisquam, iure, nam deleniti ea? Illum, ut! Voluptatum, consectetur{' '}
        </p>
      </div>
      <div className="w-2/5 slg:w-3/5 smd:w-full">{openLogin ? <SignIn /> : <SignUp />}</div>
    </div>
  )
}


