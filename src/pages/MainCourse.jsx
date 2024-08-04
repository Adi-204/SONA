import React, { useEffect, useRef } from 'react'
import img1 from '../assets/dish11.jpg';
import menuItems from '../utils/mainItems';

const MainCourse = () => {

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
      <div className='flex items-center justify-center'>
        <p className='text-center text-[1.5rem]'>{item.name}</p>
        {item.isGF && <p className='text-center text-[1rem] ml-2'>(GF)</p> }
        {item.isV && <p className='text-center text-[1rem] ml-1'>(V)</p> }
      </div>
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
        <p className='lg:text-[2.8rem] text-[2rem]'>Main Course</p>
        <p className='lg:text-[1.1rem] text-center'>Discover the rich and diverse flavors of India with our curated menu courses, bringing authentic and innovative dishes to the pulse of Canada.</p>
      </div>
      <div className="flex items-center justify-center mt-16">
          <span className="h-[1px] w-[80vw] bg-teal-300 mx-2"></span>
        </div>
        <div className='mb-20'>
          {menu}
        </div>
        <div className="flex items-center justify-center mt-16">
        <span className="h-[1px] w-[80vw] bg-teal-300 mx-2"></span>
      </div>
      <div ref={el => menuRefs.current[6] = el} className='mt-12 flex items-center justify-evenly mb-28'>
        <p className='italic text-sm bg-gray-100 p-2 rounded-lg border border-teal-300'>
          GF - Gluten Free
        </p>
        <p className='italic text-sm bg-gray-100 p-2 rounded-lg border border-teal-300'>
          V - Vegetarian
        </p>
      </div>
    </div>
  )
}

export default MainCourse