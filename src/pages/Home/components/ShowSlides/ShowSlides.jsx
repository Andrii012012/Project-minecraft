import React from "react";
import "./showSlidesStyle.css";
import "./showSlidesMedia.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import image1 from "../../../../assets/images/page/Home/home-image-slider1.jpg";
import image2 from "../../../../assets/images/page/Home/home-image-slider2.jpg";

export default function ShowSlides(props) {
  let {} = props;
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPreView={1}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      Parallax={true}
      EffectFade={true}
      speed={1000}
      loop={true}
    >
      <SwiperSlide>
        <img src={image1} alt="image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="image" />
      </SwiperSlide>
    </Swiper>
  );
}
