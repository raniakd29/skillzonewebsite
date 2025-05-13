import { Routes, Route } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import StorySection from "./components/StorySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AboutPage from "./pages/aboutus";
import TermsPage from "./pages/terms"; // import the Terms page
import "./App.css";

// Homepage content grouped in a component
function Home() {
  return (
    <main className="app">
      <div className="container">
        <HeroSection />
        <StorySection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/terms" element={<TermsPage />} /> {/* Add Terms route */}
    </Routes>
  );
}

export default App;
