import React from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function Products() {
  const products = useSelector((state) => state.productsReducer);
  console.log(products);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-[270px] h-[400px] relative p-3 bg-white my-2 rounded-md hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <div className="h-[70%] flex justify-center item-center">
            <img className="h-full" src={product.image} alt={product.title} />
          </div>
          <div className="h-[30%] flex flex-col justify-end">
            <h1 className="my-2 text-dark font-medium">
              {product.title.substring(0, 50)}...
            </h1>
            {/* <p>{product.category}</p> */}
            <div className="flex justify-between">
              <p className="text-primary font-medium text-sm">
                ${product.price}
              </p>
              <button className="border border-primary text-primary p-1 rounded-sm hover:shadow">
                <AiOutlinePlus />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
