"use client";

import NotLoggedIn from "@/components/NotLoggedIn";
import { useCreateOrderMutation } from "@/services/orderService";
import { RootState } from "@/store/store";
import Loader from "@/ui/Loader";
import Ruppess from "@/ui/Ruppees";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const id = searchParams.get("id");
  const totalPrice = searchParams.get("totalPrice");
  const productName = searchParams.get("productName");
  const [order] = useCreateOrderMutation();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("cod");

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      productId: id,
      productName: productName,
      paymentMethod: paymentMethod,
      user_info: {
        fullName: fullName,
        phoneNumber: phone,
        shippingAddress: address,
        email: email,
      },
      price: totalPrice,
      totalPrice: totalPrice,
    };

    if (paymentMethod === "cod") {
      try {
        setLoader(true);
        const result = await axios({
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/order/create-order`,
          method: "POST",
          data,
        });
        router.push(
          "https://nexo-footwears.vercel.app/check-out/complete-payment"
        );
        setLoader(false);
      } catch (err) {
        console.log(err);
        setLoader(false);
      }
    } else if (paymentMethod === "khalti") {
      try {
        setLoader(true);
        const result = await axios({
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/order/create-order`,
          method: "POST",
          data,
        });

        const orderId = result.data?.data?._id;
        console.log(orderId);

        const khaltiPayment = await axios({
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/initialize-khalti?orderId=${orderId}`,
          method: "POST",
          data,
        });

        router.push(khaltiPayment.data.paymentInitiate.payment_url);
        setLoader(false);
      } catch (err) {
        console.log(err);
      }
    } else {
      router.push("https://esewa.com/");
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md my-5">
          <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

          <form
            className="space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            {/* Left Column - Contact Details */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location / Address
                </label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your delivery address"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Payment Method
                </h3>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={handlePaymentChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <label htmlFor="cod" className="ml-2 text-sm text-gray-700">
                    Cash on Delivery (COD)
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="esewa"
                    name="paymentMethod"
                    value="esewa"
                    checked={paymentMethod === "esewa"}
                    onChange={handlePaymentChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <label htmlFor="esewa" className="ml-2 text-sm text-gray-700">
                    <img
                      src="/esewa.webp"
                      alt="eSewa Logo"
                      className="inline-block h-6 w-auto mr-2"
                    />
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="khalti"
                    name="paymentMethod"
                    value="khalti"
                    checked={paymentMethod === "khalti"}
                    onChange={handlePaymentChange}
                    className="h-4 w-4 text-violet-600"
                  />
                  <label
                    htmlFor="khalti"
                    className="ml-2 text-sm text-gray-700"
                  >
                    <img
                      src="/khalti.webp"
                      alt="Khalti Logo"
                      className="inline-block h-6 w-auto mr-2"
                    />
                  </label>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-medium text-gray-800">
                  Payment Summary
                </h3>
                <div className="flex justify-between text-sm text-gray-700">
                  <span>Total Payment:</span>
                  <span className="font-semibold flex items-center gap-1">
                    <Ruppess />. {totalPrice}
                  </span>
                </div>

                <div className="flex justify-between text-sm text-gray-700">
                  <span>Delivery Charge:</span>
                  <span className="font-semibold flex items-center gap-1">
                    <Ruppess />. 0.00
                  </span>
                </div>

                <div className="flex justify-between text-sm  bg-slate-300 text-black h-[30px] px-[10px] items-center rounded-sm">
                  <span>Sub-total:</span>
                  <span className="font-semibold flex items-center gap-1">
                    <Ruppess />. {totalPrice}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="flex justify-center items-center w-full py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                {loader ? <Loader /> : "Proceed to Payment"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <NotLoggedIn />
      )}
    </>
  );
};

export default page;
