import React, { useState } from 'react'
import Modal from '../component/Modal/Modal';
import { Link, Outlet } from 'react-router-dom';
import walletimage from "../assets/wallets/images/photo_2021-07-13-16.27.25-removebg-preview.png";
import wallet1 from "../assets/wallets/images/unnamed (3).png";
import wallet2 from "../assets/wallets/images/download.png";
import wallet3 from "../assets/wallets/images/en-coinbase-logo.jpg";
import wallet4 from "../assets/wallets/images/Crypto.com-Buy-Bitcoin-Now-APK-MOD-Premium-Download-3.96.0.png";
import wallet5 from "../assets/wallets/images/unnamed (2).png";
import wallet6 from "../assets/wallets/images/safepal-1022b40e2ea3a4a6bb19cf6ff28d8b92.png";
import wallet7 from "../assets/wallets/images/authereum.png";
import wallet8 from "../assets/wallets/images/pO6fla5H_400x400.jpg";
import wallet9 from "../assets/wallets/images/nebulas.png";
import wallet10 from "../assets/wallets/images/tomo.png";
import wallet11 from "../assets/wallets/images/enjin-coin-enj-logo.png";
import wallet12 from "../assets/wallets/images/nimiq.png";
import wallet13 from "../assets/wallets/images/parsiq.jpg";
import wallet14 from "../assets/wallets/images/rainbow-207dda8d66f8ffc00a21e4fcc5ce0a73.png";
import wallet15 from "../assets/wallets/images/wanchain.png";
import wallet16 from "../assets/wallets/images/iotex.png";
import wallet17 from "../assets/wallets/images/ethereum-classic.png";
import wallet18 from "../assets/wallets/images/kin.png";
import wallet19 from "../assets/wallets/images/14611.png";
import wallet20 from "../assets/wallets/images/6Gk7Sdhs_400x400.jpg";
import wallet21 from "../assets/wallets/images/8wVEhhpi_400x400.jpeg";
import wallet22 from "../assets/wallets/images/RoeM48hT_400x400.png";
import wallet23 from "../assets/wallets/images/nem-1024x1024.png";
import wallet24 from "../assets/wallets/images/photo5940449033686465477.jpg";
import wallet25 from "../assets/wallets/images/download (2).png";
import wallet26 from "../assets/wallets/images/download (1).png";
import wallet27 from "../assets/wallets/images/download.jpg";
import wallet28 from "../assets/wallets/images/Monarch-Wallet.png";
import wallet29 from "../assets/wallets/images/download (3).png";
import wallet30 from "../assets/wallets/images/wallet-connect.03da5e3f.svg";
import wallet31 from "../assets/wallets/images/defi.png"
import wallet32 from "../assets/images/632baf916109eec51607f996_public.png";




const DATA = [
  { id: 1, wallet: "Trust", logo: wallet1 },
  { id: 2, wallet: "Metamask", logo: wallet2 },
  { id: 3, wallet: "Coinbase", logo: wallet3 },
  { id: 4, wallet: "Crypto.com", logo: wallet4 },
  { id: 5, wallet: "Defi", logo: wallet31 },
  { id: 32, wallet: "bifrost", logo: wallet32 },
  { id: 6, wallet: "Nimiq", logo: wallet5 },
  { id: 7, wallet: "Safepal", logo: wallet6 },
  { id: 8, wallet: "Authereum", logo: wallet7 },
  { id: 9, wallet: "Fint", logo: wallet8 },
  { id: 10, wallet: "Nebulas", logo: wallet9 },
  { id: 11, wallet: "Tomo", logo: wallet10 },
  { id: 12, wallet: "Enjin", logo: wallet11 },
  { id: 13, wallet: "Nimiq", logo: wallet12 },
  { id: 14, wallet: "Parsiq", logo: wallet13 },
  { id: 15, wallet: "Rainbow", logo: wallet14 },
  { id: 16, wallet: "Wanchain", logo: wallet15 },
  { id: 17, wallet: "Iotex", logo: wallet16 },
  { id: 18, wallet: "Ethereum", logo: wallet17 },
  { id: 19, wallet: "kin", logo: wallet18 },
  { id: 20, wallet: "Rice", logo: wallet19 },
  { id: 21, wallet: "Nami wallet", logo: wallet20 },
  { id: 22, wallet: "Ledger live", logo: wallet21 },
  { id: 23, wallet: "Bravos", logo: wallet22 },
  { id: 24, wallet: "Nem", logo: wallet23 },
  { id: 25, wallet: "pera Algo", logo: wallet24 },
  { id: 26, wallet: "Digitex", logo: wallet25 },
  { id: 27, wallet: "Argent", logo: wallet26 },
  { id: 28, wallet: "Monarch", logo: wallet27 },
  { id: 29, wallet: "Nimiq", logo: wallet28 },
  { id: 30, wallet: "Cello", logo: wallet29 },
  { id: 31, wallet: "Wallet Connect", logo: wallet30 },
];

import { useNavigate } from 'react-router-dom';

const ConnectWallet = () => {

   const [showModal, setShowModal] = useState(false);
   const [isError, setIsError] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [activeWallet, setActiveWallet] = useState("");
   const handleConnect = (wallet) => {
     setShowModal(true);
     setActiveWallet(wallet);
   };
   const navigate = useNavigate()

   const handleCloseModal = () => {
     setShowModal(false);
   };

   const handleAutoConnect = () => {
     setIsLoading(true);
     setTimeout(() => {
       setIsLoading(false);
       navigate("/submit")
    
     }, 4000);
   };
  return (
    <>
      {showModal && (
        <Modal onCloseHandler={handleCloseModal}>
          <div className="p-6 font-sans">
            <div className="gap-8  bg-blue-400 md:p-10 rounded-xl 0 p-10 w-full md:w-[400px]">
              <h3 className="text-black text-4xl font-bold mb-10 text-center">
                CONNECT YOUR WALLET
              </h3>

              <p className="text-black text-center mb-7">
                Selected Wallet: {activeWallet}
              </p>

              <div className="flex flex-col  gap-7">
                <button
                  onClick={handleAutoConnect}
                  className="bg-white   rounded-md px-5 py-2 "
                >
                  {!isLoading ? "Connect" : "Syncronizing..."}
                </button>
           
                {isError === true && (
                  <div>
                    <Link to="/submit">
                      <button className="bg-white w-full rounded-md px-5 py-2 ">
                        Connect manually
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
      <div className="text-center py-14 px-10">
        <img
          className="w-[60%] sm:w-[45%] md:w-[30%] lg:w-[30%] mx-auto  rounded-lg"
          src={walletimage}
          alt=""
        />
        <h1 className="text-[#3a99fc] text-3xl md:text-6xl mb-8 font-semibold ">
          How it works
        </h1>

        <p className="text-slate-300 w-full md:w-[60%] mx-auto text-[15px] leading-loose">
          {" "}
          Multiple iOS and Android wallets support the WalletConnect protocol.
          Interaction between mobile apps and mobile browsers are supported via
          mobile deep linking...
        </p>
      </div>

      <div className="grid grid-cols-3   sm:grid-cols-3 smmd:grid-cols-5 lg:grid-cols-6  gap-y-20 gap-x-24 px-10 container mx-auto py-[10%] ">
        {DATA.map((item) => {
          return (
            <div
              className=""
              onClick={() => handleConnect(item.wallet)}
              key={item.id}
            >
              <img
                className="w-[100%] rounded-lg mb-5 "
                src={item.logo}
                alt=""
              />
              <div className="flex justify-center">
                <button className="  text-slate-50 text-[14px]">
                  {item.wallet}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ConnectWallet