import React from 'react';
import {Address, Email, Phone} from '../../assets/icons';

const Contact= ()=>{
  return (
    <section className='bg-primary pb-10' id='contact'>
         <h1 className="lg:text-3xl text-2xl font-bold pb-6 text-sec text-center py-6">
                Contact Us
            </h1>
    <main className='flex flex-col-reverse lg:flex-row' >
            <div className='lg:w-2/4 w-full lg:px-16 px-8 lg:pt-16 pt-4 flex flex-col items-center gap-6'>
            <div className='bg-light text-dark w-[15rem] flex flex-col items-center py-10 px-5'>
                <span className='flex gap-4 pb-4'>
                    <Address/>
                    <p className='lg:text-base text-sm'>Office Address</p>
                </span>
                <span>
                    <p className='lg:text-base text-sm text-center'>
                    29 Bakare Faro Street, Ajeromi-Ifelodun, Lagos 102103, Lagos
                    </p>
                </span>
                </div>
                <div className='bg-sec text-primary w-[15rem] flex flex-col items-center py-10 px-5'>
                <span className='flex gap-4 pb-4'>
                    <Email/>
                    <p className='lg:text-base text-sm'>Email Address</p>
                </span>
                <span>
                    <p className='lg:text-base text-sm'>
                    pennybox@pennybox.com
                    </p>
                </span>
                </div>
                <div className='bg-dark text-sec w-[15rem] flex flex-col items-center py-10 px-5'>
                <span className='flex gap-4 pb-4'>
                    <Phone/>
                    <p className='lg:text-base text-sm'>Mobile Number</p>
                </span>
                <span>
                    <p className='lg:text-base text-sm'>
                    080pennybox
                    </p>
                </span>
                </div>
          
            </div>
            <div className='lg:w-2/4 w-full'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5296657173853!2d3.3307640747846072!3d6.454366023963291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8932b797c669%3A0x1e4ec9ffa60947ba!2sPennyBox!5e0!3m2!1sen!2sng!4v1727349714526!5m2!1sen!2sng" 
                    
                     className='border-0 w-full lg:h-[40rem] h-[15rem]'
                    allowfullscreen="" 
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>  
    </main>
    </section>
  )
}

export default Contact;