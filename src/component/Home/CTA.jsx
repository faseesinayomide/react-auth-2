import React from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import ctaImage from "../../assets/images/blockchain-3019121_1280-removebg-preview.png";

const Cta = () => {
  return (
    <div className="flex my-[14%] text-center sm:text-center md:text-left lg:text-left   sm:my-[14%]  lg:my-[10%] justify-center flex-col sm:flex-col md:flex-row lg:flex-row items-center px-2 sm:px-2  md:px-9 lg:px-10 ">
      <div className="w-[100%]  rounded-xl mb-14 sm:mb-14 md:mb-0  lg:mb-0">
        <img
          src={ctaImage}
          className=" w-full sm:w-full md:w-[80%] lg:w-[80%]"
          alt="Everything You Need"
        ></img>
      </div>

      <div className="  w-full sm:w-full  md:w-[90%] lg:w-[90%]">
        <h1 className="text-slate-50 font-bold text-4xl  sm:text-4xl  md:text-4xl lg:text-5xl mb-7">
          GET STARTED TODAY
        </h1>
        <p className=" text-slate-300 mb-10 leading-loose ">
          Cryptocurrency wallets provide users with a digital solution for ly
          storing and managing blockchain assets and cryptocurrencies. These
          wallets allow users to spend, receive, and trade cryptocurrencies.
        </p>
        <p className=" text-slate-300 mb-10 leading-loose ">
          Cryptocurrency wallets provide users with a digital solution for ly
          storing and managing blockchain assets.
        </p>
        <div className=" ">
          <Link to='/connect-wallet'>
            <button className=" py-3 text-2xl  flex items-center sm:justify-center justify-center mx-auto sm:mx-auto  md:mx-0 lg:mx-0 rounded-[50px]   text-black  bg-[#ffd300]  px-14">
              Click here
              <HiOutlineArrowNarrowRight className="ml-3" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cta