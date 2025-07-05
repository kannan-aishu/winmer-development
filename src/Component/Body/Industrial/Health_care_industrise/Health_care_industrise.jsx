import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Main from './main.png';
import Img1 from './1.png';
import Img2 from './2.png';
import Img3 from './3.png';
import Img4 from './4.png';
import Img5 from './5.png';
import Img6 from './6.png';

// Additional feature images
import AssetLifecycle from './c1.png';
import Procurement from './c2.png';
import AssetFloorPlan from './c3.png';
import VisitorManagement from './c4.png';
import AssetTracking from './c5.png';
import IoT from './c6.png';

// Add a last-side image
import LastImg from './fo.png';
import MedicalEquipmentImg from './210-2103570_transparent-healthcare-caduceus-medicine.png';

const features = [
  {
    title: "eHealthcare Work Order Management",
    desc: "Innomaint’s Medical work order management software provides an easy-to-use online portal to raise asset defects or shortcomings in essential health care facility functions. The requester can easily track the status of work requests to ensure maintenance tasks are completed efficiently and effectively.",
    img: Img1,
  },
  {
    title: "Medical Equipment Preventive Maintenance",
    desc: "Regular Preventive maintenance is essential to mitigate the risk of unexpected breakdowns and prolong equipment life for significant impact on the bottom line. Set up inspection, approval, monitoring, calibration tasks, etc. that unfold at regular intervals based on calendar time or equipment usage.",
    img: Img2,
  },
  {
    title: "Hospital & BioMedical Asset Management",
    desc: "An end to end asset lifecycle management plan helps hospitals make the best use of highly specialized medical assets from procurement to recycling for improving patient outcomes. With Innomaint, you have a clear and accurate log of maintenance operations and asset usage details to ensure regulatory compliance.",
    img: Img3,
  },
  {
    title: "Mobile App",
    desc: "Assign, accept tasks and update progress on work orders from anywhere. With loads of equipment, the mobile app helps techs easily locate the assets and retrieve equipment service history with a simple QR code scan. It lets maintenance managers know the big picture on maintenance from remote locations.",
    img: Img4,
  },
  {
    title: "AMC/CMC Management",
    desc: "A Healthcare facility to manage maintenance in-house or entrust it to third parties with the same level of visibility into operations using Innomaint. Track payments, renewals, services, and devices covered with AMCs in a few clicks. Get accurate and reliable invoices.",
    img: Img5,
  },
  {
    title: "Dashboard & Reports",
    desc: "Focus on metrics you consider most important for healthcare delivery on a single screen. Infer total asset downtime, costs, outstanding work orders, unscheduled work count, and more. Drill-down customized reports with data on any aspect of maintenance.",
    img: Img6,
  },
];

const additionalFeatures = [
  {
    title: "Asset LifeCycle Management",
    desc: "An end-to-end approach to asset management from procurement to recycling.",
    img: AssetLifecycle,
  },
  {
    title: "Procurement Management",
    desc: "An integrated web portal to procure assets & spares by comparing quotes.",
    img: Procurement,
  },
  {
    title: "Interactive Asset Floor Plan",
    desc: "Interactive visual display of floor layout for quick asset identification.",
    img: AssetFloorPlan,
  },
  {
    title: "Visitor Management",
    desc: "Automated visitor check-in & check-out process for reduced wait times.",
    img: VisitorManagement,
  },
  {
    title: "Precise Asset Tracking",
    desc: "Using Bluetooth/RFID sensors for best asset tracking utilization.",
    img: AssetTracking,
  },
  {
    title: "IoT Based Energy Monitoring",
    desc: "Get real-time data on energy and water consumption; measure air quality via mobile.",
    img: IoT,
  },
];

