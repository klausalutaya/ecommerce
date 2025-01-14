import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/Frontend_Assets/cart_cross_icon.png'

const cartItems = () => {
    const {getTotalCartAmount, all_product,cartItems,removeFromCart} = useContext(ShopContext);
//    

  return (
    <div className='cartitems my-[100px] mx-[170px]'>
       <div class="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] gap-[75px] py-[25px] items-center text-[#454545] text-[18px] font-[600]">


            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-[3px] bg-[#e2e2e2] border-0'></hr>
      {all_product.map((e) => {
        if(cartItems[e.id]>0)
        {
            return  <div>
                <div className=" grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-[45px] py-[15px] items-center text-[#454545] text-[14px] font-[600]">
                    <img className='h-[62px]'  src={e.image} alt="" />
                 <p>{e.name}</p>
                    <p className=''>${e.new_price}</p>
                    <button className='w-[64px] h-[50px]  border-[2px] border-solid border-[#ebebeb] bg-white cartitems'>{cartItems[e.id]}</button>
                    <p className='mx-[10px]'>${e.new_price*cartItems[e.id]}</p>
                    <img className='w-[15px] mx-[40px] cursor-pointer' src={remove_icon} onClick={() =>{removeFromCart(e.id)}} alt="" />
                 </div>
                 <hr></hr>
             </div>
        }
        return null;
      })}
      <div className='flex my-[120px] mx-[0]'>
        <div className='flex-col flex-1 mr-[200px] gap-[40px]'>
        <h1 className='text-[30px] font-[600]'>Cart Totals</h1>
        <div>
            <div className="flex justify-between py-[15px] px-[0]">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr></hr>
            <div className="flex justify-between py-[15px] px-[0]">
            <p>Shipping Fee</p>
            <p>Free</p>
            </div>
               <hr></hr>
               <div className="flex justify-between cartitems-total-item py-[15px] px-[0]">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
               </div>
               <button className='w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-white text-[16px]font-[600] cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
        </div>
        <div className="flex-1">
            <p className='text-[#555] font-[600]'>If you have a promo code, Enter it here</p>
            <div className="flex w-[404px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea]">
                <input className='bg-transparent border-none outline-none text-[16px] w-[330px] h-[50px]' type="text" placeholder='Promo Code' />
                <button className='w-[150px] h-[58px] text-[16px] text-white bg-black cursor-pointer'>Submit</button>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default cartItems

