import React from "react";
import { Hero, Service, AboutUs, WhyUs, Testimonial, Contact, Footer} from '../Component/molecules';


const Home = () => {
    return (
      <section>
  
      <Hero/>
      <Service/>
      <AboutUs/>
      <WhyUs/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    
      </section>
    )
  }
  
  export default Home