import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import liquidPaintShopImg from './bg-pheader.jpg';

// Example image imports for the grid (replace with your actual images)
import img1 from '../img/Special-Milling-machine-qyoa3xp5n88zg3czhwz9geke4wgq93jk1o0v21u6qi.webp';
import img2 from '../img/Special-Milling-machine-qyoa3xp5n88zg3czhwz9geke4wgq93jk1o0v21u6qi.webp';
import img3 from '../img/Special-Milling-machine-qyoa3xp5n88zg3czhwz9geke4wgq93jk1o0v21u6qi.webp';
import img4 from '../img/Special-Milling-machine-qyoa3xp5n88zg3czhwz9geke4wgq93jk1o0v21u6qi.webp';
import img5 from '../img/Special-Milling-machine-qyoa3xp5n88zg3czhwz9geke4wgq93jk1o0v21u6qi.webp';
import img6 from '../img/Special-Milling-machine-qyoa3xp5n88zg3czhwz9geke4wgq93jk1o0v21u6qi.webp';
import img7 from '../img/Special-Milling-machine-qyoa3xp5n88zg3czhwz9geke4wgq93jk1o0v21u6qi.webp';
import img8 from '../img/Special-Milling-machine-qyoa3xp5n88zg3czhwz9geke4wgq93jk1o0v21u6qi.webp';
import img9 from '../img/Special-Milling-machine-qyoa3xp5n88zg3czhwz9geke4wgq93jk1o0v21u6qi.webp';

export default function Liqud_paint_shop() {
    useEffect(() => {
        AOS.init({ duration: 700, once: false, easing: "ease-in-out" });
    }, []);

    return (
        <div className="w-full py-10 text-gray-800 bg-white shadow-lg">
            {/* Top centered image with styled caption */}
            <div className="flex flex-col items-center">
                <img
                    src={liquidPaintShopImg}
                    alt="Liquid Paint Shop"
                    className="w-full max-w-full object-cover object-center shadow-xl border-[#2467aa]/10"
                />
                <p className="mt-4 text-lg text-center text-[#2467aa] font-semibold italic tracking-wide">
                    High-performance Liquid Paint Shop for industrial finishing solutions.
                </p>
            </div>
            <div className="w-full mx-auto text-center flex flex-col items-center">
                <h1 className="text-4xl font-bold text-[#2467aa] mb-8 text-center drop-shadow">
                    Liquid Paint Shop
                </h1>
                <ul className="list-disc text-left space-y-4 text-lg max-w-xl mx-auto marker:text-[#2467aa]">
                    <li><b>PLC Controlled PT Line with 7 Stage Cleaning</b></li>
                    <li><b>Fully Conveyorized</b></li>
                    <li><b>Tag Rack Chamber:</b> 7ft × 5ft × 10ft, Fully Pressurised</li>
                    <li>
                        <b>3 Paint Booths (7ft × 5ft × 10ft, Fully Pressurised):</b>
                        <ul className="list-disc ml-8 space-y-1">
                            <li>Primer Chamber</li>
                            <li>Base Coat Chamber</li>
                            <li>Top Coat Chamber</li>
                        </ul>
                    </li>
                    <li><b>3 Flash Off Zones</b></li>
                    <li><b>Camel Back Oven</b></li>
                    <li><b>Conveyor Size:</b> 230 feet with 115 hangers</li>
                    <li><b>Capacity:</b> 15,000 small pieces per day</li>
                    <li><b>Hanger Load:</b> 70–80 kgs</li>
                </ul>
            </div>
            {/* Responsive 3x3 image grid with scroll animation */}
            <div className="mt-12 px-2">
                <h2 className="text-2xl font-bold text-[#2467aa] mb-6 text-center">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map((img, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center border border-[#2467aa]/10"
                            data-aos="zoom-in"
                            data-aos-delay={idx * 100}
                        >
                            <div className="w-full h-48 overflow-hidden group">
                                <img
                                    src={img}
                                    alt={`Liquid Paint ${idx + 1}`}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}