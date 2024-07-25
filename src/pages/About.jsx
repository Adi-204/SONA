import React from 'react'
import hotelImg from '../assets/inter.jpg'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  const onClickHandler = ()=>{
    navigate('/menu');
  }

  return (
    <div>
      <img src={hotelImg} className='w-full h-auto' alt="SONA Image" />
      <div className='max-w-screen-md mx-auto px-4 text-[#2d2926]'>
        <p className='text-[2rem] font-bold text-center text-black mt-12'>Our Story!</p>
        <p className='text-[1.3rem] text-center mt-4'>
          Sona – Crafting Golden Moments Through Food
        </p>
        <div className='text-[1rem] text-center'>
          <div className='mt-4'>
            Welcome to Sona <br />
            Nestled in the heart of the city, Sona is a celebration of India’s rich culinary heritage. Our name, meaning “gold” in Hindi, symbolizes the golden moments we strive to create for our guests through our exceptional food and warm hospitality.
          </div>
          <div className='mt-4'>
            The Vision <br />
            Sona was founded by Ayushi Boghawala, inspired by her grandmother’s dream to open a restaurant. With a deep passion for Indian cuisine, Ayushi aims to bring the authentic flavors of India to our community. Ayushi, an accomplished chef, and Arya (Ayushi's sister) a gracious host, combined their talents to create a dining experience that feels like home.
          </div>
          <div className='mt-4'>Join Us at Sona <br />
            At Sona, we believe that every meal is an opportunity to celebrate life’s golden moments. Whether you’re joining us for a grand festival or an intimate dinner, we promise a warm welcome and an unforgettable experience.</div>
        </div>
        <div className='flex justify-center mt-8'>
          <Button onClick={onClickHandler} className="rounded-full px-6 py-3 text-white font-semibold text-[0.9rem]" color='teal'>
            Check menu
          </Button>
        </div>
      </div>
    </div>
  )
}

export default About


