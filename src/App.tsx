import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import CV from "./pages/CV";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Teaching from "./pages/Teaching";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <NavBar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* Hidden route: not linked in navbar */}
          <Route path="/teaching" element={<Teaching />} />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
