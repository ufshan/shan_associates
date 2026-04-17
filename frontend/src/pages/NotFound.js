import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
    <h1>404 – Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <Link to="/" className="btn">
      Return Home
    </Link>
  </div>
);

export default NotFound;
