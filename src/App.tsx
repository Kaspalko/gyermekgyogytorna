import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Qualifications from "./components/Qualifications";
import Pricing from "./components/Pricing";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tudastar from "./pages/Tudastar";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Qualifications />
      <Pricing />
      <Contact />
      <Registration />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tudastar" element={<Tudastar />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
