"use client";

import React from "react";

const AboutPage: React.FC = () => {
  return (
    <main style={mainStyles}>
      <h1 style={titleStyles}>About Me</h1>
      <div style={contentStyles}>
        <p style={textStyles}>
          I’m Chloe McMurtry, a creative professional with a passion for merging design
          and development to create accessible, intuitive, and visually stunning digital
          experiences.
        </p>
        <p style={textStyles}>
          With a strong focus on user-centered design and seamless functionality, 
          I specialize in turning concepts into refined, user-friendly products. 
          From crafting elegant interfaces to implementing scalable, maintainable 
          code, I aim to bridge the gap between design and technology to deliver 
          impactful results.
        </p>

        <section>
          <h2 style={sectionTitleStyles}>Expertise</h2>
          <ul style={listStyles}>
            <li>
              <strong>Design Excellence:</strong> Proficient in Adobe Photoshop, Illustrator, 
              InDesign, iMovie, and Lightbox, I bring creative visions to life with precision 
              and attention to detail.
            </li>
            <li>
              <strong>Development Expertise:</strong> Skilled in Java, JavaScript, Python, 
              Spring, Maven, React, and Next.js, I build robust and efficient solutions 
              tailored to users' needs.
            </li>
            <li>
              <strong>Deployment Mastery:</strong> With experience in GitHub, Vercel, and Netlify, 
              I ensure projects are deployed and maintained with reliability and efficiency.
            </li>
          </ul>
        </section>

        <section>
          <h2 style={sectionTitleStyles}>Inspiration</h2>
          <p style={textStyles}>
            I’m driven by the ever-evolving relationship between technology and design. 
            Staying ahead of emerging trends, contributing to open-source projects, 
            and taking on new challenges allow me to continually refine my craft.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyles}>Tools & Technologies</h2>
          <ul style={listStyles}>
            <li><strong>Design:</strong> Adobe Photoshop, Illustrator, InDesign, iMovie, Lightbox</li>
            <li><strong>Development:</strong> Java, JavaScript, Python, Spring, Maven, React, Next.js, Tailwind CSS</li>
            <li><strong>Deployment:</strong> GitHub, Vercel, Netlify</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

// Inline styles
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
  textAlign: "left",
  lineHeight: "1.8",
  maxWidth: "800px",
  margin: "0 auto",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "16px",
  padding: "20px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

const textStyles: React.CSSProperties = {
  fontSize: "1.2rem",
  marginBottom: "20px",
  color: "#4D4847",
};

const sectionTitleStyles: React.CSSProperties = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  marginBottom: "15px",
  color: "#004d4d",
};

const listStyles: React.CSSProperties = {
  paddingLeft: "20px",
  listStyleType: "disc",
  marginBottom: "20px",
};

export default AboutPage;

