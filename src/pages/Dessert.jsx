import React, { useEffect, useRef } from 'react'
import menuItems from '../utils/dessertItems';
import img1 from '../assets/dish9.jpg';

const Dessert = () => {

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


  const menu = menuItems.map((item, index) => (
    <div key={index} ref={el => menuRefs.current[index] = el} className='mt-16 opacity-0 transform -translate-x-10 transition-all duration-500'>
      <p className='text-center text-[1.5rem]'>{item.name}</p>
      <div className='text-center lg:ml-0 lg:mr-0 ml-10 mr-10'>
        {item.ingredients.map((it, ind) => (
          <React.Fragment key={ind}>
            <p className='inline lg:text-[1rem]'>{it} {ind < item.ingredients.length - 1 && '|'} </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  ));

  
  return (
    <div>
      <div className='relative h-full w-full'>
          <img src={img1} className="lg:h-[70vh] h-[40vh] w-full object-cover rounded-3xl" alt='Appetizer' />
          <div className="rounded-3xl absolute inset-0 grid h-full w-full bg-black/75">
          </div>
      </div>
      <div className='flex flex-col items-center gap-8 mt-16 w-[50vw] mx-auto'>
        <p>OUR MENUS</p>
        <p className='lg:text-[2.8rem] text-[2rem]'>Dessert</p>
        <p className='lg:text-[1.1rem] text-center'>Conclude your meal on a sweet note with our hand-crafted desserts, where each bite promises a moment of pure bliss.</p>
      </div>
      <div className="flex items-center justify-center mt-16">
          <span className="h-[1px] w-[80vw] bg-teal-300 mx-2"></span>
        </div>
        <div className='mb-20'>
          {menu}
        </div>
    </div>
  )
}

export default Dessert