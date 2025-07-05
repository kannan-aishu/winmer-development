import React from 'react';
import assetm from './1.png';
import workorder from './2.png';
import facility from './3.png';
import iot from './4.png';
import condition from './5.png';
import audit from './6.png';
import equipment from './7.png';
import mobapp from './8.png';
import doc from './9.png';
import dashboard from './10.png';
import integration from './11.png';
import Fooder from './fooder.png';
import Main from './main.png'

// Add your benefit icons/images here if you have them
import benefit1 from './q1.png';
import benefit2 from './q2.png';
import benefit3 from './q3.png';
import benefit4 from './q4.png';
import benefit5 from './q5.png';
import benefit6 from './q6.png';
import benefit7 from './q7.png';

// Add your trusted organization logos here
import org1 from './w1.png';
import org2 from './w2.png';
import org3 from './w3.png';
import org4 from './w4.png';
import org5 from './w5.png';

const trustedOrgs = [
    { img: org1, alt: "USDA" },
    { img: org2, alt: "FDA" },
    { img: org3, alt: "IFS" },
    { img: org4, alt: "ISO 22000" },
    { img: org5, alt: "ISO 22000" }
];

const benefits = [
    {
        title: "Clear Work Instructions",
        img: benefit1,
        desc: "Let all stakeholders know the standard operating procedures with easily accessible and understandable multimedia digital checklists."
    },
    {
        title: "Boost Efficiency",
        img: benefit2,
        desc: "Automates manual processes, such as scheduling maintenance checks and generating reports, saving you time and resources."
    },
    {
        title: "Trigger Work Orders at the Right Time",
        img: benefit3,
        desc: "Let work orders get triggered automatically upon preset conditions based on vibration, temperature, power, pressure, or humidity readings."
    },
    {
        title: "Instant Failure Alerts",
        img: benefit4,
        desc: "Bring food processing, preservation, packing equipment etc., that fails back into operation quickly with immediate IoT based mobile alerts for quick notice."
    },
    {
        title: "Reduce Costs",
        img: benefit5,
        desc: "By identifying potential issues early on and automating maintenance, you can avoid costly downtime and repair expenses."
    },
    {
        title: "Deliver Consistent Quality",
        img: benefit6,
        desc: "Quickly identify potential issues by automating approval workflows, tracking quality control measures, and including testing and inspection results."
    },
    {
        title: "Stay Up-to-Date on Regulations",
        img: benefit7,
        desc: "Stay compliant with changing regulations and requirements, reducing the risk of fines or legal action."
    }
];

