// components/PageLoader.js (inline version)
import React from "react";

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fafc",
    zIndex: 9999,
  },
  spinner: {
    width: "48px",
    height: "48px",
    border: "4px solid rgba(10, 127, 46, 0.15)",
    borderLeftColor: "#0a7f2e",
    borderRadius: "50%",
    animation: "spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite",
  },
  text: {
    marginTop: "1.5rem",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: "1rem",
    fontWeight: 500,
    color: "#1e293b",
    opacity: 0.8,
  },
};

// Inject keyframe animation into document head
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(styleSheet);
}

const PageLoader = () => (
  <div style={styles.overlay} role="status" aria-label="Loading page content">
    <div style={styles.spinner} />
    <p style={styles.text}>Loading...</p>
  </div>
);

export default PageLoader;
