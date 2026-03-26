import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const materials = [
    { name: "Cements", image: "/images/cementzz.png" },
    { name: "TMT Steel", image: "/images/tmt1.jpg" },
    { name: "Roofing Sheets", image: "/images/sheet.webp" },
    { name: "Steel Rings", image: "/images/ring.webp" },
    { name: "Pipes", image: "/images/pipe.webp" },
    { name: "Tile Adhesives", image: "/images/adhesives.webp" },
    { name: "Waterproofing", image: "/images/watrproof.webp" },
    { name: "Construction Hardware", image: "/images/hardwares.webp" }
  ];

  // Split text for 3D animation
  const companyName = "SHAN ASSOCIATES";
  const tagline = "Mangalam Building Materials Supplier";

  const styles = {
    hero: {
      position: "relative",
      minHeight: "80vh",
      backgroundImage: "url('/images/construction-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      overflow: "hidden",
    },
    heroOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(135deg, rgba(15,32,39,0.85), rgba(32,58,67,0.85), rgba(44,83,100,0.85))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "white",
      padding: "clamp(60px, 10vw, 100px) 20px",
    },
    tagline: {
      fontSize: "clamp(18px, 4vw, 24px)",
      marginBottom: "20px",
      fontWeight: "500",
      color: "#ffd966",
      letterSpacing: "1px",
    },
    description: {
      maxWidth: "700px",
      margin: "0 auto 30px",
      lineHeight: "1.6",
      fontSize: "clamp(14px, 2.5vw, 16px)",
      color: "#e2e8f0",
    },
    buttonGroup: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    btnPrimary: {
      padding: "12px 32px",
      background: "linear-gradient(135deg, #0a7f2e, #086424)",
      color: "white",
      border: "none",
      borderRadius: "50px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "clamp(14px, 2.5vw, 16px)",
      transition: "all 0.3s ease",
      boxShadow: "0 8px 20px rgba(10,127,46,0.3)",
    },
    btnSecondary: {
      padding: "12px 32px",
      background: "transparent",
      border: "2px solid white",
      color: "white",
      borderRadius: "50px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "clamp(14px, 2.5vw, 16px)",
      fontWeight: "600",
    },
    aboutSection: {
      padding: "clamp(60px, 10vw, 80px) 20px",
      background: "white",
    },
    aboutContent: {
      maxWidth: "1000px",
      margin: "0 auto",
      textAlign: "center",
    },
    aboutTitle: {
      fontSize: "clamp(28px, 5vw, 38px)",
      color: "#1e293b",
      marginBottom: "15px",
      fontWeight: "700",
      textAlign: "center",
    },
    aboutText: {
      color: "#475569",
      lineHeight: "1.7",
      marginBottom: "20px",
      fontSize: "clamp(14px, 2.5vw, 16px)",
    },
    vmSection: {
      padding: "clamp(60px, 10vw, 80px) 20px",
      background: "#f8fafc",
    },
    vmGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    vmCard: {
      background: "white",
      padding: "clamp(30px, 5vw, 40px)",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      textAlign: "center",
      transition: "all 0.3s ease",
    },
    vmIcon: {
      fontSize: "48px",
      marginBottom: "15px",
    },
    vmTitle: {
      fontSize: "clamp(22px, 4vw, 26px)",
      color: "#0a7f2e",
      marginBottom: "15px",
    },
    vmText: {
      color: "#475569",
      lineHeight: "1.6",
      fontSize: "clamp(13px, 2.2vw, 14px)",
      marginBottom: "15px",
    },
    materialsSection: {
      padding: "clamp(60px, 10vw, 80px) 20px",
      background: "white",
    },
    materialsTitle: {
      fontSize: "clamp(28px, 5vw, 38px)",
      color: "#1e293b",
      textAlign: "center",
      marginBottom: "15px",
    },
    materialsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "25px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    materialCard: {
      background: "white",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    materialImageContainer: {
      height: "160px",
      overflow: "hidden",
      backgroundColor: "#f8fafc",
    },
    materialImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      transition: "transform 0.5s ease",
    },
    materialInfo: {
      padding: "15px",
      textAlign: "center",
    },
    materialName: {
      fontSize: "clamp(14px, 2.5vw, 16px)",
      color: "#0a7f2e",
      fontWeight: "600",
    },
  };

  return (
    <div className="home-container">
      {/* HERO SECTION with Background Image */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay}>
          <div>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0",
              marginBottom: "20px",
            }}>
              {companyName.split("").map((char, index) => (
                <span 
                  key={index} 
                  style={{
                    display: "inline-block",
                    fontSize: "clamp(2rem, 8vw, 4.5rem)",
                    fontWeight: "800",
                    color: "white",
                    textShadow: "0 8px 25px rgba(0,0,0,0.5), 0 2px 5px rgba(0,0,0,0.3)",
                    animation: "letterFloat3D 0.8s ease-out forwards",
                    transformOrigin: "center",
                    opacity: 0,
                    willChange: "transform, opacity",
                    letterSpacing: "2px",
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>

            <h3 style={{
              ...styles.tagline,
              animation: "fadeInUp 0.8s ease-out 0.5s forwards",
              opacity: 0,
              transform: "translateY(30px)",
            }}>
              {tagline}
            </h3>

            <p style={styles.description}>
              Trusted supplier of quality construction materials including
              cement, TMT steel, roofing sheets, pipes, tile adhesives,
              waterproofing materials and construction hardware.
            </p>

            <div style={styles.buttonGroup}>
              <button
                onClick={() => navigate("/products")}
                style={styles.btnPrimary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(10,127,46,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(10,127,46,0.3)";
                }}
              >
                View Materials →
              </button>

              <button
                onClick={() => navigate("/contact")}
                style={styles.btnSecondary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.color = "#0a7f2e";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Contact Us →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT COMPANY */}
      <div style={styles.aboutSection}>
        <div style={styles.aboutContent}>
          <h2 style={styles.aboutTitle}>About Us</h2>
          <div style={{
            width: "80px",
            height: "3px",
            background: "linear-gradient(90deg, #0a7f2e, #ffd966)",
            margin: "0 auto 30px",
            borderRadius: "3px",
          }}></div>
          <p style={styles.aboutText}>
            J B Group of Companies, established in 2007, is a trusted supplier
            of high-quality construction and building materials based in
            Coimbatore, Tamil Nadu. With years of experience in the construction
            industry, we have built a strong reputation for providing reliable
            products, competitive pricing, and excellent customer service across
            South India, including Kerala and Karnataka.
          </p>
          <p style={styles.aboutText}>
            We specialize in supplying premium TMT bars, cement, and other
            essential construction materials that meet modern building standards.
            Our company proudly partners with leading and trusted brands in
            TMT bars, cements, pipes, sheets, and other building materials,
            ensuring our customers receive only the best quality products
            for their construction projects.
          </p>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div style={styles.vmSection}>
        <div style={styles.vmGrid}>
          <div style={styles.vmCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 20px 35px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
            }}
          >
            <div style={styles.vmIcon}>👁️</div>
            <h3 style={styles.vmTitle}>Our Vision</h3>
            <p style={styles.vmText}>
              Our company proudly partners with leading and trusted brands in
              TMT bars, cement, pipes, roofing sheets, and other building materials,
              ensuring our customers receive only the highest quality materials
              for their construction projects.
            </p>
            <p style={styles.vmText}>
              We believe that strong structures begin with strong materials.
              Our focus is not only on quality but also on innovation,
              sustainability, and environmental responsibility.
            </p>
          </div>

          <div style={styles.vmCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 20px 35px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
            }}
          >
            <div style={styles.vmIcon}>🎯</div>
            <h3 style={styles.vmTitle}>Our Mission</h3>
            <p style={styles.vmText}>
              Our mission is to deliver high-quality building materials tailored
              to customer needs while maintaining long-term relationships with
              builders, contractors, and construction professionals.
            </p>
            <p style={styles.vmText}>
              With a commitment to excellence and sustainability, we aim to
              contribute to building a stronger and better future for
              generations to come.
            </p>
          </div>
        </div>
      </div>

      {/* MATERIALS SECTION */}
      <div style={styles.materialsSection}>
        <h2 style={styles.materialsTitle}>Our Premium Materials</h2>
        <div style={{
          width: "80px",
          height: "3px",
          background: "linear-gradient(90deg, #0a7f2e, #ffd966)",
          margin: "0 auto 30px",
          borderRadius: "3px",
        }}></div>

        <div style={styles.materialsGrid}>
          {materials.map((item, index) => (
            <div
              key={index}
              style={styles.materialCard}
              onClick={() => navigate("/products")}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 35px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
              }}
            >
              <div style={styles.materialImageContainer}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.materialImage}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.08)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                />
              </div>
              <div style={styles.materialInfo}>
                <h3 style={styles.materialName}>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes letterFloat3D {
          0% {
            opacity: 0;
            transform: translateY(50px) rotateX(-30deg) scale(0.8);
          }
          40% {
            opacity: 0.8;
            transform: translateY(-8px) rotateX(10deg) scale(1.05);
          }
          70% {
            transform: translateY(4px) rotateX(-3deg) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
          }
        }
        
        @media (max-width: 768px) {
          .home-container .hero-section {
            background-attachment: scroll;
          }
        }
        
        @media (max-width: 480px) {
          .home-container .hero-title {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;