const features = [
    {
        heading: "Asset Management",
        img: assetm,
        content: (
            <>
                <p>
                    Asset management in food manufacturing industries helps to track, maintain, and optimize the equipment, machinery, and physical assets used in food production processes. By ensuring proper maintenance, calibration, and traceability of assets, Innomaint asset management enhances food safety, minimizes contamination risks, ensures regulatory compliance, reduces downtime through preventive maintenance, and improves overall operational efficiency.
                </p>
                <ul className="list-disc ml-6 mt-2 marker:text-[#2467aa]">
                    <li>Helps maintain equipment in optimal condition</li>
                    <li>Easier to identify the specific asset involved</li>
                    <li>Minimizes the risk of equipment breakdowns</li>
                </ul>
            </>
        )
    },
    {
        heading: "Work Order Management",
        img: workorder,
        content: (
            <>
                <p>
                    Work order management in food manufacturing industries helps to plan, execute, and document maintenance and operational tasks for equipment, facilities, and processes. By providing structured workflows, assigning tasks to appropriate personnel, ensuring timely responses to issues, and documenting maintenance activities.
                </p>
                <ul className="list-disc ml-6 mt-2 marker:text-[#2467aa]">
                    <li>Enable quick response to issues</li>
                    <li>Assign tasks to appropriate personnel</li>
                    <li>Ensures that necessary corrective actions are taken</li>
                </ul>
            </>
        )
    },
    {
        heading: "Facility Management",
        img: facility,
        content: (
            <>
                <p>
                    Food safety management software facility management enables the food & beverage industry at many locations with multiple facilities to oversee its complete Asset and facility management, Repair, and Maintenance program. It automates repetitive operations and effectively using resources enable facilities to operate at high productivity and efficiency levels.
                </p>
                <ul className="list-disc ml-6 mt-2 marker:text-[#2467aa]">
                    <li>Helps management make specific decisions for your facility</li>
                    <li>Enhance team collaboration and workflow efficiency</li>
                    <li>Helps to utilize all spaces effectively</li>
                </ul>
            </>
        )
    },
    {
        heading: "IoT Asset & Energy Monitoring",
        img: iot,
        content: (
            <>
                <p>
                    IoT sensors track equipment maintenance and usage data to help organizations monitor their food processing continuously and get better visibility of their energy consumption and wastage. They can keep track of the storage and transport conditions and ensure that they’re within safe windows.
                </p>
                <ul className="list-disc ml-6 mt-2 marker:text-[#2467aa]">
                    <li>Ensure that the food is safe to consume</li>
                    <li>Track and manage energy consumption</li>
                    <li>Make data-centric decisions and improve energy efficiency</li>
                </ul>
            </>
        )
    },
    {
        heading: "Condition Based Maintenance",
        img: condition,
        content: (
            <>
                <p>
                    Perform maintenance only when it is genuinely necessary as indicated by sensors fitted to heavy equipment so that utilization rates of equipment is maximum for production cycles.
                </p>
                <ul className="list-disc ml-6 mt-2 marker:text-[#2467aa]">
                    <li>Reduce unnecessary and frequent routine maintenance expenses</li>
                    <li>Predict failures before they occur intelligently</li>
                    <li>Reduce manual intervention for monitoring tasks</li>
                </ul>
            </>
        )
    },
    {
        heading: "Audit Management",
        img: audit,
        content: (
            <>
                <p>
                    Perform digital audits accurately, error-free and at lightning speeds rehearsing for external food safety audits and inspections from the comfort of your work cubicle.
                </p>
                <ul className="list-disc ml-6 mt-2 marker:text-[#2467aa]">
                    <li>Exclusive workflow for Fixed Asset Auditing</li>
                    <li>Easily trace the source of lag in quality</li>
                    <li>Complete freedom from paper records</li>
                </ul>
            </>
        )
    },
    {
        heading: "Equipment Tracking",
        img: equipment,
        content: (
            <>
                <p>
                    Innomaint tracks equipment maintenance and usage data, helps to create and schedule preventive maintenance tasks. Preventive maintenance involves regularly scheduled inspections and maintenance tasks designed to detect and correct potential problems before they cause downtime or damage to equipment.
                </p>
                <ul className="list-disc ml-6 mt-2 marker:text-[#2467aa]">
                    <li>Reduce downtime and extend the life of equipment</li>
                    <li>Detect and correct potential problems before they cause downtime</li>
                    <li>Reduce waste and prevent production delays</li>
                </ul>
            </>
        )
    },
    {
        heading: "Mobile Application",
        img: mobapp,
        content: (
            <>
                <p>
                    Bring out the power of teamwork with clear, timely and effective communication via mobile app and quickly raise service requests via a simple QR code scan.
                </p>
                <ul className="list-disc ml-6 mt-2 marker:text-[#2467aa]">
                    <li>Automatic reporting from the maintenance crew’s mobile device</li>
                    <li>Real-time notifications on automatic work assignment and alerts</li>
                    <li>QR Code scan to access the asset service details instantly</li>
                </ul>
            </>
        )
    },
    {
        heading: "Documentation Management",
        img: doc,
        content: (
            <>
                <p>
                    InnoMaint provides a central repository for all safety-related documentation, such as checklists, SOPs, and training records. Proper documentation management can help organizations ensure regulatory compliance, reduce maintenance costs, and improve operational efficiency.
                </p>
                <ul className="list-disc ml-6 mt-2 marker:text-[#2467aa]">
                    <li>Ensure consistency and accuracy in maintenance procedures</li>
                    <li>Accurate and up-to-date maintenance records</li>
                    <li>Help demonstrate compliance with regulatory requirements</li>
                </ul>
            </>
        )
    },
    {
        heading: "DashBoard & Real Time Data",
        img: dashboard,
        content: (
            <>
                <p>
                    The Dashboard provides real-time visibility into operations and maintenance status of assets. View all KPI metrics such as MTTR, MTBF, SLA compliances & much more.
                </p>
                <ul className="list-disc ml-6 mt-2 marker:text-[#2467aa]">
                    <li>Real-time reporting and analytics for monitoring safety compliance</li>
                    <li>Customizable dashboards for tracking safety metrics and KPIs</li>
                    <li>Know the count of outstanding tasks at any moment</li>
                </ul>
            </>
        )
    },
    {
        heading: "Integration with other systems",
        img: integration,
        content: (
            <>
                <p>
                    InnoMaint can integrate with other systems, such as inventory management and ERP systems, can help reduce manual data entry and streamline processes. This can save time and reduce the risk of errors.
                </p>
                <ul className="list-disc ml-6 mt-2 marker:text-[#2467aa]">
                    <li>Streamline workflows, save time, and reduce errors</li>
                    <li>More complete understanding of equipment performance</li>
                </ul>
            </>
        )
    }
];

