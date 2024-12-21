"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NotLoggedIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white ">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Access Denied</h1>
        <p className="mt-4 text-lg">
          You need to log in to access this page. Please log in and try again.
        </p>
        <br />
        <Link
          className="mt-6 px-6 py-2 bg-violet-600 text-white rounded-lg shadow-md hover:bg-violet-700 transition-all duration-300"
          href={"/log-in"}
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default NotLoggedIn;
