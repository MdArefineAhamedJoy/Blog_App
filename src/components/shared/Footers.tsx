import {
  FaChevronUp,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaVideo,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white mt-2">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-12 md:grid-cols-12 gap-8">
          <div className="md:col-span-2 col-span-12">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Footer-TaZvTgQosRr8irajLhTMnwwd9CDevy.png"
              alt="Barrel & Business Logo"
              className="mb-4 w-[150px]"
            />
          </div>
          <div className="md:col-span-3 col-span-6">
            <h2 className="text-xl font-bold mb-4">ABOUT</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Common Sense Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Meet The Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 col-span-6">
            <h2 className="text-xl font-bold mb-4">RESOURCES</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Reports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Our Customers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Playbooks
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 col-span-12">
            <h2 className="text-xl font-bold mb-4">SEARCH</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Newsletter Issues
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 col-span-6">
            <h2 className="text-xl font-bold mb-4">CONTACT</h2>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Email Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Reach Out to Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Follow Us
                </a>
              </li>
            </ul>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-md hover:bg-gray-600"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-md hover:bg-gray-600"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-md hover:bg-gray-600"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-md hover:bg-gray-600"
              >
                <FaVideo size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 mb-8">
          <p className="mb-2">2024 All Rights Reserved.</p>
          <p>ISO 9001 and ISO 27001 Certified</p>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-gray-300">
            Terms of Use and Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300">
            Points Of Collection Notice
          </a>
          <a href="#" className="hover:text-gray-300">
            Manage Preference
          </a>
          <a href="#" className="hover:text-gray-300">
            Do Not Sell My Personal Information
          </a>
          <a href="#" className="hover:text-gray-300">
            CCPA
          </a>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
        aria-label="Scroll to top"
      >
        <FaChevronUp className="h-6 w-6" />
      </button>
    </footer>
  );
}