export default function Food_Beverage_industries() {
    return (
        <div className='w-full flex flex-col items-center'>
            <img src={Main} alt="" className='w-full' />
            {/* Top trusted organizations section */}
            <div className="w-full bg-sky-100 py-8 px-4">
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    <p className="text-lg md:text-xl font-semibold text-[#2467aa] mb-4 text-center">
                        InnoMaint FSMS helps your organization meet stringent food quality standards such as USDA, FDA, IFS, ISO 22000 group etc and ensure food safety throughout the food supply chain.
                    </p>
                    <h2 className="text-2xl font-bold text-[#2467aa] mb-4 text-center">Trusted By Organizations</h2>
                    <div className="flex flex-row gap-8 justify-center items-center w-full max-w-2xl">
                        {trustedOrgs.map((org, idx) => (
                            <img
                                key={org.alt}
                                src={org.img}
                                alt={org.alt}
                                className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Top section with sky blue background and benefits cards */}
            <div className="w-full bg-sky-200 py-12 px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-[#2467aa] mb-8 text-center" data-aos="fade-down">
                    How Innomaint FSMS Benefits Food & Beverage Manufacturers
                </h1>
                <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 max-w-6xl items-center justify-center mx-auto">
                    {benefits.map((b, idx) => (
                        <div
                            key={b.title}
                            className="bg-white rounded-xl shadow-lg justify-center flex flex-col items-center p-6 text-center hover:shadow-2xl transition-shadow"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            {b.img && (
                                <img
                                    src={b.img}
                                    alt={b.title}
                                    className="w-20 h-20 object-contain mb-4 mx-auto"
                                />
                            )}
                            <h3 className="text-xl font-bold text-[#2467aa] mb-2">{b.title}</h3>
                            <p className="text-gray-700 text-base">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Features section */}
            <div className="w-full max-w-7xl mx-auto py-10 px-4 sm:px-8 bg-white rounded-xl shadow-lg -mt-8 z-10 relative">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#2467aa] mb-8 text-center" data-aos="fade-down" data-aos-delay="100">
                    Features for Food & Beverage Industry
                </h2>
                {features.map((feature, idx) => (
                    <div
                        key={feature.heading}
                        className={`flex flex-col md:flex-row items-center gap-10 mb-12`}
                        data-aos="fade-up"
                        data-aos-delay={idx * 120}
                    >
                        {/* Alternate image left/right on desktop */}
                        {idx % 2 === 0 ? (
                            <>
                                <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                                    <img
                                        src={feature.img}
                                        alt={feature.heading}
                                        className="w-full max-w-xs rounded-lg shadow-lg object-cover"
                                    />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#2467aa] mb-4">{feature.heading}</h3>
                                    <div className="text-lg">{feature.content}</div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#2467aa] mb-4">{feature.heading}</h3>
                                    <div className="text-lg">{feature.content}</div>
                                </div>
                                <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                                    <img
                                        src={feature.img}
                                        alt={feature.heading}
                                        className="w-full max-w-xs rounded-lg shadow-lg object-cover"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <img
                src={Fooder}
                alt=""
                className="w-full m-9"
                data-aos="fade-up"
                data-aos-delay="200"
            />
        </div>
    );
}