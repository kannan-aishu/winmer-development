import React from 'react';
import Main from './main.jpg';
import cementMain from './1.jpg'; // Top banner image
import cementHydraulic from './2.jpg'; // Hydraulic cement image
import cementNonHydraulic from './3.avif'; // Non-hydraulic cement image

export default function Cement_Industries() {
    return (
        <div className="w-full mx-auto py-10 bg-white shadow-lg">
            {/* Top full-width image */}
            <div className="w-full mb-8" data-aos="fade-down">
                <img
                    src={Main}
                    alt="Cement Industry"
                    className="w-full  object-cover object-center shadow"
                />
            </div>
            <div className='w-full mx-auto py-10 bg-white max-w-7xl'>
                <h1 className="text-4xl md:text-5xl font-bold text-[#2467aa] mb-12 text-center" data-aos="fade-down" data-aos-delay="100">
                    Cement Industries
                </h1>
                {/* Cement Main Section - IMAGE RIGHT */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-12" data-aos="fade-up" data-aos-delay="200">
                    <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                        <img
                            src={cementMain}
                            alt="Cement"
                            className="w-full max-w-md rounded-xl shadow-lg object-cover"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="text-xl md:text-2xl mb-0">
                            <b>Cement</b> is a binder, a chemical substance used for construction that sets, hardens, and adheres to other materials to bind them together. Cement is seldom used on its own, but rather to bind sand and gravel aggregate together. Cement mixed with fine aggregate produces mortar for masonry, or with sand and gravel, produces concrete. Concrete is the most widely used material in existence and is behind only water as the planet's most-consumed resource.
                        </p>
                    </div>
                </div>
                {/* Hydraulic Cement Section - IMAGE RIGHT */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-12" data-aos="fade-up" data-aos-delay="300">
                    <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                        <img
                            src={cementHydraulic}
                            alt="Hydraulic Cement"
                            className="w-full max-w-md rounded-xl shadow-lg object-cover"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold text-[#2467aa] mb-4">Hydraulic Cement</h2>
                        <p className="text-xl md:text-2xl mb-4">
                            Hydraulic cements (e.g., Portland cement) set and become adhesive through a chemical reaction between the dry ingredients and water. The chemical reaction results in mineral hydrates that are not very water-soluble. This allows setting in wet conditions or under water and further protects the hardened material from chemical attack. The chemical process for hydraulic cement was found by ancient Romans who used volcanic ash (pozzolana) with added lime (calcium oxide).
                        </p>
                        <ul className="list-disc ml-6 mb-4 text-xl md:text-2xl marker:text-[#2467aa]">
                            <li><b>C3S:</b> alite (3CaO·SiO2)</li>
                            <li><b>C2S:</b> belite (2CaO·SiO2)</li>
                            <li><b>C3A:</b> tricalcium aluminate (3CaO·Al2O3)</li>
                            <li><b>C4AF:</b> brownmillerite (4CaO·Al2O3·Fe2O3)</li>
                        </ul>
                        <p className="text-xl md:text-2xl">
                            The silicates are responsible for the cement's mechanical properties. The tricalcium aluminate and brownmillerite are essential for the formation of the liquid phase during the sintering (firing) process of clinker at high temperature in the kiln. The chemistry of these reactions is not completely clear and is still the object of research.
                        </p>
                    </div>
                </div>
                {/* Non-hydraulic Cement Section - IMAGE RIGHT */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-12" data-aos="fade-up" data-aos-delay="400">
                    <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                        <img
                            src={cementNonHydraulic}
                            alt="Non-hydraulic Cement"
                            className="w-full max-w-md rounded-xl shadow-lg object-cover"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold text-[#2467aa] mb-4">Non-hydraulic Cement</h2>
                        <p className="text-xl md:text-2xl mb-4">
                            A less common form of cement is non-hydraulic cement, such as slaked lime (calcium oxide mixed with water), which hardens by carbonation in contact with carbon dioxide, which is present in the air (~ 412 vol. ppm ≃ 0.04 vol. %). First calcium oxide (lime) is produced from calcium carbonate (limestone or chalk) by calcination at temperatures above 825 °C (1,517 °F) for about 10 hours at atmospheric pressure.
                        </p>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <div className="font-mono text-lg text-gray-700">
                                Ca(OH)₂ + CO₂ → CaCO₃ + H₂O<br />
                                CaO + H₂O → Ca(OH)₂<br />
                                CaCO₃ → CaO + CO₂
                            </div>
                        </div>
                        <p className="text-xl md:text-2xl">
                            This reaction is slow, because the partial pressure of carbon dioxide in the air is low (~ 0.4 millibar). The carbonation reaction requires that the dry cement be exposed to air, so the slaked lime is a non-hydraulic cement and cannot be used under water. This process is called the lime cycle.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}