"use client";

import Ruppess from "@/ui/Ruppees";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Link from "next/link";

const Checkout = () => {
  const router = useRouter(); // Correct usage
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const totalPrice = searchParams.get("totalPrice");
  const productName = searchParams.get("productName");

  const [paymentMethod, setPaymentMethod] = useState<string>("cod");

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (paymentMethod === "cod") {
      <Link
        href={"nexo-footwears.vercel.app/complete-payment/check-out"}
      ></Link>;
    } else if (paymentMethod === "khalti") {
      router.push("https:www.khalti.com");
    } else {
      router.push("https://esewa.com/");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md my-5">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

      <form
        className="space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-6"
        onSubmit={handleSubmit}
      >
        {/* Left Column - Contact Details */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location / Address
            </label>
            <textarea
              placeholder="Enter your delivery address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right Column - Payment Method and Summary */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Payment Method</h3>

            <div className="flex items-center">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={handlePaymentChange}
                className="h-4 w-4 text-blue-600"
              />
              <label htmlFor="cod" className="ml-2 text-sm text-gray-700">
                Cash on Delivery (COD)
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="esewa"
                name="paymentMethod"
                value="esewa"
                checked={paymentMethod === "esewa"}
                onChange={handlePaymentChange}
                className="h-4 w-4 text-blue-600"
              />
              <label htmlFor="esewa" className="ml-2 text-sm text-gray-700">
                <img
                  src="/esewa.webp"
                  alt="eSewa Logo"
                  className="inline-block h-6 w-auto mr-2"
                />
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="khalti"
                name="paymentMethod"
                value="khalti"
                checked={paymentMethod === "khalti"}
                onChange={handlePaymentChange}
                className="h-4 w-4 text-violet-600"
              />
              <label htmlFor="khalti" className="ml-2 text-sm text-gray-700">
                <img
                  src="/khalti.webp"
                  alt="Khalti Logo"
                  className="inline-block h-6 w-auto mr-2"
                />
              </label>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-medium text-gray-800">
              Payment Summary
            </h3>
            <div className="flex justify-between text-sm text-gray-700">
              <span>Total Payment:</span>
              <span className="font-semibold flex items-center gap-1">
                <Ruppess />. 11,200
              </span>
            </div>

            <div className="flex justify-between text-sm text-gray-700">
              <span>Delivery Charge:</span>
              <span className="font-semibold flex items-center gap-1">
                <Ruppess />. 0.00
              </span>
            </div>

            <div className="flex justify-between text-sm  bg-slate-300 text-black h-[30px] px-[10px] items-center rounded-sm">
              <span>Sub-total:</span>
              <span className="font-semibold flex items-center gap-1">
                <Ruppess />. 11,200
              </span>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
