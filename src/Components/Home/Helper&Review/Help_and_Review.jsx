import {} from "react";
import Hero_Swiper from "./Hero_Swiper/Hero_Swiper";
import Client_swiper from "./clients_swiper/Client_swiper";
import Mobile_swiper from "./Hero_Swiper/Mobile_h_Swiper";
function Help_and_Review() {
  return (
    <section className="bg_yellow for_blur">
      <div className="con_tainer">
        <div className="py-20">
          <div className="text-center">
            <h2 className="hero_title text-white">
              We have helped more than 400 local, national
              <br /> and international brands sell on Amazon in all <br />
              markets
            </h2>
            <button
              className="mt-6 border border-white px-3 py-2 rounded-full text-white hover:border-transparent
            hover:bg-white hover:text-yellow-600 transition-all duration-200 ease-linear"
            >
              write to us!
            </button>
          </div>
          <div className="">
            <Hero_Swiper />
            <Mobile_swiper />
            <p className="text-center text-white mt-8 font-2xl font-bold">
              Opinions of our clients
            </p>
            <Client_swiper />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Help_and_Review;
