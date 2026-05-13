import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectCarousel({ images }) {

  return (
    <div className="relative group">

      {/* LEFT BUTTON */}
      <button className="
        project-prev
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        z-20
        liquid-glass
        rounded-full
        p-3
        opacity-0
        group-hover:opacity-100
        transition
      ">
        <ChevronLeft size={20} />
      </button>

      {/* RIGHT BUTTON */}
      <button className="
        project-next
        absolute
        right-4
        top-1/2
        -translate-y-1/2
        z-20
        liquid-glass
        rounded-full
        p-3
        opacity-0
        group-hover:opacity-100
        transition
      ">
        <ChevronRight size={20} />
      </button>

      {/* SWIPER */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={images.length > 1}
      >

        {images.map((image, index) => (

          <SwiperSlide key={index}>

            <img
              src={image}
              alt="project"
              className="
                w-full
                h-full
                object-cover
              "
            />

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  );
}