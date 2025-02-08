import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-black text-white shadow-md z-50 w-[80%] md:w-[60%] rounded-full">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Left Links (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer px-4 py-1 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer px-4 py-1 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              className="cursor-pointer px-4 py-1 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
            >
              Resume
            </Link>
          </li>
        </ul>

        {/* Logo: Centered on Desktop, Right on Mobile */}
        <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 ml-auto md:ml-0">
          <img src={Logo} alt="JCREA Logo" className="w-5 h-5" />
        </div>

        {/* Right Links (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer px-4 py-1 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer px-4 py-1 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white shadow-md absolute w-full left-0 top-full py-4 rounded-b-2xl">
          <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer px-4 py-1 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer px-4 py-1 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer px-4 py-1 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer px-4 py-1 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer px-4 py-1 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
