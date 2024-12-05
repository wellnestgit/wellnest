"use client";

import React from "react";

const HomePage: React.FC = () => {
  return (
    <main style={mainStyles}>
      <div style={heroStyles}>
        <h1 style={titleStyles}>Hello, my name is Chloe McMurtry.</h1>
        <p style={paragraphStyles}>
          I'm a passionate designer and developer dedicated to bringing clients'
          ideas and visions to life.
        </p>
        <p style={paragraphStyles}>
          My expertise includes UI/UX design, front-end development, and web
          accessibility. I thrive on turning ideas into user-friendly digital
          products that make an impact.
        </p>
      </div>
      <div style={ctaContainerStyles}>
        <a
          href="/resume.pdf"
          style={ctaLinkStyles}
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download my resume"
        >
          Download My Resume
        </a>
      </div>
    </main>
  );
};

// Event Handlers for CTA Hover Effect
const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.transform = "translateY(-3px)";
  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
};

const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.transform = "none";
  e.currentTarget.style.boxShadow = "none";
};

// Inline Styles
const mainStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  minHeight: "100vh",
  color: "#4A4A4A",
  padding: "40px 20px",
  textAlign: "center",
};

const heroStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const titleStyles: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: "bold",
  marginBottom: "20px",
  background: "linear-gradient(135deg, #004d4d, #8BAAAD)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", // Subtle shadow effect
};

const paragraphStyles: React.CSSProperties = {
  fontSize: "1.2rem",
  lineHeight: "1.8",
  marginBottom: "20px",
  color: "#4D4847",
  maxWidth: "800px", // Improved readability by limiting width
};

const ctaContainerStyles: React.CSSProperties = {
  marginTop: "25px",
};

const ctaLinkStyles: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#ffffff",
  backgroundColor: "#004F4E",
  textDecoration: "none",
  border: "none",
  padding: "15px 30px",
  borderRadius: "5px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
  display: "inline-block",
  cursor: "pointer",
};

export default HomePage;

