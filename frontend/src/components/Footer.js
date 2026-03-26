import React from "react";

function Footer() {
  const footerStyle = {
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "white",
    padding: "clamp(40px, 6vw, 50px) 20px",
    marginTop: "60px",
    position: "relative",
    overflow: "hidden",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
    lineHeight: "1.6",
    position: "relative",
    zIndex: 2,
  };

  const logoStyle = {
    fontSize: "clamp(24px, 5vw, 32px)",
    fontWeight: "800",
    marginBottom: "15px",
    letterSpacing: "1px",
    background: "linear-gradient(90deg, #ffffff, #ffd966, #fbbf24, #ffffff)",
    backgroundSize: "300% auto",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    animation: "shimmer 3s linear infinite",
    display: "inline-block",
  };

  const textStyle = {
    fontSize: "clamp(13px, 2.5vw, 14px)",
    color: "#cbd5e1",
    margin: "8px 0",
  };

  const linkGroupStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(20px, 4vw, 30px)",
    margin: "20px 0",
    flexWrap: "wrap",
  };

  const linkStyle = {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "clamp(12px, 2.2vw, 14px)",
    transition: "color 0.3s ease",
    position: "relative",
  };

  const copyrightStyle = {
    marginTop: "25px",
    fontSize: "clamp(11px, 2vw, 12px)",
    color: "#94a3b8",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "20px",
  };

  return (
    <footer style={footerStyle}>
      {/* Shining Light Effect Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "100%",
        background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.05), rgba(255,215,0,0.1), rgba(255,215,0,0.05), transparent)",
        backgroundSize: "200% 100%",
        animation: "shimmer 8s linear infinite",
        pointerEvents: "none",
      }}></div>

      <div style={containerStyle}>
        <h3 style={logoStyle}>
          SHAN ASSOCIATES
        </h3>

        <p style={textStyle}>
          📍 Mangalam, Purathur Road, Pin: 676561 Tirur, Kerala
        </p>

        <p style={textStyle}>
          📞 <a href="tel:+918089583618" style={linkStyle} className="footer-link">+91 80895 83618</a>
        </p>

        <div style={linkGroupStyle}>
          <a href="/" style={linkStyle} className="footer-link">Home</a>
          <a href="/products" style={linkStyle} className="footer-link">Products</a>
          <a href="/contact" style={linkStyle} className="footer-link">Contact</a>
        </div>

        <p style={copyrightStyle}>
          © {new Date().getFullYear()} SHAN ASSOCIATES. All rights reserved.
        </p>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .footer-link {
          transition: all 0.3s ease;
          position: relative;
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ffd966, #fbbf24);
          transition: width 0.3s ease;
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
        
        .footer-link:hover {
          color: #ffd966 !important;
        }
        
        @media (max-width: 768px) {
          .footer-shine-text {
            font-size: 18px !important;
            animation: shimmer 4s linear infinite;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;