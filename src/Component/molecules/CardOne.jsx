import React from "react";
import { Card } from "../atoms";

const cardDetails = [
  {
    index:1,
    title: "Loan Request",
    text:
      "we understand that small businesses are the backbone of our economy. That's why we offer tailored loan solutions designed to meet the unique needs of entrepreneurs like you. Whether you’re looking to expand your operations, invest in new equipment, or manage cash flow, we’re here to support your growth.",
  },
  {
    index:2,
    title: "Savings",
    text:
      "Are you looking to grow your savings in a simple and effective way? Join our Ajo savings program! Whether you prefer to save daily, weekly, or monthly, we provide a flexible platform that fits your lifestyle and financial goals.",
  },
  {
    index:3,
    title: "Financial Advisory",
    text:
      "we believe that making informed financial decisions is key to achieving your financial goals. That's why we offer comprehensive financial advisory services designed to help you navigate the complexities of personal finance and investments. ",
  },
];

const CardOne = () => {
  return (
    <div className="bg-light lg:px-14 px-5 lg:py-16 py-10">
        <div className="flex flex-row items-center">
        <h1 className="text-primary  lg:text-3xl text-xl font-bold pr-10">What we do</h1>
        <span className="h-[2px] lg:w-3/4 w-full bg-primary block"></span>
        </div>
     <div className="flex lg:flex-row flex-col lg:gap-16 gap-8 justify-center items-center lg:pt-16 pt-10">
        {cardDetails.map((items, i) => (
          <Card key={items.title} {...items} />
        ))}
      </div>
    </div>
  );
};

export default CardOne;