import React from "react";
import { PhoneIcon, MailIcon, ChevronDownIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <header className="bg-secondary py-3">
      <div className="container mx-auto flex justify-between">
        {/* Left Side */}
        <div className="flex space-x-6 text-white text-sm">
          <p className="hidden lg:flex">
            <PhoneIcon className="w-5 mr-2" />
            +88012 3456 7894
          </p>

          <p className="hidden lg:flex">
            <MailIcon className="w-5 mr-2" />
            support@bazar.com
          </p>
        </div>

        {/* Right Side */}
        <div className="flex space-x-5 text-white text-sm">
          <div className="flex space-x-5 font-thin">
            <p>FAQ's</p>
            <p>Need Help?</p>
          </div>
          <div className="flex space-x-5 font-medium">
            <p className="flex">
              EN <ChevronDownIcon className="w-3 ml-1" />
            </p>
            <p className="flex">
              USD <ChevronDownIcon className="w-3 ml-1" />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
