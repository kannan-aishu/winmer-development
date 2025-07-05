import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import platingImg from "./continuous-tube-plating_header-1536x1152.webp"; // Replace with your actual image path
import Main from './slide-5.jpg'

export default function Plating_Plant() {
    useEffect(() => {
        AOS.init({ duration: 700, once: false, easing: "ease-in-out" });
    }, []);

    return (
        <div className="w-full mx-auto py-0 text-gray-800 bg-white rounded-xl shadow-lg">
            {/* Top full-width image with scroll animation */}
            <div className="w-full mb-10" data-aos="fade-down">
                <img
                    src={Main}
                    alt="Plating Plant"
                    className="w-full h-72 md:h-96 object-cover object-center shadow-xl"
                />
            </div>
            {/* Intro section with image left, text right */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8" data-aos="fade-up">
                <div className="w-full md:w-[30%] flex justify-center">
                    <img
                        src={platingImg}
                        alt="Plating Plant"
                        className="w-full max-w-md rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-110"
                    />
                </div>
                <div className="w-full md:w-2/3">
                    <p className="text-lg font-semibold italic tracking-wide text-center md:text-left mb-0">
                        <span className="font-semibold">At Winmer</span>, our Plating Plants are designed to provide fully automated solutions for various industrial plating processes, ensuring precise, durable, and high-quality surface treatments. Our plating systems are engineered to meet the rigorous demands of industries such as automotive, electronics, aerospace, and more, delivering consistent results with enhanced productivity and reduced costs.
                    </p>
                </div>
            </div>

            <div className="w-[90%] mx-auto flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold text-[#2467aa] mb-4" data-aos="fade-up">Key Features</h2>
                <ul className="list-disc space-y-2 text-lg marker:text-[#2467aa] w-full max-w-4xl mx-auto text-left" data-aos="fade-up" data-aos-delay="100">
                    <li className="pl-2"><b>Precision Control:</b> Automated plating systems offer precise control over plating thickness and uniformity, ensuring consistent results for every batch.</li>
                    <li className="pl-2"><b>Efficiency:</b> Designed to minimize downtime, our plating plants maximize production throughput while maintaining high-quality standards.</li>
                    <li className="pl-2"><b>Environmentally Friendly:</b> Built to optimize chemical usage, reduce waste, and comply with environmental regulations, promoting a greener production process.</li>
                    <li className="pl-2"><b>Customizable Solutions:</b> Tailor-made plating solutions for various industries, suitable for both small batches and large-scale production.</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#2467aa] mt-10 mb-4" data-aos="fade-up">Applications</h2>
                <ul className="list-disc space-y-2 text-lg marker:text-[#2467aa] w-full max-w-4xl mx-auto text-left" data-aos="fade-up" data-aos-delay="200">
                    <li className="pl-2"><b>Automotive Industry:</b> Plating plants for metal parts used in automotive manufacturing, ensuring durability and resistance to wear and corrosion.</li>
                    <li className="pl-2"><b>Electronics Industry:</b> Precision plating for electronic components, enhancing their functionality and lifespan.</li>
                    <li className="pl-2"><b>Aerospace Industry:</b> High-quality plating systems for aerospace parts, ensuring the highest standards for safety, durability, and performance.</li>
                    <li className="pl-2"><b>Other Industries:</b> Plating solutions for a wide range of applications in sectors such as consumer goods, industrial machinery, and more.</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#2467aa] mt-10 mb-4" data-aos="fade-up">Benefits of Winmer's Plating Plants</h2>
                <ul className="list-disc space-y-2 text-lg marker:text-[#2467aa] w-full max-w-4xl mx-auto text-left" data-aos="fade-up" data-aos-delay="300">
                    <li className="pl-2"><b>Advanced Automation:</b> Fully automated processes reduce labor costs and human error, ensuring higher productivity and consistency.</li>
                    <li className="pl-2"><b>Cost-Effective:</b> Optimized energy and material usage help reduce operational costs while delivering high-quality results.</li>
                    <li className="pl-2"><b>Quality Assurance:</b> Systems built to meet the highest industry standards and certifications, including ISO 9001, CE, and RoHS.</li>
                    <li className="pl-2"><b>Real-Time Monitoring:</b> Integrated systems enable real-time monitoring and control for optimal efficiency.</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#2467aa] mt-10 mb-4" data-aos="fade-up">Why Choose Winmer’s Plating Plants?</h2>
                <p className="text-lg max-w-4xl mx-auto mb-20" data-aos="fade-up" data-aos-delay="400">
                    At Winmer, we are committed to providing reliable, innovative, and customized automation solutions. Our Plating Plants are designed to streamline your plating processes, reduce waste, and improve the overall quality and efficiency of your production line. Whether you’re plating small components or large industrial parts, Winmer’s technology ensures consistent, high-quality results every time.
                </p>
            </div>
        </div>
    );
}