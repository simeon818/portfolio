import { FaCode, FaPalette, FaMobileAlt } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="relative z-[10] -mt-20 -top-[55px] mx-auto w-[100%] max-w-1000 bg-black/85 backdrop-blur-md rounded-3xl shadow-lg p-10 text-center text-white ">
      {/* Section Title */}
      <br />
      <br />
      <h2 className="text-4xl font-bold text-white">My Services</h2>
      <p className="text-gray-300 mt-2">What I Offer</p>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {/* Service 1 */}
        <div className="bg-white/10 p-6 rounded-xl shadow-md">
          <FaCode className="text-red-500 text-5xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Web Development</h3>
          <p className="text-gray-300 mt-2">
            I create modern, responsive websites that stand out.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white/10 p-6 rounded-xl shadow-md">
          <FaPalette className="text-red-500 text-5xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Graphic Design</h3>
          <p className="text-gray-300 mt-2">
            Beautiful, creative designs for web & print.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white/10 p-6 rounded-xl shadow-md">
          <FaMobileAlt className="text-red-500 text-5xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Mobile UI/UX</h3>
          <p className="text-gray-300 mt-2">
            Clean, intuitive mobile app designs for better engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
