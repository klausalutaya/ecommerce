import React from 'react'
import arrow_icon from '../Assets/Frontend_Assets/breadcrum_arrow.png'
const Breadcrumbs = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumbs flex gap-[8px] text-[16px] my-[60px] mx-[170px] sm:mx-3 sm:text-[10px] sm:font-[600] sm:gap-[10px]  items-center sm:my-[20px]'>
        Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrumbs
