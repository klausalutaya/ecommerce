import React from 'react'

const LoginSignup = () => {
  return (
    <div className='container-login  bg-[#fce3fe]  w-[100%] h-[100vh] pt-[60px]'>
      <div className='flex-1 w-[580px] h-[500px] bg-white mx-auto py-[40px] px-[60px]'>
        <h1 className='text-[35px] my-2 font-eurostile-extendedblack'>Sign up</h1>
        <div className='flex flex-col gap-4 '>
          <input className='h-[52px] outline-none w-[100%] pl-[20px] border border-[#c9c9c9] text-[18px] text-[#5c5c5c]' type="text" placeholder='Your Name' />
          <input className='h-[52px] outline-none w-[100%] pl-[20px] border border-[#c9c9c9] text-[18px] text-[#5c5c5c]' type="email" placeholder='Email Address' />
          <input className='h-[52px] outline-none w-[100%] pl-[20px] border border-[#c9c9c9] text-[18px] text-[#5c5c5c]' type="password" placeholder='Password' />
        </div>
        
        <button className=' mt-5 w-[460px] h-[52px] text-white bg-[#ff4141] border-none text-[24px] font-[500px] cursor-pointer'>Continue</button>
   
        <div className='flex gap-2 mt-3'>
        <p>Already have an account?</p> <span className='text-red-500'>Login Here</span>
        </div>
        <div className="login-signup-agree flex gap-3 mt-5">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
