import React from 'react'

function Landing() {
  return (
    <div className='h-[100vh] grid items-center justify-center bg-[#f0f0f0] p-3'>
      <div className="uppercase">
        <h2 className='text-2xl font-bold text-center '>School management </h2>
        <h2 className='text-2xl font-bold text-center'>system</h2>
      </div>
        <div className="bg-slate-300 h-[75vh] w-[400px] rounded-[20px] g-3 grid p-5">
            <h2 className='font-bold text-3xl text-center'>LOGIN</h2>
            <form action="" className='grid gap-4'>
              <div className='gap-3 grid'>
                <p className='text-[20px] font-semibold'>Username</p>
                <input type="text"className='w-full h-[30px] rounded-[20px] ' />
              </div>
             <div className='gap-3 grid'>
                <p className='text-[20px] font-semibold'>Password</p>
                <input type="text" className='w-full h-[30px] rounded-[20px]' />
              </div>
            </form><br />
            <div >
                <button className="h-[40px] bg-[green] w-full text-white rounded-[20px]">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Landing