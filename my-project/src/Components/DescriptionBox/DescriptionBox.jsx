import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='my-[120px] mx-[170px]'>
      <div className="flex descripnavigator">
        <div className="flex descripnavbox items-center justify-center text-[16px] font-[600] h-[70px] w-[171px] border border-[#d0d0d0] border-solid ">Description  </div>
        <div className="descripnavboxfade flex descripnavbox items-center justify-center text-[16px] text-[#555] bg-[#FBFBFB] h-[70px] w-[171px] border border-[#d0d0d0] border-solid"> Reviews(122)</div>
      </div>
      <div className="flex flex-col gap-[25px] border border-solid border-[#d0d0d0] p-[48px] pb-[70x]">
        <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where business and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessbility, and the global reach they offer. E-commerce websites typically display products or services along with detailed description,images,prices, and any available variations(e.g sizes,colors). Each product usually has its own dedicated page with relevant information.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
