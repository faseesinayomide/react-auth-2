import React from 'react'

const Footer = () => {

  const curentYear = new Date()



  const year = curentYear.getFullYear()

  return (
    <div>
      <hr className="border-slate-600" />
      <footer className="  bg-[#10171e] text-lg sm:text-lg md:text-2xl lg:text-2xl px-3 sm:px-3 md:px-0 lg:px-0 py-20 ">
        <ul className="footer-list">
          <li>
            <a href="#" className="footer-link">
              Docs
            </a>
          </li>

          <li>
            <a href="#" className="footer-link">
              About
            </a>
          </li>

          <li>
            <a href="#" className="footer-link">
              Market
            </a>
          </li>

          <li>
            <a href="#" className="footer-link">
              Trading
            </a>
          </li>

          <li>
            <a href="#" className="footer-link">
              Team
            </a>
          </li>
        </ul>

        <div className="social-wrapper">
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" classNames="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-dribbble"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-behance"></ion-icon>
              </a>
            </li>
          </ul>
        </div>

        <div className=" text-center text-[#1bbdfc]">
          <div className="">
            <p className="text-xl">
              Copyright Resolve protocol {year}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer