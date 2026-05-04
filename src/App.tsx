import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Qualifications from "./components/Qualifications";
import Pricing from "./components/Pricing";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BlogPreview from "./components/BlogPreview";
import Vizsgalat from "./components/Vizsgalat";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Tudastar from "./pages/Tudastar";
import Cikk from "./pages/Cikk";
import GyermekGyogytornaBudapest from "./pages/GyermekGyogytornaBudapest";
import Koszonjuk from "./pages/Koszonjuk";
import Contact from "./components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Vizsgalat />
      <Testimonials />
      <Qualifications />
      <Pricing />
      <FAQ />
      <Contact />
      <ContactSection />
      <BlogPreview />
    </>
  );
}

/* ✅ GOOGLE ANALYTICS TRACKER */
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-VQJ1C0C5Z2", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* ✅ FONTOS: Routeron BELÜL */}
      <AnalyticsTracker />

      <div className="min-h-screen">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/tudastar" element={<Tudastar />} />
            <Route path="/tudastar/:slug" element={<Cikk />} />

            <Route
              path="/gyermek-gyogytorna-budapest"
              element={<GyermekGyogytornaBudapest />}
            />

            <Route path="/koszonjuk" element={<Koszonjuk />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
