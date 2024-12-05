// app/projects/page.tsx
export default function Projects() {
  return (
    <div style={containerStyles}>
      <h1 style={titleStyles}>Coding Projects</h1>
      <section style={sectionStyles}>
        <div style={gridStyles}>
          <ProjectCard
            title="Package Delivery System"
            description="A Python-based GUI for address validation and package tracking."
            image="/order.png"
            link="https://cbxmcmurtry.github.io/package_delivery_project"
          />
          <ProjectCard
            title="Data Analysis"
            description="A minimal and responsive portfolio built with Next.js and Tailwind CSS."
            image="/data.png"
            link="https://github.com"
          />
          <ProjectCard
            title="AI Career Chat Bot"
            description="A machine learning chatbot for personalized career recommendations."
            image="/bot.png"
            link="https://github.com"
          />
        </div>
      </section>
    </div>
  );
}

// Reusable Component: ProjectCard
function ProjectCard({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <div style={projectCardStyles}>
      <img src={image} alt={title} style={imageStyles} />
      <h3 style={projectCardTitleStyles}>{title}</h3>
      <p style={projectCardDescriptionStyles}>{description}</p>
      <a
        href={link}
        style={projectCardLinkStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
}

// Inline Styles
const containerStyles: React.CSSProperties = {
  padding: "40px 20px",
  color: "#4A4A4A",
  maxWidth: "1200px",
  margin: "0 auto",
};

const titleStyles: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "40px",
  background: "linear-gradient(135deg, #004d4d, #8BAAAD)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const sectionStyles: React.CSSProperties = {
  marginBottom: "60px",
};

const sectionTitleStyles: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "20px",
};

const gridStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
};

const projectCardStyles: React.CSSProperties = {
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  padding: "20px",
  backgroundColor: "#ffffff",
  textAlign: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const imageStyles: React.CSSProperties = {
  maxWidth: "80%", // Adjusted to make the image smaller
  height: "auto",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "15px",
};

const projectCardTitleStyles: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#004d4d",
  marginBottom: "10px",
};

const projectCardDescriptionStyles: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: "1.5",
  marginBottom: "20px",
  color: "#4A4A4A",
};

const projectCardLinkStyles: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#8BAAAD",
  textDecoration: "none",
  padding: "10px 20px",
  border: "2px solid #8BAAAD",
  borderRadius: "5px",
  transition: "all 0.3s ease",
};

projectCardLinkStyles[":hover"] = {
  backgroundColor: "#8BAAAD",
  color: "#ffffff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

