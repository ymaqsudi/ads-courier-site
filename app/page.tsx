import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />

      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <a href="#contact" aria-label="Request a Quote">
          <button className="bg-[#FEBA17] text-[#4E1F00] p-4 rounded-full shadow-lg hover:scale-105 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-6-4h6m2 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h9a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}
