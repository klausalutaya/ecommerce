import React, { useContext, useState, useRef } from "react";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className=" lg:py- lg:px-[40px] xl:py-[5px] xl:px-[50px] flex items-center justify-between mx-auto mt-5 mb-5   sm:mt-0">
      <div className="flex items-center justify-center gap-2 ml-[80px] xl:ml-0 lg:ml-0 sm:px-[5px] sm:ml-0 sm:gap-1">
        <img className=" xl:w-[40px] lg:w-[30px] sm:w-[28px]" src={logo} alt="Logo" />
        <p className="text-[35px]  xl:text-[28px]   lg:text-[24px] sm:text-[15px]  font-open-sans font-bold mt-2">
          SHOPPER
        </p>
      </div>
      <ul
       className={`
        xl:px-[60px] 
        xl:gap-[40px] 
        lg:gap-[30px] 
        flex gap-[60px] 
        text-[25px] 
        xl:text-[25px] 
        lg:text-[23px]  
        md:flex-col 
        md:h-auto 
        md:absolute 
        md:top-[90px] 
        md:w-[35%]
        md:bg-white 
        md:left-[500px]
        md:shadow-lg 
        md:p-4 
        md:rounded-lg 
        md:gap-[20px] 
        
        sm:flex
        sm:flex-col 
        sm:h-auto 
        sm:top-[50px] 
        sm:absolute 
        sm:w-[30%] 
        sm:left-[274px]  // This will now work
        sm:shadow-lg
        sm:p-4
        sm:rounded-lg
        sm:gap-[20px]
        
        lg:mt-2 
        transition-all 
        duration-300
        ${isMenuOpen ? "md:flex sm:flex" : "md:hidden sm:hidden"}
      `}
      >
        <li
          onClick={() => setMenu("shop")}
          className="hover:border-[#AA0000] hover:border-b-[1px] hover:text-[#AA0000] transition duration-300 ease-in-out font-open-sans md:border-none"
        >
          <Link to="/">Shop</Link>
        </li>
        <li
          onClick={() => setMenu("mens")}
          className="hover:border-[#AA0000] hover:border-b-[1px] hover:text-[#AA0000] transition duration-300 ease-in-out font-open-sans md:border-none"
        >
          <Link to="/mens">Men</Link>
        </li>
        <li
          onClick={() => setMenu("womens")}
          className="hover:border-[#AA0000] hover:border-b-[1px] hover:text-[#AA0000] transition duration-300 ease-in-out font-open-sans md:border-none"
        >
          <Link to="/womens">Women</Link>
        </li>
        <li
          onClick={() => setMenu("kids")}
          className="hover:border-[#AA0000] hover:border-b-[1px] hover:text-[#AA0000] transition duration-300 ease-in-out font-open-sans md:border-none"
        >
          <Link to="/kids">Kids</Link>
        </li>
      </ul>
      <div className="flex items-center gap-5 mr-[80px] xl:mr-[30px] lg:mr-0 sm:mr-0 ">
        <button className="hover:bg-gray-500 border rounded-[40px] w-[180px] h-[60px] text-[20px] font-open-sans mt-1 xl:w-[120px] xl:h-[45px] xl:text-[18px] lg:w-[110px] lg:h-[40px] sm:text-[16px] sm:w-[120px] sm:ml-6 sm:h-[30px] sm:mt-2">
          <Link to="/login">Login</Link>
        </button>
        <Link to="/cart">
          <img className="w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] mt-3" src={cart_icon} alt="Cart" />
        </Link>
        <div className="w-[22px] h-[22px] flex justify-center items-center ml-[-32px] mt-[-12px] rounded-[11px] text-[14px] bg-red-600 text-white">
          {getTotalCartItems()}
        </div>
        {/* Hamburger button */}
        <button
          className={`group w-12 h-12 items-center justify-center rounded transition bg-white text-slate-800 hidden md:flex sm:flex sm:w-[40px] sm:mt-2 ${
            isMenuOpen ? "aria-pressed" : ""
          }`}
          onClick={toggleMenu}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="w-6 h-6 pointer-events-none fill-current sm:w-4 sm:h-4"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className={`origin-center transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "rotate-[315deg] translate-y-0 translate-x-0"
                  : "-translate-y-[5px] translate-x-[7px]"
              }`}
              y="7"
              width="9"
              height="2"
              rx="1"
            ></rect>
            <rect
              className={`origin-center transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45" : ""
              }`}
              y="7"
              width="16"
              height="2"
              rx="1"
            ></rect>
            <rect
              className={`origin-center transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "rotate-[135deg] translate-y-0"
                  : "translate-y-[5px]"
              }`}
              y="7"
              width="9"
              height="2"
              rx="1"
            ></rect>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;