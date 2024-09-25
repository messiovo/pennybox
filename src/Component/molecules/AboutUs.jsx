import React from "react";
import pic from "../images/about.webp"
const AboutUs = () => {
  return (
    <section className="flex lg:flex-row-reverse flex-col-reverse bg-primary text-sec lg:gap-2 gap-10">
      <div className="lg:w-2/4 w-full lg:px-16 px-8 lg:pt-16 pt-4">
        <h1 className="lg:text-3xl text-2xl font-bold pb-4">
          About Us
        </h1>
       
        <p className="lg:text-base text-sm pb-7 leading-6">
        At PennyBox, we are dedicated to empowering individuals and small businesses to achieve their financial goals through a comprehensive suite of services. With a focus on community and support, we offer tailored loan solutions, innovative savings programs, and expert financial advisory services.
        </p>
        <h2 className="lg:text-lg text-base pb-4 leading-6 font-bold">Our Mission</h2>
        <p className="lg:text-base text-sm pb-4 leading-6">Our mission is to provide accessible financial solutions that foster growth and stability for our clients. We understand that every financial journey is unique, and we are committed to helping you navigate yours with confidence.</p>
        <h2 className="lg:text-lg text-base pb-4 leading-6 font-bold">Our Commitment</h2>
        <p className="lg:text-base text-sm pb-7 leading-6">At PennyBox, we are committed to providing a supportive environment where you can thrive financially. We believe in building lasting relationships with our clients, offering the tools and resources you need to succeed. Whether you’re a small business owner looking for funding, an individual saving for the future, or someone seeking financial advice, we are here to help you every step of the way.</p>
        </div>
      <div className="lg:w-2/4 w-full" ><img src={pic} alt="aboutus picture" className="max-w-full" /></div>
    </section>
  );
};

export default AboutUs;