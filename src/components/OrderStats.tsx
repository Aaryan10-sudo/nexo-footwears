import Cancel from "@/ui/Cancel";
import Delivered from "@/ui/Delivered";
import Pending from "@/ui/Pending";
import React from "react";

const OrderStats = () => {
  return (
    <div>
      <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                2,340
              </span>
              <h3 className="text-base font-normal text-gray-500">
                Delivered Orders
              </h3>
            </div>
            <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
              <Delivered />
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                10
              </span>
              <h3 className="text-base font-normal text-gray-500">
                Pending Orders
              </h3>
            </div>
            <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
              <Pending />
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                2
              </span>
              <h3 className="text-base font-normal text-gray-500">
                Cancelled Orders
              </h3>
            </div>
            <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
              <Cancel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStats;
