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
          <ContactItem
            icon="/phone.png"
            alt="Phone"
            content="+123-456-7890"
          />
          <ContactItem
            icon="/email.png"
            alt="Email"
            content="cbxmcmurtry@gmail.com"
          />
          <ContactItem
            icon="/linkedin.png"
            alt="LinkedIn"
            link="https://www.linkedin.com/in/chloe-m542"
            linkText="LinkedIn Profile"
          />
          <ContactItem
            icon="/github.png"
            alt="GitHub"
            link="https://github.com/yourprofile"
            linkText="GitHub Profile"
          />
        </div>
      </div>
    </main>
  );
};

// Reusable ContactItem Component
const ContactItem: React.FC<{
  icon: string;
  alt: string;
  content?: string;
  link?: string;
  linkText?: string;
}> = ({ icon, alt, content, link, linkText }) => (
  <div style={contactItemStyles}>
    <img src={icon} alt={alt} style={iconStyles} />
    {link ? (
      <a
        href={link}
        style={contactLinkStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkText}
      </a>
    ) : (
      <span style={contactTextStyles}>{content}</span>
    )}
  </div>
);

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
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "16px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
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

export default ContactPage;

