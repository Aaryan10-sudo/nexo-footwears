"use client";

import NotLoggedIn from "@/components/NotLoggedIn";
import { Product } from "@/components/Products";
import { RootState } from "@/store/store";
import Ruppess from "@/ui/Ruppees";
import React from "react";
import { useSelector } from "react-redux";

const products: Product[] = [
  {
    id: 1,
    brand: "Nike",
    productName: "Nike Airforce 1",
    price: 5000,
    image: "/airforce.webp",
    ndImage: "/airforceback.webp",
    category: "Casual",
  },
  {
    id: 2,
    brand: "Adidas",
    productName: "Adidas Forum Low",
    price: 4000,
    image: "/forum.webp",
    ndImage: "/adidasback.webp",

    category: "Casual",
  },
  {
    id: 3,
    brand: "Reebok",
    productName: "Reebok Classic",
    price: 3500,
    image: "/reebok.webp",
    ndImage: "/reebokback.webp",

    category: "Sports",
  },
  {
    id: 4,
    brand: "Converse",
    productName: "Chuck Taylor Converse",
    price: 4500,
    image: "/converse.webp",
    ndImage: "/converseback.webp",

    category: "Trending",
  },
  {
    id: 5,
    brand: "Puma",
    productName: "Puma Superstar",
    price: 4500,
    image: "/puma.webp",
    ndImage: "/pumaback.webp",

    category: "Sports",
  },
  {
    id: 6,
    brand: "New Balance",
    productName: "New Balance 550",
    price: 4500,
    image: "/newbalance.webp",
    ndImage: "/newbalanceback.webp",
    category: "Trending",
  },
];

let discountedPrice = 0;

for (let i = 0; i < products.length; i++) {
  let discount = (products[i].price * 30) / 100;
  discountedPrice += products[i].price - discount;
}

let totalPrice = 0;
for (let i = 0; i < products.length; i++) {
  totalPrice += products[i].price;
}

export default function page() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <div className="bg-white min-h-screen">
          <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-violet-500 text-center mb-8">
              Order Summary
            </h1>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Order Details
              </h2>
              <div className="space-y-4">
                {products.map((product: Product) => (
                  <div
                    className="flex justify-between items-center"
                    key={product.id}
                  >
                    <div>
                      <p className="text-lg font-medium text-gray-700">
                        {product.productName}
                      </p>
                      <p className="text-sm text-gray-500">Size: 9</p>
                      <p className="text-sm text-gray-500">Quantity: 1</p>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 flex justify-center items-center gap-1">
                      <Ruppess />. {product.price}
                    </p>
                  </div>
                ))}

                {/* Total Price */}
                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-gray-800">Total</p>
                    <div className="flex flex-col gap-3 justify-center items-center">
                      <span className="flex items-center font-bold">
                        <Ruppess />. {discountedPrice}
                      </span>
                      <span className="text-sm  text-gray-400 flex items-center gap-2">
                        <p className="text-black">-30% </p>
                        <p className="line-through">{totalPrice}</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Delivery Address
                </h2>
                <p className="text-lg text-gray-700">Aaryan Sharma</p>
                <p className="text-sm text-gray-500">
                  Budhanilkantha -3 , Kathmandu, Nepal
                </p>
              </div>

              {/* Contact Details */}
              <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Contact Details
                </h2>
                <p className="text-lg text-gray-700">Phone: +977-1234567890</p>
                <p className="text-lg text-gray-700">
                  Email: aaryan.sharma@example.com
                </p>
              </div>

              {/* Payment Method and Delivery Status */}
              <div className="mt-8 space-y-4">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Payment Method
                  </h2>
                  <p className="text-lg text-gray-700">C.O.D</p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Delivery Status
                  </h2>
                  <p className="text-lg text-gray-700">Status: Shipped</p>
                  <p className="text-sm text-gray-500">
                    Expected Delivery: 15th Dec 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NotLoggedIn />
      )}
    </>
  );
}
