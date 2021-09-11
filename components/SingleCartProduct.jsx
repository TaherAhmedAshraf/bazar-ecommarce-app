import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { INCREMENT, DECREMENT } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function SingleCartProduct({ id, image, title, price, qty }) {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-36 bg-white py-4 px-6 rounded-lg flex justify-between mb-2">
      <div className="flex w-full">
        <div className="relative w-24">
          <img className="w-full" src={image} alt="" />
        </div>
        <div className="flex flex-col justify-between pl-5 w-full">
          <div className="flex justify-between">
            <div className="text-xl font-semibold text-dark">
              <h1>{title}</h1>
            </div>
            <div className="text-lg rotate-45">
              <AiOutlinePlus />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-gray-500 font-medium text-sm">
              ${price} x {qty}{" "}
              <span className="text-primary pl-2">${price * qty}</span>
            </div>
            <div>
              <button
                className="border p-2 border-gray-400 rounded-sm"
                onClick={() => dispatch(DECREMENT(id))}
              >
                <AiOutlineMinus />
              </button>
              <input
                type="text"
                className="w-6 mx-2 outline-none cursor-pointer text-center text-dark font-medium "
                value={qty}
              />
              <button
                className="border p-2 border-primary rounded-sm"
                onClick={() => dispatch(INCREMENT(id))}
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
