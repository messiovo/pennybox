import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const card= [
  {
    index:1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    name:
      "Iya Basirat",
  },
  {
    index:2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    name:
      "Samuel Tailors",
  },
  {
    index:3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    name:
      "Mr. Joshua ",
  },
];

const Testimonial = () => {
  return (
    <div className="lg:px-16 px-8 lg:py-16 py-10 ">
        <div className="flex flex-row items-center">
        <h1 className="text-primary  lg:text-3xl text-2xl font-bold lg:pr-10 lg:text-left">Testimonial</h1>
        <span className="h-[2px] lg:w-3/4 w-full bg-primary lg:block hidden"></span>
        </div>
       
    </div>
  );
};

export default Testimonial;