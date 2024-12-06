"use-client";

import React from "react";
import Link from "next/link";
import Google from "../../../ui/Google";
import Twitter from "../../../ui/Twitter";
import Facebook from "../../../ui/Facebook";

export default function page() {
  return (
    <div className="flex  justify-center items-center bg-[url('/background.webp')] bg-cover bg-center h-screen">
      <div className="w-[350px] max-w-md p-8 space-y-3 shadow-xl rounded-xl bg-gray-50 text-gray-800 hover:shadow-lg  transition-all ease-linear hover:scale-[1.02]">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="Email" className="block text-gray-600">
              Email
            </label>
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:border-violet-600"
            />
            <div className="flex justify-end text-xs text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600 font-bold">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-sm">
            <Google />
          </button>
          <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
            <Twitter />
          </button>
          <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <Facebook />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-600 tracking-wider">
          Don't have an account?
          <Link
            rel="noopener noreferrer"
            href="/sign-up"
            className="underline text-violet-600 font-bold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
