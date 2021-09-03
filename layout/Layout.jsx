import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <section className="bg-gray-100">
        <div className="container h-[100%] mx-auto flex z-0">
          {/* Sidebar */}
          <div className="hidden lg:inline-flex sticky top-0 bg-white w-[280px] h-[100vh] px-5 py-10 mr-10 rounded-b-md">
            <ul className="flex flex-col space-y-4 text-gray-600 font-medium">
              <li className="hover:text-primary cursor-pointer">Vegetables</li>
              <li className="hover:text-primary cursor-pointer">
                Fruits & Vegetables
              </li>
              <li className="hover:text-primary cursor-pointer">
                Dairy & Eggs
              </li>
              <li className="hover:text-primary cursor-pointer">Brekfast</li>
              <li className="hover:text-primary cursor-pointer">Frozen</li>
              <li className="hover:text-primary cursor-pointer">Organic</li>
              <li className="hover:text-primary cursor-pointer">Canned Food</li>
              <li className="hover:text-primary cursor-pointer">
                Tofee & Snacks
              </li>
              <li className="hover:text-primary cursor-pointer">
                Sauces & Jam
              </li>
            </ul>
          </div>

          {/* children */}
          <div className="mt-10">{children}</div>
        </div>
      </section>
    </>
  );
}
