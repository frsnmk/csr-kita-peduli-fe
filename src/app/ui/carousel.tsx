"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination} from "swiper/modules";
import Image from "next/image";

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{clickable: true}}
      loop={true}
      modules={[Navigation, Pagination]}
      height={300}
    >
      <SwiperSlide>
        <Image
          src="/Frame 4.png"
          alt="Slide 1"
          width={800}
          height={400}
          className="object-cover w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Frame 5.png"
          alt="Slide 2"
          width={800}
          height={400}
          className="object-cover w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Frame 6.png"
          alt="Slide 3"
          width={800}
          height={400}
          className="object-cover w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
