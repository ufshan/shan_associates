import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // or "smooth" if you want smooth scrolling
    });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && isMobile && !event.target.closest('.mobile-menu')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen, isMobile]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, isMobile]);

  const navStyle = {
    position: "sticky",
    top: "0",
    zIndex: "1000",
    background: scrolled 
      ? "linear-gradient(135deg, #07394a, #1b4251)" 
      : "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    padding: scrolled ? "8px 20px" : "12px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 0.3s ease",
    boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "0 2px 15px rgba(0,0,0,0.2)",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "15px",
    padding: "8px 16px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    position: "relative",
  };

  const menuStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const mobileMenuStyle = {
    position: "fixed",
    top: "70px",
    right: "15px",
    background: "linear-gradient(135deg, #203a43, #2c5364)",
    width: "260px",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
    display: menuOpen ? "block" : "none",
    zIndex: 1000,
  };

  const mobileLink = {
    color: "white",
    textDecoration: "none",
    display: "block",
    marginBottom: "15px",
    fontSize: "16px",
    padding: "12px 16px",
    borderRadius: "10px",
    transition: "all 0.2s ease",
    textAlign: "center",
  };

  // Logo text style with gradient (fixed - no duplicate color)
  const logoSpanStyle = {
    fontSize: scrolled ? "18px" : "22px",
    margin: "0",
    letterSpacing: "1px",
    fontWeight: "700",
    background: "linear-gradient(90deg, #ffffff, #ffd966, #fbbf24, #ffffff)",
    backgroundSize: "300% auto",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    animation: "shimmer 3s linear infinite",
    display: "inline-block",
  };

  // Handle link click to close mobile menu and scroll to top
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={navStyle}>
        {/* LOGO with Shining Effect */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none"
          }}
          onClick={handleLinkClick}
        >
          <img
            src="/images/shanlogo1.jpeg"
            alt="Shan Associates"
            style={{
              height: scrolled ? "40px" : "50px",
              transition: "0.3s",
              borderRadius: "50%",
              border: "2px solid #ffd966",
            }}
          />
          <span style={logoSpanStyle}>
            SHAN ASSOCIATES
          </span>
        </Link>

        {/* DESKTOP MENU */}
        {!isMobile && (
          <div style={menuStyle}>
            <Link to="/" style={linkStyle} className="nav-link">
              Home
            </Link>
            <Link to="/products" style={linkStyle} className="nav-link">
              Products
            </Link>
            <Link to="/contact" style={linkStyle} className="nav-link">
              📞 Contact
            </Link>
          </div>
        )}

        {/* MOBILE HAMBURGER */}
        {isMobile && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            style={{
              fontSize: "28px",
              color: "white",
              cursor: "pointer",
              padding: "8px",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            {menuOpen ? "✕" : "☰"}
          </div>
        )}
      </nav>

      {/* MOBILE MENU */}
      {isMobile && (
        <div className="mobile-menu" style={mobileMenuStyle}>
          <Link
            to="/"
            style={mobileLink}
            onClick={handleLinkClick}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            🏠 Home
          </Link>
          <Link
            to="/products"
            style={mobileLink}
            onClick={handleLinkClick}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            📦 Products
          </Link>
          <Link
            to="/contact"
            style={mobileLink}
            onClick={handleLinkClick}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            📞 Contact
          </Link>
        </div>
      )}

      <style>{`
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
        
        .nav-link {
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ffd966, #fbbf24);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::after {
          width: 80%;
        }
        
        .nav-link:hover {
          background: rgba(255,255,255,0.1);
        }
        
        .mobile-menu {
          animation: fadeInRight 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .nav-link {
            font-size: 14px;
            padding: 6px 12px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;