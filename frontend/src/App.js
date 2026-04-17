import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components (eagerly loaded for immediate UI)
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsappButton";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader"; // Optional loading fallback

// Lazy‑load page components for code splitting
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Custom hook for updating document title per route
import usePageTitle from "./hooks/usePageTitle";

// Scroll restoration component (ensures page starts at top on navigation)
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,    // Opt into React 18 concurrent features
        v7_relativeSplatPath: true,  // Cleaner relative route matching
      }}
    >
      <ScrollToTop />
      <Navbar />

      {/* Suspense fallback while lazy pages load */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/products" element={<ProductsWrapper />} />
          <Route path="/contact" element={<ContactWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

// ----- Route Wrappers (for side effects like title updates) -----
const HomeWrapper = () => {
  usePageTitle("SHAN ASSOCIATES | Home");
  return <Home />;
};

const ProductsWrapper = () => {
  usePageTitle("SHAN ASSOCIATES | Our Products");
  return <Products />;
};

const ContactWrapper = () => {
  usePageTitle("SHAN ASSOCIATES | Contact Us");
  return <Contact />;
};

export default App;
