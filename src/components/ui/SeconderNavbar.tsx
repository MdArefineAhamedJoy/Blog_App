import { FaFacebook, FaLinkedin, FaTwitter, FaVideo } from "react-icons/fa";

const SeconderNavbar = () => {
  return (
    <div className="flex  items-center justify-between bg-black text-white">
      <div className="">
        <h1>Today's Pick</h1>
      </div>
      <div className="flex items-center ">
        <div>
          <input
            className="block"
            type="text"
            name="search"
            id="search"
            placeholder="Search "
          />
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
