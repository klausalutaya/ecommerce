import React, { useContext} from "react";
import star_icon from '../Assets/Frontend_Assets/star_icon.png'
import star_dull_icon from '../Assets/Frontend_Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
  const {product} =  props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='flex mx-[150px] sm:mx-[8px]  productdisplay sm:flex-col '>
      <div className='flex gap-[16px] w-[60%] sm:w-[100%]'>
    <div className='flex flex-col items-center justify-center  gap-[16px]'>
<img className='h-[163px] w-[300px] sm:h-[100px] sm:w-[260px]' src={product.image} alt="" />
<img className='h-[163px] w-[300px] sm:h-[100px] sm:w-[260px]  ' src={product.image} alt="" />
<img className='h-[163px]  w-[300px] sm:h-[100px] sm:w-[260px]' src={product.image} alt="" />
<img className='h-[163px]  w-[300px] sm:h-[100px] sm:w-[260px] ' src={product.image} alt="" />

    </div>
    <div className=' productdisplayimg'>
      <img  className='main-ing w-[1400px] h-[700px] sm:w-[1200px] sm:h-[450px]' src={product.image} alt="" />

    </div>
      </div>
      
      <div className='right mx-[40px] flex flex-col w-[50%] sm:w-[100%] sm:mx-0'>
      <h1 className='text-[#3d3d3d] text-[24px] font-[700] sm:text-[16px] sm:mt-5 '>{product.name}</h1>
        <div className="flex items-center productdisplay-right mt-[13px] gap-1 text-[16px]">
          <img className='h-[13px]' src={star_icon} alt="" />
          <img className='h-[13px]' src={star_icon} alt="" />
          <img className='h-[13px]' src={star_icon} alt="" />
          <img className='h-[13px]' src={star_icon} alt="" />
          <img className='h-[13px]' src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className='my-[10px] gap-[30px] sm:my-[2px]'>
          <div className='flex gap-3 my-[10px] sm:my-[2px]'>
          <div className='flex line-through old-price text-[#818181]'>
            ${product.old_price}
          </div>
          <div className='text-red-900 font-[800px] new-price'>
           ${product.new_price}
          </div>
          </div>
          <div className='right-description text-[10px] my-[40px] sm:my-[5px]'>
        A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as undershirt or outer garment.
          </div>
          <div className='my-[40px] sm:my-[8px]'>
          <h1>Select Size</h1>
          <div className="flex gap-5 mt-3 cursor-pointer divproduct-displaysize">
            <div className='sm:py-[18px] sm:px-[15px] py-[18px] px-[24px] border-[1px] rounded-sm hover:bg-slate-400 hover:text-white'>S</div>
            <div className='sm:py-[18px] sm:px-[15px] py-[18px] px-[24px] border-[1px] rounded-sm hover:bg-slate-400 hover:text-white'>M</div>
            <div className= 'sm:py-[18px] sm:px-[15px] py-[18px] px-[24px] border-[1px] rounded-sm hover:bg-slate-400 hover:text-white'>L</div>
            <div className='sm:py-[18px] sm:px-[15px] py-[18px] px-[24px] border-[1px] rounded-sm hover:bg-slate-400 hover:text-white'>XL</div>
            <div className='sm:py-[18px] sm:px-[15px] py-[18px] px-[24px] border-[1px] rounded-sm hover:bg-slate-400 hover:text-white'>XXL</div>
          </div>
          </div>
          <button onClick={() =>{addToCart(product.id)}} className='py-[20px] px-[40px] w-[200px] text-[16px] font-[600] bg-[#FF4141] mb-[40px] outline-none border-none text-white '>ADD TO CART</button>
          <div className='gap-2 mt-5'>
          <p className=' display-rightcategory'><span className='font-[700] '> Category:</span> Women, T-Shirt, Crop Top</p>
          <p className='mt-2 display-rightcategory'><span className='font-[700]'> Tags:</span> Modern, Latest, Crop Top</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
