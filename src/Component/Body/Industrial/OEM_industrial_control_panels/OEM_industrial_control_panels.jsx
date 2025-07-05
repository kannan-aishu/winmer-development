import React from 'react';
import Main from './technical-drawing.jpg';
import Mai from './main.jpg';

export default function OEM_industrial_control_panels() {
    return (
        <div className="w-full bg-gradient-to-br from-sky-50 to-white min-h-screen">
            {/* Top banner image */}
            <img src={Main} alt="" className="w-full max-h-72 object-cover rounded-b-2xl shadow" style={{ opacity: 0.96 }} />

            <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-8 bg-white/90 rounded-xl shadow-2xl -mt-16 relative z-10">
                <h1
                    className="text-4xl md:text-5xl font-bold text-[#2467aa] mb-10 text-center drop-shadow"
                    data-aos="fade-down"
                >
                    OEM Industrial Control Panels
                </h1>

                {/* Flex row for intro and image */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
                    <div className="w-full md:w-2/3">
                        <p className="text-lg mb-6" data-aos="fade-up">
                            Competitive pricing, on-schedule delivery and high quality are key factors in a successful product. When control panels are required as part of a product, the infrastructure and purchasing power to meet these factors can be onerous and capital intensive.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center" data-aos="fade-left" data-aos-delay="100">
                        <img
                            src={Mai}
                            alt="OEM Panel Example"
                            className="w-full max-w-xs rounded-xl shadow-lg border border-sky-100 object-cover"
                            style={{ opacity: 0.97 }}
                        />
                    </div>
                </div>

                <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="120">
                    The aesthetics and quality of a panel build-up reflect directly on the product and the company that produces it. Customers look for CSA, UL and ISO certifications. Everyone expects it to work; it also has to look good and cost less.
                </p>
                <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="180">
                    Contract manufacturing is the practice of choice for competitive companies. It enables them to focus resources and capital on moving a product in the market place where the return is greater.
                </p>

                <h2 className="text-2xl font-bold text-[#2467aa] mb-4 mt-10" data-aos="fade-right" data-aos-delay="250">
                    Control Panel for OEM Panels
                </h2>
                <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="300">
                    We are one of the leading suppliers and manufacturers of custom industrial electrical and instrumentation equipment in Western Canada, supplying a large variety of industries since 1977.
                </p>
                <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="350">
                    Our manufacturing capabilities are ISO 9001 registered and certified with CSA and UL for industrial control equipment including motor and drive controls.
                </p>
                <ul className="list-disc ml-8 mb-8 marker:text-[#2467aa] text-base" data-aos="fade-up" data-aos-delay="400">
                    <li>High quality fabrication</li>
                    <li>CSA and UL Certification</li>
                    <li>Generation of Layout and Electrical Drawings</li>
                    <li>Wire Markers & Tags for On-Site Installation</li>
                    <li>Testing and commissioning facilities</li>
                    <li>Manufacture / assembly for drop shipments</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#2467aa] mb-4 mt-10" data-aos="fade-right" data-aos-delay="500">
                    Considerable Experience
                </h2>
                <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="550">
                    Our production team consists of skilled wiremen and panel assemblers. All projects are carefully planned prior to fabrication enabling our production staff to provide superior quality workmanship on schedule at competitive prices.
                </p>
                <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="600">
                    Our engineering team has considerable experience in electrical controls and panel design. We can provide detailed layouts for panels or timely updates to your drawings.
                </p>
                <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="650">
                    When combined with our relationships with manufacturers of buildings and enclosures for a multitude of environments, we are well placed to meet the requirements of your most complex and demanding applications.
                </p>

                <h2 className="text-2xl font-bold text-[#2467aa] mb-4 mt-10" data-aos="fade-right" data-aos-delay="700">
                    OEM Panels Types
                </h2>
                <ul className="list-disc ml-8 mb-4 marker:text-[#2467aa] text-base" data-aos="fade-up" data-aos-delay="750">
                    <li>Control Panels</li>
                    <li>PLC Control Panels</li>
                    <li>VFD Panels</li>
                    <li>Marshalling Panels</li>
                    <li>Field Panels</li>
                </ul>
            </div>
        </div>
    );
}