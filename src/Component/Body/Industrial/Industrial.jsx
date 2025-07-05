import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for SPA navigation

// Import your images
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/black-healthcare-logo-white-background_1175265-1534.jpg';
import img6 from './img/6.webp';
import Main from './img/main.png';

const industries = [
  {
    title: "OEM INDUSTRIAL CONTROL PANELS",
    desc: "An OEM industrial control panel is designed to meet the specific needs of the customer or the equipment manufacturer.",
    img: img1,
    link: "/industries/oem-industrial-control-panels",
  },
  {
    title: "FOOD BEVERAGE INDUSTRIES",
    desc: "The food industry is a complex, global network of diverse businesses that supplies most of the food consumed by the world's population.",
    img: img2,
    link: "/industries/food-beverage",
  },
  {
    title: "POULTRY BREEDING FARMS",
    desc: "Poultry breeding farms play a critical role in the poultry industry as they ensure that there is a continuous supply of genetically superior poultry for meat and egg production.",
    img: img3,
    link: "/industries/poultry-breeding-farms",
  },
  {
    title: "CEMENT INDUSTRIES",
    desc: "The cement industry is a vital sector in the global economy, as cement is one of the most essential materials in construction.",
    img: img4,
    link: "/industries/cement",
  },
  {
    title: "HEALTH CARE INDUSTRIES",
    desc: "Shield critical health facilities from power outages and perform live tracking of moving assets.",
    img: img5,
    link: "/industries/health-care",
  },
  {
    title: "WATER TREATMENT PLANT",
    desc: "The water treatment process typically involves several stages, each designed to remove specific types of contaminants from the water.",
    img: img6,
    link: "/industries/water-treatment-plant",
  }
];

export default function Industrial() {
  return (
    <main>
      {/* Hero image section */}
      <section className="mb-8">
        <img
          src={Main}
          alt="Industry overview"
          className="w-full h-64 md:h-80 object-cover object-center shadow-lg rounded-lg"
        />
      </section>

      {/* Industry selection */}
      <section className="max-w-7xl mx-auto py-10 px-4 sm:px-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2467aa] mb-12 text-center tracking-wide drop-shadow">
          Select an Industry
        </h1>

        <div className="grid gap-10 md:grid-cols-3">
          {industries.map(({ title, desc, img, link }, idx) => (
            <Link
              to={link}
              key={title}
              className="group p-6 rounded-2xl shadow bg-gradient-to-b from-[#f5faff] to-white flex flex-col items-center border border-[#e3eaf6] transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#2467aa]"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-32 h-32 mb-4 flex items-center justify-center bg-white rounded-xl shadow group-hover:shadow-lg transition-all duration-300">
                <img
                  src={img}
                  alt={`${title} icon`}
                  className="w-24 h-24 object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-[#2467aa] mb-2 text-center group-hover:underline">
                {title}
              </h2>
              <p className="text-base md:text-lg text-center text-gray-700">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
