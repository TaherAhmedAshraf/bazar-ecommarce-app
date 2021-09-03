import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <>
      <section className="shadow-xl z-50">
        <div className="container mx-auto py-6">
          {/* Top */}
          <div className="flex justify-center sm:justify-between">
            {/* Left  */}
            <div className="hidden sm:flex relative w-32 h-10">
              <Image src={Logo} layout="fill" />
            </div>

            {/* Middle */}
            <div>
              <div className="flex text-gray-400 border border-gray-300 rounded-full pl-5 overflow-hidden">
                <SearchIcon className="w-5" />
                <input
                  className="w-[35vw] px-3 outline-none"
                  type="text"
                  placeholder="Searching for..."
                />
                <button className="bg-primary text-white px-8 py-3 font-medium">
                  Search
                </button>
              </div>
            </div>

            {/* Right */}
            <div>
              <div className="hidden sm:flex space-x-5">
                <div className="bg-gray-100 p-3 rounded-full text-gray-500 cursor-pointer">
                  <UserIcon className="w-6" />
                </div>
                <div className="bg-gray-100 p-3 rounded-full text-gray-500 cursor-pointer">
                  <ShoppingBagIcon className="w-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="hidden sm:flex pt-10">
            <ul className="flex flex-grow justify-end space-x-6 text-gray-500">
              <li className="hover:text-primary cursor-pointer">Home</li>
              <li className="hover:text-primary cursor-pointer">Pages</li>
              <li className="hover:text-primary cursor-pointer">
                User Account
              </li>
              <li className="hover:text-primary cursor-pointer">
                Vendor Account
              </li>
              <li className="hover:text-primary cursor-pointer">
                Back to Demos
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
