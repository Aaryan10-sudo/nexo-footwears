import StatsOverview from "@/components/StatsOverview";
import UserAnalytics from "@/components/UserAnalytics";
import AdminFooter from "@/layout/AdminFooter";
import AdminNavbar from "@/layout/AdminNavbar";
import Sidebar from "@/layout/Sidebar";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <div className="flex overflow-hidden bg-white pt-16">
          <div
            className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
            id="sidebarBackdrop"
          ></div>
          <div
            id="main-content"
            className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
          >
            <main>
              <div className="pt-6 px-4">
                <StatsOverview />
                <UserAnalytics />
              </div>
            </main>
            <AdminFooter />
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
