import React from "react";
import { Hero, CardOne, AboutUs, WhyUs, Testimonial} from '../Component/molecules';


const Home = () => {
    return (
      <section className="bg-light">
  
      <Hero/>
      <CardOne/>
      <AboutUs/>
      <WhyUs/>
      <Testimonial/>
    
      </section>
    )
  }
  
  export default Home