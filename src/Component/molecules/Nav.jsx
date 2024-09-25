import React, { useState } from "react";
import logo from "../images/logoyellow.png"
import { Links} from "../atoms";


const navLinks = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Services",
    to: "/services",
  },
  {
    text: "Contact",
    to: "/contact",
  }
];
const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobileHandler = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="px-5 lg:px-14 py-5 flex items-center justify-between w-full  z-20 bg-primary">
        <div className="flex items-center justify-between gap-2 lg:pt-0 pt-3">
            <img src={logo} alt="logo" className="lg:w-[3rem] w-[2rem]" />
        <h1 className="text-sec lg:text-2xl text-lg">PennyBox</h1>
        </div>
       
      <div
        className={`${
          !isMobile ? `translate-y-0` : `translate-y-full `
        } lg:scale-y-100 z-20 flex lg:flex-row flex-col  lg:gap-12 gap-20 lg:px-0 px-12 lg:py-0 py-12 lg:relative lg:w-auto w-full lg:h-auto  h-screen fixed  top-[]  lg:inset-auto inset-0 lg:overflow-y-hidden overflow-y-visible bg-primary text-center transition-transform duration-700 ease-in`}
        onBlur={() => {
          setIsMobile(false);
        }}
        tabIndex={20}
      >
        <div className="m-0 lg:m-auto  flex flex-col lg:flex-row lg:float:right lg:gap-16 gap-20">
          {navLinks.map((items) => (
            <Links {...items} />
          ))}
        </div>
      </div>
      <div
        className="w-6 cursor-pointer lg:hidden origin-left"
        onClick={mobileHandler}
        onBlur={() => setIsMobile(false)}
        tabIndex={10}
      >
        <span className={`${!isMobile ? "rotate-0" : "rotate-45"} w-full h-[2px] bg-white block transition-all duration-700 ease-in-out `}></span>
        <span className={`${!isMobile ? "rotate-0" : "rotate-[-45deg] translate-y-[-7px]"} w-full h-[2px] bg-white block mt-1.5 transition-all duration-700 ease-in-out `}></span>
      </div>
    </div>
  );
};

export default Nav;