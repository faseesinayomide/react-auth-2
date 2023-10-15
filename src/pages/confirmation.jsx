import React from 'react'
import {BiErrorCircle} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div className="py-14">
      <div className="text-center">
        <BiErrorCircle className="text-red-600 text-[100px] mx-auto mb-10" />

        <p className="text-red-500 mb-20 text-lg sm:text-lg md:text-xl  lg:text-xl">
          {" "}
          Ooop! An Error Has Occured while processing. Please try again .
        </p>

        <Link to="/">
          <button className="px-10 bg-[#1bbdfc] py-1 rounded-lg">Try again </button>
        </Link>
      </div>
    </div>
  );
}

export default Confirmation