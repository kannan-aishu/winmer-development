import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const deltaLines = [
  { type: "title", text: "Delta PLC Solutions" },
  { type: "section", text: "Advanced Modular PLC - AX-5 Series" },
  { type: "desc", text: "Delta’s Advanced IoT Controller AX-5 Series is suitable for production line equipment and capable of simultaneously controlling servo drives, AC motors, remote I/O modules, and other mechanical motion devices." },
  { type: "desc", text: "In addition to PLCopen standard motion control instructions, Delta's exclusive motion commands for servo drives and AC motors both provide an excellent single development environment." },
  { type: "desc", text: "The 12 mm ultra-thin I/O design minimizes cabinet size, while the independent I/O power supply simplifies wiring, delivering highly stable system operation and flexible I/O module expansion." },
  { type: "desc", text: "The AX-5 Series is equipped with user-friendly IoT functions, compatible with FTP and Type-C USB for convenient remote maintenance and on-site immediate programming and debugging, and helps equipment manufacturers reduce hardware, service costs, and development time." },
  { type: "list", text: "AX-5 Series Standard CPU" },
  { type: "list", text: "AX-5 Series Couplers" },
  { type: "list", text: "AX-5 Series Expansion Module" },
  { type: "section", text: "Hot Swappable Mid-range PLC - AH Series" },
  { type: "desc", text: "AH Series PLC provides automation solutions for high-level applications. The combination of modularized hardware structure, advanced functions, and the highly integrated software provides a system solution for process control applications." },
  { type: "desc", text: "In addition to various function blocks (FB), excellent price/performance, and an abundant selection of extension modules, AH Series PLC also provides multi-axis motion control via motion network, such as EtherCAT, to perform high-speed, high-precision machine control. The exceptional system expandability also greatly reduces the system cost for a broad range of applications." },
  { type: "list", text: "AH Series Standard CPU" },
  { type: "list", text: "AH Series Redundant CPU" },
  { type: "list", text: "AH Series Motion CPU" },
  { type: "list", text: "AH Series Expansion Module" },
  { type: "section", text: "Compact Modular Mid-range PLC - AS Series" },
  { type: "desc", text: "The Delta Compact Modular Mid-range PLC AS Series is a high performance multi-purpose controller designed for all kinds of automated equipment." },
  { type: "desc", text: "AS series standard CPU features Delta's self-developed 32-bit SoC CPUs for enhanced execution speed (40 k steps/ms) and supports up to 32 extension modules or up to 1,024 inputs/outputs." },
  { type: "desc", text: "It provides accurate positioning control for up to 8 axes via CANopen motion network and max. 6 axes via pulse control (200 kHz)." },
  { type: "desc", text: "AS series motion CPU features EtherCAT/CANopen motion control interface and multiple communication ports. It also offers motion control function blocks complying with international standards and synchronizes up to 16/24 real axes in one update cycle." },
  { type: "desc", text: "AS series controllers are widely used in diverse automated equipment such as packaging, printing, labeling, textile and pharmaceutical industries." },
  { type: "list", text: "AS Series Standard CPU" },
  { type: "list", text: "AS Series Motion CPU" },
  { type: "list", text: "AX-3 Series Motion CPU" },
  { type: "list", text: "AS/AX-3 Series Expansion Module" },
  { type: "section", text: "Programmable Logic Controllers - DVP Series" },
  { type: "desc", text: "Delta's DVP series programmable logic controllers offer high-speed, stable and highly reliable applications in all kinds of industrial automation machines." },
  { type: "desc", text: "In addition to fast logic operation, bountiful instructions and multiple function cards, the cost-effective DVP-PLC also supports various communication protocols, connecting Delta's AC motor drive, servo, human machine interface and temperature controller through the industrial network in to a complete “Delta Solution” for all users." },
  { type: "list", text: "DVP-ES3 Series" },
  { type: "list", text: "DVP-EX3 Series" },
  { type: "list", text: "DVP-ES2 Series" },
  { type: "list", text: "DVP-EC3 Series" },
  { type: "list", text: "DVP-EC5 Series" },
  { type: "list", text: "DVP-ES3/2 Series Expansion Module" },
];

export default function Delta () {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
      offset: 60,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-sky-100 min-h-screen py-10 px-4 flex items-center justify-center">
      <div className="max-w-7xl w-full bg-white/90 p-8  flex flex-col gap-2">
        {deltaLines.map((line, idx) =>
          line.type === "title" ? (
            <div
              key={idx}
              data-aos="fade-down"
              data-aos-delay={idx * 120}
              className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-2 text-center tracking-tight drop-shadow"
            >
              {line.text}
            </div>
          ) : line.type === "section" ? (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="text-2xl font-bold text-sky-700 mt-6 mb-2"
            >
              {line.text}
            </div>
          ) : line.type === "desc" ? (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="text-gray-700 text-base sm:text-lg"
            >
              {line.text}
            </div>
          ) : (
            <li
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="ml-6 text-gray-700 text-base sm:text-lg list-disc"
              style={{ listStyleType: "disc" }}
            >
              {line.text}
            </li>
          )
        )}
      </div>
    </div>
  );
}