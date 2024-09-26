import React from 'react'

const Contact= ()=>{
  return (
    <section className='bg-primary flex flex-col lg:flex-row' id='contact'>
            <div className='text-sec lg:w-2/4 w-full lg:px-16 px-8 lg:pt-16 pt-4'>
            <h1 className="lg:text-3xl text-2xl font-bold">
          Contact Us
        </h1>
          
            </div>
            <div className='lg:w-2/4 w-full'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5296657173853!2d3.3307640747846072!3d6.454366023963291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8932b797c669%3A0x1e4ec9ffa60947ba!2sPennyBox!5e0!3m2!1sen!2sng!4v1727349714526!5m2!1sen!2sng" 
                    width="800"
                     height="600" 
                     className='border-0'
                    allowfullscreen="" 
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>  
    </section>
  )
}

export default Contact;