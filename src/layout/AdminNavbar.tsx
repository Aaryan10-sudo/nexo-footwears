import Link from "next/link";
import React from "react";

const AdminNavbar = () => {
  return (
    <div>
      <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Link href="/admin" className="flex items-center gap-1">
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
                <h1 className="font-bold text-[20px]">Nexo Footwears</h1>
              </Link>

              <form
                action="#"
                method="GET"
                className="hidden lg:block lg:pl-32"
              >
                <label htmlFor="topbar-search" className="sr-only">
                  Search
                </label>
                <div className="mt-1 relative lg:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="topbar-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-cyan-600 block w-full pl-10 p-2.5"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center">
              <button
                id="toggleSidebarMobileSearch"
                type="button"
                className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
              >
                <span className="sr-only">Search</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="hidden lg:flex items-center">
                <span className="text-base font-normal text-gray-500 mr-5">
                  Admin Panel
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
