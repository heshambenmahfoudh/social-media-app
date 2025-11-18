import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateContextAuth } from '../context/authContext'
import { useStateContext } from '../context/contextProvider'
import { ApiLoginUser } from '../Lib/apiRequest'
import Lables from './Forms/Lables'
import Inputs from './Forms/Inputs'
import Buttons from './Forms/Buttons'

export default function SignIn () {
 const [data, setData] = useState()

const {loading  ,dispatch} = useStateContextAuth()
const {  setOpenLogin } = useStateContext()

function changeData (e) {
    setData({ ...data, [e.target.name]: e.target.value })
}

function handleLoginUser (e){
    ApiLoginUser(e, dispatch, setOpenLogin,data)
}
  
  return (
    
      <div className="bg-white  p-5 smd:p-3  w-full rounded-2xl  ">
        <h2 className="text-center mb-8 mt-2 text-20 font-medium">Log In</h2>
        <form>
          <div className="flex items-center flex-col gap-1 mb-2 ">
            <div className="w-full">
              <Lables text="User Username" />
              <Inputs
                type="text"
                placeholder="You@gmail.com"
                name="username"
                changeValue={changeData}
              />
            </div>
            <div className="w-full">
              <Lables text="Ueer Password" />
              <Inputs
                type="password"
                placeholder="User Password"
                name="password"
                changeValue={changeData}
              />
            </div>
          </div>
     <div className="flex  justify-end mt-2">
          <small
          className="text-13 cursor-pointer text-left "
        >
            Don't hane an account? <Link 
            className="text-14 font-semibold underline"
           onClick={() => setOpenLogin(prev => !prev)}
            >Register Now</Link>
        </small>
      </div>
        
          <Buttons
            text='Login'
            onClick={handleLoginUser}
            loading={loading}
            title="User"
          />
        </form>

      </div>
      
   
  )
}


      
