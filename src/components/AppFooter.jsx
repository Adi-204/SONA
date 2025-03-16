import React from 'react';
import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logoImg from "../assets/logo1.jpg";

const LINKS = [
  {
    title: "Ottawa Location",
    items: ["383 Elgin St", "Ottawa, ON", "K2P 1N1", "(612) 548-9796", "Sonaottawa@gmail.com"],
  },
  {
    title: "Hours",
    items: ["Monday : 5 – 10 pm", "Tuesday : 5 – 10 pm", "Wednesday : 5 – 10 pm", "Thursday : 5 – 11 pm", "Friday : 5 – 11 pm", "Saturday : 5 – 11 pm", "Sunday : 5 – 10 pm"],
  },
  {
    title: "Social Media",
    items: [
      <li key="social-media" className='flex space-x-4' aria-label="Social media links">
        <a href="https://facebook.com" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" aria-label="Twitter">
          <FaSquareXTwitter />
        </a>
      </li>
    ],
  },
];

const currentYear = new Date().getFullYear();

const AppFooter = () => {
  return (
    <footer className="w-full bg-[#fafafb] border-solid border-2 border-gray-300 mt-12 pt-10">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div>
            <img src={logoImg} className='h-40' alt="Sona Logo" />
          </div>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <div key={title}>
                {/* Updated Heading Order (h5 instead of h6) */}
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="py-1.5 font-semibold transition-colors hover:text-blue-gray-900"
                >
                  {title}
                </Typography>
                <ul>
                  {items.map((link, index) => (
                    <li key={index} className="py-1.5">
                      {typeof link === "string" ? (
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal transition-colors hover:text-blue-gray-900"
                        >
                          {link}
                        </Typography>
                      ) : (
                        link
                      )}
                    </li>
                  ))}
                </ul>
              </div>
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
  );
};

export default AppFooter;
