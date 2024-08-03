import React from 'react'
import hotelImg from '../assets/res1.jpg'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/plane.jpeg";
import { useEffect, useRef } from 'react';

const About = () => {

  const navigate = useNavigate();

  const onClickHandler = ()=>{
    navigate('/menu');
  }

  const menuRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      });
    });

    menuRefs.current.forEach(ref => ref && observer.observe(ref));

    return () => {
      menuRefs.current.forEach(ref => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <div className='max-w-[85vw] mx-auto mt-12 mb-28'>
      <div className='relative h-full w-full'>
          <img src={img1} className="lg:h-[70vh] h-[50vh] w-full object-cover rounded-3xl " alt='Plane' />
          <div className="rounded-3xl absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <p className='text-white lg:text-[2.5rem] text-[2rem]'>Our journey from India to Ottawa</p>
            </div>
          </div>
      </div>
      <div ref={(el) => menuRefs.current[0] = el} className='flex flex-col lg:flex-row lg:justify-between lg:items-start mt-32'>
        <div className='lg:w-[50vw]'>
          <img src={hotelImg} className='w-full h-auto object-cover rounded-3xl' alt="SONA Image" />
        </div>
        <div className='lg:w-1/2 lg:pl-10 mt-10 lg:mt-0'>
          <p className='text-[2rem] text-center lg:text-center text-black'>Our Story!</p>
          <p className='text-[1.3rem] text-center lg:text-center mt-4'>
            Sona – Crafting Golden Moments Through Food
          </p>
          <div className='text-[1rem] text-center mt-4'>
            <div className='mt-4'>
              Welcome to Sona <br />
              Nestled in the heart of the city, Sona is a celebration of India’s rich culinary heritage. Our name, meaning “gold” in Hindi, symbolizes the golden moments we strive to create for our guests through our exceptional food and warm hospitality.
            </div>
            <div className='mt-4'>
              The Vision <br />
              Sona was founded by Ayushi Boghawala, inspired by her grandmother’s dream to open a restaurant. With a deep passion for Indian cuisine, Ayushi aims to bring the authentic flavors of India to our community. Ayushi, an accomplished chef, and Arya (Ayushi's sister) a gracious host, combined their talents to create a dining experience that feels like home.
            </div>
            <div className='mt-4'>
              Join Us at Sona <br />
              At Sona, we believe that every meal is an opportunity to celebrate life’s golden moments. Whether you’re joining us for a grand festival or an intimate dinner, we promise a warm welcome and an unforgettable experience.
            </div>
          </div>
          <div className='flex justify-center mt-8'>
            <Button onClick={onClickHandler} className="rounded-full px-6 py-3 text-white font-semibold text-[0.9rem]" color='teal'>
              Check menu
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
