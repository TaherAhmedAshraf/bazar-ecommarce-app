import React from "react";

export default function ServiceCard({ title, subTitle, Icon }) {
  return (
    <div className="relative flex items-center space-x-3 px-9 py-6 bg-gray-50 border rounded-lg">
      <div className="text-gray-500 w-14">
        <Icon />
      </div>
      <div className="text-gray-500">
        <h1 className="text-xl font-semibold text-gray-700">{title}</h1>
        <p className="">{subTitle}</p>
      </div>
    </div>
  );
}
