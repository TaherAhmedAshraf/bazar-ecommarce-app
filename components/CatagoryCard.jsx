import React from "react";
import Image from "next/image";

export default function CatagoryCard({ Icon, offer, title }) {
  return (
    <div>
      <div className="w-[265px] h-[120px] mb-5 hover:shadow-lg transition-all duration-300 flex items-center bg-white rounded-lg px-8">
        <div className="relative w-10">
          <Image src={Icon} layout="responsive" />
        </div>
        <div className="ml-5">
          <span className="text-primary text-[11px]">{offer}</span>
          <h1 className="font-semibold text-dark">{title}</h1>
        </div>
      </div>
    </div>
  );
}
