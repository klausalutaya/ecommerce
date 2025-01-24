import React from 'react'
import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className=' offers w-[65%] h-auto flex m-auto py-0 px-[70px]  mb-[140px]  bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)] xl:mt-[140px] mt-[140px] items-center justify-center xl:py-[20px] xl:w-[70%] lg:w-[75%] sm:flex-col sm:items-center sm:py-[35px] sm:justify-center '>
      <div className='flex flex-col justify-center flex-1 offers-left sm:items-center sm:justify-center'>
        <h1 className='text-[#171717] text-[70px] font-semibold xl:text-[60px] lg:text-[55px] sm:text-[25px] '>Exclusive</h1>
        <h1 className='text-[#171717] text-[70px] font-semibold xl:text-[60px] lg:text-[55px] sm:text-[25px]'>Offers For You</h1>
        <p className='text-[#171717] text-[22px] xl:text-[20px] font-semibold lg:text-[18px] sm:text-[14px]'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='w-[282px] h-[70px] rounded-[35px] bg-red-700 text-white border-none text-[22px] mt-[30px] cursor-pointer sm:w-[230px] sm:h-[40px] sm:text-[18px] sm '>Check Now</button>
      </div>

      <div className='flex items-center justify-end flex-1 offers-right'>
        <img className='xl:w-[350px] lg:w-[300px] sm:hidden' src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
