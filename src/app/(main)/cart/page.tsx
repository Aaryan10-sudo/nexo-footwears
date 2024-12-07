import Ruppess from "@/ui/Ruppees";

export type Product = {
  readonly id: number;
  brand: string;
  productName: string;
  price: number;
  image: string;
  ndImage: string;
  category: string;
};

const products: Product[] = [
  {
    id: 1,
    brand: "Nike",
    productName: "Nike Airforce 1",
    price: 5000,
    image: "/airforce.webp",
    ndImage: "/airforceback.webp",
    category: "Casual",
  },
  {
    id: 2,
    brand: "Adidas",
    productName: "Adidas Forum Low",
    price: 4000,
    image: "/forum.webp",
    ndImage: "/adidasback.webp",

    category: "Casual",
  },
  {
    id: 3,
    brand: "Reebok",
    productName: "Reebok Classic",
    price: 3500,
    image: "/reebok.webp",
    ndImage: "/reebokback.webp",
    category: "Sports",
  },
  {
    id: 4,
    brand: "Reebok",
    productName: "Reebok Classic",
    price: 3500,
    image: "/reebok.webp",
    ndImage: "/reebokback.webp",
    category: "Sports",
  },
];

let totalSum = 0;

for (let i = 0; i < products.length; i++) {
  let discountedPrice = (products[i].price * 30) / 100;
  totalSum += products[i].price - discountedPrice;
}

export default function Page() {
  return (
    <div className="w-full">
      <div
        className={`z-10  w-full p-6 space-y-4 sm:p-10  text-gray-800 
        `}
      >
        <h2 className="text-xl font-semibold">Your cart</h2>
        <ul className="flex flex-col divide-y divide-gray-300">
          {products.map((Product) => (
            <li
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
              key={Product.id}
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                  src={Product.image}
                  alt="Polaroid camera"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {Product.productName}
                      </h3>
                      <p className="text-sm text-gray-600">{Product.brand}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold flex items-center">
                        {" "}
                        <Ruppess />.{" "}
                        {Product.price - (Product.price * 30) / 100}
                      </p>
                      <span className="text-sm  text-gray-400 flex items-center gap-2">
                        <p className="text-black">-30% </p>
                        <p className="line-through">{Product.price}</p>
                      </span>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1 hover:text-red-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current "
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span className="">Remove</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                      </svg>
                      <span>Add to favorites</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount : <span className="font-semibold">{totalSum}</span>
          </p>
          <p className="text-sm text-gray-600">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-md border-violet-600"
          >
            Back
            <span className="sr-only sm:not-sr-only"> to shop</span>
          </button>
          <button
            type="button"
            className="px-6 py-2 border rounded-md bg-violet-600 text-gray-50 border-violet-600"
          >
            <span className="sr-only sm:not-sr-only">Continue to </span>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
