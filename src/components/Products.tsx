"use client";

import Cart from "@/ui/Cart";
import React from "react";
import Ruppess from "../ui/Ruppees";
import Category from "@/ui/Category";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type Product = {
  readonly id: number;
  brand: string;
  productName: string;
  price: number;
  image: string;
  ndImage: string;
  category: string;
};

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

export default function Products() {
  return (
    <div
      className="min-w-screen left-0 top-0 flex justify-center items-center outline-none focus:outline-none bg-no-repeat bg-center "
      id="modal-id"
    >
      <ToastContainer />
      <div className=" min-h-screen flex flex-col items-center justify-center ">
        <h1 className="font-bold text-[30px]">Our Featured Products</h1>
        <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {products.map((product: Product) => (
            <div className="flex flex-col " key={product.id}>
              <div className="bg-white shadow-md  rounded-3xl p-4">
                <div className="flex-none lg:flex">
                  <div className=" h-full sm:w-full w-[300px] lg:h-48 lg:w-48   lg:mb-0 mb-3">
                    <img
                      src={product.image}
                      alt="Just a flower"
                      className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"
                    />
                  </div>
                  <div className="flex-auto ml-3 justify-evenly py-2">
                    <div className="flex flex-wrap ">
                      <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                        {product.brand}
                      </div>
                      <h2 className="flex-auto text-lg font-medium">
                        {product.productName}
                      </h2>
                    </div>
                    <p className="mt-3"></p>
                    <div className="flex py-4  text-sm text-black">
                      <div className="flex-1 inline-flex items-center">
                        <Ruppess />
                        <p className="">.{product.price}</p>
                      </div>
                      <div className="flex-1 inline-flex items-center tracking-wide gap-1">
                        <Category />
                        <p className="">{product.category}</p>
                      </div>
                    </div>
                    <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                    <div className="flex space-x-3 text-sm font-medium">
                      <div className="flex-auto flex space-x-3">
                        <button
                          className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2"
                          onClick={() => {
                            toast.success("Item added to cart!");
                          }}
                        >
                          <span className="text-violet-500 hover:text-violet-600 rounded-lg">
                            <Cart />
                          </span>
                          <span>Add to cart</span>
                        </button>
                      </div>
                      <button
                        className="mb-2 md:mb-0 bg-violet-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                        type="button"
                        aria-label="like"
                      >
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
