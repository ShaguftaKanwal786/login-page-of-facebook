import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='bg-gray-200 h-screen flex place-items-center justify-center'>

      {/*left side 1st div */}
      <div className='text-3xl w-1/2 px-12 '>
        <Image src={"/pictures/facebook.svg"} width={300} height={300}
         alt="facebook logo" />
         <p className='ml-6 -mt-3'>Facebook helps you connect and share with the people in your life.</p>
      </div>

{/*right side 2nd div */}
      <div className='bg-white flex flex-col p-20 rounded-xl w-1/3'>
        <input className='my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600' type="text" placeholder='Email address or phone number' />
        <input className='my-2 border border-1 border-gray-100 p-3 rounded-md' type="password" placeholder='Password'/>
        <button className='bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md 
        hover:bg-blue-700 '>Log in</button>
        <p className='text-blue-600 my-2 text-center hover:underline cursor-pointer'> Forgotton password?</p>
        <span className='my-2'>
          <hr />
        </span>
        <button className='bg-green-600 my-2 py-2 px-2  text-lg font-bold text-white rounded-md 
        hover:bg-green-700 w-fit mx-auto '>Create new account</button>
      </div>

    </div>
  )
}

export default Home

