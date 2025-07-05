import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Main from './1.webp';
import Img from './2.webp';

export default function Full_automated_water_treatment_plant() {
    useEffect(() => {
        AOS.init({ duration: 700, once: false, easing: "ease-in-out" });
    }, []);

    return (
        <div className="w-full mx-auto py-10 px-4 sm:px-8 text-gray-800 bg-white rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold text-[#2467aa] mb-8 text-center" data-aos="fade-down">
                WATER TREATMENT PLANT
            </h1>
            <div className="flex justify-center mb-8" data-aos="zoom-in">
                <img
                    src={Main}
                    alt="Water Treatment Plant"
                    className="w-full max-w-4xl object-cover rounded-lg shadow-lg"
                />
            </div>
            {/* Image left, text right */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8" data-aos="fade-up">
                <div className="w-full md:w-1/3 flex justify-center">
                    <img
                        src={Img}
                        alt="Automated Water Treatment"
                        className="w-full max-w-sm rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="w-full md:w-2/3">
                    <p className="mb-0 text-lg font-semibold italic tracking-wide text-center md:text-left">
                        A fully automated water treatment plant treats water for consumption, industrial use, or other purposes through advanced automated processes. The goal is to purify water by removing contaminants such as bacteria, viruses, sediments, and chemical pollutants while ensuring efficiency, safety, and minimal human intervention.
                    </p>
                </div>
            </div>

            <div className="w-full max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-[#2467aa] mb-4" data-aos="fade-up">Main Stages of Automated Water Treatment</h2>
                <ul className="list-disc ml-6 space-y-2 text-lg marker:text-[#2467aa]">
                    {[
                        { text: <><b>Water Intake and Screening:</b> Automated intake systems regulate flow, remove large debris, and adjust water intake based on demand.</> },
                        { text: <><b>Coagulation and Flocculation:</b> Automated chemical dosing and mixing clump particles into flocs for easier removal.</> },
                        { text: <><b>Sedimentation:</b> Clarification tanks allow flocs to settle, with automated monitoring and sludge removal.</> },
                        { text: <><b>Filtration:</b> Sand, carbon, or membrane filters remove fine particles and microorganisms. Automated backwashing and online monitoring maintain filter efficiency.</> },
                        { text: <><b>Disinfection:</b> Automated dosing of chlorine or UV/ozone treatment ensures microbial safety, with real-time adjustment.</> },
                        { text: <><b>pH Adjustment and Final Treatment:</b> Automated pH control and final polishing ensure water meets quality standards.</> },
                        { text: <><b>Storage and Distribution:</b> Sensors and automated pumps maintain supply and pressure, with remote monitoring via SCADA.</> },
                        { text: <><b>Wastewater Treatment and Sludge Management:</b> Automated systems handle sludge thickening, dewatering, and disposal.</> },
                        { text: <><b>Control Systems and Automation:</b> SCADA systems collect data, control equipment, enable predictive maintenance, and optimize processes.</> },
                        { text: <><b>Remote Monitoring and Management:</b> Real-time data access, automated alerts, and cloud-based control for efficient operation.</> },
                    ].map((item, idx) => (
                        <li
                            key={idx}
                            data-aos="fade-up"
                            data-aos-delay={100 + idx * 100}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>

                <h2 className="text-2xl font-bold text-[#2467aa] mt-10 mb-4" data-aos="fade-up">Benefits of Fully Automated Water Treatment Plants</h2>
                <ul className="list-disc ml-6 space-y-2 text-lg marker:text-[#2467aa]">
                    {[
                        "Reduced human error and improved safety",
                        "Optimized energy and chemical usage for cost savings",
                        "Continuous 24/7 water quality monitoring",
                        "Faster response to changes or issues",
                        "Data-driven process improvements and compliance"
                    ].map((text, idx) => (
                        <li
                            key={idx}
                            data-aos="fade-up"
                            data-aos-delay={200 + idx * 100}
                        >
                            {text}
                        </li>
                    ))}
                </ul>

                <h2 className="text-2xl font-bold text-[#2467aa] mt-10 mb-4" data-aos="fade-up">Conclusion</h2>
                <p className="text-lg" data-aos="fade-up" data-aos-delay="300">
                    A fully automated water treatment plant uses advanced technologies and control systems to efficiently treat water while minimizing human intervention. The integration of sensors, automated chemical dosing, filtration, disinfection, and remote monitoring ensures a consistent, reliable, and cost-effective water treatment process—benefiting both the environment and plant operators.
                </p>
            </div>
        </div>
    );
}