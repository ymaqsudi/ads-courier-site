export default function Footer() {
  return (
    <footer className="bg-[#4E1F00] text-[#F8F4E1] py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center space-y-4 text-sm md:text-base">
        <p className="font-semibold">Alternative Delivery Systems, Inc.</p>
        <p>165 Madison Ave. Suite 202, New York, NY 10016</p>
        <p>
          Phone:{" "}
          <a href="tel:2126841444" className="underline hover:text-[#FEBA17]">
            (212) 684-1444
          </a>
        </p>
        <p>Hours: 24 Hours, 7 Days/Week</p>
        <p className="pt-4 text-xs text-[#D6EFD8]">
          Copyright © {new Date().getFullYear()} Alternative Delivery Systems.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
