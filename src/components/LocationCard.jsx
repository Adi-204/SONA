import React from 'react'
import {
    Card,
    CardBody,
  } from "@material-tailwind/react";


const LocationCard = () => {
  return (
    <Card className="mt-6 lg:h-[40vh] lg:w-96 w-80 h-[35vh] bg-[#fafafb] border-solid border-2 border-gray-300 transition-transform transform hover:scale-105">
      <CardBody>
        <p className="text-black lg:text-[2rem] text-[1.8rem] mb-2 text-center">
          Location
        </p>
        <div className="flex items-center justify-center my-4">
          <span className="bg-black h-2 w-2 rounded-full"></span>
          <span className="h-[2px] w-[18vw] bg-black mx-2"></span>
          <span className="bg-black h-2 w-2 rounded-full"></span>
        </div>
        <p className='text-center lg:text-[1.2rem] text-[1rem] mt-8'>
          383 Elgin St, Ottawa, <br /> ON K2P 1N1
        </p>
      </CardBody>
    </Card>
  )
}

export default LocationCard