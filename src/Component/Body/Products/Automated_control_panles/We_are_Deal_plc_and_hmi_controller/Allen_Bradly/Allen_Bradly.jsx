import React, { useEffect } from 'react';
import Img1 from './1.webp'
import Img2 from './2.webp'
import Img3 from './3.webp'
import Img4 from './4.webp'
import Img5 from './5.webp'
import Img6 from './6.webp'
import Main from './main.jpg'
import Last from './fo.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

const cardImages = [
  Img1, Img2, Img3, Img4, Img5, Img6
];

const cardData = [
  {
    title: "Achieve High Availability Safety While Delivering Continuous Operations with Logix SIS",
    img: cardImages[0],
    desc: "Logix SIS is a revolutionary safety instrumented system that helps simplify complexities and maximize productivity in your operations. This Integrated solution seamlessly combines safety and process control on a common platform, streamlining engineering, reducing downtime and optimizing efficiency. Achieve the highest"
  },
  {
    title: "Redefine Machine Performance Using a Faster, Smarter and More Flexible Motion Solution",
    img: cardImages[1],
    desc: "Unlock a smarter future using electromagnetic propulsion to move products faster, reduce bottlenecks and increase the profitability of short and long production runs. Each carrier in the ITRAK 5750 Intelligent Track System operates independently and is seamlessly managed software."
  },
  {
    title: "Increase Productivity with ASEM 6300P-EW1 Atom Class Panel PC",
    img: cardImages[2],
    desc: "Providing a lightweight, fanless design, the ASEM™ 6300P-EW1 panel PC is a cost-effective entry-level industrial PC that is available in three hardware configurations to meet your unique requirements. Bezel and touch screen options for this atom class PC include an aluminum or stainless-steel frame, aluminum TrueFlat front face with resistive touch or a glass PCAP screen with gesture support."
  },
  {
    title: "Elevate Your HMI With ASEM 6300B-EW1 Atom Class Box PC",
    img: cardImages[3],
    desc: "Discover an HMI solution that is easily configured to meet the needs of your unique applications. Ideal for lightweight HMI, edge processing and centrally administered thin client architectures. The ASEM™ 6300B-EW1 Box PC can be paired with Factory Talk View SE or FactoryTalk® Optix™ software to provide the optimal HMI experience."
  },
  {
    title: "Wireless Interfaces Bring New Edge to Stratix® 4300 Wireless Router",
    img: cardImages[4],
    desc: "OEMs and customers will have additional flexibility for connectivity with the Stratix 4300 wireless router. The addition of Wi-Fi and LTE (cellular) options can help reduce network downtime and Improve the ease of maintenance. As a dedicated secure platform for the Factory Talk® Remote Access™ solution, the Stratix 4300 router provides increased visibility across your plant with or without a physical Ethernet connection."
  },
  {
    title: "Enable High Availability Safety for Industrial Applications",
    img: cardImages[5],
    desc: "With expanded capabilities such as concurrent communications, the FLEX 5000 EtherNet/IP™ adapters can help manufacturers maintain optimal operational performance and enable a more resilient industrial system. This latest FLEX 5000 enhancement supports the new Logix SIS solution to deliver high availability safety up to SIL 3 for process and hybrid applications. Minimize downtime risk and maximize productivity with the improved FLEX 5000 solution."
  }
];

export default function Allen_Bradly() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: 'ease-in-out',
      offset: 60,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-sky-100 min-h-screen pb-10">
      <img
        src={Main}
        alt=""
        className="mb-10 w-full max-h-72 object-cover object-center  "
        data-aos="fade-down"
      />
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-2 text-center tracking-tight drop-shadow"
          data-aos="fade-down"
        >
          Allen‑Bradley Hardware
        </h1>
        <p
          className="text-gray-700 text-base sm:text-lg mb-8 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Allen‑Bradley components, integrated control and information solutions are built for demanding industrial applications. We integrate control and information across the enterprise to make you as productive as possible.
        </p>
        <h2
          className="text-2xl font-bold text-sky-700 mb-6 text-center"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          New Product Spotlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg flex flex-col items-center p-6 hover:shadow-2xl transition-shadow duration-300"
              data-aos="zoom-in-up"
              data-aos-delay={300 + idx * 100}
            >
              <img src={card.img} alt={card.title} className="w-28 h-28 object-contain mb-4" />
              <h3 className="text-lg font-semibold text-blue-700 mb-2 text-center">{card.title}</h3>
              <p className="text-gray-600 text-sm text-center">{card.desc}</p>
            </div>
          ))}
        </div>
        {/* Automation Foundation Section */}
        <div
          className="flex flex-col md:flex-row items-center gap-8 bg-white/90 rounded-2xl shadow-xl p-6"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <img
            src={Last}
            alt="Allen-Bradley Automation"
            className="w-full md:w-1/3 rounded-xl shadow-md object-cover object-center"
            data-aos="zoom-in"
            data-aos-delay="1000"
          />
          <div className="flex-1" data-aos="fade-left" data-aos-delay="1100">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Automation is our foundation</h2>
            <p className="text-gray-700 text-base sm:text-lg mb-2">
              We are dedicated innovators delivering smarter, connected solutions to the world around us. Our future is propelled by our long legacy of creating Allen‑Bradley integrated control and information solutions that make you as productive as possible.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-2">
              We take what’s possible and make it a reality. That’s what drives us, because automation is a catalyst for evolving our world. It makes us more intelligent, efficient and connected.
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              Together, we’re forging the path of the industrial transformation, exploring new technologies and developing digital solutions for a Connected Enterprise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}