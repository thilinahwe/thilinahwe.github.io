// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Projects from "./pages/Projects";
import CV from "./pages/CV";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Teaching from "./pages/Teaching";
import SocialStrip from "./components/SocialStrip";

function App() {
  return (
    <div className="h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950">
      {/* Header stays at top */}
      <NavBar />

      {/* Scrollable middle area: all pages + social icons */}
      <div className="flex-1 overflow-y-auto">
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/teaching" element={<Teaching />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Social icons bar under page, above footer */}
        <SocialStrip />
      </div>

      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
}

export default App;