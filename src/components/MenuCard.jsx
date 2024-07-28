import React from 'react'
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const MenuCard = ({course,foodImg,link}) => {
    return (
        <div className='lg:w-[40vw]'>
            <NavLink to={`/menu/${link}`}>
                <div className='relative h-full lg:w-[40vw] w-[85vw] transform transition-transform duration-300 hover:scale-105'>
                    <img src={foodImg} className="lg:h-[70vh] h-[50vh] lg:w-[40vw] w-[85vw] object-cover rounded-2xl" alt='Food' />
                    <div className="rounded-2xl absolute inset-0 bg-black/75">
                        <div className="absolute bottom-6 left-8">
                            <p className='text-white lg:text-[2.5rem] text-[2rem]'>{course}</p>
                        </div>
                        <div className="absolute bottom-6 right-8">
                            <div className="flex items-center justify-center w-12 h-12 bg-black rounded-full border-2 border-white">
                                <BsArrowRight className='text-white' />
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default MenuCard;
