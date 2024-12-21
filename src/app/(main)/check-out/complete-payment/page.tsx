"use client";

// import AnimatedTick from "@/components/AnimatedTick";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function page() {
  const email = useSelector((state: RootState) => state.info.email);

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center self-center flex-col items-center">
        {/* <AnimatedTick /> */}
        <h1 className="sm:text-2xl font-semibold text-xl ">
          Your order has been placed successfully
        </h1>
      </div>
      <div className="my-[20px]">
        <p className="text-center sm:mx-[300px] mx-[20px]">
          Your order has been placed successfully. We are getting started on
          your order right away. You'll receive an email shortly to{" "}
          <span className="underline text-violet-500">{email}</span>
          <br />
          Thank you for choosing Nexo footwears
        </p>
        <div className="flex gap-10 justify-center my-10">
          <Link
            className="bg-white border-2
             border-violet-600 w-[150px] h-[40px] flex justify-center items-center rounded-md font-semibold"
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
