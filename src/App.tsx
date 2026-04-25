import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

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
import Registration from "./components/Registration";

import Tudastar from "./pages/Tudastar";
import Cikk from "./pages/Cikk";
import GyermekGyogytornaBudapest from "./pages/GyermekGyogytornaBudapest";
import Koszonjuk from "./pages/Koszonjuk";


function Home() {
  return (
    <>
      <Helmet>
        <title>Gyermek gyógytorna Budapest | Korai fejlesztés babáknak</title>
        <meta
          name="description"
          content="Gyermek gyógytorna Budapesten. Segítség baba mozgásfejlődési problémáknál, egyéni vizsgálattal és gyors időponttal."
        />
      </Helmet>

      <Hero />
      <Services />
      <About />
      <Vizsgalat />
      <Testimonials />
      <Qualifications />
      <Pricing />
      <FAQ />
      <Registration />
      <ContactSection />
      <BlogPreview />
    </>
  );
}


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
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
    </HelmetProvider>
  );
}

export default App;
