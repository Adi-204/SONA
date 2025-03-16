import React, { useEffect, useRef, useCallback } from 'react';
import img1 from '../assets/dish11.jpg';
import menuItems from '../utils/mainItems';

const MainCourse = () => {
  const menuRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.2 } 
    );

    menuRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      menuRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const renderMenu = useCallback(() => (
    menuItems.map((item, index) => (
      <div
        key={index}
        ref={(el) => (menuRefs.current[index] = el)}
        className="mt-16 opacity-0 transform -translate-x-10 transition-all duration-500"
      >
        <div className="flex items-center justify-center">
          <p className="text-center text-[1.5rem]">{item.name}</p>
          {item.isGF && <p className="text-center text-[1rem] ml-2">(GF)</p>}
          {item.isV && <p className="text-center text-[1rem] ml-1">(V)</p>}
        </div>
        <div className="text-center mx-10 lg:mx-0">
          {item.ingredients.map((it, ind) => (
            <span key={ind} className="inline lg:text-[1rem]">
              {it} {ind < item.ingredients.length - 1 && '|'}{' '}
            </span>
          ))}
        </div>
      </div>
    ))
  ), []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-full w-full">
        <img
          src={img1}
          className="lg:h-[70vh] h-[40vh] w-full object-cover rounded-3xl"
          alt="Main Course"
          loading="lazy"
        />
        <div className="rounded-3xl absolute inset-0 grid h-full w-full bg-black/75"></div>
      </div>

      {/* Title Section */}
      <div className="flex flex-col items-center gap-8 mt-16 w-[50vw] mx-auto">
        <p className="text-lg font-semibold uppercase tracking-wider">Our Menus</p>
        <h1 className="lg:text-[2.8rem] text-[2rem] font-bold">Main Course</h1>
        <p className="lg:text-[1.1rem] text-center text-gray-700">
          Discover the rich and diverse flavors of India with our curated menu courses, bringing authentic and innovative dishes to the pulse of Canada.
        </p>
      </div>

      {/* Separator */}
      <div className="flex items-center justify-center mt-16">
        <span className="h-[1px] w-[80vw] bg-teal-300 mx-2"></span>
      </div>

      {/* Menu Items */}
      <div className="mb-20">{renderMenu()}</div>

      {/* Separator */}
      <div className="flex items-center justify-center mt-16">
        <span className="h-[1px] w-[80vw] bg-teal-300 mx-2"></span>
      </div>

      {/* Labels */}
      <div ref={(el) => (menuRefs.current[6] = el)} className="mt-12 flex items-center justify-evenly mb-28">
        <p className="italic text-sm bg-gray-100 p-2 rounded-lg border border-teal-300">
          GF - Gluten Free
        </p>
        <p className="italic text-sm bg-gray-100 p-2 rounded-lg border border-teal-300">
          V - Vegetarian
        </p>
      </div>
    </div>
  );
};

export default MainCourse;
