import React, { useEffect, useRef, useCallback } from 'react';
import HomeCarousel from '../components/HomeCarousel';
import TimingCard from '../components/TimingCard';
import LocationCard from '../components/LocationCard';
import ContactCard from '../components/ContactCard';
import dishImg from "../assets/dish4.png";
import ReviewCards from '../components/ReviewCards';
import dish from "../assets/dish5.jpg";
import MenuSection from '../components/MenuSection';
import FAQSection from '../components/FAQSection';

const Home = () => {
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

  const renderCards = useCallback(() => (
    <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-8 mt-16">
      {[<TimingCard />, <LocationCard />, <ContactCard />].map((Component, index) => (
        <div key={index} ref={(el) => (menuRefs.current[index] = el)}>
          {Component}
        </div>
      ))}
    </div>
  ), []);

  return (
    <div>
      <HomeCarousel />
      {renderCards()}

      <div className="mt-16">
        <p className="text-center lg:text-[2.5rem] text-[1.8rem]">
          “We are passionate about <br /> creating a truly memorable <br /> dining experience.”
        </p>
        <div className="flex justify-evenly mt-12">
          <img className="h-[14vh] hidden md:block" src={dishImg} alt="Dish Image" loading="lazy" />
          <p className="text-center lg:text-[1.2rem] mt-4 text-[1rem]">
            Ayushi Boghawala | CO-FOUNDER & CHEF, SONA
          </p>
          <img className="h-[14vh] hidden md:block" src={dishImg} alt="Dish Image" loading="lazy" />
        </div>
        <div className="flex items-center justify-center mt-16">
          <span className="h-[1px] w-[80vw] bg-teal-300 mx-2"></span>
        </div>
      </div>

      <div className="flex justify-center" ref={(el) => (menuRefs.current[3] = el)}>
        <MenuSection img={dish} />
      </div>

      <div className="mt-24">
        <p className="text-center lg:text-[2.5rem] text-[1.8rem]">What our customers say!</p>
        <ReviewCards />
      </div>

      <div className="mt-24">
        <p className="lg:text-[2.5rem] text-[1.8rem] lg:ml-36 ml-10">Frequently Asked Questions (FAQs)</p>
        <FAQSection />
      </div>
    </div>
  );
};

export default Home;
