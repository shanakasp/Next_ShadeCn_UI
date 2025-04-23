import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6">
      {/* Section 1: Logo + Social Icons */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-white text-2xl">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Section 2: Center Text Links */}
      <div className="mt-10">
        <div className="flex justify-center gap-8 text-sm flex-wrap">
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Careers
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
          <a href="#" className="hover:text-gray-300">
            Support
          </a>
        </div>
      </div>

      {/* Section 3: Bottom Ash Color Texts */}
      <div className="mt-10 bg-gray-800 text-gray-400 text-sm py-3 px-4 flex justify-between">
        <span>&copy; 2025 Your Company. All rights reserved.</span>
        <span>Terms & Privacy</span>
      </div>
    </footer>
  );
};

export default Footer;
