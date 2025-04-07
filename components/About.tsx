"use client";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-12 bg-[#F8F4E1] text-[#4E1F00] py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          30+ Years of Trusted Experience
        </h2>
        <p className="text-[#74512D] max-w-3xl mx-auto mb-12 text-lg">
          As a trusted New York courier and messenger service, Alternative
          Delivery Systems has been serving NYC and the Tri-State Area since
          1995. With decades of experience, we’re committed to delivering your
          packages quickly, securely, and affordably—24 hours a day, 7 days a
          week.
        </p>

        {/* Service Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col items-center text-center">
            <div className="h-[160px] flex items-center justify-center">
              <Image
                src="/assets/van-truck-services-img.svg"
                alt="Messenger Services"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Messenger Services
            </h3>
            <p className="text-[#74512D] max-w-sm">
              Our reliable same-day NYC messenger service ensures your documents
              and small packages arrive quickly and safely across the city.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-[160px] flex items-center justify-center">
              <Image
                src="/assets/messenger-services-img.svg"
                alt="Van and Truck Services"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Van & Truck Services
            </h3>
            <p className="text-[#74512D] max-w-sm">
              From furniture and supplies to oversized equipment, our 24/7 van
              and truck services handle deliveries of all sizes with care and
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
