import React from 'react';
import ReviewCard from './ReviewCard';
import img1 from "../assets/review1.avif";
import img2 from "../assets/review2.avif";
import img3 from "../assets/review3.avif";

const reviews = [
    {
        name : 'John Doe',
        img : img1,
        review : "One of the best Indian food I ever had in Ottawa. The food was phenomenal and reasonable price! :) Great experience. loved it!",
        starCount : 4
    },
    {
        name : 'Sarah Green',
        img : img2,
        review : "Hands down the best authentic Indian food I have ever tasted. The food was very fresh and flavourful. Every dish I tried was excellent, but the butter chicken was absolutely mouthwatering. This will def be my go to spot for excellent Indian cuisine. It is a must try!",
        starCount : 5
    },
    {
        name : 'Olivia Fraser',
        img : img3,
        review : "The Indian cuisine is by far the most authentic I have had in Ottawa. My wife loved the food and she has high standards for Indian cuisine. I had a very warm welcoming upon entering the store. I would highly recommend trying their Vindaloo and Korma.",
        starCount : 5
    }
];


const ReviewCards = () => {
    return (
        <div className='flex lg:flex-row flex-col items-center lg:gap-0 gap-8 lg:justify-evenly mt-16'>
             {reviews.map((obj, index) => (
                <div key={index}>
                    <ReviewCard 
                        name={obj.name} 
                        img={obj.img} 
                        review={obj.review} 
                        starCount={obj.starCount} 
                    />
                </div>
            ))}
        </div>
    )
}

export default ReviewCards