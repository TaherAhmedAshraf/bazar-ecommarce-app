import React from "react";

export default function Title({ children, title }) {
  return (
    <div>
      <div>
        <h1 className="text-dark text-2xl font-semibold py-3">{title}</h1>
      </div>
      <div>{children}</div>
    </div>
  );
}
