import React from 'react'
import new_collection from '../Assets/Frontend_Assets/new_collections'
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div className=' flex flex-col items-center gap-[10px] mb-[120px] '>
      <h1 className='text-[#171717] text-[50px] font-semibold'>NEW COLLECTIONS</h1>
        <hr className='border-gray-500 w-[200px]  bg-[#252525] rounded-[10px]'></hr>
        <div className='md:grid-cols-2 grid grid-cols-4 mt-[50px] gap-[30px] sm:grid-cols-1'>
        {new_collection.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })}
        </div>
      
    </div>
  )
}

export default NewCollections
