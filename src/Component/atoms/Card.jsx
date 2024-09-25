import React from "react";

const Card = ({title, text, index }) => {
  return (
    <div
      className={`${
        index % 2 === 0 ? `bg-medium` : `bg-dark`
      } lg:w-[20rem] md:w-[20rem] w-full px-6 pt-6 lg:pb-6 pb-4 relative top-[-3rem] lg:h-[26rem]  h-fit rounded-xl`}
      data-aos={`${index % 2 === 0 ? `zoom-in` : `zoom-out`}`}>
      <h2 className={`${index % 2 === 0 ? `text-dark` : `text-light`} lg:text-2xl text-xl font-semibold text-center py-3`}>
        {title}
      </h2>
      <p className={`${index % 2 === 0 ? `text-dark` : `text-light`} pb-2 lg:text-base text-sm`}>
        {text}
      </p>
      
    </div>
  );
};

export default Card;