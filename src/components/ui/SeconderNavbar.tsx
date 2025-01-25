import { Search } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const SeconderNavbar = () => {
  return (
    <div className="px-4 flex flex-wrap items-center justify-between bg-black text-white py-2">
      <div className="w-full md:w-auto  md:mb-0">
        <h1 className="font-semibold italic text-lg md:text-[36px] leading-[43.88px] text-center md:text-left">
          Today's Pick
        </h1>
      </div>
      <div className="w-full md:w-auto flex flex-col md:flex-row md:items-center md:space-x-10">
        <div className="mb-2 md:mb-0">
          <div className="flex items-center relative rounded bg-[#FDFEFF] focus:outline-none">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <Search className="w-4 h-4 text-black" />
            </span>
            <input
              type="text"
              className="w-full pl-8 pr-4 bg-transparent focus:outline-none text-sm lg:text-base"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" aria-label="Facebook">
            <FaFacebook size={20} />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SeconderNavbar;
