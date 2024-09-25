import React from "react";
import { Nav } from "./";
import { Link } from "react-router-dom";
import hero from '../images/hero.webp';

const Hero = () => {
  return (
    <>
      <Nav /> 
      <section className="flex justify-between lg:flex-row flex-col-reverse bg-medium text-sec bg-primary">
        <div className="lg:w-2/4  w-full lg:px-16 px-8">
            <div className="flex flex-col items-center lg:gap-6 gap-5">
                <h1 className="lg:text-6xl text-2xl text-center lg:py-6 py-3">EMPOWERING SMES THROUGH THE PROVISIONS OF QUICK <b>LOANS </b></h1>
                <p className="lg:text-lg text-base text-center">-whether you are looking for loan to boost your business or trying to save through our monthly ajo,  we are your number 1 trusted partner.</p>
            </div>
            <div className="flex items-center justify-center lg:mt-16 lg:my-0 my-10 font-semibold">
                <Link to="/contact">
                    <button className="text-sec bg-dark py-2 lg:px-14 px-5 block hover:bg-sec hover:text-dark transition-colors ease-in-out duration-500 ">
                        Request Loan
                    </button>
                </Link>
                <Link to="/contact">
                    <button className="text-dark bg-light py-2 lg:px-14 px-5 mx-auto block hover:bg-sec hover:text-dark transition-colors ease-in-out duration-500 ">
                        Save with us
                    </button>
                </Link>
            </div>
        </div>
        <div className="lg:w-2/4  w-full">
        <img src={hero} alt="hero" className="h-auto"/>
      </div>
    </section>      
    </>
  );
};

export default Hero;