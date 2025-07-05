import React, { useEffect } from 'react';
import AOS from 'aos';
import MultiOperationImg from './1.webp';
import ValveSeatImg from './2.webp';
import FineBoringImg from './3.png';
import MultiSpindleImg from './4.webp';
import FacingCenteringImg from './5.webp';
import FinishMillingImg from './6.jpg';
import SpecialMillingImg from './7.webp';
import Main from './main.webp';
import 'aos/dist/aos.css';

export default function Special_purpose_machineries() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, easing: 'ease-in-out' });
  }, []);

  // Helper for flex section
  const FlexSection = ({ img, alt, children, reverse = false }) => (
    <section
      className={`w-[90%] mx-auto mb-12 flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center bg-white/95 rounded-3xl shadow-2xl border border-blue-100`}
      style={{ gap: '36px', padding: '2.5rem 2rem' }}
      data-aos={reverse ? 'fade-left' : 'fade-right'}
    >
      <img
        src={img}
        alt={alt}
        className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover object-center h-56 md:h-72 transition-transform duration-500 hover:scale-105 mb-6 md:mb-0"
      />
      <div className="w-full md:w-1/2">
        {children}
      </div>
    </section>
  );

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-sky-100 min-h-screen">
      <img src={Main} alt="" className="w-full max-h-96 object-cover object-center  shadow-lg mb-6" />
      <div className="w-full py-10 px-2 md:px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2467aa] mb-10 text-center tracking-tight drop-shadow-lg" data-aos="fade-down">
          Special Purpose Machines (SPM)
        </h1>
        <section className="w-[90%] mx-auto mb-12 bg-white/95 rounded-3xl shadow-xl border border-blue-100 p-8" data-aos="fade-up">
          <p className="text-xl text-gray-700 mb-4">
            Special Purpose Machines, commonly known as SPM machines, are mostly unavailable off the shelf. Unlike other machines, these don't fall in the category of standard manufacturing programs. These machines are specially designed and tailored as per one's specific demand. SPMs are also known as bespoke machines and specially designed machines.
          </p>
          <p className="text-xl text-gray-700 mb-2">
            As the name suggests, special purpose machines are crafted to deal with special tasks such as fulfilling mass demands, producing materials with complete automation and so on. Below, you will find the usage and working of SPM machines, followed by real examples, advantages, and disadvantages.
          </p>
        </section>

        <FlexSection img={MultiOperationImg} alt="Multi-operation Rotary Indexing Machines">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2467aa] mb-3">Multi-operation Rotary Indexing Machines</h2>
          <p className="text-lg text-gray-700 mb-2">
            WINMAR rotary machines are designed for simultaneous execution of multiple operations like drilling, tapping, rough boring, fine boring, spot facing, and reaming. These special-purpose machines are usually handled by a single operator, offering the benefit of the best possible productivity and cycle time.
          </p>
          <p className="text-lg text-gray-700 mb-2 font-semibold">Typical Components:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Cylinder head</li>
            <li>Crank shaft</li>
            <li>Compressor Crankcase</li>
          </ul>
        </FlexSection>

        <FlexSection img={ValveSeatImg} alt="Valve Seat Machining and Valve Guide Reaming" reverse>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2467aa] mb-3">Valve Seat Machining and Valve Guide Reaming</h2>
          <p className="text-lg text-gray-700 mb-2">
            Built for accurate machining of valve seat profiles and valve guides for engine cylinder heads, these machines span a range of diameters for generation and plunging. WINMAR is the first to develop these special purpose machines indigenously in India.
          </p>
          <p className="text-lg text-gray-700 mb-2 font-semibold">Typical Components:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Cylinder head for four-wheelers and heavy vehicles</li>
          </ul>
        </FlexSection>

        <FlexSection img={FineBoringImg} alt="Fine Boring Machines">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2467aa] mb-3">Fine Boring Machines</h2>
          <p className="text-lg text-gray-700 mb-2">
            WINMAR offers fine boring machines of vertical and horizontal configurations with single or multiple spindles. The tool correction feature of these machines works up to an accuracy of 1-micron diameter. Bore tolerances from IT6 to IT8 and surface finish of 0.8 to 1.6μ Ra. can be achieved, depending on the material of the component.
          </p>
          <p className="text-lg text-gray-700 mb-2 font-semibold">Typical Components:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Cylinder head</li>
            <li>Connecting rod</li>
            <li>Cylinder block</li>
          </ul>
        </FlexSection>

        <FlexSection img={MultiSpindleImg} alt="Multi-spindle Machines" reverse>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2467aa] mb-3">Multi-spindle Machines</h2>
          <p className="text-lg text-gray-700 mb-2">
            WINMAR multi-spindle special purpose machines are built to perform multiple operations simultaneously and offer the best-in-class cycle time. Available in horizontal and vertical configurations, they can be provided with rotary or linear indexing. These machines can be used for operations such as drilling, tapping, rough boring, fine boring, reaming, and spot facing.
          </p>
          <p className="text-lg text-gray-700 mb-2 font-semibold">Typical Components:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Crankcase and crankcase cover</li>
            <li>Cylinder head</li>
            <li>Cylinder block</li>
          </ul>
        </FlexSection>

        <FlexSection img={FacingCenteringImg} alt="Facing and Centering Machines">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2467aa] mb-3">Facing and Centering Machines</h2>
          <p className="text-lg text-gray-700 mb-2">
            WINMAR facing and centring machines are available in both vertical and horizontal configurations with slides for plunge or traverse milling. They provide accurate centre and face references for further operations like turning and grinding.
          </p>
          <p className="text-lg text-gray-700 mb-2 font-semibold">Examples:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Two spindle machine for smaller shafts</li>
            <li>Four spindle machine for shafts of larger diameter</li>
          </ul>
          <p className="text-lg text-gray-700 mb-2 font-semibold">Typical Components:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Cam shaft</li>
            <li>Turbine shafts</li>
            <li>Output shafts</li>
            <li>Stub axles</li>
          </ul>
        </FlexSection>

        <FlexSection img={FinishMillingImg} alt="Finish Milling Machines" reverse>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2467aa] mb-3">Finish Milling Machines</h2>
          <p className="text-lg text-gray-700 mb-2">
            For special milling applications, WINMAR offers machines with multi-axis movement and interpolation. By performing the primary material removal task, they save time needed for subsequent operations. WINMAR special milling machines can be offered for operations such as cam lobe milling, profile milling, keyway milling, groove milling, slot milling, and pad milling.
          </p>
          <p className="text-lg text-gray-700 mb-2 font-semibold">Typical Components:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Transmission shaft</li>
            <li>Gear shift drum</li>
            <li>Crank shaft</li>
            <li>CRI nozzle body</li>
          </ul>
        </FlexSection>

        <FlexSection img={SpecialMillingImg} alt="Special Milling Machines">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2467aa] mb-3">Special Milling Machines</h2>
          <p className="text-lg text-gray-700 mb-2">
            For special milling applications, WINMAR offers machines with multi-axis movement and interpolation. By performing the primary material removal task, they save time needed for subsequent operations. WINMAR special milling machines can be offered for operations such as cam lobe milling, profile milling, keyway milling, groove milling, slot milling, and pad milling.
          </p>
          <p className="text-lg text-gray-700 mb-2 font-semibold">Typical Components:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Transmission shaft</li>
            <li>Gear shift drum</li>
            <li>Crank shaft</li>
            <li>CRI nozzle body</li>
          </ul>
        </FlexSection>
      </div>
    </div>
  );
}