export default function Health_care_industrise() {
  useEffect(() => {
    // Responsive AOS config for mobile and desktop
    const isMobile = window.innerWidth < 640;
    AOS.init({
      duration: isMobile ? 600 : 900, // faster on mobile
      once: true,
      easing: 'ease-in-out',
      mirror: false,
      offset: isMobile ? 20 : 80, // trigger earlier on mobile
    });
  }, []);

  return (
    <div>
      <img src={Main} className="w-full" alt="Healthcare Main" />
      <div className="mx-auto py-10 px-2 sm:px-8 bg-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2467aa] mb-10 text-center" data-aos="fade-down">
          Empower Your Hospital Maintenance Operations with <br />
          <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-sky-600">Powerful Features</span>
        </h1>
        <div className="space-y-10 sm:space-y-16">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              data-aos="fade-up"
              data-aos-delay={Math.min(idx * 120, 400)}
            >
              <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full max-w-xs rounded-xl shadow-lg object-cover"
                  data-aos="zoom-in"
                  data-aos-delay={Math.min(idx * 120 + 100, 500)}
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-[#2467aa] mb-2" data-aos="fade-right" data-aos-delay={Math.min(idx * 120 + 150, 600)}>{feature.title}</h2>
                <p className="text-base sm:text-lg text-gray-700" data-aos="fade-left" data-aos-delay={Math.min(idx * 120 + 200, 700)}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Cards */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2467aa] mt-16 sm:mt-20 mb-6 sm:mb-8 text-center" data-aos="fade-down">
          Additional Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-10">
          {additionalFeatures.map((item, idx) => (
            <div
              key={item.title}
              className="bg-sky-50 rounded-xl shadow-lg flex flex-col items-center p-4 sm:p-6 text-center hover:shadow-2xl transition-shadow"
              data-aos="flip-left"
              data-aos-delay={Math.min(idx * 100, 400)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-4"
                data-aos="zoom-in"
                data-aos-delay={Math.min(idx * 100 + 50, 500)}
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#2467aa] mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Medical Equipment Maintenance Software Section */}
        <div className="w-full max-w-5xl mx-auto mt-10 sm:mt-16 mb-8 sm:mb-10 flex flex-col md:flex-row items-center gap-6 sm:gap-10 bg-sky-50 rounded-xl shadow-lg p-4 sm:p-8">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2467aa] mb-4" data-aos="fade-right">
              Medical Equipment Maintenance Software for Every Healthcare Environment
            </h2>
            <ul className="list-disc ml-5 sm:ml-6 text-sm sm:text-base text-gray-700 mb-4" data-aos="fade-up" data-aos-delay="100">
              <li>Hospital & Healthcare facility</li>
              <li>Biomedical equipment management</li>
              <li>Precise Asset Tracking</li>
              <li>Medical device manufacturing</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 mb-2" data-aos="fade-up" data-aos-delay="200">
              With mounting pressure on Health infrastructure, precise asset tracking has become essential to effective maintenance. Real Time Location Systems (RTLS) using BLE/RFID/QR codes can:
            </p>
            <ul className="list-disc ml-5 sm:ml-6 text-sm sm:text-base text-gray-700" data-aos="fade-up" data-aos-delay="300">
              <li>Help staff know the working condition of asset in a wireless set-up.</li>
              <li>Eliminate time wasted on search of medical equipment in constant movement.</li>
              <li>Protect key assets from theft along with Fixed Asset Auditing.</li>
              <li>Help paramedical staff in figuring out bay level or room level accuracy.</li>
              <li>Ensure cost efficient tracking from all smartphones at 2x speeds</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left" data-aos-delay="200">
            <img
              src={MedicalEquipmentImg}
              alt="Medical Equipment"
              className="w-full max-w-xs sm:max-w-md rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Last side image */}
        <div className="w-full flex justify-center mt-8 sm:mt-12">
          <img
            src={LastImg}
            alt="Healthcare Additional"
            className="w-full max-w-xs sm:max-w-2xl rounded-xl shadow-lg object-cover"
            data-aos="fade-up"
            data-aos-delay="100"
          />
        </div>
      </div>
    </div>
  );
}