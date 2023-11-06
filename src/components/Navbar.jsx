import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-3 z-[100] absolute w-full '>
    <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>SRINIVASH</h1>
      <div>
        <button className='text-white pr-4'>Sign in</button>
        <button className='bg-red-700 px-6 py-2 rounded cursor-pointer text-white '>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar