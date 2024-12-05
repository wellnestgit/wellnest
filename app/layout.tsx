import "./global.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Chloe McMurtry Portfolio",
  description:
    "Welcome to Chloe McMurtry's portfolio showcasing projects in design and development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={layoutStyles}>
        {/* Header */}
        <header style={headerStyles}>
          <nav style={navStyles}>
            <a href="/" style={logoContainerStyles}>
              <img src="/cmlogo.png" alt="CM Logo" style={logoStyles} />
            </a>
            <div style={navLinksContainerStyles}>
              <a href="/" style={linkStyles}>
                Home
              </a>
              <a href="/about" style={linkStyles}>
                About
              </a>
              <a href="/coding" style={linkStyles}>
                Coding
              </a>
              <a href="/design" style={linkStyles}>
                Design
              </a>
              <a href="/contact" style={linkStyles}>
                Contact
              </a>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main style={mainStyles}>{children}</main>

        {/* Footer */}
        <footer style={footerStyles}>
          <p>&copy; 2024 Chloe McMurtry. All Rights Reserved.</p>
          <p>
            Explore more projects on my{" "}
            <a
              href="https://cbxmcmurtry.github.io"
              target="_blank"
              rel="noopener noreferrer"
              style={footerLinkStyles}
            >
              Old Portfolio
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}

const layoutStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  margin: 0,
  padding: 0,
  background: `
    linear-gradient(
      135deg, 
      rgba(139, 170, 173, 0.8), 
      rgba(255, 255, 255, 0.8)
    ),
    url('/bg.jpg')`, // Replace with your image path
  backgroundSize: "cover", // Ensure the image covers the entire area
  backgroundPosition: "center",
  color: "#4a4a4a",
};


const headerStyles: React.CSSProperties = {
  position: "sticky",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  backgroundColor: "transparent", // Transparent background
  padding: "10px 30px", // Reduced padding to minimize height
  borderBottom: "none", // Remove bottom border
  backdropFilter: "blur(8px)", // Adds a slight blur effect
  height: "60px", // Consistent header height
};


const navStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap", // Allow wrapping on smaller screens
  gap: "10px",
};


const logoContainerStyles = {
  display: "flex",
  alignItems: "center",
};

const logoStyles = {
  height: "40px",
  width: "auto",
  marginRight: "20px",
};

const navLinksContainerStyles = {
  display: "flex",
  gap: "20px",
};

const linkStyles = {
  fontSize: "1rem",
  fontWeight: 500,
  color: "#004746",
  textDecoration: "none",
  padding: "10px 15px",
  transition: "color 0.3s ease, border-bottom 0.3s ease",
};

const mainStyles: React.CSSProperties = {
  flex: 1,
  padding: "20px",
  maxWidth: "1200px",
  margin: "0 auto",
  marginTop: "0", // Remove extra margin at the top
  textAlign: "center",
};

const footerStyles: React.CSSProperties = {
  backgroundColor: "#004d4d",
  color: "#ffffff",
  textAlign: "center", // No need to cast here
  padding: "20px 0",
  borderTop: "5px solid #8BAAAD",
};

const footerLinkStyles = {
  color: "#8BAAAD",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

