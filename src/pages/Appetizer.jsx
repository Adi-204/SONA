import React, { useEffect, useRef, useCallback } from 'react';
import menuItems from '../utils/appetizerItems';
import img1 from '../assets/dish8.jpg';

const Appetizer = () => {
  const menuRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          observer.unobserve(entry.target); // Prevents unnecessary animations
        }
      });
    }, { threshold: 0.2 });

    menuRefs.current.forEach(ref => ref && observer.observe(ref));

    return () => {
      menuRefs.current.forEach(ref => ref && observer.unobserve(ref));
    };
  }, []);

  const renderMenuItems = useCallback(() => {
    return menuItems.map((item, index) => (
      <div
        key={index}
        ref={el => menuRefs.current[index] = el}
        className='mt-16 opacity-0 transform -translate-x-10 transition-all duration-500 will-change-transform'
      >
        <div className='flex items-center justify-center'>
          <p className='text-center text-[1.5rem]'>{item.name}</p>
          {item.isGF && <p className='text-center text-[1rem] ml-2' aria-label="Gluten Free">(GF)</p>}
          {item.isV && <p className='text-center text-[1rem] ml-1' aria-label="Vegetarian">(V)</p>}
        </div>
        <div className='text-center ml-10 mr-10'>
          {item.ingredients.map((it, ind) => (
            <React.Fragment key={ind}>
              <p className='inline lg:text-[1rem]'>
                {it} {ind < item.ingredients.length - 1 && '|'} 
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
    ));
  }, []);

  return (
    <div>
      {/* Lazy-loaded WebP Image for better performance */}
      <div className='relative h-full w-full'>
        <picture>
          <source srcSet={img1} type="image/webp" />
          <img src={img1} className="lg:h-[70vh] h-[40vh] w-full object-cover rounded-3xl" alt="Appetizer" loading="lazy" />
        </picture>
        <div className="rounded-3xl absolute inset-0 grid h-full w-full bg-black/75"></div>
      </div>

      <div className='flex flex-col items-center gap-8 mt-16 w-[50vw] mx-auto'>
        <p>OUR MENUS</p>
        <p className='lg:text-[2.8rem] text-[2rem]'>Appetizers</p>
        <p className='lg:text-[1.1rem] text-center'>
          Begin your culinary journey with our exquisite appetizers, crafted to tantalize your taste buds and set the stage for an unforgettable dining experience.
        </p>
      </div>

      <div className="flex items-center justify-center mt-16">
        <span className="h-[1px] w-[80vw] bg-teal-300 mx-2"></span>
      </div>

      <div className='mb-32'>
        {renderMenuItems()}
      </div>

      <div className="flex items-center justify-center mt-16">
        <span className="h-[1px] w-[80vw] bg-teal-300 mx-2"></span>
      </div>

      {/* Accessibility: Aria labels for clarity */}
      <div ref={el => menuRefs.current[5] = el} className='mt-12 flex items-center justify-evenly mb-28'>
        <p className='italic text-sm bg-gray-100 p-2 rounded-lg border border-teal-300' aria-label="Gluten Free Label">
          GF - Gluten Free
        </p>
        <p className='italic text-sm bg-gray-100 p-2 rounded-lg border border-teal-300' aria-label="Vegetarian Label">
          V - Vegetarian
        </p>
      </div>
    </div>
  );
};

export default Appetizer;
