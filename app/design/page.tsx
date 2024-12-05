"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const slides = [
  { id: 1, image: "/peptide.jpeg", description: "Peptide Design" },
  { id: 2, image: "/grapes.jpg", description: "Grapes Illustration" },
  { id: 3, image: "/bookcoverfinal.jpg", description: "Book Cover Design" },
];

const DesignsPage: React.FC = () => {
  return (
    <main style={mainStyles}>
      <h1 style={titleStyles}>My Design Work</h1>
      <p style={descriptionStyles}>
        Explore a selection of my design projects, showcasing creativity and attention to detail.
      </p>
      <div style={swiperContainerStyles}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          style={swiperStyles}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div style={slideContainerStyles}>
                <img
                  src={slide.image}
                  alt={slide.description}
                  style={slideImageStyles}
                />
                <p style={slideDescriptionStyles}>{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

// Inline Styles
const mainStyles: React.CSSProperties = {
  padding: "40px 20px",
  textAlign: "center",
  fontFamily: "'Inter', sans-serif",
  color: "#4A4A4A",
};

const titleStyles: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: "bold",
  marginBottom: "20px",
  background: "linear-gradient(135deg, #004d4d, #8BAAAD)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const descriptionStyles: React.CSSProperties = {
  fontSize: "1.2rem",
  marginBottom: "40px",
  color: "#4D4847",
};

const swiperContainerStyles: React.CSSProperties = {
  marginTop: "40px",
  width: "100%",
  maxWidth: "800px", // Restrict the maximum width for responsiveness
  margin: "0 auto", // Center the Swiper
};

const swiperStyles: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
};

const slideContainerStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const slideImageStyles: React.CSSProperties = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

const slideDescriptionStyles: React.CSSProperties = {
  marginTop: "10px",
  fontSize: "1rem",
  color: "#4D4847",
};

export default DesignsPage;

