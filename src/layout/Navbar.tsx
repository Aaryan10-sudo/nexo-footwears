"use client";

import Bell from "@/ui/Bell";
import Cart from "@/ui/Cart";
import Facebook from "@/ui/Facebook";
import Instagram from "@/ui/Instagram";
import Phone from "@/ui/Phone";
import Twitter from "@/ui/Twitter";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="h-[40px] bg-gray-50 md:px-[30px] px-[10px] flex justify-between items-center  rounded-bl-xl rounded-br-xl">
        <span className="sm:text-[20px] text-[15px] flex items-center ">
          <Phone /> : <p>+977 9761627657</p>
        </span>
        <div className="flex items-center gap-2 lg:text-[20px] text-[15px]">
          <p className="">Follow us on : </p>
          <span className="flex gap-5">
            <Facebook />
            <Instagram />
            <Twitter />
          </span>
        </div>
      </div>
      <header className="sm:px-3 bg-white opacity-100 text-gray-800 sticky z-50 top-0 ">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex gap-[50px] items-center">
            <div className="flex">
              <Link
                rel="noopener noreferrer"
                href="/"
                aria-label="Back to homepage"
                className="flex items-center p-2"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="flex-shrink-0 w-5 h-5 rounded-full text-gray-50"
                  >
                    <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                  </svg>
                </div>
              </Link>
              <h1 className="self-center text-2xl font-semibold">
                Nexo Footwears
              </h1>
            </div>
            <ul className="items-stretch hidden space-x-3 lg:flex uppercase text-[13px]">
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="/about"
                  className="flex items-center px-4 -mb-1  text-violet-600 border-violet-600 border-transparent hover:border-2 hover:border-b-violet-700 transition-all ease-in "
                >
                  About
                </a>
              </li>
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-transparent hover:border-2 hover:border-b-violet-700 transition-all ease-in"
                >
                  Products
                </a>
              </li>
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-transparent hover:border-2 hover:border-b-violet-700 transition-all ease-in"
                >
                  Catalogs
                </a>
              </li>
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-transparent hover:border-2 hover:border-b-violet-700 transition-all ease-in"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center md:space-x-4">
            <div className="flex gap-4 text-gray-400 text-[18px] items-center">
              <Link
                href={"/cart"}
                className="hover:text-violet-600 transition-all ease-in-out duration-200 flex items-center"
              >
                <Cart />
                <p className="relative top-[-5px] hover:text-violet-600 text-red-500">
                  3
                </p>
              </Link>
              <Bell />
            </div>
            <div className="relative hidden sm:block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  title="Search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 text-gray-800"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 border-2 text-gray-800 focus:bg-gray-50 "
              />
            </div>
            <Link
              href={"/log-in"}
              type="button"
              className="hidden px-6 py-2 rounded lg:block bg-violet-600 text-gray-50"
            >
              Log in
            </Link>
          </div>
          <button title="Open menu" type="button" className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
