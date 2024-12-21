import AnimatedCart from "@/components/AnimatedCart";

export default function Page() {
  return (
    <div className="h-screen">
      <div className="flex justify-between relative w-full h-52 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 overflow-hidden">
        <div className="w-[60%] relative flex flex-col items-start justify-center h-full sm:px-6 px-2 space-y-2 md:w-auto">
          <h1 className="text-white md:text-3xl font-bold text-3xl">
            Step Into Style
          </h1>
          <p className="text-white md:text-lg">
            Exclusive deals on the latest footwear!
          </p>
          <button className="px-2 py-1 sm:px-4 sm:py-3 bg-white text-purple-600 font-medium rounded-lg shadow hover:bg-violet-300 hover:text-white">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col w-[40%] md:w-auto">
          <AnimatedCart />
        </div>
      </div>
    </div>
  );
}
