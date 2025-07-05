import React from 'react';

// Example image imports (replace with your actual image paths)
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';

export default function Powder_coating_plant() {
    return (
        <div className="w-[90%]  mx-auto py-10 px-4 sm:px-8 text-gray-800">
            <h1 className="text-4xl font-bold text-[#2467aa] mb-12 text-center" data-aos="fade-down">
                Powder Coating Plant
            </h1>

            {/* 1. Fully Automatic Powder Coating Plant */}
            <section className="mb-16 flex flex-col md:flex-row items-center gap-8" data-aos="fade-up">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold text-[#2467aa] mb-4">
                        1. Fully Automatic Powder Coating Plant
                    </h2>
                    <p className="mb-2">
                        The Fully Automatic Powder Coating Plant efficiently combines surface preparation, coating application, and heat curing to create a durable finish for both metal and non-metal substrates. This advanced system ensures high precision and minimal waste, making it ideal for various production needs.
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Automated Recovery System for zero waste.</li>
                        <li>Conveyorized curing ovens with customizable heating options.</li>
                        <li>Motorized conveyor systems for efficient material handling.</li>
                        <li>High powder recovery rate of up to 95-96%.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={img1} alt="Fully Automatic Powder Coating Plant" className="rounded-lg shadow-lg w-[90%] max-w-md" />
                </div>
            </section>

            {/* 2. Conveyorised Powder Coating Plant */}
            <section className="mb-16 flex flex-col md:flex-row-reverse items-center gap-8" data-aos="fade-up" data-aos-delay="100">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold text-[#2467aa] mb-4">
                        2. Conveyorised Powder Coating Plant
                    </h2>
                    <p className="mb-2">
                        The WINMAR Industries Conveyorised Powder Coating Plant is designed for high-volume operations, utilizing continuous overhead conveyor systems to ensure efficient and uniform coating. This plant can be customized to meet specific production needs, optimizing the coating process for various applications.
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Fully automatic powder coating booth with advanced recovery systems.</li>
                        <li>Versatile conveyor options, including motorized and power-free systems.</li>
                        <li>Conveyorized curing ovens with multiple heating options available.</li>
                        <li>High powder recovery rate of up to 95-96%.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={img2} alt="Conveyorised Powder Coating Plant" className="rounded-lg shadow-lg w-[90%] max-w-md" />
                </div>
            </section>

            {/* 3. Batch Type Powder Coating Plant */}
            <section className="mb-16 flex flex-col md:flex-row items-center gap-8" data-aos="fade-up" data-aos-delay="200">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold text-[#2467aa] mb-4">
                        3. Batch Type Powder Coating Plant
                    </h2>
                    <p className="mb-2">
                        The WINMAR Industries Batch Type Powder Coating Plant offers a complete range of modular powder coating booths and systems, ideal for both manual and fully automatic applications. With years of experience in design and manufacturing, we ensure maximum recovery of oversprayed powder through advanced multicyclone recovery systems. Our cartridge-type booths can achieve recovery rates of nearly 99%, while the ductless construction minimizes cleaning time.
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Batch-type powder coating booth with multicyclone recovery system.</li>
                        <li>Options for bag filter and cartridge filter for enhanced efficiency.</li>
                        <li>Versatile powder curing ovens available with multiple heating options.</li>
                        <li>Manual and motorized trolley systems for efficient material handling.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={img3} alt="Batch Type Powder Coating Plant" className="rounded-lg shadow-lg w-[90%] max-w-md" />
                </div>
            </section>

            {/* 4. Furniture Powder Coating Plant */}
            <section className="mb-16 flex flex-col md:flex-row-reverse items-center gap-8" data-aos="fade-up" data-aos-delay="300">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold text-[#2467aa] mb-4">
                        4. Furniture Powder Coating Plant
                    </h2>
                    <p className="mb-2">
                        WINMAR Industries provides a specialized powder coating plant tailored for furniture manufacturers. This plant is perfect for coating a variety of wood-based products, including office furniture, cabinets, and store fixtures. It provides exceptional design flexibility, allowing for a range of finishes that can complement any aesthetic. The durable coating not only enhances the visual appeal of the products but also offers robust protection against chips, spills, and scratches, ensuring longevity and maintaining a pristine appearance. With its high-performance capabilities, this plant is an excellent choice for manufacturers seeking quality and durability in their wood coatings.
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Electrostatic Powder Coating Gun</li>
                        <li>Powder Recovery Booth with up to 95-96% recovery</li>
                        <li>Multiple power & heat source options (Electric, Gas, etc.)</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={img4} alt="Furniture Powder Coating Plant" className="rounded-lg shadow-lg w-[90%] max-w-md" />
                </div>
            </section>

            {/* 5. Aluminium Sections Powder Coating Plant */}
            <section className="mb-16 flex flex-col md:flex-row items-center gap-8" data-aos="fade-up" data-aos-delay="400">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold text-[#2467aa] mb-4">
                        5. Aluminium Sections Powder Coating Plant
                    </h2>
                    <p className="mb-2">
                        The WINMAR Industries Aluminium Sections Powder Coating Plant is designed specifically for applying durable finishes to aluminium sections. This method surpasses anodizing and painting, providing a thicker, more resilient coating that is less prone to peeling or chipping. Our environmentally friendly powder coating process utilizes electrostatically charged paint for superior adhesion and a wide range of color options.
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Electrostatic Powder Coating Gun for precise application.</li>
                        <li>Powder Recovery Booth for efficient overspray management.</li>
                        <li>Powder Curing Oven with various heating options available.</li>
                        <li>Heavy Duty and Overhead Trolleys for seamless material handling.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={img5} alt="Aluminium Sections Powder Coating Plant" className="rounded-lg shadow-lg w-[90%] max-w-md" />
                </div>
            </section>

            {/* 6. Almirah Powder Coating Plant */}
            <section className="mb-16 flex flex-col md:flex-row-reverse items-center gap-8" data-aos="fade-up" data-aos-delay="500">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold text-[#2467aa] mb-4">
                        6. Almirah Powder Coating Plant
                    </h2>
                    <p className="mb-2">
                        As a leading manufacturer of Almirah Powder Coating Plants, WINMAR Industries is committed to delivering high-quality solutions tailored to your specific needs. Our plants are constructed using premium raw materials and are available in automatic, semi-automatic, or manual configurations. We emphasize timely delivery, exceptional after-sales support, and competitive pricing.
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Electrostatic Powder Coating Gun for precise application.</li>
                        <li>Powder Recovery Booth to maximize efficiency.</li>
                        <li>Powder Curing Oven with customizable heating options.</li>
                        <li>Heavy Duty and Overhead Trolleys for effective material handling.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={img6} alt="Almirah Powder Coating Plant" className="rounded-lg shadow-lg w-[90%] max-w-md" />
                </div>
            </section>

            {/* Why Choose WINMAR Industries */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold text-[#2467aa] mb-10 text-center">
                    Why Choose WINMAR Industries For Your Powder Coating Plant?
                </h2>
                {/* 1 */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-10">
                    <div className="w-full md:w-2/3">
                        <li
                            className="text-lg mb-2 list-none"
                            data-aos="fade-right"
                            data-aos-delay="0"
                        >
                            <b>Proven Expertise:</b> WINMAR Industries is an ISO 9001:2015 certified company with over 30 years of experience in designing and manufacturing heating and surface finishing equipment. We specialize in creating tailored solutions for a variety of industrial applications, including powder coating plants, ensuring that our products meet the highest standards of quality and performance.
                        </li>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center" data-aos="fade-left" data-aos-delay="0">
                        <img src={img1} alt="Proven Expertise" className="rounded-lg shadow-lg w-[90%] max-w-xs" />
                    </div>
                </div>
                {/* 2 */}
                <div className="flex flex-col-reverse md:flex-row  items-center gap-8 mb-10">
                    <div className="w-full md:w-2/3">
                        <li
                            className="text-lg mb-2 list-none"
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            <b>Commitment to Quality:</b> Our unwavering focus on quality and customer satisfaction drives everything we do. We utilize high-quality raw materials and adhere to stringent quality control norms to guarantee the reliability and durability of our powder coating plants.
                        </li>
                    </div>
                    <div className="w-full md:w-1/3 flex  justify-center" data-aos="fade-left" data-aos-delay="100">
                        <img src={img2} alt="Commitment to Quality" className="rounded-lg shadow-lg w-[90%] max-w-xs" />
                    </div>
                </div>
                {/* 3 */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-10">
                    <div className="w-full md:w-2/3">
                        <li
                            className="text-lg mb-2 list-none"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            <b>Continuous Innovation:</b> At WINMAR Industries, innovation is a core value. We are dedicated to ongoing research and development to enhance our products and services, ensuring that we remain at the forefront of industry advancements. Our commitment to improvement enables us to exceed customer expectations and provide state-of-the-art solutions.
                        </li>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center" data-aos="fade-left" data-aos-delay="200">
                        <img src={img3} alt="Continuous Innovation" className="rounded-lg shadow-lg w-[90%] max-w-xs" />
                    </div>
                </div>
                {/* 4 */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-10">
                    <div className="w-full md:w-2/3">
                        <li
                            className="text-lg mb-2 list-none"
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >
                            <b>Global Reach:</b> With a strong presence in both domestic and international markets, WINMAR Industries exports its products to numerous countries, including the USA, UAE, Saudi Arabia, and many more. Our global expansion reflects our commitment to providing quality products and prompt services, fostering long-term relationships with our customers worldwide.
                        </li>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center" data-aos="fade-left" data-aos-delay="300">
                        <img src={img4} alt="Global Reach" className="rounded-lg shadow-lg w-[90%] max-w-xs" />
                    </div>
                </div>
                {/* 5 */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-10">
                    <div className="w-full md:w-2/3">
                        <li
                            className="text-lg mb-2 list-none"
                            data-aos="fade-right"
                            data-aos-delay="400"
                        >
                            <b>Tailored Solutions:</b> We understand that every customer has unique needs. Our powder coating plants can be customized to suit various specifications, whether you require automatic, semi-automatic, or manual systems. This flexibility allows us to deliver solutions that align with your specific production requirements.
                        </li>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center" data-aos="fade-left" data-aos-delay="400">
                        <img src={img5} alt="Tailored Solutions" className="rounded-lg shadow-lg w-[90%] max-w-xs" />
                    </div>
                </div>
                {/* 6 */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="w-full md:w-2/3">
                        <li
                            className="text-lg mb-2 list-none"
                            data-aos="fade-right"
                            data-aos-delay="500"
                        >
                            <b>Robust After-Sales Support:</b> Our dedication to customer satisfaction extends beyond the sale. WINMAR Industries offers comprehensive after-sales service and support, ensuring that your powder coating plant operates efficiently and effectively throughout its lifecycle.
                        </li>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center" data-aos="fade-left" data-aos-delay="500">
                        <img src={img6} alt="Robust After-Sales Support" className="rounded-lg shadow-lg w-[90%] max-w-xs" />
                    </div>
                </div>
            </section>
        </div>
    );
}