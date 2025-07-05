import React from 'react';
import img1 from './1-1.svg'; // Replace with your actual image paths
import img2 from './2-1.svg';
import img3 from './3-1.svg';
import img4 from './4.webp';
import img5 from './5.webp';
import img6 from './6.webp';
import bannerImg from './main.png'; // Replace with your actual banner image path

const solutions = [
    {
        title: "Facility Maintenance Software",
        desc: "Monitor, Measure & Manage Your Facility Maintenance with CMMS. To Enhance Customer Service & Day-to-Day Operations.",
        img: img1,
        imgLeft: true,
    },
    {
        title: "Asset Maintenance Software",
        desc: "Extend the lifespan of your Asset by 20% with an improvement in Return on Assets with innomaint EAM. An Easier way to Monitor, Measure and Manage, all your maintenance activities.",
        img: img2,
        imgLeft: false,
    },
    {
        title: "Field Service Management Software",
        desc: "Customer Satisfaction Increases More Than 70% When Service Technician Resolves The Issue At First Time.",
        img: img3,
        imgLeft: true,
    },
    {
        title: "Covid-19 Screening Software",
        desc: "AI-based Face Mask Detection & Covid 19 Monitoring Solutions. Sail through the pandemic with our Covid-19 monitoring solution and people counting software.",
        img: img4,
        imgLeft: false,
    },
    {
        title: "Team Collaboration Software",
        desc: "Empower Your Workforce With Our Walkie Talkie Remote Service App That Unifies Varied Knowledge Into Quicker Communication & Best Services.",
        img: img5,
        imgLeft: true,
    },
    {
        title: "Visitor Management System",
        desc: "Our VMS can easily collaborate with CMMS facilitating effective interactions between various maintenance departments.",
        img: img6,
        imgLeft: false,
    },
];

export default function Solutions() {
    return (
        <div>
             {/* Top full-width banner image */}
            <div className="w-full mb-8">
                <img
                    src={bannerImg}
                    alt="Our Solutions Banner"
                    className="w-full h-64 md:h-96 object-cover object-center shadow-lg"
                />
            </div>
            <div className="w-full max-w-7xl mx-auto py-10 px-4 sm:px-8 text-gray-800 bg-white space-y-10">
           
            <h1 className="text-4xl font-bold text-[#2467aa] mb-8 text-center">Our Solutions</h1>
            <div className="space-y-12">
                {solutions.map((sol, idx) => (
                    <div
                        key={sol.title}
                        className={`flex flex-col md:flex-row items-center gap-8 ${sol.imgLeft ? '' : 'md:flex-row-reverse'}`}
                        data-aos="fade-up"
                        data-aos-delay={idx * 100}
                    >
                        <div className="w-full flex justify-center">
                            <img
                                src={sol.img}
                                alt={sol.title}
                                className="w-full max-w-lg object-cover"
                            />
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="text-2xl font-bold text-[#2467aa] mb-2">{sol.title}</h2>
                            <p className="text-lg">{sol.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}