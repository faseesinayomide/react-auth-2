import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import { ScrollRestoration } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";


const Navbar = () => {

  const [isActive, setActive] = useState(false)

  const handleMenuToggle = ()=>{

   setActive(!isActive)

  
  }


  return (
    <>
      <nav className="flex    py-14 sm:py-6 md:py-20 justify-between container mx-auto px-6 items-center font-sans sm:px-6 md:px-9 lg:px-7  2xl:px-0">
        <div className="">
          <a href="#" className="logo">
            <h2 className=" text-3xl sm:text-4xl  md:text-5xl lg:text-4xl font-extrabold text-slate-200">
              Dappsncro
            </h2>
          </a>
        </div>

        <ul
          className={` flex flex-col bg-[#10171ee3] md:flex  md:flex-row  text-white   px-6 md:px-0 py-4 md:py-0  md:items-center   ${
            isActive
              ? "block h-screen absolute w-full mt-7   top-[70px] z-10 right-0 backdrop-blur-sm bg-[#000000a5]  transition-all   "
              : "hidden"
          } `}
        >
          <li className="md:mr-5 text-[16px] mb-3 md:mb-0   ">
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li className="md:mr-5 text-[16px] mb-3 md:mb-0   ">
            <a href="#" className="">
              Docs
            </a>
          </li>

          <li className="md:mr-5 text-[16px] mb-3 md:mb-0  ">
            <a href="#" className="">
              Protocol
            </a>
          </li>

          <li className="md:mr-5 text-[16px] mb-3 md:mb-0  ">
            <a href="#" className="">
              Api
            </a>
          </li>

          <li className="mr-5 text-[16px]  md:mb-0  "></li>
        </ul>

        <div className=" md:hidden ">
          {!isActive ? (
            <RiMenu3Fill
              onClick={handleMenuToggle}
              className="text-white text-4xl"
            />
          ) : (
            <FaTimes
              onClick={handleMenuToggle}
              className="text-white text-4xl"
            />
          )}
        </div>
      </nav>

      <div className="min-h-[50vh]">
        <Outlet />
      </div>

      <Footer />

      <ScrollRestoration />
    </>
  );
}

export default Navbar