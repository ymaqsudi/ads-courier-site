"use client";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-12 bg-[#FEBA17] text-[#4E1F00] py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-[#4E1F00] max-w-3xl mx-auto mb-12">
          From urgent document delivery to oversized freight, Alternative
          Delivery Systems is your trusted partner for reliable, 24/7 courier
          solutions across NYC and the Tri-State area.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {/* Messenger Service */}
          <div className="bg-[#F8F4E1] p-8 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <svg
                  className="w-10 h-10 text-[#4E1F00]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h18v2H3V3zm2 4h14v2H5V7zm-2 4h18v2H3v-2zm2 4h14v2H5v-2zm-2 4h18v2H3v-2z" />
                </svg>
                <h3 className="text-2xl font-semibold">Messenger Service</h3>
              </div>
              <p className="text-[#74512D] mb-4">
                Our NYC messenger service is dispatched within 5 minutes and
                typically delivered within 60. Speed, reliability, and
                professionalism—always.
              </p>
            </div>
            <button className="mt-auto bg-[#FEBA17] text-[#4E1F00] border border-[#4E1F00] py-2 px-4 rounded hover:bg-[#4E1F00] hover:text-white transition">
              Get a Quote
            </button>
          </div>

          {/* Van & Truck Service */}
          <div className="bg-[#F8F4E1] p-8 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <svg
                  className="w-10 h-10 text-[#4E1F00]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5h13v13h-2v2H3v-2H1v-4l3-4h11v-3H3V5zm2 5h2v2H5v-2zm4 0h2v2H9v-2z" />
                </svg>
                <h3 className="text-2xl font-semibold">Van & Truck Service</h3>
              </div>
              <p className="text-[#74512D] mb-4">
                We deliver large and heavy items—copy machines, pallets,
                furniture, and more—with vans and trucks up to 24’, available
                24/7.
              </p>
            </div>
            <button className="mt-auto bg-[#FEBA17] text-[#4E1F00] border border-[#4E1F00] py-2 px-4 rounded hover:bg-[#4E1F00] hover:text-white transition">
              Get a Quote
            </button>
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#F8F4E1] p-8 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <svg
                  className="w-10 h-10 text-[#4E1F00]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v2c0 5.5 3.8 10.74 10 13 6.2-2.26 10-7.5 10-13V7l-10-5zM9 12l-3-3 1.4-1.4L9 9.2l6.6-6.6L17 4l-8 8z" />
                </svg>
                <h3 className="text-2xl font-semibold">Why Choose Us</h3>
              </div>
              <ul className="list-disc list-inside text-[#74512D] space-y-2 mb-4">
                <li>30+ years of industry expertise</li>
                <li>Dispatched in 5 minutes, delivered in 60</li>
                <li>24/7 availability with real-time tracking</li>
                <li>Price match guarantee</li>
                <li>Trusted by hundreds of NYC businesses</li>
              </ul>
            </div>
            <button className="mt-auto bg-[#FEBA17] text-[#4E1F00] border border-[#4E1F00] py-2 px-4 rounded hover:bg-[#4E1F00] hover:text-white transition">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
