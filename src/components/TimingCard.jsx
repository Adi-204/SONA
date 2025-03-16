import React from 'react';
import { Card, CardBody } from "@material-tailwind/react";

const TimingCard = () => {
  return (
    <Card className="mt-6 lg:h-[40vh] lg:w-96 w-80 h-[35vh] bg-[#fafafb] border-2 border-gray-300 transform transition-transform hover:scale-105">
      <CardBody className="flex flex-col items-center">
        <p className="text-black text-center text-[1.8rem] lg:text-[2rem] mb-2">
          Our Hours
        </p>
        <div className="flex items-center justify-center my-4">
          <span className="bg-black h-2 w-2 rounded-full"></span>
          <span className="h-[2px] w-[18vw] bg-black mx-2"></span>
          <span className="bg-black h-2 w-2 rounded-full"></span>
        </div>
        <p className="text-center text-[1rem] lg:text-[1.2rem] mt-8 leading-relaxed">
          Mon / Tues / Wed / Sun: 5 – 10 PM <br />
          Thurs / Fri / Sat: 5 – 11 PM
        </p>
      </CardBody>
    </Card>
  );
};

export default TimingCard;
