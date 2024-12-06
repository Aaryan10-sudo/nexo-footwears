export default function Hero() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
        <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
          <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
            <h1 className="text-4xl text-gray-700 font-bold md:text-5xl">
              Buy now and benefit up to{" "}
              <span className="text-violet-600">30% off</span>
            </h1>
            <p className="text-lg">
              Be part of Nexo footwear and enjoy heavy discounts and free
              shipping....
            </p>
            <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
              <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max"
              >
                <span className="block text-white font-semibold">
                  Start buying
                </span>
              </button>
              <button
                type="button"
                title="more about"
                className="w-full order-first py-3 px-6 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max"
              >
                <span className="block text-gray-600 font-semibold">
                  More about
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 ">
            <div className="col-span-2 row-span-4">
              <img
                src="shoe3.webp"
                className="rounded-full h-[130px] w-[130px]"
                width="960"
                height="960"
                alt="shoes"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 row-span-2">
              <img
                src="shoe2.webp"
                className="w-full h-full object-cover object-top rounded-xl"
                width="640"
                height="640"
                alt="shoe"
                loading="lazy"
              />
            </div>
            <div className="col-span-3 row-span-3">
              <img
                src="shoe1.webp"
                className="w-full h-full object-cover object-top rounded-xl"
                width="640"
                height="427"
                alt="shoes"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
