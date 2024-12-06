export default function Banner() {
  return (
    <div className="p-6 py-12 bg-violet-600 text-gray-50 max-w-[1025px]  w-full mx-auto ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center sm:text-6xl text-4xl font-bold sm:tracking-tight">
            Up to
            <br className="hidden" /> 30% Off
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0 tracking-wider">
            <span>Plus free shipping! Use code:</span>
            <span className="font-bold text-lg">NEXO</span>
          </div>
          <a
            href="#"
            rel="noreferrer noopener"
            className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-900 text-gray-50 border-gray-600"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
