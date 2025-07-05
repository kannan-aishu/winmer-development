import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.webp';
import img5 from './5.png';
import img6 from './download.jpg';
import img7 from './7.jpg';
import img8 from './9.jpg';
import img9 from './10.jpg'; 
import img10 from './0.jpg';

const data = [
    { path: "/automated", src: img1, label: "Automated Control Panels" },
    { path: "/Special Purpose Machineries", src: img2, label: "Special Purpose Machineries" },
    { path: "/VisionBasedSystems", src: img3, label: "Vision Based Automation" },
    { path: "/Customized_robotic_system", src: img4, label: "Customized Robotic System" },
    { path: "/Powder_coating_plant", src: img5, label: "Powder Coating Plant" },
    { path: "/water_treatment_plant", src: img6, label: "Water Treatment Plant" },
    { path: "/Health_care_industrise", src: img7, label: "Health Care Industries" },
    { path: "/Poultry_Breeding_Farms", src: img8, label: "Poultry Breeding Farms" },
    { path: "/OEM_industrial_control_panels", src: img9, label: "OEM Industrial Control Panels" },
    { path: "/Food_Beverage_industries", src: img10, label: "Food & Beverage Industries" },
];

const ImageSection = ({ items, sectionIndex }) => (
    <section
        className="image-section flex flex-col lg:flex-row gap-10 bg-white/90 p-8 lg:p-12 rounded-3xl shadow-2xl border border-blue-100"
        data-aos="fade-up"
        data-aos-delay={sectionIndex * 200}
    >
        {/* Right Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
            {items.slice(1).map(({ path, src, label }, index) => (
                <Link
                    key={index}
                    to={path}
                    className="card group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl border border-blue-100 bg-white transition-all duration-300"
                    data-aos="zoom-in-up"
                    data-aos-delay={100 * (index + 1)}
                >
                    <img
                        src={src}
                        alt={label}
                        className="w-full h-44 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="p-4 text-center text-blue-800 font-semibold group-hover:text-orange-600 text-base sm:text-lg tracking-wide transition-colors duration-200">
                        {label}
                    </div>
                </Link>
            ))}
        </div>

        {/* Featured Image */}
        <Link
            to={items[0].path}
            className="featured flex-1 group overflow-hidden rounded-2xl relative shadow-xl border border-blue-100 bg-gradient-to-br from-blue-100 via-white to-blue-200"
            data-aos="fade-left"
            data-aos-delay="400"
        >
            <img
                src={items[0].src}
                alt={items[0].label}
                className="w-full h-full max-h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white text-lg font-bold p-6 backdrop-blur-sm tracking-wide">
                {items[0].label}
            </div>
        </Link>
    </section>
);

export default function Img() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });
    }, []);

    const firstFive = data.slice(0, 5);
    const secondFive = data.slice(5, 10);

    return (
        <div className="p-6 space-y-20 bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen">
            <h2
                className="text-4xl font-extrabold text-center text-[#2467aa] mb-8 tracking-tight drop-shadow"
                data-aos="fade-down"
            >
                Our Solutions
            </h2>

            {/* Section 1 */}
            <ImageSection items={firstFive} sectionIndex={0} />

            {/* Section 2 */}
            <ImageSection items={secondFive} sectionIndex={1} />
        </div>
    );
}
