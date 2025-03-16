import React, { useEffect, useState, useCallback } from "react";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/logo1.jpg";

const AppNav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNav = useCallback(() => {
    setOpenNav((prev) => !prev);
  }, []);

  return (
    <Navbar className="bg-[#fafafb] top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        {/* Logo */}
        <NavLink to="/" className="flex items-center" onClick={() => setOpenNav(false)}>
          <img src={logoImg} className="w-28" alt="Logo" loading="lazy" />
        </NavLink>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {["Home", "About", "Menu"].map((item, index) => (
              <NavLink
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // ✅ Fixed Home link
                className="text-black hover:text-teal-600 transition-colors"
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <IconButton
            variant="text"
            className="h-6 w-10 lg:hidden"
            onClick={toggleNav}
            aria-label={openNav ? "Close menu" : "Open menu"}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile Navigation */}
      <Collapse open={openNav} className="lg:hidden">
        <div className="flex flex-col gap-4 items-center py-4">
          {["Home", "About", "Menu"].map((item, index) => (
            <NavLink
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // ✅ Fixed Home link
              className="text-black hover:text-teal-600 transition-colors"
              onClick={() => setOpenNav(false)}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default AppNav;
