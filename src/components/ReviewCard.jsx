import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Avatar,
} from "@material-tailwind/react";

const StarIcon = ({ filled }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={filled ? "currentColor" : "none"}
        className="h-5 w-5 text-yellow-700"
    >
        <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
        />
    </svg>
);

const ReviewCard = ({ name, img, review, starCount }) => (
    <Card className="lg:w-[27rem] w-[25rem] bg-[#fafafb] border-2 border-gray-300 p-10 transition-transform transform hover:scale-105">
        <CardHeader
            floated={false}
            shadow={false}
            className="flex items-center gap-4 pt-0 pb-8"
        >
            <Avatar size="lg" variant="circular" src={img} alt={name} />
            <div className="flex w-full flex-col">
                <div className="flex items-center justify-between">
                    <p className="text-[1.3rem] text-black">{name}</p>
                    <div className="flex items-center gap-0">
                        {Array.from({ length: 5 }, (_, index) => (
                            <StarIcon key={index} filled={index < starCount} />
                        ))}
                    </div>
                </div>
            </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
            <p className="text-[1rem] text-[#2d2926]">{review}</p>
        </CardBody>
    </Card>
);

export default ReviewCard;
