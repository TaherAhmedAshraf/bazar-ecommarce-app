import React from "react";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Checkout() {
  return (
    <>
      <div className='bg-gray-100 min-h-[100vh]'>
        <Header />
        <Navbar />
        <div className="container mx-auto">
          <div className="flex justify-between space-x-8 mt-5">
            <div className='w-full'>
              <form className='w-full px-3 py-4 bg-white'>
                <h1 className='ml-6 text-xl font-medium text-gray-800 mb-3'>Shipping Address</h1>
                <div className='grid grid-cols-2'>
                  <input className='border outline-none px-4 rounded py-1 w-auto mx-6 my-2' placeholder='Full Name' />
                  <input className='border outline-none px-4 rounded py-1 w-auto mx-6 my-2' placeholder='Email Address' />
                  <input className='border outline-none px-4 rounded py-1 w-auto mx-6 my-2' placeholder='Phone Number' />
                  <input className='border outline-none px-4 rounded py-1 w-auto mx-6 my-2' placeholder='Company' />
                  <input className='border outline-none px-4 rounded py-1 w-auto mx-6 my-2' placeholder='Zip Code' />
                  <input className='border outline-none px-4 rounded py-1 w-auto mx-6 my-2' placeholder='Country' />
                  <input className='border outline-none px-4 rounded py-1 w-auto mx-6 my-2' placeholder='Address 1' />
                  <input className='border outline-none px-4 rounded py-1 w-auto mx-6 my-2' placeholder='Address 2' />
                </div>
              </form>
              <div className='grid grid-cols-2 w-full space-x-2'>
                <button className="w-auto border border-red-400 text-primary font-medium transition-all duration-150 ease hover:bg-transRed p-2 rounded mt-2">Back To Cart</button>
                <button className="mt-2 font-medium bg-primary text-white p-2 rounded w-auto">Process To Payment</button>
              </div>
            </div>
            <div className='bg-white w-96 p-6'>
              <div className='space-y-1'>
                <div className='flex justify-between'><p className='text-gray-600 font-semibold'>Subtotal:</p><span className='text-lg font-medium text-gray-700'>$26100</span></div>
                <div className='flex justify-between'><p className='text-gray-600 font-semibold'>Shipping:</p><span className='text-lg font-medium text-gray-700'>-</span></div>
                <div className='flex justify-between'><p className='text-gray-600 font-semibold'>Tex</p><span className='text-lg font-medium text-gray-700'>-</span></div>
                <div className='flex justify-between'><p className='text-gray-600 font-semibold'>Discount:</p><span className='text-lg font-medium text-gray-700'>-</span></div>
                <hr />
                <div className='flex justify-between'><p className='text-gray-600 font-semibold'></p><span className='text-2xl font-medium text-gray-700'>5500</span></div>
                <div className='pt-3'>
                  <input
                    className="border w-full p-2 rounded outline-none"
                    type="text"
                    placeholder="voutcher"
                  />
                  <button className="w-full border border-red-400 text-primary font-medium transition-all duration-150 ease hover:bg-transRed p-2 rounded mt-2">
                    Apply Voutcher
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
