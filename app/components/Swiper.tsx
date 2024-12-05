import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const slides = [
  { id: 1, image: "/peptide.jpeg" },
  { id: 2, image: "/grapes.jpg" },
  { id: 3, image: "/bookcoverfinal.jpg" },
];

export default function ImageSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{ width: "100%", height: "auto" }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img 
            src={slide.image} 
            alt={`Slide ${slide.id}`} 
            style={{ width: "100%", height: "auto", objectFit: "cover" }} 
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

