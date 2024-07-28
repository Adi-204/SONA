import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import img1 from "../assets/res2.jpg";
import img2 from "../assets/Designer.png";
import img3 from "../assets/dish.jpg";

const HomeCarousel = () => {
    return (
        <Carousel 
            className="rounded-xl lg:h-[80vh] h-[65vh]"
            autoplay={true}
            autoplayDelay={3200}
            loop={true}
        >
            <div className="relative h-full w-full">
                <img
                    src={img1}
                    alt="Hotel Gate"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Welcome to Sona
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Crafting Golden Moments Through Food
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={img2}
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Warm Hospitality Awaits
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Enjoy a Dining Experience Like No Other. 
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={img3}
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Discover Our Signature Dishes
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Savor the Rich Flavors of Authentic Indian Cuisine
                        </Typography>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}

export default HomeCarousel