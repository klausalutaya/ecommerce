import React from 'react'
import arrow from '../Assets/Frontend_Assets/arrow.png'
import hero_image from '../Assets/Frontend_Assets/hero_image.png'
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png'

const Hero = () => {
  return (
    <div className='flex h-auto bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)] justify-center '>

      <div className='hero-left  flex-1 flex flex-col justify-center pl-[200px] md:pl-[50px]  leading-[1.5px] '>
        <h2 className='text-[18px] sm:text-[12px] font-bold font-open-sans mb-5'>NEW ARRIVALS ONLY</h2>
        <div className='flex items-center gap-[3px]'>
        <p className='text-[80px] md:text-[50px] font-bold font-open-sans sm:text-[30px]'>new
             </p> 
             <img className='w-[90px] sm:w-[50px] md:w-[60px] ' src={hand_icon} alt="" />
             </div>
        <p className='text-[80px] sm:text-[30px] md:text-[50px] font-open-sans leading-none font-bold'>collections</p>
        <p className='text-[80px] sm:text-[30px] md:text-[50px] font-open-sans leading-none font-bold'>for everyone</p>

      
        <button className='mt-[30px] md:gap-2 flex justify-center items-center gap-[15px] md:text-[20px]   text-white text-[23px] font-open-sans w-[240px]  h-[70px] rounded-[75px] bg-red-500 font-medium' >Latest Collection     <img  src={arrow} alt="" />  </button>
      
    
      </div>

      <div className='flex items-center justify-center flex-1 h-auto hero-right '>
    <img className='' src={hero_image} alt="" />
    </div>
    </div>
  )
}

export default Hero
