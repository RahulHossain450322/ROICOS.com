import {} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Client_com_style from "./Helper/Client_com_style";
import img_1 from "./Helper/images/96585261.webp";
import img_2 from "./Helper/images/images (2).jpeg";
import img_3 from "./Helper/images/images (3).jpeg";
import img_4 from "./Helper/images/images (4).jpeg";
import img_5 from "./Helper/images/Indian-cricketer-Mahendra-Singh-Dhoni-2011.webp";
function Client_swiper() {
  return (
    <Swiper
      className="swiper_slider_1 sample-slider"
      navigation={true}
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      spaceBetween={100}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <Client_com_style
          img={img_1}
          name={"Arijit Sing"}
          profession={"A Popular Hindi Singer"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Client_com_style
          img={img_2}
          name={"Bijoy Thalapathy"}
          profession={"The south Indian famous actor"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Client_com_style
          img={img_3}
          name={"Pravas"}
          profession={"The south Indian famous actor"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Client_com_style
          img={img_4}
          name={"Neha Kakkar"}
          profession={"Singer"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Client_com_style
          img={img_5}
          name={"M.S. DHONI"}
          profession={"Most Famous Cricketer"}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Client_swiper;
