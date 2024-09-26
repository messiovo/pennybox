import React from "react";

const Card2 = ({text, name, index }) => {
  return (
    <div
      className={`${
        index % 2 === 0 ? `bg-sec text-dark` : `bg-dark text-sec`
      } lg:w-[20rem] md:w-[15rem] w-full px-6 pt-6 lg:pb-6 pb-4 h-[20rem] `}
      >
      <p className="lg:text-lg text-base text-center py-3">
        {text}
      </p>
      <p className="pb-2 lg:text-base text-sm text-end">
        {name}
      </p>
      
    </div>
  );
};

export default Card2;