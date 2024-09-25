import React, { useState } from "react";
import {HashLink as Link } from "react-router-hash-link";

const Links = ({ text, to }) => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <Link
      to={to}
      key={text}
      className="text-base text-sec after:bg-primary transition-all duration-100 hover:text-light"
      onClick={() => {
        setIsMobile(!isMobile);
      }}
    >
      {text}
    </Link>
  );
};

export default Links;