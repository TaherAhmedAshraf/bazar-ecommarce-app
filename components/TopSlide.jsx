import React from "react";
import Layout from "../layout/Layout";
import Image from "next/image";
import Garlic from "../assets/garlic.png";
import GooglePlay from "../assets/google_play.png";

export default function TopSlide() {
  return (
    <div className="w-full">
      <div className="bg-primary p-8 rounded-2xl w-full flex md:flex-row flex-col-reverse">
        <div>
          <div className="text-white">
            <h1 className="text-3xl font-bold">
              Get Your Grocery <br /> Within 40 Minutes
            </h1>
            <p className="font-medium text-sm pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed
              pellentesque nibh tortor.
            </p>
          </div>
          <div className="text-white mt-10">
            <h3 className="text-xl font-bold">Try our mobile app!</h3>
            <div className=" md:flex md:space-x-5 mt-5">
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
        </div>
        <div className="relative md:w-[30vw] w-full ">
          <Image src={Garlic} layout="responsive" />
        </div>
      </div>
    </div>
  );
}
