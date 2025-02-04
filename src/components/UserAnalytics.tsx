import React from "react";
import SalesOverview from "./SalesOverview";

type Users = { name: string; image: string; totalSpend: number };

const User: Users[] = [
  {
    name: "John Doe",
    image: "https://i.ytimg.com/vi/R3hueJlfYI0/hqdefault.jpg",
    totalSpend: 2500,
  },
  {
    name: "Jane Smith",
    image:
      "https://offeringhappiness.com/media/CACHE/images/images/catalog/products/14_-_Balchhi_Dhurbe/5a75dbff27ecead17582a35b0eb5afbf.jpg",
    totalSpend: 1800,
  },
  {
    name: "Mike Johnson",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.hN4lN3Frh0WhZItrccRaXwHaEK&pid=Api&P=0&h=220",
    totalSpend: 1200,
  },
  {
    name: "Sarah Brown",
    image: "https://s1.dmcdn.net/v/U_Mmv1aYxqHpIbWRh/x720",
    totalSpend: 1000,
  },
  {
    name: "David Wilson",
    image:
      "https://i.pinimg.com/originals/d5/46/cd/d546cddd2a9ebcbe7efa40d729669eff.png",
    totalSpend: 800,
  },
];
const UserAnalytics = () => {
  return (
    <div>
      <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
        <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold leading-none text-gray-900">
              Latest Customers
            </h3>
            <a
              href="#"
              className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
            >
              View all
            </a>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
              {User.map((value, index) => (
                <li className="py-3 sm:py-4" key={index}>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={value.image}
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {value.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        <a
                          href="/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="17727a767e7b57607e7973646372653974787a"
                        >
                          [email&#160;protected]
                        </a>
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                      {value.totalSpend}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SalesOverview />
      </div>
    </div>
  );
};

export default UserAnalytics;
