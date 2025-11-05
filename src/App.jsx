import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MenuShowcase from './components/MenuShowcase.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <MenuShowcase />
        <AboutSection />
        <ContactSection />
      </main>
      <a
        href="#beranda"
        className="fixed bottom-5 right-5 inline-flex items-center justify-center rounded-full bg-emerald-600 text-white h-11 w-11 shadow-lg hover:bg-emerald-700"
        aria-label="Kembali ke atas"
      >
        ↑
      </a>
    </div>
  );
}

export default App;
