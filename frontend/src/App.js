import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappButton";
import ScrollToTop from "./components/ScrollToTop"; // Optional: for scroll restoration

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Contact = lazy(() => import("./pages/Contact"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Error Boundary Component (optional but recommended)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Something went wrong</h2>
          <button onClick={() => window.location.reload()}>Refresh Page</button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        {/* Scroll restoration helper */}
        <ScrollToTop />
        
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <Navbar />

        {/* Main content wrapper with semantic HTML */}
        <main id="main-content" role="main">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/products" 
                element={<Products />} 
              />
              <Route 
                path="/contact" 
                element={<Contact />} 
              />
              {/* 404 Not Found Route */}
              <Route 
                path="*" 
                element={<NotFound />} 
              />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        
        {/* Floating WhatsApp Button with configuration */}
        <WhatsAppButton 
          phoneNumber="+1234567890" // Pass as prop or env variable
          message="Hello! I have a question about your products."
          position="bottom-right"
        />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

// Optional: 404 Page Component
const NotFound = () => (
  <div className="not-found-container">
    <h1>404</h1>
    <p>Page not found</p>
    <a href="/">Go back home</a>
  </div>
);

export default App;
