import React from 'react'
import { useNavigate } from 'react-router-dom';


function Register() {
  return (
    <div className='h-[100vh] bg-[white] flex justify-center items-center'>
      <div className="h-[90vh] w-[50%] bg-slate-300 grid grid-rows-[15%,60%,20%] p-5 rounded-[5px]">
        <div className="grid justify-center ">
          <h2 className='text-[30px] font-bold'>Registration</h2>
        </div>
        <div className=" grid grid-cols-2 gap-7">
          <div className=" grid grid-rows-[30%,30%,30%] gap-0">
            <div className="">
              <h2 className='text-[18px] font-semibold'>Full Name</h2>
              <input type="text" placeholder='Enter your Name' className='p-3 w-full h-[30px] border-black rounded-[5px]'/>
            </div>
            <div className="">
               <h2 className='text-[18px] font-semibold'>Email</h2>
               <input type="text" placeholder='Enter your email' className='p-3 w-full h-[30px] border-black rounded-[5px]'/>
            </div>
            <div className="">
                <h2 className='text-[18px] font-semibold'>Password</h2>
                <input type="text" placeholder='Enter your password' className='p-3 w-full h-[30px] border-black rounded-[5px]'/>
            </div>
          </div>
          <div className=" grid grid-rows-[30%,30%,30%] gap-0">
            <div className="">
              <h2 className='text-[18px] font-semibold'>Username</h2>
              <input type="text" placeholder='Enter your username' className='p-3 w-full h-[30px] border-black rounded-[5px]'/>
            </div>
            <div className="">
               <h2 className='text-[18px] font-semibold'>Phone Number</h2>
               <input type="text" placeholder='Enter your number' className='p-3 w-full h-[30px] border-black rounded-[5px]'/>
            </div>
            <div className="">
                <h2 className='text-[18px] font-semibold'>Confirm Password</h2>
                <input type="text" placeholder='confirm your password' className='p-3 w-full h-[30px] border-black rounded-[5px]'/>
            </div>
          </div>
               
        </div>
        <div className="">
          <h2 className='text-[20px] font-bold'>Gender</h2>
          <div className="grid grid-cols-3 p-3 ">
            <div className="">
              <input type="checkbox" />  Male
            </div>
            <div className="">
              <input type="checkbox" />Female
            </div>
            <div className="">
              <input type="checkbox" />Prefer Not to say
            </div>
          </div>
          <div className="">
            <button className='h-[40px] w-full bg-green-600 hover:bg-green-700  text-white rounded-[15px]'>Register</button>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Register