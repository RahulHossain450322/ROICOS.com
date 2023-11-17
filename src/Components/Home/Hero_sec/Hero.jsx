import {} from "react";
import addImg from "./Images/roicos-advanced-partner-amazon-q9l71bukeilw5a0f0qkgn58vnw5jr1d0d7v449ta3g.webp";
import Hero_Swiper from "./Hero_Swiper/Hero_Swiper";
import Mobile_swiper from "./Hero_Swiper/Mobile_h_Swiper";
import "animate.css";
function Hero() {
  return (
    <section className="bg_yellow hero for_blur">
      <div className="con_tainer">
        <div className="">
          <div className="">
            <img className="mx-auto" src={addImg} alt="" />
          </div>
          <div className="mt-2 space-y-4 text-center text-white">
            <h1 className="hero_title animate__animated animate__fadeInLeft ">
              AGENCIA DE MARKETING EN AMAZON
            </h1>
            <p className="animate__animated animate__fadeInRight ">
              ¿Quieres Vender más en Amazon y Aumentar el rendimiento de tus
              Campañas?
            </p>
            <button className="border border-white px-4 py-2 rounded-full hover:border-transparent hover:bg-white hover:text-yellow-600 transition-all duration-200 ease-linear animate__animated animate__fadeInLeft ">
              ¡Quiero AUMENTAR mis ventas!
            </button>
          </div>
          <Hero_Swiper />
          <Mobile_swiper />
        </div>
      </div>
    </section>
  );
}

export default Hero;
