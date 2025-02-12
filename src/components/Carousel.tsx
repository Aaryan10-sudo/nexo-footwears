import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

function Carousel() {
  const slides = [
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.b6pOoVMn74i7h1KKddr4YwHaFj&pid=Api&P=0&h=220",
      name: "Nike Air Force 1",
    },
    {
      image:
        "https://sneakerbardetroit.com/wp-content/uploads/2017/07/Nike-SB-Zoom-Dunk-Low-Pro-Binary-Blue-Hydrogen-Blue.jpg",
      name: "Nike SB Dunk Low",
    },
    {
      image:
        "https://www.consortium.co.uk/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/a/d/adidas-originals-forum-84-low-aluminum-branch-brown-gw4334_0005_5.jpg",
      name: "Adidas Forum 84 Low",
    },
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.0MCMHTnp3G8azZZNisGSeQAAAA&pid=Api&P=0&h=220",
      name: "Puma RS-X",
    },
    {
      image:
        "https://tse3.mm.bing.net/th?id=OIP.0BHfO1YvKZPns7lOjJUS_QHaE9&pid=Api&P=0&h=220",
      name: "Vans Old Skool",
    },
    {
      image:
        "https://sneakernews.com/wp-content/uploads/2021/08/new-balance-550-bb550le1-team-green-2.jpg?w=1140",
      name: "New Balance 550",
    },
    {
      image:
        "https://tse3.mm.bing.net/th?id=OIP.G4BHa_WI5AqeiPh-T_NJNAHaFP&pid=Api&P=0&h=220",
      name: "Adidas Campus",
    },
  ];

  return (
    <>
      <h1 className="w-full flex justify-center items-center font-extrabold py-5 text-2xl ">
        GET YOUR FAV ONE'S TODAY !!!
      </h1>
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        speed={1000}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        centeredSlides
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center w-[150px]"
          >
            <img
              src={slide.image}
              className="h-[200px] w-full rounded-xl"
              alt={slide.name}
            />
            <span>
              <h1 className="text-2xl font-bold text-center">{slide.name}</h1>
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;
