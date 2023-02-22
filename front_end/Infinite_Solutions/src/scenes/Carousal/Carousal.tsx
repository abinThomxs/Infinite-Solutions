import { url } from "inspector";
import { Select, Option } from "@material-tailwind/react";
import Slider from "react-slick";

const CarouselBackground = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    fade: true,
  };

  return (
    <div className="relative -z-50 h-screen">
      <Slider {...settings}>
        <div className="h-screen bg-[url('/assets/driving.png')] bg-cover bg-center " />
        <div className="h-screen bg-[url('/assets/cooking.png')] bg-cover bg-center " />
        <div className="h-screen bg-[url('/assets/electrical.jpg')] bg-cover bg-center " />
        <div className="h-screen bg-[url('/assets/gardening.png')] bg-cover bg-center " />
        <div className="h-screen bg-[url('/assets/pet_care.png')] bg-cover bg-center " />
        <div className="h-screen bg-[url('/assets/plumber.jpg')] bg-cover bg-center " />
      </Slider>
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-80" />

      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center gap-16">
        
        <div className="flex rounded border border-none gap-3">
          <input
            type="text"
            className="block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40"
            placeholder="Search for a service"
          />
          <button className="rounded border-l bg-blue-100 px-4 text-white ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselBackground;
