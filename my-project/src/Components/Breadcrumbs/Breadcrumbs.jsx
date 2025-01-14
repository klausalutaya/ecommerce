import React from 'react'
import arrow_icon from '../Assets/Frontend_Assets/breadcrum_arrow.png'
const Breadcrumbs = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumbs flex gap-[8px] text-[16px] my-[60px] mx-[170px]  items-center'>
        Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrumbs
