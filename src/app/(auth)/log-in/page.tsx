"use client";

import { login } from "@/redux/authSlice";
import { useSignInMutation } from "@/services/webService";
import { RootState } from "@/store/store";
import Loader from "@/ui/Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const [signIn] = useSignInMutation();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { email, password };
    try {
      setLoader(true);
      const result = await signIn(data);
      const token = result.data.token;
      if (token) {
        dispatch(login(token));
        toast.success(result.data.message);
        router.push("/");
        localStorage.setItem("token", token);
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <div className="flex  justify-center items-center bg-[url('/background.webp')] bg-cover bg-center h-screen">
          <ToastContainer />
          <div className="w-[350px] max-w-md p-8 space-y-3 shadow-xl rounded-xl bg-gray-50 text-gray-800 hover:shadow-lg  transition-all ease-linear hover:scale-[1.02]">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form action="" className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-1 text-sm">
                <label htmlFor="Email" className="block text-gray-600">
                  Email
                </label>
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:border-violet-600"
                />
                <div className="flex justify-end text-xs text-gray-600">
                  <a rel="noopener noreferrer" href="#">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600 font-bold"
              >
                {loader ? (
                  <div className="flex justify-center w-full">
                    <Loader />
                  </div>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

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
      ) : (
        <div className="bg-[url('/background.webp')] h-screen bg-cover bg-center flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">You are already logged in</h1>
          <br />
          <Link
            href={"/"}
            className="h-[40px] w-[200px] bg-violet-600 rounded-xl flex items-center justify-center text-white"
          >
            Get Back to Homepage
          </Link>
        </div>
      )}
    </>
  );
}
