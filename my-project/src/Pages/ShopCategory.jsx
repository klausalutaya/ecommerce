import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import drop_down from '../Components/Assets/Frontend_Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className=''>
      <img className='w-[85%] mx-auto p-1 ' src={props.banner} alt="" />
      <div className="shopcategory-sort flex my-5 mx-[130px] justify-between items-center  ">
        <p>
          <span className=' font-[700px]'>Showing 1 - 12</span> Out of 36 Products
        </p>
        <div className=" mr-[100px] shopcategory-sort flex items-center justify-center gap-1 py-[10px] px-[20px] rounded-[40px] border-[1px] border-[#888] ">
          
          <p>Sort by</p>
          
           <img src={drop_down} alt="" />
        </div>
      </div>
      <div className="2xl:gap-0 shopcategory-prodcuts grid grid-cols-4 gap-[60px] my-[15px] mx-[140px]">
        {all_product.map((item,i) =>{
          if (props.category===item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else {
            return null;
          }
        })}
      </div>
      <div className='loadmore flex items-center justify-center mx-auto my-[20px] w-[200px] h-[55px]  rounded-[75px] bg-[#ededed] text-[#787878] font-eurostile-black font-[500px]'>
        <button className=''>Explore More</button>

      </div>
    </div>
  )
}

export default ShopCategory
