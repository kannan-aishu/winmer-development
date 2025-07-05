import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from "react-icons/fa";

// Example images (replace with your actual image imports)
import PanelImg from './img/Screenshot-32-r1vtu0139qsrdx1bapea3zwmf3gfgdx4fo5warxaje.png';
import SPMImg from './img/Special-Milling-machine-qyoa3xp5n88zg3czhwz9geke4wgq93jk1o0v21u6qi.webp';
import VisionImg from './img/VisionBased2-1-768x461-1-r1vu5hm2suixacck7o64l3jfsmtxj7j0oj7jgiw2hm.jpg';
import RobotImg from './img/1-r25nq2v6l70867d06oaae2zfeh89p55e17fnue2zkq.jpg';
import PowderImg from './img/Powder-Coating-Plant-Layout-r25ns38r7frb06fvg1kk82px55bj5u4pz5o1sp3o9m.jpg';

const products = [
    {
        title: "Automation Control Panels",
        img: PanelImg,
        desc: "Automation control panels may be tailored for different uses, from controlling simple machinery to overseeing complex, multi-faceted industrial processes. Automation control panels are used to manage, monitor, and control industrial automation systems. These panels are essential in industries like manufacturing, energy, and process control, allowing operators to easily oversee complex systems, adjust settings, and perform diagnostics. They can be customized to meet specific operational needs.",
        link: "#",
    },
    {
        title: "Special Purpose Machines",
        img: SPMImg,
        desc: "SPMs are tailor-made for specific tasks, processes, or production lines. Unlike general-purpose machines, they aren't intended for a wide range of uses. Special Purpose Machines (SPMs) are machines specifically designed and built to perform a unique, specialized function or task that is not typically covered by general-purpose machines. These machines are used in industries where mass production or highly specific tasks need automation, precision, and efficiency.",
        link: "#",
    },
    {
        title: "Vision Based Systems",
        img: VisionImg,
        desc: "Vision-based systems help self-driving cars navigate, detect obstacles, and understand their surroundings through cameras and sensors. Vision-based systems refer to technologies that use visual data, typically captured by cameras or other imaging sensors, to process and understand the environment. These systems can be designed for various applications, ranging from industrial automation to healthcare, security, and autonomous vehicles.",
        link: "#",
    },
    {
        title: "Customized Robotic Automation",
        img: RobotImg,
        desc: "Customized robotic automation refers to the design, development, and implementation of robotic systems tailored to meet specific needs or processes within an organization. Unlike standard, off-the-shelf robotic systems, customized robotic automation is fine-tuned to address unique challenges, optimize efficiency, and improve the overall performance of a particular industry or task. The customized robotic system should seamlessly integrate with the existing machines, software, and infrastructure.",
        link: "#",
    },
    {
        title: "Powder Coating Plant",
        img: PowderImg,
        desc: "A powder coating plant is a manufacturing facility dedicated to applying a dry powder coating to metal or other material surfaces. Unlike traditional liquid painting, powder coating uses finely ground particles of pigment and resin that are applied electrostatically and then cured under heat to form a hard, durable finish. This method is widely used in industries like automotive, manufacturing, and construction due to its superior finish and environmental benefits.",
        link: "#",
    },
];

export default function Products() {
    useEffect(() => {
        AOS.init({ duration: 900, once: false, easing: 'ease-in-out' });
    }, []);

    return (
        <div className="py-12 px-2 sm:px-4 max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2467aa] mb-10 text-center tracking-tight drop-shadow">Our Products</h1>
            <div className="flex flex-col gap-12">
                {products.map((product, idx) => (
                    <div
                        key={idx}
                        className={`bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-blue-100 ${
                            idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                        }`}
                        data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                        data-aos-delay={100 * idx}
                        data-aos-duration="900"
                    >
                        <img
                            src={product.img}
                            alt={product.title}
                            className="w-full md:w-1/2 h-72 md:h-[32rem] object-cover transition-transform duration-500 hover:scale-105"
                            data-aos="zoom-in"
                            data-aos-delay={100 * idx + 100}
                            data-aos-duration="900"
                        />
                        <div
                            className="p-8 flex flex-col justify-between w-full bg-gradient-to-br from-white via-blue-50 to-blue-100"
                            data-aos="fade-up"
                            data-aos-delay={100 * idx + 200}
                            data-aos-duration="900"
                        >
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#2467aa] mb-3 tracking-tight">{product.title}</h2>
                                <p className="text-gray-700 mb-6 leading-relaxed">{product.desc}</p>
                            </div>
                            <a
                                href={product.link}
                                className="inline-flex items-center gap-2 self-start mt-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <FaArrowRight className="text-lg" />
                                READ MORE
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}