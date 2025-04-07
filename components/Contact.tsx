"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-12 bg-[#F8F4E1] text-[#4E1F00] py-24 px-6 md:px-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Leave Us a Message
        </h2>
        <p className="text-lg text-[#74512D] mb-6">
          Call us today at{" "}
          <a
            href="tel:2126841444"
            className="font-semibold text-[#4E1F00] underline hover:text-[#74512D]"
          >
            (212) 684-1444
          </a>{" "}
          for a quick quote, or fill out the form below and we’ll get back to
          you the same day.
        </p>

        <form className="bg-white p-8 rounded-xl shadow-md space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FEBA17]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FEBA17]"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Message *
            </label>
            <textarea
              id="message"
              rows={4}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FEBA17]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#FEBA17] text-[#4E1F00] font-semibold px-6 py-3 rounded hover:bg-[#4E1F00] hover:text-white transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
