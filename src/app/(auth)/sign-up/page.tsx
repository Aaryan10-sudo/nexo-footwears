"use client";
import React from "react";
import Link from "next/link";

const formElement = [
  { id: 1, label: "Username", type: "String" },
  { id: 2, label: "Phone Number", type: "Number" },
  { id: 3, label: "Email", type: "email" },
  { label: "Password", type: "password" },
];

export default function page() {
  return (
    <div className="flex justify-center items-center bg-[url('/background.webp')] bg-center bg-cover h-screen">
      <section className="rounded-xl p-2 bg-gray-50 w-[350px] shadow-xl transition-all ease-linear hover:scale-[1.02]">
        <div className="flex items-center justify-center my-3">
          <div className="xl:mx-auto p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2"></div>
            <h2 className="text-2xl font-bold leading-tight">
              Sign up to create account
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <Link href="/log-in" className="text-violet-600 cursor-pointer">
                Sign In
              </Link>
            </p>
            <form className="mt-5">
              {formElement.map((value) => (
                <div className="space-y-4" key={value.id}>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {value.label}
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder={value.label}
                        type={value.type}
                        className="flex h-10 w-full rounded-md bg-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name={value.label}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mt-3">
                    <label className="text-base font-medium text-gray-900">
                      Profile Picture
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="file-input w-full max-w-xs"
                      type="file"
                      name="avatar"
                    />
                  </div>
                </div>
                <div>
                  <button
                    className="inline-flex w-full items-center justify-center rounded-md bg-violet-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-violet-500"
                    type="button"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
