"use client";

import React from "react";

const ContactPage: React.FC = () => {
  return (
    <main style={mainStyles}>
      <h1 style={titleStyles}>Get In Touch</h1>
      <div style={contentStyles}>
        <p style={textStyles}>
          I'd love to hear from you! Whether you have a project in mind, want to
          collaborate, or just say hello, feel free to reach out.
        </p>
        <div style={contactInfoStyles}>
          <div style={contactItemStyles}>
            {/* Replace with phone icon */}
            <img src="/phone.png" alt="Phone" style={iconStyles} />
            <span style={contactTextStyles}>+123-456-7890</span>
          </div>
          <div style={contactItemStyles}>
            {/* Replace with email icon */}
            <img src="/email.png" alt="Email" style={iconStyles} />
            <span style={contactTextStyles}>cbxmcmurtry@gmail.com</span>
          </div>
          <div style={contactItemStyles}>
            {/* Replace with LinkedIn icon */}
            <img src="/linkedin.png" alt="LinkedIn" style={iconStyles} />
            <a
              href="www.linkedin.com/in/chloe-m542"
              style={contactLinkStyles}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
          <div style={contactItemStyles}>
            {/* Replace with GitHub icon */}
            <img src="/github.png" alt="GitHub" style={iconStyles} />
            <a
              href="https://github.com/yourprofile"
              style={contactLinkStyles}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

// Inline Styles
const mainStyles: React.CSSProperties = {
  padding: "40px 20px",
  textAlign: "center",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
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

const contentStyles: React.CSSProperties = {
  textAlign: "center",
  maxWidth: "800px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional subtle background
  borderRadius: "16px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
};

const textStyles: React.CSSProperties = {
  fontSize: "1.2rem",
  marginBottom: "20px",
  color: "#4D4847",
};

const contactInfoStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginTop: "20px",
};

const contactItemStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const iconStyles: React.CSSProperties = {
  width: "32px",
  height: "32px",
  objectFit: "contain",
};

const contactTextStyles: React.CSSProperties = {
  fontSize: "1rem",
  color: "#4A4A4A",
};

const contactLinkStyles: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#8BAAAD",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

contactLinkStyles[":hover"] = {
  color: "#004d4d",
};

export default ContactPage;

