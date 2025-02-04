import React from "react";

type Sales = {
  shoeName: string;
  sold: number;
  percentage: number;
};

const Sale: Sales[] = [
  {
    shoeName: "Nike Air Zoom Pegasus",
    sold: 100,
    percentage: 25,
  },
  {
    shoeName: "Adidas Ultraboost 20",
    sold: 150,
    percentage: 30,
  },
  {
    shoeName: "Puma Boost 3",
    sold: 200,
    percentage: 40,
  },
  {
    shoeName: "Reeboks Classic 11",
    sold: 250,
    percentage: 45,
  },
  {
    shoeName: "Converse All Star",
    sold: 300,
    percentage: 50,
  },
  {
    shoeName: "Puma Boost 3",
    sold: 300,
    percentage: 50,
  },
];

const SalesOverview = () => {
  return (
    <div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">
          Sales Overview
        </h3>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  Top Shoes
                </th>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  Sold
                </th>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {Sale.map((value, index) => (
                <tr className="text-gray-500" key={index}>
                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                    {value.shoeName}
                  </th>
                  <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                    {value.sold}
                  </td>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">
                        {value.percentage}%
                      </span>
                      <div className="relative w-full">
                        <div className="w-full bg-gray-200 rounded-sm h-2">
                          <div
                            className="bg-violet-600 h-2 rounded-sm"
                            style={{ width: `${value.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
