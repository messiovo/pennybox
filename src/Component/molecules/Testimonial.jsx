import React from "react";
import { Card2 } from "../atoms";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';


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
  {
    index:4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    name:
      "Iya Basirat",
  },
  {
    index:5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    name:
      "Samuel Tailors",
  },
  {
    index:6,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    name:
      "Mr. Joshua ",
  },
];

const Testimonial = () => {
  return (
    <section className="lg:px-16 px-8 lg:py-16 py-10 ">
        <div className="flex flex-row items-center">
          <h1 className="text-primary  lg:text-3xl text-2xl font-bold lg:pr-10 lg:text-left">Testimonial</h1>
            <span className="h-[2px] lg:w-3/4 w-full bg-primary lg:block hidden"></span>
        </div>
        <Swiper
        breakpoints={
          {
            340:{
              slidesPerView:1,
            },
            700:{
              slidesPerView:3,
            },
          }
        }
       spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}

      className="lg:py-16 py-10 flex items-center justify-center"
    >
      
        
        {card.map((items) =>(
          <SwiperSlide  >
             <Card2 key={items.title} {...items} />
          </SwiperSlide>
         ))}
       </Swiper>
     
       
    </section>
  );
};

export default Testimonial;