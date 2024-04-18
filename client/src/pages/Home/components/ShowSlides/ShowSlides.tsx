import React from "react";
import styles from "./style.module.scss";
import './style.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import image1 from "../../../../assets/images/page/Home/home-image-slider1.jpg";
import image2 from "../../../../assets/images/page/Home/home-image-slider2.jpg";

type TList = {
  image: string;
};

const LIST: TList[] = [
  {
    image: image1,
  },
  {
    image: image2,
  },
];

export default function ShowSlides(): JSX.Element {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 6000 }}
      pagination={{ clickable: true }}
      parallax={true}
      speed={1000}
      loop={true}
    >
      {LIST.map((item, index) => (
        <SwiperSlide key={index}>
          <img className={styles.image} src={item.image} alt="image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
