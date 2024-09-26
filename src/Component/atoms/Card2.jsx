import React from "react";

const Card2 = ({text, name, index }) => {
  return (
    <div
      className={`${
        index % 2 === 0 ? `bg-sec text-dark` : `bg-dark text-sec`
      } lg:w-[20rem] md:w-[20rem] w-full px-6 pt-6 lg:pb-6 pb-4 lg:h-[26rem] `}
      >
      <p className="lg:text-2xl text-xl text-center py-3">
        {text}
      </p>
      <p className="pb-2 lg:text-base text-sm text-end">
        {name}
      </p>
      
    </div>
  );
};

export default Card2;