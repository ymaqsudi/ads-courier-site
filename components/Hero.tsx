"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[#F8F4E1] text-[#4E1F00] py-20 px-6 md:px-16 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Fast, Reliable Courier Services in NYC
          </h1>
          <p className="text-lg text-[#74512D] mb-8">
            {
              "Alternative Delivery Systems has been New York's trusted messenger and delivery service since 1995 — providing rush, van, and truck deliveries 24/7 across the tri-state area."
            }
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#contact">
              <button className="bg-[#FEBA17] text-[#4E1F00] px-6 py-3 font-semibold rounded hover:brightness-110 transition">
                Request a Quote
              </button>
            </a>
            <a href="#about">
              <button className="border border-[#4E1F00] px-6 py-3 font-semibold rounded hover:bg-[#FEBA17] hover:text-[#4E1F00] transition">
                Learn More
              </button>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/hero-delivery-truck.svg"
            alt="Courier Van"
            width={600}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
