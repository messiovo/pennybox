import React from 'react';
import {Instagram, Twitter, Facebook, Copyright} from '../../assets/icons';
import { Link } from 'react-router-dom';
import { SiPandas } from 'react-icons/si';



const Footer = () => {
  return (
    <section className='bg-dark py-16'>
      <div className='flex justify-center gap-16'>
        <Link to='#'>
        <Instagram/>
        </Link>
        <Link to='#'>
        <Facebook/>
        </Link>
        <Link to='#'>
        <Twitter/>
        </Link>
      </div>
      <small className='flex items-center justify-center text-sec pt-16'>
        <Copyright/>
        Pennybox finance Ltd. All right reserved
      </small>

     

    </section>
  )
}

export default Footer