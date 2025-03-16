import React from 'react';
import { Carousel, Typography } from "@material-tailwind/react";
import img1 from "../assets/res2.jpg";
import img2 from "../assets/Designer.png";
import img3 from "../assets/dish.jpg";

const carouselItems = [
    {
        img: img1,
        alt: "Hotel Gate",
        title: "Welcome to Sona",
        description: "Crafting Golden Moments Through Food",
        textAlign: "text-center",
    },
    {
        img: img2,
        alt: "Restaurant Interior",
        title: "Warm Hospitality Awaits",
        description: "Enjoy a Dining Experience Like No Other.",
        textAlign: "text-left pl-12 md:pl-20 lg:pl-32",
    },
    {
        img: img3,
        alt: "Signature Dish",
        title: "Discover Our Signature Dishes",
        description: "Savor the Rich Flavors of Authentic Indian Cuisine",
        textAlign: "text-left pl-12 pb-12 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32",
    },
];

const HomeCarousel = () => {
    return (
        <Carousel 
            className="rounded-xl lg:h-[80vh] h-[65vh]"
            autoplay={true}
            autoplayDelay={3200}
            loop={true}
        >
            {carouselItems.map((item, index) => (
                <div key={index} className="relative h-full w-full">
                    <img src={item.img} alt={item.alt} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className={`w-3/4 md:w-2/4 ${item.textAlign}`}>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                {item.description}
                            </Typography>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default HomeCarousel;
