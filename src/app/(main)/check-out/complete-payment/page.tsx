"use client";

import AnimatedTick from "@/components/AnimatedTick";
import Link from "next/link";

export default function page() {
  const email = "lazyfox916@gmail.com";
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center self-center flex-col items-center">
        <AnimatedTick />
        <h1 className="sm:text-2xl font-semibold text-xl ">
          Your order have been placed successfully
        </h1>
      </div>
      <div className="my-[20px]">
        <p className="text-center flex flex-col justify-center items-center sm:mx-[300px] mx-[20px]">
          Your Order have been placed successfully. We are getting started on
          your order right away.You'll receive an email shortly to{" "}
          <p className="underline">{email}</p>
          <br />
          Thank you for choosing Nexo footwears
        </p>
        <div className="flex gap-10 justify-center my-10">
          <Link
            className="bg-white border border-violet-600 w-[150px] h-[40px] flex justify-center items-center rounded-md font-semibold"
            href={"/"}
          >
            Back to Homepage
          </Link>
          <Link
            className="bg-violet-600 w-[150px] h-[40px] flex justify-center items-center rounded-md text-white font-semibold"
            href={"/orders"}
          >
            My Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
