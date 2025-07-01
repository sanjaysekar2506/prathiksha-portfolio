// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar    from "./components/Navbar";
import Footer    from "./components/Footer";

import Hero      from "./components/Hero";
import About     from "./components/About";
import Services  from "./components/Services";
import Owner     from "./components/Owner";
import Booking   from "./components/Booking";
import Portfolio from "./components/Portfolio";   // ✅ path matches tree

import "./index.css";

// --- one reusable shell so we don't repeat Navbar & Footer ---
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}

// --- home page ---
function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Owner />
      <Booking />
    </Layout>
  );
}

// --- portfolio page ---
function PortfolioPage() {
  return (
    <Layout>
      <Portfolio />
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}
