import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import prosper from "../assets/prosper.png";

const HeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const formRef = useRef(null);

  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsContactOpen(false);
      }
    };

    if (isContactOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isContactOpen]);

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-16 px-6 bg-white">
      {/* Navigation Bar */}
      <header>
        <Navbar />
      </header>

      {/* Hero Content */}
      <div className="mt-20">
        <span className="mt-20 border-2 px-10 py-2 rounded-full text-sm">
          <span className="text-red-500">Hello!</span> Hope you are Great? 😊
        </span>
      </div>
      <div className="relative z-10 text-center">
        <div className="relative mt-10 inline-block">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold relative z-10">
            I’m <span className="text-red-500">Prosper</span>,<br />
            Graphic Artist & Web Developer
          </h1>

          {/* Minimal Red Strokes */}
          <svg
            className="absolute -top-6 left-0 w-20 h-10 text-red-500 opacity-70"
            viewBox="0 0 100 20"
            fill="currentColor"
          >
            <path
              d="M5,10 Q50,-10 95,10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
          </svg>

          <svg
            className="absolute -bottom-6 right-0 w-24 h-10 text-red-500 opacity-70"
            viewBox="0 0 100 20"
            fill="currentColor"
          >
            <path
              d="M5,10 Q50,30 95,10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>

        {/* Subtitle */}
        <p className="mt-2 text-gray-600 max-w-lg mx-auto">
          I’m Burgeon, a web developer, designer, and content creator. I love
          building sleek websites, creating engaging content, and exploring new
          tech. Always innovating and growing! 🚀
        </p>
      </div>

      {/* Profile Image with Huge Circular Shape */}
      <div className="relative -mt-30 flex justify-center">
        {/* Background Circle - Positioned Below Image */}
        <div className="absolute w-[600px] h-[600px] bg-red-500 rounded-full top-24 z-0"></div>

        {/* Profile Image */}
        <img
          src={prosper}
          alt="Profile"
          className="relative -top-[90px] z-10 w-[450px] h-[450px] object-cover rounded-full "
        />
      </div>

      {/* Call to Action Buttons */}
      <div className="-mt-[200px] flex space-x-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-full p-2 shadow-lg z-10">
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-full text-lg shadow-lg"
          onClick={() =>
            alert(`I'll update that soon mate.. 😊 check back later`)
          }
        >
          Download CV
        </button>
        <button
          className="text-white px-6 py-3 rounded-full text-lg cursor-pointer transition-all duration-300 hover:bg-black hover:text-white"
          onClick={(e) => e.preventDefault(setIsContactOpen(true))}
        >
          Contact Me
        </button>
      </div>

      {/* Experience Section */}
      <div className="mt-4 text-center">
        <div className="flex items-center justify-center space-x-2 text-black text-xl">
          <span>★★★★★</span>
        </div>
        <p className="mt-2 text-xl font-bold">3 Years Experience</p>
      </div>

      {/* Contact Form Popup */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            ref={formRef}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg w-[90%] max-w-md relative"
          >
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-3 right-3 text-white bg-red-500 w-8 h-8 rounded-full flex items-center justify-center font-bold"
            >
              X
            </button>
            <h2 className="text-2xl font-bold text-white text-center mb-4 z-[1000]">
              Contact Me
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                rows="4"
              ></textarea>
              <button className="w-full bg-red-500 text-white py-3 rounded-md shadow-md hover:bg-red-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
