import React from 'react';
import { Link } from "react-router-dom";

function WhyUs() {
  return (
    <div className="bg-[url(./image/whyus.webp)] bg-black/80 bg-no-repeat bg-cover bg-center bg-blend-saturation text-sec flex flex-col items-center justify-center lg:px-16 px-5 lg:py-16 py-10 text-center">
        <h1 className='lg:text-3xl text-2xl font-bold pb-4'>We Provide Loans With the Best Interest Rate</h1>
        <p className='lg:text-base text-sm lg:pb-10 pb-6 leading-6'>We pride ourselves on offering loans with some of the best interest rates in the market. Whether you’re a small business owner or an individual looking for financial support, our competitive rates help you manage your finances effectively while reducing the cost of borrowing.</p>
        <Link to="/contact">
                    <button className="text-sec bg-dark py-2 lg:px-14 px-5 mx-auto block font-semibold hover:bg-sec hover:text-dark transition-colors ease-in-out duration-500 ">
                        Get a Loan
                    </button>
                </Link>
    </div>
  )
}

export default WhyUs