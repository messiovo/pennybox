import React from "react";
import { Card } from "../atoms";

const cardDetails = [
  {
    index:1,
    title: "Loan Request",
    text:
      "Our residential networks are built to provide worry-free Internet, allowing your machine to detect when the connection is lost and fix itself.",
  },
  {
    index:2,
    title: "Savings",
    text:
      "We provide, install, maintain and monitor your total security infrastructure to minimize threats, while your employees, customers, partners and remote workers access you safely.",
  },
  {
    index:3,
    title: "Financial Advisory",
    text:
      "We are experienced in this field of Telecommunications cabling and has delivered her services to almost all the Telecommunications companies in Nigeria. ",
  },
];

const CardOne = () => {
  return (
    <div className="bg-primary lg:px-14 px-5">
     <div className="flex lg:flex-row flex-col gap-5 justify-center items-center">
        {cardDetails.map((items, i) => (
          <Card key={items.title} {...items} />
        ))}
      </div>
    </div>
  );
};

export default CardOne;