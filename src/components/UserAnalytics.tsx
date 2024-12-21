import React from "react";
import SalesOverview from "./SalesOverview";

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
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Neil Sims
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
                    $320
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://demo.themesberg.com/windster/images/users/bonnie-green.png"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Bonnie Green
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9"
                      >
                        [email&#160;protected]
                      </a>
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    $3467
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://demo.themesberg.com/windster/images/users/michael-gough.png"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Michael Gough
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="57323a363e3b17203e3933242332257934383a"
                      >
                        [email&#160;protected]
                      </a>
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    $67
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://demo.themesberg.com/windster/images/users/thomas-lean.png"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Thomes Lean
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="284d45494144685f41464c5b5c4d5a064b4745"
                      >
                        [email&#160;protected]
                      </a>
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    $2367
                  </div>
                </div>
              </li>
              <li className="pt-3 sm:pt-4 pb-0">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://demo.themesberg.com/windster/images/users/lana-byrd.png"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Lana Byrd
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf"
                      >
                        [email&#160;protected]
                      </a>
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    $367
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <SalesOverview />
      </div>
    </div>
  );
};

export default UserAnalytics;
