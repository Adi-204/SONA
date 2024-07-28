import React from 'react'
import img1 from '../assets/dish7.jpg';
import MenuCard from '../components/MenuCard';
import img2 from '../assets/dish1.jpg';
import img3 from '../assets/dish2.jpg';
import { useEffect } from 'react';
import img4 from '../assets/dish3.jpg';

const Menu = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className='relative h-full w-full'>
          <img src={img1} className="lg:h-[70vh] h-[50vh] w-full object-cover rounded-3xl " alt='Plane' />
          <div className="rounded-3xl absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <p className='text-white lg:text-[2.5rem] text-[2rem]'>Our Menu</p>
            </div>
          </div>
      </div>
      <div className='mt-16'>
          <p className='text-center text-[2rem]'>More about our cuisine</p>
          <p className='text-center text-[1.2rem] mt-8'>Made from products that are locally and ethically sourced, <br /> Sona’s imaginative dishes are a celebration of distinct heritage.</p>
      </div>
      <div className='flex lg:flex-row flex-col items-center gap-16 lg:gap-0 lg:justify-evenly mt-16'>
        <MenuCard course={"Apppetizer"} foodImg={img2} link={"appetizer"}/>
        <MenuCard course={"Main Course"} foodImg={img4} link={"maincourse"} />
      </div>
      <div className='flex justify-center mt-16'>
        <MenuCard course={"Dessert"} foodImg={img3} link={"dessert"} />
      </div>
    </div>
  )
}

export default Menu;
