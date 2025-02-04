import AddProduct from "@/ui/AddProduct";
import Dashboard from "@/ui/Dashboard";
import Order from "@/ui/Order";
import Product from "@/ui/Product";
import Signout from "@/ui/Signout";
import User from "@/ui/User";
import Link from "next/link";
import React from "react";

const sideLists = [
  { label: "Dashboard", href: "/admin", element: <Dashboard /> },
  { label: "User", href: "/admin/user", element: <User /> },
  { label: "Products", href: "/admin/products", element: <Product /> },
  { label: "Orders", href: "/admin/orders", element: <Order /> },
  {
    label: "Add Products",
    href: "/admin/add-product",
    element: <AddProduct />,
  },
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
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
