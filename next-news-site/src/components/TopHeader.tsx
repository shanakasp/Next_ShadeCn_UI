import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-white shadow-md py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="logo" className="w-50 h-15 object-cover" />
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 text-black-800 text-lg">
          {/* Search Box */}
          <div className="flex-1 mx-6 ">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-6 py-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-black-500"
            />
          </div>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Google">
            <FaGoogle />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
