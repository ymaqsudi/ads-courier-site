"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F8F4E1] ">
      <nav className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex flex-col md:flex-row justify-between items-center text-[#4E1F00]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 mb-2 md:mb-0">
          <Image
            src="/assets/ads-logo.png"
            alt="ADS Logo"
            width={200}
            height={200}
          />
        </a>

        {/* Centered & Bolder Nav Links */}
        <ul className="flex gap-8 text-sm md:text-base font-semibold tracking-wide uppercase">
          <li>
            <a href="#about" className="hover:text-[#FEBA17] transition">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#FEBA17] transition">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#FEBA17] transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
