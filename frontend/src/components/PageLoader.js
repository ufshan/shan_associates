import React from "react";
import "./PageLoader.css";

/**
 * A full‑page loading indicator with spinner and optional custom message.
 *
 * @param {Object} props
 * @param {string} [props.message="Loading..."] - Custom loading text.
 * @param {React.ReactNode} [props.children] - Additional content (e.g., logo).
 * @param {boolean} [props.showBrand=true] - Whether to display "SHAN ASSOCIATES" subtitle.
 */
const PageLoader = ({ message = "Loading...", children, showBrand = true }) => {
  return (
    <div
      className="page-loader"
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      {/* Optional custom content (e.g., animated logo) */}
      {children && <div className="page-loader__custom">{children}</div>}

      {/* Spinner animation */}
      {!children && <div className="spinner" aria-hidden="true" />}

      {/* Loading message */}
      <p>
        {message}
        {showBrand && <span className="page-loader__brand">SHAN ASSOCIATES</span>}
      </p>

      {/* Visually hidden text for screen readers */}
      <span className="visually-hidden">Page is loading, please wait.</span>
    </div>
  );
};

export default PageLoader;
