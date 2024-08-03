import React, { useEffect } from "react";
import {
  Navbar,
  Collapse,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/logo1.jpg";

const AppNav = () => {

  const [openNav, setOpenNav] = React.useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="bg-[#fafafb] top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <NavLink
          to='/'
          style={
            {
              color: '#000',
              fontSize: '1.5rem'
            }
          }
          onClick={() => setOpenNav(false)}
        >
          <img src={logoImg} className="w-28" alt="Logo Image" />
        </NavLink>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:inline-block">
            <NavLink
              to='/'
              size="sm"
              className='mr-4'
              style={{ color: '#000' }}
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              size="sm"
              className='mr-4'
              style={{ color: '#000' }}
            >
              About
            </NavLink>
            <NavLink
              to='/menu'
              size="sm"
              className='mr-4'
              style={{ color: '#000' }}
            >
              Menu
            </NavLink>
          </div>

          <IconButton
            variant="text"
            className="h-6 w-10 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => {
              setOpenNav(!openNav);
              if (openNav) {
                setOpenNav(false);
              }
            }}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="flex flex-col gap-4 items-center">
          <NavLink
            to='/'
            size="sm"
            className='mr-4'
            style={{ color: '#000' }}
            onClick={() => setOpenNav(false)}
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            size="sm"
            className='mr-4'
            style={{ color: '#000' }}
            onClick={() => setOpenNav(false)}
          >
            About
          </NavLink>
          <NavLink
            to='/menu'
            size="sm"
            className='mr-4'
            style={{ color: '#000' }}
            onClick={() => setOpenNav(false)}
          >
            Menu
          </NavLink>
        </div>
      </Collapse>
    </Navbar>

  );
}

export default AppNav;
