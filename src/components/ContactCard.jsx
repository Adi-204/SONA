import React from 'react';
import { Card, CardBody } from "@material-tailwind/react";

const ContactCard = () => {
    return (
        <Card className="mt-6 lg:h-[40vh] lg:w-96 w-80 h-[35vh] bg-[#fafafb] border-2 border-gray-300 transition-transform transform hover:scale-105 shadow-md">
            <CardBody className="flex flex-col items-center text-center">
                <p className="text-black lg:text-[2rem] text-[1.8rem] mb-2">
                    Contact Us
                </p>
                <div className="flex items-center justify-center my-4">
                    <span className="bg-black h-2 w-2 rounded-full"></span>
                    <span className="h-[2px] w-[50%] bg-black mx-2"></span>
                    <span className="bg-black h-2 w-2 rounded-full"></span>
                </div>
                <p className='lg:text-[1.2rem] text-[1rem] mt-4'>
                    <strong>Call:</strong> <a href="tel:+16125489796" className="text-blue-600 hover:underline">(612) 548-9796</a>
                </p>
                <p className='lg:text-[1.2rem] text-[1rem] mt-4'>
                    <strong>Email:</strong> <a href="mailto:Sonaottawa@gmail.com" className="text-blue-600 hover:underline">Sonaottawa@gmail.com</a>
                </p>
            </CardBody>
        </Card>
    );
};

export default ContactCard;
