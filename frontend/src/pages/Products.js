import React, { useState } from "react";

function Products() {
  const products = [
    { id:1, name:"ACC Cement", category:"cements", description:"Premium quality cement for strong construction.", image:"/images/acc.webp" },
    { id:2, name:"UltraTech Cement", category:"cements", description:"High strength cement ideal for durable structures.", image:"/images/ultratech.webp" },
    { id:3, name:"JSW Cement", category:"cements", description:"Reliable cement for long lasting buildings.", image:"/images/jsw.webp" },
    { id:4, name:"Zuari Cement", category:"cements", description:"Trusted cement brand for strong foundations.", image:"/images/zuari.webp" },
    { id:5, name:"Dalmia Cement", category:"cements", description:"Durable cement ensuring structural strength.", image:"/images/dalmia.webp" },
    { id:6, name:"Malabar Cement", category:"cements", description:"Quality cement suitable for all construction works.", image:"/images/malabarcement.png" },
    { id:7, name:"Chettinad Cement", category:"cements", description:"Strong cement with excellent bonding performance.", image:"/images/chettinad.png" },
    { id:8, name:"Kairali TMT", category:"tmt", description:"High strength TMT steel bars for reinforced structures.", image:"/images/kairali.webp" },
    { id:9, name:"Prince TMT", category:"tmt", description:"Premium TMT steel bars for durable buildings.", image:"/images/princetmt.webp" },
    { id:10, name:"Steelex TMT", category:"tmt", description:"Strong and flexible steel bars for construction.", image:"/images/Steelextmt.jpg" },
    { id:11, name:"Bharathi TMT", category:"tmt", description:"Reliable steel reinforcement bars.", image:"/images/bharathitmt.webp" },
    { id:12, name:"Jindal Roofing Sheets", category:"roofing", description:"Durable roofing sheets available in multiple colors.", image:"/images/sheet.webp" },
    { id:13, name:"Steel Rings", category:"rings", description:"Strong steel rings used in reinforced construction.", image:"/images/ring.webp" },
    { id:14, name:"DEMAC Pipes", category:"pipes", description:"High quality pipes for plumbing and construction.", image:"/images/demac.webp" },
    { id:15, name:"UltraTech TILEFIXO CT", category:"adhesives", description:"Reliable adhesive for ceramic tiles.", image:"/images/tilect.png" },
    { id:16, name:"UltraTech TILEFIXO VT", category:"adhesives", description:"Strong adhesive ideal for vitrified tiles.", image:"/images/tilevt.png" },
    { id:17, name:"UltraTech TILEFIXO NT", category:"adhesives", description:"Advanced adhesive for strong tile bonding.", image:"/images/tilent.png" },
    { id:18, name:"Dr Fixit Waterproofing", category:"waterproof", description:"High performance waterproofing solution.", image:"/images/drfixitlw.webp" }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const categories = [
    { name: "All", value: null, color: "#4a5568" },
    { name: "Cements", value: "cements", color: "#2c5282" },
    { name: "TMT Steel", value: "tmt", color: "#c05621" },
    { name: "Roofing Sheets", value: "roofing", color: "#2f855a" },
    { name: "Steel Rings", value: "rings", color: "#805ad5" },
    { name: "Pipes", value: "pipes", color: "#b794f4" },
    { name: "Tile Adhesives", value: "adhesives", color: "#d69e2e" },
    { name: "Waterproofing", value: "waterproof", color: "#3182ce" }
  ];

  const styles = {
    container: {
      padding: "clamp(40px, 6vw, 60px) 20px",
      maxWidth: "1400px",
      margin: "0 auto",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f8fafc, #ffffff)",
    },
    header: {
      textAlign: "center",
      marginBottom: "clamp(40px, 6vw, 60px)",
    },
    mainTitle: {
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
    subTitle: {
      fontSize: "clamp(14px, 3vw, 18px)",
      color: "#4a5568",
      maxWidth: "600px",
      margin: "0 auto",
    },
    categoryWrapper: {
      width: "100%",
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
      marginBottom: "40px",
      padding: "5px 0",
    },
    categoryContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      justifyContent: "center",
      padding: "0 15px",
    },
    categoryButton: {
      padding: "10px 24px",
      border: "2px solid",
      borderRadius: "40px",
      fontSize: "0.9rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      outline: "none",
      whiteSpace: "nowrap",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "25px",
      padding: "20px",
    },
    productCard: {
      backgroundColor: "white",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      animation: "fadeInUp 0.5s ease-out forwards",
      opacity: 0,
      transform: "translateY(30px)",
    },
    badge: {
      position: "absolute",
      top: "12px",
      left: "12px",
      background: "linear-gradient(135deg, #0a7f2e, #086424)",
      color: "white",
      fontSize: "0.75rem",
      fontWeight: "600",
      padding: "5px 12px",
      borderRadius: "25px",
      zIndex: 10,
      boxShadow: "0 4px 10px rgba(10,127,46,0.3)",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    imageContainer: {
      height: "200px",
      overflow: "hidden",
      backgroundColor: "#f8fafc",
    },
    productImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      transition: "transform 0.5s ease",
    },
    productInfo: {
      padding: "20px",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    productName: {
      fontSize: "1.1rem",
      fontWeight: "700",
      color: "#1a202c",
      marginBottom: "8px",
    },
    productDescription: {
      fontSize: "0.85rem",
      color: "#64748b",
      marginBottom: "15px",
      lineHeight: "1.5",
    },
    availabilityBadge: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "5px",
      marginBottom: "18px",
      color: "#059669",
      fontSize: "0.85rem",
      fontWeight: "500",
    },
    whatsappBtn: {
      width: "100%",
      padding: "12px",
      background: "linear-gradient(135deg, #25D366, #128C7E)",
      color: "white",
      border: "none",
      borderRadius: "12px",
      fontWeight: "600",
      fontSize: "0.9rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      boxShadow: "0 4px 15px rgba(37,211,102,0.3)",
    },
    contactCard: {
      background: "linear-gradient(135deg, #0a7f2e, #086424)",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(10,127,46,0.3)",
      display: "flex",
      alignItems: "center",
      height: "100%",
      minHeight: "400px",
    },
    contactCardContent: {
      padding: "30px",
      color: "white",
      width: "100%",
      textAlign: "center",
    },
    contactHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "15px",
    },
    contactTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      margin: 0,
    },
    contactDescription: {
      fontSize: "0.95rem",
      lineHeight: "1.5",
      marginBottom: "25px",
      opacity: 0.95,
    },
    contactButtons: {
      display: "flex",
      gap: "15px",
      marginBottom: "25px",
    },
    contactWhatsappBtn: {
      width: "100%",
      padding: "12px",
      background: "white",
      color: "#0a7f2e",
      border: "none",
      borderRadius: "12px",
      fontWeight: "700",
      fontSize: "0.9rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
    },
    contactCallBtn: {
      width: "100%",
      padding: "12px",
      background: "rgba(255,255,255,0.2)",
      color: "white",
      border: "2px solid white",
      borderRadius: "12px",
      fontWeight: "700",
      fontSize: "0.9rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
    },
    statsContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      paddingTop: "20px",
      borderTop: "1px solid rgba(255,255,255,0.2)",
    },
    stat: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px",
    },
    statNumber: {
      fontSize: "1.1rem",
      fontWeight: "700",
    },
    statLabel: {
      fontSize: "0.7rem",
      opacity: 0.9,
    },
    statDivider: {
      width: "1px",
      height: "30px",
      backgroundColor: "rgba(255,255,255,0.2)",
    },
  };

  return (
    <div className="products-container">
      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.mainTitle}>Our Premium Materials</h1>
        <p style={styles.subTitle}>High-quality construction materials at the best prices</p>
        <div style={{
          width: "80px",
          height: "3px",
          background: "linear-gradient(90deg, #0a7f2e, #ffd966)",
          margin: "20px auto 0",
          borderRadius: "3px",
        }}></div>
      </div>

      {/* Category Buttons */}
      <div style={styles.categoryWrapper}>
        <div style={styles.categoryContainer}>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.value)}
              style={{
                ...styles.categoryButton,
                backgroundColor: selectedCategory === cat.value ? cat.color : "#f7fafc",
                color: selectedCategory === cat.value ? "white" : cat.color,
                borderColor: cat.color,
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== cat.value) {
                  e.target.style.backgroundColor = cat.color;
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== cat.value) {
                  e.target.style.backgroundColor = "#f7fafc";
                  e.target.style.color = cat.color;
                  e.target.style.transform = "translateY(0)";
                }
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div style={styles.grid}>
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            style={{
              ...styles.productCard,
              animationDelay: `${index * 0.05}s`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 20px 35px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.08)";
            }}
          >
            <div style={styles.badge}>
              <span>🏷️</span> Best Price
            </div>

            <div style={styles.imageContainer}>
              <img
                src={product.image}
                alt={product.name}
                style={styles.productImage}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x200?text=Product+Image";
                }}
              />
            </div>

            <div style={styles.productInfo}>
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productDescription}>{product.description}</p>
              
              <div style={styles.availabilityBadge}>
                <span>●</span> In Stock
              </div>

              <a
                href={`https://wa.me/918089583618?text=Hello%20SHAN%20ASSOCIATES%2C%20I%20would%20like%20to%20know%20the%20price%20and%20details%20about%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <button style={styles.whatsappBtn}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(37,211,102,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(37,211,102,0.3)";
                  }}
                >
                  <span>💬</span> WhatsApp Enquiry
                </button>
              </a>
            </div>
          </div>
        ))}

        {/* Contact Card */}
        <div style={styles.contactCard}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <div style={styles.contactCardContent}>
            <div style={styles.contactHeader}>
              <span style={{ fontSize: "2rem" }}>🏗️</span>
              <h3 style={styles.contactTitle}>Need More Materials?</h3>
            </div>
            
            <p style={styles.contactDescription}>
              We supply a wide range of construction materials at wholesale prices. 
              Get the best deals and instant support!
            </p>

            <div style={styles.contactButtons}>
              <a
                href="https://wa.me/918089583618"
                target="_blank"
                rel="noopener noreferrer"
                style={{ flex: 1, textDecoration: "none" }}
              >
                <button style={styles.contactWhatsappBtn}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span>💬</span> WhatsApp
                </button>
              </a>
              
              <a
                href="tel:+918089583618"
                style={{ flex: 1, textDecoration: "none" }}
              >
                <button style={styles.contactCallBtn}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.color = "#0a7f2e";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span>📞</span> Call Now
                </button>
              </a>
            </div>

            <div style={styles.statsContainer}>
              <div style={styles.stat}>
                <span style={styles.statNumber}>1k+</span>
                <span style={styles.statLabel}>Happy Clients</span>
              </div>
              <div style={styles.statDivider}></div>
              <div style={styles.stat}>
                <span style={styles.statNumber}>24/7</span>
                <span style={styles.statLabel}>Support</span>
              </div>
              <div style={styles.statDivider}></div>
              <div style={styles.stat}>
                <span style={styles.statNumber}>Best</span>
                <span style={styles.statLabel}>Prices ⭐</span>
              </div>
            </div>
          </div>
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
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @media (max-width: 768px) {
          .products-container .grid {
            grid-template-columns: 1fr !important;
          }
          
          .products-container .contact-buttons {
            flex-direction: column !important;
          }
        }
        
        @media (max-width: 480px) {
          .products-container .main-title {
            font-size: 28px !important;
          }
          
          .products-container .category-btn {
            padding: 6px 14px !important;
            font-size: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Products;