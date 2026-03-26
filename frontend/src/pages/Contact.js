import React from "react";

function Contact() {
  const phoneNumber = "918089583618";
  const mapLocation = "https://maps.app.goo.gl/NMuvDgwVnDF8z62q6";

  const styles = {
    container: {
      padding: "clamp(40px, 6vw, 60px) 20px",
      maxWidth: "1200px",
      margin: "0 auto",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f8fafc, #ffffff)",
    },
    titleSection: {
      textAlign: "center",
      marginBottom: "clamp(40px, 6vw, 60px)",
    },
    title: {
      fontSize: "clamp(32px, 6vw, 48px)",
      fontWeight: "800",
      marginBottom: "15px",
      background: "linear-gradient(90deg, #0a7f2e, #ffd966, #fbbf24, #0a7f2e)",
      backgroundSize: "300% auto",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      animation: "shimmer 3s linear infinite",
      display: "inline-block",
    },
    divider: {
      width: "80px",
      height: "3px",
      background: "linear-gradient(90deg, #0a7f2e, #ffd966)",
      margin: "0 auto 20px",
      borderRadius: "3px",
    },
    subtitle: {
      fontSize: "clamp(14px, 3vw, 18px)",
      color: "#4a5568",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "clamp(25px, 4vw, 40px)",
      marginBottom: "clamp(40px, 6vw, 60px)",
    },
    contactCard: {
      background: "white",
      borderRadius: "24px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
      overflow: "hidden",
      transition: "transform 0.3s ease",
      animation: "fadeInLeft 0.6s ease-out",
    },
    cardContent: {
      padding: "clamp(25px, 4vw, 35px)",
    },
    iconWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "15px",
    },
    icon: {
      fontSize: "clamp(28px, 4vw, 32px)",
    },
    cardTitle: {
      fontSize: "clamp(20px, 3.5vw, 24px)",
      color: "#0a7f2e",
      margin: 0,
    },
    addressText: {
      color: "#4a5568",
      lineHeight: "1.7",
      marginBottom: "20px",
      fontSize: "clamp(14px, 2.5vw, 15px)",
    },
    dividerLine: {
      height: "1px",
      background: "#e2e8f0",
      margin: "20px 0",
    },
    phoneText: {
      marginBottom: "20px",
      fontSize: "clamp(16px, 3vw, 18px)",
    },
    phoneLink: {
      color: "#0a7f2e",
      textDecoration: "none",
      fontWeight: "600",
    },
    buttonStyle: {
      width: "100%",
      padding: "14px",
      marginBottom: "12px",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "all 0.3s ease",
      fontSize: "clamp(14px, 2.5vw, 16px)",
    },
    mapCard: {
      background: "white",
      borderRadius: "24px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
      overflow: "hidden",
      transition: "transform 0.3s ease",
      animation: "fadeInRight 0.6s ease-out",
    },
    mapContainer: {
      height: "350px",
      overflow: "hidden",
    },
    map: {
      border: "0",
      borderRadius: "0",
      width: "100%",
      height: "100%",
    },
    mapCaption: {
      padding: "15px",
      textAlign: "center",
      background: "#f8fafc",
      color: "#0a7f2e",
      fontSize: "14px",
      fontWeight: "500",
    },
    hoursSection: {
      marginTop: "20px",
    },
    hoursCard: {
      background: "linear-gradient(135deg, #0a7f2e, #086424)",
      borderRadius: "24px",
      padding: "clamp(30px, 5vw, 40px)",
      textAlign: "center",
      color: "white",
    },
    hoursIcon: {
      fontSize: "48px",
      marginBottom: "15px",
    },
    hoursTitle: {
      fontSize: "clamp(22px, 4vw, 26px)",
      marginBottom: "20px",
    },
    hoursGrid: {
      display: "flex",
      justifyContent: "center",
      gap: "clamp(30px, 5vw, 50px)",
      flexWrap: "wrap",
    },
    hoursItem: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      fontSize: "clamp(14px, 2.5vw, 16px)",
    },
  };

  return (
    <div className="contact-container" style={styles.container}>
      {/* Title */}
      <div style={styles.titleSection}>
        <h1 style={styles.title}>Contact SHAN ASSOCIATES</h1>
        <div style={styles.divider}></div>
        <p style={styles.subtitle}>Building Materials Supplier – Mangalam</p>
      </div>

      {/* Main Grid */}
      <div style={styles.grid}>
        {/* Contact Info Card */}
        <div style={styles.contactCard}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <div style={styles.cardContent}>
            <div style={styles.iconWrapper}>
              <span style={styles.icon}>📍</span>
              <h3 style={styles.cardTitle}>Address</h3>
            </div>
            <p style={styles.addressText}>
              <strong>SHAN ASSOCIATES</strong><br />
              Mangalam, Purathur Road, Pin: 676561<br />
              Tirur, Kerala<br />
              India
            </p>

            <div style={styles.dividerLine}></div>

            <div style={styles.iconWrapper}>
              <span style={styles.icon}>📞</span>
              <h3 style={styles.cardTitle}>Phone</h3>
            </div>
            <p style={styles.phoneText}>
              <a href={`tel:+${phoneNumber}`} style={styles.phoneLink}>
                +91 80895 83618
              </a>
            </p>

            <a href={`tel:+${phoneNumber}`} style={{ textDecoration: "none" }}>
              <button
                style={{
                  ...styles.buttonStyle,
                  background: "linear-gradient(135deg, #0a7f2e, #086424)",
                  color: "white",
                  boxShadow: "0 4px 15px rgba(10,127,46,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow = "0 8px 20px rgba(10,127,46,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 15px rgba(10,127,46,0.3)";
                }}
              >
                📞 Call Now
              </button>
            </a>

            <a
              href={`https://wa.me/${phoneNumber}?text=Hello SHAN ASSOCIATES, I would like to know more about your building materials and prices.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  ...styles.buttonStyle,
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow = "0 8px 20px rgba(37,211,102,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                💬 WhatsApp Enquiry
              </button>
            </a>

            <a
              href={mapLocation}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  ...styles.buttonStyle,
                  background: "linear-gradient(135deg, #4a5568, #2d3748)",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                📍 Open in Google Maps
              </button>
            </a>
          </div>
        </div>

        {/* Map Card */}
        <div style={styles.mapCard}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <div style={styles.mapContainer}>
            <iframe
              title="shop-location"
              src="https://www.google.com/maps?q=SHAN%20ASSOCIATES%20Mangalam&output=embed"
              style={styles.map}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
          <div style={styles.mapCaption}>
            <span>📍 View on Google Maps</span>
          </div>
        </div>
      </div>

      {/* Business Hours Section */}
      <div style={styles.hoursSection}>
        <div style={styles.hoursCard}>
          <div style={styles.hoursIcon}>🕐</div>
          <h3 style={styles.hoursTitle}>Business Hours</h3>
          <div style={styles.hoursGrid}>
            <div style={styles.hoursItem}>
              <span>Monday - Saturday:</span>
              <strong>9:00 AM - 7:00 PM</strong>
            </div>
            <div style={styles.hoursItem}>
              <span>Sunday:</span>
              <strong>10:00 AM - 5:00 PM</strong>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @media (max-width: 768px) {
          .contact-container .grid {
            grid-template-columns: 1fr !important;
          }
          
          .contact-container .hours-grid {
            flex-direction: column !important;
            align-items: center;
            gap: 15px !important;
          }
        }
        
        @media (max-width: 480px) {
          .contact-container .title {
            font-size: 28px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;