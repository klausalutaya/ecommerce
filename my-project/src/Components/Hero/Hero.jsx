import React from 'react'
import arrow from '../Assets/Frontend_Assets/arrow.png'
import hero_image from '../Assets/Frontend_Assets/hero_image.png'
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png'

const Hero = () => {
  return (
    <div className='flex h-auto bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)] justify-center sm:flex-col sm:items-center  sm:py-[30px] '>

      <div className='hero-left  flex-1 flex flex-col justify-center pl-[200px]  md:pl-[50px] lg:pl-[50px]  leading-[1.5px] sm:flex sm:justify-center sm:items-center sm:pl-[20px] '>
        <h2 className='text-[18px] sm:text-[12px] font-bold font-open-sans mb-5  lg:text-[16px]'>NEW ARRIVALS ONLY</h2>
        <div className='flex items-center gap-[3px]'>
        <p className='text-[80px] md:text-[50px] lg:text-[50px] font-bold font-open-sans sm:text-[25px] sm:mb-4'>new
             </p> 
             <img className='w-[90px] lg:w-[70px] sm:w-[50px] md:w-[60px] sm:hidden ' src={hand_icon} alt="" />
             </div>
        <p className='text-[80px] sm:text-[25px] md:text-[50px] font-open-sans leading-none font-bold lg:text-[50px] sm:mb-1'>collections</p>
        <p className='text-[80px] sm:text-[25px] md:text-[50px] font-open-sans leading-none font-bold lg:text-[50px] sm:mb-2'>for everyone</p>

      
        <button className='mt-[30px] md:gap-2 flex justify-center items-center gap-[15px] md:text-[20px]   text-white text-[23px] font-open-sans w-[240px]  h-[70px] rounded-[75px] bg-red-500 font-medium sm:h-[40px] sm:w-[150px] sm:text-[15px] sm:mt-2' >Latest Collection     <img className='sm:w-[14px]'  src={arrow} alt="" />  </button>
      
    
      </div>

      <div className='flex items-center justify-center flex-1 h-auto hero-right '>
    <img className='sm:hidden' src={hero_image} alt="" />
    </div>
    </div>
  )
}

export default Hero
