import React from 'react';
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const MenuSection = ({ img }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-16 flex flex-col lg:flex-row lg:items-center lg:gap-16">
      <div className="lg:max-w-[40vw] max-w-[70vw]">
        <h2 className="text-left text-[1.8rem] lg:text-[2.5rem]">Our Menu</h2>
        <p className="mt-4">
          Welcome to SONA, where every dish tells a story of tradition and taste. 
          Our carefully curated menu offers a delightful journey through the diverse 
          culinary landscape of India. From the rich and creamy Feta Malai Kebab to the 
          aromatic Amritsari Fish Fry, each dish is crafted with the finest ingredients and authentic spices.
        </p>
        <p className="mt-4">
          Enjoy a variety of appetizers, tandoori delights, vegetarian specialties, 
          and non-vegetarian curries, each prepared to perfection. Complement your 
          meal with our freshly baked breads and save room for our exquisite desserts— 
          the perfect ending to a memorable dining experience. Join us and savor the flavors of India in every bite.
        </p>
        <div className="mt-8">
          <Button
            onClick={() => navigate('/menu')}
            className="bg-teal-800 hover:bg-teal-900 text-white rounded-full px-6 py-3 font-semibold text-[0.9rem] shadow-md transition-all"
            aria-label="Check full menu"
          >
            Check Full Menu
          </Button>
        </div>
      </div>
      <div className="lg:ml-8 mt-8">
        <img 
          className="lg:h-[60vh] lg:w-[25vw] w-[75vw] h-[45vh] object-cover rounded-2xl" 
          src={img} 
          alt="Delicious Indian Dish" 
        />
      </div>
    </div>
  );
};

export default MenuSection;
