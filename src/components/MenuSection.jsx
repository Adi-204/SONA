import React from 'react';
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const MenuSection = ({ img }) => {

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/menu');
  }

  return (
    <div className='mt-16 flex flex-col lg:flex-row lg:items-center lg:gap-16'>
      <div className='lg:max-w-[40vw] max-w-[70vw]'>
        <p className='text-left text-[2.5rem]'>Our Menu</p>
        <p className='mt-4'>
          For the main course, you must try the gluten friendly deluxe biryani, This traditional basmati rice-based dish contains shrimp, chicken, lamb, and vegetables cooked with basmati rice in Copper Chimney’s special blend of spices. Add one of our fresh, warm bread to complete your order such as the garlic naan, mozzarella cheese naan or the laccha paratha.
        </p>
        <p className='mt-4'>
          If you are joining us with friends or family, try one of our favourite signature platters that are great for sharing such as the chicken platter, masala dosa, or the goat platter! Finish your order off with an Indian-inspired dessert like the mango custard, ras malai or the Kheer which is an Indian-style rice pudding. Simply delicious!
        </p>
        <div className='flex mt-8'>
          <Button onClick={onClickHandler} className="rounded-full px-6 py-3 text-white font-semibold text-[0.9rem] " color='teal'>
            Check Full Menu
          </Button>
        </div>
      </div>
      <div className='lg:ml-8 mt-8'>
        <img className='lg:h-[60vh] lg:w-[25vw] w-[75vw] h-[45vh] object-cover rounded-2xl ' src={img} alt="Dish" />
      </div>
    </div>
  )
}

export default MenuSection;
