import React, { useState } from "react";
import { useSelector } from "react-redux";
import SingleCartProduct from "./SingleCartProduct";
import { useRouter } from "next/router";

export default function CartItem() {
  const products = useSelector((state) => state.productsReducer);
  const cartItems = useSelector((state) => state.cartReducer);
  // const [totalPrice, setTotalPrice] = useState(0);
  var totalPrice = 0;
  const rounter = useRouter();

  return (
    <div className="container mx-auto my-5 lg:flex lg:space-x-4">
      <div className="w-full">
        {cartItems.map(({ _id, qty }) => {
          let item = products.filter((i) => i._id === _id);
          const { image, title, price } = item[0];
          totalPrice = totalPrice + price * qty;
          // setTotalPrice(totalPrice + price * qty);
          return (
            <SingleCartProduct
              id={_id}
              image={image}
              title={title}
              price={price}
              qty={qty}
            />
          );
        })}
      </div>
      <div className="w-[410px]">
        <div className="p-5 bg-white rounded-lg">
          <div className="flex justify-between pb-3 border-b border-gray-200 text-gray-500">
            <span>Total:</span>
            <p className="text-dark font-medium">${totalPrice}</p>
          </div>
          <div className="pt-5 text-gray-500 pb-2 border-b">
            <div className="flex item-center space-x-2">
              <p className="mt-1">Addictional Comments</p>
              <span className="text-primary bg-transRed px-2 py-1 rounded-sm">
                Note
              </span>
            </div>
            <textarea
              className="mt-5 outline-none border p-2 rounded-md"
              name=""
              id=""
              cols="32"
              rows="5"
            ></textarea>
          </div>
          <div className="pt-3">
            <input
              className="border w-full p-2 rounded outline-none"
              type="text"
              placeholder="voutcher"
            />
            <button className="w-full border border-red-400 text-primary font-medium transition-all duration-150 ease hover:bg-transRed p-2 rounded mt-2">
              Apply Voutcher
            </button>
            <button
              className="mt-2 font-medium bg-primary text-white w-full p-2 rounded"
              onClick={() => rounter.push("/checkout")}
            >
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex">
          <div className="relative h-full">
            <img
              className="h-full"
              src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
              alt=""
            />
          </div>
          <div className="ml-5 text-xl font-semibold text-dark flex flex-col justify-between">
            <h1>Ford 2021</h1>
            <p className="text-sm text-gray-500">
              $250 x 1 <span className="text-primary ml-1">$250</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between relative text-gray-500">
          <div className="text-lg rotate-45">
            <AiOutlinePlus />
          </div>
          <div>
            <button className="border p-2 border-primary rounded-sm">
              <AiOutlineMinus />
            </button>
            <input
              type="text"
              className="w-6 mx-2 outline-none cursor-pointer text-center text-dark font-medium"
              value={0}
            />
            <button className="border p-2 border-primary rounded-sm">
              <AiOutlinePlus />
            </button>
          </div>
        </div> */
}
