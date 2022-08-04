import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const HomeSlider =()=> {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide>
            <img src="./image/Banner/BannerOne.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./image/Banner/BannerTwo.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./image/Banner/BannerThree.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./image/Banner/BannerFour.jpg"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default HomeSlider