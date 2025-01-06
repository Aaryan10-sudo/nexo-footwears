"use client";

import Bell from "@/ui/Bell";
import Cart from "@/ui/Cart";
import Link from "next/link";
import React from "react";

const DesktopSearchbar = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="hidden mx-10 md:block">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md  focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Search"
            />
          </div>
        </div>
        <span className="flex items-center gap-7 text-gray-500">
          <Link href={"/cart"} className="flex items-center ">
            <Cart />
            <div className="relative top-[-5px] text-red-700 animate-pulse font-bold"></div>
          </Link>
          <Bell />
        </span>
      </div>
    </div>
  );
};

export default DesktopSearchbar;
