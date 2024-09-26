import React from "react";
import { Card2 } from "../atoms";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

const card= [
  {
    index:1,
    text: "When I wanted to start my indomie wholesale business, I reached out to PennyBox and after going through the necessary verification, I was granted a loan at an affordable interest rate",
    name:"Iya Basirat",
  },
  {
    index:2,
    text: "I wanted to expand my business and build another tailor shop at another location. PennBox helped me to accomplished this",
    name:"Samuel Tailors",
  },
  {
    index:3,
    text: "I had issue with paying my rent, I collected loan from PennyBox at a good interest rate, and I was able to pay back with a monthly installation of my salary",
    name:"Miss Juliet ",
  },
  {
    index:4,
    text: "When I wanted to start my indomie wholesale business, I reached out to PennyBox and after going through the necessary verification, I was granted a loan at an affordable interest rate",
    name:"Iya Basirat",
  },
  {
    index:5,
    text: "I wanted to expand my business and build another tailoring shop at another location. PennBox helped me to accomplished this",
    name:"Samuel Tailors",
  },
  {
    index:6,
    text: "I had issue with paying my rent, I collected loan from PennyBox at a good interest rate, and I was able to pay back with a monthly installation of my salary",
    name:"Miss Juliet ",
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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}

      className="py-10 flex flex-row items-center justify-center lg:px-7 px-5"
    >
      
        
        {card.map((items) =>(
          <SwiperSlide className="cursor-pointer"  >
             <Card2 key={items.title} {...items} />
          </SwiperSlide>
         ))}
       </Swiper>
     
       
    </section>
  );
};

export default Testimonial;