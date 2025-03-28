"use client";

import DesktopSearchbar from "@/components/DesktopSearchbar";
import UserProfileDropdown from "@/components/UserProfileDropdown";
import { logout } from "@/redux/authSlice";
import { RootState } from "@/store/store";
import Signout from "@/ui/Signout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const navLists = [
  { links: "/", label: "Home" },
  { links: "/about", label: "About" },
  { links: "/products", label: "Products" },
  { links: "/contact", label: "Contact" },
  { links: "/orders", label: "Orders" },
];

const NavBar = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const userInfo = useSelector((state: RootState) => state.info);
  const dispatch = useDispatch();

  console.log(userInfo);

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className=" bg-white shadow-sm  sticky top-0 z-50">
      <div className="container px-4 py-3 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10 md:gap-0">
              <Link href="/" className="flex items-center gap-1">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="flex-shrink-0 w-4 h-4 rounded-full text-gray-50"
                  >
                    <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                  </svg>
                </div>
                <h1 className="font-bold text-[20px] text-black">
                  Nexo Footwears
                </h1>
              </Link>

              <DesktopSearchbar />
            </div>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none  focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  className={`w-6 h-6 ${isOpen ? "hidden" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                <svg
                  className={`w-6 h-6 ${!isOpen ? "hidden" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-16 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            {navLists.map((navLink) => (
              <div
                className="flex flex-col md:flex-row md:mx-1"
                key={navLink.label}
              >
                <Link
                  className={`${"my-2 text-sm leading-5 text-gray-700 duration-300 transform  hover:text-violet-600 hover:underline md:mx-4 md:my-0 underline-offset-8 decoration-[2px]"} ${
                    pathname === navLink.links
                      ? "font-medium text-violet-600"
                      : ""
                  }`}
                  href={navLink.links}
                >
                  {navLink.label}
                </Link>
              </div>
            ))}
            {!isLoggedIn ? (
              <div className="hidden md:block">
                <Link
                  className="text-sm bg-violet-600 w-[80px] h-[25px] text-center flex items-center justify-center rounded-sm text-white cursor-pointer font-semibold"
                  href={"/log-in"}
                >
                  Login
                </Link>
              </div>
            ) : (
              <UserProfileDropdown />
            )}

            <div className="my-4 md:hidden flex flex-col gap-5 items-center">
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
                  className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Search"
                />
              </div>
              {isLoggedIn ? (
                <>
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-500 h-10 w-10 rounded-full overflow-hidden">
                      <img src={userInfo.image} />
                    </div>

                    <div className="flex flex-col">
                      <span>{userInfo.name}</span>
                      <div className="flex flex-col">
                        <span className="text-[11px] text-gray-400">
                          {userInfo.email}
                        </span>
                        <span className="text-[11px] text-gray-400">
                          {userInfo.phoneNumber}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="text-sm w-[80px] text-center flex items-center justify-center text-red-600 cursor-pointer gap-2"
                    onClick={handleLogout}
                  >
                    Log Out <Signout />
                  </button>
                </>
              ) : (
                <Link
                  className="bg-violet-600 p-2 w-[100px] text-center font-medium text-white rounded-lg"
                  href={"/log-in"}
                >
                  Log-in
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
