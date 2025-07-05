import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Example images (replace with your own or use real Omron images)
import Img1 from './1.jpg';
import Img2 from './2.webp';
import Img3 from './3.gif';
import Img4 from './4.webp';
import Img5 from './5.jpg';
import Img6 from './6.jpg';
import Img7 from './7.jpg';
import Img8 from './8.jpg';
import Img9 from './9.jpg';
import Last from './f1.png';
import Last2 from './f2.png';

const omronSections = [
  {
    title: "Types of OMRON PLCs",
    content: "Compact PLCs: Small, modular controllers for limited space and simple control. Modular PLCs: Flexible, scalable for complex, large-scale applications. Advanced PLCs: High-end, feature-rich for networking, I/O, and real-time processing.",
    img: Img1,
    imgLeft: true,
  },
  {
    title: "OMRON PLC Programming",
    content: "Supports Ladder Logic (LD), Structured Text (ST), Function Block Diagram (FBD), Instruction List (IL), and Sequential Function Chart (SFC) for flexible and powerful programming.",
    img: Img2,
    imgLeft: false,
  },
  {
    title: "OMRON PLC Hardware Components",
    content: "CPU Unit, I/O Modules, Power Supply, Communication Modules, and Expansion Units provide robust, modular, and scalable hardware for any automation need.",
    img: Img3,
    imgLeft: true,
  },
  {
    title: "OMRON PLC Communication Protocols",
    content: "Ethernet/IP, Modbus/TCP, FINS, Profibus, Profinet, and DeviceNet ensure seamless integration with industrial networks and devices.",
    img: Img4,
    imgLeft: false,
  },
  {
    title: "OMRON PLC Software Tools",
    content: "CX-Programmer, CX-Designer, Sysmac Studio, and CX-One offer comprehensive environments for PLC, HMI, and motion control programming.",
    img: Img5,
    imgLeft: true,
  },
  {
    title: "OMRON PLC Features",
    content: "High-Speed Processing: Advanced PLCs offer high-speed processing for complex operations like motion control, robotics, and vision systems.\nNetworking and Connectivity: OMRON PLCs are designed for easy integration into industrial networks using Ethernet, fieldbus, and wireless protocols.\nModular Expandability: Modular PLCs allow users to expand I/O capacity, add specialized modules, or integrate various automation devices.\nRemote Access: Many OMRON PLCs support remote access and control via web-based platforms or through software like CX-Server.",
    img: Img6,
    imgLeft: false,
  },
  {
    title: "Applications of OMRON PLCs",
    content: "Manufacturing Automation: PLCs are used to control machinery like conveyor belts, robotic arms, assembly lines, and packaging systems.\nProcess Control: Used in chemical, oil, and gas industries to monitor and control processes such as mixing, heating, and fluid handling.\nBuilding Automation: Managing HVAC systems, lighting, and other critical systems in commercial buildings.\nAutomotive Industry: Used in robotics, welding, painting, and testing stations for automotive assembly.\nFood & Beverage: Ensuring efficient control over production lines, temperature control, and packaging processes.",
    img: Img7,
    imgLeft: true,
  },
  {
    title: "Advantages of OMRON PLCs",
    content: "Reliability: OMRON PLCs are known for their durability and reliability in harsh industrial environments.\nScalability: From small systems to large-scale operations, OMRON PLCs can be easily scaled up or down depending on the application.\nEase of Use: With user-friendly programming software and intuitive hardware design, OMRON PLCs are accessible to both beginners and advanced users.\nSupport & Documentation: OMRON provides comprehensive manuals, online support, and a large community of users for troubleshooting and advice.",
    img: Img8,
    imgLeft: false,
  },
  {
    title: "Troubleshooting and Maintenance",
    content: "Diagnostics: OMRON PLCs feature diagnostic tools for identifying system issues, including LED indicators and error codes.\nMaintenance: Regular maintenance of the PLC hardware and software is essential for long-term performance. This may include software updates, battery replacement, and cleaning of the physical components.",
    img: Img9,
    imgLeft: true,
  },
];

export default function Omron() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: 'ease-in-out',
      offset: 60,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-sky-100 min-h-screen py-10 px-2 md:px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-8 text-center tracking-tight drop-shadow-lg"
          data-aos="fade-down"
        >
          OMRON PLC Overview
        </h1>
        {omronSections.map((section, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 bg-white/95 rounded-3xl shadow-2xl p-8 border border-blue-100
              ${section.imgLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
              `}
            data-aos="fade-up"
            data-aos-delay={idx * 180}
          >
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src={section.img}
                alt={section.title}
                className="rounded-2xl shadow-lg object-cover object-center w-full h-56 md:h-64 transition-transform duration-500 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay={idx * 180 + 100}
              />
            </div>
            <div className="flex-1">
              <h2
                className="text-2xl md:text-3xl font-bold text-blue-700 mb-3 tracking-tight"
                data-aos="fade-right"
                data-aos-delay={idx * 180 + 80}
              >
                {section.title}
              </h2>
              {section.content.split('\n').map((line, i) => (
                <p
                  key={i}
                  className="text-gray-700 text-base md:text-lg mb-2 leading-relaxed"
                  data-aos="fade-left"
                  data-aos-delay={idx * 180 + 120 + i * 40}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-8">
          <img
            src={Last}
            alt="Omron PLC Example 1"
            className="w-full md:w-1/2 rounded-2xl shadow-xl object-cover object-center"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          />
          <img
            src={Last2}
            alt="Omron PLC Example 2"
            className="w-full md:w-1/2 rounded-2xl shadow-xl object-cover object-center"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          />
        </div>
        <div
          className="bg-white/95 rounded-2xl shadow-xl p-8 mt-10 border border-blue-100"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3">Conclusion</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            OMRON PLCs are highly versatile and powerful automation devices that serve a wide range of industries, from manufacturing and process control to building automation. Whether you are working with a compact or advanced modular PLC, understanding the basics of programming, hardware components, and network integration is key to successfully implementing OMRON PLC systems in your automation projects.
          </p>
        </div>
      </div>
    </div>
  );
}