import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Example image imports (replace with your actual image paths)
import img1 from "../img/1-r25nq2v6l70867d06oaae2zfeh89p55e17fnue2zkq.jpg";
import img2 from "../img/1-r25nq2v6l70867d06oaae2zfeh89p55e17fnue2zkq.jpg";
import img3 from "../img/1-r25nq2v6l70867d06oaae2zfeh89p55e17fnue2zkq.jpg";
import img4 from "../img/1-r25nq2v6l70867d06oaae2zfeh89p55e17fnue2zkq.jpg";
import img5 from "../img/1-r25nq2v6l70867d06oaae2zfeh89p55e17fnue2zkq.jpg";
import img6 from "../img/1-r25nq2v6l70867d06oaae2zfeh89p55e17fnue2zkq.jpg";
import img7 from "../img/1-r25nq2v6l70867d06oaae2zfeh89p55e17fnue2zkq.jpg";

function AutoSlider() {
    const images = [img1, img2, img3, img4, img5, img6, img7];
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 2200);
        return () => clearInterval(timer);
    }, [images.length]);

    // Dot click handler
    const goToSlide = (idx) => setCurrent(idx);

    return (
        <div className="w-full flex justify-center items-center">
            <div className="relative w-full max-w-xl h-[28rem] rounded-xl overflow-hidden shadow-lg group">
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Vision Slide ${idx + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700
                            ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}
                            group-hover:scale-110 transition-transform duration-500`}
                        style={{ borderRadius: "1rem" }}
                    />
                ))}
                {/* Numbered dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`flex items-center justify-center w-7 h-7 rounded-full border-2 border-[#2467aa] focus:outline-none transition-all duration-200
                                ${idx === current ? "bg-[#2467aa] text-white scale-110 shadow" : "bg-white text-[#2467aa] opacity-80"}`}
                            aria-label={`Go to slide ${idx + 1}`}
                            style={{ cursor: "pointer", fontWeight: "bold", fontSize: "1rem" }}
                        >
                            {idx + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function VisionBasedSystems() {
    React.useEffect(() => {
        AOS.init({ duration: 900, once: false, easing: "ease-in-out", mirror: true });
    }, []);

    return (
        <div className="w-[80%] mx-auto py-10 px-4 sm:px-8 text-gray-800">
             <h1 className="text-3xl sm:text-4xl font-bold text-[#2467aa] mb-6" data-aos="fade-down">
                What Are Vision Based Systems?
            </h1>
            <p className="mb-6 text-lg" data-aos="fade-up">
                Vision-based systems are computer-based technologies that simulate human vision to perform various tasks. These systems use cameras and software to capture and analyze visual information. They are commonly used in industrial applications for quality assurance, part selection, and defect detection.
            </p>
            {/* --- Flex row: Slider | Definition and Importance --- */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                <div className="w-full md:w-1/2 flex-shrink-0">
                    <AutoSlider />
                </div>
                <div className="w-full md:w-1/2" data-aos="fade-left">
                    <h2 className="text-2xl font-semibold text-[#2467aa] mb-4">
                        Definition and Importance
                    </h2>
                    <p className="mb-6 text-lg">
                        Vision-based systems, also known as machine vision systems, use cameras and image processing algorithms to perform tasks requiring visual inspection and analysis. These systems are crucial in modern manufacturing and automation, enabling machines to interpret visual data.
                    </p>
                    <p className="mb-6 text-lg">
                        Machine vision systems include cameras, lighting, processing units, and software. Cameras capture images, while lighting ensures clarity. Processing units and software analyze these images to detect patterns, defects, and dimensions.
                    </p>
                    <p className="mb-6 text-lg">
                        The importance of vision-based systems lies in their ability to enhance efficiency, accuracy, and safety. They automate visual inspections, reducing the need for manual checks and increasing production speed and product quality. These systems improve safety by detecting hazards and ensuring products meet safety standards. In autonomous vehicles, they navigate and avoid obstacles, ensuring safety.
                    </p>
                </div>
            </div>

            {/* --- Rest of your content --- */}
           
            <p className="mb-6 text-lg" data-aos="fade-up" data-aos-delay="100">
                In an industrial setting, vision-based systems can inspect products on a production line, ensuring they meet quality standards. They can also sort items, identify defects, and guide robotic arms for precise operations. By mimicking human vision, these systems enhance efficiency and accuracy in manufacturing processes, making them essential tools for modern industries.
            </p>
            <h2 className="text-2xl font-semibold text-[#2467aa] mb-4" data-aos="fade-right">
                Types of Vision-Based Systems
            </h2>
            <ul className="mb-6 space-y-4">
                <li data-aos="fade-up">
                    <b>1D Systems:</b> Use linear cameras to inspect continuous materials, such as textiles, paper, and metal sheets. Ideal for detecting defects in long, continuous surfaces.
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                    <b>2D Systems:</b> The most common type, using area cameras to capture two-dimensional images. Used for defect detection, alignment, and dimension verification in manufacturing.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                    <b>3D Systems:</b> Provide depth information using stereo vision, structured light, or laser triangulation. Essential for detailed inspection and measurement of complex objects.
                </li>
            </ul>
            <h2 className="text-2xl font-semibold text-[#2467aa] mb-4" data-aos="fade-right">
                Key Components and Technologies
            </h2>
            <ul className="mb-6 space-y-4">
                <li data-aos="fade-up">
                    <b>Cameras:</b> Capture images of objects or scenes. The quality and type of camera impact detection and measurement accuracy.
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                    <b>Lighting:</b> Ensures images are clear and consistent. Techniques like backlighting and ring lighting highlight defects and improve image quality.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                    <b>Image Processing Software:</b> Analyzes images using algorithms for feature detection, pattern recognition, and decision-making. Advanced software uses machine learning for improved performance.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                    <b>Specialized Sensors:</b> Infrared, laser, and depth sensors provide additional data for analyzing complex objects and environments.
                </li>
            </ul>
            <p className="mb-6 text-lg" data-aos="fade-left">
                Technologies like machine learning and deep learning enable vision-based systems to adapt and learn from new data, making them more versatile and robust.
            </p>
            <h2 className="text-2xl font-semibold text-[#2467aa] mb-4" data-aos="fade-right">
                Applications in Various Industries
            </h2>
            <ul className="mb-6 space-y-4">
                <li data-aos="fade-up">
                    <b>Manufacturing:</b> Used for quality control, defect detection, and dimension measurement.
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                    <b>Automotive:</b> Powers autonomous driving and ADAS by identifying obstacles, road signs, and vehicles.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                    <b>Healthcare:</b> Assists in diagnostics and surgery by providing detailed imagery and detecting anomalies.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                    <b>Retail and Logistics:</b> Streamlines inventory management and automated sorting in warehouses.
                </li>
            </ul>
            <h2 className="text-2xl font-semibold text-[#2467aa] mb-4" data-aos="fade-right">
                Future Trends
            </h2>
            <p className="mb-6 text-lg" data-aos="fade-left">
                The future of vision-based systems is driven by AI and machine learning. 3D vision, augmented reality (AR), and edge computing are expanding capabilities, enabling more precise measurements, real-time processing, and new applications in robotics, manufacturing, and beyond.
            </p>
            <p className="mb-6 text-lg" data-aos="fade-left" data-aos-delay="100">
                As technology evolves, vision-based systems are becoming more accessible and versatile, benefiting organizations of all sizes and driving innovation across sectors.
            </p>
            <h2 className="text-2xl font-semibold text-[#2467aa] mb-4" data-aos="fade-right">
                Conclusion
            </h2>
            <p className="mb-6 text-lg" data-aos="fade-up">
                Vision-based systems are integral to modern automation and manufacturing, providing high-precision monitoring and analysis. With ongoing advancements, their capabilities and applications will continue to grow, making them essential for innovation and efficiency in multiple industries.
            </p>
        </div>
    );
}