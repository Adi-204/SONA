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

  return (
    <div>
      <HomeCarousel />
      <div className='flex lg:flex-row flex-col justify-center items-center lg:gap-8 mt-16'>
        <TimingCard />
        <LocationCard />
        <ContactCard />
      </div>
      <div className='mt-16'>
        <p className='text-center text-[2.5rem]'>“We are passionate about <br /> creating a truly memorable <br /> dining experience.”</p>
        <div className='flex justify-evenly mt-12'>
          <img className='h-[14vh] hidden md:block' src={dishImg} alt="Dish Image" />
          <p className='text-center lg:text-[1.2rem] mt-4 text-[1.5rem]'>Ayushi Boghawala | CO-FOUNDER & CHEF, SONA</p>
          <img className='h-[14vh] hidden md:block' src={dishImg} alt="Dish Image" />
        </div>
        <div className="flex items-center justify-center mt-16">
          <span className="h-[1px] w-[80vw] bg-teal-300 mx-2"></span>
        </div>
      </div>
      <div className='flex justify-center'>
        <MenuSection img={dish} />
      </div>
      <div className='mt-24'>
        <p className='text-center text-[2.5rem]'>What our customers say!</p>
        <ReviewCards />
      </div>
      <div className='mt-24'>
      <p className='text-[2.5rem] lg:ml-36 ml-10'>Frequently Asked Question (FAQs)</p>
        <FAQSection />
      </div>
    </div>
  )
}

export default Home;
