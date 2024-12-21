import AddProduct from "@/ui/AddProduct";
import Dashboard from "@/ui/Dashboard";
import Product from "@/ui/Product";
import Signout from "@/ui/Signout";
import User from "@/ui/User";
import Link from "next/link";
import React from "react";

const sideLists = [
  { label: "Dashboard", href: "/admin", element: <Dashboard /> },
  { label: "User", href: "/user", element: <User /> },
  { label: "Products", href: "/products", element: <Product /> },
  { label: "Add Products", href: "/add-product", element: <AddProduct /> },
  { label: "Sign Out", href: "/", element: <Signout /> },
];

const Sidebar = () => {
  return (
    <div>
      <aside
        id="sidebar"
        className="fixed hidden z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
        aria-label="Sidebar"
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-white divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                {sideLists.map((lists) => (
                  <li>
                    <Link
                      href={lists.href}
                      className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                    >
                      {lists.element}
                      <span className="ml-3">{lists.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="space-y-2 pt-2">
                <a
                  href="#"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="gem"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                    ></path>
                  </svg>
                  <span className="ml-4">Upgrade to Pro</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3">Documentation</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                  <span className="ml-3">Components</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3">Help</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
