"use client";

import Cart from "@/ui/Cart";
import React, { useEffect, useState } from "react";
import Ruppess from "../ui/Ruppees";
import Category from "@/ui/Category";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useReadProductQuery } from "@/services/productService";
import Link from "next/link";

export default function Products() {
  const {
    isError: isReadProductError,
    isLoading: isReadProductLoading,
    data: readProductData,
    error: readProductError,
  } = useReadProductQuery({ filter: "active" });

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    if (readProductData?.data) {
      setProducts(readProductData.data);
    }
  }, [readProductData]);

  return (
    <div className="min-w-screen left-0 top-0 flex justify-center items-center outline-none focus:outline-none bg-no-repeat bg-center">
      <ToastContainer />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="font-bold text-[30px] text-black">
          Our Featured Products
        </h1>
        <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {products.map((value, index) => (
            <div className="flex flex-col" key={index}>
              <div className="bg-white shadow-md rounded-3xl p-4">
                <div className="flex-none lg:flex">
                  <div className="h-full sm:w-full w-[300px] lg:h-48 lg:w-48 lg:mb-0 mb-3">
                    <img
                      src={value.image}
                      alt={value.name}
                      className="w-full object-scale-down lg:object-cover lg:h-48 rounded-2xl"
                    />
                  </div>
                  <div className="flex-auto ml-3 justify-evenly py-2">
                    <div className="flex flex-wrap">
                      <div className="w-full flex-none text-xs text-blue-700 font-medium">
                        {value.brand}
                      </div>
                      <h2 className="flex-auto text-lg font-medium text-black">
                        {value.name}
                      </h2>
                    </div>
                    <div className="flex py-4 text-sm text-black">
                      <div className="flex-1 inline-flex items-center">
                        <Ruppess />
                        <p className="">{value.price}</p>
                      </div>
                      <div className="flex-1 inline-flex items-center tracking-wide gap-1">
                        <Category />
                        <p className="">{value.category}</p>
                      </div>
                    </div>
                    <div className="flex p-4 pb-2 border-t border-gray-200"></div>
                    <div className="flex space-x-3 text-sm font-medium">
                      <div className="flex-auto flex space-x-3">
                        <button
                          className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 group"
                          onClick={() => {
                            toast.success("Item added to cart!");
                          }}
                        >
                          <span className="text-gray-500 group-hover:text-violet-600 rounded-lg">
                            <Cart />
                          </span>
                          <span>Add to cart</span>
                        </button>
                      </div>
                      <Link
                        className="mb-2 md:mb-0 bg-violet-500 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-violet-600"
                        href={`/check-out?id=${value.product_id}&totalPrice=${value.price}&productName=${value.name}`}
                      >
                        Buy now
                      </Link>
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
