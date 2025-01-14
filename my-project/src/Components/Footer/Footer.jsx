import React from 'react'
import footer_logo from '../Assets/Frontend_Assets/logo_big.png'
import instagram_icon from '../Assets/Frontend_Assets/instagram_icon.png'
import pinterest_icon from '../Assets/Frontend_Assets/pintester_icon.png'
import whatsapp from '../Assets/Frontend_Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className=''>
      <div className='flex justify-center items-center mb-[30px] gap-2'>
        <img className='w-[80px]' src={footer_logo} alt="" />
        <p className='text-[35px]'>SHOPPER</p>
      </div>
      <ul className='flex gap-[30px] justify-center items-center mb-[30px] font-eurostile-black'>
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
      </ul>
      <div className='flex justify-center items-center gap-[20px] mb-[35px]'>
        <div className='container-logo'>
        <img className='w-[20px] ' src={instagram_icon} alt="" />
        </div>
        <div className='container-logo '>
        <img className='w-[20px]' src={pinterest_icon} alt="" />
        </div>
        <div className='container-logo '>
        <img className='w-[20px]' src={whatsapp} alt="" />
        </div>
      </div>
    
      <div className='flex flex-col justify-center items-center'>
      <hr className='border-gray-500 w-[90%]  bg-[#252525] rounded-[10px]'></hr>
        <p className='mt-5'>Copyright @ 2023 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
