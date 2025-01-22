import React from 'react';
const NewsLetter = () => {
  return (
    <div className='newsletter w-[65%] h-60vh flex flex-col items-center justify-center mx-auto px-[140px] lg:px-[85px] mb-[150px] bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)] gap-[30px] md:h-[55vh] xl:h-[55vh] sm:w-[30%]  '>
        <h1 className='text-[#454545] text-[55px] sm:text-[10px] font-semibold'>Get Exclusive Offers On Your Email</h1>
        <p className='text-[20px] text-[#454545] sm:text-[10px]'>Subscribe to our newsletter and stay updated</p>
        <div className=' flex items-center justify-between bg-white w-[730px] sm:w-[300px] h-[70px] rounded-[80px] border-solid border lg:w-[500px]'>
            <input className='w-[500px] ml-[30px] sm:w-[100px] border-none outline-none text-[#616161] text-[16px]' type="email" placeholder='Your Email id  ' />
            <button className=' w-[210px] sm:w-[120px] lg:w-[180px]  h-[70px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer'>Subscribe</button>
            </div>      
    </div>
  )
}

export default NewsLetter
