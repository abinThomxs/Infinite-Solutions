import React from 'react'
import './banner.css'
type Props = {}

const Banner = (props: Props) => {
  
  return (
    <div id='banner' className='w-full flex justify-center items-center md:mx-32 my-16 bg-blue-100 '>
      <div id='shad' className='md:w-6/12 flex justify-center items-center p-8 mt-16  mb-16 bg-white '>
      <div className='banner text-center  '>
        {/* <h1 className='text-3xl py-4'>Infinite Solutions</h1> */}
        <img src="/assets/logo1.png" alt="" className='h-28 -z-1' />
        <h1>Upto 30% off on 1st Booking</h1>
      </div>
      <div>
        <img src="/assets/kids.png" alt="" className='h-40 -z-1' />
      </div>
    </div>
    </div>
    
  )
}

export default Banner;