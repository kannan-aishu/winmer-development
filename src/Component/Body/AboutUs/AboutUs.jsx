import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Main_IMG from './11.jpg';
import Img1 from './1-2.jpg';
import Img2 from './2-3.jpg';
import Img3 from './3-2.jpg';

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <img
        src={Main_IMG}
        className="w-full max-h-[300px] sm:max-h-[400px] object-cover rounded-b-3xl shadow-lg mb-6"
        alt="Main visual"
        data-aos="fade-down"
      />

      <div className="max-w-5xl w-full bg-white/90 rounded-xl p-6 sm:p-10 md:p-12 shadow-lg">
        <h1
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#2467aa] mb-6 border-l-8 border-orange-500 pl-4"
          data-aos="fade-right"
        >
          About Us - <span className="text-black">Winmer</span>
        </h1>

        <p
          className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          Welcome to <span className="font-bold text-[#2467aa]">Winmer</span>! We are a leading provider of
          innovative industrial automation solutions, dedicated to helping businesses streamline their
          processes, enhance efficiency, and achieve greater productivity. With our extensive experience and
          commitment to excellence, we offer a range of products and services that cater to diverse industrial
          needs.
        </p>

        <p
          className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          At Winmer, we specialize in cutting-edge technologies such as automated control panels, specialized
          machinery, vision-based automation, customized robotic systems, and fully automated systems for water
          treatment, coating, and plating plants. Our solutions are trusted across various sectors, including food
          and beverage industries, poultry breeding farms, cement industries, healthcare industries, and water
          treatment facilities.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-[#2467aa] mb-4 mt-8" data-aos="fade-up">
          Our Expertise Includes:
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-800 mb-8 text-sm sm:text-base leading-relaxed">
          <li data-aos="fade-right" data-aos-delay="100">
            <span className="font-semibold text-[#2467aa]">Automated Control Panels:</span> Top-of-the-line PLC and HMI
            controllers (SIEMENS, Allen Bradley, Mitsubishi, Omron, Delta).
          </li>
          <li data-aos="fade-left" data-aos-delay="150">
            <span className="font-semibold text-[#2467aa]">Special Purpose Machineries:</span> Custom-designed systems
            for your business needs.
          </li>
          <li data-aos="fade-right" data-aos-delay="200">
            <span className="font-semibold text-[#2467aa]">Vision-Based Automation:</span> Advanced systems integrating
            vision technology for precision.
          </li>
          <li data-aos="fade-left" data-aos-delay="250">
            <span className="font-semibold text-[#2467aa]">Customized Robotic Systems:</span> Tailored robotic solutions
            for productivity and efficiency.
          </li>
          <li data-aos="fade-right" data-aos-delay="300">
            <span className="font-semibold text-[#2467aa]">Powder Coating Plants:</span> Fully automated plants for
            streamlined coating processes.
          </li>
          <li data-aos="fade-left" data-aos-delay="350">
            <span className="font-semibold text-[#2467aa]">Liquid Paint Shops:</span> Optimized systems for liquid paint
            applications.
          </li>
          <li data-aos="fade-right" data-aos-delay="400">
            <span className="font-semibold text-[#2467aa]">Plating Plants:</span> Automated systems for efficient,
            high-quality plating.
          </li>
          <li data-aos="fade-left" data-aos-delay="450">
            <span className="font-semibold text-[#2467aa]">Water Treatment Plants:</span> Automated systems for
            effective, compliant water treatment.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-[#2467aa] mb-4" data-aos="fade-up">
          Why Choose Winmer?
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-800 mb-8 text-sm sm:text-base leading-relaxed">
          <li data-aos="fade-right" data-aos-delay="100">
            <span className="font-semibold text-[#2467aa]">Expertise:</span> Years of experience and a strong reputation
            for high-quality automation solutions.
          </li>
          <li data-aos="fade-left" data-aos-delay="150">
            <span className="font-semibold text-[#2467aa]">Tailored Solutions:</span> Custom automation for each client,
            boosting productivity and performance.
          </li>
          <li data-aos="fade-right" data-aos-delay="200">
            <span className="font-semibold text-[#2467aa]">Innovation:</span> Latest technologies, including robotics,
            AI-powered vision, and integrated control panels.
          </li>
          <li data-aos="fade-left" data-aos-delay="250">
            <span className="font-semibold text-[#2467aa]">Quality & Reliability:</span> Trusted components (SIEMENS, Allen
            Bradley, Mitsubishi, Omron, Delta) and rigorous testing.
          </li>
          <li data-aos="fade-right" data-aos-delay="300">
            <span className="font-semibold text-[#2467aa]">Customer Support:</span> Ongoing support, troubleshooting, and
            maintenance for peak efficiency.
          </li>
        </ul>

        {/* Combo Image Layout */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          {/* Left side: Two stacked images */}
          <div className="flex flex-row md:flex-col w-full md:w-1/3 gap-2">
            <img
              src={Img2}
              alt="Team at sunset"
              className="w-[40%] sm:w-1/3 md:w-full h-24 sm:h-32 md:h-[28vh] object-cover rounded-2xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
            <img
              src={Img3}
              alt="Hands together"
              className="w-[40%] sm:w-1/3 md:w-full h-24 sm:h-32 md:h-[28vh] object-cover rounded-2xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
            />
          </div>
          {/* Right side: One big image */}
          <div className="w-[100%] md:w-2/3">
            <img
              src={Img1}
              alt="Teamwork"
              className="w-[80%] h-48 sm:h-64 md:h-[26rem] object-cover rounded-2xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
            />
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-[#2467aa] mb-4" data-aos="fade-up">
          Industries We Serve:
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-800 mb-8 text-sm sm:text-base leading-relaxed">
          <li data-aos="fade-right" data-aos-delay="100">
            <span className="font-semibold text-[#2467aa]">Food & Beverage Industries:</span> Automated control systems for
            production, quality, and supply chain optimization.
          </li>
          <li data-aos="fade-left" data-aos-delay="150">
            <span className="font-semibold text-[#2467aa]">Poultry Breeding Farms:</span> Automation for feeding, monitoring,
            and processing, maximizing output.
          </li>
          <li data-aos="fade-right" data-aos-delay="200">
            <span className="font-semibold text-[#2467aa]">Cement Industries:</span> Control panels and machinery for
            efficient, energy-saving production.
          </li>
          <li data-aos="fade-left" data-aos-delay="250">
            <span className="font-semibold text-[#2467aa]">Healthcare Industries:</span> Automated systems for quality and
            safety in manufacturing.
          </li>
          <li data-aos="fade-right" data-aos-delay="300">
            <span className="font-semibold text-[#2467aa]">Water Treatment Plants:</span> Automated systems for efficient,
            sustainable water processing.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-[#2467aa] mb-4" data-aos="fade-up">
          Our Commitment:
        </h2>

        <p
          className="text-gray-700 text-base sm:text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          At Winmer, we are committed to providing the best industrial solutions tailored to your unique needs. Our team
          of experts works closely with clients to design, implement, and support systems that deliver optimal
          performance. We prioritize quality, reliability, and innovation in all our projects to ensure that our clients
          can achieve sustainable success.
        </p>
      </div>
    </div>
  );
}
