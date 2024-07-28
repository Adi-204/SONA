import React from 'react';
import ReviewCard from './ReviewCard';
import reviews from '../utils/reviews';


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