import React from 'react';
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const MenuCard = ({ course, foodImg, link }) => {
    return (
        <div className="lg:w-[40vw]">
            <NavLink to={`/menu/${link}`}>
                <div className="relative h-full lg:w-[40vw] w-[85vw] transition-transform duration-300 hover:scale-105">
                    <img 
                        src={foodImg} 
                        alt={course} 
                        className="lg:h-[70vh] h-[50vh] lg:w-[40vw] w-[85vw] object-cover rounded-2xl" 
                    />
                    <div className="absolute inset-0 bg-black/75 rounded-2xl flex justify-between items-end p-6">
                        <p className="text-white text-[2rem] lg:text-[2.5rem]">{course}</p>
                        <div className="flex items-center justify-center w-12 h-12 bg-black rounded-full border-2 border-white">
                            <BsArrowRight className="text-white" />
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default MenuCard;
