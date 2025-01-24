import { Search } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter, FaVideo } from "react-icons/fa";

const SeconderNavbar = () => {
  return (
    <div className="flex  items-center justify-between bg-black text-white py-1">
      <div className="">
        <h1 className="font-semibold italic text-[36px] leading-[43.88px]">
          Today's Pick
        </h1>
      </div>
      <div className="flex items-center space-x-10 ">
        <div className="w-[210px] ">
          <div className="flex items-center  relative  rounded bg-[#FDFEFF] focus:outline-none">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <Search className="w-4 h-4 text-black" />
            </span>
            <input
              type="text"
              className="w-full pl-8 pr-4  bg-transparent focus:outline-none text-sm lg:text-base"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <a href="#" className=" ">
            <FaFacebook size={20} />
          </a>
          <a href="#" className=" ">
            <FaTwitter size={20} />
          </a>
          <a href="#" className=" ">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className=" ">
            <FaVideo size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SeconderNavbar;
