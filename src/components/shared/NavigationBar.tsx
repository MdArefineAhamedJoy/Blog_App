import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Importing react-icons
import logoImage from "../../assets/image-removebg-preview1.png";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    "Product Reviews",
    "Retail Operations",
    "Supplier and Distributor Relations",
    "Acquisitions",
    "Technology and Innovation",
  ];

  return (
    <nav className="relative px-4 py-2 flex items-center justify-between bg-white shadow-md">
      <div className="flex items-center">
        <img
          src={logoImage}
          alt="Bearal and Busnasie Logo"
          className="w-16 h-16"
        />
      </div>
      <div className="hidden lg:block ">
        <ul className="flex space-x-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 focus:outline-none"
        >
          {!isOpen && <FaBars className="text-gray-700 text-2xl" />}
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-30 shadow-lg`}
      >
        <div className="pt-4 px-6">
          <ul className="space-y-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={toggleMenu}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
