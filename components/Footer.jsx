import React from "react";
import Logo from "../assets/logo.svg";
import Image from "next/image";
import GooglePlay from "../assets/google_play.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";

export default function Footer({ rounded }) {
  return (
    <div className={`bg-darkBlue p-10  ${rounded ? "rounded-xl mb-10" : null}`}>
      <div className="hidden sm:flex relative w-32 h-10">
        <Image src={Logo} layout="fill" />
      </div>
      <div className="grid grid-cols-2 py-5 text-gray-400 ">
        {/* Left */}
        <div>
          <p className="text-gray-400 pb-5 lg:max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            lectus vel ut sollicitudin elit at amet.
          </p>
          <div className=" md:flex md:space-x-5 text-white">
            <div className="bg-secondary flex space-x-3 w-[150px] h-[50] rounded-md py-1 my-3 cursor-pointer">
              <div className="relative w-5 h-full flex items-center justify-center ml-4">
                <Image src={GooglePlay} layout="intrinsic" />
              </div>
              <div>
                <span className="text-xs font-bold">Get it on</span>
                <h5 className="text-base font-bold">Google Play</h5>
              </div>
            </div>
            <div className="bg-secondary flex space-x-3 w-[150px] h-[50] rounded-md py-1 my-3 cursor-pointer">
              <div className="relative w-5 h-full flex items-center justify-center ml-4">
                <Image src={GooglePlay} layout="intrinsic" />
              </div>
              <div>
                <span className="text-xs font-bold">Get it on</span>
                <h5 className="text-base font-bold">Google Play</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="ml-10">
          <ul className="flex flex-col space-y-2">
            <li className="cursor-pointer">Help Center</li>
            <li className="cursor-pointer">Track Your Order</li>
            <li className="cursor-pointer">Corporate & Bulk Purchasing</li>
            <li className="cursor-pointer">Returns & Refunds</li>
          </ul>
          <div>
            <ul className="flex space-x-2 mt-6">
              <li className="bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0)] cursor-pointer rounded-full w-10 py-3 flex justify-center items-center">
                <FaFacebookF />
              </li>
              <li className="bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0)] cursor-pointer rounded-full w-10 py-3 flex justify-center items-center">
                <FaTwitter />
              </li>
              <li className="bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0)] cursor-pointer rounded-full w-10 py-3 flex justify-center items-center">
                <FaInstagram />
              </li>
              <li className="bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0)] cursor-pointer rounded-full w-10 py-3 flex justify-center items-center">
                <FaYoutube />
              </li>
              <li className="bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0)] cursor-pointer rounded-full w-10 py-3 flex justify-center items-center">
                <FaGoogle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
