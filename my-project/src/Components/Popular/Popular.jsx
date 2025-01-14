import React from 'react'
import data_product from '../Assets/Frontend_Assets/data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-[10px] h-[90vh] '>
      <h1 className='text-[#171717] text-[50px] font-semibold'>POPULAR IN WOMEN</h1>
      <hr className='border-gray-500 w-[200px]  bg-[#252525] rounded-[10px]'></hr>
      <div className='popular-item mt-[50px] flex gap-[50px] sm:grid sm:grid-cols-1 sm:gap-[5px] md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid-cols-2 xl:grid'>
    {data_product.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })}
      </div>
    </div>
  )
}

export default Popular
