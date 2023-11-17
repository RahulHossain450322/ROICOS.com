import {} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img_1 from "./Images/falomir-logo-blanco-qad0khtqbbj98esf5zxgecpeg2950xqwtw24uu2aqm.webp";
import img_2 from "./Images/Logos-01-q5vj7pdh63wrkwtazq3n44qai2mpxoilq5h5carzzw.webp";
import img_3 from "./Images/Logos-02-1-q5vj6qlg58l5nc7tmt2g1vi8ite50voj9dc6l27ke4.webp";
import img_4 from "./Images/Logos-03-1-q5vj5gjcucu3ug2q3r5q5p4nexp5jplor1de2i3uv0.webp";
import img_5 from "./Images/Logos-06-q5vj1lf8qvjo45oso30xwo8fhwqtwi9evwtj1ju4fw.webp";
import img_6 from "./Images/Logos-07-1-q5vj0krjcc5hjd61m56hpfhgbvrikb7vqvdlbrch6k.webp";
import img_7 from "./Images/Logos-11-1-q5vixxtu62jiyqzy0i567lfwbyrfyvqzpthjut98n0.webp";
import img_8 from "./Images/Logos-12-q5vivbtz6myupqsh9diha95sxfmql5du0w8zv54lx8.webp";
import img_9 from "./Images/Logos-13-2-q5viudzscloj3s5mqyvwshp7jk9iw1nhw8ril6is58.webp";
import img_10 from "./Images/Logos-14-q5vit3xp1pxhaw0j7wz6wbbmfokjevkndwsq2mf2m4.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
function Hero_Swiper() {
  return (
    <Swiper
      className="swiper_slider_1 sample-slider lg:hidden block"
      navigation={true}
      modules={[Navigation, Autoplay]}
      slidesPerView={2}
      spaceBetween={50}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img src={img_1} className="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_2} className="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_3} className="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_4} className="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_5} className="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_6} className="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_7} className="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_8} className="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_9} className="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_10} className="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero_Swiper;
