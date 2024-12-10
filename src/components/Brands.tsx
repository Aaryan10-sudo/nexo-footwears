import Adidas from "@/ui/Adidas";
import Jordan from "@/ui/Jordan";
import NewBalance from "@/ui/NewBalance";
import Nike from "@/ui/Nike";
import Puma from "@/ui/Puma";
import Reebok from "@/ui/Reebok";
import Marquee from "react-fast-marquee";

export default function Brands() {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
        <h2 className="text-3xl font-bold">Get your fav brands...</h2>
        <div className="flex flex-wrap justify-center lg:justify-between gap-20 md:gap-0 md:mx-[20px]">
          <Marquee
            speed={100}
            style={{ display: "flex", alignItems: "center" }}
            pauseOnHover
          >
            <div className="flex items-center md:mx-20 mx-10 animate-pulse">
              <Nike />
            </div>
            <div className="flex items-center md:mx-20 mx-10 animate-pulse">
              <Adidas />
            </div>
            <div className="flex items-center md:mx-20 mx-10 animate-pulse">
              <Puma />
            </div>
            <div className="flex items-center md:mx-20 mx-10 animate-pulse">
              <Reebok />
            </div>
            <div className="flex items-center md:mx-20 mx-10 animate-pulse">
              <Jordan />
            </div>
            <div className="flex items-center md:mx-20 mx-10 animate-pulse">
              <NewBalance />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
