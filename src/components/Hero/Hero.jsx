import React from "react";
import bg_blue from "../../assets/images/bg-blue.svg";
import girl from "../../assets/images/girl.svg";
import girl_sh from "../../assets/images/girl_sh.svg";
import orenge_r from "../../assets/images/orenge_r.svg";
import sms from "../../assets/images/sms.svg";

const Hero = ({
  subtitle = "Order Restaurant food, takeaway and Groceries.",
  title1 = "Feast Your Senses,",
  title2 = "Fast and Fresh",
  description = "Enter a postcode to see what we deliver",
  placeholderText = "e.g. EC4R 3TE",
  buttonText = "Search",
  onSearch = () => {},
  showNotifications = true,
  notificationCount = 3
}) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    onSearch(input.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="relative w-full max-w-[1528px] h-[610px] rounded-xl overflow-hidden">
        {/* Blue Background */}
        <img
          src={bg_blue}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content - Left Side */}
        <div className="absolute top-24 left-14 z-10 max-w-md">
          <p className="text-white text-sm font-normal mb-4 tracking-wide">
            {subtitle}
          </p>
          <h1 className="text-white text-6xl font-bold leading-tight mb-2">
            {title1}
          </h1>
          <h1 className="text-orange-500 text-6xl font-bold leading-tight mb-6">
            {title2}
          </h1>
          <p className="text-white text-base mb-8">
            {description}
          </p>

          {/* Search Input */}
          <form onSubmit={handleSearch} className="relative w-96 h-14">
            <input
              type="text"
              placeholder={placeholderText}
              className="w-full h-full pl-6 pr-48 rounded-full text-base outline-none bg-white"
            />
            <button 
              type="submit"
              className="absolute right-0 top-0 w-48 h-14 bg-orange-500 text-white font-semibold text-base rounded-full hover:bg-orange-600 transition-colors"
            >
              {buttonText}
            </button>
          </form>
        </div>

        {/* Girl Shadow */}
        <img
          src={girl_sh}
          alt="shadow"
          className="absolute w-[805px] h-[537px] top-20 left-96 z-0 opacity-20"
        />

        {/* Girl Image */}
        <img
          src={girl}
          alt="girl"
          className="absolute w-[465px] h-[541px] top-16 left-[690px] z-20"
        />

        {/* Orange Rectangle */}
        <div className="absolute w-[626px] h-[565px] top-11 left-[902px] rounded-tl-[282px] rounded-br-xl overflow-hidden z-10">
          <img
            src={orenge_r}
            alt="orange background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Notification Cards */}
        {showNotifications && (
          <>
            {notificationCount >= 1 && (
              <img
                src={sms}
                alt="notification 1"
                className="absolute top-18 right-20 z-30 w-[350px] h-[120px]"
              />
            )}
            {notificationCount >= 2 && (
              <img
                src={sms}
                alt="notification 2"
                className="absolute top-55 right-12 z-30 w-[350px] h-[120px]"
              />
            )}
            {notificationCount >= 3 && (
              <img
                src={sms}
                alt="notification 3"
                className="absolute top-97 right-20 z-30 w-[350px] h-[120px]"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;