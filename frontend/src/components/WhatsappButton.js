import React from "react";

function WhatsAppButton() {
  const phoneNumber = "918089583618";
  const message = "Hello SHAN ASSOCIATES, I would like to know more about your building materials.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "clamp(55px, 10vw, 65px)",
        height: "clamp(55px, 10vw, 65px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "clamp(28px, 5vw, 32px)",
        textDecoration: "none",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        zIndex: "1000",
        transition: "all 0.3s ease",
        animation: "pulse 2s infinite",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(37,211,102,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
      }}
      title="Chat with us on WhatsApp"
    >
      💬
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 4px 20px rgba(37,211,102,0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 6px 30px rgba(37,211,102,0.6);
          }
        }
        
        @media (max-width: 768px) {
          .whatsapp-button {
            width: 50px;
            height: 50px;
            font-size: 26px;
            bottom: 15px;
            right: 15px;
          }
        }
      `}</style>
    </a>
  );
}

export default WhatsAppButton;