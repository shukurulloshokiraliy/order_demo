import React from "react";
import loc from "../../assets/images/loc.svg";
import korzinka from "../../assets/images/korzinka.svg";
import forward from "../../assets/images/Forward_Btn.svg";
import logo from "../../assets/images/Logo.svg";
import user from "../../assets/images/user.svg";

const Header = ({ 
  promoText = "Get 5% Off your first order,",
  promoCode = "ORDER5",
  location = "Regent Street, A4, A4201, London",
  cartItems = 23,
  cartTotal = 79.89,
  currency = "GBP",
  navLinks = [
    { text: "Home", active: true },
    { text: "Browse Menu", active: false },
    { text: "Special Offers", active: false },
    { text: "Restaurants", active: false },
    { text: "Track Order", active: false }
  ]
}) => {
  return (
    <header className="w-full font-['Poppins'] overflow-x-hidden">
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-white px-[5%] py-2.5 flex-wrap border border-[#e0e0e0] rounded-bl-xl rounded-br-xl h-[70px] box-border mx-[100px] max-md:flex-col max-md:items-start max-md:gap-2.5 max-md:h-auto max-md:mx-4">
        <p className="font-medium text-[15px] leading-[100%] m-0">
          {promoText}{" "}
          <span className="font-bold underline text-[#fc8a06]">Promo: {promoCode}</span>
        </p>
        
        <div className="flex items-center gap-2">
          <img src={loc} alt="location" className="w-[25px] h-[25px]" />
          <span>{location}</span>
          <a href="#" className="text-sm underline text-[#fc8a06]">
            Change Location
          </a>
        </div>

        <div className="flex items-center justify-between bg-[#028643] text-white w-[378px] h-[70px] border border-[#028643] rounded-bl-xl rounded-br-xl opacity-100 px-5 box-border font-['Inter'] -mt-3 -mr-[86px] relative top-0 max-md:w-full max-md:mt-2.5 max-md:mr-0">
          <img src={korzinka} alt="cart" className="flex items-center justify-center w-[60px] h-[60px]" />
          
          <div className="flex items-center gap-[25px]">
            <p className="font-bold text-lg leading-[100%] m-0">{cartItems} Items</p>
            <p className="font-bold text-lg leading-[100%] m-0">{currency} {cartTotal}</p>
          </div>
          
          <img src={forward} alt="arrow" className="w-10 h-10 text-[#059669] rounded-full flex items-center justify-center" />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between items-center px-[5%] py-5 flex-wrap max-md:flex-col max-md:gap-4">
        <img src={logo} alt="OrderUK" className="w-[215px] h-[53px]" />

        <nav className="flex items-center gap-[30px] max-lg:gap-[15px] max-md:flex-wrap max-md:justify-center">
          {navLinks.map((link, index) => (
            link.active ? (
              <button 
                key={index}
                className="bg-[#fc8a06] text-white border-none rounded-[120px] px-[35px] py-3 text-lg cursor-pointer max-lg:px-[25px] max-lg:py-2.5 max-lg:text-base hover:bg-[#f7c286]"
              >
                {link.text}
              </button>
            ) : (
              <a 
                key={index}
                href="#" 
                className="font-medium text-lg text-black no-underline transition-colors duration-300 hover:text-[#fc8a06]"
              >
                {link.text}
              </a>
            )
          ))}
        </nav>

        <button className="bg-[#000e27] text-white border-none rounded-[50px] px-[30px] py-[15px] text-lg flex items-center gap-2.5 cursor-pointer max-lg:px-[25px] max-lg:py-3 max-lg:text-base hover:bg-[#3e4147]">
          <img src={user} alt="user" className="w-[31px] h-[27px]" />
          Login/Signup
        </button>
      </div>
    </header>
  );
};

export default Header;