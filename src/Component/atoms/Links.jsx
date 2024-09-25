import React, { useState } from "react";
import { Link } from "react-router-dom";

const Links = ({ text, to }) => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <Link
      to={to}
      key={text}
      className="text-base text-sec after:block after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-100 hover:after:lg:w-full hover:after:w-[3.2rem]"
      onClick={() => {
        setIsMobile(!isMobile);
      }}
    >
      {text}
    </Link>
  );
};

export default Links;