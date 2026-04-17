import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components (eagerly loaded)
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsappButton";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
// Custom hook
import usePageTitle from "./hooks/usePageTitle";

// Lazy-loaded page components
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Route wrapper components (defined after imports)
const HomeWrapper = () => {
  usePageTitle("Home", { prefix: "SHAN ASSOCIATES | " });
  return <Home />;
};

const ProductsWrapper = () => {
  usePageTitle("Products", { prefix: "SHAN ASSOCIATES | " });
  return <Products />;
};

const ContactWrapper = () => {
  usePageTitle("Contact", { prefix: "SHAN ASSOCIATES | " });
  return <Contact />;
};

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <Navbar />

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

export default App;
