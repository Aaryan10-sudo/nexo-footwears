export type Testimonials = {
  id: number;
  name: string;
  description: string;
};

const Testimonial: Testimonials[] = [
  {
    id: 1,
    name: "Prabin Shrestha",
    description: `Absolutely love my new sneakers! The comfort and style are
              unmatched. Shipping was fast, and the packaging was top-notch.
              I’ll definitely be ordering again!`,
  },
  {
    id: 2,
    name: "Suman Sunuwar",
    description: `Fantastic service and a great selection of shoes. I found exactly
              what I was looking for, and the fit is perfect. Highly recommend
              this store to anyone looking for quality footwear!`,
  },
];
export default function Testimonials() {
  return (
    <section className="my-8 max-w-[1025px] mx-auto text-black">
      <div className="max-w-[1025px] mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12 justify-between">
        <h1 className="text-4xl font-semibold leading-none text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        {Testimonial.map((Testimonials) => (
          <div
            className="flex flex-col items-center sm:mx-12 mx-5 lg:mx-0 gap-2"
            key={Testimonials.id}
          >
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute top-0 left-0 w-8 h-8 text-gray-300"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              <p className="px-6 py-1 text-lg italic">
                {Testimonials.description}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute bottom-0 right-0 w-8 h-8 text-gray-300"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
            <p>{Testimonials.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
