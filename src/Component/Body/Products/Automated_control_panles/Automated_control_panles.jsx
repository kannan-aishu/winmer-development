import React, { useEffect } from 'react';
import AOS from 'aos';
import Main from './13.png';
import Sin from './Screenshot-32.png'
import 'aos/dist/aos.css';

export default function Automated_control_panles() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="w-full bg-white">
      <img
        src={Main}
        alt="Automation Control Panel"
        className="shadow-lg w-full object-cover"
        style={{ maxHeight: "500px" }}
        data-aos="zoom-in"
      />
      <div className="w-full py-10 px-4">
        <h1
          className="text-4xl md:text-5xl font-bold text-[#2467aa] mb-8 text-center drop-shadow"
          data-aos="fade-down"
        >
          Automation Control Panels
        </h1>
        <div className="w-full flex flex-col md:flex-row md:items-start gap-6 mb-8">
          <img
            src={Sin}
            alt=""
            className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
            data-aos="fade-right"
          />
          <section className="w-full md:w-1/2" data-aos="fade-up">
            <p className="text-xl text-gray-700 mb-6">
              Automation control panels are integral systems used in industries to automate processes, machinery, and entire operations. These panels allow businesses to control, monitor, and optimize various electrical, mechanical, and automated functions, ensuring efficiency, safety, and reliability. Let’s dive deeper into the essential aspects of these control panels, including their components, functions, applications, and benefits.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              Automation control panels are electrical panels that house various components and devices used to control industrial processes, machinery, or entire systems. They allow automation of operations, reducing the need for manual intervention and improving the efficiency of operations.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              These panels typically include a combination of programmable logic controllers (PLCs), sensors, safety devices, input/output systems, and various relays or contactors that work together to control machinery or systems based on real-time data and programmed instructions.
            </p>
          </section>
        </div>

        <section className="mb-8 w-full max-w-2xl mx-auto" data-aos="fade-right">
          <h2 className="text-2xl font-semibold text-[#2467aa] mb-4">How Automation Control Panels Work</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3 pl-4 text-lg">
            <li>
              <span className="font-semibold">Input Acquisition:</span> The system receives data from various sensors (temperature, pressure, level, etc.) that measure the current state of the process.
            </li>
            <li>
              <span className="font-semibold">Processing:</span> The data is sent to the PLC, which processes the input data according to pre-programmed instructions.
            </li>
            <li>
              <span className="font-semibold">Decision Making:</span> Based on the processed data, the PLC makes decisions (e.g., turn on a motor, adjust speed, open a valve) to control the process or machinery.
            </li>
            <li>
              <span className="font-semibold">Output Control:</span> The PLC sends control signals to actuators, motors, or valves via the I/O modules. The components then carry out the actions necessary to maintain or adjust the process.
            </li>
            <li>
              <span className="font-semibold">Monitoring and Feedback:</span> The operator uses the HMI to monitor real-time data and system performance, adjust settings, or receive alerts on system faults or required actions.
            </li>
          </ol>
        </section>

        <section className="w-full max-w-2xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-[#2467aa] mb-4">Conclusion</h2>
          <p className="text-lg text-gray-700">
            Automated control panels are essential components in modern industrial systems, providing automation, monitoring, and control over complex processes. They integrate hardware, software, and sensors to ensure systems operate efficiently, safely, and reliably. As industries continue to evolve and embrace automation, the role of control panels will become even more critical in optimizing operations and reducing costs.
          </p>
        </section>
      </div>
    </div>
  );
}