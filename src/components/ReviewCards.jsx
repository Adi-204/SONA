import React from 'react';
import ReviewCard from './ReviewCard';
import reviews from '../utils/reviews';

const ReviewCards = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:justify-evenly mt-16">
            {reviews.map((review, index) => (
                <ReviewCard 
                    key={index}
                    {...review} 
                />
            ))}
        </div>
    );
}

export default ReviewCards;
