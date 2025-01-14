import React from 'react'
import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className=' xl:px-[100px] xl:mt-[80px]  offers w-[65%] h-auto flex m-auto py-0 px-[70px] mb-[140px] bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)] mt-5 '>
      <div className='offers-left flex-1 flex flex-col justify-center'>
        <h1 className='text-[#171717] text-[70px] font-semibold'>Exclusive</h1>
        <h1 className='text-[#171717] text-[70px] font-semibold'>Offers For You</h1>
        <p className='text-[#171717] text-[22px] font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='w-[282px] h-[70px] rounded-[35px] bg-red-700 text-white border-none text-[22px] mt-[30px] cursor-pointer'>Check Now</button>
      </div>

      <div className='offers-right flex-1 flex items-center justify-end'>
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
