import Hero from "@/components/Hero";
import "./globals.css";
import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Payments from "@/components/Payments";

export default function Home() {
  return (
    <div className="pb-[30px]">
      <Hero />
      <Banner />
      <Feature />
      <Products />
      <Testimonials />
      <Payments />
    </div>
  );
}
