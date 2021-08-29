import React from "react";
import { TruckIcon } from "@heroicons/react/outline";
import ServiceCard from "./ServiceCard";

export default function Service() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:space-x-4 space-y-4 lg:space-y-0 0 py-10">
      <ServiceCard
        title="Fast Delivery"
        subTitle="Start from 10$"
        Icon={TruckIcon}
      />
      <ServiceCard title="Feedback" subTitle="97% positive" Icon={TruckIcon} />
      <ServiceCard title="Payment" subTitle="100% secure" Icon={TruckIcon} />
    </div>
  );
}
