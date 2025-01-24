import React from 'react'
import data_product from '../Assets/Frontend_Assets/data'
import Item from '../Item/Item'
const RelatedProducts = () => {
  return (
    <div className='flex flex-col items-center relatedprod gap-[10px] h-auto'>
        <h1 className='text-[#171717] text-[50px] font-[600]'>Related Products</h1>
        <hr className='w-[200] h-[6px] rounded-[10px] bg-[#252525]'></hr>
    <div className='mt-[50px] flex gap-[30px] sm:grid sm:grid-cols-2'>
        {data_product.map((item,i) => {
            return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
    </div>
      
    </div>
  )
}

export default RelatedProducts
