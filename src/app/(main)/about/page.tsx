import Brands from "@/components/Brands";
import CashOnDelivery from "@/ui/CashOnDelivery";
import Crown from "@/ui/Crown";
import Dollar from "@/ui/Dollar";
import Facebook from "@/ui/Facebook";
import Instagram from "@/ui/Instagram";
import Twitter from "@/ui/Twitter";
import Link from "next/link";

export default function page() {
  return (
    <>
      <section className="py-10 sm:py-16 lg:py-10">
        <h1 className="text-center mb-[20px] font-bold text-xl text-violet-600">
          About Nexo
        </h1>

        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="relative mb-12">
              <img
                className="w-full rounded-md"
                src="/shoebanner.webp"
                alt=""
              />

              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-white rounded">
                  <div className="px-10 py-6">
                    <div className="flex items-center">
                      <p className="flex-shrink-0 text-3xl font-bold text-violet-600 sm:text-4xl">
                        98%
                      </p>
                      <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                        Customer success rate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <svg
                  className="w-8 h-8 text-orange-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Where Style Meets Comfort
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                At Nexo Footwear, we’re passionate about bringing you the finest
                selection of footwear from top brands. Our mission is to provide
                a seamless shopping experience, combining quality, variety, and
                exceptional customer service. Whether you're looking for
                everyday essentials or statement pieces, Nexo Footwear is your
                trusted destination for all things shoes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-xl font-medium text-gray-900">
              Numbers tell the hard works and qualities we offer.
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-violet-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">2+</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Years in business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-violet-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">17+</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Friendly staffs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-violet-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">3,274</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Orders delivered
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-violet-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-gray-900">98%</h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                      Customer success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                <CashOnDelivery />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Cash on Delivery
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Enjoy the flexibility and convenience of paying only when your
                order arrives at your doorstep. Shop worry-free with our
                reliable cash-on-delivery option, designed to enhance your
                shopping experience.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
                <svg
                  className="text-orange-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Fast & Easy to Delivery
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                We prioritize speed and efficiency to ensure your orders reach
                you without delay. Experience seamless delivery services that
                are as quick and effortless as your shopping journey with us.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
                <Crown />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Top Notch Quality
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Our commitment to excellence guarantees premium quality in every
                product. Meticulously crafted and carefully curated, our
                collection reflects the highest standards of durability and
                style.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
                <Dollar />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Reasonable Price
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Discover exceptional value with our competitively priced
                offerings. We bring you the best deals without compromising on
                quality, making premium footwear accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
