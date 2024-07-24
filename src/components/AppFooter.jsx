import React from 'react'
import { Typography } from "@material-tailwind/react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logoImg from "../assets/logo1.jpg";

const LINKS = [
  {
    title: "Ottowo Location",
    items: ["228 Albert Street", "Ottawa, ON", "K1P 6A9, CA", "233-4041", "Sonaottawa@gmail.com"],
  },
  {
    title: "Hours",
    items: ["Monday-Sunday", "11:00 AM - 10:00 PM"],
  },
  {
    title: "Social Media",
    items: [
      <div className='flex space-x-4'>
        <FaFacebook /> 
        <FaInstagram /> 
        <FaSquareXTwitter />
      </div>
    ],
  },
];

const currentYear = new Date().getFullYear();

const AppFooter = () => {
  return (
    <footer className="w-full bg-[#fafafb] border-solid border-2 border-gray-300 mt-12 pt-10">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h4" className="text-[#424242] font-growth-sans">
            <img src={logoImg} className='h-40' alt="Logo Image" />
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  color="blue-gray"
                  className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      color="blue-gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
            
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Sona</a>. All
            Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter