import React from 'react'
import {LiaWalletSolid} from 'react-icons/lia'
import Cta from './CTA';
import {GrValidate} from 'react-icons/gr'
import {RiPassValidLine} from 'react-icons/ri'
import {AiOutlineSetting} from 'react-icons/ai'
import {IoMdSwap} from 'react-icons/io'
import { GrStakeholder } from "react-icons/gr";
import { BiPurchaseTag } from "react-icons/bi";
import {TbArrowsTransferUp} from 'react-icons/tb'
import { GrVmMaintenance } from "react-icons/gr";
import {AiOutlineGift} from "react-icons/ai"
import {PiCubeThin} from 'react-icons/pi'
import {GiAutoRepair} from 'react-icons/gi'
import {RiNftLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';
import heroimage from "../../assets/images/blockchain-3019121_1280-removebg-preview.png";


const LandingPage  = () => {
  return (
    <div>
      <div className="flex py-20 flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center px-7 sm:px-7 md:lg-px-[10%] lg:px-[7%]">
        <div className="mb-[20%] sm:mb-8 md:mb-0 lg:mb-0 ">
          <h1 className="text-[#63caff] font-semibold text-4xl sm:text-4xl md:text-5xl lg:text-6xl mb-5">
            RESOLVE PROTOCOL
          </h1>
          <p className="text-slate-300 w-full sm:w-full md:w-[80%] lg:w-[80%] my-6 leading-loose ">
            Resolve Protocol is a decentralized platform and network that blends
            Blockchain with DeFi, incorporating Blockchain aspects such as
            non-custodial management, Micropools, rapid liquidity, and
            decentralized governance.{" "}
          </p>
          <div className="btn-group mt-10">
            <Link to="connect-wallet">
              <a href="" className="bg-[#63caff] px-9 py-2 rounded-3xl">
                Resolve
              </a>
            </Link>

            <a href="" className="play-btn">
              <div className="icon">
                <LiaWalletSolid />
              </div>

              <Link to="connect-wallet">
                <span className="text-slate-300">Get started</span>
              </Link>
            </a>
          </div>
        </div>

        <div>
          <img src={heroimage} alt="hero banner" className="w-[1100px]"></img>
        </div>
      </div>

      <section className="section promo" aria-label="promo">
        <div className="container">
          <h3 className="text-center mb-10 text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-100 font-bold">
            How to get started?
          </h3>
          <p className="section-text text-2xl  text-center leading-loose">
            Each procedure must be completed in its entirety. The authentication
            of wallet will be finished as follows:
          </p>

          <ul className="grid-list">
            <li>
              <div className="promo-card bg-gray">
                <RiPassValidLine className="text-6xl mb-3 text-[#63caff]" />

                <h3 className=" font-semibold text-3xl mb-5">VALIDATION</h3>

                <Link to="/connect-wallet">
                  <span className="hover:text-[#1bbdfc]">Click here</span>
                </Link>
              </div>
            </li>

            <li>
              <div className="promo-card bg-gray ">
                <AiOutlineSetting className="text-6xl  mb-3 text-[#63caff] " />

                <h3 className="font-semibold text-3xl mb-5">RECTIFICATION</h3>

                <Link to="/connect-wallet">
                  <span className="hover:text-[#1bbdfc]">Click here</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </Link>
              </div>
            </li>
            <li>
              <div className="promo-card bg-gray">
                <div className="">
                  <IoMdSwap className="text-6xl mb-3 text-[#63caff]" />
                </div>

                <h3 className="font-semibold text-3xl mb-5">SWAP</h3>

                <Link to="/connect-wallet">
                  <span className="hover:text-[#1bbdfc]">Click here</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </Link>
              </div>
            </li>
            <li>
              <div className="promo-card bg-gray">
                <div>
                  <PiCubeThin className="text-6xl mb-3 text-[#63caff]" />
                </div>

                <h3 className="font-semibold text-3xl mb-5">STAKING</h3>

                <Link to="/connect-wallet">
                  <span className="hover:text-[#1bbdfc]">Click here</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </Link>
              </div>
            </li>

            <li>
              <div className="promo-card bg-gray">
                <div className="">
                  <BiPurchaseTag className="text-6xl mb-3 text-[#63caff]" />
                </div>

                <h3 className="font-semibold text-3xl mb-5">BUY NOW</h3>

                <Link to="/connect-wallet">
                  <span className="hover:text-[#1bbdfc]">Click here</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </Link>
              </div>
            </li>

            <li>
              <div className="promo-card bg-gray">
                <div className="">
                  <TbArrowsTransferUp className="text-6xl mb-3 text-[#63caff]" />
                </div>

                <h3 className="font-semibold text-3xl mb-5">MIGRATION</h3>

                <Link to="/connect-wallet">
                  <span className="hover:text-[#1bbdfc]">Click here</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </Link>
              </div>
            </li>

            <li>
              <div className="promo-card bg-gray">
                <div className="">
                  <GiAutoRepair className="text-6xl mb-3 text-[#63caff]" />
                </div>

                <h3 className="font-semibold text-3xl mb-5">MAINTENANCE</h3>

                <Link to="/connect-wallet">
                  <span className="hover:text-[#1bbdfc]">Click here</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </Link>
              </div>
            </li>

            <li>
              <div className="promo-card bg-gray">
                <div className="">
                  <AiOutlineGift className="text-6xl mb-3 text-[#63caff]" />
                </div>

                <h3 className="font-semibold text-3xl mb-5">CLAIM REWARD</h3>

                <Link to="/connect-wallet">
                  <span className="hover:text-[#1bbdfc]">Click here</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </Link>
              </div>
            </li>
            <li>
              <div className="promo-card bg-gray">
                <div className="">
                  <RiNftLine className="text-6xl mb-3 text-[#63caff]" />
                </div>

                <h3 className="font-semibold text-3xl mb-5">NFT MINT</h3>

                <Link to="/connect-wallet">
                  <span className="hover:text-[#1bbdfc]">Click here</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;