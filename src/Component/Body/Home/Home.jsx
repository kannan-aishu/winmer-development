import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactTyped } from 'react-typed';
import Slider from './Slider/Slider';
import Img from './Img/Img';

export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });
    }, []);

    const inventoryFeatures = [
        {
            title: 'Real-Time Inventory Tracking',
            description: 'Track inventory live using tools like Zoho, QuickBooks Commerce, or SAP to avoid stockouts or overstocking.',
        },
        {
            title: 'Barcode and RFID Integration',
            description: 'Enable fast, automated inventory scanning with barcode or RFID to sync inventory movements instantly.',
        },
        {
            title: 'Automated Stock Replenishment',
            description: 'Automatically generate purchase orders when stock falls below minimum thresholds.',
        },
        {
            title: 'Integration with ERP Systems',
            description: 'Connect inventory systems with ERP platforms like Microsoft Dynamics or NetSuite for centralized control.',
        },
    ];

    return (
        <div className="bg-gradient-to-b from-gray-100 to-blue-50 min-h-screen font-sans">
            {/* Slider Section */}
            <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
                <Slider />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10" />
            </div>

            {/* Welcome Section */}
            <section className="bg-[#f4ecec] py-20 flex justify-center items-center">
                <div className="w-full max-w-6xl px-6 text-center md:text-left">
                    <h1
                        className="text-4xl sm:text-6xl md:text-7xl text-[#2467aa] font-extrabold mb-6 border-l-8 border-orange-600 pl-6 inline-block drop-shadow-lg"
                        style={{ letterSpacing: '1px' }}
                        data-aos="fade-right"
                    >
                        <ReactTyped
                            strings={[
                                'Welcome to <span class="text-black font-extrabold drop-shadow-lg">Winmer</span>'
                            ]}
                            typeSpeed={40}
                            backSpeed={25}
                            loop
                            smartBackspace
                            showCursor={false}
                        />
                    </h1>
                    <p
                        className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4 max-w-4xl mx-auto md:mx-0"
                        style={{ fontWeight: 500 }}
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        At <span className="font-semibold text-[#2467aa]">Winmer</span>, we specialize in
                        <span className="font-semibold text-[#2467aa]"> cutting-edge automation solutions</span>,
                        optimizing industrial operations globally with
                        <span className="font-semibold text-[#2467aa]"> customized services</span> and
                        <span className="font-semibold text-[#2467aa]"> innovative products</span>.
                    </p>
                </div>
            </section>

            {/* Product Images */}
            <div className="py-6" data-aos="fade-up">
                <Img />
            </div>

            {/* Inventory Section */}
            <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-6 sm:px-10">
                <div className="max-w-4xl mx-auto text-center md:text-left mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2467aa] mb-4 drop-shadow" data-aos="fade-right">
                        Digitally Manage Inventories
                    </h2>
                    <p className="text-gray-600 text-lg leading-8" data-aos="fade-left" data-aos-delay="100">
                        Implementing inventory management systems ensures real-time stock visibility, streamlined operations, and better cost control.
                    </p>
                </div>

                <ul className="space-y-8 max-w-4xl mx-auto">
                    {inventoryFeatures.map((feature, i) => (
                        <li
                            key={i}
                            className="bg-white rounded-2xl shadow-lg p-7 border-l-4 border-blue-300 hover:bg-blue-100/70 transition duration-300"
                            style={{
                                boxShadow: '0 6px 32px 0 rgba(36,103,170,0.07)',
                                transition: 'box-shadow 0.3s cubic-bezier(.4,2,.6,1)'
                            }}
                            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos-delay={100 * (i + 1)}
                        >
                            <p className="text-[#2467aa] font-bold text-lg mb-2">{feature.title}</p>
                            <p className="text-gray-700">{feature.description}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Work Progress Section */}
            <section className="py-16 px-6 sm:px-10">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2467aa] mb-4 drop-shadow" data-aos="fade-right">
                        Measure Work Progress
                    </h2>
                    <p className="text-gray-600 text-lg leading-8" data-aos="fade-left" data-aos-delay="100">
                        Use project management tools to monitor tasks, timelines, and employee performance with real-time dashboards.
                    </p>
                </div>
            </section>

            {/* Work Order Automation */}
            <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-6 sm:px-10">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2467aa] mb-4 drop-shadow" data-aos="fade-right">
                        Automate Work Orders
                    </h2>
                    <p className="text-gray-600 text-lg leading-8" data-aos="fade-left" data-aos-delay="100">
                        Implement a Work Order Management System (WOMS) to assign and track tasks efficiently, reducing delays and errors.
                    </p>
                </div>
            </section>
        </div>
    );
}
